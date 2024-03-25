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

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`https://localhost:7176/api/Cliente/${id}`);
  }

  getCep(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.apiCepUrl}/ws/${cep}/json/`);
  }

  getPost(registro: Cliente): Observable<any> {
    console.log(registro)
    return this.http.post(`https://localhost:7176/api/Cliente`, registro);
  }

  getAllContent(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`https://localhost:7176/api/Cliente`);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(`https://localhost:7176/api/Cliente/${id}`);
  }

  updateCliente(id: number, updatedCliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`https://localhost:7176/api/Cliente/${id}`, updatedCliente);
  }
}
