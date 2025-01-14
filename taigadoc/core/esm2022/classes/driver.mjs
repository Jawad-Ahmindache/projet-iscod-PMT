import { DestroyRef, Directive, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { distinctUntilChanged, merge, Observable } from 'rxjs';
import { TuiVehicle } from './vehicle';
import * as i0 from "@angular/core";
export class TuiDriver extends Observable {
}
export function tuiAsDriver(driver) {
    return tuiProvide(TuiDriver, driver, true);
}
class TuiDriverDirective {
    constructor() {
        this.destroyRef = inject(DestroyRef);
        this.drivers = inject(TuiDriver, { self: true, optional: true }) || [];
        this.vehicles = inject(TuiVehicle, {
            self: true,
            optional: true,
        });
    }
    ngAfterViewInit() {
        const vehicle = this.vehicles?.find(({ type }) => type === this.type);
        merge(...this.drivers.filter(({ type }) => type === this.type))
            .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
            vehicle?.toggle(value);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDriverDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDriverDirective, ngImport: i0 }); }
}
export { TuiDriverDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDriverDirective, decorators: [{
            type: Directive
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9jbGFzc2VzL2RyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzdELE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7O0FBRXJDLE1BQU0sT0FBZ0IsU0FBVSxTQUFRLFVBQW1CO0NBRTFEO0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxNQUF1QjtJQUMvQyxPQUFPLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUNzQixrQkFBa0I7SUFEeEM7UUFJcUIsZUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxZQUFPLEdBQ3BCLE1BQU0sQ0FBTSxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU5QyxhQUFRLEdBQTBCLE1BQU0sQ0FBTSxVQUFVLEVBQUU7WUFDdkUsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7S0FXTjtJQVRVLGVBQWU7UUFDbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBFLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4RCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDakUsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDakIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7K0dBcEJpQixrQkFBa0I7bUdBQWxCLGtCQUFrQjs7U0FBbEIsa0JBQWtCOzRGQUFsQixrQkFBa0I7a0JBRHZDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWZ0ZXJWaWV3SW5pdCwgRXhpc3RpbmdQcm92aWRlciwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Rlc3Ryb3lSZWYsIERpcmVjdGl2ZSwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge3R1aVByb3ZpZGV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtZXJnZSwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7VHVpVmVoaWNsZX0gZnJvbSAnLi92ZWhpY2xlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFR1aURyaXZlciBleHRlbmRzIE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0dWlBc0RyaXZlcihkcml2ZXI6IFR5cGU8VHVpRHJpdmVyPik6IEV4aXN0aW5nUHJvdmlkZXIge1xuICAgIHJldHVybiB0dWlQcm92aWRlKFR1aURyaXZlciwgZHJpdmVyLCB0cnVlKTtcbn1cblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHVpRHJpdmVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHVibGljIGFic3RyYWN0IHR5cGU6IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveVJlZiA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRyaXZlcnM6IHJlYWRvbmx5IFR1aURyaXZlcltdID1cbiAgICAgICAgaW5qZWN0PGFueT4oVHVpRHJpdmVyLCB7c2VsZjogdHJ1ZSwgb3B0aW9uYWw6IHRydWV9KSB8fCBbXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmVoaWNsZXM6IHJlYWRvbmx5IFR1aVZlaGljbGVbXSA9IGluamVjdDxhbnk+KFR1aVZlaGljbGUsIHtcbiAgICAgICAgc2VsZjogdHJ1ZSxcbiAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2ZWhpY2xlID0gdGhpcy52ZWhpY2xlcz8uZmluZCgoe3R5cGV9KSA9PiB0eXBlID09PSB0aGlzLnR5cGUpO1xuXG4gICAgICAgIG1lcmdlKC4uLnRoaXMuZHJpdmVycy5maWx0ZXIoKHt0eXBlfSkgPT4gdHlwZSA9PT0gdGhpcy50eXBlKSlcbiAgICAgICAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksIHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3lSZWYpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB2ZWhpY2xlPy50b2dnbGUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19