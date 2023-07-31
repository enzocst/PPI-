import { Hospede, Aposento, Hospedagem } from "./q2";
const hospede1 = new Hospede("José", "011.151.154.88", 983747646,"Rua Jumentos dos campos");
const aposento1 = new Aposento("Suíte", 150);
const hospedagem1 = new Hospedagem(aposento1);
hospedagem1.hospedar(hospede1);

const valorTotal = hospedagem1.calcular_total(5);
console.log("Valor total da hospedagem:", valorTotal);

const hospedesHospedagem1 = hospedagem1.obterhospedes();
const aposentoHospedagem1 = hospedagem1.obteraposento();

console.log("Hóspedes na hospedagem:", hospedesHospedagem1.map(h => h.obternome()));
console.log("Aposento reservado:", aposentoHospedagem1.obtertipo());
console.log("Preço por diária:", aposentoHospedagem1.obterprecodiaria());