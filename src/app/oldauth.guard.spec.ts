import { TestBed } from '@angular/core/testing';

import { OldauthGuard } from './oldauth.guard';

describe('OldauthGuard', () => {
  let guard: OldauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OldauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
