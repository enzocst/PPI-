let horastrab = prompt("Digite suas horas trabalhadas");
let valorpago = prompt("Digite o valor pago por cada hora");   

if (horastrab > 40){
    let extras = horastrab - 40;
    pagamento = (40 * valorpago) + (extras)
} else {
    pagamento = horastrab * valorpago;
}
console.log(pagamento);