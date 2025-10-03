document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('subemotion-title');
    const description = document.getElementById('subemotion-description');
    
    // Recupera a emoção final que foi salva no localStorage
    const finalFeeling = localStorage.getItem('sentimentoFinalSelecionado');
    
    if (finalFeeling) {
        title.textContent = finalFeeling;
        description.textContent = "Reconhecer e nomear o que sentimos é o primeiro passo para o autoconhecimento. Tire um momento para refletir sobre essa emoção.";
        
        // Você pode adicionar uma lógica mais complexa aqui
        // Por exemplo, exibir diferentes descrições ou cards de ação
        // dependendo da emoção final.
        // if (finalFeeling.includes('Raiva')) {
        //     description.textContent = "A raiva pode ser um sinal de que algo precisa ser mudado. Tente entender a causa para poder agir.";
        // }
        
    } else {
        title.textContent = "Nenhuma emoção selecionada.";
        description.textContent = "Volte para a página principal para começar a Roda de Sentimentos.";
    }
});