import { TestBed, inject } from '@angular/core/testing';

import { F7Service } from './f7.service';

describe('F7Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [F7Service]
    });
  });

  it('should be created', inject([F7Service], (service: F7Service) => {
    expect(service).toBeTruthy();
  }));
});
