import { __decorate } from 'tslib';
import { AsyncPipe, NgForOf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, ViewChildren, Input } from '@angular/core';
import { TuiBarSet } from '@taiga-ui/addon-charts/components/bar-set';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { TuiMapperPipe } from '@taiga-ui/cdk/pipes/mapper';
import { tuiInjectId } from '@taiga-ui/cdk/services';
import { tuiSum } from '@taiga-ui/cdk/utils/math';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i1 from '@taiga-ui/core/directives/hint';
import { TuiHintOptionsDirective, TuiHintHover, tuiHintOptionsProvider, TuiHint } from '@taiga-ui/core/directives/hint';

class TuiBarChart {
    constructor() {
        this.hintOptions = inject(TuiHintOptionsDirective, { optional: true });
        this.autoId = tuiInjectId();
        this.drivers = EMPTY_QUERY;
        this.value = [];
        this.max = NaN;
        this.size = 'm';
        this.collapsed = false;
        this.percentMapper = (set, collapsed, max) => (100 * (collapsed ? tuiSum(...set) : Math.max(...set))) / max;
    }
    get transposed() {
        return this.transpose(this.value);
    }
    get computedMax() {
        return this.max || this.getMax(this.value, this.collapsed);
    }
    get hintContent() {
        return this.hintOptions?.content || '';
    }
    getHintId(index) {
        return `${this.autoId}_${index}`;
    }
    transpose(value) {
        return value.reduce((result, next) => next.map((_, index) => [...(result[index] || []), next[index] || 0]), []);
    }
    getMax(values, collapsed) {
        return collapsed
            ? Math.max(
            // eslint-disable-next-line no-restricted-syntax
            ...values.reduce((result, next) => result.map((value, index) => value + (next[index] || 0))))
            : values.reduce((max, value) => Math.max(...value, max), 0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBarChart, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiBarChart, isStandalone: true, selector: "tui-bar-chart", inputs: { value: "value", max: "max", size: "size", collapsed: "collapsed" }, viewQueries: [{ propertyName: "drivers", predicate: TuiHintHover, descendants: true }], ngImport: i0, template: "<div\n    *ngFor=\"let set of transposed; let index = index\"\n    class=\"t-wrapper\"\n    [class.t-wrapper_hoverable]=\"!!hintContent\"\n    [class.t-wrapper_hovered]=\"drivers.get(index) | async\"\n    [tuiHint]=\"hintContent\"\n    [tuiHintContext]=\"{$implicit: index}\"\n    [tuiHintDescribe]=\"getHintId(index)\"\n    [tuiHintHost]=\"hintHost\"\n    (mouseenter.once)=\"(0)\"\n>\n    <div\n        class=\"t-container\"\n        [style.height.%]=\"set | tuiMapper: percentMapper : collapsed : computedMax\"\n    >\n        <div\n            #hintHost\n            class=\"t-host\"\n        ></div>\n        <tui-bar-set\n            class=\"t-set\"\n            [collapsed]=\"collapsed\"\n            [id]=\"getHintId(index)\"\n            [size]=\"size\"\n            [tabIndex]=\"hintContent ? 0 : -1\"\n            [value]=\"set\"\n        />\n    </div>\n</div>\n", styles: [":host{display:flex;flex:1;block-size:100%}.t-wrapper{transition-property:background-color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;flex:1;align-items:flex-end;justify-content:center;block-size:100%}.t-wrapper_hoverable{cursor:pointer}.t-wrapper_hoverable:hover,.t-wrapper_hoverable.t-wrapper_hovered{background-color:#0000000d}.t-container{flex:1}.t-host{position:absolute;left:50%;right:50%}.t-set{border-radius:var(--tui-radius-m);pointer-events:none;outline:none}.t-set:focus{box-shadow:0 0 0 2px var(--tui-border-focus)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: TuiBarSet, selector: "tui-bar-set", inputs: ["value", "size", "collapsed"] }, { kind: "directive", type: i1.TuiHintDirective, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: ["tuiHintContext", "tuiHintAppearance", "tuiHint"] }, { kind: "directive", type: i1.TuiHintDescribe, selector: "[tuiHintDescribe]", inputs: ["tuiHintDescribe"] }, { kind: "directive", type: i1.TuiHintHost, selector: "[tuiHint][tuiHintHost]", inputs: ["tuiHintHost"] }, { kind: "pipe", type: TuiMapperPipe, name: "tuiMapper" }], viewProviders: [tuiHintOptionsProvider({ direction: 'top' })], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiBarChart.prototype, "transpose", null);
__decorate([
    tuiPure
], TuiBarChart.prototype, "getMax", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBarChart, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-bar-chart', imports: [AsyncPipe, NgForOf, TuiBarSet, TuiHint, TuiMapperPipe], changeDetection: ChangeDetectionStrategy.OnPush, viewProviders: [tuiHintOptionsProvider({ direction: 'top' })], template: "<div\n    *ngFor=\"let set of transposed; let index = index\"\n    class=\"t-wrapper\"\n    [class.t-wrapper_hoverable]=\"!!hintContent\"\n    [class.t-wrapper_hovered]=\"drivers.get(index) | async\"\n    [tuiHint]=\"hintContent\"\n    [tuiHintContext]=\"{$implicit: index}\"\n    [tuiHintDescribe]=\"getHintId(index)\"\n    [tuiHintHost]=\"hintHost\"\n    (mouseenter.once)=\"(0)\"\n>\n    <div\n        class=\"t-container\"\n        [style.height.%]=\"set | tuiMapper: percentMapper : collapsed : computedMax\"\n    >\n        <div\n            #hintHost\n            class=\"t-host\"\n        ></div>\n        <tui-bar-set\n            class=\"t-set\"\n            [collapsed]=\"collapsed\"\n            [id]=\"getHintId(index)\"\n            [size]=\"size\"\n            [tabIndex]=\"hintContent ? 0 : -1\"\n            [value]=\"set\"\n        />\n    </div>\n</div>\n", styles: [":host{display:flex;flex:1;block-size:100%}.t-wrapper{transition-property:background-color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;flex:1;align-items:flex-end;justify-content:center;block-size:100%}.t-wrapper_hoverable{cursor:pointer}.t-wrapper_hoverable:hover,.t-wrapper_hoverable.t-wrapper_hovered{background-color:#0000000d}.t-container{flex:1}.t-host{position:absolute;left:50%;right:50%}.t-set{border-radius:var(--tui-radius-m);pointer-events:none;outline:none}.t-set:focus{box-shadow:0 0 0 2px var(--tui-border-focus)}\n"] }]
        }], propDecorators: { drivers: [{
                type: ViewChildren,
                args: [TuiHintHover]
            }], value: [{
                type: Input
            }], max: [{
                type: Input
            }], size: [{
                type: Input
            }], collapsed: [{
                type: Input
            }], transpose: [], getMax: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiBarChart };
//# sourceMappingURL=taiga-ui-addon-charts-components-bar-chart.mjs.map
