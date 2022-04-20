import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfBreakpointDirective } from './if-breakpoint.directive';

@NgModule({
  declarations: [IfBreakpointDirective],
  imports: [CommonModule],
  exports: [IfBreakpointDirective],
})
export class IfBreakpointModule {}
