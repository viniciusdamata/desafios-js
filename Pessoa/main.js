let pessoas = new Array();
function getpessoa() {
    /**
     * Recebe os dados
     * Cria objetos e coloca os no array
     */
    let nome = document.getElementById("nome").value;
    let sexo = document.getElementsByName("genero");

    if (sexo[0].checked) {
        sexo = "Masculino";
    } else {
        sexo = "Feminino";
    }

    var pessoa = {
        nome: nome, sexo: sexo
    }
    pessoas.push(pessoa);
    console.log(pessoas)
    alert("Adicionado com sucesso! ");

}
function listarHomens() {
    /**
     * Exibe apenas os homens cadastrados
     */
    document.getElementById("lista-h").innerHTML = "Lista de Homens";
    pessoas.forEach(element => {
        let item;
        if (element.sexo == "Masculino") {
            item = document.createElement("li");
            item.innerHTML = "\n Nome: " + element.nome + " sexo: " + element.sexo;
            document.getElementById("lista-h").appendChild(item);

        }

    });
}
function listarMulheres() {
    /**
     * Exibe apenas as mulheres cadastradas
     */
    document.getElementById("lista-m").innerHTML = "Lista de Mulheres";
    pessoas.forEach(element => {
        let item;
        if (element.sexo == "Feminino") {
            item = document.createElement("li");
            item.innerHTML = "\n Nome: " + element.nome + " sexo: " + element.sexo;
            document.getElementById("lista-m").appendChild(item);

        }

    });
}

