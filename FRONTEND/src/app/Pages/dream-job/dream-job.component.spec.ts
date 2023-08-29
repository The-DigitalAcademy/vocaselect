import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamJobComponent } from './dream-job.component';

describe('DreamJobComponent', () => {
  let component: DreamJobComponent;
  let fixture: ComponentFixture<DreamJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DreamJobComponent]
    });
    fixture = TestBed.createComponent(DreamJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
