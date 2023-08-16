import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz2Component } from './quiz2.component';

describe('Quiz2Component', () => {
  let component: Quiz2Component;
  let fixture: ComponentFixture<Quiz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quiz2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quiz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
