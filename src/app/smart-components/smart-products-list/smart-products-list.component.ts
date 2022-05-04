import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductState } from '../../state/product/product.reducer';
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

  constructor(private store: Store<Record<'product', ProductState>>) {}

  ngOnInit(): void {
    this.state$ = this.store.select(({ product }) =>
      selectProductsList(product)
    );
  }

  addProductToCart({ product, quantity }: AddToCartEvent) {}
}
