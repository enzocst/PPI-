let inicial = prompt("Digite o capital inicial");
let juros = prompt("Digite a quantidade de juros");
let total = inicial * (1 + juros) ** 240;
console.log(total);