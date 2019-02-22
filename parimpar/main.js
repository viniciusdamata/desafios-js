let numeros = new Array();


function addNumero() {
    /**
     * Obtem o numero por id e realiza a conversão usando 
     * o ParseFloat()
     * Verifica se o numero é NaN ou não
     * Se for NaN o cadastro não é permitido
     */
    let todos = document.getElementById("todos");
    let numero = parseFloat(document.getElementById("numero").value);
    if (!Number.isNaN(numero)) {
        //Numero não é NaN
        // o cadastro é feito normalmente
        numeros.push(numero);
        
        todos.innerText += numero+",";
        alert("Numero Adicionado com Sucesso!");
        document.getElementById("numero").value="";
        
    }else{
        //numero é NaN
        //o numero não é cadastrado
        alert("Digite um numero valido!");
    }
}

function imprimirPares() {
    /**
     * Verifica se o numero é par e
     * o adiciona no innerText de um elemento H2
     */
    document.getElementById("pares").innerText = "";
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            document.getElementById("pares").innerText += numeros[i] + ",";
        }
    }
}

function imprimirImpares() {
     /**
     * Verifica se o numero é impar e
     * o adiciona no innerText de um elemento H2
     */
    document.getElementById("impares").innerText = "";
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 1) {
            document.getElementById("impares").innerText += numeros[i] + ",";
        }
    }
}