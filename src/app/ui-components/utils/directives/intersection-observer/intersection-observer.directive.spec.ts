import { IntersectionObserverDirective } from './intersection-observer.directive';

describe('IntersectionObserverDirective', () => {
  it('should create an instance', () => {
    const directive = new IntersectionObserverDirective({} as any);
    expect(directive).toBeTruthy();
  });
});
