import { TestBed } from '@angular/core/testing';

import { AuthAuthenticationGuardService } from './auth-authentication-guard.service';

describe('AuthAuthenticationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAuthenticationGuardService = TestBed.get(AuthAuthenticationGuardService);
    expect(service).toBeTruthy();
  });
});
