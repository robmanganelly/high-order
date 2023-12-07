import { Injectable } from '@angular/core';
import { BehaviorSubject, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private apiCall = of('called');

  private generator = new BehaviorSubject(this.apiCall);

  retry(){
    this.generator.next(this.apiCall);
  }

  resolvedValues$ = this.generator.asObservable().pipe(switchMap(s=>s))

}
