import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TuiControl } from '@taiga-ui/cdk/classes';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { tuiFallbackValueProvider } from '@taiga-ui/cdk/tokens';
import { tuiClamp } from '@taiga-ui/cdk/utils/math';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';

const TUI_RATING_DEFAULT_OPTIONS = {
    icon: '@tui.star',
    max: 5,
};
const TUI_RATING_OPTIONS = tuiCreateToken(TUI_RATING_DEFAULT_OPTIONS);
function tuiRatingOptionsProvider(options) {
    return tuiProvideOptions(TUI_RATING_OPTIONS, options, TUI_RATING_DEFAULT_OPTIONS);
}

class TuiRating extends TuiControl {
    constructor() {
        super(...arguments);
        this.options = inject(TUI_RATING_OPTIONS);
        this.active = 0;
        this.icon = this.options.icon;
        this.max = this.options.max;
    }
    onKeyDown(event) {
        if (this.readOnly()) {
            event.preventDefault();
        }
    }
    onPointer(delta) {
        this.active = tuiClamp(this.active + delta, 0, 1);
    }
    onClick(value) {
        if (this.active) {
            this.onChange(value);
        }
    }
    isActive(index) {
        return Math.ceil(this.value()) >= this.max - index;
    }
    isFraction(index) {
        return this.value() > this.max - index - 1 && this.value() < this.max - index;
    }
    getCut(index) {
        return this.isFraction(index)
            ? 100 * Math.max(this.max - index - this.value(), 0)
            : 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRating, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiRating, isStandalone: true, selector: "tui-rating", inputs: { icon: "icon", max: "max" }, host: { listeners: { "keydown.capture": "onKeyDown($event)", "pointerdown": "onPointer(1)", "pointercancel": "onPointer(-1)", "document:pointerup": "onPointer(-1)" }, properties: { "class._disabled": "disabled()", "class._readonly": "readOnly()", "class._active": "active" } }, providers: [tuiFallbackValueProvider(0)], usesInheritance: true, ngImport: i0, template: "<input\n    min=\"1\"\n    type=\"range\"\n    class=\"t-range\"\n    [attr.aria-disabled]=\"readOnly()\"\n    [disabled]=\"disabled()\"\n    [max]=\"max\"\n    [ngModel]=\"value()\"\n    [ngModelOptions]=\"{standalone: true}\"\n    (blur)=\"onTouched()\"\n    (ngModelChange)=\"onChange($event)\"\n/>\n<div class=\"t-items\">\n    <div\n        *tuiRepeatTimes=\"let index of max\"\n        class=\"t-item\"\n        [class.t-item_active]=\"isActive(index)\"\n        (pointerup)=\"onClick(max - index)\"\n    >\n        <tui-icon\n            *polymorpheusOutlet=\"icon as src; context: {$implicit: max - index, value: value()}\"\n            class=\"t-icon t-icon_blank\"\n            [class.t-icon_fraction]=\"isFraction(index)\"\n            [icon]=\"src.toString()\"\n            [style.--t-cut.%]=\"100 - getCut(index)\"\n        />\n        <tui-icon\n            *polymorpheusOutlet=\"icon as src; context: {$implicit: max - index, value: value()}\"\n            class=\"t-icon\"\n            [icon]=\"src.toString()\"\n            [style.--t-cut.%]=\"getCut(index)\"\n        />\n    </div>\n</div>\n", styles: [":host{position:relative;display:block;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;min-inline-size:-webkit-fit-content;min-inline-size:-moz-fit-content;min-inline-size:fit-content;font-size:1rem;color:var(--tui-chart-categorical-12);cursor:pointer;-webkit-user-select:none;user-select:none}:host._readonly{pointer-events:none}:host._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}.t-range{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;box-sizing:border-box;padding:0 .75em;pointer-events:none}.t-range:focus-visible+.t-items{box-shadow:inset 0 0 0 .125rem var(--tui-border-focus)}.t-items{position:relative;display:flex;flex-direction:row-reverse}.t-items:hover .t-icon{clip-path:inset(0 0 0 0)}.t-items:hover .t-icon_blank{clip-path:inset(0 0 0 100%)}.t-item{position:relative;flex:1 0 0;color:var(--tui-text-tertiary);transition-property:color,transform;transition-duration:var(--tui-duration);transition-timing-function:ease-in-out,cubic-bezier(.35,1.5,.4,2.5)}.t-item:first-child{max-inline-size:2.5em}.t-item:hover,.t-item:hover~.t-item,.t-items:not(:hover) .t-item_active{color:currentColor}.t-items:active .t-item:hover,.t-items:active .t-item:hover~.t-item{transform:scale(.85);transition-duration:var(--tui-duration),calc(var(--tui-duration) / 3);transition-timing-function:ease-in-out}.t-icon{transition-property:clip-path;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:2.5em;block-size:2.5em;font-size:inherit;clip-path:inset(0 var(--t-cut) 0 0)}.t-icon ::ng-deep>*{font-size:1rem}.t-icon_blank{position:absolute;top:0;left:0;display:none;color:var(--tui-text-tertiary);clip-path:inset(0 0 0 var(--t-cut))}.t-icon_fraction{display:block}@media (any-pointer: coarse){:host._active .t-item_active{transform:scale(.85);transition-timing-function:ease-in-out}:host:not(._readonly) .t-range{pointer-events:auto}.t-icon{transition:none}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRating, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-rating', imports: [CommonModule, FormsModule, PolymorpheusOutlet, TuiIcon, TuiRepeatTimes], changeDetection: ChangeDetectionStrategy.OnPush, providers: [tuiFallbackValueProvider(0)], host: {
                        '[class._disabled]': 'disabled()',
                        '[class._readonly]': 'readOnly()',
                        '[class._active]': 'active',
                        '(keydown.capture)': 'onKeyDown($event)',
                        '(pointerdown)': 'onPointer(1)',
                        '(pointercancel)': 'onPointer(-1)',
                        '(document:pointerup)': 'onPointer(-1)',
                    }, template: "<input\n    min=\"1\"\n    type=\"range\"\n    class=\"t-range\"\n    [attr.aria-disabled]=\"readOnly()\"\n    [disabled]=\"disabled()\"\n    [max]=\"max\"\n    [ngModel]=\"value()\"\n    [ngModelOptions]=\"{standalone: true}\"\n    (blur)=\"onTouched()\"\n    (ngModelChange)=\"onChange($event)\"\n/>\n<div class=\"t-items\">\n    <div\n        *tuiRepeatTimes=\"let index of max\"\n        class=\"t-item\"\n        [class.t-item_active]=\"isActive(index)\"\n        (pointerup)=\"onClick(max - index)\"\n    >\n        <tui-icon\n            *polymorpheusOutlet=\"icon as src; context: {$implicit: max - index, value: value()}\"\n            class=\"t-icon t-icon_blank\"\n            [class.t-icon_fraction]=\"isFraction(index)\"\n            [icon]=\"src.toString()\"\n            [style.--t-cut.%]=\"100 - getCut(index)\"\n        />\n        <tui-icon\n            *polymorpheusOutlet=\"icon as src; context: {$implicit: max - index, value: value()}\"\n            class=\"t-icon\"\n            [icon]=\"src.toString()\"\n            [style.--t-cut.%]=\"getCut(index)\"\n        />\n    </div>\n</div>\n", styles: [":host{position:relative;display:block;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;min-inline-size:-webkit-fit-content;min-inline-size:-moz-fit-content;min-inline-size:fit-content;font-size:1rem;color:var(--tui-chart-categorical-12);cursor:pointer;-webkit-user-select:none;user-select:none}:host._readonly{pointer-events:none}:host._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}.t-range{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;box-sizing:border-box;padding:0 .75em;pointer-events:none}.t-range:focus-visible+.t-items{box-shadow:inset 0 0 0 .125rem var(--tui-border-focus)}.t-items{position:relative;display:flex;flex-direction:row-reverse}.t-items:hover .t-icon{clip-path:inset(0 0 0 0)}.t-items:hover .t-icon_blank{clip-path:inset(0 0 0 100%)}.t-item{position:relative;flex:1 0 0;color:var(--tui-text-tertiary);transition-property:color,transform;transition-duration:var(--tui-duration);transition-timing-function:ease-in-out,cubic-bezier(.35,1.5,.4,2.5)}.t-item:first-child{max-inline-size:2.5em}.t-item:hover,.t-item:hover~.t-item,.t-items:not(:hover) .t-item_active{color:currentColor}.t-items:active .t-item:hover,.t-items:active .t-item:hover~.t-item{transform:scale(.85);transition-duration:var(--tui-duration),calc(var(--tui-duration) / 3);transition-timing-function:ease-in-out}.t-icon{transition-property:clip-path;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:2.5em;block-size:2.5em;font-size:inherit;clip-path:inset(0 var(--t-cut) 0 0)}.t-icon ::ng-deep>*{font-size:1rem}.t-icon_blank{position:absolute;top:0;left:0;display:none;color:var(--tui-text-tertiary);clip-path:inset(0 0 0 var(--t-cut))}.t-icon_fraction{display:block}@media (any-pointer: coarse){:host._active .t-item_active{transform:scale(.85);transition-timing-function:ease-in-out}:host:not(._readonly) .t-range{pointer-events:auto}.t-icon{transition:none}}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], max: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_RATING_DEFAULT_OPTIONS, TUI_RATING_OPTIONS, TuiRating, tuiRatingOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-rating.mjs.map
