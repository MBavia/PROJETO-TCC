from flask import Flask, request, session, render_template
from flask_socketio import SocketIO, emit
from google import genai
from google.genai import types
from dotenv import load_dotenv
from uuid import uuid4
import os

load_dotenv()

# --- Função para carregar um prompt de um arquivo (VERSÃO CORRIGIDA) ---
def carregar_prompt(nome_arquivo):
    """Lê o conteúdo de um arquivo de prompt e o retorna como uma string."""
    try:
        # --- MUDANÇA PRINCIPAL AQUI ---
        # 1. Pega o caminho absoluto do diretório onde o app.py está.
        base_dir = os.path.dirname(os.path.abspath(__file__))
        # 2. Junta esse caminho absoluto com a pasta 'prompts' e o nome do arquivo.
        caminho_completo = os.path.join(base_dir, 'prompts', nome_arquivo)
        
        with open(caminho_completo, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        print(f"AVISO: Arquivo de prompt não encontrado: {caminho_completo}") # Mostra o caminho completo para depuração
        return "Prompt não disponível."
    except Exception as e:
        print(f"ERRO ao carregar o prompt {nome_arquivo}: {e}")
        return "Erro ao carregar prompt."

# --- Configuração dos Terapeutas (sem alterações) ---
TERAPEUTAS_CONFIG = {
    "tcc": {
        "nome": "Angela", 
        "titulo": "Terapeuta Cognitivo-Comportamental", 
        "arquivo": "angela_tcc.xml",
        "avatar": "angela.png"  # <-- ADICIONADO
    },
    "sistemico": {
        "nome": "Nicolas", 
        "titulo": "Terapeuta Sistêmico", 
        "arquivo": "nicolas_sistemico.xml",
        "avatar": "nicolas.png" # <-- ADICIONADO
    },
    "humanista": {
        "nome": "Ana Alice", 
        "titulo": "Terapeuta Humanista (ACP)", 
        "arquivo": "ana_alice_humanista.xml",
        "avatar": "ana_alice.png" # <-- ADICIONADO
    },
    "comportamental": {
        "nome": "Claudio", 
        "titulo": "Terapeuta Comportamental", 
        "arquivo": "claudio_comportamental.xml",
        "avatar": "claudio.png" # <-- ADICIONADO
    },
}

# O dicionário TERAPEUTAS agora também precisa carregar o avatar
TERAPEUTAS = {
    id: {
        "nome": config["nome"],
        "titulo": config["titulo"],
        "avatar": config["avatar"], # <-- ADICIONADO
        "prompt": carregar_prompt(config["arquivo"])
    }
    for id, config in TERAPEUTAS_CONFIG.items()
}

client = genai.Client(api_key=os.getenv("GENAI_KEY"))

# --- CORREÇÃO APLICADA AQUI ---
# Como as pastas 'templates' e 'static' estão no mesmo nível do app.py,
# usamos a inicialização padrão do Flask, sem especificar os caminhos.
app = Flask(__name__)

app.secret_key = "GENAI_KEY"
socketio = SocketIO(app, cors_allowed_origins="*")

active_chats = {}

def get_user_chat(terapeuta_id='tcc'):
    if 'session_id' not in session:
        session['session_id'] = str(uuid4())
    session_id = session['session_id']

    if session_id in active_chats:
        return active_chats[session_id]

    instrucoes_terapeuta = TERAPEUTAS.get(terapeuta_id, TERAPEUTAS['tcc'])['prompt']

    try:
        print(f"Criando novo chat Gemini para session_id: {session_id} com terapeuta: {terapeuta_id}")
        chat_session = client.chats.create(
            model="gemini-1.5-flash", 
            config=types.GenerateContentConfig(system_instruction=instrucoes_terapeuta)
        )
        active_chats[session_id] = chat_session
        return chat_session
    except Exception as e:
        app.logger.error(f"Erro ao criar chat Gemini para {session_id}: {e}", exc_info=True)
        raise

# --- Rotas (sem alterações na lógica, apenas usando o app corrigido) ---
@app.route('/')
def index():
    return render_template('opt-inicial.html')

@app.route('/final')
def final_page():
    return render_template('subemocoes.html')

@app.route('/selecao')
def selecao():
    return render_template('opt-terapeuta.html')

@app.route('/chat')
def chat():
    return render_template('chat.html')

@app.route('/questionario')
def questionario():
    return render_template('questionario.html')

@app.route('/final')
def final():
    return render_template('opt_final.html')


# --- Lógica do Socket.IO (sem alterações) ---
@socketio.on('connect')
def handle_connect():
    print(f"Cliente conectado: {request.sid}")
    emit('status_conexao', {'data': 'Conectado. Aguardando seleção de terapeuta.'})

@socketio.on('iniciar_sessao_terapeuta')
def handle_iniciar_sessao(data):
    terapeuta_id = data.get('terapeuta_id')
    if not terapeuta_id or terapeuta_id not in TERAPEUTAS:
        emit('erro', {'erro': 'ID de terapeuta inválido.'})
        return
    
    try:
        terapeuta_info = TERAPEUTAS[terapeuta_id]
        
        get_user_chat(terapeuta_id)
        user_session_id = session.get('session_id', 'N/A')
        print(f"Sessão Flask para {request.sid} usa session_id: {user_session_id} com terapeuta {terapeuta_id}")

        emit('sessao_iniciada', {
            'session_id': user_session_id, 
            'terapeuta_id': terapeuta_id,
            'nome': terapeuta_info['nome'],
            'titulo': terapeuta_info['titulo'],
            'avatar': terapeuta_info['avatar'] # <-- ADICIONADO: envia o nome do arquivo do avatar
        })
    except Exception as e:
        app.logger.error(f"Erro durante o evento de início de sessão para {request.sid}: {e}", exc_info=True)
        emit('erro', {'erro': 'Falha ao inicializar a sessão de chat no servidor.'})

@socketio.on('enviar_mensagem')
def handle_enviar_mensagem(data):
    try:
        mensagem_usuario = data.get("mensagem")
        terapeuta_id = data.get("terapeuta_id")
        app.logger.info(f"Mensagem recebida de {session.get('session_id', request.sid)}: {mensagem_usuario}")

        if not mensagem_usuario:
            emit('erro', {"erro": "Mensagem não pode ser vazia."})
            return

        user_chat = get_user_chat(terapeuta_id)
        if user_chat is None:
            emit('erro', {"erro": "Sessão de chat não pôde ser estabelecida."})
            return

        resposta_gemini = user_chat.send_message(mensagem_usuario)
        resposta_texto = resposta_gemini.text

        emit('nova_mensagem', {"remetente": "bot", "texto": resposta_texto, "session_id": session.get('session_id')})
        app.logger.info(f"Resposta enviada para {session.get('session_id', request.sid)}: {resposta_texto}")

    except Exception as e:
        app.logger.error(f"Erro ao processar 'enviar_mensagem' para {session.get('session_id', request.sid)}: {e}", exc_info=True)
        emit('erro', {"erro": f"Ocorreu um erro no servidor: {str(e)}"})

@socketio.on('disconnect')
def handle_disconnect():
    session_id = session.pop('session_id', None)
    if session_id and session_id in active_chats:
        del active_chats[session_id]
        print(f"Chat para session_id {session_id} encerrado e removido.")
    print(f"Cliente desconectado: {request.sid}")

if __name__ == "__main__":
    socketio.run(app, debug=True, use_reloader=False)