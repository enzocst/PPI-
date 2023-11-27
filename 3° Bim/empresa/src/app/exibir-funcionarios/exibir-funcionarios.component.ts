import { Component } from '@angular/core';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-exibir-funcionarios',
  templateUrl: './exibir-funcionarios.component.html',
  styleUrls: ['./exibir-funcionarios.component.css']
})
export class ExibirFuncionariosComponent {

  constructor(public empresa: EmpresaService) {

  }

}
