import * as i0 from '@angular/core';
import { inject, Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i2 from '@taiga-ui/cdk/directives/native-validator';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiCreateToken, tuiProvideOptions, tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i1 from '@taiga-ui/core/directives/appearance';
import { TuiAppearance } from '@taiga-ui/core/directives/appearance';
import { tuiInjectIconResolver } from '@taiga-ui/core/tokens';

const TUI_SWITCH_DEFAULT_OPTIONS = {
    showIcons: true,
    size: 'm',
    icon: '@tui.check',
    appearance: (el) => (el.checked ? 'primary' : 'secondary'),
};
const TUI_SWITCH_OPTIONS = tuiCreateToken(TUI_SWITCH_DEFAULT_OPTIONS);
function tuiSwitchOptionsProvider(options) {
    return tuiProvideOptions(TUI_SWITCH_OPTIONS, options, TUI_SWITCH_DEFAULT_OPTIONS);
}

class TuiSwitch {
    constructor() {
        this.appearance = inject(TuiAppearance);
        this.resolver = tuiInjectIconResolver();
        this.options = inject(TUI_SWITCH_OPTIONS);
        this.el = tuiInjectElement();
        this.control = inject(NgControl, { self: true, optional: true });
        this.size = this.options.size;
        this.showIcons = this.options.showIcons;
    }
    ngDoCheck() {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }
    get icon() {
        const { options, resolver, size } = this;
        const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);
        return this.showIcons && icon ? `url(${resolver(icon)})` : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSwitch, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSwitch, isStandalone: true, selector: "input[type=\"checkbox\"][tuiSwitch]", inputs: { size: "size", showIcons: "showIcons" }, host: { attributes: { "role": "switch" }, properties: { "disabled": "!control || control.disabled", "attr.data-size": "size", "class._readonly": "!control", "style.--t-checked-icon": "icon" } }, hostDirectives: [{ directive: i1.TuiAppearance, inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus"] }, { directive: i2.TuiNativeValidator }], ngImport: i0, template: '', isInline: true, styles: ["[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSwitch, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'input[type="checkbox"][tuiSwitch]', template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, hostDirectives: [
                        {
                            directive: TuiAppearance,
                            inputs: ['tuiAppearanceState', 'tuiAppearanceFocus'],
                        },
                        TuiNativeValidator,
                    ], host: {
                        role: 'switch',
                        '[disabled]': '!control || control.disabled',
                        '[attr.data-size]': 'size',
                        '[class._readonly]': '!control',
                        '[style.--t-checked-icon]': 'icon',
                    }, styles: ["[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem var(--tui-background-base);outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem var(--tui-background-base);outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], showIcons: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_SWITCH_DEFAULT_OPTIONS, TUI_SWITCH_OPTIONS, TuiSwitch, tuiSwitchOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-switch.mjs.map
