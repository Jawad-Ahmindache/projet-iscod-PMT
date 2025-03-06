import type { TuiSizeL, TuiSizeS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export declare class TuiBar {
    value: readonly number[];
    size: TuiSizeL | TuiSizeS;
    protected getHeight(value: number): number;
    private getSum;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiBar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiBar, "tui-bar", never, { "value": { "alias": "value"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}
