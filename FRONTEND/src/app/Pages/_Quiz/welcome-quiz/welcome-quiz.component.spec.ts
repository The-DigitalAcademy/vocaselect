import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeQuizComponent } from './welcome-quiz.component';

describe('WelcomeQuizComponent', () => {
  let component: WelcomeQuizComponent;
  let fixture: ComponentFixture<WelcomeQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
