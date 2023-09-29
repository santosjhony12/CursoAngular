import { ListService } from './../../service/list.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{

  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 1},
    {name: "Tom", type: "Cat", age: 5},
    {name: "Frida", type: "Dog", age: 7},
    {name: "Bob", type: "Horse", age: 10}
];

  alunos = [
    {nome: "Jhony", idade: 18, formacao: "Superior"},
    {nome: "Beatriz", idade: 20, formacao: "Superior"},
    {nome: "Amanda", idade: 27, formacao: "Superior"}
  ]
  ngOnInit(): void {}

  animalDetails = '';


  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  constructor(private listService: ListService){

  }

  removeAnimal(animal:Animal){
    console.log("Removendo Animal")
    this.animals = this.listService.remove(this.animals, animal)
  }

}
