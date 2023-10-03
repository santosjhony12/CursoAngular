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

  addCliente(cliente: Cliente){
    this.http.post(`${this.apiUrl}cadastroCliente`, cliente).subscribe(resultado=>{
      console.log(resultado)},
      erro => {if(erro.status == 404) console.log(erro)});

  }

  alterarSenha(cliente: Cliente){
    this.http.put(`${this.apiUrl}alterarSenha`, cliente).subscribe(resultado=>{console.log(resultado)},
    erro=>{if(erro.status == 404)console.log(erro)});
  }

  deleteClienteId(cliente: Cliente){
    const confirmacao = confirm(`Tem certeza que deseja excluir o cliente ${cliente.name}?`);
      if(confirmacao){
        this.http.delete(`${this.apiUrl}deleteCliente/${cliente.id}`).subscribe((resultado)=>{console.log(resultado)},
        erro=>{if(erro.status == 404) console.log(erro)})
      }

  }
}
