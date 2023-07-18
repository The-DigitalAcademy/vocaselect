import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartQuizPageComponent } from './start-quiz-page.component';

describe('StartQuizPageComponent', () => {
  let component: StartQuizPageComponent;
  let fixture: ComponentFixture<StartQuizPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartQuizPageComponent]
    });
    fixture = TestBed.createComponent(StartQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
