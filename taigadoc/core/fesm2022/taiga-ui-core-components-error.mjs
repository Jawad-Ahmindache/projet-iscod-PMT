import { NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiValidationError } from '@taiga-ui/cdk/classes';
import { tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiHeightCollapse, tuiFadeIn } from '@taiga-ui/core/animations';
import { TUI_ANIMATIONS_SPEED, TUI_DEFAULT_ERROR_MESSAGE } from '@taiga-ui/core/tokens';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';

class TuiError {
    constructor() {
        this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.error = null;
        this.visible = true;
        this.default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
    }
    set errorSetter(error) {
        this.error = tuiIsString(error) ? new TuiValidationError(error) : error;
    }
    onAnimation(visible) {
        this.visible = visible;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiError, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiError, isStandalone: true, selector: "tui-error", inputs: { errorSetter: ["error", "errorSetter"] }, host: { listeners: { "animationcancel.self": "onAnimation(false)", "animationstart.self": "onAnimation(true)" } }, ngImport: i0, template: "<div\n    *ngIf=\"error && visible\"\n    automation-id=\"tui-error__text\"\n    class=\"t-message-text\"\n    [@tuiFadeIn]=\"options\"\n    [@tuiHeightCollapse]=\"options\"\n>\n    <ng-container *polymorpheusOutlet=\"error.message || default() as text; context: error.context || {}\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: [":host{display:block;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text{white-space:pre-line}.t-message-text:before{content:\"\";line-height:1.5rem;vertical-align:bottom}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], animations: [tuiHeightCollapse, tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiError, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-error', imports: [NgIf, PolymorpheusOutlet], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiHeightCollapse, tuiFadeIn], host: {
                        '(animationcancel.self)': 'onAnimation(false)',
                        '(animationstart.self)': 'onAnimation(true)',
                    }, template: "<div\n    *ngIf=\"error && visible\"\n    automation-id=\"tui-error__text\"\n    class=\"t-message-text\"\n    [@tuiFadeIn]=\"options\"\n    [@tuiHeightCollapse]=\"options\"\n>\n    <ng-container *polymorpheusOutlet=\"error.message || default() as text; context: error.context || {}\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: [":host{display:block;font:var(--tui-font-text-s);color:var(--tui-text-negative);overflow-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text{white-space:pre-line}.t-message-text:before{content:\"\";line-height:1.5rem;vertical-align:bottom}\n"] }]
        }], propDecorators: { errorSetter: [{
                type: Input,
                args: ['error']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiError };
//# sourceMappingURL=taiga-ui-core-components-error.mjs.map
