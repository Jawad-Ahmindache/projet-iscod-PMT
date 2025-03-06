import type { Provider } from '@angular/core';
import type { TuiPopover } from '@taiga-ui/cdk/services';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { Observable } from 'rxjs';
export interface TuiSheetDialogOptions<I = undefined> {
    readonly closeable: Observable<boolean> | boolean;
    readonly data: I;
    readonly initial: number;
    readonly label: PolymorpheusContent<TuiPopover<TuiSheetDialogOptions<I>, any>>;
    readonly offset: number;
    readonly stops: readonly string[];
    readonly bar: boolean;
}
export declare const TUI_SHEET_DIALOG_DEFAULT_OPTIONS: TuiSheetDialogOptions;
/**
 * Default parameters for mobile dialog component
 */
export declare const TUI_SHEET_DIALOG_OPTIONS: import("@angular/core").InjectionToken<TuiSheetDialogOptions<undefined>>;
export declare function tuiSheetDialogOptionsProvider(options: Partial<TuiSheetDialogOptions>): Provider;
