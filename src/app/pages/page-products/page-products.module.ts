import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsListModule } from '../../organisms/products-list/products-list.module';
import { TemplateDefaultModule } from '../../templates/template-default/template-default.module';
import { PageProductsComponent } from './page-products.component';

@NgModule({
  declarations: [PageProductsComponent],
  imports: [CommonModule, TemplateDefaultModule, ProductsListModule],
  exports: [PageProductsComponent],
})
export class PageProductsModule {}
