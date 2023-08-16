import { TestBed } from '@angular/core/testing';

import { QuizQuestionsService } from './quiz-questions.service';

describe('QuizQuestionsService', () => {
  let service: QuizQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
