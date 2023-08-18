import { TestBed } from '@angular/core/testing';

import { ApiSharedService } from './api-shared.service';

describe('ApiSharedService', () => {
  let service: ApiSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
