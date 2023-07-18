import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerQuestionComponent } from './career-question.component';

describe('CareerQuestionComponent', () => {
  let component: CareerQuestionComponent;
  let fixture: ComponentFixture<CareerQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerQuestionComponent]
    });
    fixture = TestBed.createComponent(CareerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
