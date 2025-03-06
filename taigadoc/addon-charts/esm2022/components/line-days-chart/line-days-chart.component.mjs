import { __decorate } from "tslib";
import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, Input, NgZone, ViewChildren, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TUI_LINE_CHART_OPTIONS, TuiLineChart, tuiLineChartDrivers, TuiLineChartHint, } from '@taiga-ui/addon-charts/components/line-chart';
import { EMPTY_ARRAY, EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { TuiDay, TuiMonth } from '@taiga-ui/cdk/date-time';
import { TuiHoveredService } from '@taiga-ui/cdk/directives/hovered';
import { tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiIsNumber, tuiIsPresent, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiHint } from '@taiga-ui/core/directives/hint';
import { PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { combineLatest, filter } from 'rxjs';
import { TuiLineDaysChartHint } from './line-days-chart-hint.directive';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/hint";
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
export { TuiLineDaysChart };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1kYXlzLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2xpbmUtZGF5cy1jaGFydC9saW5lLWRheXMtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvbGluZS1kYXlzLWNoYXJ0L2xpbmUtZGF5cy1jaGFydC50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFeEMsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQ0gsc0JBQXNCLEVBQ3RCLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsZ0JBQWdCLEdBQ25CLE1BQU0sOENBQThDLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RCxPQUFPLEVBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFHdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG9CQUFv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LGdCQUFnQjttR0FBaEIsZ0JBQWdCLHFVQVhkO1lBQ1AsaUJBQWlCO1lBQ2pCO2dCQUNJLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBRSxnQkFBZ0I7YUFDaEM7U0FDSixxREFjYSxZQUFZLGdEQzdEOUIsOHRCQXVCQSx5SkRjYyxPQUFPLG1IQUFFLGtCQUFrQixrVUFBaUMsWUFBWTs7QUFzSnhFO0lBRFQsT0FBTztzREFNUDtBQXNCTztJQURQLE9BQU87bURBMkJQO1NBNUxRLGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQWxCNUIsU0FBUztpQ0FDTSxJQUFJLFlBQ04scUJBQXFCLFdBQ3RCLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsbUJBR2xFLHVCQUF1QixDQUFDLE1BQU0sYUFDcEM7d0JBQ1AsaUJBQWlCO3dCQUNqQjs0QkFDSSxPQUFPLEVBQUUsZ0JBQWdCOzRCQUN6QixXQUFXLGtCQUFrQjt5QkFDaEM7cUJBQ0osUUFDSzt3QkFDRixnQkFBZ0IsRUFBRSxRQUFRO3FCQUM3Qjs4QkFZZSxNQUFNO3NCQURyQixZQUFZO3VCQUFDLFlBQVk7Z0JBSW5CLENBQUM7c0JBRFAsS0FBSztnQkFJQyxNQUFNO3NCQURaLEtBQUs7Z0JBSUMsZUFBZTtzQkFEckIsS0FBSztnQkFJQyxXQUFXO3NCQURqQixLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLEtBQUs7Z0JBSUMsVUFBVTtzQkFEaEIsS0FBSztnQkFJQyxJQUFJO3NCQURWLEtBQUs7Z0JBUUssV0FBVztzQkFEckIsS0FBSzt1QkFBQyxPQUFPO2dCQWtHSixjQUFjLE1BMkJoQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ0Zvck9mfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyVmlld0luaXQsIFF1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBEZXN0cm95UmVmLFxuICAgIGluamVjdCxcbiAgICBJbnB1dCxcbiAgICBOZ1pvbmUsXG4gICAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge1xuICAgIFRVSV9MSU5FX0NIQVJUX09QVElPTlMsXG4gICAgVHVpTGluZUNoYXJ0LFxuICAgIHR1aUxpbmVDaGFydERyaXZlcnMsXG4gICAgVHVpTGluZUNoYXJ0SGludCxcbn0gZnJvbSAnQHRhaWdhLXVpL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2xpbmUtY2hhcnQnO1xuaW1wb3J0IHtFTVBUWV9BUlJBWSwgRU1QVFlfUVVFUll9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB7VHVpRGF5LCBUdWlNb250aH0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kYXRlLXRpbWUnO1xuaW1wb3J0IHtUdWlIb3ZlcmVkU2VydmljZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL2hvdmVyZWQnO1xuaW1wb3J0IHt0dWlab25lZnJlZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9vYnNlcnZhYmxlcyc7XG5pbXBvcnQgdHlwZSB7VHVpQ29udGV4dCwgVHVpU3RyaW5nSGFuZGxlcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay90eXBlcyc7XG5pbXBvcnQge3R1aUlzTnVtYmVyLCB0dWlJc1ByZXNlbnQsIHR1aVB1cmV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQge1R1aUhpbnR9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2RpcmVjdGl2ZXMvaGludCc7XG5pbXBvcnQgdHlwZSB7VHVpUG9pbnR9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHtQb2x5bW9ycGhldXNDb250ZW50fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcbmltcG9ydCB7UG9seW1vcnBoZXVzT3V0bGV0LCBQb2x5bW9ycGhldXNUZW1wbGF0ZX0gZnJvbSAnQHRhaWdhLXVpL3BvbHltb3JwaGV1cyc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIGZpbHRlcn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7VHVpTGluZURheXNDaGFydEhpbnR9IGZyb20gJy4vbGluZS1kYXlzLWNoYXJ0LWhpbnQuZGlyZWN0aXZlJztcblxuY29uc3QgRFVNTVk6IFR1aVBvaW50ID0gW05hTiwgTmFOXTtcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3R1aS1saW5lLWRheXMtY2hhcnQnLFxuICAgIGltcG9ydHM6IFtOZ0Zvck9mLCBQb2x5bW9ycGhldXNPdXRsZXQsIFBvbHltb3JwaGV1c1RlbXBsYXRlLCBUdWlIaW50LCBUdWlMaW5lQ2hhcnRdLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saW5lLWRheXMtY2hhcnQudGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGluZS1kYXlzLWNoYXJ0LnN0eWxlLmxlc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVHVpSG92ZXJlZFNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IFR1aUxpbmVDaGFydEhpbnQsXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogVHVpTGluZURheXNDaGFydCxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tzdHlsZS56SW5kZXhdJzogJ3pJbmRleCcsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpTGluZURheXNDaGFydCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveVJlZiA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHpvbmUgPSBpbmplY3QoTmdab25lKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhvdmVyZWQkID0gaW5qZWN0KFR1aUhvdmVyZWRTZXJ2aWNlKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnMgPSBpbmplY3QoVFVJX0xJTkVfQ0hBUlRfT1BUSU9OUyk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoaW50RGlyZWN0aXZlID0gaW5qZWN0KFR1aUxpbmVEYXlzQ2hhcnRIaW50LCB7XG4gICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgQFZpZXdDaGlsZHJlbihUdWlMaW5lQ2hhcnQpXG4gICAgcHVibGljIHJlYWRvbmx5IGNoYXJ0czogUXVlcnlMaXN0PFR1aUxpbmVDaGFydD4gPSBFTVBUWV9RVUVSWTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHkgPSAwO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaGVpZ2h0ID0gMDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNtb290aGluZ0ZhY3RvciA9IHRoaXMub3B0aW9ucy5zbW9vdGhpbmdGYWN0b3I7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoaW50Q29udGVudDogUG9seW1vcnBoZXVzQ29udGVudDxUdWlDb250ZXh0PFtUdWlEYXksIG51bWJlcl0+PjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHhTdHJpbmdpZnk6IFR1aVN0cmluZ0hhbmRsZXI8VHVpRGF5PiB8IG51bGwgPSBudWxsO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgeVN0cmluZ2lmeTogVHVpU3RyaW5nSGFuZGxlcjxudW1iZXI+IHwgbnVsbCA9IG51bGw7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkb3RzID0gdGhpcy5vcHRpb25zLmRvdHM7XG5cbiAgICBwdWJsaWMgekluZGV4ID0gMDtcblxuICAgIHB1YmxpYyB2YWx1ZTogUmVhZG9ubHlBcnJheTxbVHVpRGF5LCBudW1iZXJdPiA9IFtdO1xuXG4gICAgQElucHV0KCd2YWx1ZScpXG4gICAgcHVibGljIHNldCB2YWx1ZVNldHRlcih2YWx1ZTogUmVhZG9ubHlBcnJheTxbVHVpRGF5LCBudW1iZXJdPikge1xuICAgICAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFydCA9IHZhbHVlWzBdPy5bMF07XG4gICAgICAgIGNvbnN0IGVuZCA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBtdXRhYmxlID0gWy4uLnZhbHVlXTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gc3RhcnQgJiYgZW5kID8gVHVpRGF5Lmxlbmd0aEJldHdlZW4oc3RhcnQsIGVuZFswXSkgKyAxIDogMDtcblxuICAgICAgICB0aGlzLnZhbHVlID0gQXJyYXkuZnJvbSh7bGVuZ3RofSwgKF8sIGRheSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRNdXRhYmxlID0gbXV0YWJsZVswXT8uWzBdO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERheSA9IHN0YXJ0Py5hcHBlbmQoe2RheX0pO1xuICAgICAgICAgICAgY29uc3Qgc2hpZnRlZCA9XG4gICAgICAgICAgICAgICAgc3RhcnRNdXRhYmxlICYmIGN1cnJlbnREYXk/LmRheVNhbWUoc3RhcnRNdXRhYmxlKVxuICAgICAgICAgICAgICAgICAgICA/IG11dGFibGUuc2hpZnQoKVxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBzaGlmdGVkID8gc2hpZnRlZFsxXSA6IE5hTjtcblxuICAgICAgICAgICAgcmV0dXJuIFtjdXJyZW50RGF5LCBjdXJyZW50VmFsdWVdIGFzIFtUdWlEYXksIG51bWJlcl07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGludCgpOlxuICAgICAgICB8IFBvbHltb3JwaGV1c0NvbnRlbnQ8VHVpQ29udGV4dDxbVHVpRGF5LCBudW1iZXJdPj5cbiAgICAgICAgfCBQb2x5bW9ycGhldXNDb250ZW50PFR1aUNvbnRleHQ8cmVhZG9ubHkgVHVpUG9pbnRbXT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGludERpcmVjdGl2ZT8uaGludCA/PyB0aGlzLmhpbnRDb250ZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW3R1aUxpbmVDaGFydERyaXZlcnModGhpcy5jaGFydHMpLCB0aGlzLmhvdmVyZWQkXSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcigocmVzdWx0KSA9PiAhcmVzdWx0LnNvbWUoQm9vbGVhbikpLFxuICAgICAgICAgICAgICAgIHR1aVpvbmVmcmVlKHRoaXMuem9uZSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveVJlZiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uSG92ZXJlZChOYU4pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSG92ZXJlZChkYXk6IFR1aURheSB8IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodHVpSXNOdW1iZXIoZGF5KSkge1xuICAgICAgICAgICAgdGhpcy5jaGFydHMuZm9yRWFjaCgoY2hhcnQpID0+IGNoYXJ0Lm9uSG92ZXJlZChOYU4pKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnZhbHVlWzBdPy5bMF07XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc3RhcnQgJiYgZGF5ID8gVHVpTW9udGgubGVuZ3RoQmV0d2VlbihzdGFydCwgZGF5KSA6IDA7XG4gICAgICAgIGNvbnN0IHggPSBzdGFydCAmJiBkYXkgPyBUdWlEYXkubGVuZ3RoQmV0d2VlbihzdGFydCwgZGF5KSArIHN0YXJ0LmRheSAtIDEgOiAwO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jaGFydHMuZ2V0KGluZGV4KTtcblxuICAgICAgICB0aGlzLmNoYXJ0cy5mb3JFYWNoKChjaGFydCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoYXJ0ID09PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5vbkhvdmVyZWQoY3VycmVudC52YWx1ZS5maW5kSW5kZXgoKHBvaW50KSA9PiBwb2ludFswXSA9PT0geCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFydC5vbkhvdmVyZWQoTmFOKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJhaXNlKGluZGV4OiBudW1iZXIsIHt2YWx1ZX06IFR1aUxpbmVDaGFydCk6IHZvaWQge1xuICAgICAgICBjb25zdCB4ID0gdmFsdWVbaW5kZXhdPy5bMF0gfHwgMDtcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLmdldERheSh4KTtcblxuICAgICAgICBpZiAoIW1vbnRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oaW50RGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmhpbnREaXJlY3RpdmUucmFpc2UobW9udGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkhvdmVyZWQobW9udGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbnRleHQoaW5kZXg6IG51bWJlciwge3ZhbHVlfTogVHVpTGluZUNoYXJ0KTogdW5rbm93biB7XG4gICAgICAgIGNvbnN0IHggPSB2YWx1ZVtpbmRleF0/LlswXSB8fCAwO1xuICAgICAgICBjb25zdCBkYXkgPSB0aGlzLmdldERheSh4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5oaW50RGlyZWN0aXZlICYmIGRheVxuICAgICAgICAgICAgPyB0aGlzLmhpbnREaXJlY3RpdmUuZ2V0Q29udGV4dChkYXkpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SGludENvbnRleHQoeCwgdGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBtb250aHMoKTogUmVhZG9ubHlBcnJheTxyZWFkb25seSBUdWlQb2ludFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmxlbmd0aCA/IHRoaXMuYnJlYWtNb250aHModGhpcy52YWx1ZSkgOiBFTVBUWV9BUlJBWTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGZpcnN0V2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGhzLmxlbmd0aCAqICh0aGlzLnZhbHVlWzBdPy5bMF0uZGF5c0NvdW50IHx8IDApO1xuICAgIH1cblxuICAgIEB0dWlQdXJlXG4gICAgcHJvdGVjdGVkIGdldEhpbnRDb250ZXh0KFxuICAgICAgICB4OiBudW1iZXIsXG4gICAgICAgIHZhbHVlOiBSZWFkb25seUFycmF5PFtUdWlEYXksIG51bWJlcl0+LFxuICAgICk6IFtUdWlEYXksIG51bWJlcl0gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlW3ggLSAodmFsdWVbMF0/LlswXT8uZGF5IHx8IDApICsgMV0gPz8gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGF5c1N0cmluZ2lmeTogVHVpU3RyaW5nSGFuZGxlcjxudW1iZXI+ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRheSA9IHRoaXMuZ2V0RGF5KGluZGV4KTtcblxuICAgICAgICByZXR1cm4gdGhpcy54U3RyaW5naWZ5ICYmIGRheSA/IHRoaXMueFN0cmluZ2lmeShkYXkpIDogJyc7XG4gICAgfTtcblxuICAgIHByb3RlY3RlZCBnZXRYKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMudmFsdWVbMF0/LlswXTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0RGF5KGluZGV4KTtcbiAgICAgICAgY29uc3QgbW9udGhzID0gc3RhcnQgJiYgY3VycmVudCA/IFR1aU1vbnRoLmxlbmd0aEJldHdlZW4oc3RhcnQsIGN1cnJlbnQpIDogMDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gbW9udGhzICogKGN1cnJlbnQ/LmRheXNDb3VudCB8fCAwKTtcblxuICAgICAgICByZXR1cm4gaW5kZXggLSBvZmZzZXQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFdpZHRoKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0RGF5KGluZGV4KT8uZGF5c0NvdW50IHx8IDApICogdGhpcy5tb250aHMubGVuZ3RoO1xuICAgIH1cblxuICAgIEB0dWlQdXJlXG4gICAgcHJpdmF0ZSBicmVha01vbnRocyhcbiAgICAgICAgdmFsdWU6IFJlYWRvbmx5QXJyYXk8W1R1aURheSwgbnVtYmVyXT4sXG4gICAgKTogUmVhZG9ubHlBcnJheTxyZWFkb25seSBUdWlQb2ludFtdPiB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9ICh2YWx1ZVswXT8uWzBdLmRheSB8fCAxKSAtIDE7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdmFsdWVbMF0/LlswXTtcbiAgICAgICAgY29uc3QgZW5kID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0/LlswXTtcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIHtsZW5ndGg6IHN0YXJ0ICYmIGVuZCA/IFR1aU1vbnRoLmxlbmd0aEJldHdlZW4oc3RhcnQsIGVuZCkgKyAxIDogMH0sXG4gICAgICAgICAgICAoXywgaSkgPT4gaSArIChzdGFydD8ubW9udGggfHwgMCkgKyAoc3RhcnQ/LnllYXIgfHwgMCkgKiAxMixcbiAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgoYWJzb2x1dGVNb250aCkgPT5cbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAubWFwPFR1aVBvaW50IHwgbnVsbD4oKFt7bW9udGgsIHllYXJ9LCB5XSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aCArIHllYXIgKiAxMiA9PT0gYWJzb2x1dGVNb250aCA/IFtpbmRleCArIG9mZnNldCwgeV0gOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodHVpSXNQcmVzZW50KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoKG1vbnRoLCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgICAgICAgaW5kZXggPT09IGFycmF5Lmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgPyBtb250aFxuICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5W2luZGV4ICsgMV0/LmZpbmQoKGRheSkgPT4gIU51bWJlci5pc05hTihkYXlbMV0pKSB8fCBEVU1NWSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldERheShpbmRleDogbnVtYmVyKTogVHVpRGF5IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnZhbHVlWzBdPy5bMF07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVbaW5kZXggLSAoc3RhcnQ/LmRheSB8fCAwKSArIDFdPy5bMF07XG4gICAgfVxufVxuIiwiPHR1aS1saW5lLWNoYXJ0XG4gICAgKm5nRm9yPVwibGV0IG1vbnRoIG9mIG1vbnRoczsgbGV0IGZpcnN0ID0gZmlyc3RcIlxuICAgIGNsYXNzPVwidC1jaGFydFwiXG4gICAgW2RvdHNdPVwiZG90c1wiXG4gICAgW2hlaWdodF09XCJoZWlnaHRcIlxuICAgIFtzbW9vdGhpbmdGYWN0b3JdPVwic21vb3RoaW5nRmFjdG9yXCJcbiAgICBbc3R5bGUuekluZGV4XT1cInpJbmRleFwiXG4gICAgW3R1aUhpbnRDb250ZW50XT1cImhpbnRDb250ZW50ID8gaGludCA6ICcnXCJcbiAgICBbdmFsdWVdPVwibW9udGhcIlxuICAgIFt3aWR0aF09XCJmaXJzdCA/IGZpcnN0V2lkdGggOiBnZXRXaWR0aChtb250aFswXT8uWzBdID8/IDApXCJcbiAgICBbeF09XCJmaXJzdCA/IDAgOiBnZXRYKG1vbnRoWzBdPy5bMF0gPz8gMClcIlxuICAgIFt4U3RyaW5naWZ5XT1cInhTdHJpbmdpZnkgPyBkYXlzU3RyaW5naWZ5IDogbnVsbFwiXG4gICAgW3ldPVwieVwiXG4gICAgW3lTdHJpbmdpZnldPVwieVN0cmluZ2lmeVwiXG4vPlxuPG5nLXRlbXBsYXRlXG4gICAgI2hpbnRcbiAgICBsZXQtcG9pbnRcbj5cbiAgICA8bmctY29udGFpbmVyICpwb2x5bW9ycGhldXNPdXRsZXQ9XCJoaW50Q29udGVudCBhcyB0ZXh0OyBjb250ZXh0OiB7JGltcGxpY2l0OiBnZXRIaW50Q29udGV4dChwb2ludFswXSwgdmFsdWUpfVwiPlxuICAgICAgICB7eyB0ZXh0IH19XG4gICAgPC9uZy1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuIl19