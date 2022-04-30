import { Directive, Input, ViewContainerRef } from '@angular/core';
import { ProductUnion } from '../../../organisms/products-list/products-list.component';

@Directive({
  selector: '[ovProductsHost]',
})
export class ProductsHostDirective {
  @Input() ovProductsHost!: ProductUnion;
  constructor(public viewContainerRef: ViewContainerRef) {}
}
