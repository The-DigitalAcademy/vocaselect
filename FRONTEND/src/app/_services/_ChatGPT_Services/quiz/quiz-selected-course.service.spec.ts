import { TestBed } from '@angular/core/testing';

import { QuizSelectedCourseService } from './quiz-selected-course.service';

describe('QuizSelectedCourseService', () => {
  let service: QuizSelectedCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizSelectedCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
