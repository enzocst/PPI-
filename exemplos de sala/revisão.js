// function mostrar(BomDiaMundo) {
//     console.log(BomDiaMundo);
// };

// mostrar("Bom dia mundo")

// // Número ao Cubo

// function retornar(num) {
//     num = +prompt("Digite um valor");
//     let valor = num ** 3;
//     return valor;
// }

// console.log(retornar());

// // Conversão de Farenheit para Celcius

// function temp(far) {
//     far = +prompt("Digite o valor em Farenheit");
//     let celcius = far - 273;
//     return celcius;
// }

// console.log(temp());

// //Calcular Area de um triangulo

// function calculararea(base, altura) {
//     base = +prompt("Digite a base do triangulo");
//     altura = +prompt("Digite a altura do triangulo");
//     let area = (base * altura) / 2;
//     return area;
// }

// console.log(calculararea());

// //Calcular Area de um Circulo

// function calcularareacirculo(raio) {
//     raio = +prompt("Digite o raio do circulo");
//     let area = Math.PI * raio ** 2;
//     let perimetro = raio * 2 * Math.PI;
//     return [area, perimetro];
// }

// console.log(calcularareacirculo());

// // Mostrar número invertido

// function inverterNumero(numero) {
//     numero = +prompt("Digite um número: ");
//     var numeroString = numero.toString(); // Converter o número para uma string
//     var arrayCaracteres = numeroString.split(''); // Dividir a string em um array de caracteres
//     var arrayInvertido = arrayCaracteres.reverse(); // Inverter a ordem dos caracteres no array
//     var numeroInvertido = arrayInvertido.join(''); // Unir os caracteres novamente em uma string

//     return parseInt(numeroInvertido); // Converter a string invertida de volta para um número
// }

// console.log(inverterNumero());

// // Contar vogais 

// function contarVogais() {
//     let palavra = +prompt('Digite uma palavra:'); // Solicita ao usuário que digite uma palavra
//     let vogais = ['a', 'e', 'i', 'o', 'u'];
//     let contador = 0;

//     for (let i = 0; i < palavra.length; i++) {
//         if (vogais.includes(palavra[i].toLowerCase())) {
//             contador++;
//         }
//     }

//     return contador;
// }

// let numeroVogais = contarVogais();
// console.log('Número de vogais:', numeroVogais);

// // Calcular investimento

// function investimento(capital, meses, taxajuros){
//     capital = +prompt("Digite o capital inicial");
//     meses = +prompt("Digite os meses");
//     taxajuros = +prompt("Digite a taxa em juros")
//     let montante = capital * (1 + taxajuros / 100) ** meses;
//     return montante;
// }

// console.log(investimento());


// // Calcular fatorial

function calcFatorial(num) {
    num = prompt("Digite um número inteiro")

    if(num <= 0) {
        return "Número inválido";
    }
    if(num==1 || num==0){
        return 1;
    }
    return num*calcFatorial(num-1);
}

console.log(calcFatorial());