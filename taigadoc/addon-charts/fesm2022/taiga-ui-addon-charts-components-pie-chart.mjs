import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { inject, Directive, Input, EventEmitter, Component, ChangeDetectionStrategy, Output } from '@angular/core';
import { TuiHovered } from '@taiga-ui/cdk/directives/hovered';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { tuiInjectId } from '@taiga-ui/cdk/services';
import { tuiClamp, tuiSum } from '@taiga-ui/cdk/utils/math';
import { tuiEaseInOutQuad, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i1 from '@taiga-ui/core/directives/hint';
import { TuiHintOptionsDirective, tuiHintOptionsProvider, TuiHint } from '@taiga-ui/core/directives/hint';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WA_PERFORMANCE, WA_ANIMATION_FRAME } from '@ng-web-apis/common';
import { tuiDescribeSector } from '@taiga-ui/addon-charts/utils';
import { tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { BehaviorSubject, pairwise, switchMap, map, takeWhile } from 'rxjs';

class TuiPieChartDirective {
    constructor() {
        this.sector$ = new BehaviorSubject([0, 0]);
        this.el = tuiInjectElement();
        this.performance = inject(WA_PERFORMANCE);
        this.animationFrame$ = inject(WA_ANIMATION_FRAME);
        this.speed = inject(TUI_ANIMATIONS_SPEED);
        this.$ = this.sector$
            .pipe(pairwise(), switchMap(([prev, cur]) => {
            const now = this.performance.now();
            const startDelta = cur[0] - prev[0];
            const endDelta = cur[1] - prev[1];
            return this.animationFrame$.pipe(map((timestamp) => tuiEaseInOutQuad(tuiClamp((timestamp - now) / tuiGetDuration(this.speed), 0, 1))), takeWhile((progress) => progress < 1, true), map((progress) => [
                prev[0] + startDelta * progress,
                cur[1] > 359 ? cur[1] : prev[1] + endDelta * progress,
            ]));
        }), tuiZonefree(), takeUntilDestroyed())
            .subscribe(([start, end]) => this.el.setAttribute('d', tuiDescribeSector(start, end)));
    }
    set tuiPieChart(sector) {
        this.sector$.next(sector);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPieChartDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPieChartDirective, isStandalone: true, selector: "path[tuiPieChart]", inputs: { tuiPieChart: "tuiPieChart" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPieChartDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'path[tuiPieChart]',
                }]
        }], propDecorators: { tuiPieChart: [{
                type: Input
            }] } });

