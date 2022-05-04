import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable, take, tap } from 'rxjs';
import { getProducts } from '../state/product/product.actions';
import { ProductState } from '../state/product/product.reducer';
import { selectProductsState as selectProductState } from '../state/product/product.selector';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<ProductState> {
  constructor(private store: Store) {}

  resolve(): Observable<ProductState> {
    this.store.dispatch(getProducts({ limit: 6 }));
    return this.store.select(selectProductState).pipe(
      filter(({ loading }) => !loading),
      take(1)
    );
  }
}
