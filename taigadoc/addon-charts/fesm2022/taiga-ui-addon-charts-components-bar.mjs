import { __decorate } from 'tslib';
import { NgForOf } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { tuiSum } from '@taiga-ui/cdk/utils/math';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';

class TuiBar {
    constructor() {
        this.value = [];
        this.size = 'm';
    }
    getHeight(value) {
        return (100 * value) / this.getSum(this.value);
    }
    getSum(value) {
        return tuiSum(...value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBar, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiBar, isStandalone: true, selector: "tui-bar", inputs: { value: "value", size: "size" }, host: { properties: { "attr.data-size": "size" } }, ngImport: i0, template: "<div\n    *ngFor=\"let item of value; let index = index\"\n    automation-id=\"tui-bar__bar\"\n    [style.background]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n    [style.height.%]=\"getHeight(item)\"\n></div>\n", styles: [":host{display:flex;min-inline-size:.125rem;flex-direction:column-reverse;border-start-start-radius:var(--tui-radius-l);border-start-end-radius:var(--tui-radius-l);overflow:hidden}:host[data-size=l]{inline-size:1rem;max-inline-size:1rem;margin:0 .1875rem}:host[data-size=m]{inline-size:.5rem;max-inline-size:.5rem;margin:0 .1875rem}:host[data-size=s]{inline-size:.25rem;max-inline-size:.5rem;margin:0 .125rem}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiBar.prototype, "getSum", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBar, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-bar', imports: [NgForOf], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[attr.data-size]': 'size',
                    }, template: "<div\n    *ngFor=\"let item of value; let index = index\"\n    automation-id=\"tui-bar__bar\"\n    [style.background]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n    [style.height.%]=\"getHeight(item)\"\n></div>\n", styles: [":host{display:flex;min-inline-size:.125rem;flex-direction:column-reverse;border-start-start-radius:var(--tui-radius-l);border-start-end-radius:var(--tui-radius-l);overflow:hidden}:host[data-size=l]{inline-size:1rem;max-inline-size:1rem;margin:0 .1875rem}:host[data-size=m]{inline-size:.5rem;max-inline-size:.5rem;margin:0 .1875rem}:host[data-size=s]{inline-size:.25rem;max-inline-size:.5rem;margin:0 .125rem}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], getSum: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiBar };
//# sourceMappingURL=taiga-ui-addon-charts-components-bar.mjs.map
