import { DOCUMENT } from '@angular/common';
import { Directive, inject, Output } from '@angular/core';
import { EMPTY_CLIENT_RECT } from '@taiga-ui/cdk/constants';
import { tuiPreventDefault, tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { distinctUntilChanged, map, switchMap, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
class TuiTableResized {
    constructor() {
        this.doc = inject(DOCUMENT);
        this.el = tuiInjectElement();
        this.tuiResized = tuiTypedFromEvent(this.el, 'mousedown').pipe(tuiPreventDefault(), switchMap(() => {
            const { width, right } = this.el.closest('th')?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
            return tuiTypedFromEvent(this.doc, 'mousemove').pipe(distinctUntilChanged(), map(({ clientX }) => width + clientX - right), takeUntil(tuiTypedFromEvent(this.doc, 'mouseup')));
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableResized, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableResized, isStandalone: true, selector: "[tuiResized]", outputs: { tuiResized: "tuiResized" }, ngImport: i0 }); }
}
export { TuiTableResized };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableResized, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiResized]',
                }]
        }], propDecorators: { tuiResized: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvcmVzaXplZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRXJFLE1BSWEsZUFBZTtJQUo1QjtRQUtxQixRQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLE9BQUUsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO1FBR3pCLGVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDckUsaUJBQWlCLEVBQUUsRUFDbkIsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNYLE1BQU0sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLEdBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLHFCQUFxQixFQUFFLElBQUksaUJBQWlCLENBQUM7WUFFeEUsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEQsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFDM0MsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FDcEQsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNMLENBQUM7S0FDTDsrR0FsQlksZUFBZTttR0FBZixlQUFlOztTQUFmLGVBQWU7NEZBQWYsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLGNBQWM7aUJBQzNCOzhCQU1tQixVQUFVO3NCQUR6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7RGlyZWN0aXZlLCBpbmplY3QsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VNUFRZX0NMSUVOVF9SRUNUfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge3R1aVByZXZlbnREZWZhdWx0LCB0dWlUeXBlZEZyb21FdmVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay9vYnNlcnZhYmxlcyc7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3dpdGNoTWFwLCB0YWtlVW50aWx9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aVJlc2l6ZWRdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGFibGVSZXNpemVkIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvYyA9IGluamVjdChET0NVTUVOVCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbCA9IHR1aUluamVjdEVsZW1lbnQoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZWFkb25seSB0dWlSZXNpemVkID0gdHVpVHlwZWRGcm9tRXZlbnQodGhpcy5lbCwgJ21vdXNlZG93bicpLnBpcGUoXG4gICAgICAgIHR1aVByZXZlbnREZWZhdWx0KCksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7d2lkdGgsIHJpZ2h0fSA9XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbG9zZXN0KCd0aCcpPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB8fCBFTVBUWV9DTElFTlRfUkVDVDtcblxuICAgICAgICAgICAgcmV0dXJuIHR1aVR5cGVkRnJvbUV2ZW50KHRoaXMuZG9jLCAnbW91c2Vtb3ZlJykucGlwZShcbiAgICAgICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgICAgICAgIG1hcCgoe2NsaWVudFh9KSA9PiB3aWR0aCArIGNsaWVudFggLSByaWdodCksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHR1aVR5cGVkRnJvbUV2ZW50KHRoaXMuZG9jLCAnbW91c2V1cCcpKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICk7XG59XG4iXX0=