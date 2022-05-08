import { Injectable } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import {
  delay,
  distinctUntilChanged,
  filter,
  map,
  merge,
  Observable,
  of,
  switchMap,
  takeUntil,
} from 'rxjs';

const START_LOADING_TIMEOUT = 10;
const LONGER_LOADING_TIMEOUT = 2000;

export type LoadingEvent = 'start' | 'timeout' | 'end';

@Injectable({
  providedIn: 'root',
})
export class PageLoaderService {
  loading$: Observable<LoadingEvent>;

  constructor(router: Router) {
    const loadStart$ = router.events.pipe(
      filter((event: Event) => event instanceof NavigationStart)
    );

    const loadEnd$ = router.events.pipe(
      filter(
        (event: Event) =>
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
      )
    );

    this.loading$ = loadStart$.pipe(
      switchMap(() =>
        merge(
          of<LoadingEvent>('start').pipe(
            delay(START_LOADING_TIMEOUT),
            takeUntil(loadEnd$)
          ),
          of<LoadingEvent>('timeout').pipe(
            delay(LONGER_LOADING_TIMEOUT),
            takeUntil(loadEnd$)
          ),
          loadEnd$.pipe(map(() => 'end' as LoadingEvent))
        )
      ),
      distinctUntilChanged()
    );
  }
}
