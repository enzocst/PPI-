import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibe-mensagem',
  templateUrl: './exibe-mensagem.component.html',
  styleUrls: ['./exibe-mensagem.component.css']
})
export class ExibeMensagemComponent {
  mensagem: string;
  
  constructor() {
    this.mensagem = '';
   }

    ngOnInit() {
    }

    alterarMensagem(n: string) {
      this.mensagem = `Seja bem-vindo, ${n}!`;
    }
}
