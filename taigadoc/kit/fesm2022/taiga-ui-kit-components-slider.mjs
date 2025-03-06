import { tuiRound, tuiClamp } from '@taiga-ui/cdk/utils/math';
import * as i0 from '@angular/core';
import { inject, INJECTOR, Component, ChangeDetectionStrategy, Input, forwardRef, Directive, ContentChild } from '@angular/core';
import { TuiControl } from '@taiga-ui/cdk/classes';
import { tuiFallbackValueProvider } from '@taiga-ui/cdk/tokens';
import { __decorate } from 'tslib';
import { NgControl, NgModel } from '@angular/forms';
import { tuiWatch, tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiCreateToken, tuiProvideOptions, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { take, merge, tap, map, combineLatest, filter } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOCUMENT, AsyncPipe, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TUI_TRUE_HANDLER, TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';

/**
 * Used as a limit for eliminating JS issues with floating point math
 */
const TUI_FLOATING_PRECISION = 7;
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
    const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
    const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
    const upperStep = keySteps[keyStepUpperIndex] ||
        keySteps[keySteps.length - 1] || [0, 0];
    return [lowerStep, upperStep];
}
function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
    const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
    const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
    const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
    return tuiRound(controlValue, TUI_FLOATING_PRECISION);
}
function tuiKeyStepValueToPercentage(value, keySteps) {
    const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
    const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
    return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}

const TUI_SLIDER_DEFAULT_OPTIONS = {
    size: 'm',
    trackColor: 'var(--tui-background-neutral-2)',
};
/**
 * Default parameters for Slider component
 */
const TUI_SLIDER_OPTIONS = tuiCreateToken(TUI_SLIDER_DEFAULT_OPTIONS);
function tuiSliderOptionsProvider(options) {
    return tuiProvideOptions(TUI_SLIDER_OPTIONS, options, TUI_SLIDER_DEFAULT_OPTIONS);
}

class TuiSliderComponent {
    constructor() {
        this.injector = inject(INJECTOR);
        this.control = inject(NgControl, { self: true, optional: true });
        this.options = inject(TUI_SLIDER_OPTIONS);
        this.size = this.options.size;
        this.segments = 1;
        this.el = tuiInjectElement();
        if (this.control instanceof NgModel) {
            /**
             * The ValueAccessor.writeValue method is called twice on any value accessor during component initialization,
             * when a control is bound using [(ngModel)], first time with a phantom null value.
             * With `changeDetection: ChangeDetectionStrategy.OnPush` the second call of writeValue with real value don't re-render the view.
             * ___
             * See this {@link https://github.com/angular/angular/issues/14988 issue}
             */
            this.control.valueChanges?.pipe(tuiWatch(), take(1)).subscribe();
        }
    }
    get valueRatio() {
        return (this.value - this.min) / (this.max - this.min) || 0;
    }
    get min() {
        return Number(this.el.min);
    }
    get max() {
        return Number(this.el.max || 100);
    }
    get value() {
        if (!this.hasKeySteps && this.control instanceof NgModel) {
            /**
             * If developer uses `[(ngModel)]` and programmatically change value,
             * the `el.nativeElement.value` is equal to the previous value at this moment.
             */
            return this.control.viewModel;
        }
        return Number(this.el.value) || 0;
    }
    set value(newValue) {
        this.el.value = `${newValue}`;
    }
    get hasKeySteps() {
        return Boolean(this.injector.get(TuiSliderKeySteps, null));
    }
    get segmentWidth() {
        return 100 / Math.max(1, this.segments);
    }
    get step() {
        return Number(this.el.step) || 1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSliderComponent, isStandalone: true, selector: "input[type=range][tuiSlider]", inputs: { size: "size", segments: "segments" }, host: { listeners: { "input": "0" }, properties: { "style.--tui-slider-track-color": "options.trackColor", "style.--tui-slider-segment-width.%": "segmentWidth", "style.--tui-slider-fill-ratio": "valueRatio", "attr.data-size": "size" } }, ngImport: i0, template: '', isInline: true, styles: [":host{position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}:host:active{cursor:ew-resize}:host:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}:host[data-size=s]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:\"\";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=s]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host[data-size=m]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:\"\";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=m]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host::-webkit-slider-container{border-radius:inherit}:host[data-size=m]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}:host[data-size=s]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}:host[data-size=m]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}:host[data-size=s]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}:host[data-size=m]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=m]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=m]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=s]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=s]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=m]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=m]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=m]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=s]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=s]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host::-moz-range-progress{border-radius:inherit}:host::-moz-range-progress{block-size:.125rem;background:currentColor;border-start-end-radius:0;border-end-end-radius:0}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiSliderComponent.prototype, "hasKeySteps", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'input[type=range][tuiSlider]', template: '', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        /**
                         * For change detection.
                         * Webkit does not have built-in method for customization of filling progress (as Firefox).
                         * We draw filling of progress by `background: linear-gradient(...)` of the track.
                         * This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
                         */
                        '(input)': '0',
                        '[style.--tui-slider-track-color]': 'options.trackColor',
                        '[style.--tui-slider-segment-width.%]': 'segmentWidth',
                        '[style.--tui-slider-fill-ratio]': 'valueRatio',
                        '[attr.data-size]': 'size',
                    }, styles: [":host{position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}:host:active{cursor:ew-resize}:host:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}:host[data-size=s]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:\"\";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=s]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host[data-size=m]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:\"\";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=m]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host::-webkit-slider-container{border-radius:inherit}:host[data-size=m]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}:host[data-size=s]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}:host[data-size=m]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}:host[data-size=s]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}:host[data-size=m]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=m]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=m]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=s]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=s]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=m]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=m]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=m]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=s]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=s]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host::-moz-range-progress{border-radius:inherit}:host::-moz-range-progress{block-size:.125rem;background:currentColor;border-start-end-radius:0;border-end-end-radius:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { size: [{
                type: Input
            }], segments: [{
                type: Input
            }], hasKeySteps: [] } });

