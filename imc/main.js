let imc = 0;
let classif;
function calcularIMC() {
    /**
     * recebe a altura e o peso e calcula o imc
     */
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    imc = peso / (altura * altura);
    classif = document.getElementById("class-area");
    classif.innerText = "IMC=" + imc.toFixed(2);

}
function classificacao() {
    /**
     * Faz a classificação e muda a cor da div conforme a classificação
     */
    if (imc == 0) {
        alert("use o botão calcular primeiro");
    }
    if (imc < 18) {
        classif.style.backgroundColor = "red";
        classif.innerText = "IMC=" + imc.toFixed(2)+" Abaixo do Peso";
    } else if (imc <= 25) {
        //azul
        classif.style.backgroundColor = "blue";
        classif.innerText = "IMC=" + imc.toFixed(2)+" Ideal";
    } else if (imc <= 30) {
        classif.style.backgroundColor = "yellow";
        classif.innerText = "IMC=" + imc.toFixed(2)+" Sobrepeso";
        //amarelo
    } else if (imc <= 35) {
        classif.style.backgroundColor = "orange";
        classif.innerText = "IMC=" + imc.toFixed(2)+" Obesidade 1";
        //laranja
    } else if (imc <= 40) {
        classif.style.backgroundColor = "purple";
        classif.innerText = "IMC=" + imc.toFixed(2)+" Obesidade 2";
        //roxo
    } else if (imc > 40) {
        classif.style.backgroundColor = "black";
        classif.style.color = "white";
        classif.innerText += "IMC=" + imc.toFixed(2)+" Obesidade 3";
        //preto
    }
}