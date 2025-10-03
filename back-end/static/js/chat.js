document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SELEÇÃO DOS ELEMENTOS DO NOVO HTML ---
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatTitle = document.getElementById('chat-title');
    const statusDot = document.getElementById('connection-status-dot');
    const terapeutaAvatar = document.getElementById('terapeuta-avatar'); // <-- ADICIONE ESTA LINHA
    const terapeutaAvatarHeader = document.getElementById('terapeuta-avatar-header');

    let socket = null;
    let nomeTerapeutaGlobal = 'Terapeuta'; // Variável para guardar o nome

    // --- 2. LÓGICA DE COMUNICAÇÃO COM O BACKEND ---

    // Pega o ID do terapeuta da URL (ex: ?terapeuta=tcc)
    const urlParams = new URLSearchParams(window.location.search);
    const terapeutaId = urlParams.get('terapeuta');

    // Se não houver ID na URL, não faz nada. (Idealmente, redirecionaria)
    if (!terapeutaId) {
        chatTitle.textContent = "Erro: Terapeuta não especificado.";
        return;
    }

    // Função para adicionar mensagens na tela (adaptada do seu código)
    function addMessageToChat(sender, text, type = 'normal') {
        const messageElement = document.createElement('div');
        let messageContent = '';

        if (sender.toLowerCase() === 'user') {
            messageElement.className = 'flex justify-start my-2';
            messageContent = `
                <div class="max-w-[70%] bg-blue-500 text-white p-3 rounded-2xl rounded-bl-lg">
                    ${text}
                </div>
            `;
        } else if (sender.toLowerCase() === 'bot') {
            // Usa o nome correto do terapeuta, recebido do backend
            const nomeExibicao = nomeTerapeutaGlobal || 'IA';
            messageElement.className = 'flex justify-end my-2';
            // Usa a biblioteca 'marked' para renderizar formatação (negrito, etc.)
            const textoFormatado = window.marked ? marked.parse(text) : text;
            messageContent = `
                <div class="max-w-[70%] bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-br-lg">
                    <p class="font-bold mb-1">${nomeExibicao}:</p>
                    <div>${textoFormatado}</div>
                </div>
            `;
        } else { // Para status e erros
            messageElement.className = 'flex justify-center my-2';
            messageContent = `
                <div class="bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-xs">
                    ${text}
                </div>
            `;
        }
        messageElement.innerHTML = messageContent;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Função para conectar e iniciar a sessão
    function iniciarSessao() {
        if (socket && socket.connected) return;

        socket = io(window.location.origin); // Conecta ao mesmo servidor que serve a página

        socket.on('connect', () => {
            console.log('Conectado ao servidor! Enviando dados da sessão...');
            // Envia o ID do terapeuta para o backend para iniciar a sessão correta
            socket.emit('iniciar_sessao_terapeuta', { terapeuta_id: terapeutaId });
        });

        // Ouve o evento que confirma o início da sessão e traz os dados do terapeuta
        socket.on('sessao_iniciada', (data) => {
            console.log('Sessão iniciada com:', data.nome);
            nomeTerapeutaGlobal = data.nome;
            chatTitle.textContent = data.titulo;
            statusDot.classList.remove('bg-gray-400');
            statusDot.classList.add('bg-green-500');

            // ADICIONE ESTA LINHA para definir a imagem do avatar
            terapeutaAvatar.src = `/static/images/${data.avatar}`;
            terapeutaAvatarHeader.src = `/static/images/${data.avatar}`;

            messageInput.disabled = false;
            sendButton.disabled = false;
            messageInput.placeholder = `Converse com ${data.nome}...`;
            addMessageToChat('status', 'Conexão estabelecida.');
        });

        socket.on('nova_mensagem', (data) => {
            addMessageToChat('bot', data.texto);
        });

        socket.on('disconnect', () => {
            console.log('Desconectado do servidor.');
            addMessageToChat('status', 'Conexão perdida. Por favor, recarregue a página.');
            chatTitle.textContent = "Desconectado";
            statusDot.classList.remove('bg-green-500');
            statusDot.classList.add('bg-red-500');
            messageInput.disabled = true;
            sendButton.disabled = true;
        });

        socket.on('erro', (data) => {
            console.error('Erro do servidor:', data.erro);
            addMessageToChat('status', `Erro: ${data.erro}`);
        });
    }

    // Função para enviar mensagem
    function enviarMensagem() {
        const messageText = messageInput.value.trim();
        if (messageText === '' || !socket || !socket.connected) return;

        addMessageToChat('user', messageText);
        // Envia a mensagem E o ID do terapeuta para o backend
        socket.emit('enviar_mensagem', { mensagem: messageText, terapeuta_id: terapeutaId });
        messageInput.value = '';
        messageInput.focus();
    }

    // --- 3. INICIALIZAÇÃO E EVENTOS ---

    // Desativa o input no início
    messageInput.disabled = true;
    sendButton.disabled = true;

    // Inicia a conexão assim que a página carrega
    iniciarSessao();

    // Adiciona os listeners para o botão de enviar e a tecla Enter
    sendButton.addEventListener('click', enviarMensagem);
    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            enviarMensagem();
        }
    });
});