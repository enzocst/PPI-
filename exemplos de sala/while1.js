// let docentes = ['Bruno','Erika','Glenda','Thayse','Luiz'];
// let i = 0; //1 inicialização
// while(i < docentes.length){ //2 - teste
//     document.write(`<p>${docentes}</p>`)
//     i++; //3 - aatualização
// }

let docentes = ['Bruno','Erika','Glenda','Thayse','Luiz'];

let buscado = prompt('Digite um docente');

let i = 0;
let achou = false;
while(i < docentes.length && !achou){
    if (buscado == docentes[i]) {
        achou = true;
    }
    i++;

}
if (achou){
    document.write(`Docente ${buscado} encontrado na posição ${--i}`)
}