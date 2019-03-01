const formulaJuros = (diasAtraso, juros, valor)=> diasAtraso*(((juros/30)/100)*valor); 
const parseDay = (data)=> parseInt(data / 8.64e+7);
const formulaMulta = (multa, valor)=> (multa/100) * valor;

function calculaJuros(){
    let valor = parseFloat(document.getElementById("valor").value);
    let dataVenc = new Date(document.getElementById("data").value);
    let dataAtual = new Date();
    let diasAtraso = parseDay(dataAtual - dataVenc)
    let juros = parseFloat(document.getElementById("juros").value);
    let multa = parseFloat(document.getElementById("multa").value);
  
    document.getElementById("valor-multa").innerText+=" "+formulaMulta(multa, valor);
    document.getElementById("dias-atraso").innerText+=" "+diasAtraso;
    document.getElementById("valor-juros").innerText+=" "+formulaJuros(diasAtraso, juros, valor).toFixed(2);
    document.getElementById("total").innerText+=" "+(valor+formulaMulta(multa, valor)+formulaJuros(diasAtraso, juros, valor));
    
    
}

