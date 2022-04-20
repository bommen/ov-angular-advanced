import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProductsDynamicComponent } from './page-products-dynamic.component';
import { TemplateDefaultModule } from '../../templates/template-default/template-default.module';
import { ProductsListDynamicModule } from '../../organisms/products-list-dynamic/products-list-dynamic.module';

@NgModule({
  declarations: [PageProductsDynamicComponent],
  imports: [CommonModule, TemplateDefaultModule, ProductsListDynamicModule],
  exports: [PageProductsDynamicComponent],
})
export class PageProductsDynamicModule {}
