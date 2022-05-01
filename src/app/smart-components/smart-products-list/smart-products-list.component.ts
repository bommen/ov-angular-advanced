import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product/product.service';
import {
  AddToCartEvent,
  ProductUnion,
} from '../../ui-components/organisms/products-list/products-list.component';

@Component({
  selector: 'ov-smart-products-list',
  templateUrl: './smart-products-list.component.html',
  styleUrls: ['./smart-products-list.component.scss'],
})
export class SmartProductsListComponent implements OnInit, AfterViewInit {
  products$!: Observable<ProductUnion[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.products$.pipe(tap(console.log));
  }

  ngAfterViewInit(): void {
    this.productService.get();
  }

  addProductToCart({ product, quantity }: AddToCartEvent) {
    this.cartService.add(product, quantity);
  }
}
