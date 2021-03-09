import { Component, OnInit } from '@angular/core';
import {Person} from '../model/Person';
import {Persons} from '../model/Persons';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.css']
})
export class ListNameComponent implements OnInit {

  persons = Persons;
  selectedPerson: Person;
  name: any
  constructor() {
    this.selectedPerson = {id:0, name:""}
    // Même chose que :
    // this.selectedPerson = new Person();
    // this.selectedPerson.id = 0;
    // this.selectedPerson.name = "";
   }

  ngOnInit(): void {
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  addPerson(name: any) {
    const tmp = new Person();
    tmp.name = name;
    tmp.id = this.persons.length + 1 ;
    this.persons.push(tmp);
  }
}
