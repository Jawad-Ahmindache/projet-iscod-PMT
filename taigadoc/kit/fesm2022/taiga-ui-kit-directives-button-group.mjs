import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Directive } from '@angular/core';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';

class TuiButtonGroupStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonGroupStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiButtonGroupStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-button-group-styles" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiButtonGroup]{display:flex;border-radius:var(--tui-radius-xl);justify-content:center;overflow:hidden}[tuiButtonGroup]>button,[tuiButtonGroup]>a{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;border:none;outline:none;background:transparent;align-items:center;flex:1;flex-direction:column;padding:1.125rem .25rem;gap:.5rem;font:var(--tui-font-text-ui-s);max-inline-size:calc(50% - 1.75rem);cursor:pointer;color:var(--tui-text-action);text-align:center;text-decoration:none;clip-path:inset(0)}[tuiButtonGroup]>button:first-child,[tuiButtonGroup]>a:first-child{clip-path:inset(0 0 0 -10rem)}[tuiButtonGroup]>button:last-child,[tuiButtonGroup]>a:last-child{clip-path:inset(0 -10rem 0 0)}[tuiButtonGroup]>button:active,[tuiButtonGroup]>a:active{background:var(--tui-background-neutral-1)}[tuiButtonGroup]>button:before,[tuiButtonGroup]>a:before,[tuiButtonGroup]>button:after,[tuiButtonGroup]>a:after{position:absolute;top:0;background:inherit;inline-size:1.75rem;block-size:100%}[tuiButtonGroup]>button:first-child:before,[tuiButtonGroup]>a:first-child:before{content:\"\";left:-1.75rem}[tuiButtonGroup]>button:last-child:after,[tuiButtonGroup]>a:last-child:after{content:\"\";right:-1.75rem}[tuiButtonGroup]>button tui-icon,[tuiButtonGroup]>a tui-icon{font-size:1.75rem}[tuiButtonGroup]:has(button:only-child){border-radius:1rem}[tuiButtonGroup]>button:only-child,[tuiButtonGroup]>a:only-child{inline-size:100%;flex-direction:row;font:var(--tui-font-text-ui-l);max-inline-size:100%;justify-content:center}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonGroupStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-button-group-styles',
                    }, styles: ["[tuiButtonGroup]{display:flex;border-radius:var(--tui-radius-xl);justify-content:center;overflow:hidden}[tuiButtonGroup]>button,[tuiButtonGroup]>a{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;border:none;outline:none;background:transparent;align-items:center;flex:1;flex-direction:column;padding:1.125rem .25rem;gap:.5rem;font:var(--tui-font-text-ui-s);max-inline-size:calc(50% - 1.75rem);cursor:pointer;color:var(--tui-text-action);text-align:center;text-decoration:none;clip-path:inset(0)}[tuiButtonGroup]>button:first-child,[tuiButtonGroup]>a:first-child{clip-path:inset(0 0 0 -10rem)}[tuiButtonGroup]>button:last-child,[tuiButtonGroup]>a:last-child{clip-path:inset(0 -10rem 0 0)}[tuiButtonGroup]>button:active,[tuiButtonGroup]>a:active{background:var(--tui-background-neutral-1)}[tuiButtonGroup]>button:before,[tuiButtonGroup]>a:before,[tuiButtonGroup]>button:after,[tuiButtonGroup]>a:after{position:absolute;top:0;background:inherit;inline-size:1.75rem;block-size:100%}[tuiButtonGroup]>button:first-child:before,[tuiButtonGroup]>a:first-child:before{content:\"\";left:-1.75rem}[tuiButtonGroup]>button:last-child:after,[tuiButtonGroup]>a:last-child:after{content:\"\";right:-1.75rem}[tuiButtonGroup]>button tui-icon,[tuiButtonGroup]>a tui-icon{font-size:1.75rem}[tuiButtonGroup]:has(button:only-child){border-radius:1rem}[tuiButtonGroup]>button:only-child,[tuiButtonGroup]>a:only-child{inline-size:100%;flex-direction:row;font:var(--tui-font-text-ui-l);max-inline-size:100%;justify-content:center}\n"] }]
        }] });
class TuiButtonGroup {
    constructor() {
        this.nothing = tuiWithStyles(TuiButtonGroupStyles);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiButtonGroup, isStandalone: true, selector: "[tuiButtonGroup]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonGroup, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiButtonGroup]',
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiButtonGroup };
//# sourceMappingURL=taiga-ui-kit-directives-button-group.mjs.map
