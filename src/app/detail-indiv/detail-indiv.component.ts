import { Component, OnInit } from '@angular/core';
import { INDIVIDUS } from '../model/individus';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-indiv',
  templateUrl: './detail-indiv.component.html',
  styleUrls: ['./detail-indiv.component.css']
})
export class DetailIndivComponent implements OnInit {

  individus;
  id=0;
  user;
  constructor(private route: ActivatedRoute) {
    this.individus=INDIVIDUS;
    this.user=this.individus[0];
  }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
      if (params.get('id')==null){
        this.id=0;
      }
      else{
        this.id = +!params.get('id');
      }
      this.user=this.individus[this.id];
  	});
  }

}
