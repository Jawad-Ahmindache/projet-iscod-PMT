import { TuiTextfieldBase } from './textfield.directive';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/native-validator";
import * as i2 from "@taiga-ui/core/directives/appearance";
export declare class TuiSelect<T> extends TuiTextfieldBase<T> {
    private readonly nav;
    placeholder: string;
    setValue(value: T): void;
    focus(): void;
    protected get value(): string;
    protected onCopy(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiSelect<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiSelect<any>, "select[tuiTextfield]", never, { "placeholder": { "alias": "placeholder"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiNativeValidator; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiAppearance; inputs: {}; outputs: {}; }]>;
}
