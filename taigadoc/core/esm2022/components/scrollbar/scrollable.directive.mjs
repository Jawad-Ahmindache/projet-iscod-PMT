import { Directive } from '@angular/core';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { TUI_SCROLLABLE } from './scrollbar.component';
import * as i0 from "@angular/core";
class TuiScrollable {
    constructor() {
        this.el = tuiInjectElement();
    }
    ngOnInit() {
        this.el.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
            bubbles: true,
            detail: this.el,
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollable, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiScrollable, isStandalone: true, selector: "[tuiScrollable]", ngImport: i0 }); }
}
export { TuiScrollable };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollable, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiScrollable]',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDOztBQUVyRCxNQUlhLGFBQWE7SUFKMUI7UUFLcUIsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7S0FVNUM7SUFSVSxRQUFRO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQ2pCLElBQUksV0FBVyxDQUFDLGNBQWMsRUFBRTtZQUM1QixPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNsQixDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7K0dBVlEsYUFBYTttR0FBYixhQUFhOztTQUFiLGFBQWE7NEZBQWIsYUFBYTtrQkFKekIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpSW5qZWN0RWxlbWVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuXG5pbXBvcnQge1RVSV9TQ1JPTExBQkxFfSBmcm9tICcuL3Njcm9sbGJhci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aVNjcm9sbGFibGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpU2Nyb2xsYWJsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbCA9IHR1aUluamVjdEVsZW1lbnQoKTtcblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFRVSV9TQ1JPTExBQkxFLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHRoaXMuZWwsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=