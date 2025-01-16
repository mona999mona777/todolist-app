import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nodeGuard } from './node.guard';

describe('nodeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nodeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
