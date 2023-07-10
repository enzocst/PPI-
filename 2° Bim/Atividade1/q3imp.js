import { Televisao, ControleRemoto } from "./q3";

let televisao = new Televisao();
let controleRemoto = new ControleRemoto(televisao);
controleRemoto.aumentarVolume();
console.log(controleRemoto.consultarVolume());

controleRemoto.aumentarCanal();
console.log(controleRemoto.consultarCanal());

controleRemoto.trocarCanal(5);
console.log(controleRemoto.consultarCanal());
