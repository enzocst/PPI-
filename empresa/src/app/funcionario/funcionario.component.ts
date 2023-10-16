import { Component } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { funcionario } from './funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent {

  constructor(private empresa: EmpresaService){
  }

  adicionarfuncionario(nome: string, cargo: string, salario: number) {
    const c = new funcionario(nome, cargo, salario);
    this.empresa.adicionar(c);

}
}
