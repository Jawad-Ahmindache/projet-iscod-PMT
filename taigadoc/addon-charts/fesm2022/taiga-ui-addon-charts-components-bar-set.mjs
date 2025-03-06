import { __decorate } from 'tslib';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TuiBar } from '@taiga-ui/addon-charts/components/bar';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';

const PERCENT = 100;
const EMPTY_ARRAY = [];
const FILLER_ARRAY = [1];
class TuiBarSet {
    constructor() {
        this.value = [];
        this.size = 'm';
        this.collapsed = false;
    }
    get computedValue() {
        return this.collapsed ? FILLER_ARRAY : this.value;
    }
    get computedSegments() {
        return this.collapsed ? this.value : EMPTY_ARRAY;
    }
    get computedSize() {
        return this.size || 'm';
    }
    getHeight(value) {
        return Math.abs((PERCENT * value) / this.getLargest(this.computedValue));
    }
    getLargest(value) {
        return value.some((a) => a > 0)
            ? value.reduce((a, b) => (a > b ? a : b), 0)
            : Math.abs(value.reduce((a, b) => (a < b ? a : b), 0));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBarSet, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiBarSet, isStandalone: true, selector: "tui-bar-set", inputs: { value: "value", size: "size", collapsed: "collapsed" }, ngImport: i0, template: "<ng-container *ngIf=\"size; else flexible\">\n    <ng-container\n        *ngFor=\"let item of computedValue; let index = index\"\n        [ngTemplateOutlet]=\"bar\"\n        [ngTemplateOutletContext]=\"{$implicit: item, index: index, flexible: false}\"\n    />\n</ng-container>\n<ng-template #flexible>\n    <div\n        *ngFor=\"let item of computedValue; let index = index\"\n        class=\"t-wrapper\"\n    >\n        <ng-container\n            [ngTemplateOutlet]=\"bar\"\n            [ngTemplateOutletContext]=\"{$implicit: item, index: index, flexible: true}\"\n        />\n    </div>\n</ng-template>\n<ng-template\n    #bar\n    let-flexible=\"flexible\"\n    let-index=\"index\"\n    let-item\n>\n    <tui-bar\n        automation-id=\"tui-bar-set__bar\"\n        class=\"t-bar\"\n        [class.t-bar_flexible]=\"flexible\"\n        [class.t-bar_negative]=\"item < 0\"\n        [size]=\"computedSize\"\n        [style.background]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n        [style.height.%]=\"getHeight(item)\"\n        [value]=\"computedSegments\"\n    />\n</ng-template>\n<span class=\"t-label\">\n    <ng-content />\n</span>\n", styles: [":host{position:relative;display:flex;block-size:100%;align-items:flex-end;justify-content:center}.t-wrapper{display:flex;flex:1;block-size:100%;align-items:flex-end}.t-wrapper:first-of-type{margin-left:25%}.t-wrapper:last-of-type{margin-right:25%}.t-bar{transform-origin:bottom center}.t-bar_negative{transform:rotate(180deg);opacity:var(--tui-disabled-opacity)}.t-bar.t-bar_flexible{max-inline-size:none;inline-size:75%;margin:0 auto}.t-label{position:absolute;top:-1.5rem;font:var(--tui-font-text-xs);color:var(--tui-text-secondary)}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TuiBar, selector: "tui-bar", inputs: ["value", "size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiBarSet.prototype, "getLargest", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBarSet, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-bar-set', imports: [NgForOf, NgIf, NgTemplateOutlet, TuiBar], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"size; else flexible\">\n    <ng-container\n        *ngFor=\"let item of computedValue; let index = index\"\n        [ngTemplateOutlet]=\"bar\"\n        [ngTemplateOutletContext]=\"{$implicit: item, index: index, flexible: false}\"\n    />\n</ng-container>\n<ng-template #flexible>\n    <div\n        *ngFor=\"let item of computedValue; let index = index\"\n        class=\"t-wrapper\"\n    >\n        <ng-container\n            [ngTemplateOutlet]=\"bar\"\n            [ngTemplateOutletContext]=\"{$implicit: item, index: index, flexible: true}\"\n        />\n    </div>\n</ng-template>\n<ng-template\n    #bar\n    let-flexible=\"flexible\"\n    let-index=\"index\"\n    let-item\n>\n    <tui-bar\n        automation-id=\"tui-bar-set__bar\"\n        class=\"t-bar\"\n        [class.t-bar_flexible]=\"flexible\"\n        [class.t-bar_negative]=\"item < 0\"\n        [size]=\"computedSize\"\n        [style.background]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n        [style.height.%]=\"getHeight(item)\"\n        [value]=\"computedSegments\"\n    />\n</ng-template>\n<span class=\"t-label\">\n    <ng-content />\n</span>\n", styles: [":host{position:relative;display:flex;block-size:100%;align-items:flex-end;justify-content:center}.t-wrapper{display:flex;flex:1;block-size:100%;align-items:flex-end}.t-wrapper:first-of-type{margin-left:25%}.t-wrapper:last-of-type{margin-right:25%}.t-bar{transform-origin:bottom center}.t-bar_negative{transform:rotate(180deg);opacity:var(--tui-disabled-opacity)}.t-bar.t-bar_flexible{max-inline-size:none;inline-size:75%;margin:0 auto}.t-label{position:absolute;top:-1.5rem;font:var(--tui-font-text-xs);color:var(--tui-text-secondary)}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], collapsed: [{
                type: Input
            }], getLargest: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiBarSet };
//# sourceMappingURL=taiga-ui-addon-charts-components-bar-set.mjs.map
