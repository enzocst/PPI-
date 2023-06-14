let valor = prompt("Digite o valor do produto");
let condicao = prompt("Digite os seguintes codigos para as condições de pagamentos: 1: A vista, 2: Debito ou pix, 3: Até 3x no cartão, 4: Até 5 no cartão");

if(condicao = 1){
    valor = valor - (valor * 0.15);
} else if (condicao = 2){
    valor = valor - (valor * 0.10);
}
else if (condicao = 3){
    valor = valor = valor;
}
else if (condicao = 4){
    valor = valor - (valor * 0.03);
}

console.log(valor);