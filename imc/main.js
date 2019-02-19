let imc = 0;
let classif;
function calcularIMC() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    imc = peso / (altura * altura);
    classif = document.getElementById('class-area');
    classif.innerText = "IMC=" + imc.toFixed(2);
    document.getElementById("btn").disabled = false;

}
function classificacao() {
    document.getElementById("btn").disabled = true;
    if (imc == 0) {
        alert('use o botão calcular primeiro');
    }
    if (imc < 18) {
        classif.style.backgroundColor = 'red';
        classif.innerText += ' Abaixo do Peso';
    } else if (imc <= 25) {
        //azul
        classif.style.backgroundColor = 'blue';
        classif.innerText += ' Ideal';
    } else if (imc <= 30) {
        classif.style.backgroundColor = 'yellow';
        classif.innerText += ' Sobrepeso';
        //amarelo
    } else if (imc <= 35) {
        classif.style.backgroundColor = 'orange';
        classif.innerText += ' Obesidade 1';
        //laranja
    } else if (imc <= 40) {
        classif.style.backgroundColor = 'purple';
        classif.innerText += ' Obesidade 2';
        //roxo
    } else if (imc > 40) {
        classif.style.backgroundColor = 'black';
        classif.style.color = 'white';
        classif.innerText += ' Obesidade 3';
        //preto
    }
}