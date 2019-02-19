"use strict"
let pessoas = new Array();
function getpessoa() {
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

