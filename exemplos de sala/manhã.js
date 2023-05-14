// Definindo os produtos vendidos como objetos JSON
const produto1 = {
    nome: "Produto 1",
    quantidade: 3,
    preco: 10.99
};

const produto2 = {
    nome: "Produto 2",
    quantidade: 5,
    preco: 7.5
};

// Imprimindo as informações dos produtos vendidos
console.log("Produto 1:");
console.log("Nome: " + produto1.nome);
console.log("Quantidade: " + produto1.quantidade);
console.log("Preço: R$ " + produto1.preco.toFixed(2));
console.log("\nProduto 2:");
console.log("Nome: " + produto2.nome);
console.log("Quantidade: " + produto2.quantidade);
console.log("Preço: R$ " + produto2.preco.toFixed(2));

// Calculando o preço total das duas vendas
const precoTotal = produto1.quantidade * produto1.preco + produto2.quantidade * produto2.preco;

// Imprimindo o preço total das duas vendas
console.log("\nPreço total das duas vendas: R$ " + precoTotal.toFixed(2));
 
//—----------------------------------------------------------------


    function verificaTrianguloRetangulo(a, b, c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            return false;
        }

        if (
            a * a === b * b + c * c ||
            b * b === a * a + c * c ||
            c * c === a * a + b * b
        ) {
            return true;
        } else {
            return false;
        }
    }

// Solicita os valores dos lados do triângulo ao usuário
const ladoA = parseFloat(prompt("Digite o valor do lado A:"));
const ladoB = parseFloat(prompt("Digite o valor do lado B:"));
const ladoC = parseFloat(prompt("Digite o valor do lado C:"));

// Verifica se os valores formam um triângulo retângulo
const formaTrianguloRetangulo = verificaTrianguloRetangulo(ladoA, ladoB, ladoC);

// Exibe o resultado
if (formaTrianguloRetangulo) {
    console.log("Os valores formam um triângulo retângulo.");
} else {
    console.log("Os valores não formam um triângulo retângulo.");
}


//—---------------------------------------------------


// Array para armazenar as notas dos estudantes
const notas = [];


// Variável para armazenar a soma das notas
let somaNotas = 0;


// Loop para ler as notas dos 10 estudantes
for (let i = 1; i <= 10; i++) {
    const nota = parseFloat(prompt(`Digite a nota do estudante ${i}:`));
    notas.push(nota);
    somaNotas += nota;
}


// Calcula a média aritmética da turma
const mediaTurma = somaNotas / notas.length;


// Conta a quantidade de notas que ficaram na média ou acima dela
let notasAcimaMedia = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= mediaTurma) {
        notasAcimaMedia++;
    }
}


// Exibe os resultados
console.log("Média da turma:", mediaTurma.toFixed(2));
console.log("Notas acima da média:", notasAcimaMedia);


//—---------------------------------------------------------------


    function getDataPorExtenso(data) {
        // Divide a data em dia, mês e ano
        const partesData = data.split('/');
        const dia = parseInt(partesData[0]);
        const mes = parseInt(partesData[1]);
        const ano = parseInt(partesData[2]);

        // Arrays com os nomes dos meses e dos números
        const nomesMeses = [
            'janeiro', 'fevereiro', 'março', 'abril',
            'maio', 'junho', 'julho', 'agosto',
            'setembro', 'outubro', 'novembro', 'dezembro'
        ];
        const numerosPorExtenso = [
            '', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis',
            'sete', 'oito', 'nove', 'dez', 'onze', 'doze',
            'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete',
            'dezoito', 'dezenove', 'vinte', 'vinte e um',
            'vinte e dois', 'vinte e três', 'vinte e quatro',
            'vinte e cinco', 'vinte e seis', 'vinte e sete',
            'vinte e oito', 'vinte e nove', 'trinta', 'trinta e um'
        ];

        // Monta a data por extenso
        const dataPorExtenso = dia + ' de ' + nomesMeses[mes - 1] + ' de ' + ano;

        return dataPorExtenso;
    }

// Exemplo de uso da função
const data = prompt('Digite uma data no formato dd/mm/aaaa:');
const dataPorExtenso = getDataPorExtenso(data);
console.log('Data por extenso:', dataPorExtenso);