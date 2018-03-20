import { TestBed, inject } from '@angular/core/testing';

import { ObService } from './ob.service';

describe('ObService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObService]
    });
  });

  it('should be created', inject([ObService], (service: ObService) => {
    expect(service).toBeTruthy();
  }));
});
