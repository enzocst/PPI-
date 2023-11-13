import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nota, Situação } from './nota';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})
export class CalculaMediaComponent {
  boletim: Nota;
  resultado: string;
  mediaParcial: number;
  mediaForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.boletim = new Nota(0, 0, 0, 0);
    this.resultado = '';
    this.mediaParcial = 0;
    this.mediaForm = this.fb.group({
      bim1: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      bim2: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      bim3: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      bim4: [0, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  calcularMediaParcial() {
    const b1 = this.mediaForm.get('bim1')?.value;
    const b2 = this.mediaForm.get('bim2')?.value;
    const b3 = this.mediaForm.get('bim3')?.value;
    const b4 = this.mediaForm.get('bim4')?.value;
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
  obterClasseSituacao() {
    if (this.boletim.obterSituação() ===
      Situação.APROVADO) {
      return 'bg-success';
    } else if (this.boletim.obterSituação() ===
      Situação.AVFINAL) {
      return 'bg-warning';
    } else if (this.boletim.obterSituação() ===
      Situação.REPROVADO) {
      return 'bg-danger';
    }
    return 'bg-secondary'
  }
}
