import { Injectable } from '@angular/core';
import SehirHaritasiAPI from './map';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import {
  mapTo,
  map,
  filter,
  takeWhile,
  take,
  tap,
  delay,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NgxSehirHaritasiService {
  map = new BehaviorSubject<SehirHaritasiAPI | undefined>(undefined);

  constructor() {}

  get mapReady(): Observable<boolean> {
    return this.map.pipe(
      map((map) => map !== undefined),
      filter((isReady) => isReady),
      delay(500)
    );
  }
}
