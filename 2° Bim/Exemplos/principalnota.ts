import { Nota } from "./nota";

let raissa = new Nota(10,60,54,90);


console.log(`MP Raíssa: ${raissa.calcularMédiaParcial()}`)
console.log(`Situação Raissa: ${raissa.obterSituação()}`)
console.log(`MF Raíssa: ${raissa.calcularMédiaFinal(90)}`)
console.log(`Situação Raíssa: ${raissa.obterSituação()}`)
