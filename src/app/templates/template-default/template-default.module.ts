import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDefaultComponent } from './template-default.component';



@NgModule({
  declarations: [
    TemplateDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateDefaultComponent
  ]
})
export class TemplateDefaultModule { }
