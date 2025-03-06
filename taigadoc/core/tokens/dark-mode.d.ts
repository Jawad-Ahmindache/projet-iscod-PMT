import type { WritableSignal } from '@angular/core';
export declare const TUI_DARK_MODE_DEFAULT_KEY = "tuiDark";
export declare const TUI_DARK_MODE_KEY: import("@angular/core").InjectionToken<string>;
export declare const TUI_DARK_MODE: import("@angular/core").InjectionToken<WritableSignal<boolean> & {
    reset(): void;
}>;
