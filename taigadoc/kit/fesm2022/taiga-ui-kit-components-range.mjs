import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Directive, Output, signal, computed, ElementRef, Component, ChangeDetectionStrategy, Input, ViewChildren } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TuiControl } from '@taiga-ui/cdk/classes';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiFallbackValueProvider } from '@taiga-ui/cdk/tokens';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiClamp, tuiRound, tuiQuantize } from '@taiga-ui/cdk/utils/math';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i3 from '@taiga-ui/kit/components/slider';
import { TUI_FLOATING_PRECISION, TUI_SLIDER_OPTIONS, tuiPercentageToKeyStepValue, tuiKeyStepValueToPercentage, TuiSliderComponent, TuiSlider } from '@taiga-ui/kit/components/slider';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { merge, filter, map, tap, switchMap, startWith, takeUntil, repeat } from 'rxjs';

class TuiRangeChange {
    constructor() {
        this.doc = inject(DOCUMENT);
        this.el = tuiInjectElement();
        this.range = inject(TuiRange);
        /**
         * TODO replace with pointer events (when all supported browsers can handle them).
         * Don't forget to use setPointerCapture instead of listening all doc events
         */
        this.pointerDown$ = tuiTypedFromEvent(this.el, 'pointerdown', {
            passive: true,
            capture: true,
        });
        this.pointerMove$ = merge(tuiTypedFromEvent(this.doc, 'touchmove').pipe(filter(({ touches }) => touches.length === 1), map(({ touches }) => touches[0]), filter((event) => !!event)), tuiTypedFromEvent(this.doc, 'mousemove'));
        this.pointerUp$ = merge(tuiTypedFromEvent(this.doc, 'touchend', { passive: true }), tuiTypedFromEvent(this.doc, 'mouseup', { passive: true }));
        this.activeThumbChange = new EventEmitter();
        let activeThumb;
        this.pointerDown$
            .pipe(tap(({ clientX, target }) => {
            activeThumb = this.detectActiveThumb(clientX, target);
            this.activeThumbChange.emit(activeThumb);
            if (this.range.focusable) {
                this.el.focus();
            }
        }), switchMap((event) => this.pointerMove$.pipe(startWith(event))), map(({ clientX }) => this.getFractionFromEvents(clientX ?? 0)), takeUntil(this.pointerUp$), repeat(), takeUntilDestroyed())
            .subscribe((fraction) => {
            const value = this.range.toValue(fraction);
            this.range.processValue(value, activeThumb === 'right');
        });
    }
    getFractionFromEvents(clickClientX) {
        const hostRect = this.el.getBoundingClientRect();
        const value = clickClientX - hostRect.left;
        const total = hostRect.width;
        return tuiClamp(tuiRound(value / total, TUI_FLOATING_PRECISION), 0, 1);
    }
    detectActiveThumb(clientX, target) {
        const [leftSliderRef, rightSliderRef] = this.range.slidersRefs;
        switch (target) {
            case leftSliderRef?.nativeElement:
                return 'left';
            case rightSliderRef?.nativeElement:
                return 'right';
            default:
                return this.findNearestActiveThumb(clientX);
        }
    }
    findNearestActiveThumb(clientX) {
        const fraction = this.getFractionFromEvents(clientX);
        const deltaLeft = fraction * 100 - this.range.left();
        const deltaRight = fraction * 100 - 100 + this.range.right();
        return Math.abs(deltaLeft) > Math.abs(deltaRight) ||
            deltaRight > 0 ||
            (this.range.left() === 0 && this.range.right() === 100)
            ? 'right'
            : 'left';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRangeChange, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiRangeChange, isStandalone: true, outputs: { activeThumbChange: "activeThumbChange" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRangeChange, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { activeThumbChange: [{
                type: Output
            }] } });

class TuiRange extends TuiControl {
    constructor() {
        super(...arguments);
        // TODO: refactor to signal inputs after Angular update
        this.changes = signal(1);
        this.el = tuiInjectElement();
        this.options = inject(TUI_SLIDER_OPTIONS);
        this.lastActiveThumb = 'right';
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.size = this.options.size;
        this.segments = 1;
        this.keySteps = null;
        this.focusable = true;
        this.margin = 0;
        this.limit = Infinity;
        this.slidersRefs = EMPTY_QUERY;
        this.left = computed(() => this.toPercent(this.value()[0]));
        this.right = computed(() => 100 - this.toPercent(this.value()[1]));
    }
    ngOnChanges() {
        this.changes.set(this.changes() + 1);
    }
    processValue(value, right) {
        if (right) {
            this.updateEnd(value);
        }
        else {
            this.updateStart(value);
        }
        this.lastActiveThumb = right ? 'right' : 'left';
    }
    toValue(fraction) {
        return tuiPercentageToKeyStepValue(tuiClamp(tuiQuantize(fraction, this.fractionStep), 0, 1) * 100, this.computedKeySteps);
    }
    get fractionStep() {
        return this.step / (this.max - this.min);
    }
    get computedKeySteps() {
        return this.computePureKeySteps(this.keySteps, this.min, this.max);
    }
    get segmentWidthRatio() {
        return 1 / this.segments;
    }
    changeByStep(coefficient, target) {
        const [sliderLeftRef, sliderRightRef] = this.slidersRefs;
        const leftThumbElement = sliderLeftRef?.nativeElement;
        const rightThumbElement = sliderRightRef?.nativeElement;
        const isRightThumb = target === this.el
            ? this.lastActiveThumb === 'right'
            : target === rightThumbElement;
        const activeThumbElement = isRightThumb ? rightThumbElement : leftThumbElement;
        const previousValue = isRightThumb ? this.value()[1] : this.value()[0];
        /** @bad TODO think about a solution without twice conversion */
        const previousFraction = this.toPercent(previousValue) / 100;
        const newFractionValue = previousFraction + coefficient * this.fractionStep;
        this.processValue(this.toValue(newFractionValue), isRightThumb);
        activeThumbElement?.focus();
    }
    toPercent(value) {
        return (this.changes() && tuiKeyStepValueToPercentage(value, this.computedKeySteps));
    }
    computePureKeySteps(keySteps, min, max) {
        return (keySteps || [
            [0, min],
            [100, max],
        ]);
    }
    updateStart(value) {
        const newValue = Math.min(value, this.value()[1]);
        const distance = this.value()[1] - newValue;
        if (!this.checkDistance(distance)) {
            return;
        }
        this.onChange([newValue, this.value()[1]]);
    }
    updateEnd(value) {
        const newValue = Math.max(value, this.value()[0]);
        const distance = newValue - this.value()[0];
        if (!this.checkDistance(distance)) {
            return;
        }
        this.onChange([this.value()[0], newValue]);
    }
    checkDistance(distance) {
        return tuiClamp(distance, this.margin, this.limit) === distance;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRange, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiRange, isStandalone: true, selector: "tui-range", inputs: { min: "min", max: "max", step: "step", size: "size", segments: "segments", keySteps: "keySteps", focusable: "focusable", margin: "margin", limit: "limit" }, host: { listeners: { "focusout": "onTouched()", "keydown.arrowUp.prevent": "changeByStep(1, $event.target)", "keydown.arrowRight.prevent": "changeByStep(1, $event.target)", "keydown.arrowLeft.prevent": "changeByStep(-1, $event.target)", "keydown.arrowDown.prevent": "changeByStep(-1, $event.target)" }, properties: { "attr.data-size": "size", "attr.tabindex": "-1", "attr.aria-disabled": "disabled()", "style.--left.%": "left()", "style.--right.%": "right()", "style.background": "options.trackColor", "class._disabled": "disabled()" } }, providers: [tuiFallbackValueProvider([0, 0])], viewQueries: [{ propertyName: "slidersRefs", predicate: TuiSliderComponent, descendants: true, read: ElementRef }], usesInheritance: true, usesOnChanges: true, hostDirectives: [{ directive: TuiRangeChange, outputs: ["activeThumbChange", "activeThumbChange"] }], ngImport: i0, template: "<div\n    class=\"t-track\"\n    [style.--bg-size-ratio]=\"1 - segmentWidthRatio\"\n    [style.--segment-width.%]=\"segmentWidthRatio * 100\"\n>\n    <input\n        automation-id=\"tui-range__left\"\n        readonly\n        step=\"any\"\n        tuiSlider\n        type=\"range\"\n        class=\"t-thumb\"\n        [disabled]=\"disabled()\"\n        [keySteps]=\"computedKeySteps\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [ngModel]=\"value()[0]\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [size]=\"size\"\n        [tabIndex]=\"focusable ? 0 : -1\"\n    />\n    <input\n        automation-id=\"tui-range__right\"\n        readonly\n        step=\"any\"\n        tuiSlider\n        type=\"range\"\n        class=\"t-thumb\"\n        [disabled]=\"disabled()\"\n        [keySteps]=\"computedKeySteps\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [ngModel]=\"value()[1]\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [size]=\"size\"\n        [tabIndex]=\"focusable ? 0 : -1\"\n    />\n</div>\n", styles: [":host{position:relative;display:block;block-size:.125rem;border-radius:var(--tui-radius-m);background:var(--tui-border-normal);cursor:pointer;outline:none;margin:.4375rem 0;touch-action:pan-x}:host:active{cursor:ew-resize}:host:after{content:\"\";position:absolute;top:-.4375rem;bottom:-.4375rem;inline-size:100%}:host._disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}:host[data-size=s] .t-track{position:relative;margin:0 .25rem;block-size:100%}:host[data-size=s] .t-track:before{content:\"\";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.25rem}:host[data-size=s] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";left:.125rem;right:.375rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}:host[data-size=m] .t-track{position:relative;margin:0 .375rem;block-size:100%}:host[data-size=m] .t-track:before{content:\"\";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.375rem}:host[data-size=m] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";left:.25rem;right:.5rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}.t-thumb{pointer-events:none;position:absolute;top:.0625rem;left:0;right:0;z-index:1;transform:translateY(-50%)}.t-thumb::-webkit-slider-thumb{pointer-events:all}.t-thumb::-moz-range-thumb{pointer-events:all}input[type=range].t-thumb::-webkit-slider-runnable-track{background:transparent}input[type=range].t-thumb::-moz-range-track{background:transparent}input[type=range].t-thumb::-moz-range-progress{background:transparent}input[type=range].t-thumb::-ms-track{background:transparent}input[type=range].t-thumb::-ms-fill-lower{background:transparent}.t-thumb:last-of-type{--tui-slider-thumb-transform: translateX(50%) translateX(1px)}.t-thumb:first-of-type{--tui-slider-thumb-transform: translateX(-50%) translateX(-1px)}:host._disabled .t-thumb{opacity:1}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.TuiSliderComponent, selector: "input[type=range][tuiSlider]", inputs: ["size", "segments"] }, { kind: "directive", type: i3.TuiSliderKeySteps, selector: "input[tuiSlider][keySteps]", inputs: ["keySteps"] }, { kind: "directive", type: i3.TuiSliderReadonly, selector: "input[tuiSlider][readonly]", inputs: ["readonly"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiRange.prototype, "computePureKeySteps", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRange, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-range', imports: [FormsModule, TuiSlider], changeDetection: ChangeDetectionStrategy.OnPush, providers: [tuiFallbackValueProvider([0, 0])], hostDirectives: [
                        {
                            directive: TuiRangeChange,
                            outputs: ['activeThumbChange'],
                        },
                    ], host: {
                        '[attr.data-size]': 'size',
                        '[attr.tabindex]': '-1',
                        '[attr.aria-disabled]': 'disabled()',
                        '[style.--left.%]': 'left()',
                        '[style.--right.%]': 'right()',
                        '[style.background]': 'options.trackColor',
                        '[class._disabled]': 'disabled()',
                        '(focusout)': 'onTouched()',
                        '(keydown.arrowUp.prevent)': 'changeByStep(1, $event.target)',
                        '(keydown.arrowRight.prevent)': 'changeByStep(1, $event.target)',
                        '(keydown.arrowLeft.prevent)': 'changeByStep(-1, $event.target)',
                        '(keydown.arrowDown.prevent)': 'changeByStep(-1, $event.target)',
                    }, template: "<div\n    class=\"t-track\"\n    [style.--bg-size-ratio]=\"1 - segmentWidthRatio\"\n    [style.--segment-width.%]=\"segmentWidthRatio * 100\"\n>\n    <input\n        automation-id=\"tui-range__left\"\n        readonly\n        step=\"any\"\n        tuiSlider\n        type=\"range\"\n        class=\"t-thumb\"\n        [disabled]=\"disabled()\"\n        [keySteps]=\"computedKeySteps\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [ngModel]=\"value()[0]\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [size]=\"size\"\n        [tabIndex]=\"focusable ? 0 : -1\"\n    />\n    <input\n        automation-id=\"tui-range__right\"\n        readonly\n        step=\"any\"\n        tuiSlider\n        type=\"range\"\n        class=\"t-thumb\"\n        [disabled]=\"disabled()\"\n        [keySteps]=\"computedKeySteps\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [ngModel]=\"value()[1]\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [size]=\"size\"\n        [tabIndex]=\"focusable ? 0 : -1\"\n    />\n</div>\n", styles: [":host{position:relative;display:block;block-size:.125rem;border-radius:var(--tui-radius-m);background:var(--tui-border-normal);cursor:pointer;outline:none;margin:.4375rem 0;touch-action:pan-x}:host:active{cursor:ew-resize}:host:after{content:\"\";position:absolute;top:-.4375rem;bottom:-.4375rem;inline-size:100%}:host._disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}:host[data-size=s] .t-track{position:relative;margin:0 .25rem;block-size:100%}:host[data-size=s] .t-track:before{content:\"\";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.25rem}:host[data-size=s] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";left:.125rem;right:.375rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}:host[data-size=m] .t-track{position:relative;margin:0 .375rem;block-size:100%}:host[data-size=m] .t-track:before{content:\"\";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.375rem}:host[data-size=m] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";left:.25rem;right:.5rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}.t-thumb{pointer-events:none;position:absolute;top:.0625rem;left:0;right:0;z-index:1;transform:translateY(-50%)}.t-thumb::-webkit-slider-thumb{pointer-events:all}.t-thumb::-moz-range-thumb{pointer-events:all}input[type=range].t-thumb::-webkit-slider-runnable-track{background:transparent}input[type=range].t-thumb::-moz-range-track{background:transparent}input[type=range].t-thumb::-moz-range-progress{background:transparent}input[type=range].t-thumb::-ms-track{background:transparent}input[type=range].t-thumb::-ms-fill-lower{background:transparent}.t-thumb:last-of-type{--tui-slider-thumb-transform: translateX(50%) translateX(1px)}.t-thumb:first-of-type{--tui-slider-thumb-transform: translateX(-50%) translateX(-1px)}:host._disabled .t-thumb{opacity:1}\n"] }]
        }], propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], size: [{
                type: Input
            }], segments: [{
                type: Input
            }], keySteps: [{
                type: Input
            }], focusable: [{
                type: Input
            }], margin: [{
                type: Input
            }], limit: [{
                type: Input
            }], slidersRefs: [{
                type: ViewChildren,
                args: [TuiSliderComponent, { read: ElementRef }]
            }], computePureKeySteps: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiRange, TuiRangeChange };
//# sourceMappingURL=taiga-ui-kit-components-range.mjs.map
