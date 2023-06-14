let questoes = +prompt("Número de questões");
let acertos = 0;

if (questoes >= 1) {
    let gabarito = prompt("Gabarito das repostas");
    let resposta = prompt("Respostas da prova");

    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i] == resposta[i]) {
            acertos++;
        }
    }

}

console.log(acertos);