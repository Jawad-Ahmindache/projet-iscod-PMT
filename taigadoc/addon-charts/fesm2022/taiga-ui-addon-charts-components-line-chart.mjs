import { __decorate } from 'tslib';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Renderer2, DestroyRef, NgZone, ElementRef, Directive, ContentChildren, forwardRef, Input, signal, computed, Component, ChangeDetectionStrategy, ViewChildren } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { tuiDraw } from '@taiga-ui/addon-charts/utils';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { TuiLet } from '@taiga-ui/cdk/directives/let';
import { tuiZonefree, tuiQueryListChanges, tuiZoneOptimized } from '@taiga-ui/cdk/observables';
import { tuiInjectId } from '@taiga-ui/cdk/services';
import { tuiCreateToken, tuiProvideOptions, tuiPure, tuiIsPresent } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i1 from '@taiga-ui/core/directives/hint';
import { TuiHintOptionsDirective, TuiHintHover, tuiHintOptionsProvider, TuiHint } from '@taiga-ui/core/directives/hint';
import { combineLatest, filter, map, startWith, switchMap, distinctUntilChanged, Subject } from 'rxjs';
import { TuiHoveredService } from '@taiga-ui/cdk/directives/hovered';

const TUI_LINE_CHART_DEFAULT_OPTIONS = {
    dots: false,
    filled: false,
    smoothingFactor: 0,
};
const TUI_LINE_CHART_OPTIONS = tuiCreateToken(TUI_LINE_CHART_DEFAULT_OPTIONS);
function tuiLineChartOptionsProvider(options) {
    return tuiProvideOptions(TUI_LINE_CHART_OPTIONS, options, TUI_LINE_CHART_DEFAULT_OPTIONS);
}

class TuiLineChartHint {
    constructor() {
        this.charts = EMPTY_QUERY;
        this.chartsRef = EMPTY_QUERY;
        this.renderer = inject(Renderer2);
        this.destroyRef = inject(DestroyRef);
        this.zone = inject(NgZone);
        this.hovered$ = inject(TuiHoveredService);
    }
    ngAfterViewInit() {
        combineLatest([tuiLineChartDrivers(this.charts), this.hovered$])
            .pipe(filter((result) => !result.some(Boolean)), tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            this.charts.forEach((chart) => chart.onHovered(NaN));
        });
    }
    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    getContext(index, _chart) {
        return this.computeContext(...this.charts.map(({ value }) => value))[index] || [];
    }
    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    raise(index, _chart) {
        const current = this.charts.map((chart) => chart.value[index] ?? [0, 0]);
        const sorted = [...current].sort((a, b) => a[1] - b[1]);
        this.charts.forEach((chart) => chart.onHovered(index));
        this.chartsRef.forEach(({ nativeElement }, index) => this.renderer.setStyle(nativeElement, 'z-index', sorted.indexOf(current[index] ?? [0, 0])));
    }
    computeContext(...values) {
        return (values[0] || []).map((_, index) => values.map((value) => value[index] ?? [0, 0]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineChartHint, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineChartHint, isStandalone: true, selector: "[tuiLineChartHint]", inputs: { hint: ["tuiLineChartHint", "hint"] }, providers: [TuiHoveredService], queries: [{ propertyName: "charts", predicate: i0.forwardRef(function () { return TuiLineChart; }) }, { propertyName: "chartsRef", predicate: i0.forwardRef(function () { return TuiLineChart; }), read: ElementRef }], ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiLineChartHint.prototype, "computeContext", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineChartHint, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiLineChartHint]',
                    providers: [TuiHoveredService],
                }]
        }], propDecorators: { charts: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiLineChart)]
            }], chartsRef: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiLineChart), { read: ElementRef }]
            }], hint: [{
                type: Input,
                args: ['tuiLineChartHint']
            }], computeContext: [] } });
function tuiLineChartDrivers(charts) {
    return combineLatest(charts.map(({ drivers }) => tuiQueryListChanges(drivers).pipe(map((drivers) => drivers.map((driver) => driver.pipe(startWith(false))))))).pipe(map((all) => all.reduce((acc, drivers) => acc.concat(drivers), [])), switchMap((drivers) => combineLatest(drivers)), map((values) => values.some(Boolean)), distinctUntilChanged());
}

