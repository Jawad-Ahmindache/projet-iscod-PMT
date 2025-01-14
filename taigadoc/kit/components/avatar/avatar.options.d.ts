import type { Provider } from '@angular/core';
import type { TuiAppearanceOptions } from '@taiga-ui/core/directives/appearance';
import type { TuiSizeXS, TuiSizeXXL } from '@taiga-ui/core/types';
export interface TuiAvatarOptions extends TuiAppearanceOptions {
    readonly appearance: string;
    readonly round: boolean;
    readonly size: TuiSizeXS | TuiSizeXXL;
}
export declare const TUI_AVATAR_DEFAULT_OPTIONS: TuiAvatarOptions;
export declare const TUI_AVATAR_OPTIONS: import("@angular/core").InjectionToken<TuiAvatarOptions>;
export declare function tuiAvatarOptionsProvider(options: Partial<TuiAvatarOptions>): Provider;
