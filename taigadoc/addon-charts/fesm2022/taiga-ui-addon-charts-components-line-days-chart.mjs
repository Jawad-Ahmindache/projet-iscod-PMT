import { __decorate } from 'tslib';
import { NgForOf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, DestroyRef, NgZone, Directive, ContentChildren, forwardRef, Input, Component, ChangeDetectionStrategy, ViewChildren } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiLineChartDrivers, TUI_LINE_CHART_OPTIONS, TuiLineChartHint, TuiLineChart } from '@taiga-ui/addon-charts/components/line-chart';
import { EMPTY_QUERY, EMPTY_ARRAY } from '@taiga-ui/cdk/constants';
import { TuiDay, TuiMonth } from '@taiga-ui/cdk/date-time';
import { TuiHoveredService } from '@taiga-ui/cdk/directives/hovered';
import { tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiPure, tuiIsNumber, tuiIsPresent } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i1 from '@taiga-ui/core/directives/hint';
import { TuiHint } from '@taiga-ui/core/directives/hint';
import { PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { combineLatest, filter } from 'rxjs';

function find(value, current) {
    return value.find(([day]) => day.daySame(current)) || [current, NaN];
}
// TODO: Consider extending TuiLineChartHintDirective
class TuiLineDaysChartHint {
    constructor() {
        this.charts = EMPTY_QUERY;
        this.destroyRef = inject(DestroyRef);
        this.zone = inject(NgZone);
        this.hovered$ = inject(TuiHoveredService);
    }
    ngAfterContentInit() {
        combineLatest([
            ...this.charts.map(({ charts }) => tuiLineChartDrivers(charts)),
            this.hovered$,
        ])
            .pipe(filter((result) => !result.some(Boolean)), tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            this.charts.forEach((chart) => chart.onHovered(NaN));
        });
    }
    getContext(day) {
        return this.getMap(...this.charts.map(({ value }) => value)).get(String(day)) || [];
    }
    raise(day) {
        const current = this.charts
            .map(({ value }) => (day ? find(value, day) : []))
            .filter(([_, value]) => !Number.isNaN(value));
        const sorted = [...current].sort((a, b) => a[1] - b[1]);
        this.charts.forEach((chart, index) => {
            const item = current[index];
            chart.onHovered(day);
            chart.zIndex = Math.max(item ? sorted.indexOf(item) : 0, 0);
        });
    }
    getMap(...values) {
        return (values[0] || []).reduce((map, [day]) => map.set(String(day), values.map((value) => find(value, day))), new Map());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineDaysChartHint, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineDaysChartHint, isStandalone: true, selector: "[tuiLineChartHint]", inputs: { hint: ["tuiLineChartHint", "hint"] }, providers: [TuiHoveredService], queries: [{ propertyName: "charts", predicate: i0.forwardRef(function () { return TuiLineDaysChart; }) }], ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiLineDaysChartHint.prototype, "getMap", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineDaysChartHint, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiLineChartHint]',
                    providers: [TuiHoveredService],
                }]
        }], propDecorators: { charts: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiLineDaysChart)]
            }], hint: [{
                type: Input,
                args: ['tuiLineChartHint']
            }], getMap: [] } });

