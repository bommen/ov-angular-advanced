import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductReplacedModule } from '../../organisms/product-replaced/product-replaced.module';
import { ProductDefaultModule } from '../../organisms/product-default/product-default.module';
import { ProductOutOfStockModule } from '../../organisms/product-out-of-stock/product-out-of-stock.module';
import { TemplateDefaultModule } from '../../templates/template-default/template-default.module';
import { PageProductsComponent } from './page-products.component';

@NgModule({
  declarations: [PageProductsComponent],
  imports: [
    CommonModule,
    TemplateDefaultModule,
    ProductDefaultModule,
    ProductOutOfStockModule,
    ProductReplacedModule,
  ],
  exports: [PageProductsComponent],
})
export class PageProductsModule {}
