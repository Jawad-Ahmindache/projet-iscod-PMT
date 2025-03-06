import { tuiCreateToken, tuiProvide, tuiWithStyles, tuiIsString, tuiDirectiveBinding } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, computed, signal, inject, afterNextRender, Directive, Input } from '@angular/core';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';

const TUI_APPEARANCE_DEFAULT_OPTIONS = {
    appearance: '',
};
const TUI_APPEARANCE_OPTIONS = tuiCreateToken(TUI_APPEARANCE_DEFAULT_OPTIONS);
function tuiAppearanceOptionsProvider(token) {
    return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}

class TuiAppearanceStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAppearanceStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiAppearanceStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-appearance" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiAppearance]{transition-property:color,background,opacity,box-shadow,border;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem}[tuiAppearance].tui-appearance-initializing{transition:none!important}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAppearanceStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-appearance',
                    }, styles: ["[tuiAppearance]{transition-property:color,background,opacity,box-shadow,border;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem}[tuiAppearance].tui-appearance-initializing{transition:none!important}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}\n"] }]
        }] });
class TuiAppearance {
    constructor() {
        this.el = tuiInjectElement();
        this.nothing = tuiWithStyles(TuiAppearanceStyles);
        this.modes = computed((mode = this.mode()) => !mode || tuiIsString(mode) ? mode : mode.join(' '));
        // TODO: refactor to signal inputs after Angular update
        this.appearance = signal(inject(TUI_APPEARANCE_OPTIONS).appearance);
        this.state = signal(null);
        this.focus = signal(null);
        this.mode = signal(null);
        afterNextRender(() => {
            this.el.classList.toggle('tui-appearance-initializing', 
            // Triggering reflow so there's no transition
            // eslint-disable-next-line
            !!this.el.offsetWidth && false);
        });
    }
    set tuiAppearance(appearance) {
        this.appearance.set(appearance);
    }
    set tuiAppearanceState(state) {
        this.state.set(state);
    }
    set tuiAppearanceFocus(focus) {
        this.focus.set(focus);
    }
    set tuiAppearanceMode(mode) {
        this.mode.set(mode);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAppearance, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiAppearance, isStandalone: true, selector: "[tuiAppearance]", inputs: { tuiAppearance: "tuiAppearance", tuiAppearanceState: "tuiAppearanceState", tuiAppearanceFocus: "tuiAppearanceFocus", tuiAppearanceMode: "tuiAppearanceMode" }, host: { attributes: { "tuiAppearance": "" }, properties: { "attr.data-appearance": "appearance()", "attr.data-state": "state()", "attr.data-focus": "focus()", "attr.data-mode": "modes()" }, classAttribute: "tui-appearance-initializing" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAppearance, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiAppearance]',
                    host: {
                        class: 'tui-appearance-initializing',
                        tuiAppearance: '',
                        '[attr.data-appearance]': 'appearance()',
                        '[attr.data-state]': 'state()',
                        '[attr.data-focus]': 'focus()',
                        '[attr.data-mode]': 'modes()',
                    },
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiAppearance: [{
                type: Input
            }], tuiAppearanceState: [{
                type: Input
            }], tuiAppearanceFocus: [{
                type: Input
            }], tuiAppearanceMode: [{
                type: Input
            }] } });

function tuiAppearance(value) {
    return tuiDirectiveBinding(TuiAppearance, 'appearance', value);
}
function tuiAppearanceState(value) {
    return tuiDirectiveBinding(TuiAppearance, 'state', value);
}
function tuiAppearanceFocus(value) {
    return tuiDirectiveBinding(TuiAppearance, 'focus', value);
}
function tuiAppearanceMode(value) {
    return tuiDirectiveBinding(TuiAppearance, 'mode', value);
}

class TuiWithAppearance {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithAppearance, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiWithAppearance, isStandalone: true, hostDirectives: [{ directive: TuiAppearance, inputs: ["tuiAppearance", "appearance", "tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithAppearance, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    hostDirectives: [
                        {
                            directive: TuiAppearance,
                            inputs: [
                                'tuiAppearance: appearance',
                                'tuiAppearanceState',
                                'tuiAppearanceFocus',
                                'tuiAppearanceMode',
                            ],
                        },
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_APPEARANCE_DEFAULT_OPTIONS, TUI_APPEARANCE_OPTIONS, TuiAppearance, TuiWithAppearance, tuiAppearance, tuiAppearanceFocus, tuiAppearanceMode, tuiAppearanceOptionsProvider, tuiAppearanceState };
//# sourceMappingURL=taiga-ui-core-directives-appearance.mjs.map
