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
    this.getAnimals()
  }

  removeAnimal(animal:Animal){
    console.log("Removendo Animal")
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals)=> (this.animals = animals));
  }

}
