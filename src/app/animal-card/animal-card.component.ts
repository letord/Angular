import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent implements OnInit {

  @Input() nom:string;
  @Input() image:string;
  @Input() cri:string;
  alertisHidden:boolean
  constructor() {
    this.nom="";
    this.image="";
    this.cri="";
    this.alertisHidden=true;
  }

  ngOnInit(): void {
  }
  onAfficheAlert(){
    this.alertisHidden=!this.alertisHidden;
  }

}
