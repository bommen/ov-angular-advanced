import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, tap, withLatestFrom } from 'rxjs';
import { CartService } from '../../state/cart/cart.service';
import { AddToCartEvent } from '../../ui-components/organisms/products-list/products-list.component';
import {
  ProductsListState,
  selectProductsList,
} from './selectors/select-products-list.selector';

@Component({
  selector: 'ov-smart-products-list',
  templateUrl: './smart-products-list.component.html',
  styleUrls: ['./smart-products-list.component.scss'],
})
export class SmartProductsListComponent implements OnInit {
  state$!: Observable<ProductsListState>;

  constructor(private store: Store, private cartService: CartService) {}

  ngOnInit(): void {
    this.state$ = combineLatest(
      [this.store.select(selectProductsList), this.cartService.cart$],
      (state, cart) => ({
        ...state,
        data: state.data
          ? state.data.map((product) => ({
              ...product,
              cartInfo: cart.products.byId[product.id],
            }))
          : undefined,
      })
    );
  }

  addProductToCart({ product, quantity }: AddToCartEvent) {
    this.cartService.add(product, quantity);
  }
}