const RADII = {
    xs: '50',
    s: '50',
    m: '77.8',
    l: '81.9',
    xl: '81.3',
};
const TRANSFORM = {
    xs: 1.15,
    s: 1.25,
    m: 1.11,
    l: 1.09,
    xl: 1.08,
};
class TuiPieChart {
    constructor() {
        this.hintOptions = inject(TuiHintOptionsDirective, { optional: true });
        this.autoId = tuiInjectId();
        this.value = [];
        this.size = 'm';
        this.masked = false;
        this.activeItemIndex = NaN;
        this.activeItemIndexChange = new EventEmitter();
        if (this.hintOptions) {
            this.hintOptions.showDelay = 0;
            this.hintOptions.hideDelay = 0;
        }
    }
    get empty() {
        return !this.getSum(this.value);
    }
    get hintContent() {
        return this.hintOptions?.content || '';
    }
    get maskId() {
        return `tui-ring-chart-${this.autoId}`;
    }
    get mask() {
        return this.masked ? `url(#${this.maskId})` : null;
    }
    get radius() {
        return RADII[this.size];
    }
    get segments() {
        return this.getSegments(this.value);
    }
    getTransform(index) {
        const transform = this.masked
            ? `scale(${TRANSFORM[this.size]})`
            : `scale(${TRANSFORM.xs})`;
        return index === this.activeItemIndex ? transform : null;
    }
    onHovered(hovered, index) {
        this.updateActiveItemIndex(hovered ? index : NaN);
    }
    getSum(value) {
        return tuiSum(...value);
    }
    getSegments(value) {
        return value
            .map((initial, i, array) => array.reduce((sum, current, j) => (j < i ? this.getDeg(current) + sum : sum), this.getDeg(initial)))
            .map((angle, index, array) => [
            array[index - 1] || 0,
            Math.min(angle, 359.9999),
        ]);
    }
    getDeg(value) {
        return 360 * (value / this.getSum(this.value)) || 0;
    }
    updateActiveItemIndex(index) {
        if (index === this.activeItemIndex) {
            return;
        }
        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPieChart, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPieChart, isStandalone: true, selector: "tui-pie-chart", inputs: { value: "value", size: "size", masked: "masked", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, host: { properties: { "attr.data-size": "size", "class._empty": "empty" } }, ngImport: i0, template: "<svg\n    focusable=\"false\"\n    height=\"100%\"\n    viewBox=\"-100 -100 200 200\"\n    width=\"100%\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"t-svg\"\n>\n    <defs>\n        <mask [attr.id]=\"maskId\">\n            <rect\n                fill=\"white\"\n                height=\"400\"\n                width=\"400\"\n                x=\"-200\"\n                y=\"-200\"\n            />\n            <circle\n                cx=\"0\"\n                cy=\"0\"\n                [attr.r]=\"radius\"\n            />\n        </mask>\n    </defs>\n    <g [style.mask]=\"mask\">\n        <circle\n            cx=\"0\"\n            cy=\"0\"\n            r=\"100\"\n            class=\"t-placeholder\"\n        />\n        <path\n            *tuiRepeatTimes=\"let index of segments.length\"\n            automation-id=\"tui-pie-chart__segment\"\n            d=\"\"\n            fill=\"currentColor\"\n            tuiHintPointer\n            class=\"t-segment\"\n            [attr.transform]=\"getTransform(index)\"\n            [style.color]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n            [tuiHint]=\"hintContent\"\n            [tuiHintContext]=\"{$implicit: index}\"\n            [tuiPieChart]=\"segments[index] || [0, 0]\"\n            (tuiHoveredChange)=\"onHovered($event, index)\"\n        />\n    </g>\n</svg>\n", styles: [":host{position:relative;display:block;inline-size:var(--t-size);block-size:var(--t-size);border-radius:100%}:host[data-size=xs]{--t-size: 2rem;pointer-events:none}:host[data-size=s]{--t-size: 4rem}:host[data-size=m]{--t-size: 9rem}:host[data-size=l]{--t-size: 11rem}:host[data-size=xl]{--t-size: 16rem}.t-svg{position:relative;overflow:visible;transform:rotate(-90deg)}.t-segment{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}:host._empty .t-segment{display:none}.t-placeholder{fill:var(--tui-background-neutral-1)}\n"], dependencies: [{ kind: "directive", type: i1.TuiHintDirective, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: ["tuiHintContext", "tuiHintAppearance", "tuiHint"] }, { kind: "directive", type: i1.TuiHintPointer, selector: "[tuiHint][tuiHintPointer]" }, { kind: "directive", type: TuiHovered, selector: "[tuiHoveredChange]", outputs: ["tuiHoveredChange"] }, { kind: "directive", type: TuiPieChartDirective, selector: "path[tuiPieChart]", inputs: ["tuiPieChart"] }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], viewProviders: [tuiHintOptionsProvider({ direction: 'top-right', appearance: 'dark' })], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiPieChart.prototype, "getSum", null);
__decorate([
    tuiPure
], TuiPieChart.prototype, "getSegments", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPieChart, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-pie-chart', imports: [TuiHint, TuiHovered, TuiPieChartDirective, TuiRepeatTimes], changeDetection: ChangeDetectionStrategy.OnPush, viewProviders: [tuiHintOptionsProvider({ direction: 'top-right', appearance: 'dark' })], host: {
                        '[attr.data-size]': 'size',
                        '[class._empty]': 'empty',
                    }, template: "<svg\n    focusable=\"false\"\n    height=\"100%\"\n    viewBox=\"-100 -100 200 200\"\n    width=\"100%\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"t-svg\"\n>\n    <defs>\n        <mask [attr.id]=\"maskId\">\n            <rect\n                fill=\"white\"\n                height=\"400\"\n                width=\"400\"\n                x=\"-200\"\n                y=\"-200\"\n            />\n            <circle\n                cx=\"0\"\n                cy=\"0\"\n                [attr.r]=\"radius\"\n            />\n        </mask>\n    </defs>\n    <g [style.mask]=\"mask\">\n        <circle\n            cx=\"0\"\n            cy=\"0\"\n            r=\"100\"\n            class=\"t-placeholder\"\n        />\n        <path\n            *tuiRepeatTimes=\"let index of segments.length\"\n            automation-id=\"tui-pie-chart__segment\"\n            d=\"\"\n            fill=\"currentColor\"\n            tuiHintPointer\n            class=\"t-segment\"\n            [attr.transform]=\"getTransform(index)\"\n            [style.color]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n            [tuiHint]=\"hintContent\"\n            [tuiHintContext]=\"{$implicit: index}\"\n            [tuiPieChart]=\"segments[index] || [0, 0]\"\n            (tuiHoveredChange)=\"onHovered($event, index)\"\n        />\n    </g>\n</svg>\n", styles: [":host{position:relative;display:block;inline-size:var(--t-size);block-size:var(--t-size);border-radius:100%}:host[data-size=xs]{--t-size: 2rem;pointer-events:none}:host[data-size=s]{--t-size: 4rem}:host[data-size=m]{--t-size: 9rem}:host[data-size=l]{--t-size: 11rem}:host[data-size=xl]{--t-size: 16rem}.t-svg{position:relative;overflow:visible;transform:rotate(-90deg)}.t-segment{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}:host._empty .t-segment{display:none}.t-placeholder{fill:var(--tui-background-neutral-1)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], masked: [{
                type: Input
            }], activeItemIndex: [{
                type: Input
            }], activeItemIndexChange: [{
                type: Output
            }], getSum: [], getSegments: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiPieChart, TuiPieChartDirective };
//# sourceMappingURL=taiga-ui-addon-charts-components-pie-chart.mjs.map
