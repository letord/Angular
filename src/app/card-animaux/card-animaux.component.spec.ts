import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnimauxComponent } from './card-animaux.component';

describe('CardAnimauxComponent', () => {
  let component: CardAnimauxComponent;
  let fixture: ComponentFixture<CardAnimauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAnimauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
