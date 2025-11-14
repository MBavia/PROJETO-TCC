// Objeto unificado para todas as emoções e subemoções
const emotionsData = {
    "Raiva": {
        label: "Raiva",
        phrases: { titulo: "Raiva, uau! Isso te deixou irritado", subtitulo: "O que exatamente essa raiva está te fazendo sentir?" },
        sub: ["Furioso", "Exasperado", "Irritado", "Inveja", "Desgosto"]
    },
    "Furioso": {
        label: "Furioso",
        phrases: { titulo: "Furioso, isso é realmente intenso!", subtitulo: "O que essa fúria está te fazendo sentir agora?" },
        sub: ["Hostilidade", "Ódio"]
    },
    "Exasperado": {
        label: "Exasperado",
        phrases: { titulo: "Exasperado, parece que algo te frustrou bastante.", subtitulo: "E como essa exasperação está te afetando nesse momento?" },
        sub: ["Agitação", "Frustração"]
    },
    "Irritado": {
        label: "Irritado",
        phrases: { titulo: "Irritado, difícil manter a calma, né?", subtitulo: "O que essa irritação provoca em você?" },
        sub: ["Provocação", "Irritação (Sub)"]
    },
    "Inveja": {
        label: "Inveja",
        phrases: { titulo: "Inveja, que sentimento complicado...", subtitulo: "O que essa inveja está te fazendo sentir agora?" },
        sub: ["Ressentido", "Ciúmes"]
    },
    "Desgosto": {
        label: "Desgosto",
        phrases: { titulo: "Desgosto, algo realmente te desagradou.", subtitulo: "E como esse desgosto está te afetando nesse momento?" },
        sub: ["Desespero", "Revoltado"]
    },
    "Tristeza": {
        label: "Tristeza",
        phrases: { titulo: "Tristeza, que pena!", subtitulo: "O que essa tristeza está te fazendo sentir?" },
        sub: ["Sofrimento", "Tristeza (Sub)", "Desapontamento", "Vergonha", "Negligência", "Desespero", "Culpa", "Isolamento", "Luto", "Impotência"]
    },
    "Sofrimento": {
        label: "Sofrimento",
        phrases: { titulo: "Sofrimento, sinto muito por isso.", subtitulo: "O que exatamente esse sofrimento faz você sentir?" },
        sub: ["Agoniado", "Machucado", "Depressão", "Pesar", "Consternado", "Desagradado", "Arrependimento"]
    },
    "Tristeza": {
        label: "Tristeza",
        phrases: { titulo: "Tristeza, que sensação difícil...", subtitulo: "O que essa tristeza está te fazendo sentir agora?" },
        sub: ["Sofrimento", "Tristeza", "Desapontamento", "Vergonha", "Negligência", "Desespero"]
    },
    "Negligência": {
        label: "Negligência",
        phrases: { titulo: "Negligência, parece que algo foi esquecido...", subtitulo: "Como essa negligência está te afetando?" },
        sub: ["Solitário", "Isolamento"]
    },
    "Desespero": {
        label: "Desespero",
        phrases: { titulo: "Desespero, quando tudo parece perdido...", subtitulo: "Como esse desespero está te impactando nesse momento?" },
        sub: ["Impotência", "Luto"]
    },
    "Vergonha": {
        label: "Vergonha",
        phrases: { titulo: "Vergonha, que sensação difícil...", subtitulo: "Como essa vergonha está te afetando nesse momento?" },
        sub: ["Arrependimento", "Culpa"]
    },
    "Desapontamento": {
        label: "Desapontamento",
        phrases: { titulo: "Desapontamento, poxa... que pena.", subtitulo: "E como esse desapontamento faz você se sentir agora?" },
        sub: ["Costernado", "Desagradado"]
    },
    "Tristeza (Sub)": {
        label: "Tristeza",
        phrases: { titulo: "Tristeza, que sensação difícil...", subtitulo: "O que essa tristeza está te fazendo sentir agora?" },
        sub: ["Depressão", "Pesar"]
    },
    "Sofrimento": {
        label: "Sofrimento",
        phrases: { titulo: "Sofrimento, sinto muito por isso.", subtitulo: "O que exatamente esse sofrimento faz você sentir?" },
        sub: ["Agoniado", "Machucado"]
    },
    
    "Surpresa": {
        label: "Surpresa",
        phrases: { titulo: "Surpresa, uau! Isso foi inesperado", subtitulo: "O que essa surpresa está te fazendo sentir?" },
        sub: ["Atortoamento (Sub)", "Confusão (Sub)", "Espanto", "Superação", "Abalado"]
    },
    "Atortoamento (Sub)": {
        label: "Atortoamento",
        phrases: { titulo: "Atortoamento, algo te deixou desorientado.", subtitulo: "E como esse atortoamento está te afetando nesse momento?" },
        sub: ["Consternado", "Chocado"]
    },
    "Confusão (Sub)": {
        label: "Confusão",
        phrases: { titulo: "Confusão, tudo parece meio bagunçado, né?", subtitulo: "O que exatamente essa confusão faz você sentir?" },
        sub: ["Desiludido", "Perplexo"]
    },
    "Espanto": {
        label: "Espanto",
        phrases: { titulo: "Espanto, algo muito assustador está acontecendo.", subtitulo: "O que esse espanto está te fazendo sentir agora?" },
        sub: ["Atônito", "Impressionado"]
    },
    "Superação": {
        label: "Superação",
        phrases: { titulo: "Superação, você conseguiu superar isso!", subtitulo: "Como essa superação está te fazendo se sentir agora?" },
        sub: ["Espanto", "Sem palavras"]
    },
    "Abalado": {
        label: "Abalado",
        phrases: { titulo: "Abalado, algo te deixou desorientado.", subtitulo: "E como esse abalado está te afetando nesse momento?" },
        sub: ["Estimulado", "Tocado"]
    },

    "Estarrecido": {
        label: "Estarrecido",
        phrases: { titulo: "Estarrecido, que choque inesperado!", subtitulo: "E como isso faz você se sentir agora?" },
        sub: ["Surpreso (Sub)", "Descrente"] // "Surpreso (Sub)" para evitar conflito
    },
    "Alegria": {
        label: "Alegria",
        phrases: { titulo: "Alegria, que coisa boa!", subtitulo: "O que essa alegria está te fazendo sentir?" },
        sub: ["Feliz", "Satisfeito", "Animado", "Orgulhoso", "Otimista", "Entusiasmado", "Exaltado", "Encantado"]
    },
    "Feliz": {
        label: "Feliz",
        phrases: { titulo: "Feliz, que coisa boa!", subtitulo: "O que exatamente essa felicidade faz você sentir?" },
        sub: ["Divertido", "Deleite"]
    },
    "Satisfeito": {
        label: "Satisfeito",
        phrases: { titulo: "Satisfeito, que sensação gostosa!", subtitulo: "O que essa satisfação está gerando em você?" },
        sub: ["Gozo", "Saciado"]
    },
    "Animado": {
        label: "Animado",
        phrases: { titulo: "Animado, cheio de energia!", subtitulo: "Como esse ânimo está te fazendo se sentir?" },
        sub: ["Abençoado", "Jovial"] // "Otimista (Sub)" para evitar conflito
    },
    "Orgulhoso": {
        label: "Orgulhoso",
        phrases: { titulo: "Orgulhoso, parabéns por isso!", subtitulo: "O que esse orgulho provoca em você agora?" },
        sub: ["Famoso", "Triunfante"]
    },
    "Otimista": {
        label: "Otimista",
        phrases: { titulo: "Otimista, cheio de esperança!", subtitulo: "O que essa esperança traz para você nesse momento?" },
        sub: ["Esperançoso", "Ansioso"]
    },
    "Entusiasmado": {
        label: "Entusiasmado",
        phrases: { titulo: "Entusiasmado, energia lá em cima!", subtitulo: "E como esse entusiasmo faz você se sentir agora?" },
        sub: ["Excitado", "Zelo"]
    },
    "Exaltado": {
        label: "Exaltado",
        phrases: { titulo: "Exaltado, que momento incrível!", subtitulo: "O que esse êxtase está te causando agora?" },
        sub: ["Júbilo", "Euforia"]
    },
    "Encantado": {
        label: "Encantado",
        phrases: { titulo: "Encantado, que maravilha!", subtitulo: "O que esse encantamento está te causando agora?" },
        sub: ["Êxtase", "Sedução"]
    },
    "Amor": {
        label: "Amor",
        phrases: { titulo: "Amor, que sensação maravilhosa!", subtitulo: "O que esse amor está te fazendo sentir?" },
        sub: ["Pacífico", "Afetuoso", "Desejoso", "Nostálgico", "Encantado (Amor)"]
    },
    "Pacífico": {
        label: "Pacífico",
        phrases: { titulo: "Pacífico, que conexão maravilhosa!", subtitulo: "O que essa amizade está gerando em você?" },
        sub: ["Pleno", "Liberdade"]
    },
    "Afetuoso": {
        label: "Afetuoso",
        phrases: { titulo: "Afetuoso, é tão bom se sentir seguro.", subtitulo: "E como essa confiança te faz se sentir?" },
        sub: ["Compaixão", "Cuidado"]
    },
    "Desejoso": {
        label: "Desejoso",
        phrases: { titulo: "Desejoso, que tranquilidade maravilhosa.", subtitulo: "E como essa paz se reflete em você agora?" },
        sub: ["Fascínio", "Paixão"]
    },
    "Nostálgico": {
        label: "Nostálgico",
        phrases: { titulo: "Nostálgico, acolher faz bem.", subtitulo: "O que essa aceitação está gerando dentro de você?" },
        sub: ["Atração", "Sensível"]
    },
    "Encantado (Amor)": {
        label: "Encantado",
        phrases: { titulo: "Encantado, um gesto de amor e proteção.", subtitulo: "E como esse cuidado está te fazendo se sentir agora?" },
        sub: ["Romântico", "Carinho"]
    },
    "Medo": {
        label: "Medo",
        phrases: { titulo: "Medo, opa... algo te deixou apreensivo", subtitulo: "O que exatamente esse medo está te fazendo sentir?" },
        sub: ["Horrorizado", "Nervoso", "Inseguro", "Aterrorizado", "Assustado"]
    },
    "Horrorizado": {
        label: "Horrorizado",
        phrases: { titulo: "Horrorizado, algo muito assustador está acontecendo.", subtitulo: "O que esse horror está te fazendo sentir agora?" },
        sub: ["Mortificado", "Pavor"]
    },
    "Inseguro": {
        label: "Inseguro",
        phrases: { titulo: "Inseguro, parece que tudo balança...", subtitulo: "E como essa insegurança te afeta agora?" },
        sub: ["Inedequação", "Inferioridade"]
    },
    "Nervoso": {
        label: "Nervoso",
        phrases: { titulo: "Nervoso, difícil manter o controle, né?", subtitulo: "O que esse nervosismo provoca em você?" },
        sub: ["Ansiedade", "Preocupação"]
    },
    "Assustado": {
        label: "Assustado",
        phrases: { titulo: "Assustado, algo te deixou alerta.", subtitulo: "E como esse medo está te afetando nesse momento?" },
        sub: ["Abandono", "Amendrontado"]
    },
    "Aterrorizado": {
        label: "Aterrorizado",
        phrases: { titulo: "Aterrorizado, isso parece muito intenso!", subtitulo: "O que esse terror faz você sentir agora?" },
        sub: ["Histeria", "Pânico"]
    },
    
    // Emoções de Nível 3 (finais ou que não têm mais subníveis)
    "Agridido": { label: "Agridido", finalPhrase: "Você se sente agredido" },
    "Indignado": { label: "Indignado", finalPhrase: "Você está indignado" },
    "Ciumento": { label: "Ciumento", finalPhrase: "Você se sente ciumento" },
    "Rancoroso": { label: "Rancoroso", finalPhrase: "Você está rancoroso" },
    "Aborrecido": { label: "Aborrecido", finalPhrase: "Você se sente aborrecido" },
    "Crítico": { label: "Crítico", finalPhrase: "Você está crítico" },
    "Zangado": { label: "Zangado", finalPhrase: "Você está zangado" },
    "Irritado (Sub)": { label: "Irritado", finalPhrase: "Você se sente irritado" },
    "Amargurado": { label: "Amargurado", finalPhrase: "Você está amargurado" },
    "Furioso": { label: "Furioso", finalPhrase: "Você está furioso" },
    "Agressivo": { label: "Agressivo", finalPhrase: "Você está agressivo" },
    "Angústia": { label: "Angústia", finalPhrase: "Você sente angústia" },
    "Agonia": { label: "Agonia", finalPhrase: "Você sente agonia" },
    "Agoniado": { label: "Agoniado", finalPhrase: "Você se sente agoniado" },
    "Machucado": { label: "Machucado", finalPhrase: "Você se sente machucado" },
    "Pesar": { label: "Pesar", finalPhrase: "Você sente pesar" },
    "Desagradado": { label: "Desagradado", finalPhrase: "Você se sente desagradado" },
    "Solitário": { label: "Solitário", finalPhrase: "Você se sente solitário" },
    "Negligência": { label: "Negligência", finalPhrase: "Você se sente negligenciado" },
    "Desespero": { label: "Desespero", finalPhrase: "Você sente desespero" },
    "Isolamento": { label: "Isolamento", finalPhrase: "Você se sente isolado" },
    "Luto": { label: "Luto", finalPhrase: "Você está em luto" },
    "Culpa": { label: "Culpa", finalPhrase: "Você se sente culpado" },
    "Humilhação": { label: "Humilhação", finalPhrase: "Você se sente humilhado" },
    "Desanimado": { label: "Desanimado", finalPhrase: "Você se sente desanimado" },
    "Desiludido": { label: "Desiludido", finalPhrase: "Você está desiludido" },
    "Arrependimento": { label: "Arrependimento", finalPhrase: "Você sente arrependimento" },
    "Culpa Profunda": { label: "Culpa Profunda", finalPhrase: "Você sente uma culpa profunda" },
    "Impotência": { label: "Impotência", finalPhrase: "Você sente impotência" },
    "Desesperança": { label: "Desesperança", finalPhrase: "Você sente desesperança" },
    "Vazio": { label: "Vazio", finalPhrase: "Você se sente vazio" },
    "Pesado": { label: "Pesado", finalPhrase: "Você se sente pesado" },
    "Surpreso (Sub)": { label: "Surpreso", finalPhrase: "Você está surpreso" },
    "Descrente": { label: "Descrente", finalPhrase: "Você está descrente" },
    "Confuso": { label: "Confuso", finalPhrase: "Você se sente confuso" },
    "Perplexo (Sub2)": { label: "Perplexo", finalPhrase: "Você se sente perplexo" },
    "Impressionado": { label: "Impressionado", finalPhrase: "Você está impressionado" },
    "Aturdido": { label: "Aturdido", finalPhrase: "Você está aturdido" },
    "Abismado": { label: "Abismado", finalPhrase: "Você está abismado" },
    "Enaltecido": { label: "Enaltecido", finalPhrase: "Você se sente enaltecido" },
    "Intrigado": { label: "Intrigado", finalPhrase: "Você está intrigado" },
    "Questionador": { label: "Questionador", finalPhrase: "Você está questionador" },
    "Contente": { label: "Contente", finalPhrase: "Você está contente" },
    "Jubiloso": { label: "Jubiloso", finalPhrase: "Você está jubiloso" },
    "Grato": { label: "Grato", finalPhrase: "Você se sente grato" },
    "Relaxado": { label: "Relaxado", finalPhrase: "Você se sente relaxado" },
    "Estimulado": { label: "Estimulado", finalPhrase: "Você está estimulado" },
    "Otimista (Sub)": { label: "Otimista", finalPhrase: "Você está otimista" },
    "Vitorioso": { label: "Vitorioso", finalPhrase: "Você se sente vitorioso" },
    "Realizado": { label: "Realizado", finalPhrase: "Você se sente realizado" },
    "Esperançoso": { label: "Esperançoso", finalPhrase: "Você se sente esperançoso" },
    "Inspirado": { label: "Inspirado", finalPhrase: "Você está inspirado" },
    "Excitado": { label: "Excitado", finalPhrase: "Você está excitado" },
    "Empolgado": { label: "Empolgado", finalPhrase: "Você está empolgado" },
    "Radiante": { label: "Radiante", finalPhrase: "Você está radiante" },
    "Euforia": { label: "Euforia", finalPhrase: "Você está em euforia" },
    "Divertido": { label: "Divertido", finalPhrase: "Você está divertido" },
    "Brincalhão": { label: "Brincalhão", finalPhrase: "Você está brincalhão" },
    "Acolhedor": { label: "Acolhedor", finalPhrase: "Você se sente acolhedor" },
    // REMOVIDO: "Afetuoso" com finalPhrase — já existe como nó com subemoções
    "Seguro": { label: "Seguro", finalPhrase: "Você se sente seguro" },
    "Confiante": { label: "Confiante", finalPhrase: "Você se sente confiante" },
    "Calmo": { label: "Calmo", finalPhrase: "Você está calmo" },
    "Sereno": { label: "Sereno", finalPhrase: "Você está sereno" },
    "Tolerante": { label: "Tolerante", finalPhrase: "Você se sente tolerante" },
    "Compreensivo": { label: "Compreensivo", finalPhrase: "Você está compreensivo" },
    "Protetor": { label: "Protetor", finalPhrase: "Você se sente protetor" },
    "Carinhoso": { label: "Carinho", finalPhrase: "Você se sente carinhoso" },
    "Apreensão": { label: "Apreensão", finalPhrase: "Você sente apreensão" },
    "Preocupação": { label: "Preocupação", finalPhrase: "Você sente preocupação" },
    "Vulnerável": { label: "Vulnerável", finalPhrase: "Você se sente vulnerável" },
    "Frágil": { label: "Frágil", finalPhrase: "Você se sente frágil" },
    "Irritável": { label: "Irritável", finalPhrase: "Você está irritável" },
    "Tenso": { label: "Tenso", finalPhrase: "Você está tenso" },
    "Apavorado": { label: "Apavorado", finalPhrase: "Você está apavorado" },
    "Assombrado": { label: "Assombrado", finalPhrase: "Você se sente assombrado" },
    "Horrorizado": { label: "Horrorizado", finalPhrase: "Você está horrorizado" },
    "Pavor": { label: "Pavor", finalPhrase: "Você sente pavor" },
    "Terror": { label: "Terror", finalPhrase: "Você sente terror" },
    "Deleite": { label: "Deleite", finalPhrase: "Você se sente deleite"},
    "Gozo": { label: "Gozo", finalPhrase: "Você se sente gozo"},
    "Saciado": { label: "Saciado", finalPhrase: "Você se sente saciado"},
    "Abençoado": { label: "Abençoado", finalPhrase: "Você se sente abençoado"},
    "Jovial": { label: "Jovial", finalPhrase: "Você se sente jovial"},
    "Famoso": { label: "Famoso", finalPhrase: "Você se sente famoso"},
    "Triunfante": { label: "Triunfante", finalPhrase: "Você se sente triunfante"},
    "Esperançoso": { label: "Esperançoso", finalPhrase: "Você se sente esperançoso"},
    "Ansioso": { label: "Ansioso", finalPhrase: "Você se sente ansioso"},
    "Zelo": { label: "Zelo", finalPhrase: "Você se sente zelo"},
    "Júbilo": { label: "Júbilo", finalPhrase: "Você se sente júbilo"},
    "Êxtase": { label: "Êxtase", finalPhrase: "Você se sente êxtase"},
    "Sedução": { label: "Sedução", finalPhrase: "Você se sente sedução"},
    // REMOVIDOS: nós intermediários do Amor (possuem subníveis, não são finais)
    // "Pacífico", "Afetuoso", "Desejoso", "Nostálgico", "Encantado"
    "Pleno": { label: "Pleno", finalPhrase: "Você se sente pleno"},
    "Liberdade": { label: "Liberdade", finalPhrase: "Você se sente liberdade"},
    "Compaixão": { label: "Compaixão", finalPhrase: "Você se sente compaixão"},
    "Cuidado": { label: "Cuidado", finalPhrase: "Você se sente cuidado"},
    "Fascínio": { label: "Fascínio", finalPhrase: "Você se sente fascínio"},
    "Paixão": { label: "Paixão", finalPhrase: "Você se sente paixão"},
    "Atração": { label: "Atração", finalPhrase: "Você se sente atração"},
    "Sensível": { label: "Sensível", finalPhrase: "Você se sente sensível"},
    "Romântico": { label: "Romântico", finalPhrase: "Você se sente romântico"},
    "Carinho": { label: "Carinho", finalPhrase: "Você se sente carinho"},
    "Mortificado": { label: "Mortificado", finalPhrase: "Você se sente mortificado"},
    "Histeria": { label: "Histeria", finalPhrase: "Você se sente histeria"},
    "Pânico": { label: "Pânico", finalPhrase: "Você se sente pânico"},
    "Abandono": { label: "Abandono", finalPhrase: "Você se sente abandonado"},
    "Amendrontado": { label: "Amendrontado", finalPhrase: "Você se sente amendrontado"},
    "Inedequação": { label: "Inedequação", finalPhrase: "Você se sente inedequação"},
    "Inferioridade": { label: "Inferioridade", finalPhrase: "Você se sente inferioridade"},
    "Ansiedade": { label: "Ansiedade", finalPhrase: "Você se sente ansiedade"},
    "Preocupação": { label: "Preocupação", finalPhrase: "Você sente preocupação"},
    "Estimulado": { label: "Estimulado", finalPhrase: "Você está estimulado"},
    "Chocado": { label: "Chocado", finalPhrase: "Você se sente chocado"},
    "Consternado": { label: "Consternado", finalPhrase: "Você se sente consternado"},
    "Desiludido": { label: "Desiludido", finalPhrase: "Você se sente desiludido"},
    "Perplexo": { label: "Perplexo", finalPhrase: "Você se sente perplexo"},
    "Atônito": { label: "Atônito", finalPhrase: "Você se sente atônito"},
    "Impressionado": { label: "Impressionado", finalPhrase: "Você se sente impressionado"},
    "Sem palavras": { label: "Sem palavras", finalPhrase: "Você se sente sem palavras"},
    "Tocado": { label: "Tocado", finalPhrase: "Você se sente tocado"},
    "Agradecido": { label: "Agradecido", finalPhrase: "Você se sente agradecido"},
    "Apaixonado": { label: "Apaixonado", finalPhrase: "Você se sente apaixonado"},
    "Admirado": { label: "Admirado", finalPhrase: "Você se sente admirado"},
    "Enamordecido": { label: "Enamordecido", finalPhrase: "Você se sente enamordecido"},
    "Encantado": { label: "Encantado", finalPhrase: "Você se sente encantado"},
    "Ódio": { label: "Ódio", finalPhrase: "Você sente ódio" },
    "Hostilidade": { label: "Hostilidade", finalPhrase: "Você sente hostilidade" },
    "Agitação": { label: "Agitação", finalPhrase: "Você sente agitação" },
    "Frustração": { label: "Frustração", finalPhrase: "Você sente frustração" },
    "Provocação": { label: "Provocação", finalPhrase: "Você sente provocação" },
    "Irritação (Sub)": { label: "Irritação", finalPhrase: "Você sente irritação" },
    "Ressentido": { label: "Ressentido", finalPhrase: "Você se sente ressentido" },
    "Ciúmes": { label: "Ciúmes", finalPhrase: "Você sente ciúmes" },
    "Desespero": { label: "Desespero", finalPhrase: "Você sente desespero" },
    "Revoltado": { label: "Revoltado", finalPhrase: "Você se sente revoltado" },
    "Depressão": { label: "Depressão", finalPhrase: "Você sente depressão" },
    "Pesar": { label: "Pesar", finalPhrase: "Você sente pesar" },
    "Consternado": { label: "Consternado", finalPhrase: "Você se sente consternado" },

    
    
};

