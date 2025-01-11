import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, tap, timer } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);
  private store = inject(Store);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ request }) =>
        this.authService.login(request).pipe(
          map((response) => {
            this.authService.setAuth(response);
            return AuthActions.loginSuccess({
              token: response.token,
              user: response.user,
            });
          }),
          catchError((error) =>
            of(
              AuthActions.loginFailure({
                error: error.error.message || 'Une erreur est survenue',
              })
            )
          )
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      mergeMap(({ request }) =>
        this.authService.register(request).pipe(
          map((response) => {
            this.authService.setAuth(response);
            return AuthActions.registerSuccess({
              token: response.token,
              user: response.user,
            });
          }),
          catchError((error) =>
            of(
              AuthActions.registerFailure({
                error: error.error.message || 'Une erreur est survenue',
              })
            )
          )
        )
      )
    )
  );

  authSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess, AuthActions.registerSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  clearError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginFailure, AuthActions.registerFailure),
        tap(() =>
          timer(1500).subscribe(() =>
            this.store.dispatch(AuthActions.clearError())
          )
        )
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.authService.clearAuth();
          this.router.navigate(['/auth/login']);
        })
      ),
    { dispatch: false }
  );
}
