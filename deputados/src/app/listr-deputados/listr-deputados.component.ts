import { Component } from '@angular/core';
import { Deputado } from '../model/deputado';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'app-listr-deputados',
  templateUrl: './listr-deputados.component.html',
  styleUrls: ['./listr-deputados.component.css']
})
export class ListrDeputadosComponent {
  deputados: Deputado[] = []



  constructor(private ds: DeputadoService) {
    this.ds.obterDeputados().subscribe(resposta => {
    this.deputados = resposta.dados
    })
  }
}
