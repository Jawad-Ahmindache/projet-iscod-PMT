/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TuiSliderComponent } from '../slider.component';
import * as i0 from "@angular/core";
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
export { TuiSliderThumbLabel };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXRodW1iLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3NsaWRlci9oZWxwZXJzL3NsaWRlci10aHVtYi1sYWJlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvY29tcG9uZW50cy9zbGlkZXIvaGVscGVycy9zbGlkZXItdGh1bWItbGFiZWwudGVtcGxhdGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBd0Q7QUFBeEQsd0RBQXdEO0FBQ3hELE9BQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQUV2RCxNQVFhLG1CQUFtQjtJQU9yQixrQkFBa0I7UUFDckIsU0FBUztZQUNMLE9BQU8sQ0FBQyxNQUFNLENBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQ25DLDJGQUEyRjtnQkFDdkYsdUVBQXVFLENBQzlFLENBQUM7SUFDVixDQUFDO0lBRUQsSUFBYyxJQUFJO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQWMsS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFjLFNBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7K0dBMUJRLG1CQUFtQjttR0FBbkIsbUJBQW1CLHFIQUNkLGtCQUFrQiwwRUFHbEIsU0FBUyxnRENyQjNCLDJSQVlBLG9hREFjLFNBQVMsOENBQUUsSUFBSTs7U0FLaEIsbUJBQW1COzRGQUFuQixtQkFBbUI7a0JBUi9CLFNBQVM7aUNBQ00sSUFBSSxZQUNOLHVCQUF1QixXQUN4QixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsbUJBR1QsdUJBQXVCLENBQUMsTUFBTTs4QkFJNUIsTUFBTTtzQkFEeEIsWUFBWTt1QkFBQyxrQkFBa0I7Z0JBSWIsT0FBTztzQkFEekIsWUFBWTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJAdGFpZ2EtdWkvdHNjb25maWcvbmctZGV2LW1vZGVcIiAvPlxuaW1wb3J0IHtBc3luY1BpcGUsIE5nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHR5cGUge1R1aVNpemVTfSBmcm9tICdAdGFpZ2EtdWkvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7VHVpU2xpZGVyQ29tcG9uZW50fSBmcm9tICcuLi9zbGlkZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlTbGlkZXJUaHVtYkxhYmVsXScsXG4gICAgaW1wb3J0czogW0FzeW5jUGlwZSwgTmdJZl0sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci10aHVtYi1sYWJlbC50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zbGlkZXItdGh1bWItbGFiZWwuc3R5bGUubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlTbGlkZXJUaHVtYkxhYmVsIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgQENvbnRlbnRDaGlsZChUdWlTbGlkZXJDb21wb25lbnQpXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNsaWRlcj86IFR1aVNsaWRlckNvbXBvbmVudDtcblxuICAgIEBDb250ZW50Q2hpbGQoTmdDb250cm9sKVxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250cm9sPzogTmdDb250cm9sO1xuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbmdEZXZNb2RlICYmXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChcbiAgICAgICAgICAgICAgICBCb29sZWFuKHRoaXMuY29udHJvbD8udmFsdWVDaGFuZ2VzKSxcbiAgICAgICAgICAgICAgICAnXFxuW3R1aVNsaWRlclRodW1iTGFiZWxdIGV4cGVjdGVkIDxpbnB1dCB0dWlTbGlkZXIgdHlwZT1cInJhbmdlXCIgLz4gdG8gdXNlIEFuZ3VsYXIgRm9ybXMuXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgWyhuZ01vZGVsKV0gb3IgW2Zvcm1Db250cm9sXSBvciBmb3JtQ29udHJvbE5hbWUgZm9yIGNvcnJlY3Qgd29yay4nLFxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNpemUoKTogVHVpU2l6ZVMge1xuICAgICAgICByZXR1cm4gdGhpcy5zbGlkZXI/LnNpemUgfHwgJ20nO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgcmF0aW8oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpZGVyPy52YWx1ZVJhdGlvIHx8IDA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBnaG9zdExlZnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmF0aW8gKiAodGhpcy5zbGlkZXI/LmVsLm9mZnNldFdpZHRoIHx8IDApO1xuICAgIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sPy52YWx1ZUNoYW5nZXMgfCBhc3luY1wiIC8+XG5cbjxkaXZcbiAgICBjbGFzcz1cInQtZ2hvc3RcIlxuICAgIFthdHRyLmRhdGEtc2l6ZV09XCJzaXplXCJcbiAgICBbc3R5bGUuLS10dWktc2xpZGVyLXRodW1iLXJhdGlvXT1cInJhdGlvXCJcbiAgICBbc3R5bGUubGVmdC5weF09XCJnaG9zdExlZnRcIlxuPlxuICAgIDxuZy1jb250ZW50IC8+XG48L2Rpdj5cblxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiaW5wdXRbdHlwZT1yYW5nZV1cIiAvPlxuIl19