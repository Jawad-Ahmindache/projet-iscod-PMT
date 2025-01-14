import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { TuiHovered } from '@taiga-ui/cdk/directives/hovered';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { tuiInjectId } from '@taiga-ui/cdk/services';
import { tuiSum } from '@taiga-ui/cdk/utils/math';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiHint, TuiHintOptionsDirective, tuiHintOptionsProvider, } from '@taiga-ui/core/directives/hint';
import { TuiPieChartDirective } from './pie-chart.directive';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/hint";
const RADII = {
    xs: '50',
    s: '50',
    m: '77.8',
    l: '81.9',
    xl: '81.3',
};
const TRANSFORM = {
    xs: 1.15,
    s: 1.25,
    m: 1.11,
    l: 1.09,
    xl: 1.08,
};
class TuiPieChart {
    constructor() {
        this.hintOptions = inject(TuiHintOptionsDirective, { optional: true });
        this.autoId = tuiInjectId();
        this.value = [];
        this.size = 'm';
        this.masked = false;
        this.activeItemIndex = NaN;
        this.activeItemIndexChange = new EventEmitter();
        if (this.hintOptions) {
            this.hintOptions.showDelay = 0;
            this.hintOptions.hideDelay = 0;
        }
    }
    get empty() {
        return !this.getSum(this.value);
    }
    get hintContent() {
        return this.hintOptions?.content || '';
    }
    get maskId() {
        return `tui-ring-chart-${this.autoId}`;
    }
    get mask() {
        return this.masked ? `url(#${this.maskId})` : null;
    }
    get radius() {
        return RADII[this.size];
    }
    get segments() {
        return this.getSegments(this.value);
    }
    getTransform(index) {
        const transform = this.masked
            ? `scale(${TRANSFORM[this.size]})`
            : `scale(${TRANSFORM.xs})`;
        return index === this.activeItemIndex ? transform : null;
    }
    onHovered(hovered, index) {
        this.updateActiveItemIndex(hovered ? index : NaN);
    }
    getSum(value) {
        return tuiSum(...value);
    }
    getSegments(value) {
        return value
            .map((initial, i, array) => array.reduce((sum, current, j) => (j < i ? this.getDeg(current) + sum : sum), this.getDeg(initial)))
            .map((angle, index, array) => [
            array[index - 1] || 0,
            Math.min(angle, 359.9999),
        ]);
    }
    getDeg(value) {
        return 360 * (value / this.getSum(this.value)) || 0;
    }
    updateActiveItemIndex(index) {
        if (index === this.activeItemIndex) {
            return;
        }
        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPieChart, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPieChart, isStandalone: true, selector: "tui-pie-chart", inputs: { value: "value", size: "size", masked: "masked", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, host: { properties: { "attr.data-size": "size", "class._empty": "empty" } }, ngImport: i0, template: "<svg\n    focusable=\"false\"\n    height=\"100%\"\n    viewBox=\"-100 -100 200 200\"\n    width=\"100%\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"t-svg\"\n>\n    <defs>\n        <mask [attr.id]=\"maskId\">\n            <rect\n                fill=\"white\"\n                height=\"400\"\n                width=\"400\"\n                x=\"-200\"\n                y=\"-200\"\n            />\n            <circle\n                cx=\"0\"\n                cy=\"0\"\n                [attr.r]=\"radius\"\n            />\n        </mask>\n    </defs>\n    <g [style.mask]=\"mask\">\n        <circle\n            cx=\"0\"\n            cy=\"0\"\n            r=\"100\"\n            class=\"t-placeholder\"\n        />\n        <path\n            *tuiRepeatTimes=\"let index of segments.length\"\n            automation-id=\"tui-pie-chart__segment\"\n            d=\"\"\n            fill=\"currentColor\"\n            tuiHintPointer\n            class=\"t-segment\"\n            [attr.transform]=\"getTransform(index)\"\n            [style.color]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n            [tuiHint]=\"hintContent\"\n            [tuiHintContext]=\"{$implicit: index}\"\n            [tuiPieChart]=\"segments[index] || [0, 0]\"\n            (tuiHoveredChange)=\"onHovered($event, index)\"\n        />\n    </g>\n</svg>\n", styles: [":host{position:relative;display:block;inline-size:var(--t-size);block-size:var(--t-size);border-radius:100%}:host[data-size=xs]{--t-size: 2rem;pointer-events:none}:host[data-size=s]{--t-size: 4rem}:host[data-size=m]{--t-size: 9rem}:host[data-size=l]{--t-size: 11rem}:host[data-size=xl]{--t-size: 16rem}.t-svg{position:relative;overflow:visible;transform:rotate(-90deg)}.t-segment{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}:host._empty .t-segment{display:none}.t-placeholder{fill:var(--tui-background-neutral-1)}\n"], dependencies: [{ kind: "directive", type: i1.TuiHintDirective, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: ["tuiHintContext", "tuiHintAppearance", "tuiHint"] }, { kind: "directive", type: i1.TuiHintPointer, selector: "[tuiHint][tuiHintPointer]" }, { kind: "directive", type: TuiHovered, selector: "[tuiHoveredChange]", outputs: ["tuiHoveredChange"] }, { kind: "directive", type: TuiPieChartDirective, selector: "path[tuiPieChart]", inputs: ["tuiPieChart"] }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], viewProviders: [tuiHintOptionsProvider({ direction: 'top-right', appearance: 'dark' })], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiPieChart.prototype, "getSum", null);
__decorate([
    tuiPure
], TuiPieChart.prototype, "getSegments", null);
export { TuiPieChart };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPieChart, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-pie-chart', imports: [TuiHint, TuiHovered, TuiPieChartDirective, TuiRepeatTimes], changeDetection: ChangeDetectionStrategy.OnPush, viewProviders: [tuiHintOptionsProvider({ direction: 'top-right', appearance: 'dark' })], host: {
                        '[attr.data-size]': 'size',
                        '[class._empty]': 'empty',
                    }, template: "<svg\n    focusable=\"false\"\n    height=\"100%\"\n    viewBox=\"-100 -100 200 200\"\n    width=\"100%\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"t-svg\"\n>\n    <defs>\n        <mask [attr.id]=\"maskId\">\n            <rect\n                fill=\"white\"\n                height=\"400\"\n                width=\"400\"\n                x=\"-200\"\n                y=\"-200\"\n            />\n            <circle\n                cx=\"0\"\n                cy=\"0\"\n                [attr.r]=\"radius\"\n            />\n        </mask>\n    </defs>\n    <g [style.mask]=\"mask\">\n        <circle\n            cx=\"0\"\n            cy=\"0\"\n            r=\"100\"\n            class=\"t-placeholder\"\n        />\n        <path\n            *tuiRepeatTimes=\"let index of segments.length\"\n            automation-id=\"tui-pie-chart__segment\"\n            d=\"\"\n            fill=\"currentColor\"\n            tuiHintPointer\n            class=\"t-segment\"\n            [attr.transform]=\"getTransform(index)\"\n            [style.color]=\"'var(--tui-chart-categorical-0' + index + ')'\"\n            [tuiHint]=\"hintContent\"\n            [tuiHintContext]=\"{$implicit: index}\"\n            [tuiPieChart]=\"segments[index] || [0, 0]\"\n            (tuiHoveredChange)=\"onHovered($event, index)\"\n        />\n    </g>\n</svg>\n", styles: [":host{position:relative;display:block;inline-size:var(--t-size);block-size:var(--t-size);border-radius:100%}:host[data-size=xs]{--t-size: 2rem;pointer-events:none}:host[data-size=s]{--t-size: 4rem}:host[data-size=m]{--t-size: 9rem}:host[data-size=l]{--t-size: 11rem}:host[data-size=xl]{--t-size: 16rem}.t-svg{position:relative;overflow:visible;transform:rotate(-90deg)}.t-segment{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}:host._empty .t-segment{display:none}.t-placeholder{fill:var(--tui-background-neutral-1)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }], masked: [{
                type: Input
            }], activeItemIndex: [{
                type: Input
            }], activeItemIndexChange: [{
                type: Output
            }], getSum: [], getSegments: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvcGllLWNoYXJ0L3BpZS1jaGFydC50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNyRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRCxPQUFPLEVBQ0gsT0FBTyxFQUNQLHVCQUF1QixFQUN2QixzQkFBc0IsR0FDekIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUl4QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRTNELE1BQU0sS0FBSyxHQUFHO0lBQ1YsRUFBRSxFQUFFLElBQUk7SUFDUixDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxNQUFNO0lBQ1QsQ0FBQyxFQUFFLE1BQU07SUFDVCxFQUFFLEVBQUUsTUFBTTtDQUNiLENBQUM7QUFDRixNQUFNLFNBQVMsR0FBRztJQUNkLEVBQUUsRUFBRSxJQUFJO0lBQ1IsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJ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LElBQUk7c0JBRFYsS0FBSztnQkFJQyxNQUFNO3NCQURaLEtBQUs7Z0JBSUMsZUFBZTtzQkFEckIsS0FBSztnQkFJVSxxQkFBcUI7c0JBRHBDLE1BQU07Z0JBK0NDLE1BQU0sTUFLTixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGluamVjdCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUdWlIb3ZlcmVkfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RpcmVjdGl2ZXMvaG92ZXJlZCc7XG5pbXBvcnQge1R1aVJlcGVhdFRpbWVzfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RpcmVjdGl2ZXMvcmVwZWF0LXRpbWVzJztcbmltcG9ydCB7dHVpSW5qZWN0SWR9IGZyb20gJ0B0YWlnYS11aS9jZGsvc2VydmljZXMnO1xuaW1wb3J0IHR5cGUge1R1aUNvbnRleHR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHt0dWlTdW19IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWF0aCc7XG5pbXBvcnQge3R1aVB1cmV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQge1xuICAgIFR1aUhpbnQsXG4gICAgVHVpSGludE9wdGlvbnNEaXJlY3RpdmUsXG4gICAgdHVpSGludE9wdGlvbnNQcm92aWRlcixcbn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvZGlyZWN0aXZlcy9oaW50JztcbmltcG9ydCB0eXBlIHtUdWlTaXplWEwsIFR1aVNpemVYU30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUge1BvbHltb3JwaGV1c0NvbnRlbnR9IGZyb20gJ0B0YWlnYS11aS9wb2x5bW9ycGhldXMnO1xuXG5pbXBvcnQge1R1aVBpZUNoYXJ0RGlyZWN0aXZlfSBmcm9tICcuL3BpZS1jaGFydC5kaXJlY3RpdmUnO1xuXG5jb25zdCBSQURJSSA9IHtcbiAgICB4czogJzUwJyxcbiAgICBzOiAnNTAnLFxuICAgIG06ICc3Ny44JyxcbiAgICBsOiAnODEuOScsXG4gICAgeGw6ICc4MS4zJyxcbn07XG5jb25zdCBUUkFOU0ZPUk0gPSB7XG4gICAgeHM6IDEuMTUsXG4gICAgczogMS4yNSxcbiAgICBtOiAxLjExLFxuICAgIGw6IDEuMDksXG4gICAgeGw6IDEuMDgsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAndHVpLXBpZS1jaGFydCcsXG4gICAgaW1wb3J0czogW1R1aUhpbnQsIFR1aUhvdmVyZWQsIFR1aVBpZUNoYXJ0RGlyZWN0aXZlLCBUdWlSZXBlYXRUaW1lc10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BpZS1jaGFydC50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9waWUtY2hhcnQuc3R5bGUubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHZpZXdQcm92aWRlcnM6IFt0dWlIaW50T3B0aW9uc1Byb3ZpZGVyKHtkaXJlY3Rpb246ICd0b3AtcmlnaHQnLCBhcHBlYXJhbmNlOiAnZGFyayd9KV0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2F0dHIuZGF0YS1zaXplXSc6ICdzaXplJyxcbiAgICAgICAgJ1tjbGFzcy5fZW1wdHldJzogJ2VtcHR5JyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlQaWVDaGFydCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBoaW50T3B0aW9ucyA9IGluamVjdChUdWlIaW50T3B0aW9uc0RpcmVjdGl2ZSwge29wdGlvbmFsOiB0cnVlfSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRvSWQgPSB0dWlJbmplY3RJZCgpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6IHJlYWRvbmx5IG51bWJlcltdID0gW107XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzaXplOiBUdWlTaXplWEwgfCBUdWlTaXplWFMgPSAnbSc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXNrZWQgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFjdGl2ZUl0ZW1JbmRleCA9IE5hTjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZWFkb25seSBhY3RpdmVJdGVtSW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAodGhpcy5oaW50T3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5oaW50T3B0aW9ucy5zaG93RGVsYXkgPSAwO1xuICAgICAgICAgICAgdGhpcy5oaW50T3B0aW9ucy5oaWRlRGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBlbXB0eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmdldFN1bSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGhpbnRDb250ZW50KCk6IFBvbHltb3JwaGV1c0NvbnRlbnQ8VHVpQ29udGV4dDxudW1iZXI+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpbnRPcHRpb25zPy5jb250ZW50IHx8ICcnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWFza0lkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgdHVpLXJpbmctY2hhcnQtJHt0aGlzLmF1dG9JZH1gO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWFzaygpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkID8gYHVybCgjJHt0aGlzLm1hc2tJZH0pYCA6IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCByYWRpdXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFJBRElJW3RoaXMuc2l6ZV07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzZWdtZW50cygpOiBSZWFkb25seUFycmF5PFtudW1iZXIsIG51bWJlcl0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2VnbWVudHModGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFRyYW5zZm9ybShpbmRleDogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHRoaXMubWFza2VkXG4gICAgICAgICAgICA/IGBzY2FsZSgke1RSQU5TRk9STVt0aGlzLnNpemVdfSlgXG4gICAgICAgICAgICA6IGBzY2FsZSgke1RSQU5TRk9STS54c30pYDtcblxuICAgICAgICByZXR1cm4gaW5kZXggPT09IHRoaXMuYWN0aXZlSXRlbUluZGV4ID8gdHJhbnNmb3JtIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Ib3ZlcmVkKGhvdmVyZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoaG92ZXJlZCA/IGluZGV4IDogTmFOKTtcbiAgICB9XG5cbiAgICBAdHVpUHVyZVxuICAgIHByaXZhdGUgZ2V0U3VtKHZhbHVlOiByZWFkb25seSBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0dWlTdW0oLi4udmFsdWUpO1xuICAgIH1cblxuICAgIEB0dWlQdXJlXG4gICAgcHJpdmF0ZSBnZXRTZWdtZW50cyh2YWx1ZTogcmVhZG9ubHkgbnVtYmVyW10pOiBSZWFkb25seUFycmF5PFtudW1iZXIsIG51bWJlcl0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAubWFwKChpbml0aWFsLCBpLCBhcnJheSkgPT5cbiAgICAgICAgICAgICAgICBhcnJheS5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgIChzdW0sIGN1cnJlbnQsIGopID0+IChqIDwgaSA/IHRoaXMuZ2V0RGVnKGN1cnJlbnQpICsgc3VtIDogc3VtKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREZWcoaW5pdGlhbCksXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoKGFuZ2xlLCBpbmRleCwgYXJyYXkpID0+IFtcbiAgICAgICAgICAgICAgICBhcnJheVtpbmRleCAtIDFdIHx8IDAsXG4gICAgICAgICAgICAgICAgTWF0aC5taW4oYW5nbGUsIDM1OS45OTk5KSxcbiAgICAgICAgICAgIF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGVnKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMzYwICogKHZhbHVlIC8gdGhpcy5nZXRTdW0odGhpcy52YWx1ZSkpIHx8IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVBY3RpdmVJdGVtSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuYWN0aXZlSXRlbUluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleENoYW5nZS5uZXh0KGluZGV4KTtcbiAgICB9XG59XG4iLCI8c3ZnXG4gICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgIGhlaWdodD1cIjEwMCVcIlxuICAgIHZpZXdCb3g9XCItMTAwIC0xMDAgMjAwIDIwMFwiXG4gICAgd2lkdGg9XCIxMDAlXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICBjbGFzcz1cInQtc3ZnXCJcbj5cbiAgICA8ZGVmcz5cbiAgICAgICAgPG1hc2sgW2F0dHIuaWRdPVwibWFza0lkXCI+XG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjQwMFwiXG4gICAgICAgICAgICAgICAgeD1cIi0yMDBcIlxuICAgICAgICAgICAgICAgIHk9XCItMjAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgY3g9XCIwXCJcbiAgICAgICAgICAgICAgICBjeT1cIjBcIlxuICAgICAgICAgICAgICAgIFthdHRyLnJdPVwicmFkaXVzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvbWFzaz5cbiAgICA8L2RlZnM+XG4gICAgPGcgW3N0eWxlLm1hc2tdPVwibWFza1wiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgICAgY3k9XCIwXCJcbiAgICAgICAgICAgIHI9XCIxMDBcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0LXBsYWNlaG9sZGVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICp0dWlSZXBlYXRUaW1lcz1cImxldCBpbmRleCBvZiBzZWdtZW50cy5sZW5ndGhcIlxuICAgICAgICAgICAgYXV0b21hdGlvbi1pZD1cInR1aS1waWUtY2hhcnRfX3NlZ21lbnRcIlxuICAgICAgICAgICAgZD1cIlwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHR1aUhpbnRQb2ludGVyXG4gICAgICAgICAgICBjbGFzcz1cInQtc2VnbWVudFwiXG4gICAgICAgICAgICBbYXR0ci50cmFuc2Zvcm1dPVwiZ2V0VHJhbnNmb3JtKGluZGV4KVwiXG4gICAgICAgICAgICBbc3R5bGUuY29sb3JdPVwiJ3ZhcigtLXR1aS1jaGFydC1jYXRlZ29yaWNhbC0wJyArIGluZGV4ICsgJyknXCJcbiAgICAgICAgICAgIFt0dWlIaW50XT1cImhpbnRDb250ZW50XCJcbiAgICAgICAgICAgIFt0dWlIaW50Q29udGV4dF09XCJ7JGltcGxpY2l0OiBpbmRleH1cIlxuICAgICAgICAgICAgW3R1aVBpZUNoYXJ0XT1cInNlZ21lbnRzW2luZGV4XSB8fCBbMCwgMF1cIlxuICAgICAgICAgICAgKHR1aUhvdmVyZWRDaGFuZ2UpPVwib25Ib3ZlcmVkKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgLz5cbiAgICA8L2c+XG48L3N2Zz5cbiJdfQ==