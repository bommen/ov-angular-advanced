import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDefaultComponent } from './template-default.component';
import { SideDirective } from './shared/side.directive';
import { IfBreakpointModule } from 'src/app/utils/directives/if-breakpoint/if-breakpoint.module';

@NgModule({
  declarations: [TemplateDefaultComponent, SideDirective],
  imports: [CommonModule, IfBreakpointModule],
  exports: [TemplateDefaultComponent, SideDirective],
})
export class TemplateDefaultModule {}
