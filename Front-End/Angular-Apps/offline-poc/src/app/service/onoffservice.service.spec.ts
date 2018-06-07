import { TestBed, inject } from '@angular/core/testing';

import { OnoffserviceService } from './onoffservice.service';

describe('OnoffserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnoffserviceService]
    });
  });

  it('should be created', inject([OnoffserviceService], (service: OnoffserviceService) => {
    expect(service).toBeTruthy();
  }));
});
