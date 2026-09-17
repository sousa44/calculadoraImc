"use strict";
// elementos DOM

const calcularImc = document.getElementById("calcularImc");
const pesoInput = document.getElementById("pesoInput");
const alturaInput = document.getElementById("alturaInput");
const resultadoImc = document.getElementById("resultadoImc");
const faixaPeso = document.getElementById("faixaPeso");
const textErro = document.querySelector('.textErro');
const calculoImc = (peso, altura) => {
    const imc = peso / (altura * altura);
    let classificacao;
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    }
    else if (imc < 25) {
        classificacao = 'Peso Normal';
    }
    else if (imc < 30) {
        classificacao = 'Sobrepeso';
    }
    else if (imc < 35) {
        classificacao = 'Obesidade grau I';
    }
    else if (imc < 40) {
        classificacao = 'Obesidade grau II';
    }
    else {
        classificacao = 'Obesidade Grau II';
    }
    resultadoImc.textContent = imc.toFixed(1);
    faixaPeso.textContent = classificacao;
};
// evento  
calcularImc?.addEventListener('click', () => {
    let peso;
    let altura;
    if (pesoInput.value == '' || alturaInput.value == '') {
        textErro.textContent = 'Preencha todos os campos';
        return;
    }
    peso = Number(pesoInput.value.replace(',', '.'));
    altura = Number(alturaInput.value.replace(',', '.'));
    calculoImc(peso, altura);
    // limpando=
    textErro.textContent = "";
    pesoInput.value = "";
    alturaInput.value = "";
});
//# sourceMappingURL=index.js.map