import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Endereco} from './models/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private apiCepUrl = 'https://viacep.com.br';

  constructor(private http: HttpClient) { }

  getCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.apiCepUrl}/ws/${cep}/json/`);
  }

  getPost(registro: Cliente): Observable<any> {
    return this.http.post(`https://localhost:7176/api/Cliente`, registro);
  }
}
