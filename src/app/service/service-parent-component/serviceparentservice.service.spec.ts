import { TestBed } from '@angular/core/testing';

import { ServiceparentserviceService } from './serviceparentservice.service';

describe('ServiceparentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceparentserviceService = TestBed.get(ServiceparentserviceService);
    expect(service).toBeTruthy();
  });
});
