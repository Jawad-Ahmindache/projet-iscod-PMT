import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TuiRangeChange {
    private readonly doc;
    private readonly el;
    private readonly range;
    /**
     * TODO replace with pointer events (when all supported browsers can handle them).
     * Don't forget to use setPointerCapture instead of listening all doc events
     */
    private readonly pointerDown$;
    private readonly pointerMove$;
    private readonly pointerUp$;
    readonly activeThumbChange: EventEmitter<"left" | "right">;
    constructor();
    private getFractionFromEvents;
    private detectActiveThumb;
    private findNearestActiveThumb;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiRangeChange, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiRangeChange, never, never, {}, { "activeThumbChange": "activeThumbChange"; }, never, never, true, never>;
}
