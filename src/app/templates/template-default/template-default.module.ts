import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDefaultComponent } from './template-default.component';
import { SideDirective } from './shared/side.directive';

@NgModule({
  declarations: [TemplateDefaultComponent, SideDirective],
  imports: [CommonModule],
  exports: [TemplateDefaultComponent, SideDirective],
})
export class TemplateDefaultModule {}