const DUMMY = [NaN, NaN];
class TuiLineDaysChart {
    constructor() {
        this.destroyRef = inject(DestroyRef);
        this.zone = inject(NgZone);
        this.hovered$ = inject(TuiHoveredService);
        this.options = inject(TUI_LINE_CHART_OPTIONS);
        this.hintDirective = inject(TuiLineDaysChartHint, {
            optional: true,
        });
        this.charts = EMPTY_QUERY;
        this.y = 0;
        this.height = 0;
        this.smoothingFactor = this.options.smoothingFactor;
        this.xStringify = null;
        this.yStringify = null;
        this.dots = this.options.dots;
        this.zIndex = 0;
        this.value = [];
        this.daysStringify = (index) => {
            const day = this.getDay(index);
            return this.xStringify && day ? this.xStringify(day) : '';
        };
    }
    set valueSetter(value) {
        if (!value.length) {
            this.value = [];
            return;
        }
        const start = value[0]?.[0];
        const end = value[value.length - 1];
        const mutable = [...value];
        const length = start && end ? TuiDay.lengthBetween(start, end[0]) + 1 : 0;
        this.value = Array.from({ length }, (_, day) => {
            const startMutable = mutable[0]?.[0];
            const currentDay = start?.append({ day });
            const shifted = startMutable && currentDay?.daySame(startMutable)
                ? mutable.shift()
                : null;
            const currentValue = shifted ? shifted[1] : NaN;
            return [currentDay, currentValue];
        });
    }
    get hint() {
        return this.hintDirective?.hint ?? this.hintContent;
    }
    ngAfterViewInit() {
        combineLatest([tuiLineChartDrivers(this.charts), this.hovered$])
            .pipe(filter((result) => !result.some(Boolean)), tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            this.onHovered(NaN);
        });
    }
    onHovered(day) {
        if (tuiIsNumber(day)) {
            this.charts.forEach((chart) => chart.onHovered(NaN));
            return;
        }
        const start = this.value[0]?.[0];
        const index = start && day ? TuiMonth.lengthBetween(start, day) : 0;
        const x = start && day ? TuiDay.lengthBetween(start, day) + start.day - 1 : 0;
        const current = this.charts.get(index);
        this.charts.forEach((chart) => {
            if (chart === current) {
                current.onHovered(current.value.findIndex((point) => point[0] === x));
            }
            else {
                chart.onHovered(NaN);
            }
        });
    }
    raise(index, { value }) {
        const x = value[index]?.[0] || 0;
        const month = this.getDay(x);
        if (!month) {
            return;
        }
        if (this.hintDirective) {
            this.hintDirective.raise(month);
        }
        else {
            this.onHovered(month);
        }
    }
    getContext(index, { value }) {
        const x = value[index]?.[0] || 0;
        const day = this.getDay(x);
        return this.hintDirective && day
            ? this.hintDirective.getContext(day)
            : this.getHintContext(x, this.value);
    }
    get months() {
        return this.value.length ? this.breakMonths(this.value) : EMPTY_ARRAY;
    }
    get firstWidth() {
        return this.months.length * (this.value[0]?.[0].daysCount || 0);
    }
    getHintContext(x, value) {
        return value[x - (value[0]?.[0]?.day || 0) + 1] ?? null;
    }
    getX(index) {
        const start = this.value[0]?.[0];
        const current = this.getDay(index);
        const months = start && current ? TuiMonth.lengthBetween(start, current) : 0;
        const offset = months * (current?.daysCount || 0);
        return index - offset;
    }
    getWidth(index) {
        return (this.getDay(index)?.daysCount || 0) * this.months.length;
    }
    breakMonths(value) {
        const offset = (value[0]?.[0].day || 1) - 1;
        const start = value[0]?.[0];
        const end = value[value.length - 1]?.[0];
        return Array.from({ length: start && end ? TuiMonth.lengthBetween(start, end) + 1 : 0 }, (_, i) => i + (start?.month || 0) + (start?.year || 0) * 12)
            .map((absoluteMonth) => value
            .map(([{ month, year }, y], index) => month + year * 12 === absoluteMonth ? [index + offset, y] : null)
            .filter(tuiIsPresent))
            .map((month, index, array) => index === array.length - 1
            ? month
            : [
                ...month,
                array[index + 1]?.find((day) => !Number.isNaN(day[1])) || DUMMY,
            ]);
    }
    getDay(index) {
        const start = this.value[0]?.[0];
        return this.value[index - (start?.day || 0) + 1]?.[0];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineDaysChart, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineDaysChart, isStandalone: true, selector: "tui-line-days-chart", inputs: { y: "y", height: "height", smoothingFactor: "smoothingFactor", hintContent: "hintContent", xStringify: "xStringify", yStringify: "yStringify", dots: "dots", valueSetter: ["value", "valueSetter"] }, host: { properties: { "style.zIndex": "zIndex" } }, providers: [
            TuiHoveredService,
            {
                provide: TuiLineChartHint,
                useExisting: TuiLineDaysChart,
            },
        ], viewQueries: [{ propertyName: "charts", predicate: TuiLineChart, descendants: true }], ngImport: i0, template: "<tui-line-chart\n    *ngFor=\"let month of months; let first = first\"\n    class=\"t-chart\"\n    [dots]=\"dots\"\n    [height]=\"height\"\n    [smoothingFactor]=\"smoothingFactor\"\n    [style.zIndex]=\"zIndex\"\n    [tuiHintContent]=\"hintContent ? hint : ''\"\n    [value]=\"month\"\n    [width]=\"first ? firstWidth : getWidth(month[0]?.[0] ?? 0)\"\n    [x]=\"first ? 0 : getX(month[0]?.[0] ?? 0)\"\n    [xStringify]=\"xStringify ? daysStringify : null\"\n    [y]=\"y\"\n    [yStringify]=\"yStringify\"\n/>\n<ng-template\n    #hint\n    let-point\n>\n    <ng-container *polymorpheusOutlet=\"hintContent as text; context: {$implicit: getHintContext(point[0], value)}\">\n        {{ text }}\n    </ng-container>\n</ng-template>\n", styles: [":host{display:block}.t-chart{position:absolute;top:0;left:0;inline-size:100%;block-size:100%}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: i1.TuiHintOptionsDirective, selector: "[tuiHintContent]", inputs: ["tuiHintContent", "tuiHintDirection", "tuiHintAppearance", "tuiHintShowDelay", "tuiHintHideDelay"] }, { kind: "component", type: TuiLineChart, selector: "tui-line-chart", inputs: ["x", "y", "width", "height", "smoothingFactor", "xStringify", "yStringify", "filled", "dots", "value"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiLineDaysChart.prototype, "getHintContext", null);
__decorate([
    tuiPure
], TuiLineDaysChart.prototype, "breakMonths", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineDaysChart, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-line-days-chart', imports: [NgForOf, PolymorpheusOutlet, PolymorpheusTemplate, TuiHint, TuiLineChart], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        TuiHoveredService,
                        {
                            provide: TuiLineChartHint,
                            useExisting: TuiLineDaysChart,
                        },
                    ], host: {
                        '[style.zIndex]': 'zIndex',
                    }, template: "<tui-line-chart\n    *ngFor=\"let month of months; let first = first\"\n    class=\"t-chart\"\n    [dots]=\"dots\"\n    [height]=\"height\"\n    [smoothingFactor]=\"smoothingFactor\"\n    [style.zIndex]=\"zIndex\"\n    [tuiHintContent]=\"hintContent ? hint : ''\"\n    [value]=\"month\"\n    [width]=\"first ? firstWidth : getWidth(month[0]?.[0] ?? 0)\"\n    [x]=\"first ? 0 : getX(month[0]?.[0] ?? 0)\"\n    [xStringify]=\"xStringify ? daysStringify : null\"\n    [y]=\"y\"\n    [yStringify]=\"yStringify\"\n/>\n<ng-template\n    #hint\n    let-point\n>\n    <ng-container *polymorpheusOutlet=\"hintContent as text; context: {$implicit: getHintContext(point[0], value)}\">\n        {{ text }}\n    </ng-container>\n</ng-template>\n", styles: [":host{display:block}.t-chart{position:absolute;top:0;left:0;inline-size:100%;block-size:100%}\n"] }]
        }], propDecorators: { charts: [{
                type: ViewChildren,
                args: [TuiLineChart]
            }], y: [{
                type: Input
            }], height: [{
                type: Input
            }], smoothingFactor: [{
                type: Input
            }], hintContent: [{
                type: Input
            }], xStringify: [{
                type: Input
            }], yStringify: [{
                type: Input
            }], dots: [{
                type: Input
            }], valueSetter: [{
                type: Input,
                args: ['value']
            }], getHintContext: [], breakMonths: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiLineDaysChart, TuiLineDaysChartHint };
//# sourceMappingURL=taiga-ui-addon-charts-components-line-days-chart.mjs.map
