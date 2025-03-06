import type { OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import type { TuiInteractiveState } from '@taiga-ui/core/types';
import { TuiTextfieldComponent } from './textfield.component';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/native-validator";
import * as i2 from "@taiga-ui/core/directives/appearance";
export declare class TuiTextfieldBase<T> implements OnChanges {
    private readonly focused;
    protected readonly control: NgControl | null;
    protected readonly a: import("@angular/core").WritableSignal<string>;
    protected readonly s: import("@angular/core").WritableSignal<TuiInteractiveState | null>;
    protected readonly m: import("@angular/core").WritableSignal<string | readonly string[] | null>;
    protected readonly f: import("@angular/core").Signal<boolean | null>;
    protected readonly el: HTMLInputElement;
    protected readonly textfield: TuiTextfieldComponent<T>;
    readOnly: boolean;
    invalid: boolean | null;
    nativeValue: import("@angular/core").Signal<string>;
    set focusedSetter(focused: boolean | null);
    set stateSetter(state: TuiInteractiveState | null);
    get mode(): string | null;
    ngOnChanges(): void;
    setValue(value: T | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTextfieldBase<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiTextfieldBase<any>, never, never, { "readOnly": { "alias": "readOnly"; "required": false; }; "invalid": { "alias": "invalid"; "required": false; }; "focusedSetter": { "alias": "focused"; "required": false; }; "stateSetter": { "alias": "state"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class TuiTextfieldDirective<T> extends TuiTextfieldBase<T> {
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTextfieldDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiTextfieldDirective<any>, "input[tuiTextfield]:not([tuiInputCard]):not([tuiInputExpire]):not([tuiInputCVC])", never, {}, {}, never, never, true, [{ directive: typeof i1.TuiNativeValidator; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiAppearance; inputs: {}; outputs: {}; }]>;
}
export declare class TuiWithTextfield {
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiWithTextfield, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiWithTextfield, never, never, {}, {}, never, never, true, [{ directive: typeof TuiTextfieldDirective; inputs: { "invalid": "invalid"; "focused": "focused"; "readOnly": "readOnly"; "state": "state"; }; outputs: {}; }]>;
}
