import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, Directive, Input } from '@angular/core';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiInjectIconResolver, TUI_ICON_START, TUI_ICON_END } from '@taiga-ui/core/tokens';

class TuiIconsStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIconsStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiIconsStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-icons" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:\"\";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIconsStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-icons',
                    }, styles: ["[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:\"\";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n"] }]
        }] });
class TuiIcons {
    constructor() {
        this.nothing = tuiWithStyles(TuiIconsStyles);
        this.resolver = tuiInjectIconResolver();
        this.iconStart = inject(TUI_ICON_START, { self: true, optional: true }) || '';
        this.iconEnd = inject(TUI_ICON_END, { self: true, optional: true }) || '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIcons, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiIcons, isStandalone: true, inputs: { iconStart: "iconStart", iconEnd: "iconEnd" }, host: { attributes: { "tuiIcons": "" }, properties: { "style.--t-icon-start": "iconStart ? \"url(\" + resolver(iconStart) + \")\" : null", "style.--t-icon-end": "iconEnd ? \"url(\" + resolver(iconEnd) + \")\" : null" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIcons, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    host: {
                        tuiIcons: '',
                        '[style.--t-icon-start]': 'iconStart ? "url(" + resolver(iconStart) + ")" : null',
                        '[style.--t-icon-end]': 'iconEnd ? "url(" + resolver(iconEnd) + ")" : null',
                    },
                }]
        }], propDecorators: { iconStart: [{
                type: Input
            }], iconEnd: [{
                type: Input
            }] } });

class TuiWithIcons {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithIcons, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiWithIcons, isStandalone: true, hostDirectives: [{ directive: TuiIcons, inputs: ["iconStart", "iconStart", "iconEnd", "iconEnd"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithIcons, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    hostDirectives: [
                        {
                            directive: TuiIcons,
                            inputs: ['iconStart', 'iconEnd'],
                        },
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiIcons, TuiWithIcons };
//# sourceMappingURL=taiga-ui-core-directives-icons.mjs.map
