document.addEventListener('DOMContentLoaded', function () {
    const tiposPneu = document.getElementById('tipos-pneu');
    const detalhes = document.getElementById('detalhes');

    // Adicione informações detalhadas conforme necessário
    const detalhesPneu = {
        'Convencional': 'otimo pneu...',
        'Off-road': 'otimo pneu...',
        'Pneu Misto': 'otimo pneu...',
        'Pneus Verdes': 'otimo pneu...',
        'Pneus Radicais': 'otimo pneu...',
        'Pneus de Carga': 'otimo pneu...',
        'Pneus de trator': 'otimo pneu...',
        'Pneus de aviao': 'otimo pneu...',
        'Pneus de fusca turbinado': 'otimo pneu...',
        'Pneus de caminhao': 'otimo pneu...',
        'Pneus de cariola': 'otimo pneu...',
        // Adicione mais informações conforme necessário
    };

    // Função para exibir detalhes quando um tipo de pneu for clicado
    function exibirDetalhes(tipo) {
        detalhes.innerHTML = `<p>${detalhesPneu[tipo]}</p>`;
    }

    // Adicione eventos de clique para cada tipo de pneu
    tiposPneu.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            exibirDetalhes(event.target.textContent);
        }
    });
});
