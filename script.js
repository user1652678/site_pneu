document.addEventListener('DOMContentLoaded', function () {
    const tiposPneu = document.getElementById('tipos-pneu');
    const detalhes = document.getElementById('detalhes');

    // Adicione informações detalhadas conforme necessário
    const detalhesPneu = {
        'Convencional': 'quando a carcaça é composta por lonas sobrepostas e cruzadas umas em relação às outras...',
        'Off-road': 'para quem gosta de estar em terrenos arenosos, pedregosos ou com muita lama....',
        'Pneu Misto': 'Um olho na altura dos sulcos e o outro no desenho da banda de rodagem. ...',
        'Pneus Verdes': 'otimo pneu...',
        'Pneus Radicais': 'apresenta camadas radiais transversais que funcionam na direção horizontal ao deslocamento....',
        'Pneus de fuga': 'otimo pneu...',
        'Pneus de trator': 'otimo pneu...',
        'Pneus de aviao': 'são construídos de 3 principais materiais, que são: aço, borracha e tecido. ...',
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
