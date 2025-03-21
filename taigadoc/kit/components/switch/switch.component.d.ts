import type { DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';
import type { TuiSizeS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/appearance";
import * as i2 from "@taiga-ui/cdk/directives/native-validator";
export declare class TuiSwitch implements DoCheck {
    private readonly appearance;
    private readonly resolver;
    private readonly options;
    private readonly el;
    protected readonly control: NgControl | null;
    size: TuiSizeS;
    showIcons: boolean;
    ngDoCheck(): void;
    protected get icon(): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiSwitch, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiSwitch, "input[type=\"checkbox\"][tuiSwitch]", never, { "size": { "alias": "size"; "required": false; }; "showIcons": { "alias": "showIcons"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiAppearance; inputs: { "tuiAppearanceState": "tuiAppearanceState"; "tuiAppearanceFocus": "tuiAppearanceFocus"; }; outputs: {}; }, { directive: typeof i2.TuiNativeValidator; inputs: {}; outputs: {}; }]>;
}
