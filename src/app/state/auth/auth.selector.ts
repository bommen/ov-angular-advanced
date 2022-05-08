import { createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const authFeatureKey = 'auth';

export const selectProductsState =
  createFeatureSelector<AuthState>(authFeatureKey);
