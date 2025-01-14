import type { TuiSizeXXL, TuiSizeXXS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export declare class TuiProgressCircle {
    private readonly options;
    protected readonly animationDelay: import("@angular/core").Signal<boolean | undefined>;
    value: number;
    max: number;
    color: string | null;
    size: TuiSizeXXL | TuiSizeXXS;
    protected get progressRatio(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiProgressCircle, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiProgressCircle, "tui-progress-circle", never, { "value": { "alias": "value"; "required": false; }; "max": { "alias": "max"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}
