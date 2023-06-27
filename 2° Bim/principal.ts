import { Cachorro, Raça } from "./cachorro";

let osvaldo = new Cachorro('osvaldo',Raça.SALSICHA);
let malu = new Cachorro('malu',Raça.SALSICHA);

console.log(osvaldo);
console.log(malu);

console.log(`Nome: ${osvaldo.obterNome}`)
osvaldo.inserirIdade(50);
console.log(osvaldo.obterIdade());
osvaldo.inserirIdade(5);
console.log(osvaldo.obterIdade());
console.log(malu.latir(10));
