var notas = [];
var somaNotas = 0;
var quantidade = 10; // Quantidade de estudantes

// Lendo as notas dos estudantes
for (var i = 1; i <= quantidade; i++) {
    var nota = parseFloat(prompt("Digite a nota do estudante " + i + ":"));
    notas.push(nota);
    somaNotas += nota;
}

// Calculando a média
var media = somaNotas / quantidade;

// Contadores para as notas abaixo, na média e acima da média
var abaixoMedia = 0;
var naMedia = 0;
var acimaMedia = 0;

// Inicializando a maior e a menor nota
var maiorNota = notas[0];
var menorNota = notas[0];

// Verificando cada nota
for (var j = 0; j < quantidade; j++) {
    var notaAtual = notas[j];

    // Verificando se é a maior nota
    if (notaAtual > maiorNota) {
        maiorNota = notaAtual;
    }

    // Verificando se é a menor nota
    if (notaAtual < menorNota) {
        menorNota = notaAtual;
    }

    // Contando as notas abaixo, na média e acima da média
    if (notaAtual < media) {
        abaixoMedia++;
    } else if (notaAtual === media) {
        naMedia++;
    } else {
        acimaMedia++;
    }
}

// Imprimindo os resultados
console.log("Quantidade de estudantes abaixo da média: " + abaixoMedia);
console.log("Quantidade de estudantes na média: " + naMedia);
console.log("Quantidade de estudantes acima da média: " + acimaMedia);
console.log("Maior nota: " + maiorNota);
console.log("Menor nota: " + menorNota);