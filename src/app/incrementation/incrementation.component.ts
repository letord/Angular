import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementation',
  templateUrl: './incrementation.component.html',
  styleUrls: ['./incrementation.component.css']
})
export class IncrementationComponent implements OnInit {
  compteur:number
  constructor() {
    this.compteur=0
   }
   onIncremente(){
      this.compteur++;
   }
   onDecremente(){
     this.compteur--;
   }

  ngOnInit(): void {
  }

}
