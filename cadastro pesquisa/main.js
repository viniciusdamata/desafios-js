let nomes = new Array();


function addPessoas() {
    /**
     * Obtem o nome por id e salva seu value em uma variavel
     * Adiciona o em um vetor de Strings
     */

    let nome = document.getElementById("nome").value;
    nomes.push(nome);
    document.getElementById("nome").value = "";
    alert("Cadastro realizado com sucesso! ");
}
function busca() {
    /**
     * Obtem o nome a ser buscado por id e salva seu value em uma variavel
     * Escreve um innerText em uma Lista
     * Percorre o vetor procurando a ocorrencia utilizando a função startsWith()
     * Cria um elemento li e coloca o nome encontrado como innerText
     * Adiciona o li criado como child da lista
     */
    let nomeBusca = document.getElementById("busca").value;

    document.getElementById("resultado").innerText = "Resultado da Busca:";
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].toLowerCase().includes(nomeBusca.toLowerCase())) {
            let elemento = document.createElement("li");
            elemento.innerText = nomes[i];
            document.getElementById("resultado").appendChild(elemento);
        }
    }




}