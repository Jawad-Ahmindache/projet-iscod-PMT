import type { TuiStringHandler } from '@taiga-ui/cdk/types';
import type { TuiAppearanceOptions } from '@taiga-ui/core/directives';
import type { TuiSizeS } from '@taiga-ui/core/types';
export interface TuiLikeOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeS;
    readonly icons: Readonly<{
        checked: TuiStringHandler<TuiSizeS> | string;
        unchecked: TuiStringHandler<TuiSizeS> | string;
    }>;
}
export declare const TUI_LIKE_OPTIONS: import("@angular/core").InjectionToken<TuiLikeOptions>, tuiLikeOptionsProvider: (item: Partial<TuiLikeOptions> | import("@angular/core").ProviderToken<Partial<TuiLikeOptions>>) => import("@angular/core").FactoryProvider;
