import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

export const loadDataResolver: ResolveFn<Observable<string>> = (route, state) => {
  return inject(LoaderService).resolvedValues$
};
