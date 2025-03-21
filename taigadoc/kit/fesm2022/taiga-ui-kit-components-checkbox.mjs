import * as i0 from '@angular/core';
import { inject, DestroyRef, Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl, NgModel } from '@angular/forms';
import * as i2 from '@taiga-ui/cdk/directives/native-validator';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiControlValue } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiCreateToken, tuiProvideOptions, tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i1 from '@taiga-ui/core/directives/appearance';
import { TuiAppearance } from '@taiga-ui/core/directives/appearance';
import { tuiInjectIconResolver } from '@taiga-ui/core/tokens';

const TUI_CHECKBOX_DEFAULT_OPTIONS = {
    size: 'm',
    appearance: (el) => el.checked || el.indeterminate ? 'primary' : 'outline-grayscale',
    icons: {
        checked: '@tui.check',
        indeterminate: '@tui.minus',
    },
};
const TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);
function tuiCheckboxOptionsProvider(options) {
    return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}

class TuiCheckbox {
    constructor() {
        this.appearance = inject(TuiAppearance);
        this.options = inject(TUI_CHECKBOX_OPTIONS);
        this.resolver = tuiInjectIconResolver();
        this.destroyRef = inject(DestroyRef);
        this.el = tuiInjectElement();
        this.size = this.options.size;
        this.control = inject(NgControl, {
            optional: true,
            self: true,
        });
    }
    ngOnInit() {
        if (!this.control?.valueChanges) {
            return;
        }
        tuiControlValue(this.control)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
            // https://github.com/angular/angular/issues/14988
            const fix = this.control instanceof NgModel && value === null
                ? this.control.model
                : value;
            this.el.indeterminate = fix === null;
        });
    }
    ngDoCheck() {
        this.appearance.tuiAppearance = tuiIsString(this.options.appearance)
            ? this.options.appearance
            : this.options.appearance(this.el);
    }
    getIcon(state) {
        const option = this.options.icons[state];
        const icon = tuiIsString(option) ? option : option(this.size);
        return icon && `url(${this.resolver(icon)})`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCheckbox, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiCheckbox, isStandalone: true, selector: "input[type=\"checkbox\"][tuiCheckbox]", inputs: { size: "size" }, host: { properties: { "disabled": "!control || control.disabled", "attr.data-size": "size", "class._readonly": "!control", "style.--t-checked-icon": "getIcon(\"checked\")", "style.--t-indeterminate-icon": "getIcon(\"indeterminate\")" } }, hostDirectives: [{ directive: i1.TuiAppearance, inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus"] }, { directive: i2.TuiNativeValidator }], ngImport: i0, template: '', isInline: true, styles: ["[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly{opacity:1}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCheckbox, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'input[type="checkbox"][tuiCheckbox]', template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, hostDirectives: [
                        {
                            directive: TuiAppearance,
                            inputs: ['tuiAppearanceState', 'tuiAppearanceFocus'],
                        },
                        TuiNativeValidator,
                    ], host: {
                        '[disabled]': '!control || control.disabled',
                        '[attr.data-size]': 'size',
                        '[class._readonly]': '!control',
                        '[style.--t-checked-icon]': 'getIcon("checked")',
                        '[style.--t-indeterminate-icon]': 'getIcon("indeterminate")',
                    }, styles: ["[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly{opacity:1}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_CHECKBOX_DEFAULT_OPTIONS, TUI_CHECKBOX_OPTIONS, TuiCheckbox, tuiCheckboxOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-checkbox.mjs.map
