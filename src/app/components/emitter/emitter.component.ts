import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit{
  teste:string = "teste";
  myNumber: number = 0;

  ngOnInit(): void {

  }
  constructor(){}
  onChangeNumber(): void{
    this.myNumber = Math.floor(Math.random() * 100);
  }
}
