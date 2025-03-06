import * as i0 from '@angular/core';
import { signal, Component, ChangeDetectionStrategy, Input, Output, ViewChildren } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { tuiTypedFromEvent, tuiZonefree } from '@taiga-ui/cdk/observables';
import { merge, map, ReplaySubject, timer, switchMap, startWith, tap } from 'rxjs';

const ARC = 0.76; // 3/4 with 1% safety offset
const SIZE = { m: 9, l: 11, xl: 16 };
const WIDTH = { m: 0.25, l: 0.375, xl: 0.5625 };
const GAP = { m: 0.125, l: 0.1875, xl: 0.25 };
function arcsToIndex(arcs) {
    return arcs.map(({ nativeElement }, index) => merge(tuiTypedFromEvent(nativeElement, 'mouseenter').pipe(map(() => index)), tuiTypedFromEvent(nativeElement, 'mouseleave').pipe(map(() => NaN))));
}
class TuiArcChart {
    constructor() {
        this.arcs$ = new ReplaySubject(1);
        this.initialized = signal(false);
        this.$ = timer(0)
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => this.initialized.set(true));
        this.value = [];
        this.size = 'm';
        this.max = 100;
        this.minLabel = '0%';
        this.maxLabel = '100%';
        this.activeItemIndex = NaN;
        this.activeItemIndexChange = this.arcs$.pipe(switchMap((arcs) => arcs.changes.pipe(startWith(null), switchMap(() => merge(...arcsToIndex(arcs))))), tap((index) => {
            this.activeItemIndex = index;
        }));
    }
    set arcs(arcs) {
        this.arcs$.next(arcs);
    }
    get width() {
        return SIZE[this.size];
    }
    get strokeWidth() {
        return WIDTH[this.size];
    }
    isInactive(index) {
        return !Number.isNaN(this.activeItemIndex) && index !== this.activeItemIndex;
    }
    getInset(index) {
        return this.strokeWidth / 2 + index * (this.strokeWidth + GAP[this.size]);
    }
    getDiameter(index) {
        return SIZE[this.size] - 2 * this.getInset(index);
    }
    getLength(index) {
        return Math.PI * this.getDiameter(index) * ARC;
    }
    getOffset(index) {
        return (this.getLength(index) * (1 - Math.min((this.value[index] || 0) / this.max, 1)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiArcChart, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiArcChart, isStandalone: true, selector: "tui-arc-chart", inputs: { value: "value", size: "size", max: "max", minLabel: "minLabel", maxLabel: "maxLabel", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, host: { properties: { "attr.data-size": "size", "style.width.rem": "width", "style.height.rem": "width", "style.strokeWidth.rem": "strokeWidth" } }, viewQueries: [{ propertyName: "arcs", predicate: ["arc"], descendants: true }], ngImport: i0, template: "<svg\n    *tuiRepeatTimes=\"let index of value.length\"\n    focusable=\"false\"\n    viewBox=\"-100 -100 200 200\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"t-svg\"\n    [style.height.em]=\"getDiameter(index)\"\n    [style.left.em]=\"getInset(index)\"\n    [style.top.em]=\"getInset(index)\"\n    [style.width.em]=\"getDiameter(index)\"\n>\n    <path\n        d=\"M -70 70 A 100 100 0 1 1 70 70\"\n        vector-effect=\"non-scaling-stroke\"\n    />\n    <path\n        #arc\n        d=\"M -70 70 A 100 100 0 1 1 70 70\"\n        vector-effect=\"non-scaling-stroke\"\n        class=\"t-value\"\n        [class.t-value_inactive]=\"isInactive(index)\"\n        [style.stroke]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n        [style.strokeDasharray.em]=\"getLength(index)\"\n        [style.strokeDashoffset.em]=\"initialized() ? getOffset(index) : getLength(index)\"\n    />\n</svg>\n<div class=\"t-content\">\n    <div class=\"t-wrapper\">\n        <ng-content />\n    </div>\n</div>\n<div class=\"t-percent\">\n    <span>{{ minLabel }}</span>\n    <span>{{ maxLabel }}</span>\n</div>\n", styles: [":host{position:relative;display:block;flex-shrink:0}.t-svg{position:absolute;top:0;left:0;bottom:0;right:0;overflow:visible;fill:none;stroke:currentColor;stroke-linecap:round;color:var(--tui-background-neutral-1);font-size:1rem;pointer-events:none}.t-value{pointer-events:auto;transition:stroke-dashoffset var(--tui-duration) ease-in-out,opacity var(--tui-duration) ease-in-out .1s}.t-value_inactive{transition-property:stroke-dashoffset,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:.16}.t-content{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;justify-content:center;align-items:center;text-align:center;color:var(--tui-text-secondary);font:var(--tui-font-text-xs);pointer-events:none}:host[data-size=xl] .t-content{font:var(--tui-font-text-m)}.t-wrapper{pointer-events:auto}.t-wrapper:first-line{color:var(--tui-text-primary)}:host[data-size=m] .t-wrapper:first-line{font:var(--tui-font-text-s);font-weight:700}:host[data-size=l] .t-wrapper:first-line{font:var(--tui-font-text-m);font-weight:700}:host[data-size=xl] .t-wrapper:first-line{font:var(--tui-font-heading-5)}.t-percent{position:absolute;left:25%;bottom:11%;display:flex;inline-size:50%;justify-content:space-between;font:var(--tui-font-text-xs);color:var(--tui-text-secondary)}:host[data-size=xl] .t-percent{font:var(--tui-font-text-m)}\n"], dependencies: [{ kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiArcChart, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-arc-chart', imports: [TuiRepeatTimes], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[attr.data-size]': 'size',
                        '[style.width.rem]': 'width',
                        '[style.height.rem]': 'width',
                        '[style.strokeWidth.rem]': 'strokeWidth',
                    }, template: "<svg\n    *tuiRepeatTimes=\"let index of value.length\"\n    focusable=\"false\"\n    viewBox=\"-100 -100 200 200\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"t-svg\"\n    [style.height.em]=\"getDiameter(index)\"\n    [style.left.em]=\"getInset(index)\"\n    [style.top.em]=\"getInset(index)\"\n    [style.width.em]=\"getDiameter(index)\"\n>\n    <path\n        d=\"M -70 70 A 100 100 0 1 1 70 70\"\n        vector-effect=\"non-scaling-stroke\"\n    />\n    <path\n        #arc\n        d=\"M -70 70 A 100 100 0 1 1 70 70\"\n        vector-effect=\"non-scaling-stroke\"\n        class=\"t-value\"\n        [class.t-value_inactive]=\"isInactive(index)\"\n        [style.stroke]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n        [style.strokeDasharray.em]=\"getLength(index)\"\n        [style.strokeDashoffset.em]=\"initialized() ? getOffset(index) : getLength(index)\"\n    />\n</svg>\n<div class=\"t-content\">\n    <div class=\"t-wrapper\">\n        <ng-content />\n    </div>\n</div>\n<div class=\"t-percent\">\n    <span>{{ minLabel }}</span>\n    <span>{{ maxLabel }}</span>\n</div>\n", styles: [":host{position:relative;display:block;flex-shrink:0}.t-svg{position:absolute;top:0;left:0;bottom:0;right:0;overflow:visible;fill:none;stroke:currentColor;stroke-linecap:round;color:var(--tui-background-neutral-1);font-size:1rem;pointer-events:none}.t-value{pointer-events:auto;transition:stroke-dashoffset var(--tui-duration) ease-in-out,opacity var(--tui-duration) ease-in-out .1s}.t-value_inactive{transition-property:stroke-dashoffset,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:.16}.t-content{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;justify-content:center;align-items:center;text-align:center;color:var(--tui-text-secondary);font:var(--tui-font-text-xs);pointer-events:none}:host[data-size=xl] .t-content{font:var(--tui-font-text-m)}.t-wrapper{pointer-events:auto}.t-wrapper:first-line{color:var(--tui-text-primary)}:host[data-size=m] .t-wrapper:first-line{font:var(--tui-font-text-s);font-weight:700}:host[data-size=l] .t-wrapper:first-line{font:var(--tui-font-text-m);font-weight:700}:host[data-size=xl] .t-wrapper:first-line{font:var(--tui-font-heading-5)}.t-percent{position:absolute;left:25%;bottom:11%;display:flex;inline-size:50%;justify-content:space-between;font:var(--tui-font-text-xs);color:var(--tui-text-secondary)}:host[data-size=xl] .t-percent{font:var(--tui-font-text-m)}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], max: [{
                type: Input
            }], minLabel: [{
                type: Input
            }], maxLabel: [{
                type: Input
            }], activeItemIndex: [{
                type: Input
            }], activeItemIndexChange: [{
                type: Output
            }], arcs: [{
                type: ViewChildren,
                args: ['arc']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiArcChart };
//# sourceMappingURL=taiga-ui-addon-charts-components-arc-chart.mjs.map
