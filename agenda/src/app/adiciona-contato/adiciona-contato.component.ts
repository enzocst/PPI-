import { Component } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})
export class AdicionaContatoComponent {
  contatos: Contato[];

  constructor() {
    this.contatos = []
  }

}
