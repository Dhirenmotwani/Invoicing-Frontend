import { TestBed } from '@angular/core/testing';

import { CustomersButtonServiceService } from './customers-button-service.service';

describe('CustomersButtonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersButtonServiceService = TestBed.get(CustomersButtonServiceService);
    expect(service).toBeTruthy();
  });
});
