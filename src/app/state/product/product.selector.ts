import { createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const productFeatureKey = 'products';

export const selectProductsState =
  createFeatureSelector<ProductState>(productFeatureKey);
