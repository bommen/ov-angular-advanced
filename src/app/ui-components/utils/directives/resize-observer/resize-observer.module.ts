import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeObserverDirective } from './resize-observer.directive';

@NgModule({
  declarations: [ResizeObserverDirective],
  imports: [CommonModule],
  exports: [ResizeObserverDirective],
})
export class ResizeObserverModule {}
