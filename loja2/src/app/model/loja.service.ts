import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(
      `${this.URL}/produtos`)
  }

  obterProdutosPeloId(id: number):
    Observable<Produto> {
    return this.http.get<Produto>(
      `${this.URL}/produtos/${id}/preco`)
  }
}
