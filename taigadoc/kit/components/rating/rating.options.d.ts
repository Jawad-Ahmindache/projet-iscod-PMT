import type { Provider } from '@angular/core';
import type { TuiContext } from '@taiga-ui/cdk/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
export interface TuiRatingOptions {
    readonly icon: PolymorpheusContent<TuiContext<number> & {
        value: number;
    }>;
    readonly max: number;
}
export declare const TUI_RATING_DEFAULT_OPTIONS: TuiRatingOptions;
export declare const TUI_RATING_OPTIONS: import("@angular/core").InjectionToken<TuiRatingOptions>;
export declare function tuiRatingOptionsProvider(options: Partial<TuiRatingOptions>): Provider;
