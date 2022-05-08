import { createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const productFeatureKey = 'product';

export const selectProductState =
  createFeatureSelector<ProductState>(productFeatureKey);
