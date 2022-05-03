import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../ui-components/molecules/product/product.component';
import { Normalized } from '../../utils/normalization.utils';

export interface CartProduct {
  id: string;
  quantity: number;
  total: number;
}

export interface Cart {
  total: number;
  products: Normalized<CartProduct>;
}

const EMPTY_CART: Cart = {
  products: {
    byId: {},
    allIds: [],
  },
  total: 0,
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: Observable<Cart>;

  private cartSubject = new BehaviorSubject<Cart>(EMPTY_CART);

  constructor() {
    this.cart$ = this.cartSubject.asObservable();
  }

  add(product: Product, quantity: number) {
    const cartItem: CartProduct = {
      id: product.id,
      quantity,
      total: quantity * product.price,
    };

    const cart = this.cartSubject.getValue();

    this.cartSubject.next({
      products: {
        byId: {
          ...cart.products.byId,
          [cartItem.id]: cartItem,
        },
        allIds: [...cart.products.allIds, cartItem.id],
      },
      total: cart.total + cartItem.total,
    });
  }
}
