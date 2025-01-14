import type { FactoryProvider } from '@angular/core';
import type { TuiAppearanceOptions } from '@taiga-ui/core/directives/appearance';
export interface TuiLinkOptions extends TuiAppearanceOptions {
    readonly pseudo: boolean;
}
export declare const TUI_LINK_DEFAULT_OPTIONS: TuiLinkOptions;
export declare const TUI_LINK_OPTIONS: import("@angular/core").InjectionToken<TuiLinkOptions>;
export declare function tuiLinkOptionsProvider(options: Partial<TuiLinkOptions>): FactoryProvider;
