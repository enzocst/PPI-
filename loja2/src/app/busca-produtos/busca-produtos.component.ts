import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { LojaService } from '../model/loja.service';

@Component({
  selector: 'app-busca-produtos',
  templateUrl: './busca-produtos.component.html',
  styleUrls: ['./busca-produtos.component.css']
})
export class BuscaProdutosComponent {
  prod: Produto = new Produto()
  id: number = 0
  constructor(private Loja: LojaService){}

  buscarIdProduto(id:number){
    this.Loja.obterProdutosPeloId(id).subscribe(resp=>{this.prod = resp})}

}
