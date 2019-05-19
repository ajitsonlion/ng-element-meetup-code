import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private seed = 0;
  private incrementSub = new BehaviorSubject<number>(this.seed);

  currentTotal$() {
    return this.incrementSub.asObservable();
  }

  increment(n: number) {
    this.seed += Number(n);
    this.incrementSub.next(this.seed);
  }

}
