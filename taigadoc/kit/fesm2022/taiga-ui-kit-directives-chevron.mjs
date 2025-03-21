import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, effect, signal, Directive, Input } from '@angular/core';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiCreateToken, tuiWithStyles, tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiDropdownDirective } from '@taiga-ui/core/directives/dropdown';
import { TUI_ICON_END } from '@taiga-ui/core/tokens';

const TUI_CHEVRON = tuiCreateToken('@tui.chevron-down');
class TuiChevronStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChevronStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiChevronStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-chevron" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChevronStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'tui-chevron' }, styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"] }]
        }] });
class TuiChevron {
    constructor() {
        this.el = tuiInjectElement();
        this.dropdown = inject(TuiDropdownDirective, { optional: true });
        this.nothing = tuiWithStyles(TuiChevronStyles);
        this.toggle = effect(() => this.el.classList.toggle('_chevron-rotated', this.chevron() || (this.chevron() === '' && !!this.dropdown?.ref())));
        // TODO: refactor to signal inputs after Angular update
        this.chevron = signal('');
    }
    set tuiChevron(chevron) {
        this.chevron.set(chevron);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChevron, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiChevron, isStandalone: true, selector: "[tuiChevron]", inputs: { tuiChevron: "tuiChevron" }, host: { attributes: { "tuiChevron": "" } }, providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChevron, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiChevron]',
                    providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
                    host: { tuiChevron: '' },
                }]
        }], propDecorators: { tuiChevron: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_CHEVRON, TuiChevron };
//# sourceMappingURL=taiga-ui-kit-directives-chevron.mjs.map
