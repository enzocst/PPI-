import { Component } from '@angular/core';
import { Disciplinas } from './disciplina';

@Component({
  selector: 'app-mostra-disciplinas',
  templateUrl: './mostra-disciplinas.component.html',
  styleUrls: ['./mostra-disciplinas.component.css']
})
export class MostraDisciplinasComponent {
  disciplinas: Disciplinas[]

  constructor(){
    this.disciplinas = [
      new Disciplinas('PPI', 'Bruno', 4, 120),
      new Disciplinas('SOR', 'Bruno', 4, 120),
      new Disciplinas('BIO', 'Thayse', 4, 120),
      new Disciplinas('QUIM', 'Fernanda', 4, 120),
      new Disciplinas('PDS', 'Alvaro', 4, 120),
    ]
  }
}
