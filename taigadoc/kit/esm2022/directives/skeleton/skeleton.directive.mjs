import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, inject, Input, ViewEncapsulation, } from '@angular/core';
import { CHAR_NO_BREAK_SPACE } from '@taiga-ui/cdk/constants';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiPure, tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import * as i0 from "@angular/core";
const FADE = [{ opacity: 0.06 }, { opacity: 1 }];
class TuiSkeletonStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSkeletonStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSkeletonStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-skeleton-styles" }, ngImport: i0, template: '', isInline: true, styles: ["@keyframes tuiSkeleton{0%{opacity:.03}to{opacity:.06}}[tuiSkeleton]._skeleton{color:transparent;background:var(--tui-background-base)!important;box-shadow:none!important;filter:contrast(0) brightness(0);animation:tuiSkeleton ease-in-out 1s infinite alternate;-webkit-user-select:none;user-select:none;pointer-events:none}[tuiSkeleton]._skeleton[data-tui-skeleton]{background:transparent!important}[tuiSkeleton]._skeleton[data-tui-skeleton]:before{content:attr(data-tui-skeleton);background:var(--tui-background-base);font-size:smaller;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:.25rem}[tuiTheme=dark] [tuiSkeleton]._skeleton,[tuiTheme=dark][tuiSkeleton]._skeleton{filter:contrast(0) brightness(0) invert(1)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSkeletonStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-skeleton-styles',
                    }, styles: ["@keyframes tuiSkeleton{0%{opacity:.03}to{opacity:.06}}[tuiSkeleton]._skeleton{color:transparent;background:var(--tui-background-base)!important;box-shadow:none!important;filter:contrast(0) brightness(0);animation:tuiSkeleton ease-in-out 1s infinite alternate;-webkit-user-select:none;user-select:none;pointer-events:none}[tuiSkeleton]._skeleton[data-tui-skeleton]{background:transparent!important}[tuiSkeleton]._skeleton[data-tui-skeleton]:before{content:attr(data-tui-skeleton);background:var(--tui-background-base);font-size:smaller;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:.25rem}[tuiTheme=dark] [tuiSkeleton]._skeleton,[tuiTheme=dark][tuiSkeleton]._skeleton{filter:contrast(0) brightness(0) invert(1)}\n"] }]
        }] });
class TuiSkeleton {
    constructor() {
        this.el = tuiInjectElement();
        this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)) * 2;
        this.nothing = tuiWithStyles(TuiSkeletonStyles);
        this.tuiSkeleton = false;
    }
    ngOnChanges({ tuiSkeleton }) {
        this.animation?.cancel();
        if (!tuiSkeleton?.currentValue && !tuiSkeleton?.firstChange) {
            this.animation = this.el.animate(FADE, this.duration);
        }
    }
    getPlaceholder(value) {
        switch (typeof value) {
            case 'number':
                return Array.from({ length: value })
                    .map(() => CHAR_NO_BREAK_SPACE.repeat(getLength()))
                    .join(' ');
            case 'string':
                return value;
            default:
                return null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSkeleton, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiSkeleton, isStandalone: true, selector: "[tuiSkeleton]", inputs: { tuiSkeleton: "tuiSkeleton" }, host: { attributes: { "tuiSkeleton": "" }, properties: { "class._skeleton": "tuiSkeleton", "attr.data-tui-skeleton": "getPlaceholder(tuiSkeleton)" } }, usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiSkeleton.prototype, "getPlaceholder", null);
export { TuiSkeleton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSkeleton, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiSkeleton]',
                    host: {
                        tuiSkeleton: '',
                        '[class._skeleton]': 'tuiSkeleton',
                        '[attr.data-tui-skeleton]': 'getPlaceholder(tuiSkeleton)',
                    },
                }]
        }], propDecorators: { tuiSkeleton: [{
                type: Input
            }], getPlaceholder: [] } });
