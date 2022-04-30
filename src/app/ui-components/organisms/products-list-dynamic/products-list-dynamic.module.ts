import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListDynamicComponent } from './products-list-dynamic.component';
import { IntersectionObserverModule } from '../../utils/directives/intersection-observer/intersection-observer.module';
import { ProductsHostDirective } from './shared/products-host.directive';

@NgModule({
  declarations: [ProductsListDynamicComponent, ProductsHostDirective],
  imports: [CommonModule, IntersectionObserverModule],
  exports: [ProductsListDynamicComponent],
})
export class ProductsListDynamicModule {}
