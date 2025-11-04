// Objeto unificado para todas as emoções e subemoções
const emotionsData = {
    "Raiva": {
        label: "Raiva",
        icon: "😠",
        phrases: { titulo: "Raiva, uau! Isso te deixou irritado 😡", subtitulo: "O que exatamente essa raiva está te fazendo sentir?" },
        sub: ["Frustração", "Inveja", "Irritação", "Exasperado", "Fúria"]
    },
    "Frustração": {
        label: "Frustração",
        phrases: { titulo: "Frustração, que coisa chata! 😤", subtitulo: "O que exatamente essa frustração está te fazendo sentir?" },
        sub: ["Agridido", "Indignado"]
    },
    "Inveja": {
        label: "Inveja",
        phrases: { titulo: "Inveja, isso está te incomodando, né? 😒", subtitulo: "O que essa inveja está te fazendo sentir?" },
        sub: ["Ciumento", "Rancoroso"]
    },
    "Irritação": {
        label: "Irritação",
        phrases: { titulo: "Irritação, que desconforto! 😠", subtitulo: "O que exatamente essa irritação provoca em você?" },
        sub: ["Aborrecido", "Crítico", "Zangado"]
    },
    "Exasperado": {
        label: "Exasperado",
        phrases: { titulo: "Exasperado, parece que tudo está demais! 😩", subtitulo: "Como isso está te fazendo se sentir agora?" },
        sub: ["Irritado (Sub)", "Amargurado"] // "Irritado (Sub)" para evitar conflito com "Irritação" principal
    },
    "Fúria": {
        label: "Fúria",
        phrases: { titulo: "Fúria, está queimando aí dentro, né? 😡", subtitulo: "O que essa fúria está te causando nesse momento?" },
        sub: ["Furioso", "Agressivo"]
    },
    "Tristeza": {
        label: "Tristeza",
        icon: "😢",
        phrases: { titulo: "Tristeza, que pena! 😢", subtitulo: "O que essa tristeza está te fazendo sentir?" },
        sub: ["Sofrimento", "Vergonha", "Desapontamento", "Remorso", "Desespero (Sub)", "Depressão"] // "Desespero (Sub)" para evitar conflito
    },
    "Sofrimento": {
        label: "Sofrimento",
        phrases: { titulo: "Sofrimento, sinto muito por isso. 😢", subtitulo: "O que exatamente esse sofrimento faz você sentir?" },
        sub: ["Angústia", "Agonia"]
    },
    "Vergonha": {
        label: "Vergonha",
        phrases: { titulo: "Vergonha, que sensação difícil... 😳", subtitulo: "Como essa vergonha está te afetando nesse momento?" },
        sub: ["Culpa", "Humilhação"]
    },
    "Desapontamento": {
        label: "Desapontamento",
        phrases: { titulo: "Desapontamento, poxa... que pena. 😔", subtitulo: "E como esse desapontamento faz você se sentir agora?" },
        sub: ["Desanimado", "Desiludido"]
    },
    "Remorso": {
        label: "Remorso",
        phrases: { titulo: "Remorso, quando o passado pesa... 😞", subtitulo: "O que esse remorso faz você sentir agora?" },
        sub: ["Arrependimento", "Culpa Profunda"]
    },
    "Desespero (Sub)": { // Chave ajustada
        label: "Desespero",
        phrases: { titulo: "Desespero, quando tudo parece perdido... 😩", subtitulo: "Como esse desespero está te impactando nesse momento?" },
        sub: ["Impotência", "Desesperança"]
    },
    "Depressão": {
        label: "Depressão",
        phrases: { titulo: "Depressão, parece que está pesado demais... 😞", subtitulo: "E como essa depressão faz você se sentir?" },
        sub: ["Vazio", "Pesado"]
    },
    "Surpresa": {
        label: "Surpresa",
        icon: "😲",
        phrases: { titulo: "Surpresa, uau! Isso foi inesperado 😲", subtitulo: "O que essa surpresa está te fazendo sentir?" },
        sub: ["Atortoamento", "Confusão", "Espanto", "Superação", "Abalado"] // "Perplexo (Sub)" para evitar conflito
    },
    "Atortoamento": {
        label: "Atortoamento",
        phrases: { titulo: "Atortoamento, algo te deixou desorientado. 😵", subtitulo: "E como esse atortoamento está te afetando nesse momento?" },
        sub: ["Consternado", "Chocado"]
    },
    "Confusão": {
        label: "Confusão",
        phrases: { titulo: "Confusão, tudo parece meio bagunçado, né? 🤯", subtitulo: "O que exatamente essa confusão faz você sentir?" },
        sub: ["Desiludido", "Perplexo"] // "Perplexo (Sub2)" para evitar conflito
    },
    "Espanto": {
        label: "Espanto",
        phrases: { titulo: "Espanto, algo muito assustador está acontecendo. 😱", subtitulo: "O que esse espanto está te fazendo sentir agora?" },
        sub: ["Atônito", "Impressionado"]
    },
    "Superação": {
        label: "Superação",
        phrases: { titulo: "Superação, você conseguiu superar isso! 😌", subtitulo: "Como essa superação está te fazendo se sentir agora?" },
        sub: ["Espanto", "Sem palavras"]
    },
    "Abalado": {
        label: "Abalado",
        phrases: { titulo: "Abalado, algo te deixou desorientado. 😵", subtitulo: "E como esse abalado está te afetando nesse momento?" },
        sub: ["Estimulado", "Tocado"]
    },

    "Estarrecido": {
        label: "Estarrecido",
        phrases: { titulo: "Estarrecido, que choque inesperado! 😱", subtitulo: "E como isso faz você se sentir agora?" },
        sub: ["Surpreso (Sub)", "Descrente"] // "Surpreso (Sub)" para evitar conflito
    },
    "Alegria": {
        label: "Alegria",
        icon: "😊",
        phrases: { titulo: "Alegria, que coisa boa! 😄", subtitulo: "O que essa alegria está te fazendo sentir?" },
        sub: ["Feliz", "Satisfeito", "Animado", "Orgulhoso", "Otimista", "Entusiasmado", "Exaltado", "Encantado"]
    },
    "Feliz": {
        label: "Feliz",
        phrases: { titulo: "Feliz, que coisa boa! 😄", subtitulo: "O que exatamente essa felicidade faz você sentir?" },
        sub: ["Divertido", "Deleite"]
    },
    "Satisfeito": {
        label: "Satisfeito",
        phrases: { titulo: "Satisfeito, que sensação gostosa! 😊", subtitulo: "O que essa satisfação está gerando em você?" },
        sub: ["Gozo", "Saciado"]
    },
    "Animado": {
        label: "Animado",
        phrases: { titulo: "Animado, cheio de energia! 🤩", subtitulo: "Como esse ânimo está te fazendo se sentir?" },
        sub: ["Abençoado", "Jovial"] // "Otimista (Sub)" para evitar conflito
    },
    "Orgulhoso": {
        label: "Orgulhoso",
        phrases: { titulo: "Orgulhoso, parabéns por isso! 😎", subtitulo: "O que esse orgulho provoca em você agora?" },
        sub: ["Famoso", "Triunfante"]
    },
    "Otimista": {
        label: "Otimista",
        phrases: { titulo: "Otimista, cheio de esperança! ☀️", subtitulo: "O que essa esperança traz para você nesse momento?" },
        sub: ["Esperançoso", "Ansioso"]
    },
    "Entusiasmado": {
        label: "Entusiasmado",
        phrases: { titulo: "Entusiasmado, energia lá em cima! 🔥", subtitulo: "E como esse entusiasmo faz você se sentir agora?" },
        sub: ["Excitado", "Zelo"]
    },
    "Exaltado": {
        label: "Exaltado",
        phrases: { titulo: "Exaltado, que momento incrível! ✨", subtitulo: "O que esse êxtase está te causando agora?" },
        sub: ["Júbilo", "Euforia"]
    },
    "Encantado": {
        label: "Encantado",
        phrases: { titulo: "Encantado, que maravilha! ✨", subtitulo: "O que esse encantamento está te causando agora?" },
        sub: ["Êxtase", "Sedução"]
    },
    "Amor": {
        label: "Amor",
        icon: "🥰",
        phrases: { titulo: "Amor, que sensação maravilhosa! ❤️", subtitulo: "O que esse amor está te fazendo sentir?" },
        sub: ["Pacífico", "Afetuoso", "Desejoso", "Nostálgico", "Encantado"]
    },
    "Pacífico": {
        label: "Pacífico",
        phrases: { titulo: "Pacífico, que conexão maravilhosa! 🤝", subtitulo: "O que essa amizade está gerando em você?" },
        sub: ["Pleno", "Liberdade"]
    },
    "Afetuoso": {
        label: "Afetuoso",
        phrases: { titulo: "Afetuoso, é tão bom se sentir seguro. 🔐", subtitulo: "E como essa confiança te faz se sentir?" },
        sub: ["Compaixão", "Cuidado"]
    },
    "Desejoso": {
        label: "Desejoso",
        phrases: { titulo: "Desejoso, que tranquilidade maravilhosa. 🕊️", subtitulo: "E como essa paz se reflete em você agora?" },
        sub: ["Fascínio", "Paixão"]
    },
    "Nostálgico": {
        label: "Nostálgico",
        phrases: { titulo: "Nostálgico, acolher faz bem. 💖", subtitulo: "O que essa aceitação está gerando dentro de você?" },
        sub: ["Atração", "Sensível"]
    },
    "Encantado": {
        label: "Encantado",
        phrases: { titulo: "Encantado, um gesto de amor e proteção. 💝", subtitulo: "E como esse cuidado está te fazendo se sentir agora?" },
        sub: ["Romântico", "Carinho"]
    },
    "Medo": {
        label: "Medo",
        icon: "😰",
        phrases: { titulo: "Medo, opa... algo te deixou apreensivo 😨", subtitulo: "O que exatamente esse medo está te fazendo sentir?" },
        sub: ["Horrorizado", "Inseguro", "Nervoso", "Assustado", "Aterrorizado", "Pânico (Sub)"] // "Pânico (Sub)" para evitar conflito
    },
    "Horrorizado": {
        label: "Horrorizado",
        phrases: { titulo: "Horrorizado, algo muito assustador está acontecendo. 😱", subtitulo: "O que esse horror está te fazendo sentir agora?" },
        sub: ["Mortificado", "Pavor"]
    },
    "Inseguro": {
        label: "Inseguro",
        phrases: { titulo: "Inseguro, parece que tudo balança... 😟", subtitulo: "E como essa insegurança te afeta agora?" },
        sub: ["Inedequação", "Inferioridade"]
    },
    "Nervoso": {
        label: "Nervoso",
        phrases: { titulo: "Nervoso, difícil manter o controle, né? 😬", subtitulo: "O que esse nervosismo provoca em você?" },
        sub: ["Ansiedade", "Preocupação"]
    },
    "Assustado": {
        label: "Assustado",
        phrases: { titulo: "Assustado, algo te deixou alerta. 😨", subtitulo: "E como esse medo está te afetando nesse momento?" },
        sub: ["Abandono", "Amendrontado"]
    },
    "Aterrorizado": {
        label: "Aterrorizado",
        phrases: { titulo: "Aterrorizado, isso parece muito intenso! 😱", subtitulo: "O que esse terror faz você sentir agora?" },
        sub: ["Histeria", "Pânico"]
    },
    "Pânico (Sub)": { // Chave ajustada
        label: "Pânico",
        phrases: { titulo: "Pânico, parece que tudo fugiu do controle... 😵", subtitulo: "E como esse pânico está te impactando?" },
        sub: ["Desespero (Sub2)", "Terror"] // "Desespero (Sub2)" para evitar conflito
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
    "Desespero (Sub2)": { label: "Desespero", finalPhrase: "Você sente desespero" },
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
    "Desiludido": { label: "Desiludido", finalPhrase: "Você se sente desiludido"},
    "Perplexo": { label: "Perplexo", finalPhrase: "Você se sente perplexo"},
    "Atônito": { label: "Atônito", finalPhrase: "Você se sente atônito"},
    "Impressionado": { label: "Impressionado", finalPhrase: "Você se sente impressionado"},
    "Sem palavras": { label: "Sem palavras", finalPhrase: "Você se sente sem palavras"},
    "Tocado": { label: "Tocado", finalPhrase: "Você se sente tocado"}
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
            const normalizedParent = String(parentKey).toLowerCase().replace(/\s|\(|\)/g, '');
            const normalizedKey = String(key).toLowerCase().replace(/\s|\(|\)/g, '');
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

// Listener para o botão Voltar
backButton.addEventListener('click', handleBackClick);

// Inicializa a exibição na primeira camada ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    displayLayer('first');
});