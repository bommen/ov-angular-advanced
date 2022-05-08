import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
} from '@angular/router';
import { getTestScheduler, hot } from 'jasmine-marbles';
import { PageLoaderService } from './page-loader.service';

describe('PageLoaderService', () => {
  it('should start loading after 10 ms and timeout after 2000', () => {
    getTestScheduler().run(({ expectObservable }) => {
      const service = new PageLoaderService({
        events: hot('a 2000ms b', {
          a: new NavigationStart(1, ''),
          b: new NavigationEnd(1, '', ''),
        }),
      } as any);

      expectObservable(service.loading$).toBe('10ms a 1989ms b c', {
        a: 'start',
        b: 'timeout',
        c: 'end',
      });
    });
  });

  it('should not start loading if navigation ends before 10ms', () => {
    getTestScheduler().run(({ expectObservable }) => {
      const service = new PageLoaderService({
        events: hot('a 9ms b', {
          a: new NavigationStart(1, ''),
          b: new NavigationEnd(1, '', ''),
        }),
      } as any);

      expectObservable(service.loading$).toBe('10ms a', { a: 'end' });
    });
  });

  it('should not timeout if navation ends before 2000ms', () => {
    getTestScheduler().run(({ expectObservable }) => {
      const service = new PageLoaderService({
        events: hot('a 1999ms b', {
          a: new NavigationStart(1, ''),
          b: new NavigationEnd(1, '', ''),
        }),
      } as any);

      expectObservable(service.loading$).toBe('10ms a 1989ms b', {
        a: 'start',
        b: 'end',
      });
    });
  });

  it('should end immediately if a navigation has ended', () => {
    getTestScheduler().run(({ expectObservable }) => {
      const service = new PageLoaderService({
        events: hot('ab', {
          a: new NavigationStart(1, ''),
          b: new NavigationEnd(1, '', ''),
        }),
      } as any);

      expectObservable(service.loading$).toBe('-b', {
        b: 'end',
      });
    });
  });

  it('should end immediately if a navigation is canceled', () => {
    getTestScheduler().run(({ expectObservable }) => {
      const service = new PageLoaderService({
        events: hot('ab', {
          a: new NavigationStart(1, ''),
          b: new NavigationCancel(1, '', ''),
        }),
      } as any);

      expectObservable(service.loading$).toBe('-b', {
        b: 'end',
      });
    });
  });

  it('should end immediately if a navigation error occurs', () => {
    getTestScheduler().run(({ expectObservable }) => {
      const service = new PageLoaderService({
        events: hot('ab', {
          a: new NavigationStart(1, ''),
          b: new NavigationError(1, '', ''),
        }),
      } as any);

      expectObservable(service.loading$).toBe('-b', {
        b: 'end',
      });
    });
  });
});
