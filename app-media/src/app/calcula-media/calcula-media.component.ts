import { Component } from '@angular/core';
import { Nota } from './nota';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})
export class CalculaMediaComponent {
  boletim:Nota;
  resultado:string;
  mediaParcial: number;

  constructor() {
    this.boletim = new Nota(0, 0, 0, 0);
    this.resultado = '';
    this.mediaParcial = 0;
  }

  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number,) {
    this.boletim.alterarBim1(b1);
    this.boletim.alterarBim1(b2);
    this.boletim.alterarBim1(b3);
    this.boletim.alterarBim1(b4);
    let mp = this.boletim.calcularMédiaParcial();
    this.mediaParcial = mp;
    let sit = this.boletim.obterSituação();
    
    this.resultado = `${sit} com media parcial ${mp}`;
  }

  calcularMediaFinal(naf: number) {
    let mf = this.boletim.calcularMediaFinal(naf);
    let osit = this.boletim.obterSituação();

    this.resultado = `${osit} com media final ${mf}`;
}

}