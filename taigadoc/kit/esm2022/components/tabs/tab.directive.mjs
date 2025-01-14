import { Directive, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLinkActive } from '@angular/router';
import { MutationObserverService } from '@ng-web-apis/mutation-observer';
import { tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiIsNativeFocused } from '@taiga-ui/cdk/utils/focus';
import { TuiWithIcons } from '@taiga-ui/core/directives/icons';
import { EMPTY, filter, merge, switchMap, take } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/icons";
export const TUI_TAB_ACTIVATE = 'tui-tab-activate';
class TuiTab {
    constructor() {
        this.el = tuiInjectElement();
        this.rla = inject(RouterLinkActive, { optional: true });
        this.observer = this.rla &&
            inject(MutationObserverService, { optional: true })?.pipe(filter(() => !!this.rla?.isActive));
        this.sub = merge(this.observer || EMPTY, this.rla?.isActiveChange.pipe(filter(Boolean)) || EMPTY, this.el.matches('button')
            ? tuiTypedFromEvent(this.el, 'click').pipe(
            // Delaying execution until after all other click callbacks
            switchMap(() => tuiTypedFromEvent(this.el.parentElement, 'click').pipe(take(1))))
            : EMPTY)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.el.dispatchEvent(new CustomEvent(TUI_TAB_ACTIVATE, { bubbles: true })));
    }
    ngOnDestroy() {
        if (tuiIsNativeFocused(this.el)) {
            this.el.blur();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTab, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTab, isStandalone: true, selector: "a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]", host: { attributes: { "type": "button" } }, hostDirectives: [{ directive: i1.TuiWithIcons }], ngImport: i0 }); }
}
export { TuiTab };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTab, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]',
                    hostDirectives: [TuiWithIcons],
                    host: {
                        type: 'button',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3RhYnMvdGFiLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDN0QsT0FBTyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7OztBQUUzRCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztBQUVuRCxNQVNhLE1BQU07SUFUbkI7UUFVcUIsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2pELGFBQVEsR0FDckIsSUFBSSxDQUFDLEdBQUc7WUFDUixNQUFNLENBQUMsdUJBQXVCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBRSxJQUFJLENBQ25ELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FDckMsQ0FBQztRQUVhLFFBQUcsR0FBRyxLQUFLLENBQzFCLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxFQUN2RCxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDckIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSTtZQUNwQywyREFBMkQ7WUFDM0QsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUNYLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDbkUsQ0FDSjtZQUNILENBQUMsQ0FBQyxLQUFLLENBQ2Q7YUFDSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMxQixTQUFTLENBQUMsR0FBRyxFQUFFLENBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUM1RSxDQUFDO0tBT1Q7SUFMVSxXQUFXO1FBQ2QsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7K0dBOUJRLE1BQU07bUdBQU4sTUFBTTs7U0FBTixNQUFNOzRGQUFOLE1BQU07a0JBVGxCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFDSixzRkFBc0Y7b0JBQzFGLGNBQWMsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDOUIsSUFBSSxFQUFFO3dCQUNGLElBQUksRUFBRSxRQUFRO3FCQUNqQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2VVbnRpbERlc3Ryb3llZH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHtSb3V0ZXJMaW5rQWN0aXZlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNdXRhdGlvbk9ic2VydmVyU2VydmljZX0gZnJvbSAnQG5nLXdlYi1hcGlzL211dGF0aW9uLW9ic2VydmVyJztcbmltcG9ydCB7dHVpVHlwZWRGcm9tRXZlbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge3R1aUlzTmF0aXZlRm9jdXNlZH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9mb2N1cyc7XG5pbXBvcnQge1R1aVdpdGhJY29uc30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvZGlyZWN0aXZlcy9pY29ucyc7XG5pbXBvcnQge0VNUFRZLCBmaWx0ZXIsIG1lcmdlLCBzd2l0Y2hNYXAsIHRha2V9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY29uc3QgVFVJX1RBQl9BQ1RJVkFURSA9ICd0dWktdGFiLWFjdGl2YXRlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjpcbiAgICAgICAgJ2FbdHVpVGFiXTpub3QoW3JvdXRlckxpbmtdKSwgYVt0dWlUYWJdW3JvdXRlckxpbmtdW3JvdXRlckxpbmtBY3RpdmVdLCBidXR0b25bdHVpVGFiXScsXG4gICAgaG9zdERpcmVjdGl2ZXM6IFtUdWlXaXRoSWNvbnNdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGFiIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsID0gdHVpSW5qZWN0RWxlbWVudCgpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcmxhID0gaW5qZWN0KFJvdXRlckxpbmtBY3RpdmUsIHtvcHRpb25hbDogdHJ1ZX0pO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgb2JzZXJ2ZXIgPVxuICAgICAgICB0aGlzLnJsYSAmJlxuICAgICAgICBpbmplY3QoTXV0YXRpb25PYnNlcnZlclNlcnZpY2UsIHtvcHRpb25hbDogdHJ1ZX0pPy5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKCgpID0+ICEhdGhpcy5ybGE/LmlzQWN0aXZlKSxcbiAgICAgICAgKTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBzdWIgPSBtZXJnZShcbiAgICAgICAgdGhpcy5vYnNlcnZlciB8fCBFTVBUWSxcbiAgICAgICAgdGhpcy5ybGE/LmlzQWN0aXZlQ2hhbmdlLnBpcGUoZmlsdGVyKEJvb2xlYW4pKSB8fCBFTVBUWSxcbiAgICAgICAgdGhpcy5lbC5tYXRjaGVzKCdidXR0b24nKVxuICAgICAgICAgICAgPyB0dWlUeXBlZEZyb21FdmVudCh0aGlzLmVsLCAnY2xpY2snKS5waXBlKFxuICAgICAgICAgICAgICAgICAgLy8gRGVsYXlpbmcgZXhlY3V0aW9uIHVudGlsIGFmdGVyIGFsbCBvdGhlciBjbGljayBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHR1aVR5cGVkRnJvbUV2ZW50KHRoaXMuZWwucGFyZW50RWxlbWVudCEsICdjbGljaycpLnBpcGUodGFrZSgxKSksXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IEVNUFRZLFxuICAgIClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoVFVJX1RBQl9BQ1RJVkFURSwge2J1YmJsZXM6IHRydWV9KSksXG4gICAgICAgICk7XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0dWlJc05hdGl2ZUZvY3VzZWQodGhpcy5lbCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuYmx1cigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19