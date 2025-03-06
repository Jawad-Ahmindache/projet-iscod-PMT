import type { Provider } from '@angular/core';
import type { TuiSizeL, TuiSizeXS } from '@taiga-ui/core/types';
export interface TuiBadgeNotificationOptions {
    readonly size: TuiSizeL | TuiSizeXS;
}
export declare const TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS: TuiBadgeNotificationOptions;
export declare const TUI_BADGE_NOTIFICATION_OPTIONS: import("@angular/core").InjectionToken<TuiBadgeNotificationOptions>;
export declare function tuiBadgeNotificationOptionsProvider(options: Partial<TuiBadgeNotificationOptions>): Provider;
