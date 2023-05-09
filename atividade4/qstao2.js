
let cpf = prompt("Digite os 9 primeiros algarismos do CPF:");


let soma1 = 0;
for (let i = 0; i < 9; i++) {
  soma1 += parseInt(cpf.charAt(i)) * (10 - i);
}
let resto1 = soma1 % 11;
let d1 = (resto1 < 2) ? 0 : 11 - resto1;


cpf += d1;


let soma2 = 0;
for (let i = 0; i < 10; i++) {
  soma2 += parseInt(cpf.charAt(i)) * (11 - i);
}
let resto2 = soma2 % 11;
let d2 = (resto2 < 2) ? 0 : 11 - resto2;

alert("Os verificadores são: " + d1 + d2);
