import type { TuiLineHandler, TuiLineType } from '@taiga-ui/addon-charts/types';
import * as i0 from "@angular/core";
export declare const TUI_ALWAYS_DASHED: TuiLineHandler;
export declare const TUI_ALWAYS_DOTTED: TuiLineHandler;
export declare const TUI_ALWAYS_SOLID: TuiLineHandler;
export declare const TUI_ALWAYS_NONE: TuiLineHandler;
export declare class TuiAxes {
    axisX: TuiLineType;
    axisXLabels: ReadonlyArray<string | null>;
    axisY: TuiLineType;
    axisYInset: boolean;
    axisYLabels: readonly string[];
    axisYName: string;
    axisYSecondaryInset: boolean;
    axisYSecondaryLabels: readonly string[];
    axisYSecondaryName: string;
    horizontalLines: number;
    horizontalLinesHandler: TuiLineHandler;
    verticalLines: number;
    verticalLinesHandler: TuiLineHandler;
    get hasXLabels(): boolean;
    get hasYLabels(): boolean;
    get hasYSecondaryLabels(): boolean;
    fallback(label: string | null): string;
    protected get centeredXLabels(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiAxes, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiAxes, "tui-axes", never, { "axisX": { "alias": "axisX"; "required": false; }; "axisXLabels": { "alias": "axisXLabels"; "required": false; }; "axisY": { "alias": "axisY"; "required": false; }; "axisYInset": { "alias": "axisYInset"; "required": false; }; "axisYLabels": { "alias": "axisYLabels"; "required": false; }; "axisYName": { "alias": "axisYName"; "required": false; }; "axisYSecondaryInset": { "alias": "axisYSecondaryInset"; "required": false; }; "axisYSecondaryLabels": { "alias": "axisYSecondaryLabels"; "required": false; }; "axisYSecondaryName": { "alias": "axisYSecondaryName"; "required": false; }; "horizontalLines": { "alias": "horizontalLines"; "required": false; }; "horizontalLinesHandler": { "alias": "horizontalLinesHandler"; "required": false; }; "verticalLines": { "alias": "verticalLines"; "required": false; }; "verticalLinesHandler": { "alias": "verticalLinesHandler"; "required": false; }; }, {}, never, ["*"], true, never>;
}
