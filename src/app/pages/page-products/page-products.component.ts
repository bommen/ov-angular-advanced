import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts } from '../../state/product/product.actions';
import { ProductState } from '../../state/product/product.reducer';
@Component({
  selector: 'ov-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
})
export class PageProductsComponent implements OnInit {
  constructor(private store: Store<Record<'products', ProductState>>) {}

  ngOnInit(): void {
    this.store.dispatch(getProducts({ limit: 6 }));
  }
}
