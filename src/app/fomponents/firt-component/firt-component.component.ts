import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firt-component',
  templateUrl: './firt-component.component.html',
  styleUrls: ['./firt-component.component.css']
})
export class FirtComponentComponent implements OnInit {
  name: string = "Jhony";
  idade: number = 30;
  job = "Programmer";

  car = {
      nome:"Polo",
      year:2018
  };
  constructor(){}

  ngOnInit(): void {
      
  }
}
