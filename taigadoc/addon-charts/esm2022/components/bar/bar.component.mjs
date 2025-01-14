import { __decorate } from "tslib";
import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { tuiSum } from '@taiga-ui/cdk/utils/math';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i0 from "@angular/core";
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
export { TuiBar };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2Jhci9iYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvYmFyL2Jhci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFHMUQsTUFXYSxNQUFNO0lBWG5CO1FBYVcsVUFBSyxHQUFzQixFQUFFLENBQUM7UUFHOUIsU0FBSSxHQUF3QixHQUFHLENBQUM7S0FVMUM7SUFSYSxTQUFTLENBQUMsS0FBYTtRQUM3QixPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFHTyxNQUFNLENBQUMsS0FBd0I7UUFDbkMsT0FBTyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOytHQWRRLE1BQU07bUdBQU4sTUFBTSxpS0NqQm5CLDhOQU1BLG9kREdjLE9BQU87O0FBb0JUO0lBRFAsT0FBTztvQ0FHUDtTQWRRLE1BQU07NEZBQU4sTUFBTTtrQkFYbEIsU0FBUztpQ0FDTSxJQUFJLFlBQ04sU0FBUyxXQUNWLENBQUMsT0FBTyxDQUFDLG1CQUdELHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0Ysa0JBQWtCLEVBQUUsTUFBTTtxQkFDN0I7OEJBSU0sS0FBSztzQkFEWCxLQUFLO2dCQUlDLElBQUk7c0JBRFYsS0FBSztnQkFRRSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ0Zvck9mfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3R1aVN1bX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9tYXRoJztcbmltcG9ydCB7dHVpUHVyZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB0eXBlIHtUdWlTaXplTCwgVHVpU2l6ZVN9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3R1aS1iYXInLFxuICAgIGltcG9ydHM6IFtOZ0Zvck9mXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFyLnRlbXBsYXRlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Jhci5zdHlsZS5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2F0dHIuZGF0YS1zaXplXSc6ICdzaXplJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlCYXIge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOiByZWFkb25seSBudW1iZXJbXSA9IFtdO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2l6ZTogVHVpU2l6ZUwgfCBUdWlTaXplUyA9ICdtJztcblxuICAgIHByb3RlY3RlZCBnZXRIZWlnaHQodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAoMTAwICogdmFsdWUpIC8gdGhpcy5nZXRTdW0odGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgQHR1aVB1cmVcbiAgICBwcml2YXRlIGdldFN1bSh2YWx1ZTogcmVhZG9ubHkgbnVtYmVyW10pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdHVpU3VtKC4uLnZhbHVlKTtcbiAgICB9XG59XG4iLCI8ZGl2XG4gICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdmFsdWU7IGxldCBpbmRleCA9IGluZGV4XCJcbiAgICBhdXRvbWF0aW9uLWlkPVwidHVpLWJhcl9fYmFyXCJcbiAgICBbc3R5bGUuYmFja2dyb3VuZF09XCIndmFyKC0tdHVpLWNoYXJ0LWNhdGVnb3JpY2FsLTAnICsgaW5kZXggKyAnKSdcIlxuICAgIFtzdHlsZS5oZWlnaHQuJV09XCJnZXRIZWlnaHQoaXRlbSlcIlxuPjwvZGl2PlxuIl19