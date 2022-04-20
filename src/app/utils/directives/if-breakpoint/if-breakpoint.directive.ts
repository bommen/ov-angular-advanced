import {
  Directive,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { Subscription } from 'rxjs';
import {
  Breakpoint,
  BreakpointService,
} from '../../services/breakpoint/breakpoint.service';

const BREAKPOINT_ORDER: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Structural directive that shows/hides element based on breakpoint config.
 * Usage:
 *
 * show on xs
 * *ovIfBreakpoint="'xs'"
 *
 * show on xs, sm and md
 * *ovIfBreakpoint="'xs'; to: 'md'"
 *
 * show on xs, sm and md else show another template
 * *ovIfBreakpoint="'xs'; to: 'md'; else: otherRef;"
 */
@Directive({
  selector: '[ovIfBreakpoint]',
})
export class IfBreakpointDirective implements OnDestroy {
  @Input('ovIfBreakpoint')
  breakpoint!: Breakpoint;
  @Input('ovIfBreakpointTo')
  to?: Breakpoint;
  @Input('ovIfBreakpointElse')
  else?: TemplateRef<unknown>;

  private subscription!: Subscription;
  private currentTemplate?: TemplateRef<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit() {
    this.subscription = this.breakpointService.breakpoint$.subscribe(
      (breakpoint) => {
        const shouldDisplay = this.shouldDisplay(breakpoint);
        if (shouldDisplay) {
          /**
           * Return if template is already shown
           */
          if (this.currentTemplate === this.templateRef) {
            return;
          }
          /**
           * Clear 'else' template if shown
           */
          if (this.viewContainerRef.length > 0) {
            this.viewContainerRef.clear();
          }
          /**
           * Show template
           */
          this.viewContainerRef.createEmbeddedView(this.templateRef);
          this.currentTemplate = this.templateRef;
        } else {
          /**
           * Return if 'else' template is already shown
           */
          if (
            this.currentTemplate !== undefined &&
            this.currentTemplate === this.else
          ) {
            return;
          }
          /**
           * Clear template if shown
           */
          if (this.viewContainerRef.length > 0) {
            this.viewContainerRef.clear();
            this.currentTemplate = undefined;
          }
          /**
           * Show 'else' template if defined
           */
          if (this.else) {
            this.viewContainerRef.createEmbeddedView(this.else);
            this.currentTemplate = this.else;
          }
        }
      }
    );
  }

  private shouldDisplay(breakpoint: Breakpoint) {
    return (
      breakpoint === this.breakpoint ||
      (this.to && this.isBetweenBreakpoints(breakpoint))
    );
  }

  private isBetweenBreakpoints(breakpoint: Breakpoint) {
    if (this.to === undefined) {
      return false;
    }
    const index = BREAKPOINT_ORDER.indexOf(breakpoint);
    return (
      index >= BREAKPOINT_ORDER.indexOf(this.breakpoint) &&
      index <= BREAKPOINT_ORDER.indexOf(this.to)
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
