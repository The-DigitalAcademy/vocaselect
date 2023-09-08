/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewCareerService } from './viewCareer.service';

describe('Service: ViewCareer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewCareerService]
    });
  });

  it('should ...', inject([ViewCareerService], (service: ViewCareerService) => {
    expect(service).toBeTruthy();
  }));
});