function getLength() {
    return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2RpcmVjdGl2ZXMvc2tlbGV0b24vc2tlbGV0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxpQkFBaUIsR0FDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7O0FBRWxFLE1BQU0sSUFBSSxHQUFHLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUU3QyxNQVVNLGlCQUFpQjsrR0FBakIsaUJBQWlCO21HQUFqQixpQkFBaUIseUhBUlQsRUFBRTs7NEZBUVYsaUJBQWlCO2tCQVZ0QixTQUFTO2lDQUNNLElBQUksWUFDTixFQUFFLGlCQUVHLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0YsS0FBSyxFQUFFLHFCQUFxQjtxQkFDL0I7O0FBSUwsTUFTYSxXQUFXO0lBVHhCO1FBV3FCLE9BQUUsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUQsWUFBTyxHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBR3ZELGdCQUFXLEdBQThCLEtBQUssQ0FBQztLQXVCekQ7SUFyQlUsV0FBVyxDQUFDLEVBQUMsV0FBVyxFQUFnQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRTtZQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBR1MsY0FBYyxDQUFDLEtBQWdDO1FBQ3JELFFBQVEsT0FBTyxLQUFLLEVBQUU7WUFDbEIsS0FBSyxRQUFRO2dCQUNULE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztxQkFDN0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO3FCQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSyxRQUFRO2dCQUNULE9BQU8sS0FBSyxDQUFDO1lBQ2pCO2dCQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQzsrR0E5QlEsV0FBVzttR0FBWCxXQUFXOztBQW1CVjtJQURULE9BQU87aURBWVA7U0E5QlEsV0FBVzs0RkFBWCxXQUFXO2tCQVR2QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsSUFBSSxFQUFFO3dCQUNGLFdBQVcsRUFBRSxFQUFFO3dCQUNmLG1CQUFtQixFQUFFLGFBQWE7d0JBQ2xDLDBCQUEwQixFQUFFLDZCQUE2QjtxQkFDNUQ7aUJBQ0o7OEJBU1UsV0FBVztzQkFEakIsS0FBSztnQkFZSSxjQUFjO0FBYzVCLFNBQVMsU0FBUztJQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBpbmplY3QsXG4gICAgSW5wdXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDSEFSX05PX0JSRUFLX1NQQUNFfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7dHVpUHVyZSwgdHVpV2l0aFN0eWxlc30gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB7VFVJX0FOSU1BVElPTlNfU1BFRUR9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge3R1aUdldER1cmF0aW9ufSBmcm9tICdAdGFpZ2EtdWkvY29yZS91dGlscy9taXNjZWxsYW5lb3VzJztcblxuY29uc3QgRkFERSA9IFt7b3BhY2l0eTogMC4wNn0sIHtvcGFjaXR5OiAxfV07XG5cbkBDb21wb25lbnQoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHN0eWxlVXJsczogWycuL3NrZWxldG9uLnN0eWxlLmxlc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICd0dWktc2tlbGV0b24tc3R5bGVzJyxcbiAgICB9LFxufSlcbmNsYXNzIFR1aVNrZWxldG9uU3R5bGVzIHt9XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpU2tlbGV0b25dJyxcbiAgICBob3N0OiB7XG4gICAgICAgIHR1aVNrZWxldG9uOiAnJyxcbiAgICAgICAgJ1tjbGFzcy5fc2tlbGV0b25dJzogJ3R1aVNrZWxldG9uJyxcbiAgICAgICAgJ1thdHRyLmRhdGEtdHVpLXNrZWxldG9uXSc6ICdnZXRQbGFjZWhvbGRlcih0dWlTa2VsZXRvbiknLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aVNrZWxldG9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIGFuaW1hdGlvbj86IEFuaW1hdGlvbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsID0gdHVpSW5qZWN0RWxlbWVudCgpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZHVyYXRpb24gPSB0dWlHZXREdXJhdGlvbihpbmplY3QoVFVJX0FOSU1BVElPTlNfU1BFRUQpKSAqIDI7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbm90aGluZyA9IHR1aVdpdGhTdHlsZXMoVHVpU2tlbGV0b25TdHlsZXMpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHVpU2tlbGV0b246IGJvb2xlYW4gfCBudW1iZXIgfCBzdHJpbmcgPSBmYWxzZTtcblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyh7dHVpU2tlbGV0b259OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uPy5jYW5jZWwoKTtcblxuICAgICAgICBpZiAoIXR1aVNrZWxldG9uPy5jdXJyZW50VmFsdWUgJiYgIXR1aVNrZWxldG9uPy5maXJzdENoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmVsLmFuaW1hdGUoRkFERSwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAdHVpUHVyZVxuICAgIHByb3RlY3RlZCBnZXRQbGFjZWhvbGRlcih2YWx1ZTogYm9vbGVhbiB8IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB2YWx1ZX0pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKCkgPT4gQ0hBUl9OT19CUkVBS19TUEFDRS5yZXBlYXQoZ2V0TGVuZ3RoKCkpKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDE1IC0gNSArIDEpKSArIDU7XG59XG4iXX0=