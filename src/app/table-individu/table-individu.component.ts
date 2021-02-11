import { Component, OnInit } from '@angular/core';
import { INDIVIDUS } from '../model/individus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-individu',
  templateUrl: './table-individu.component.html',
  styleUrls: ['./table-individu.component.css']
})
export class TableIndividuComponent implements OnInit {

  individus;
  constructor(private router: Router) {

    this.individus=INDIVIDUS;
  }

  ngOnInit(): void {
  }

}
