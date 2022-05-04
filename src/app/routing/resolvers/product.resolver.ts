import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable, take } from 'rxjs';
import { ProductState } from '../../state/product/product.reducer';
import { selectProductsState } from '../../state/product/product.selector';

@Injectable({ providedIn: 'root' })
export class HeroResolver implements Resolve<ProductState> {
  constructor(private store: Store) {}

  resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<ProductState> {
    return this.store.select(selectProductsState).pipe(
      filter(({ loading }) => !loading),
      take(1)
    );
  }
}
