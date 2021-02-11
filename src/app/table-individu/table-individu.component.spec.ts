import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Individu } from '../model/individu';

import { TableIndividuComponent } from './table-individu.component';

describe('TableIndividuComponent', () => {
  let component: TableIndividuComponent;
  let fixture: ComponentFixture<TableIndividuComponent>;
  let INDIVIDUS: Individu[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIndividuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