class TuiSliderKeySteps extends TuiControl {
    constructor() {
        super(...arguments);
        this.slider = inject(forwardRef(() => TuiSliderComponent));
    }
    writeValue(controlValue) {
        if (controlValue === null) {
            return;
        }
        const clampedControlValue = tuiClamp(controlValue, this.min, this.max);
        ngDevMode &&
            console.assert(controlValue === clampedControlValue, '\n[SliderKeySteps]: You cannot programmatically set value which is less/more than min/max');
        this.slider.value = this.transformToNativeValue(clampedControlValue);
    }
    get min() {
        return this.keySteps[0][1];
    }
    get max() {
        return this.keySteps[this.keySteps.length - 1]?.[1] ?? 0;
    }
    updateControlValue() {
        this.onChange(tuiPercentageToKeyStepValue(this.slider.valueRatio * 100, this.keySteps));
    }
    transformToNativeValue(controlValue) {
        const { min, max } = this.slider;
        const newValuePercentage = tuiKeyStepValueToPercentage(controlValue, this.keySteps);
        return (newValuePercentage * (max - min)) / 100 + min;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderKeySteps, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiSliderKeySteps, isStandalone: true, selector: "input[tuiSlider][keySteps]", inputs: { keySteps: "keySteps" }, host: { listeners: { "blur": "onTouched()", "input": "updateControlValue()", "change": "updateControlValue()" }, properties: { "attr.aria-valuenow": "value()", "attr.aria-valuemin": "min", "attr.aria-valuemax": "max", "disabled": "disabled()" } }, providers: [tuiFallbackValueProvider(0)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderKeySteps, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[tuiSlider][keySteps]',
                    providers: [tuiFallbackValueProvider(0)],
                    host: {
                        '[attr.aria-valuenow]': 'value()',
                        '[attr.aria-valuemin]': 'min',
                        '[attr.aria-valuemax]': 'max',
                        '[disabled]': 'disabled()',
                        '(blur)': 'onTouched()',
                        '(input)': 'updateControlValue()',
                        '(change)': 'updateControlValue()',
                    },
                }]
        }], propDecorators: { keySteps: [{
                type: Input
            }] } });

const SLIDER_INTERACTION_KEYS = new Set([
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'End',
    'Home',
    'PageDown',
    'PageUp',
]);
/**
 * Native <input type='range' readonly> doesn't work.
 * This directive imitates this native behaviour.
 */
