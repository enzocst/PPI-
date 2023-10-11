import { Component } from '@angular/core';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'app-listr-deputados',
  templateUrl: './listr-deputados.component.html',
  styleUrls: ['./listr-deputados.component.css']
})
export class ListrDeputadosComponent {
  constructor(private ds: DeputadoService) {
    this.ds.obterDeputados().subscribe(resposta => {
      console.log(resposta)
    })
  }
}
