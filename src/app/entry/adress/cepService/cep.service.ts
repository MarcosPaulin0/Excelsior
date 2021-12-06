import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient) { }

  buscarCep(cep: string){

    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);

  }
}
