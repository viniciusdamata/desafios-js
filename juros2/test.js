document.getElementById("juros").value="1";
document.getElementById("multa").value="2";
let testValor = document.getElementsByClassName("valor");
let testData = document.getElementsByClassName("data");
for(let i = 0; i < testValor.length; i++){
    testValor[i].value="30"+i;
}
for(let i = 0; i < testValor.length; i++){
    testData[i].value="2019-0"+(i+1)+"-02";
}
