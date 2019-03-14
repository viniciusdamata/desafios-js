function calculamedia() {
    /**
     * Calcula a media e mostra o resultado em um alert
     * conforme a classificação
     * >=7 aprovado
     * >=4 exame
     * <4 reprovado
     */
    var media = (parseFloat(document.getElementById("n1").value) +
        parseFloat(document.getElementById("n2").value) +
        parseFloat(document.getElementById("n3").value)) / 3;

    alert("Media: " + media + ((media >= 7) ? " Aprovado" : (media >= 4) ? " Exame" : " Reprovado"));

}