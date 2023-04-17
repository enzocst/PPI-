let data1 = prompt("Coloque a primeira data");
let data2 = prompt("Coloque a segunda data");

let valor1 = +data1.split("/")[2];
let valor2 = +data2.split("/")[2];

let diferença = valor2 - valor1;

console.log(diferença);