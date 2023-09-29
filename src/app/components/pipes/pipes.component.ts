import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit{
  constructor(){}
  someText = 'TESTANDO COM PIPE OPERATOR ';
  today = new Date();
  ngOnInit(): void {

  }

}
