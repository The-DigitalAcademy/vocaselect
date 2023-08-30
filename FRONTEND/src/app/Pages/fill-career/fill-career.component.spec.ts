import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCareerComponent } from './fill-career.component';

describe('FillCareerComponent', () => {
  let component: FillCareerComponent;
  let fixture: ComponentFixture<FillCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillCareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
