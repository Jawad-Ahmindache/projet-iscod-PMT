import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import { TuiControl } from '@taiga-ui/cdk/classes';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_DATA_LIST_HOST } from '@taiga-ui/core/components/data-list';
import * as i2 from '@taiga-ui/core/components/textfield';
import { TuiWithTextfieldDropdown } from '@taiga-ui/core/components/textfield';
import * as i1 from '@taiga-ui/core/directives/dropdown';
import { tuiDropdownOpen, tuiDropdownOptionsProvider, TuiDropdownDirective, TuiWithDropdownOpen } from '@taiga-ui/core/directives/dropdown';

class TuiButtonSelect extends TuiControl {
    constructor() {
        super(...arguments);
        this.open = tuiDropdownOpen();
        this.size = 's';
    }
    handleOption(option) {
        this.onChange(option);
        this.open.set(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonSelect, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiButtonSelect, isStandalone: true, selector: "button[tuiButtonSelect]", providers: [
            // TODO: Add checkmark once we properly implement new Select, then add to demo
            tuiProvide(TUI_DATA_LIST_HOST, TuiButtonSelect),
            tuiDropdownOptionsProvider({ align: 'right' }),
        ], usesInheritance: true, hostDirectives: [{ directive: i1.TuiDropdownDirective }, { directive: i1.TuiWithDropdownOpen }, { directive: i2.TuiWithTextfieldDropdown }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonSelect, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'button[tuiButtonSelect]',
                    providers: [
                        // TODO: Add checkmark once we properly implement new Select, then add to demo
                        tuiProvide(TUI_DATA_LIST_HOST, TuiButtonSelect),
                        tuiDropdownOptionsProvider({ align: 'right' }),
                    ],
                    hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiButtonSelect };
//# sourceMappingURL=taiga-ui-kit-directives-button-select.mjs.map