// Referências aos elementos do DOM
const firstLayer = document.getElementById('first-layer');
const dynamicLayer = document.getElementById('dynamic-layer'); // Nova ID para a camada de subemoções
const finalLayer = document.getElementById('final-layer'); // ESTE SERÁ ESCONDIDO OU IGNORADO
const mainTitle = document.querySelector('.main-title');
const subtitle = document.querySelector('.subtitle');
const backButton = document.querySelector('.back-button');
const finalEmotionDisplay = document.getElementById('final-emotion-display');
const resetButton = document.getElementById('reset-quiz');
const cardTemplate = document.getElementById('card-template'); // Template para clonar cards

let currentPath = []; // Caminho de navegação atual: [Emoção Principal, Subemoção 1, Subemoção 2]

/**
 * Renderiza os cards de emoção em um elemento pai.
 * @param {HTMLElement} parentElement - O elemento onde os cards serão anexados.
 * @param {string[]} emotionKeys - Um array de chaves de emoções a serem renderizadas.
 * @param {boolean} isSubemotion - Indica se os cards são subemoções para aplicar estilos específicos.
 */
function renderCards(parentElement, emotionKeys, isSubemotion = false) {
    parentElement.innerHTML = ''; // Limpa o conteúdo existente

    // Adiciona a classe 'options-grid' para o layout de subemoções
    if (isSubemotion) {
        parentElement.classList.add('options-grid');
        parentElement.classList.remove('emotion-grid'); // Remove a classe de grid principal, se presente
    } else {
        parentElement.classList.add('emotion-grid');
        parentElement.classList.remove('options-grid');
    }

    emotionKeys.forEach(key => {
        const emotion = emotionsData[key];
        if (!emotion) {
            console.warn(`Emoção ${key} não encontrada no emotionsData.`);
            return;
        }

        const card = cardTemplate.content.cloneNode(true).children[0]; // Clona o template do card

        // Adiciona classes específicas da primeira camada ou de subemoções
        if (!isSubemotion) {
            card.classList.add(key.toLowerCase().replace(/\s|\(|\)/g, '')); // Ex: "Raiva" -> "raiva"
            card.querySelector('.emotion-icon').textContent = emotion.icon || '';
            card.querySelector('.emotion-text').textContent = emotion.label;
        } else {
            card.classList.add('subemotion-card'); // Classe para subemoções
            card.setAttribute('data-text', emotion.label); // Adiciona o texto como atributo para o CSS
            // Remove o ícone e o texto padrão do template se for subemoção
            const icon = card.querySelector('.emotion-icon');
            const text = card.querySelector('.emotion-text');
            if (icon) icon.remove();
            if (text) text.remove();

            // Adiciona uma classe específica combinando emoção-pai e subemoção (ex.: sub-alegria-feliz)
            const parentKey = currentPath[currentPath.length - 1] || '';
            // Função para normalizar removendo acentos e caracteres especiais
            const normalizeString = (str) => {
                return String(str).toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
                    .replace(/\s|\(|\)|sub\)/gi, '') // Remove espaços, parênteses e "(Sub)"
                    .replace(/\(sub2\)/gi, ''); // Remove "(Sub2)"
            };
            const normalizedParent = normalizeString(parentKey);
            const normalizedKey = normalizeString(key);
            if (normalizedParent && normalizedKey) {
                card.classList.add(`sub-${normalizedParent}-${normalizedKey}`);
            }
        }

        card.dataset.emotionKey = key; // Armazena a chave da emoção no dataset
        card.addEventListener('click', () => handleCardClick(key));
        parentElement.appendChild(card);
    });
}

