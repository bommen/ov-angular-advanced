import { Component, Input, OnInit } from '@angular/core';
import { ProductDefaultMock } from '../../ui-components/molecules/product-default/product-default.component.mocks';
import {
  AddToCartEvent,
  ProductUnion,
} from '../../ui-components/organisms/products-list/products-list.component';

@Component({
  selector: 'ov-smart-products-list',
  templateUrl: './smart-products-list.component.html',
  styleUrls: ['./smart-products-list.component.scss'],
})
export class SmartProductsListComponent implements OnInit {
  products: ProductUnion[] = [ProductDefaultMock.MAX_CONTENT];

  ngOnInit(): void {}

  addProductToCart({ product, quantity }: AddToCartEvent) {
    console.log(`Add  ${quantity}x ${product.id} to cart`);
  }
}
