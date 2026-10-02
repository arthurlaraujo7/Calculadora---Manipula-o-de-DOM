function obterNumeros() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
        exibirResultado('Por favor, insira números válidos.');
        return null;
    }

    return { num1, num2 };
}

function exibirResultado(resultado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = resultado;
}

function somar() {
    const numeros = obterNumeros();
    if (numeros) {
        const resultado = numeros.num1 + numeros.num2;
        exibirResultado(`Resultado: ${resultado}`);
    }
}

function subtrair() {
    const numeros = obterNumeros();
    if (numeros) {
        const resultado = numeros.num1 - numeros.num2;
        exibirResultado(`Resultado: ${resultado}`);
    }
}

function multiplicar() {
    const numeros = obterNumeros();
    if (numeros) {
        const resultado = numeros.num1 * numeros.num2;
        exibirResultado(`Resultado: ${resultado}`);
    }
}

function dividir() {
    const numeros = obterNumeros();
    if (numeros) {
        if (numeros.num2 === 0) {
            exibirResultado('Erro: Divisão por zero não é permitida.');
        } else {
            const resultado = numeros.num1 / numeros.num2;
            exibirResultado(`Resultado: ${resultado}`);
        }
    }
}

function limpar() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    exibirResultado('');
}