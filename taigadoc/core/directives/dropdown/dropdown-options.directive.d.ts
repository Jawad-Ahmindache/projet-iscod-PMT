import type { FactoryProvider } from '@angular/core';
import type { TuiVerticalDirection } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export type TuiDropdownAlign = 'center' | 'left' | 'right';
export type TuiDropdownWidth = 'auto' | 'fixed' | 'min';
export interface TuiDropdownOptions {
    readonly align: TuiDropdownAlign;
    readonly appearance: string;
    readonly direction: TuiVerticalDirection | null;
    readonly limitWidth: TuiDropdownWidth;
    readonly maxHeight: number;
    readonly minHeight: number;
    readonly offset: number;
}
/** Default values for dropdown options */
export declare const TUI_DROPDOWN_DEFAULT_OPTIONS: TuiDropdownOptions;
/**
 * Default parameters for dropdown directive
 */
export declare const TUI_DROPDOWN_OPTIONS: import("@angular/core").InjectionToken<TuiDropdownOptions>;
export declare const tuiDropdownOptionsProvider: (options: Partial<TuiDropdownOptions>) => FactoryProvider;
export declare class TuiDropdownOptionsDirective implements TuiDropdownOptions {
    private readonly options;
    align: TuiDropdownAlign;
    appearance: string;
    direction: TuiVerticalDirection | null;
    limitWidth: TuiDropdownWidth;
    minHeight: number;
    maxHeight: number;
    offset: number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDropdownOptionsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiDropdownOptionsDirective, "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]", never, { "align": { "alias": "tuiDropdownAlign"; "required": false; }; "appearance": { "alias": "tuiDropdownAppearance"; "required": false; }; "direction": { "alias": "tuiDropdownDirection"; "required": false; }; "limitWidth": { "alias": "tuiDropdownLimitWidth"; "required": false; }; "minHeight": { "alias": "tuiDropdownMinHeight"; "required": false; }; "maxHeight": { "alias": "tuiDropdownMaxHeight"; "required": false; }; "offset": { "alias": "tuiDropdownOffset"; "required": false; }; }, {}, never, never, true, never>;
}
