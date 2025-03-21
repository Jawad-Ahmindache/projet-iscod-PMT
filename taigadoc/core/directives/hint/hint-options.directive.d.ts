import type { FactoryProvider, OnChanges } from '@angular/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export type TuiHintDirection = 'bottom-left' | 'bottom-right' | 'bottom' | 'left-bottom' | 'left-top' | 'left' | 'right-bottom' | 'right-top' | 'right' | 'top-left' | 'top-right' | 'top';
export declare const TUI_HINT_DIRECTIONS: readonly TuiHintDirection[];
export interface TuiHintOptions {
    readonly appearance: string;
    readonly direction: TuiHintDirection | TuiHintDirection[];
    readonly hideDelay: number;
    readonly icon: string;
    readonly showDelay: number;
}
/** Default values for hint options */
export declare const TUI_HINT_DEFAULT_OPTIONS: TuiHintOptions;
/**
 * Default parameters for hint directive
 */
export declare const TUI_HINT_OPTIONS: import("@angular/core").InjectionToken<TuiHintOptions>;
export declare const tuiHintOptionsProvider: (options: Partial<TuiHintOptions>) => FactoryProvider;
/**
 * @deprecated: drop in 5.0
 */
export declare class TuiHintOptionsDirective implements TuiHintOptions, OnChanges {
    private readonly options;
    content: PolymorpheusContent;
    direction: TuiHintDirection | TuiHintDirection[];
    appearance: string;
    showDelay: number;
    hideDelay: number;
    icon: string;
    readonly change$: Subject<void>;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiHintOptionsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiHintOptionsDirective, "[tuiHintContent]", never, { "content": { "alias": "tuiHintContent"; "required": false; }; "direction": { "alias": "tuiHintDirection"; "required": false; }; "appearance": { "alias": "tuiHintAppearance"; "required": false; }; "showDelay": { "alias": "tuiHintShowDelay"; "required": false; }; "hideDelay": { "alias": "tuiHintHideDelay"; "required": false; }; }, {}, never, never, true, never>;
}
