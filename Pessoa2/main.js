"use strict"
let pessoas = new Array();
function getPessoa() {
    let nome = document.getElementById("nome").value;
    let sexo = document.getElementsByName("genero");
    let idade = parseInt(document.getElementById("idade").value);

    if (sexo[0].checked) {
        sexo = "Masculino";
    } else {
        sexo = "Feminino";
    }

    var pessoa = {
        nome: nome, sexo: sexo, idade: idade
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
            item.innerHTML = "\n Nome: " + element.nome + " sexo: " + element.sexo + " Idade: " + element.idade;
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
            item.innerHTML = "\n Nome: " + element.nome + " sexo: " + element.sexo + " Idade: " + element.idade;
            document.getElementById("lista-m").appendChild(item);

        }

    });
}

function listarCriancas() {
    document.getElementById("lista-c").innerHTML = "Lista de Crianças";
    pessoas.forEach(element => {
        let item;
        if (element.idade <= 14) {
            item = document.createElement("li");
            item.innerHTML = "\n Nome: " + element.nome + " sexo: " + element.sexo + " Idade: " + element.idade;
            document.getElementById("lista-c").appendChild(item);

        }

    });

}

function listarAdolescentes() {
    document.getElementById("lista-ado").innerHTML = "Lista de Adolescentes";
    pessoas.forEach(element => {
        let item;
        if (element.idade >= 15 && element.idade <= 21) {
            item = document.createElement("li");
            item.innerHTML = "\n Nome: " + element.nome + " sexo: " + element.sexo + " Idade: " + element.idade;
            document.getElementById("lista-ado").appendChild(item);

        }

    });

}
function listarAdultos() {
    document.getElementById("lista-adu").innerHTML = "Lista de Adultos";
    pessoas.forEach(element => {
        let item;
        if (element.idade >= 22 && element.idade <= 63) {
            item = document.createElement("li");
            item.innerHTML = "\n Nome: " + element.nome + " sexo: " + element.sexo + " Idade: " + element.idade;
            document.getElementById("lista-adu").appendChild(item);

        }

    });
}

function listarIdosos() {
    document.getElementById("lista-i").innerHTML = "Lista de Idosos";
    pessoas.forEach(element => {
        let item;
        if (element.idade >= 63) {
            item = document.createElement("li");
            item.innerHTML = "\n Nome: " + element.nome + " sexo: " + element.sexo + " Idade: " + element.idade;
            document.getElementById("lista-i").appendChild(item);

        }

    });


}

