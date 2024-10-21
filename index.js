// Variáveis globais
let contador = 0; // Armazena o valor atual do contador
let contando = false; // Flag para indicar se o contador está rodando
let startTime; // Armazena o tempo inicial
let intervalId; // Armazena o ID do intervalo para poder pará-lo depois

// Seleção dos elementos 
const contadorElement = document.getElementById('contador');
const iniciarButton = document.getElementById('iniciar');
const pararButton = document.getElementById('parar');
const resetButton = document.getElementById('reset');

// Função para atualizar o contador
function atualizarContador() {
    const currentTime = new Date().getTime(); // Obtém o tempo atual
    const elapsedTime = (currentTime - startTime) / 1000; // Calcula o tempo decorrido em segundos
    contador = elapsedTime; // Atualiza o valor do contador
    contadorElement.textContent = contador.toFixed(3); // Atualiza o display com 3 casas decimais
}

// Event listener para o botão "Iniciar"
iniciarButton.addEventListener('click', () => {
    if (!contando) { // Verifica se o contador não está rodando
        contando = true; // Marca que o contador está rodando
        startTime = new Date().getTime() - (contador * 1000); // Define o tempo inicial, considerando o valor atual do contador
        intervalId = setInterval(atualizarContador, 10); // Inicia a atualização a cada 10ms para maior precisão
    }
});

// Event listener para o botão "Parar"
pararButton.addEventListener('click', () => {
    if (contando) { // Verifica se o contador está rodando
        contando = false; // Marca que o contador parou
        clearInterval(intervalId); // Para a atualização do contador
    }
});

// Event listener para o botão "Reset"
resetButton.addEventListener('click', () => {
    contando = false; // Marca que o contador parou
    clearInterval(intervalId); // Para a atualização do contador
    contador = 0; // Reseta o valor do contador
    contadorElement.textContent = '0.000'; // Atualiza o display
});

// Inicializa o display
contadorElement.textContent = '0.000';