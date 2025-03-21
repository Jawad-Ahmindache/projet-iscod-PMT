import { TuiControl } from '@taiga-ui/cdk/classes';
import type { TuiDataListHost } from '@taiga-ui/core/components/data-list';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/dropdown";
import * as i2 from "@taiga-ui/core/components/textfield";
export declare class TuiButtonSelect<T> extends TuiControl<T> implements TuiDataListHost<T> {
    private readonly open;
    readonly size = "s";
    handleOption(option: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiButtonSelect<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiButtonSelect<any>, "button[tuiButtonSelect]", never, {}, {}, never, never, true, [{ directive: typeof i1.TuiDropdownDirective; inputs: {}; outputs: {}; }, { directive: typeof i1.TuiWithDropdownOpen; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiWithTextfieldDropdown; inputs: {}; outputs: {}; }]>;
}
