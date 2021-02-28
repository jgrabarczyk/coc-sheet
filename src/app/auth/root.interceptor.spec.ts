import { TestBed } from '@angular/core/testing';

import { RootInterceptor } from './root.interceptor';

describe('RootInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RootInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RootInterceptor = TestBed.inject(RootInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
