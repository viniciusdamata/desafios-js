var numeros = new Array();
function adicionar() {
    /**
     * Recebe os numeros que o usuario digita e os coloca em um array
     */
    var numero = parseFloat(document.getElementById("num").value);
    document.getElementById("num").value = null;
    numeros.push(numero);
    alert("Valor Adicionado");

}

function calcularmedia() {
    /**
     * Calcula a media e mostra em um alert
     */
    let soma = 0;
    let media = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    media = soma / numeros.length;
    alert("Media: " + media.toFixed(2) + ((media >= 7) ? " Aprovado" : (media >= 4) ? " Exame" : " Reprovado"));
}

function limpar() {
    // limpa o array
    numeros = new Array();
    alert("Numeros Anteriores Apagados");

}