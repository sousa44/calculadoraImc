// elementos DOM

const calcularImc = document.getElementById("calcularImc") as HTMLButtonElement;
const pesoInput = document.getElementById("pesoInput") as HTMLInputElement;
const alturaInput = document.getElementById("alturaInput") as HTMLInputElement;
const resultadoImc = document.getElementById("resultadoImc") as HTMLParagraphElement;
const faixaPeso = document.getElementById("faixaPeso") as HTMLParagraphElement;
const textErro = document.querySelector('.textErro') as HTMLParagraphElement



const calculoImc = (peso: number, altura: number) => {


    const imc: number = peso / (altura * altura);
    let classificacao: string;

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso Normal'
    } else if (imc < 30) {
        classificacao = 'Sobrepeso'
    } else if (imc < 35) {
        classificacao = 'Obesidade grau I'
    } else if (imc < 40) {
        classificacao = 'Obesidade grau II'
    } else {
        classificacao = 'Obesidade Grau II'
    }

    resultadoImc.textContent = imc.toFixed(1);
    faixaPeso.textContent = classificacao

}




// evento  
calcularImc?.addEventListener('click', () => {

    let peso: number;
    let altura: number;

    if (pesoInput.value == '' || alturaInput.value == '') {

        textErro.textContent = 'Preencha todos os campos'

        return
    }

    peso = Number(pesoInput.value.replace(',', '.'))
    altura = Number(alturaInput.value.replace(',', '.'));

    calculoImc(peso, altura)



    // limpando=
    textErro.textContent = "";
    pesoInput.value = "";
    alturaInput.value = "";


})