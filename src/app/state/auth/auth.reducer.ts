import { createReducer, on } from '@ngrx/store';
import { AsyncState } from '../../utils/async-state.utils';
import * as AuthActions from './auth.actions';
import { User } from './auth.service';

export type AuthState = AsyncState<User>;

const INITIAL_STATE: AuthState = {
  data: {
    username: 'Anonymous',
  },
  loading: false,
};

export const authReducer = createReducer<AuthState>(
  INITIAL_STATE,
  on(AuthActions.login, () => ({
    loading: true,
  })),
  on(AuthActions.loginSuccess, (_, { user }) => ({
    data: user,
    loading: false,
  })),
  on(AuthActions.loginError, (_, { error }) => ({
    error,
    loading: false,
  })),
  on(AuthActions.logout, () => INITIAL_STATE)
);
