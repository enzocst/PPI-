let data1 = prompt("Coloque a primeira data");
let data2 = prompt("Coloque a segunda data");

let valor1 = data1.split("/");
let valor2 = data2.split("/");

let diferença = data2 - data1;

console.log(diferença);