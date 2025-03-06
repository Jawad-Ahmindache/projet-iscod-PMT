import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  LoginRequest,
  RegisterRequest,
  User,
} from '../../models/auth.interface';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: props<{ request: LoginRequest }>(),
    'Login Success': props<{ token: string; user: User }>(),
    'Login Failure': props<{ error: string }>(),

    Register: props<{ request: RegisterRequest }>(),
    'Register Success': props<{ token: string; user: User }>(),
    'Register Failure': props<{ error: string }>(),

    Logout: emptyProps(),
    'Clear Error': emptyProps(),
  },
});
