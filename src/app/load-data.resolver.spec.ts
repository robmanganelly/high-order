import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { loadDataResolver } from './load-data.resolver';

describe('loadDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => loadDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
