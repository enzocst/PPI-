"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo de uso da classe Correntista
const exemplo1_1 = require("./exemplo1");
const dataNascimento = new Date("1990-01-15"); // Exemplo de data de nascimento: 15 de janeiro de 1990
const correntista = new exemplo1_1.Correntista("Fulano de Tal", "12345678901", dataNascimento, "(00) 1234-5678");
console.log("Nome:", correntista.obterNome());
console.log("CPF:", correntista.obterCpf());
console.log("Data de Nascimento:", correntista.obterDataNascimento());
console.log("Telefone:", correntista.obterTelefone());
