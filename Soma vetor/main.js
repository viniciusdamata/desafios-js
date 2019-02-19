var numeros = new Array();
function adicionar(){
    var numero = parseFloat(document.getElementById('num').value);
    document.getElementById('num').value = null;
    numeros.push(numero);
    alert("Valor Adicionado");
    console.log(numeros);
    
}

function calcularmedia(){
    let soma = 0;
    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    alert(soma/numeros.length);
}

function limpar(){
    numeros = new Array();
    alert("Numeros Anteriores Apagados");
    
}