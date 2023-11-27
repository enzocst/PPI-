import { Component } from '@angular/core';
import { Agenda } from '../adiciona-contato/agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrls: ['./exibe-contatos.component.css']
})
export class ExibeContatosComponent {


  constructor(public agenda: AgendaService) {

  }
}
