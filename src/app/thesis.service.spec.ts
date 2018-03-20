import { TestBed, inject } from '@angular/core/testing';

import { ThesisService } from './thesis.service';

describe('ThesisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThesisService]
    });
  });

  it('should be created', inject([ThesisService], (service: ThesisService) => {
    expect(service).toBeTruthy();
  }));
});
