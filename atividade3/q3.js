let voto = 0;
let votosdoscandidatos = [0, 0, 0, 0];
let votosembranco = 0;
let nulos = 0;

while (voto !== 1234) {
    voto = parseInt(prompt("Digite o número do candidato entre 11, 33, 44, 99, 0 para voto em branco ou qualquer outro número para votar nulo:"));
    if (voto === 11) {
        votosdoscandidatos[0]++;
    } else if (voto === 33) {
        votosdoscandidatos[1]++;
    } else if (voto === 44) {
        votosdoscandidatos[2]++;
    } else if (voto === 99) {
        votosdoscandidatos[3]++;
    } else if (voto === 0) {
        votosembranco++;
    } else if (voto !== 1234) {
        nulos++;
    }
}

console.log("Total de votos para cada candidato:");
console.log("Cecília Meireles (11): " + votosdoscandidatos[0]);
console.log("Ariano Suassuna (33): " + votosdoscandidatos[1]);
console.log("Machado de Assis (44): " + votosdoscandidatos[2]);
console.log("Graciliano Ramos (99): " + votosdoscandidatos[3]);
console.log("Total de votos em branco: " + votosembranco);
console.log("Total de votos nulos: " + nulos);
