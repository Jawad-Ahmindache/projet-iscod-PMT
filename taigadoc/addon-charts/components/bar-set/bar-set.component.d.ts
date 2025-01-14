import type { TuiSizeL, TuiSizeS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export declare class TuiBarSet {
    value: readonly number[];
    size: TuiSizeL | TuiSizeS | null;
    collapsed: boolean;
    protected get computedValue(): readonly number[];
    protected get computedSegments(): readonly number[];
    protected get computedSize(): TuiSizeL | TuiSizeS;
    protected getHeight(value: number): number;
    private getLargest;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiBarSet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiBarSet, "tui-bar-set", never, { "value": { "alias": "value"; "required": false; }; "size": { "alias": "size"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; }, {}, never, ["*"], true, never>;
}
