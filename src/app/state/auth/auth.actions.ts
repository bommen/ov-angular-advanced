import { createAction, props } from '@ngrx/store';
import { User } from './auth.service';

export const login = createAction(
  '[Auth] Login',
  props<{ usename: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginError = createAction(
  '[Auth] Login Error',
  props<{ error: Error }>()
);

export const logout = createAction('[Auth] Logout');
