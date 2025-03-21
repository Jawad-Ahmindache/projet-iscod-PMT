import * as i0 from '@angular/core';
import { inject, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Directive } from '@angular/core';
import { NgControl, RadioControlValueAccessor } from '@angular/forms';
import * as i2 from '@taiga-ui/cdk/directives/native-validator';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiCreateToken, tuiProvideOptions, tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i1 from '@taiga-ui/core/directives/appearance';
import { TuiAppearance } from '@taiga-ui/core/directives/appearance';
import { TUI_DEFAULT_IDENTITY_MATCHER } from '@taiga-ui/cdk/constants';

const TUI_RADIO_DEFAULT_OPTIONS = {
    size: 'm',
    appearance: ({ checked }) => (checked ? 'primary' : 'outline-grayscale'),
};
const TUI_RADIO_OPTIONS = tuiCreateToken(TUI_RADIO_DEFAULT_OPTIONS);
function tuiRadioOptionsProvider(options) {
    return tuiProvideOptions(TUI_RADIO_OPTIONS, options, TUI_RADIO_DEFAULT_OPTIONS);
}

class TuiRadioComponent {
    constructor() {
        this.appearance = inject(TuiAppearance);
        this.options = inject(TUI_RADIO_OPTIONS);
        this.el = tuiInjectElement();
        this.control = inject(NgControl, { self: true, optional: true });
        this.size = this.options.size;
    }
    ngDoCheck() {
        this.appearance.tuiAppearance = tuiIsString(this.options.appearance)
            ? this.options.appearance
            : this.options.appearance(this.el);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiRadioComponent, isStandalone: true, selector: "input[type=\"radio\"][tuiRadio]", inputs: { size: "size" }, host: { properties: { "disabled": "!control || control.disabled", "attr.data-size": "size", "class._readonly": "!control" } }, hostDirectives: [{ directive: i1.TuiAppearance, inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus"] }, { directive: i2.TuiNativeValidator }], ngImport: i0, template: '', isInline: true, styles: ["[tuiRadio]{--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:disabled._readonly{opacity:1}[tuiRadio]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";border-radius:100%;background:currentColor;transform:scale(0)}[tuiRadio]:checked:before{transform:scale(.5)}[tuiRadio][data-size=s]{--t-size: 1rem}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRadioComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'input[type="radio"][tuiRadio]', template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, hostDirectives: [
                        {
                            directive: TuiAppearance,
                            inputs: ['tuiAppearanceState', 'tuiAppearanceFocus'],
                        },
                        TuiNativeValidator,
                    ], host: {
                        '[disabled]': '!control || control.disabled',
                        '[attr.data-size]': 'size',
                        '[class._readonly]': '!control',
                    }, styles: ["[tuiRadio]{--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:disabled._readonly{opacity:1}[tuiRadio]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";border-radius:100%;background:currentColor;transform:scale(0)}[tuiRadio]:checked:before{transform:scale(.5)}[tuiRadio][data-size=s]{--t-size: 1rem}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }] } });

class TuiRadioDirective {
    constructor() {
        this.identityMatcher = TUI_DEFAULT_IDENTITY_MATCHER;
        const accessor = inject(RadioControlValueAccessor);
        const writeValue = accessor.writeValue.bind(accessor);
        accessor.writeValue = (value) => {
            if (this.identityMatcher(value, accessor.value)) {
                writeValue(accessor.value);
            }
            else {
                writeValue(value);
            }
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRadioDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiRadioDirective, isStandalone: true, selector: "input[type=\"radio\"][tuiRadio][identityMatcher]", inputs: { identityMatcher: "identityMatcher" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRadioDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[type="radio"][tuiRadio][identityMatcher]',
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { identityMatcher: [{
                type: Input
            }] } });

const TuiRadio = [TuiRadioComponent, TuiRadioDirective];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_RADIO_DEFAULT_OPTIONS, TUI_RADIO_OPTIONS, TuiRadio, TuiRadioComponent, TuiRadioDirective, tuiRadioOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-radio.mjs.map
