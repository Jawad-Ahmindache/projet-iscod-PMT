import type { Provider } from '@angular/core';
export interface TuiFluidTypographyOptions {
    readonly min: number;
    readonly max: number;
}
export declare const TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS: TuiFluidTypographyOptions;
export declare const TUI_FLUID_TYPOGRAPHY_OPTIONS: import("@angular/core").InjectionToken<TuiFluidTypographyOptions>;
export declare function tuiFluidTypographyOptionsProvider(options: Partial<TuiFluidTypographyOptions>): Provider;
