let enzo = ['Enzo Costa', 2020114, 'informática', 4,['PPI','MANUT','SOR','PABD']];
console.log(`Ano: ${enzo[3]}`);
console.log(`Disciplinas: ${enzo[4]}`);

let larissa = {
    "nome" : "Larissa Macedo",
    "matricula" : "2020114",
    "curso" : "informática",
    "disciplinas" : ['PPI', 'ESP', 'PDS']
};
console.log(`Curso do estudante ${larissa.nome} é ${larissa.curso}`);

let data = new Date();
const hora = data.getHours(); //pega hora
const minutos = data.getMinutes(); // pega minutos
const segundos = data.getSeconds(); // pega segundos
const dia = data.getDate(); //dia do mês
const mes = data.getMonth() + 1; //mês do 0-11
const ano = data.getFullYear();

document.write(`Parnamirim, ${dia}/${mes<10 ? '0'+mes :mes}/${ano}/${hora}:${minutos}:${segundos}`);
