import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  InjectionToken,
  Optional,
  PLATFORM_ID,
} from '@angular/core';
import {
  distinctUntilChanged,
  EMPTY,
  map,
  Observable,
  shareReplay,
} from 'rxjs';
import { ResizeService } from '../resize/resize.service';

export const BREAKPOINT_CONFIG = new InjectionToken(
  'Config of breakpoint widths'
);

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointConfig = Record<Breakpoint, number>;

export const BREAKPOINT_ORDER: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export const DEFAULT_CONFIG: BreakpointConfig = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  breakpoint$: Observable<Breakpoint> = EMPTY;

  constructor(
    @Optional()
    @Inject(BREAKPOINT_CONFIG)
    private config: BreakpointConfig,
    @Inject(PLATFORM_ID) platformId: string,
    private resizeService: ResizeService
  ) {
    this.config = this.config ?? DEFAULT_CONFIG;

    /**
     * Browser deps should only be used in the browser.
     */
    if (isPlatformBrowser(platformId)) {
      const { xs, sm, md, lg } = this.config;

      this.breakpoint$ = this.resizeService.resize$.pipe(
        map(({ width }) =>
          width <= xs
            ? 'xs'
            : width <= sm
            ? 'sm'
            : width <= md
            ? 'md'
            : width <= lg
            ? 'lg'
            : 'xl'
        ),
        /**
         * Execute the preceding logic only once per change for N amount of subscribers.
         */
        shareReplay(1),
        /**
         * Prevent spamming of the current breakpoint
         */
        distinctUntilChanged()
      );
    }
  }

  getConfig(): BreakpointConfig {
    return this.config;
  }
}
