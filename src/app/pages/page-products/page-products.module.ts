import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmartProductsListModule } from '../../smart-components/smart-products-list/smart-products-list.module';
import { TemplateDefaultModule } from '../../ui-components/templates/template-default/template-default.module';
import { PageProductsComponent } from './page-products.component';

@NgModule({
  declarations: [PageProductsComponent],
  imports: [CommonModule, TemplateDefaultModule, SmartProductsListModule],
  exports: [PageProductsComponent],
})
export class PageProductsModule {}
