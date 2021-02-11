import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputIndivComponent } from './input-indiv.component';

describe('InputIndivComponent', () => {
  let component: InputIndivComponent;
  let fixture: ComponentFixture<InputIndivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputIndivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIndivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
