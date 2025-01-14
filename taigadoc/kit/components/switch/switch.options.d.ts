import type { Provider } from '@angular/core';
import type { TuiStringHandler } from '@taiga-ui/cdk/types';
import type { TuiSizeS } from '@taiga-ui/core/types';
export interface TuiSwitchOptions {
    readonly showIcons: boolean;
    readonly size: TuiSizeS;
    readonly icon: TuiStringHandler<TuiSizeS> | string;
    readonly appearance: TuiStringHandler<HTMLInputElement>;
}
export declare const TUI_SWITCH_DEFAULT_OPTIONS: TuiSwitchOptions;
export declare const TUI_SWITCH_OPTIONS: import("@angular/core").InjectionToken<TuiSwitchOptions>;
export declare function tuiSwitchOptionsProvider(options: Partial<TuiSwitchOptions>): Provider;
