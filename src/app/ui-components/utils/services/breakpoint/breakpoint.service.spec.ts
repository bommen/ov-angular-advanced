import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import { ReplaySubject, Subject } from 'rxjs';
import { ResizeService } from '../resize/resize.service';

import {
  BreakpointService,
  BREAKPOINT_ORDER,
  DEFAULT_CONFIG,
} from './breakpoint.service';

describe('BreakpointService', () => {
  let service: BreakpointService;
  let resize$: Subject<Record<'width', number>>;

  beforeEach(() => {
    resize$ = new ReplaySubject();
    TestBed.configureTestingModule({
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        {
          provide: ResizeService,
          useValue: { resize$ },
        },
      ],
    });
    service = TestBed.inject(BreakpointService);
  });

  BREAKPOINT_ORDER.forEach((breakpoint) =>
    it('should emit the correct breakpoint', () => {
      resize$.next({ width: DEFAULT_CONFIG[breakpoint] });
      expect(service.breakpoint$).toBeObservable(cold('a', { a: breakpoint }));
    })
  );

  it('should not emit the same breakpoint twice', () => {
    resize$.next({ width: 0 });
    resize$.next({ width: 0 });
    expect(service.breakpoint$).toBeObservable(cold('a', { a: 'xs' }));
  });
});