/**
 * Gerencia o clique em um card de emoção/subemoção.
 * @param {string} clickedEmotionKey - A chave da emoção clicada.
 */
function handleCardClick(clickedEmotionKey) {
    currentPath.push(clickedEmotionKey); // Adiciona a emoção clicada ao caminho

    const emotion = emotionsData[clickedEmotionKey];
    if (emotion && emotion.sub && emotion.sub.length > 0) {
        // Se a emoção clicada tem subníveis, exibe a camada dinâmica com esses subníveis
        displayLayer('dynamic', clickedEmotionKey);
    } else {
        // Se não tem mais subníveis (É O FINAL), salva e redireciona.
        handleFinalSelection(clickedEmotionKey);
    }
}

/**
 * Lida com a seleção final de uma emoção.
 * @param {string} finalEmotionKey - A chave da emoção final selecionada.
 */
function handleFinalSelection(finalEmotionKey) {
    const finalEmotionData = emotionsData[finalEmotionKey];
    if (finalEmotionData && finalEmotionData.finalPhrase) {
        // 1. Salva a emoção final no localStorage
        localStorage.setItem('sentimentoFinalSelecionado', finalEmotionData.finalPhrase);
        // 2. Redireciona o usuário para a rota '/final'
        window.location.href = '/final'; 
    } else {
        console.error("Erro: Dados da emoção final não encontrados ou 'finalPhrase' ausente.");
        // Fallback para a primeira camada
        displayLayer('first');
    }
}


