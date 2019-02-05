import { TestBed } from '@angular/core/testing';

import { InvoiceparentserviceService } from './invoiceparentservice.service';

describe('InvoiceparentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceparentserviceService = TestBed.get(InvoiceparentserviceService);
    expect(service).toBeTruthy();
  });
});
