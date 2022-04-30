import { ResizeObserverDirective } from './resize-observer.directive';

describe('ResizeObserverDirective', () => {
  it('should create an instance', () => {
    const directive = new ResizeObserverDirective({} as any, {} as any);
    expect(directive).toBeTruthy();
  });
});
