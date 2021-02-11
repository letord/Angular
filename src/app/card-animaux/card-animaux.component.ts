import { Component, OnInit } from '@angular/core';
import { ANIMAUX } from '../model/animaux';

@Component({
  selector: 'app-card-animaux',
  templateUrl: './card-animaux.component.html',
  styleUrls: ['./card-animaux.component.css']
})
export class CardAnimauxComponent implements OnInit {

  animaux;
  constructor() {
    this.animaux=ANIMAUX;
   }

  ngOnInit(): void {
  }

}
