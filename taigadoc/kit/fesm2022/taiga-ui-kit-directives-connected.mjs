import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Directive } from '@angular/core';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';

class TuiConnectedStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConnectedStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiConnectedStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-connected-styles" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiConnected]{--t-image-size: 2.5rem;--t-connected-height: calc(100% - var(--t-image-size) - .5rem)}[tuiConnected][tuiCardLarge]{--t-connected-height: calc(100% - var(--t-image-size) - .25rem)}[tuiConnected] [tuiCell]:not(:last-of-type):after,[tuiConnected] [tuiStep]:not(:last-of-type):after{content:\"\";position:absolute;top:calc(var(--t-image-size) + .25rem);left:calc(var(--t-image-size) / 2);block-size:var(--t-connected-height);inline-size:1px;background-color:var(--tui-border-normal);background-clip:content-box;padding:inherit}[tuiConnected] [tuiStep]{--t-image-size: 2rem;--t-connected-height: calc(100% - var(--t-image-size) + .75rem)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConnectedStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-connected-styles',
                    }, styles: ["[tuiConnected]{--t-image-size: 2.5rem;--t-connected-height: calc(100% - var(--t-image-size) - .5rem)}[tuiConnected][tuiCardLarge]{--t-connected-height: calc(100% - var(--t-image-size) - .25rem)}[tuiConnected] [tuiCell]:not(:last-of-type):after,[tuiConnected] [tuiStep]:not(:last-of-type):after{content:\"\";position:absolute;top:calc(var(--t-image-size) + .25rem);left:calc(var(--t-image-size) / 2);block-size:var(--t-connected-height);inline-size:1px;background-color:var(--tui-border-normal);background-clip:content-box;padding:inherit}[tuiConnected] [tuiStep]{--t-image-size: 2rem;--t-connected-height: calc(100% - var(--t-image-size) + .75rem)}\n"] }]
        }] });
class TuiConnected {
    constructor() {
        this.nothing = tuiWithStyles(TuiConnectedStyles);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConnected, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiConnected, isStandalone: true, selector: "[tuiConnected]", host: { attributes: { "tuiConnected": "" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConnected, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiConnected]',
                    host: {
                        tuiConnected: '',
                    },
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiConnected };
//# sourceMappingURL=taiga-ui-kit-directives-connected.mjs.map
