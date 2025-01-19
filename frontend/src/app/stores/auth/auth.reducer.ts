import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthState } from '../../models/auth.interface';
import { AuthActions } from './auth.actions';

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,

    on(AuthActions.login, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(AuthActions.loginSuccess, (state, { token, user }) => ({
      ...state,
      token,
      user,
      loading: false,
      error: null,
    })),
    on(AuthActions.loginFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(AuthActions.register, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(AuthActions.registerSuccess, (state, { token, user }) => ({
      ...state,
      token,
      user,
      loading: false,
      error: null,
    })),
    on(AuthActions.registerFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),

    on(AuthActions.logout, () => initialState),
    on(AuthActions.clearError, (state) => ({
      ...state,
      error: null,
    }))
  ),
});
