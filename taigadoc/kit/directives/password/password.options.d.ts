import type { TuiStringHandler } from '@taiga-ui/cdk/types';
import type { TuiSizeL, TuiSizeS } from '@taiga-ui/core/types';
export interface TuiPasswordOptions {
    readonly icons: Readonly<{
        hide: TuiStringHandler<TuiSizeL | TuiSizeS> | string;
        show: TuiStringHandler<TuiSizeL | TuiSizeS> | string;
    }>;
}
export declare const TUI_PASSWORD_OPTIONS: import("@angular/core").InjectionToken<TuiPasswordOptions>, tuiPasswordOptionsProvider: (item: Partial<TuiPasswordOptions> | import("@angular/core").ProviderToken<Partial<TuiPasswordOptions>>) => import("@angular/core").FactoryProvider;
