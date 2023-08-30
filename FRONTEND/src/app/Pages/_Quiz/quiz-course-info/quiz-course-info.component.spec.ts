import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCourseInfoComponent } from './quiz-course-info.component';

describe('QuizCourseInfoComponent', () => {
  let component: QuizCourseInfoComponent;
  let fixture: ComponentFixture<QuizCourseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCourseInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCourseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
