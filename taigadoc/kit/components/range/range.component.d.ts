import type { OnChanges, QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';
import { TuiControl } from '@taiga-ui/cdk/classes';
import type { TuiSizeS } from '@taiga-ui/core/types';
import type { TuiKeySteps } from '@taiga-ui/kit/components/slider';
import * as i0 from "@angular/core";
import * as i1 from "./range-change.directive";
export declare class TuiRange extends TuiControl<[number, number]> implements OnChanges {
    private readonly changes;
    private readonly el;
    protected readonly options: import("@taiga-ui/kit/components/slider").TuiSliderOptions;
    protected lastActiveThumb: 'left' | 'right';
    min: number;
    max: number;
    step: number;
    size: TuiSizeS;
    segments: number;
    keySteps: TuiKeySteps | null;
    focusable: boolean;
    margin: number;
    limit: number;
    readonly slidersRefs: QueryList<ElementRef<HTMLInputElement>>;
    readonly left: import("@angular/core").Signal<number>;
    readonly right: import("@angular/core").Signal<number>;
    ngOnChanges(): void;
    processValue(value: number, right: boolean): void;
    toValue(fraction: number): number;
    protected get fractionStep(): number;
    protected get computedKeySteps(): TuiKeySteps;
    protected get segmentWidthRatio(): number;
    protected changeByStep(coefficient: number, target: HTMLElement): void;
    protected toPercent(value: number): number;
    private computePureKeySteps;
    private updateStart;
    private updateEnd;
    private checkDistance;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiRange, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiRange, "tui-range", never, { "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "step": { "alias": "step"; "required": false; }; "size": { "alias": "size"; "required": false; }; "segments": { "alias": "segments"; "required": false; }; "keySteps": { "alias": "keySteps"; "required": false; }; "focusable": { "alias": "focusable"; "required": false; }; "margin": { "alias": "margin"; "required": false; }; "limit": { "alias": "limit"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiRangeChange; inputs: {}; outputs: { "activeThumbChange": "activeThumbChange"; }; }]>;
}
