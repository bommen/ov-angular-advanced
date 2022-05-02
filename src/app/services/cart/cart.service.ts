import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../ui-components/molecules/product/product.component';
import { Normalized } from '../../utils/normalization.utils';

export interface CartItem {
  id: string;
  quantity: number;
  total: number;
}

export interface Cart {
  total: number;
  items: Normalized<CartItem>;
}

const EMPTY_CART: Cart = {
  items: {
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
    const cartItem: CartItem = {
      id: product.id,
      quantity,
      total: quantity * product.price,
    };

    const cart = this.cartSubject.getValue();

    this.cartSubject.next({
      items: {
        byId: {
          ...cart.items.byId,
          [cartItem.id]: cartItem,
        },
        allIds: [...cart.items.allIds, cartItem.id],
      },
      total: cart.total + cartItem.total,
    });
  }
}
