import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { partnersGuard } from './partners.guard';

describe('partnersGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => partnersGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
