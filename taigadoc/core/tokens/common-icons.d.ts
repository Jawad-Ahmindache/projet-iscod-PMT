import type { Provider } from '@angular/core';
export interface TuiCommonIcons {
    readonly check: string;
    readonly close: string;
    readonly error: string;
    readonly more: string;
    readonly search: string;
    readonly ellipsis: string;
}
export declare const TUI_COMMON_ICONS: import("@angular/core").InjectionToken<TuiCommonIcons>;
export declare function tuiCommonIconsProvider(icons: Partial<TuiCommonIcons>): Provider;
