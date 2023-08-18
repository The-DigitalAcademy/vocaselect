import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerChoiceComponent } from './career-choice.component';

describe('CareerChoiceComponent', () => {
  let component: CareerChoiceComponent;
  let fixture: ComponentFixture<CareerChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
