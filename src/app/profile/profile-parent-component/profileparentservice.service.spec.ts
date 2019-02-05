import { TestBed } from '@angular/core/testing';

import { ProfileparentserviceService } from './profileparentservice.service';

describe('ProfileparentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileparentserviceService = TestBed.get(ProfileparentserviceService);
    expect(service).toBeTruthy();
  });
});
