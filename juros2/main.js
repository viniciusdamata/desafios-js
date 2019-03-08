const formulaJuros = (d) => d.diasAtraso * (((d.juros / 30) / 100) * d.valor);
const parseDay = (data) => parseInt(data / 8.64e+7);
const formulaMulta = (d) => (d.multa / 100) * d.valor;
const elementRemove = (e) => {
    if (e != null) {
        e.remove();
    }
};
const escreve = (d, i) => {
    elementRemove(document.getElementsByClassName("resultados")[i]);
    let div = document.createElement("div");
    div.className = "resultados";
    div.innerHTML =`<p>Multa: ${formulaMulta(d).toFixed(2)} Dias atraso: ${d.diasAtraso} 
    Juros: ${formulaJuros(d).toFixed(2)} Total: ${(d.valor + formulaMulta(d) + formulaJuros(d)).toFixed(2)}<p>`
    document.getElementsByClassName("container")[i].appendChild(div);

};
const somaTotal = (d, dt) => {
    dt.valor += (d.valor + formulaMulta(d) + formulaJuros(d));
    dt.juros += formulaJuros(d);
    dt.multa += formulaMulta(d);
    dt.dias += d.diasAtraso;
}
const escreveTotal = (dt) => {
    elementRemove(document.getElementById("res-total"));
    let divTotal = document.createElement("div");
    divTotal.className += "resultados";
    divTotal.id = "res-total";
    divTotal.innerHTML=`<h2>${dt.print()}<h2>`;
    document.getElementById("entrada").appendChild(divTotal);
}

function calculaJuros() {

    let valor = document.getElementsByClassName("valor");
    let data = document.getElementsByClassName("data");
    let dataAtual = new Date();
    let divida;

    let dividaTotal = {
        valor: 0,
        juros: 0,
        multa: 0,
        dias: 0,
        print: function () {
            return `Divida Total: Valor: ${this.valor.toFixed(2)} Juros: ${this.juros.toFixed(2)} Multa: ${this.multa.toFixed(2)} Dias Total: ${this.dias.toFixed(0)}`
        }

    };

    for (let i = 0; i < valor.length; i++) {
        divida = {
            valor: parseFloat(valor[i].value),
            dataVenc: new Date(data[i].value),
            diasAtraso: parseDay(dataAtual - new Date(data[i].value)),
            juros: parseFloat(document.getElementById("juros").value),
            multa: parseFloat(document.getElementById("multa").value)

        };

        escreve(divida, i);
        somaTotal(divida, dividaTotal)
    }
    escreveTotal(dividaTotal);
    console.log(dividaTotal.print())
}