import type { TuiStringHandler } from '@taiga-ui/cdk/types';
import type { TuiSizeL, TuiSizeS } from '@taiga-ui/core/types';
export interface TuiCopyOptions {
    readonly icon: TuiStringHandler<TuiSizeL | TuiSizeS> | string;
}
export declare const TUI_COPY_OPTIONS: import("@angular/core").InjectionToken<TuiCopyOptions>, tuiCopyOptionsProvider: (item: Partial<TuiCopyOptions> | import("@angular/core").ProviderToken<Partial<TuiCopyOptions>>) => import("@angular/core").FactoryProvider;
