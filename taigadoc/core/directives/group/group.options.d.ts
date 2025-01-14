import type { Provider } from '@angular/core';
import type { TuiOrientation, TuiSizeL } from '@taiga-ui/core/types';
export interface TuiGroupOptions {
    readonly size: TuiSizeL;
    readonly collapsed: boolean;
    readonly rounded: boolean;
    readonly orientation: TuiOrientation;
}
export declare const TUI_GROUP_DEFAULT_OPTIONS: TuiGroupOptions;
export declare const TUI_GROUP_OPTIONS: import("@angular/core").InjectionToken<TuiGroupOptions>;
export declare function tuiGroupOptionsProvider(options: Partial<TuiGroupOptions>): Provider;
