import type { DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';
import type { TuiSizeS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/appearance";
import * as i2 from "@taiga-ui/cdk/directives/native-validator";
export declare class TuiRadioComponent implements DoCheck {
    private readonly appearance;
    private readonly options;
    private readonly el;
    protected readonly control: NgControl | null;
    size: TuiSizeS;
    ngDoCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiRadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiRadioComponent, "input[type=\"radio\"][tuiRadio]", never, { "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiAppearance; inputs: { "tuiAppearanceState": "tuiAppearanceState"; "tuiAppearanceFocus": "tuiAppearanceFocus"; }; outputs: {}; }, { directive: typeof i2.TuiNativeValidator; inputs: {}; outputs: {}; }]>;
}
