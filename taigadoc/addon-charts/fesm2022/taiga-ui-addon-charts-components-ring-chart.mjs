import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { TuiPieChart } from '@taiga-ui/addon-charts/components/pie-chart';

class TuiRingChart {
    constructor() {
        this.value = [];
        this.size = 'm';
        this.activeItemIndex = NaN;
        this.activeItemIndexChange = new EventEmitter();
    }
    onActiveItemIndexChange(index) {
        this.updateActiveItemIndex(index);
    }
    updateActiveItemIndex(index) {
        if (index === this.activeItemIndex) {
            return;
        }
        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRingChart, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiRingChart, isStandalone: true, selector: "tui-ring-chart", inputs: { value: "value", size: "size", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, host: { properties: { "attr.data-size": "size" } }, ngImport: i0, template: "<div class=\"t-content\">\n    <div class=\"t-wrapper\">\n        <ng-content />\n    </div>\n</div>\n\n<tui-pie-chart\n    class=\"t-chart\"\n    [activeItemIndex]=\"activeItemIndex\"\n    [masked]=\"true\"\n    [size]=\"size\"\n    [value]=\"value\"\n    (activeItemIndexChange)=\"onActiveItemIndexChange($event)\"\n/>\n\n<div class=\"t-shield\"></div>\n", styles: [":host{position:relative;display:block;inline-size:var(--t-size);block-size:var(--t-size);flex-shrink:0;border-radius:100%}:host[data-size=xs]{--t-size: 3rem}:host[data-size=s]{--t-size: 4rem}:host[data-size=m]{--t-size: 9rem}:host[data-size=l]{--t-size: 11rem}:host[data-size=xl]{--t-size: 16rem}.t-content{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-m);max-block-size:100%;flex-direction:column;justify-content:center;text-align:center;padding:1.5rem;border-radius:100%;box-sizing:border-box;overflow:hidden;word-break:break-word;white-space:pre-wrap;color:var(--tui-text-secondary)}:host[data-size=m] .t-content{font:var(--tui-font-text-xs)}.t-wrapper:first-line{color:var(--tui-text-primary)}:host[data-size=l] .t-wrapper:first-line{font:var(--tui-font-text-l);font-weight:700}:host[data-size=m] .t-wrapper:first-line{font:var(--tui-font-text-m);font-weight:700}.t-shield{position:absolute;top:25%;left:25%;right:25%;bottom:25%;border-radius:100%}.t-chart{inline-size:100%;block-size:100%}\n"], dependencies: [{ kind: "component", type: TuiPieChart, selector: "tui-pie-chart", inputs: ["value", "size", "masked", "activeItemIndex"], outputs: ["activeItemIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRingChart, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-ring-chart', imports: [TuiPieChart], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[attr.data-size]': 'size',
                    }, template: "<div class=\"t-content\">\n    <div class=\"t-wrapper\">\n        <ng-content />\n    </div>\n</div>\n\n<tui-pie-chart\n    class=\"t-chart\"\n    [activeItemIndex]=\"activeItemIndex\"\n    [masked]=\"true\"\n    [size]=\"size\"\n    [value]=\"value\"\n    (activeItemIndexChange)=\"onActiveItemIndexChange($event)\"\n/>\n\n<div class=\"t-shield\"></div>\n", styles: [":host{position:relative;display:block;inline-size:var(--t-size);block-size:var(--t-size);flex-shrink:0;border-radius:100%}:host[data-size=xs]{--t-size: 3rem}:host[data-size=s]{--t-size: 4rem}:host[data-size=m]{--t-size: 9rem}:host[data-size=l]{--t-size: 11rem}:host[data-size=xl]{--t-size: 16rem}.t-content{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-m);max-block-size:100%;flex-direction:column;justify-content:center;text-align:center;padding:1.5rem;border-radius:100%;box-sizing:border-box;overflow:hidden;word-break:break-word;white-space:pre-wrap;color:var(--tui-text-secondary)}:host[data-size=m] .t-content{font:var(--tui-font-text-xs)}.t-wrapper:first-line{color:var(--tui-text-primary)}:host[data-size=l] .t-wrapper:first-line{font:var(--tui-font-text-l);font-weight:700}:host[data-size=m] .t-wrapper:first-line{font:var(--tui-font-text-m);font-weight:700}.t-shield{position:absolute;top:25%;left:25%;right:25%;bottom:25%;border-radius:100%}.t-chart{inline-size:100%;block-size:100%}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], activeItemIndex: [{
                type: Input
            }], activeItemIndexChange: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiRingChart };
//# sourceMappingURL=taiga-ui-addon-charts-components-ring-chart.mjs.map
