import { NgForOf, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CHAR_NO_BREAK_SPACE } from '@taiga-ui/cdk/constants';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';

const TUI_ALWAYS_DASHED = () => 'dashed';
const TUI_ALWAYS_DOTTED = () => 'dotted';
const TUI_ALWAYS_SOLID = () => 'solid';
const TUI_ALWAYS_NONE = () => 'none';
class TuiAxes {
    constructor() {
        this.axisX = 'solid';
        this.axisXLabels = [];
        this.axisY = 'solid';
        this.axisYInset = false;
        this.axisYLabels = [];
        this.axisYName = '';
        this.axisYSecondaryInset = false;
        this.axisYSecondaryLabels = [];
        this.axisYSecondaryName = '';
        this.horizontalLines = 0;
        this.horizontalLinesHandler = TUI_ALWAYS_SOLID;
        this.verticalLines = 0;
        this.verticalLinesHandler = TUI_ALWAYS_DASHED;
    }
    get hasXLabels() {
        return !!this.axisXLabels.length;
    }
    get hasYLabels() {
        return (!!this.axisYLabels.length && !this.axisYInset) || !!this.axisYName;
    }
    get hasYSecondaryLabels() {
        return ((!!this.axisYSecondaryLabels.length && !this.axisYSecondaryInset) ||
            !!this.axisYSecondaryName);
    }
    fallback(label) {
        return label || CHAR_NO_BREAK_SPACE;
    }
    get centeredXLabels() {
        return this.axisY === 'none';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAxes, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiAxes, isStandalone: true, selector: "tui-axes", inputs: { axisX: "axisX", axisXLabels: "axisXLabels", axisY: "axisY", axisYInset: "axisYInset", axisYLabels: "axisYLabels", axisYName: "axisYName", axisYSecondaryInset: "axisYSecondaryInset", axisYSecondaryLabels: "axisYSecondaryLabels", axisYSecondaryName: "axisYSecondaryName", horizontalLines: "horizontalLines", horizontalLinesHandler: "horizontalLinesHandler", verticalLines: "verticalLines", verticalLinesHandler: "verticalLinesHandler" }, host: { properties: { "class._centered": "centeredXLabels" } }, ngImport: i0, template: "<div\n    *ngIf=\"hasYLabels\"\n    class=\"t-side\"\n    [class.t-side_padding]=\"hasXLabels\"\n>\n    <div\n        *ngIf=\"axisYName\"\n        automation-id=\"tui-axex__axis-y-name\"\n        class=\"t-name t-name_primary\"\n    >\n        {{ axisYName }}\n    </div>\n    <div\n        *ngIf=\"!axisYInset\"\n        class=\"t-labels-y t-labels-y_primary\"\n    >\n        <div\n            *ngFor=\"let label of axisYLabels\"\n            automation-id=\"tui-axex__axis-y-label\"\n            class=\"t-label-y\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n</div>\n<div class=\"t-wrapper\">\n    <div\n        class=\"t-grid\"\n        [style.borderBottomStyle]=\"axisX\"\n        [style.borderLeftStyle]=\"axisY\"\n    >\n        <div class=\"t-vertical\">\n            <div\n                *tuiRepeatTimes=\"let index of verticalLines\"\n                automation-id=\"tui-axex__vertical-line\"\n                class=\"t-line t-line_vertical\"\n                [style.borderRightStyle]=\"verticalLinesHandler(index, verticalLines)\"\n            ></div>\n        </div>\n        <div class=\"t-horizontal\">\n            <div\n                *tuiRepeatTimes=\"let index of horizontalLines\"\n                automation-id=\"tui-axex__horizontal-line\"\n                class=\"t-line\"\n                [style.borderTopStyle]=\"horizontalLinesHandler(index, horizontalLines)\"\n            ></div>\n        </div>\n        <div\n            *ngIf=\"axisYInset\"\n            class=\"t-labels-y t-labels-y_inset\"\n        >\n            <div\n                *ngFor=\"let label of axisYLabels\"\n                automation-id=\"tui-axex__axis-y-label\"\n                class=\"t-label-y\"\n            >\n                {{ fallback(label) }}\n            </div>\n        </div>\n        <div\n            *ngIf=\"axisYSecondaryInset\"\n            class=\"t-labels-y t-labels-y_inset t-labels-y_inset_secondary\"\n        >\n            <div\n                *ngFor=\"let label of axisYSecondaryLabels\"\n                automation-id=\"tui-axex__axis-y-secondary-label\"\n                class=\"t-label-y\"\n            >\n                {{ fallback(label) }}\n            </div>\n        </div>\n        <div class=\"t-content\">\n            <ng-content />\n        </div>\n    </div>\n    <div\n        *ngIf=\"hasXLabels\"\n        class=\"t-labels-x\"\n    >\n        <div\n            *ngFor=\"let label of axisXLabels\"\n            automation-id=\"tui-axex__axis-x-label\"\n            class=\"t-label-x\"\n            [class.t-label-x_transparent]=\"label === null\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n</div>\n<div\n    *ngIf=\"hasYSecondaryLabels\"\n    class=\"t-side\"\n    [class.t-side_padding]=\"hasXLabels\"\n>\n    <div\n        *ngIf=\"!axisYSecondaryInset\"\n        class=\"t-labels-y t-labels-y_secondary\"\n    >\n        <div\n            *ngFor=\"let label of axisYSecondaryLabels\"\n            automation-id=\"tui-axex__axis-y-secondary-label\"\n            class=\"t-label-y\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n    <div\n        *ngIf=\"axisYSecondaryName\"\n        automation-id=\"tui-axex__axis-y-secondary-name\"\n        class=\"t-name\"\n    >\n        {{ axisYSecondaryName }}\n    </div>\n</div>\n", styles: [":host{display:flex}.t-wrapper{display:flex;flex:1;block-size:100%;flex-direction:column}.t-grid{position:relative;display:flex;flex:1;justify-content:space-around;align-items:flex-end;border-width:1px;border-color:var(--tui-border-normal);isolation:isolate}.t-horizontal{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column}.t-vertical{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex}:host._centered .t-vertical:after{content:\"\";display:block;flex:1 0 1px}.t-line{flex:2 0 1px;box-sizing:border-box;border-width:1px;border-color:var(--tui-border-normal)}:host._centered .t-line_vertical:first-child{flex:1 0 1px;pointer-events:none}.t-side{display:flex;align-items:stretch}.t-side_padding{padding-bottom:2rem}.t-name{font:var(--tui-font-text-xs);writing-mode:tb;text-align:center;padding-left:.75rem;color:var(--tui-text-secondary)}.t-name_primary{transform:rotate(180deg)}.t-labels-y{display:flex;font:var(--tui-font-text-xs);flex-direction:column-reverse;justify-content:space-between;color:var(--tui-text-secondary)}.t-labels-y_primary{text-align:end;padding-right:.75rem}.t-labels-y_secondary{padding-left:.75rem}.t-labels-y_transparent{border-color:transparent}.t-labels-y_inset{position:absolute;top:.5625rem;left:.25rem;bottom:-.75rem;pointer-events:none}.t-labels-y_inset_secondary{left:auto;right:.25rem;text-align:end}.t-labels-x{position:relative;display:flex;font:var(--tui-font-text-xs);border-inline-end:1px solid transparent;color:var(--tui-text-secondary)}.t-label-x{block-size:.4375rem;border-inline-start:1px solid var(--tui-border-normal);flex:1;margin-bottom:1.5625rem}.t-label-x:before{content:\"\";display:block;block-size:.5625rem}.t-label-x_transparent{border-color:transparent}:host._centered .t-label-x{block-size:2rem;text-align:center;border:none;margin:0}:host:not(._centered) .t-label-x:last-child:not(:first-child){position:absolute;right:0;text-align:end;border-inline-start:none}.t-label-y:first-child{margin-bottom:-.375rem}.t-label-y:last-child{margin-top:-.375rem}.t-content{position:absolute;top:0;left:-1px;right:0;bottom:-1px;display:flex;align-items:flex-end}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAxes, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-axes', imports: [NgForOf, NgIf, TuiRepeatTimes], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._centered]': 'centeredXLabels',
                    }, template: "<div\n    *ngIf=\"hasYLabels\"\n    class=\"t-side\"\n    [class.t-side_padding]=\"hasXLabels\"\n>\n    <div\n        *ngIf=\"axisYName\"\n        automation-id=\"tui-axex__axis-y-name\"\n        class=\"t-name t-name_primary\"\n    >\n        {{ axisYName }}\n    </div>\n    <div\n        *ngIf=\"!axisYInset\"\n        class=\"t-labels-y t-labels-y_primary\"\n    >\n        <div\n            *ngFor=\"let label of axisYLabels\"\n            automation-id=\"tui-axex__axis-y-label\"\n            class=\"t-label-y\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n</div>\n<div class=\"t-wrapper\">\n    <div\n        class=\"t-grid\"\n        [style.borderBottomStyle]=\"axisX\"\n        [style.borderLeftStyle]=\"axisY\"\n    >\n        <div class=\"t-vertical\">\n            <div\n                *tuiRepeatTimes=\"let index of verticalLines\"\n                automation-id=\"tui-axex__vertical-line\"\n                class=\"t-line t-line_vertical\"\n                [style.borderRightStyle]=\"verticalLinesHandler(index, verticalLines)\"\n            ></div>\n        </div>\n        <div class=\"t-horizontal\">\n            <div\n                *tuiRepeatTimes=\"let index of horizontalLines\"\n                automation-id=\"tui-axex__horizontal-line\"\n                class=\"t-line\"\n                [style.borderTopStyle]=\"horizontalLinesHandler(index, horizontalLines)\"\n            ></div>\n        </div>\n        <div\n            *ngIf=\"axisYInset\"\n            class=\"t-labels-y t-labels-y_inset\"\n        >\n            <div\n                *ngFor=\"let label of axisYLabels\"\n                automation-id=\"tui-axex__axis-y-label\"\n                class=\"t-label-y\"\n            >\n                {{ fallback(label) }}\n            </div>\n        </div>\n        <div\n            *ngIf=\"axisYSecondaryInset\"\n            class=\"t-labels-y t-labels-y_inset t-labels-y_inset_secondary\"\n        >\n            <div\n                *ngFor=\"let label of axisYSecondaryLabels\"\n                automation-id=\"tui-axex__axis-y-secondary-label\"\n                class=\"t-label-y\"\n            >\n                {{ fallback(label) }}\n            </div>\n        </div>\n        <div class=\"t-content\">\n            <ng-content />\n        </div>\n    </div>\n    <div\n        *ngIf=\"hasXLabels\"\n        class=\"t-labels-x\"\n    >\n        <div\n            *ngFor=\"let label of axisXLabels\"\n            automation-id=\"tui-axex__axis-x-label\"\n            class=\"t-label-x\"\n            [class.t-label-x_transparent]=\"label === null\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n</div>\n<div\n    *ngIf=\"hasYSecondaryLabels\"\n    class=\"t-side\"\n    [class.t-side_padding]=\"hasXLabels\"\n>\n    <div\n        *ngIf=\"!axisYSecondaryInset\"\n        class=\"t-labels-y t-labels-y_secondary\"\n    >\n        <div\n            *ngFor=\"let label of axisYSecondaryLabels\"\n            automation-id=\"tui-axex__axis-y-secondary-label\"\n            class=\"t-label-y\"\n        >\n            {{ fallback(label) }}\n        </div>\n    </div>\n    <div\n        *ngIf=\"axisYSecondaryName\"\n        automation-id=\"tui-axex__axis-y-secondary-name\"\n        class=\"t-name\"\n    >\n        {{ axisYSecondaryName }}\n    </div>\n</div>\n", styles: [":host{display:flex}.t-wrapper{display:flex;flex:1;block-size:100%;flex-direction:column}.t-grid{position:relative;display:flex;flex:1;justify-content:space-around;align-items:flex-end;border-width:1px;border-color:var(--tui-border-normal);isolation:isolate}.t-horizontal{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column}.t-vertical{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex}:host._centered .t-vertical:after{content:\"\";display:block;flex:1 0 1px}.t-line{flex:2 0 1px;box-sizing:border-box;border-width:1px;border-color:var(--tui-border-normal)}:host._centered .t-line_vertical:first-child{flex:1 0 1px;pointer-events:none}.t-side{display:flex;align-items:stretch}.t-side_padding{padding-bottom:2rem}.t-name{font:var(--tui-font-text-xs);writing-mode:tb;text-align:center;padding-left:.75rem;color:var(--tui-text-secondary)}.t-name_primary{transform:rotate(180deg)}.t-labels-y{display:flex;font:var(--tui-font-text-xs);flex-direction:column-reverse;justify-content:space-between;color:var(--tui-text-secondary)}.t-labels-y_primary{text-align:end;padding-right:.75rem}.t-labels-y_secondary{padding-left:.75rem}.t-labels-y_transparent{border-color:transparent}.t-labels-y_inset{position:absolute;top:.5625rem;left:.25rem;bottom:-.75rem;pointer-events:none}.t-labels-y_inset_secondary{left:auto;right:.25rem;text-align:end}.t-labels-x{position:relative;display:flex;font:var(--tui-font-text-xs);border-inline-end:1px solid transparent;color:var(--tui-text-secondary)}.t-label-x{block-size:.4375rem;border-inline-start:1px solid var(--tui-border-normal);flex:1;margin-bottom:1.5625rem}.t-label-x:before{content:\"\";display:block;block-size:.5625rem}.t-label-x_transparent{border-color:transparent}:host._centered .t-label-x{block-size:2rem;text-align:center;border:none;margin:0}:host:not(._centered) .t-label-x:last-child:not(:first-child){position:absolute;right:0;text-align:end;border-inline-start:none}.t-label-y:first-child{margin-bottom:-.375rem}.t-label-y:last-child{margin-top:-.375rem}.t-content{position:absolute;top:0;left:-1px;right:0;bottom:-1px;display:flex;align-items:flex-end}\n"] }]
        }], propDecorators: { axisX: [{
                type: Input
            }], axisXLabels: [{
                type: Input
            }], axisY: [{
                type: Input
            }], axisYInset: [{
                type: Input
            }], axisYLabels: [{
                type: Input
            }], axisYName: [{
                type: Input
            }], axisYSecondaryInset: [{
                type: Input
            }], axisYSecondaryLabels: [{
                type: Input
            }], axisYSecondaryName: [{
                type: Input
            }], horizontalLines: [{
                type: Input
            }], horizontalLinesHandler: [{
                type: Input
            }], verticalLines: [{
                type: Input
            }], verticalLinesHandler: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_ALWAYS_DASHED, TUI_ALWAYS_DOTTED, TUI_ALWAYS_NONE, TUI_ALWAYS_SOLID, TuiAxes };
//# sourceMappingURL=taiga-ui-addon-charts-components-axes.mjs.map
