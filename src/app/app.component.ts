import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import {
  asyncScheduler,
  catchError,
  filter,
  merge,
  NEVER,
  observeOn,
  switchMap,
  takeUntil,
  timeout,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading = false;
  loadingText = '';

  constructor(private router: Router) {
    const navigationStart$ = this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationStart)
    );

    const navigationEnd$ = this.router.events.pipe(
      filter(
        (event: Event) =>
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
      )
    );

    navigationStart$
      .pipe(
        switchMap(() =>
          merge(
            navigationEnd$.pipe(
              timeout(200),
              catchError(() => {
                this.loading = true;
                return NEVER;
              })
            ),
            navigationEnd$.pipe(
              timeout(3000),
              catchError(() => {
                this.loadingText = "It's taking longer than expected!";
                return NEVER;
              })
            ),
            navigationEnd$
          ).pipe(takeUntil(navigationEnd$.pipe(observeOn(asyncScheduler))))
        )
      )
      .subscribe(() => {
        this.loading = false;
        this.loadingText = '';
      });
  }
}
