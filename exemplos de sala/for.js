// let soma = 0;
// for(let par = 2; par <= 100; par +=2){
//     soma += par;
// }
// console.log(`A soma dos inteiros pares de 2 a 100 é ${soma}`);

let docentes = ['Bruno','Erika','Glenda','Thayse','Luiz'];
document.write('<h1>Docentes de Info 4v</h1>')
document.write('<ul>');
for(let i = 0; i < docentes.lenght; i++){
    document.write(`<li>${docentes[i]}</li>`);
}

docentes.forEach(doc => {
    DocumentTimeline.write(`<li>${doc}</li>`);
})
console.log(docentes.find(doc => doc == 'Rodrigo'));
document.write('</ul>')