/**
 * Exibe a camada especificada e renderiza o conteúdo apropriado.
 * @param {'first'|'dynamic'|'final'} layerName - O nome da camada a ser exibida.
 * @param {string} [currentEmotionKey=null] - A chave da emoção atual (para dynamic/final layers).
 */
function displayLayer(layerName, currentEmotionKey = null) {
    // Esconde todas as camadas primeiro
    firstLayer.classList.add('hidden');
    dynamicLayer.classList.add('hidden');
    // finalLayer.classList.add('hidden'); // O finalLayer (tela antiga) não é mais manipulado aqui

    // Remove classes de grid para resetar antes de aplicar as corretas
    dynamicLayer.classList.remove('emotion-grid', 'options-grid');

    let currentEmotionData = currentEmotionKey ? emotionsData[currentEmotionKey] : null;

    // Lógica para exibir a camada correta
    switch (layerName) {
        case 'first':
            firstLayer.classList.remove('hidden');
            mainTitle.textContent = 'Diga-me';
            subtitle.textContent = 'Qual sua emoção predominante hoje?';
            backButton.classList.add('hidden'); // Botão de voltar escondido na primeira camada
            // A camada inicial usa os cards estáticos do HTML.
            break;
        case 'dynamic':
            if (currentEmotionData) {
                dynamicLayer.classList.remove('hidden');
                mainTitle.textContent = currentEmotionData.phrases.titulo;
                subtitle.textContent = currentEmotionData.phrases.subtitulo;
                backButton.classList.remove('hidden');
                renderCards(dynamicLayer, currentEmotionData.sub, true); // Renderiza subemoções
            } else {
                console.error("Dados da emoção não encontrados para a camada dinâmica.");
                // Fallback para a primeira camada ou uma mensagem de erro
                displayLayer('first');
            }
            break;
        case 'final':
            // Lógica de camada final agora é um REDIRECIONAMENTO em handleFinalSelection
            break;
    }
}

/**
 * Gerencia o clique no botão "Voltar".
 */
function handleBackClick() {
    if (currentPath.length > 1) {
        currentPath.pop(); // Remove a última emoção do caminho
        const previousEmotionKey = currentPath[currentPath.length - 1];
        displayLayer('dynamic', previousEmotionKey); // Volta para a camada dinâmica anterior
    } else {
        currentPath = []; // Limpa o caminho se estiver voltando para a primeira camada
        displayLayer('first');
    }
}

/**
 * Gerencia o clique no botão "Reiniciar Quiz" (Só será usado na página final, se necessário).
 */
function handleResetQuiz() {
    currentPath = [];
    displayLayer('first');
    localStorage.removeItem('sentimentoFinalSelecionado');
}

// --- Inicialização ---

// Adiciona event listeners aos cartões de emoção principais (estáticos no HTML original)
document.querySelectorAll('.emotion-card[data-emotion]').forEach(card => {
    card.addEventListener('click', (event) => {
        const primaryFeelingKey = event.currentTarget.dataset.emotion; // Usa data-emotion
        currentPath = [primaryFeelingKey];
        displayLayer('dynamic', primaryFeelingKey);
    });
});


// Inicializa a exibição na primeira camada ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    displayLayer('first');
});
