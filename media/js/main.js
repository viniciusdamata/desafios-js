function calculamedia(){
    var media = (parseFloat(document.getElementById("n1").value)+
    parseFloat(document.getElementById("n2").value)+
    parseFloat(document.getElementById("n3").value))/3;
    
    alert("Media: "+media+((media >= 7) ?" Aprovado": (media >= 4)?" Exame":" Reprovado"));

}