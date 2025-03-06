import { EventEmitter } from '@angular/core';
import type { TuiSizeXL, TuiSizeXS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export declare class TuiRingChart {
    value: readonly number[];
    size: TuiSizeXL | TuiSizeXS;
    activeItemIndex: number;
    readonly activeItemIndexChange: EventEmitter<number>;
    protected onActiveItemIndexChange(index: number): void;
    private updateActiveItemIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiRingChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiRingChart, "tui-ring-chart", never, { "value": { "alias": "value"; "required": false; }; "size": { "alias": "size"; "required": false; }; "activeItemIndex": { "alias": "activeItemIndex"; "required": false; }; }, { "activeItemIndexChange": "activeItemIndexChange"; }, never, ["*"], true, never>;
}
