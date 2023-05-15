let data = prompt("Digite uma data no formato do calendário. ex: 00/00/0000");
let dataextenso = dataporextenso(data);

function dataporextenso(data) {
    let divisoes = data.split('/');
    let dia = (divisoes[0]);
    let mes = (divisoes[1]);
    let ano = (divisoes[2]);

    let meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    let dataextenso = dia + " de " + meses[mes - 1] + " de " + ano;
    return dataextenso;
}

console.log("A data por extenso digitada é: " + dataextenso);
