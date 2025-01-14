import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TuiButton } from '@taiga-ui/core/components/button';

class TuiLegendItem {
    constructor() {
        this.active = false;
        this.color = '';
        this.text = '';
        this.size = 'm';
        this.disabled = false;
    }
    get computedColor() {
        return this.color === 'var(--tui-background-accent-1)' ? null : this.color;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLegendItem, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiLegendItem, isStandalone: true, selector: "tui-legend-item", inputs: { active: "active", color: "color", text: "text", size: "size", disabled: "disabled" }, host: { properties: { "attr.data-size": "size", "class._disabled": "disabled", "style.--tui-background-accent-1": "computedColor" } }, ngImport: i0, template: "<button\n    appearance=\"outline-grayscale\"\n    size=\"s\"\n    tuiButton\n    type=\"button\"\n    class=\"t-button\"\n    [tuiAppearanceState]=\"active ? 'hover' : null\"\n>\n    <div class=\"t-wrapper\">\n        <ng-content select=\"[tuiCheckbox]\" />\n        <span\n            class=\"t-dot\"\n            [style.backgroundColor]=\"color || 'var(--tui-background-accent-1)'\"\n        ></span>\n        <span class=\"t-text\">{{ text }}</span>\n        <ng-content />\n    </div>\n</button>\n", styles: [":host{display:inline-block}.t-button{block-size:2rem;font-weight:700}:host[data-size=m] .t-button{block-size:2.25rem;font:var(--tui-font-text-m);font-weight:700}.t-wrapper{display:flex;align-items:center;pointer-events:none}:host._disabled .t-wrapper{color:var(--tui-text-tertiary)}.t-dot{inline-size:.5rem;block-size:.5rem;border-radius:100%;flex-shrink:0}:host._disabled .t-dot{background:var(--tui-border-normal)}.t-dot:not(:first-child){display:none}.t-text{margin:0 .5rem;font-weight:400}\n"], dependencies: [{ kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLegendItem, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-legend-item', imports: [TuiButton], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[attr.data-size]': 'size',
                        '[class._disabled]': 'disabled',
                        '[style.--tui-background-accent-1]': 'computedColor',
                    }, template: "<button\n    appearance=\"outline-grayscale\"\n    size=\"s\"\n    tuiButton\n    type=\"button\"\n    class=\"t-button\"\n    [tuiAppearanceState]=\"active ? 'hover' : null\"\n>\n    <div class=\"t-wrapper\">\n        <ng-content select=\"[tuiCheckbox]\" />\n        <span\n            class=\"t-dot\"\n            [style.backgroundColor]=\"color || 'var(--tui-background-accent-1)'\"\n        ></span>\n        <span class=\"t-text\">{{ text }}</span>\n        <ng-content />\n    </div>\n</button>\n", styles: [":host{display:inline-block}.t-button{block-size:2rem;font-weight:700}:host[data-size=m] .t-button{block-size:2.25rem;font:var(--tui-font-text-m);font-weight:700}.t-wrapper{display:flex;align-items:center;pointer-events:none}:host._disabled .t-wrapper{color:var(--tui-text-tertiary)}.t-dot{inline-size:.5rem;block-size:.5rem;border-radius:100%;flex-shrink:0}:host._disabled .t-dot{background:var(--tui-border-normal)}.t-dot:not(:first-child){display:none}.t-text{margin:0 .5rem;font-weight:400}\n"] }]
        }], propDecorators: { active: [{
                type: Input
            }], color: [{
                type: Input
            }], text: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiLegendItem };
//# sourceMappingURL=taiga-ui-addon-charts-components-legend-item.mjs.map