class TuiSliderReadonly {
    constructor() {
        this.el = tuiInjectElement();
        this.doc = inject(DOCUMENT);
        this.readonly = true;
        const touchStart$ = tuiTypedFromEvent(this.el, 'touchstart', {
            passive: false,
        });
        const touchMove$ = tuiTypedFromEvent(this.doc, 'touchmove', {
            passive: false,
        });
        const touchEnd$ = tuiTypedFromEvent(this.doc, 'touchend', {
            passive: true,
        });
        const shouldPreventMove$ = merge(touchStart$.pipe(tap((e) => this.preventEvent(e)), map(TUI_TRUE_HANDLER)), touchEnd$.pipe(map(TUI_FALSE_HANDLER)));
        /**
         * @bad TODO think about another solution.
         * Keep in mind that preventing touch event (on slider) inside `@HostListener('touchstart')` doesn't work for mobile chrome.
         */
        combineLatest([touchMove$, shouldPreventMove$])
            .pipe(filter(([_, shouldPreventMove]) => shouldPreventMove), takeUntilDestroyed())
            .subscribe(([moveEvent]) => this.preventEvent(moveEvent));
    }
    preventEvent(event) {
        if (event.cancelable && this.readonly) {
            event.preventDefault();
        }
    }
    preventKeyboardInteraction(event) {
        if (SLIDER_INTERACTION_KEYS.has(event.key)) {
            this.preventEvent(event);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderReadonly, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: TuiSliderReadonly, isStandalone: true, selector: "input[tuiSlider][readonly]", inputs: { readonly: ["readonly", "readonly", coerceBooleanProperty] }, host: { listeners: { "keydown": "preventKeyboardInteraction($event)", "mousedown": "preventEvent($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderReadonly, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[tuiSlider][readonly]',
                    host: {
                        '(keydown)': 'preventKeyboardInteraction($event)',
                        '(mousedown)': 'preventEvent($event)',
                    },
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { readonly: [{
                type: Input,
                args: [{ transform: coerceBooleanProperty }]
            }] } });

/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
class TuiSliderThumbLabel {
    ngAfterContentInit() {
        ngDevMode &&
            console.assert(Boolean(this.control?.valueChanges), '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\n' +
                'Use [(ngModel)] or [formControl] or formControlName for correct work.');
    }
    get size() {
        return this.slider?.size || 'm';
    }
    get ratio() {
        return this.slider?.valueRatio || 0;
    }
    get ghostLeft() {
        return this.ratio * (this.slider?.el.offsetWidth || 0);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderThumbLabel, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSliderThumbLabel, isStandalone: true, selector: "[tuiSliderThumbLabel]", queries: [{ propertyName: "slider", first: true, predicate: TuiSliderComponent, descendants: true }, { propertyName: "control", first: true, predicate: NgControl, descendants: true }], ngImport: i0, template: "<ng-container *ngIf=\"control?.valueChanges | async\" />\n\n<div\n    class=\"t-ghost\"\n    [attr.data-size]=\"size\"\n    [style.--tui-slider-thumb-ratio]=\"ratio\"\n    [style.left.px]=\"ghostLeft\"\n>\n    <ng-content />\n</div>\n\n<ng-content select=\"input[type=range]\" />\n", styles: [":host{position:relative}.t-ghost{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem))}.t-ghost[data-size=m]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem))}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderThumbLabel, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: '[tuiSliderThumbLabel]', imports: [AsyncPipe, NgIf], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"control?.valueChanges | async\" />\n\n<div\n    class=\"t-ghost\"\n    [attr.data-size]=\"size\"\n    [style.--tui-slider-thumb-ratio]=\"ratio\"\n    [style.left.px]=\"ghostLeft\"\n>\n    <ng-content />\n</div>\n\n<ng-content select=\"input[type=range]\" />\n", styles: [":host{position:relative}.t-ghost{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem))}.t-ghost[data-size=m]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem))}\n"] }]
        }], propDecorators: { slider: [{
                type: ContentChild,
                args: [TuiSliderComponent]
            }], control: [{
                type: ContentChild,
                args: [NgControl]
            }] } });

const TuiSlider = [
    TuiSliderComponent,
    TuiSliderThumbLabel,
    TuiSliderKeySteps,
    TuiSliderReadonly,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_FLOATING_PRECISION, TUI_SLIDER_DEFAULT_OPTIONS, TUI_SLIDER_OPTIONS, TuiSlider, TuiSliderComponent, TuiSliderKeySteps, TuiSliderReadonly, TuiSliderThumbLabel, tuiKeyStepValueToPercentage, tuiPercentageToKeyStepValue, tuiSliderOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-slider.mjs.map
