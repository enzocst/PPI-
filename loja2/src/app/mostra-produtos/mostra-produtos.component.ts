import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { LojaService } from '../model/loja.service';

@Component({
  selector: 'app-mostra-produtos',
  templateUrl: './mostra-produtos.component.html',
  styleUrls: ['./mostra-produtos.component.css']
})
export class MostraProdutosComponent {
  produtos: Produto[]=[]

  constructor(private Loja: LojaService){
    this.Loja.obterProdutos().subscribe(resp=>{this.produtos=resp})
  }
}
