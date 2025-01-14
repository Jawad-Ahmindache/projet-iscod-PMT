import type { TuiButtonOptions } from '@taiga-ui/core/components/button';
import type { TuiSizeS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export declare class TuiActionBarComponent implements TuiButtonOptions {
    protected readonly animation: import("@angular/animations").AnimationOptions;
    expanded: boolean;
    size: TuiSizeS;
    readonly appearance = "glass";
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiActionBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiActionBarComponent, "tui-action-bar", never, { "expanded": { "alias": "expanded"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["tui-data-list,[tuiMenu]", "*", "a,button,[tuiAction]"], true, never>;
}
