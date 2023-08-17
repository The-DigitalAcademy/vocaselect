import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectmarksComponent } from './subjectmarks.component';

describe('SubjectmarksComponent', () => {
  let component: SubjectmarksComponent;
  let fixture: ComponentFixture<SubjectmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
