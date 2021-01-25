import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementationComponent } from './incrementation.component';

describe('IncrementationComponent', () => {
  let component: IncrementationComponent;
  let fixture: ComponentFixture<IncrementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
