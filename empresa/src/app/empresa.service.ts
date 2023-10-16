import { Injectable } from '@angular/core';
import { funcionario } from './funcionario/funcionario';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  funcionarios: funcionario[];

  constructor() {
    this.funcionarios = []
  }

  adicionar(novo: funcionario): boolean {
    if (!this.funcionarios.includes(novo)) {
      this.funcionarios.push(novo)
      return true
    }
    return false
  }

  obterTodos(): funcionario[] {
    return this.funcionarios
    
  }

  SomaSalario() {
    
  }
}
