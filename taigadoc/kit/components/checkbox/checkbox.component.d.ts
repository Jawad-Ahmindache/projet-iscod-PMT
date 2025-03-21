import type { DoCheck, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import type { TuiSizeS } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/appearance";
import * as i2 from "@taiga-ui/cdk/directives/native-validator";
export declare class TuiCheckbox implements OnInit, DoCheck {
    private readonly appearance;
    private readonly options;
    private readonly resolver;
    private readonly destroyRef;
    private readonly el;
    size: TuiSizeS;
    readonly control: NgControl | null;
    ngOnInit(): void;
    ngDoCheck(): void;
    protected getIcon(state: 'checked' | 'indeterminate'): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiCheckbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiCheckbox, "input[type=\"checkbox\"][tuiCheckbox]", never, { "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiAppearance; inputs: { "tuiAppearanceState": "tuiAppearanceState"; "tuiAppearanceFocus": "tuiAppearanceFocus"; }; outputs: {}; }, { directive: typeof i2.TuiNativeValidator; inputs: {}; outputs: {}; }]>;
}
