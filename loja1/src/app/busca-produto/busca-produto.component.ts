import { Component } from '@angular/core';
import { LojaService } from '../model/loja.service';

@Component({
  selector: 'app-busca-produto',
  templateUrl: './busca-produto.component.html',
  styleUrls: ['./busca-produto.component.css']
})
export class BuscaProdutoComponent {
  constructor(private ls: LojaService) {
    this.obterProduto(1)
  }
  obterProduto(id: number) {
    this.ls.obterProdutosPeloId(id).subscribe(
      res => {
        
      }
    )
  }
}
