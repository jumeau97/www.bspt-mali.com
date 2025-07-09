import { TestBed } from '@angular/core/testing';

import { BstpInterceptor } from './bstp.interceptor';

describe('BstpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BstpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BstpInterceptor = TestBed.inject(BstpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
