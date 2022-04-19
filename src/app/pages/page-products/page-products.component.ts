import { Component, Input, OnInit } from '@angular/core';
import { ProductReplaced } from '../../organisms/product-replaced/product-replaced.component';
import { ProductDefault } from '../../organisms/product-default/product-default.component';
import { ProductOutOfStock } from '../../organisms/product-out-of-stock/product-out-of-stock.component';

type ProductUnion = ProductDefault | ProductOutOfStock | ProductReplaced;

@Component({
  selector: 'ov-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
})
export class PageProductsComponent implements OnInit {
  @Input() products!: ProductUnion[];

  constructor() {}

  ngOnInit(): void {}

  asProduct(product: ProductUnion): ProductDefault | undefined {
    return product.type === 'product' ? product : undefined;
  }

  asProductOutOfStock(product: ProductUnion): ProductOutOfStock | undefined {
    return product.type === 'product-out-of-stock' ? product : undefined;
  }

  asProductReplaced(product: ProductUnion): ProductReplaced | undefined {
    return product.type === 'product-replaced' ? product : undefined;
  }
}
