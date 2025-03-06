import type { FactoryProvider } from '@angular/core';
export declare const TUI_ICON_REGISTRY: import("@angular/core").InjectionToken<Record<string, string>>;
/**
 * @deprecated: use {@link TUI_ICON_REGISTRY}
 */
export declare const TUI_ICON_STARTS: import("@angular/core").InjectionToken<Record<string, string>>;
export declare function tuiIconsProvider(icons: Record<string, string>): FactoryProvider;
