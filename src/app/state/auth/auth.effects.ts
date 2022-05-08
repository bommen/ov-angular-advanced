import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ProductEffects {
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProducts.type),
      switchMap(({ limit }) =>
        this.productService.get({ limit }).pipe(
          switchMap((apiProducts) => [
            ProductActions.getProductsSuccess({ products: apiProducts }),
          ]),
          catchError((error) => of(ProductActions.getProductsError({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private auth: AuthService
  ) {}
}
