import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, startWith, Subject } from 'rxjs';
import { Product } from '../../ui-components/molecules/product/product.component';

interface CartItem {
  product: Product;
  quantity: number;
  total: number;
}

export interface Cart {
  total: number;
  items: CartItem[];
}

const EMPTY_CART: Cart = {
  items: [],
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
    const cartItem = {
      product,
      quantity,
      total: quantity * product.price,
    };

    const cart = this.cartSubject.getValue();

    this.cartSubject.next({
      items: [...cart.items, cartItem],
      total: cart.total + cartItem.total,
    });
  }
}