class TuiLineChart {
    constructor() {
        this.zone = inject(NgZone);
        this.options = inject(TUI_LINE_CHART_OPTIONS);
        this.hover$ = new Subject();
        this.autoId = tuiInjectId();
        this.resize = toSignal(inject(ResizeObserverService, { self: true }).pipe(map(([e]) => e?.contentRect.height || 0)), { initialValue: 0 });
        this.box = signal('');
        this.hintDirective = inject(TuiLineChartHint, { optional: true });
        this.hintOptions = inject(TuiHintOptionsDirective, { optional: true });
        this.viewBox = computed(() => {
            const offset = this.height / Math.max(this.resize(), 1);
            const [x = 0, y = 0, width = 0, height = 0] = this.box().split(' ').map(Number);
            return `${x} ${y - offset} ${width} ${height + 2 * offset}`;
        });
        this.drivers = EMPTY_QUERY;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.smoothingFactor = this.options.smoothingFactor;
        this.xStringify = null;
        this.yStringify = null;
        this.filled = this.options.filled;
        this.dots = this.options.dots;
        this.value = [];
    }
    set valueSetter(value) {
        this.value = value.filter((item) => !item.some(Number.isNaN));
    }
    ngOnChanges() {
        this.box.set(`${this.x} ${this.y} ${this.width} ${this.height}`);
    }
    onHovered(index) {
        this.hover$.next(index);
    }
    get hovered$() {
        return this.hover$.pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
    }
    get hintContent() {
        return this.hintOptions?.content || '';
    }
    get fillId() {
        return `tui-line-chart-${this.autoId}`;
    }
    get fill() {
        return this.filled ? `url(#${this.fillId})` : 'none';
    }
    get d() {
        return this.getD(this.value, this.smoothingFactor);
    }
    get fillD() {
        return this.value.length
            ? `${this.d}V ${this.y} H ${this.value[0]?.[0]} V ${this.value[0]?.[1]}`
            : this.d;
    }
    get isFocusable() {
        return !this.hintDirective && this.hasHints;
    }
    get hasHints() {
        return (!!this.xStringify ||
            !!this.yStringify ||
            !!this.hintDirective?.hint ||
            !!this.hintContent);
    }
    onMouseLeave() {
        if (!this.hintDirective) {
            this.onHovered(NaN);
        }
    }
    getX(index) {
        if (this.isSinglePoint) {
            return (this.value[0]?.[0] || 0) / 2;
        }
        return index
            ? ((this.value[index - 1]?.[0] || 0) + (this.value[index]?.[0] || 0)) / 2
            : 2 * (this.value[0]?.[0] || 0) - this.getX(1);
    }
    getWidth(index) {
        return (100 * this.computeWidth(index)) / this.width;
    }
    getHintId(index) {
        return `${this.autoId}_${index}`;
    }
    getImplicit($implicit) {
        return (this.hintDirective?.getContext(this.value.indexOf($implicit), this) ?? $implicit);
    }
    getHovered(hovered) {
        // This checks for NaN and null too since async pipe returns null before first item
        return tuiIsPresent(hovered) && Number.isInteger(hovered)
            ? (this.value[hovered] ?? null)
            : null;
    }
    getBottom(y) {
        return (100 * (y - this.y)) / this.height;
    }
    getLeft(x) {
        return (100 * (x - this.x)) / this.width;
    }
    getOffset(x) {
        return (100 * ((this.value[x]?.[0] || 0) - this.getX(x))) / this.computeWidth(x);
    }
    onMouseEnter(index) {
        if (this.hintDirective) {
            this.hintDirective.raise(index, this);
        }
        else {
            this.onHovered(index);
        }
    }
    get isSinglePoint() {
        return this.value.length === 1;
    }
    getD(value, smoothingFactor) {
        return value.reduce((d, point, index) => index ? `${d} ${tuiDraw(value, index, smoothingFactor)}` : `M ${point}`, '');
    }
    computeWidth(index) {
        return index === this.value.length - 1
            ? 2 * ((this.value[index]?.[0] || 0) - this.getX(index))
            : this.getX(index + 1) - this.getX(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineChart, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineChart, isStandalone: true, selector: "tui-line-chart", inputs: { x: "x", y: "y", width: "width", height: "height", smoothingFactor: "smoothingFactor", xStringify: "xStringify", yStringify: "yStringify", filled: "filled", dots: "dots", valueSetter: ["value", "valueSetter"] }, host: { listeners: { "mouseleave": "onMouseLeave()" } }, providers: [ResizeObserverService], viewQueries: [{ propertyName: "drivers", predicate: TuiHintHover, descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-container *tuiLet=\"hovered$ | async as hovered\">\n    <svg\n        focusable=\"false\"\n        height=\"100%\"\n        preserveAspectRatio=\"none\"\n        width=\"100%\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        class=\"t-svg\"\n        [attr.viewBox]=\"viewBox()\"\n    >\n        <defs>\n            <linearGradient\n                x1=\"0\"\n                x2=\"0\"\n                y1=\"1\"\n                y2=\"0\"\n                [attr.id]=\"fillId\"\n            >\n                <stop\n                    offset=\"0%\"\n                    stop-color=\"currentColor\"\n                    stop-opacity=\"0.5\"\n                />\n                <stop\n                    offset=\"100%\"\n                    stop-color=\"currentColor\"\n                    stop-opacity=\"0\"\n                />\n            </linearGradient>\n        </defs>\n        <path\n            stroke=\"none\"\n            [attr.d]=\"fillD\"\n            [attr.fill]=\"fill\"\n        />\n        <path\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            vector-effect=\"non-scaling-stroke\"\n            [attr.d]=\"d\"\n        />\n    </svg>\n    <ng-container *ngIf=\"dots\">\n        <div\n            *ngFor=\"let point of value\"\n            class=\"t-dot\"\n            [style.bottom.%]=\"getBottom(point[1])\"\n            [style.left.%]=\"getLeft(point[0])\"\n        ></div>\n    </ng-container>\n    <ng-container *ngIf=\"hasHints\">\n        <ng-container *ngFor=\"let point of value; let index = index\">\n            <!-- TODO: Fix hint type -->\n            <div\n                *ngIf=\"value.length > 1 || dots\"\n                class=\"t-column\"\n                [class.t-column_hint_hovered]=\"drivers.get(index) | async\"\n                [class.t-column_hovered]=\"hovered === index\"\n                [style.left.%]=\"getLeft(getX(index))\"\n                [style.width.%]=\"getWidth(index)\"\n                [tuiHint]=\"$any(hintDirective?.hint || hintContent)\"\n                [tuiHintContext]=\"{$implicit: getImplicit(point), index: index}\"\n                [tuiHintDescribe]=\"isFocusable ? getHintId(index) : null\"\n                [tuiHintHost]=\"hintHost\"\n                (mouseenter)=\"onMouseEnter(index)\"\n            >\n                <div\n                    class=\"t-line t-line_vertical\"\n                    [style.left.%]=\"getOffset(index)\"\n                ></div>\n                <div\n                    #hintHost\n                    class=\"t-host\"\n                    [id]=\"getHintId(index)\"\n                    [style.bottom.%]=\"getBottom(point[1])\"\n                    [style.left.%]=\"getOffset(index)\"\n                    [tabIndex]=\"isFocusable ? 0 : -1\"\n                ></div>\n            </div>\n            <div\n                *ngIf=\"isFocusable\"\n                class=\"t-line t-line_horizontal\"\n                [style.bottom.%]=\"getBottom(point[1])\"\n            ></div>\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"getHovered(hovered) as point\">\n        <div\n            *ngIf=\"xStringify\"\n            class=\"t-hint t-hint_x\"\n            [style.left.%]=\"getLeft(point[0])\"\n        >\n            {{ xStringify(point[0]) }}\n        </div>\n        <div\n            *ngIf=\"yStringify\"\n            class=\"t-hint t-hint_y\"\n            [style.bottom.%]=\"getBottom(point[1])\"\n        >\n            {{ yStringify(point[1]) }}\n        </div>\n    </ng-container>\n</ng-container>\n", styles: [":host{display:flex;inline-size:100%;block-size:100%;pointer-events:none}.t-svg{block-size:calc(100% + 1px);transform:scaleY(-1);margin:-.03125rem 0}.t-column{position:absolute;top:0;block-size:100%;pointer-events:auto}.t-dot{position:absolute;inline-size:.375rem;block-size:.375rem;border-radius:100%;background:currentColor;margin:-.1875rem;box-shadow:0 0 0 2px #fff}.t-host{position:absolute;left:50%;inline-size:.5rem;block-size:.5rem;border-radius:100%;opacity:0;background:#fff;margin:-.25rem;box-shadow:0 0 0 2px currentColor,0 .0625rem .1875rem .125rem #0000001a;outline:none;pointer-events:none}.t-host:focus,.t-column_hovered .t-host,.t-column:hover .t-host,.t-column_hint_hovered .t-host{opacity:1}.t-line{position:absolute;opacity:0;background:var(--tui-border-normal)}.t-line_vertical{top:0;bottom:0;left:50%;inline-size:1px}.t-line_horizontal{z-index:-1;inline-size:100%;block-size:1px}:host[style^=\"z-index: 0\"] .t-column_hovered .t-line,:host:not([style]) .t-column:hover .t-line,:host:not([style]) .t-column_hint_hovered .t-line,:host[style^=\"z-index: 0\"] .t-column_hovered+.t-line,:host:not([style]) .t-column:hover+.t-line,:host:not([style]) .t-column_hint_hovered+.t-line{opacity:1}.t-hint{position:absolute;box-shadow:var(--tui-shadow-small);font:var(--tui-font-text-xs);block-size:1.25rem;line-height:1.25rem;margin-bottom:-.625rem;padding:0 .375rem;white-space:nowrap;color:var(--tui-text-primary);background:var(--tui-background-base);transform:translate3d(-50%,0,0)}.t-hint_x{bottom:0}.t-hint_y{left:0}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.TuiHintDirective, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: ["tuiHintContext", "tuiHintAppearance", "tuiHint"] }, { kind: "directive", type: i1.TuiHintDescribe, selector: "[tuiHintDescribe]", inputs: ["tuiHintDescribe"] }, { kind: "directive", type: i1.TuiHintHost, selector: "[tuiHint][tuiHintHost]", inputs: ["tuiHintHost"] }, { kind: "directive", type: TuiLet, selector: "[tuiLet]", inputs: ["tuiLet"] }], viewProviders: [tuiHintOptionsProvider({ direction: 'top', hideDelay: 0 })], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiLineChart.prototype, "hovered$", null);
__decorate([
    tuiPure
], TuiLineChart.prototype, "getD", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineChart, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-line-chart', imports: [AsyncPipe, NgForOf, NgIf, TuiHint, TuiLet], changeDetection: ChangeDetectionStrategy.OnPush, providers: [ResizeObserverService], viewProviders: [tuiHintOptionsProvider({ direction: 'top', hideDelay: 0 })], host: {
                        '(mouseleave)': 'onMouseLeave()',
                    }, template: "<ng-container *tuiLet=\"hovered$ | async as hovered\">\n    <svg\n        focusable=\"false\"\n        height=\"100%\"\n        preserveAspectRatio=\"none\"\n        width=\"100%\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        class=\"t-svg\"\n        [attr.viewBox]=\"viewBox()\"\n    >\n        <defs>\n            <linearGradient\n                x1=\"0\"\n                x2=\"0\"\n                y1=\"1\"\n                y2=\"0\"\n                [attr.id]=\"fillId\"\n            >\n                <stop\n                    offset=\"0%\"\n                    stop-color=\"currentColor\"\n                    stop-opacity=\"0.5\"\n                />\n                <stop\n                    offset=\"100%\"\n                    stop-color=\"currentColor\"\n                    stop-opacity=\"0\"\n                />\n            </linearGradient>\n        </defs>\n        <path\n            stroke=\"none\"\n            [attr.d]=\"fillD\"\n            [attr.fill]=\"fill\"\n        />\n        <path\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            vector-effect=\"non-scaling-stroke\"\n            [attr.d]=\"d\"\n        />\n    </svg>\n    <ng-container *ngIf=\"dots\">\n        <div\n            *ngFor=\"let point of value\"\n            class=\"t-dot\"\n            [style.bottom.%]=\"getBottom(point[1])\"\n            [style.left.%]=\"getLeft(point[0])\"\n        ></div>\n    </ng-container>\n    <ng-container *ngIf=\"hasHints\">\n        <ng-container *ngFor=\"let point of value; let index = index\">\n            <!-- TODO: Fix hint type -->\n            <div\n                *ngIf=\"value.length > 1 || dots\"\n                class=\"t-column\"\n                [class.t-column_hint_hovered]=\"drivers.get(index) | async\"\n                [class.t-column_hovered]=\"hovered === index\"\n                [style.left.%]=\"getLeft(getX(index))\"\n                [style.width.%]=\"getWidth(index)\"\n                [tuiHint]=\"$any(hintDirective?.hint || hintContent)\"\n                [tuiHintContext]=\"{$implicit: getImplicit(point), index: index}\"\n                [tuiHintDescribe]=\"isFocusable ? getHintId(index) : null\"\n                [tuiHintHost]=\"hintHost\"\n                (mouseenter)=\"onMouseEnter(index)\"\n            >\n                <div\n                    class=\"t-line t-line_vertical\"\n                    [style.left.%]=\"getOffset(index)\"\n                ></div>\n                <div\n                    #hintHost\n                    class=\"t-host\"\n                    [id]=\"getHintId(index)\"\n                    [style.bottom.%]=\"getBottom(point[1])\"\n                    [style.left.%]=\"getOffset(index)\"\n                    [tabIndex]=\"isFocusable ? 0 : -1\"\n                ></div>\n            </div>\n            <div\n                *ngIf=\"isFocusable\"\n                class=\"t-line t-line_horizontal\"\n                [style.bottom.%]=\"getBottom(point[1])\"\n            ></div>\n        </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"getHovered(hovered) as point\">\n        <div\n            *ngIf=\"xStringify\"\n            class=\"t-hint t-hint_x\"\n            [style.left.%]=\"getLeft(point[0])\"\n        >\n            {{ xStringify(point[0]) }}\n        </div>\n        <div\n            *ngIf=\"yStringify\"\n            class=\"t-hint t-hint_y\"\n            [style.bottom.%]=\"getBottom(point[1])\"\n        >\n            {{ yStringify(point[1]) }}\n        </div>\n    </ng-container>\n</ng-container>\n", styles: [":host{display:flex;inline-size:100%;block-size:100%;pointer-events:none}.t-svg{block-size:calc(100% + 1px);transform:scaleY(-1);margin:-.03125rem 0}.t-column{position:absolute;top:0;block-size:100%;pointer-events:auto}.t-dot{position:absolute;inline-size:.375rem;block-size:.375rem;border-radius:100%;background:currentColor;margin:-.1875rem;box-shadow:0 0 0 2px #fff}.t-host{position:absolute;left:50%;inline-size:.5rem;block-size:.5rem;border-radius:100%;opacity:0;background:#fff;margin:-.25rem;box-shadow:0 0 0 2px currentColor,0 .0625rem .1875rem .125rem #0000001a;outline:none;pointer-events:none}.t-host:focus,.t-column_hovered .t-host,.t-column:hover .t-host,.t-column_hint_hovered .t-host{opacity:1}.t-line{position:absolute;opacity:0;background:var(--tui-border-normal)}.t-line_vertical{top:0;bottom:0;left:50%;inline-size:1px}.t-line_horizontal{z-index:-1;inline-size:100%;block-size:1px}:host[style^=\"z-index: 0\"] .t-column_hovered .t-line,:host:not([style]) .t-column:hover .t-line,:host:not([style]) .t-column_hint_hovered .t-line,:host[style^=\"z-index: 0\"] .t-column_hovered+.t-line,:host:not([style]) .t-column:hover+.t-line,:host:not([style]) .t-column_hint_hovered+.t-line{opacity:1}.t-hint{position:absolute;box-shadow:var(--tui-shadow-small);font:var(--tui-font-text-xs);block-size:1.25rem;line-height:1.25rem;margin-bottom:-.625rem;padding:0 .375rem;white-space:nowrap;color:var(--tui-text-primary);background:var(--tui-background-base);transform:translate3d(-50%,0,0)}.t-hint_x{bottom:0}.t-hint_y{left:0}\n"] }]
        }], propDecorators: { drivers: [{
                type: ViewChildren,
                args: [TuiHintHover]
            }], x: [{
                type: Input
            }], y: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], smoothingFactor: [{
                type: Input
            }], xStringify: [{
                type: Input
            }], yStringify: [{
                type: Input
            }], filled: [{
                type: Input
            }], dots: [{
                type: Input
            }], valueSetter: [{
                type: Input,
                args: ['value']
            }], hovered$: [], getD: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_LINE_CHART_DEFAULT_OPTIONS, TUI_LINE_CHART_OPTIONS, TuiLineChart, TuiLineChartHint, tuiLineChartDrivers, tuiLineChartOptionsProvider };
//# sourceMappingURL=taiga-ui-addon-charts-components-line-chart.mjs.map
