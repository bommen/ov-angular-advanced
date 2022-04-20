import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../molecules/product/product.component';

export interface ProductOutOfStock extends Product {
  type: 'product-out-of-stock';
}

@Component({
  selector: 'ov-product-out-of-stock',
  templateUrl: './product-out-of-stock.component.html',
  styleUrls: ['./product-out-of-stock.component.scss'],
})
export class ProductOutOfStockComponent implements OnInit {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}
}
