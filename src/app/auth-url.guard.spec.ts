import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authUrlGuard } from './auth-url.guard';

describe('authUrlGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authUrlGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
