import { IfBreakpointDirective } from './if-breakpoint.directive';

describe('IfBreakpointDirective', () => {
  it('should create an instance', () => {
    const directive = new IfBreakpointDirective(
      {} as any,
      {} as any,
      {} as any
    );
    expect(directive).toBeTruthy();
  });
});
