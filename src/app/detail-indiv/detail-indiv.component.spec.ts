import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIndivComponent } from './detail-indiv.component';

describe('DetailIndivComponent', () => {
  let component: DetailIndivComponent;
  let fixture: ComponentFixture<DetailIndivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailIndivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIndivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
