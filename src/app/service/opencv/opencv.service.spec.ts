import { TestBed, inject } from '@angular/core/testing';

import { OpencvService } from './opencv.service';

describe('OpencvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpencvService]
    });
  });

  it('should be created', inject([OpencvService], (service: OpencvService) => {
    expect(service).toBeTruthy();
  }));
});
