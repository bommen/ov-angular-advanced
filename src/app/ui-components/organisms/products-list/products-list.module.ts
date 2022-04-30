import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDefaultModule } from '../../molecules/product-default/product-default.module';
import { ProductOutOfStockModule } from '../../molecules/product-out-of-stock/product-out-of-stock.module';
import { ProductReplacedModule } from '../../molecules/product-replaced/product-replaced.module';
import { IntersectionObserverModule } from '../../utils/directives/intersection-observer/intersection-observer.module';
import { ProductsListComponent } from './products-list.component';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    ProductDefaultModule,
    ProductReplacedModule,
    ProductOutOfStockModule,
    IntersectionObserverModule,
  ],
  exports: [ProductsListComponent],
})
export class ProductsListModule {}
