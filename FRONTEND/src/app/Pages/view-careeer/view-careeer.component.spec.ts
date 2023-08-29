import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCareeerComponent } from './view-careeer.component';

describe('ViewCareeerComponent', () => {
  let component: ViewCareeerComponent;
  let fixture: ComponentFixture<ViewCareeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCareeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCareeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
