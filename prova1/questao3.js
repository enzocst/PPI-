let notas = [];
let somadasnotas = 0;
let quantidadenotas = 10;

for (let i = 1; i <= quantidadenotas; i++) {
    let nota = parseFloat(prompt("Digite a nota do estudante " + i + ":"));
    notas.push(nota);
    somadasnotas += nota;
}

let mediadaturma = somadasnotas / quantidadenotas;
let notaacimaoumedia = 0;

for (let i = 0; i < quantidadenotas; i++) {
    if (notas[i] >= mediadaturma) {
        notaacimaoumedia++;
    }
}

console.log("A média da turma é " + mediadaturma);
console.log("Quantidade de notas a cima ou na média " + notaacimaoumedia);