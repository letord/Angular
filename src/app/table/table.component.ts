import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() id:string;
  @Input() nom:string;
  @Input() mail:string;
  constructor() {
    this.id=""
    this.nom="Michel Letord"
    this.mail="michel.letord@laposte.net"
  }

  ngOnInit(): void {
  }

}
