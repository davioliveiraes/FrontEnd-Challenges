var peso;
var altura;
var imc;
var resultado;

function calcularIMC(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    resultado = document.getElementById('resultado');

    imc = peso / (altura * altura);


    if (imc < 18.5) {

        resultado.innerHTML = 'Seu resultado foi: ' + imc.toFixed(2) + '<br/> Situação: MAGREZA </br> Sintomas: Fadiga, stress, ansiedade!!!'

    } else if (imc >= 18.5 && imc <= 24.9) {

        resultado.innerHTML = 'Seu resultado foi: ' + imc.toFixed(2) + '</br>Situação:PESO NORMAL </br> Sintomas: Menor risco de doenças cadiovasculares e vaculares!!!'

    } else if (imc >= 25 && imc <= 29.9) {

        resultado.innerHTML = 'Seu resultado foi: ' + imc.toFixed(2) + '</br> Situação: SOBREPESO </br> Sintomas: Fadiga, má circulação, varizes!!!'

    } else if (imc >= 30 && imc <= 34.9) {

        resultado.innerHTML = 'Seu resultado foi: ' + imc.toFixed(2) + '</br>Situação: OBESIDADE GRAU I</br>Sintomas: Diabetes, angina, infarto, aterosclerose!!!'

    } else if (imc >= 35 && imc <= 40) {

        resultado.innerHTML = 'Seu resultado foi:' + imc.toFixed(2) + '</br>Situação: OBESIDADE GRAU II</br>Sintomas: Apneia de sono, falta de ar';

    } else if (imc > 40) {

        resultado.innerHTML = 'Seu resultado foi:' + imc.toFixed(2) + '</br> Situação: OBESIDADE GRAU III</br>Sintomas: Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC';

    } else {

        resultado.innerHTML = "Verifique se os campos estão preenchidos corretamente ou seus dados não correspondem a tabela IMC, de acordo com a Organização Mundial da Saúde!!!";

    }

    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    resultado.classList.remove("hide")

}