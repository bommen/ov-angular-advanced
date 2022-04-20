import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ovSide]',
})
export class SideDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
