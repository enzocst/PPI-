import { Elevador } from "./q1";

const elevador = new Elevador(8, 10);

elevador.abrirPorta();
elevador.entrar(5);
elevador.fecharPorta();

elevador.subir();
elevador.subir();

elevador.abrirPorta();
elevador.sair(2);
elevador.fecharPorta();

console.log("Andar atual:", elevador.getAndarAtual()); 
console.log("Quantidade de pessoas:", elevador.getQuantidadePessoas()); 
console.log("Porta aberta:", elevador.isPortaAberta());