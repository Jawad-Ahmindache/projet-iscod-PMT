import type { TuiSizeS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export declare class TuiSliderComponent {
    private readonly injector;
    private readonly control;
    protected readonly options: import("./slider.options").TuiSliderOptions;
    size: TuiSizeS;
    segments: number;
    readonly el: HTMLInputElement;
    constructor();
    get valueRatio(): number;
    get min(): number;
    get max(): number;
    get value(): number;
    set value(newValue: number);
    protected get hasKeySteps(): boolean;
    protected get segmentWidth(): number;
    protected get step(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiSliderComponent, "input[type=range][tuiSlider]", never, { "size": { "alias": "size"; "required": false; }; "segments": { "alias": "segments"; "required": false; }; }, {}, never, never, true, never>;
}
