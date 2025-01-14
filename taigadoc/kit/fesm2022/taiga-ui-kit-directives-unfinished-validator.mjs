import { TuiValidationError } from '@taiga-ui/cdk/classes';
import * as i0 from '@angular/core';
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';

function tuiCreateUnfinishedValidator(element, message) {
    return ({ value, }) => value === null && element.value !== ''
        ? { unfinished: new TuiValidationError(message) }
        : null;
}

class TuiUnfinishedValidator {
    constructor() {
        this.validate = tuiCreateUnfinishedValidator(tuiInjectElement(), tuiInjectElement().getAttribute('tuiUnfinishedValidator') || '');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiUnfinishedValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiUnfinishedValidator, isStandalone: true, selector: "input[tuiUnfinishedValidator]", providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiUnfinishedValidator, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[tuiUnfinishedValidator]',
                    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiUnfinishedValidator, tuiCreateUnfinishedValidator };
//# sourceMappingURL=taiga-ui-kit-directives-unfinished-validator.mjs.map
