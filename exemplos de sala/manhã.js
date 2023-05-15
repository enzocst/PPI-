// Representação das vendas de dois produtos como objetos JSON
var venda1 = {
    nome: "Geladeira",
    quantidade: 1,
    preco: 1237.98
};

var venda2 = {
    nome: "Televisão",
    quantidade: 3,
    preco: 899.00
};

// Função para calcular o preço total de uma venda
function calcularPrecoTotal(venda) {
    return venda.quantidade * venda.preco;
}

// Imprimindo as informações dos produtos vendidos
console.log("Venda 1:");
console.log("Nome: " + venda1.nome);
console.log("Quantidade: " + venda1.quantidade);
console.log("Preço: R$" + venda1.preco.toFixed(2));

console.log("\nVenda 2:");
console.log("Nome: " + venda2.nome);
console.log("Quantidade: " + venda2.quantidade);
console.log("Preço: R$" + venda2.preco.toFixed(2));

// Calculando o preço total das duas vendas
var precoTotal = calcularPrecoTotal(venda1) + calcularPrecoTotal(venda2);
console.log("\nPreço total das duas vendas: R$" + precoTotal.toFixed(2));

//—----------------------------------------------------------------


function verificarTrianguloRetangulo(a, b, c) {
    // Verifica se os valores são maiores que zero
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }

    // Verifica a condição do triângulo retângulo
    if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
        return true;
    } else {
        return false;
    }
}

// Exemplos de uso da função
console.log(verificarTrianguloRetangulo(5, 4, 3)); // true
console.log(verificarTrianguloRetangulo(17, 8, 12)); // false



//—---------------------------------------------------


var notas = [];
var somaNotas = 0;
var quantidade = 10;

// Lendo as notas dos estudantes e calculando a soma das notas
for (var i = 1; i <= quantidade; i++) {
    var nota = parseFloat(prompt("Digite a nota do estudante " + i + ":"));
    notas.push(nota);
    somaNotas += nota;
}

// Calculando a média aritmética da turma
var mediaTurma = somaNotas / quantidade;

// Contando quantas notas ficaram na média ou acima dela
var notasAcimaOuNaMedia = 0;
for (var i = 0; i < quantidade; i++) {
    if (notas[i] >= mediaTurma) {
        notasAcimaOuNaMedia++;
    }
}

// Imprimindo os resultados
console.log("Média aritmética da turma: " + mediaTurma.toFixed(2));
console.log("Quantidade de notas acima ou na média: " + notasAcimaOuNaMedia);



//—---------------------------------------------------------------


function dataPorExtenso(data) {
    var partes = data.split('/');
    var dia = parseInt(partes[0]);
    var mes = parseInt(partes[1]);
    var ano = parseInt(partes[2]);

    var meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    var dataExtenso = dia + " de " + meses[mes - 1] + " de " + ano;
    return dataExtenso;
}

// Exemplo de uso da função
var data = prompt("Digite uma data no formato dd/mm/aaaa:");
var dataExtenso = dataPorExtenso(data);
console.log(dataExtenso);
