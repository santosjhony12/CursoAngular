import { Cliente } from './../../intefaces/cliente';
import { ListService } from './../../service/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{

  animals: Animal[] = [];
  clientes: Cliente[] = [];
  cliente: Cliente | null = null;
  animalDetails = '';
  cpf: string | null = null;
  novoCliente: Cliente = {
    id: 0,
    name: '',
    cpf:'',
    senha: ''
  }

  alunos = [
    {nome: "Jhony", idade: 18, formacao: "Superior"},
    {nome: "Beatriz", idade: 20, formacao: "Superior"},
    {nome: "Amanda", idade: 27, formacao: "Superior"}
  ]
  //INICIA O SISTEMA
  ngOnInit(): void {

  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  constructor(private listService: ListService){
    //this.getAnimals()
    this.getAllClientes();
  }

  getAllClientes(): void {
    this.listService.getAllClientes().subscribe((clientes) => {this.clientes = clientes;});

}

  removeAnimal(animal:Animal){
    console.log("Removendo Animal")
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals)=> (this.animals = animals));
  }



  getClienteCpf():void{
    if(this.cpf) this.listService.getClienteCpf(this.cpf).subscribe((clienteData)=> (this.cliente = clienteData));
  }

  addCliente(): void{
    this.listService.addCliente(this.novoCliente)
    this.novoCliente = {
      id: 0 ,
      name: "",
      cpf:"",senha:""};
  }
  alterarSenha(): void {
    if (this.cliente) {
      this.listService.alterarSenha(this.cliente)}
      this.cliente = {id: 0 ,
      name: "",
      cpf:"",senha:""};
  }

  deleteCliente(cliente: Cliente): void{
    if(cliente) this.listService.deleteClienteId(cliente)
  }



}
