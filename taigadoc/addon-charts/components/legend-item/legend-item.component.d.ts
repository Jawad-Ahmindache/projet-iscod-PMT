import type { TuiSizeS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export declare class TuiLegendItem {
    active: boolean;
    color: string;
    text: string;
    size: TuiSizeS;
    disabled: boolean;
    protected get computedColor(): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiLegendItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiLegendItem, "tui-legend-item", never, { "active": { "alias": "active"; "required": false; }; "color": { "alias": "color"; "required": false; }; "text": { "alias": "text"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["[tuiCheckbox]", "*"], true, never>;
}
