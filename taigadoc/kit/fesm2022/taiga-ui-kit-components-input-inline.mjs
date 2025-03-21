import { AsyncPipe, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TuiLet } from '@taiga-ui/cdk/directives/let';
import { tuiControlValue } from '@taiga-ui/cdk/observables';
import { defer } from 'rxjs';

class TuiInputInline {
    constructor() {
        this.value$ = defer(() => tuiControlValue(this.control));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputInline, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputInline, isStandalone: true, selector: "tui-input-inline", queries: [{ propertyName: "control", first: true, predicate: NgControl, descendants: true }], ngImport: i0, template: "<ng-container *tuiLet=\"value$ | async as value\">\n    <span\n        class=\"t-before\"\n        [textContent]=\"value\"\n    ></span>\n\n    <span\n        *ngIf=\"!value\"\n        automation-id=\"tui-input-inline__placeholder\"\n        class=\"t-placeholder\"\n    >\n        <ng-content />\n    </span>\n</ng-container>\n<ng-content select=\"input\" />\n", styles: ["tui-input-inline{position:relative;display:inline-block;white-space:nowrap;box-sizing:border-box}tui-input-inline>.t-before{padding-right:.02em;margin-left:1px;white-space:pre;visibility:hidden}tui-input-inline>.t-placeholder{display:inline-block;min-inline-size:1px;margin-left:-1px}tui-input-inline>input{position:absolute;top:0;left:0;background-color:transparent;padding:inherit;font:inherit;color:inherit;box-sizing:border-box;inline-size:100%;block-size:100%;border-width:0;text-align:inherit;letter-spacing:inherit;text-indent:inherit;text-transform:inherit;outline:none}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiLet, selector: "[tuiLet]", inputs: ["tuiLet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputInline, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-input-inline', imports: [AsyncPipe, NgIf, TuiLet], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *tuiLet=\"value$ | async as value\">\n    <span\n        class=\"t-before\"\n        [textContent]=\"value\"\n    ></span>\n\n    <span\n        *ngIf=\"!value\"\n        automation-id=\"tui-input-inline__placeholder\"\n        class=\"t-placeholder\"\n    >\n        <ng-content />\n    </span>\n</ng-container>\n<ng-content select=\"input\" />\n", styles: ["tui-input-inline{position:relative;display:inline-block;white-space:nowrap;box-sizing:border-box}tui-input-inline>.t-before{padding-right:.02em;margin-left:1px;white-space:pre;visibility:hidden}tui-input-inline>.t-placeholder{display:inline-block;min-inline-size:1px;margin-left:-1px}tui-input-inline>input{position:absolute;top:0;left:0;background-color:transparent;padding:inherit;font:inherit;color:inherit;box-sizing:border-box;inline-size:100%;block-size:100%;border-width:0;text-align:inherit;letter-spacing:inherit;text-indent:inherit;text-transform:inherit;outline:none}\n"] }]
        }], propDecorators: { control: [{
                type: ContentChild,
                args: [NgControl]
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiInputInline };
//# sourceMappingURL=taiga-ui-kit-components-input-inline.mjs.map
