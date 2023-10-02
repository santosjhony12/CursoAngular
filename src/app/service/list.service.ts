import { Animal } from './../Animal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../intefaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private readonly apiUrl = 'http://localhost:8088/'

  constructor(private http: HttpClient) { }


  getAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiUrl}clientes`)
  }
  getClienteCpf(cpf:string): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.apiUrl}cliente/${cpf}`);
  }


  remove(animals: Animal[], animal:Animal){
      return animals.filter((a) => animal.name !== a.name)
  }
  getAll(): Observable<Animal[]>{
      return this.http.get<Animal[]>(this.apiUrl)

}
}
