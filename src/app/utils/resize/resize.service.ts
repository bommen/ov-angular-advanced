import { Injectable } from '@angular/core';
import {
  EMPTY,
  fromEvent,
  map,
  Observable,
  shareReplay,
  startWith,
} from 'rxjs';

interface ResizeEvent {
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  resize$: Observable<ResizeEvent> = EMPTY;

  constructor() {
    this.resize$ = fromEvent(window, 'resize').pipe(
      map((event) => event.target as Window),
      startWith(window),
      map(({ innerHeight, innerWidth }) => ({
        width: innerWidth,
        height: innerHeight,
      })),
      /**
       * Execute the preceding logic only once per change for N amount of subscribers.
       */
      shareReplay(1)
    );
  }
}
