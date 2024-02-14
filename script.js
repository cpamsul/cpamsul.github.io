document.addEventListener('DOMContentLoaded', function() {
    // Preencher automaticamente o campo de data com a data atual por extenso
    const dataElement = document.getElementById('dataExtenso');
    const dataAtual = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);
    dataElement.innerHTML = dataFormatada;
});

function validarNumeros(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
}
