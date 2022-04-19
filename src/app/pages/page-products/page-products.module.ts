import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProductsComponent } from './page-products.component';
import { TemplateDefaultModule } from '../../templates/template-default/template-default.module';
import { ProductDefaultModule } from '../../organisms/product-default/product-default.module';
import { ProductOutOfStockModule } from '../../organisms/product-out-of-stock/product-out-of-stock.module';
import { ProductReplacedModule } from 'src/app/organisms/product-replaced/product-replaced.module';

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
