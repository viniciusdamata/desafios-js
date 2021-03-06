const formulaJuros = (d) => d.diasAtraso * (((d.juros / 30) / 100) * d.valor);
const parseDay = (data) => parseInt(data / 8.64e+7);
const formulaMulta = (d) => (d.multa / 100) * d.valor;
const elementRemove = (e) => {if (e != null) e.remove();}

function escreve(d, i) {
     /**
      * Utiliza a função element remove para remover caso exista um elemento com a
     * Mesma classe na mesma posição
     * Cria uma div e insere nela os resultados das operações
     * Insere a div criada na div principal
     */
    elementRemove(document.getElementsByClassName("resultados")[i]);
    let div = document.createElement("div");
    div.className = "resultados";
    div.innerHTML = `<p>Multa: ${formulaMulta(d).toFixed(2)} Dias atraso: ${d.diasAtraso} 
    Juros: ${formulaJuros(d).toFixed(2)} Total: ${(d.valor + formulaMulta(d) + formulaJuros(d)).toFixed(2)}<p>`
    document.getElementsByClassName("container")[i].appendChild(div);

}

function somaTotal(d, dt) {
    /**
     * Calcula a soma do valor, juros, multa e dias 
     * e coloca no objeto divida total
     */
    dt.valor += (d.valor + formulaMulta(d) + formulaJuros(d));
    dt.juros += formulaJuros(d);
    dt.multa += formulaMulta(d);
    dt.dias += d.diasAtraso;
}

function escreveTotal(dt) {
    /**
     * Utiliza a função element remove para remover caso exista um elemento com o
     * mesmo id 
     * Recebe um objeto divida total e cria uma div com seus 
     * dados, após isso insere o na div principal entrada
     * 
     */
    elementRemove(document.getElementById("res-total"));
    let divTotal = document.createElement("div");
    divTotal.className += "resultados";
    divTotal.id = "res-total";
    divTotal.innerHTML = `<h2>${dt.print()}<h2>`;
    document.getElementById("entrada").appendChild(divTotal);
}

function calculaJuros() {
    /**
     * percorre o for com a quantidade de elementos na tela e:
     *  -Cria um objeto para cada mensalidade na tela  
     *   -Cria um objeto divida total
     *   -Chama a função escreve, que é responsavel por calcular e mostrar o resultado 
     *      de cada mensalidade na tela
     *   -Chama a função soma total que é responsavel por calcular a soma de todas as parcelas
     * -Chama a função escreve total que é responsavel por escrever na tela a soma de todas as parcelas
     */

    let valor = document.getElementsByClassName("valor");
    let data = document.getElementsByClassName("data");
    let dataAtual = new Date();
    let divida;
    //cria um objeto para guardar o total
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
        //cria um objeto para cada parcela na tela
        divida = {
            valor: parseFloat(valor[i].value),
            dataVenc: new Date(data[i].value),
            diasAtraso: parseDay(dataAtual - new Date(data[i].value)),
            juros: parseFloat(document.getElementById("juros").value),
            multa: parseFloat(document.getElementById("multa").value)

        };
        //calcula e escreve na tela
        escreve(divida, i);
        //soma o total 
        somaTotal(divida, dividaTotal)
    }
    //escreve o total
    escreveTotal(dividaTotal);
}