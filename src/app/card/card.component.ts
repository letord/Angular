import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title:string;
  @Input() subtitle:string;
  @Input() description:string;
  @Input() link:string;

  constructor(){
    this.title="";
    this.subtitle="";
    this.description="";
    this.link="";
  }

  ngOnInit(): void {
  }

}
