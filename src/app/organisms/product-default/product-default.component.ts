import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../molecules/product/product.component';
import { Quantity } from '../../molecules/quantity-picker/quantity-picker.component';

export interface ProductDefault extends Product {
  type: 'product';
  quantity: Quantity;
  isLimited: boolean;
}

@Component({
  selector: 'ov-product-default',
  templateUrl: './product-default.component.html',
  styleUrls: ['./product-default.component.scss'],
})
export class ProductDefaultComponent implements OnInit {
  @Input() product!: ProductDefault;

  constructor() {}

  ngOnInit(): void {}

  selectQuantity(quantity: number) {
    console.log('Add to cart', this.product.id, quantity);
  }
}
