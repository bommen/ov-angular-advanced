import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/molecules/product/product.component';

export interface ProductReplaced extends Product {
  type: 'product-replaced';
  replacement: Product;
}

@Component({
  selector: 'ov-product-replaced',
  templateUrl: './product-replaced.component.html',
  styleUrls: ['./product-replaced.component.scss'],
})
export class ProductReplacedComponent implements OnInit {
  @Input() product!: ProductReplaced;

  constructor() {}

  ngOnInit(): void {}
}
