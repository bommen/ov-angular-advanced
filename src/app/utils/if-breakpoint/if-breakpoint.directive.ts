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
} from '../breakpoint/breakpoint.service';

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
  @Input()
  ovIfBreakpoint!: Breakpoint;
  @Input()
  ovIfBreakpointTo?: Breakpoint;
  @Input()
  ovIfBreakpointElse?: TemplateRef<any>;

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
            this.currentTemplate === this.ovIfBreakpointElse
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
          if (this.ovIfBreakpointElse) {
            this.viewContainerRef.createEmbeddedView(this.ovIfBreakpointElse);
            this.currentTemplate = this.ovIfBreakpointElse;
          }
        }
      }
    );
  }
  private shouldDisplay(breakpoint: Breakpoint) {
    return (
      breakpoint === this.ovIfBreakpoint ||
      (this.ovIfBreakpointTo && this.isBetweenBreakpoints(breakpoint))
    );
  }
  private isBetweenBreakpoints(breakpoint: Breakpoint) {
    if (this.ovIfBreakpointTo === undefined) {
      return false;
    }
    const keys = Object.keys(this.breakpointService.getConfig());
    return (
      keys.indexOf(breakpoint) >= keys.indexOf(this.ovIfBreakpoint) &&
      keys.indexOf(breakpoint) <= keys.indexOf(this.ovIfBreakpointTo)
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
