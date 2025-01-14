import type { Provider } from '@angular/core';
import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import type { TuiDialogOptions } from './dialog.interfaces';
export declare const TUI_DIALOGS: import("@angular/core").InjectionToken<BehaviorSubject<readonly any[]>>;
export declare const TUI_DIALOG_DEFAULT_OPTIONS: TuiDialogOptions<void>;
/**
 * A stream to close dialogs
 */
export declare const TUI_DIALOGS_CLOSE: import("@angular/core").InjectionToken<Observable<unknown>>;
/**
 * Default parameters for dialog component
 */
export declare const TUI_DIALOG_OPTIONS: import("@angular/core").InjectionToken<TuiDialogOptions<void>>;
export declare function tuiDialogOptionsProvider(options: Partial<TuiDialogOptions<unknown>>): Provider;
