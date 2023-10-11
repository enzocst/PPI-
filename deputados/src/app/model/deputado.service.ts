import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  API_URL = 'https://dadosabertos.camara.leg.br/api/v2'

  constructor(private http: HttpClient) { }

  obterDeputados() {
    return this.http.get(`${this.API_URL}/deputados`)
  }
}
