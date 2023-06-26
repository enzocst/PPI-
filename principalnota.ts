import { Nota } from "./nota";

let raissaPPI = new Nota(10,60,54,90);
console.log(raissaPPI);
raissaPPI.alterarBim2(65);
console.log(raissaPPI);

let carlosSOR = new Nota(0, 30, 40, 78);
console.log(`Nota B3 Carlos = ${carlosSOR.obterBim3()}`);
console.log(`Média = ${carlosSOR.calcularMédiaParcial()}`);