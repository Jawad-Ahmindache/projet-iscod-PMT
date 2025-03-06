import { Directive } from '@angular/core';
import { EMPTY_CLIENT_RECT } from '@taiga-ui/cdk/constants';
import { tuiPointToClientRect } from '@taiga-ui/cdk/utils/dom';
import { tuiAsDriver, tuiAsRectAccessor } from '@taiga-ui/core/classes';
import { TuiHintHover } from './hint-hover.directive';
import * as i0 from "@angular/core";
class TuiHintPointer extends TuiHintHover {
    constructor() {
        super(...arguments);
        this.currentRect = EMPTY_CLIENT_RECT;
    }
    getClientRect() {
        return this.currentRect;
    }
    onMove({ clientX, clientY }) {
        this.currentRect = tuiPointToClientRect(clientX, clientY);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintPointer, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintPointer, isStandalone: true, selector: "[tuiHint][tuiHintPointer]", host: { listeners: { "mousemove.silent": "onMove($event)" } }, providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)], usesInheritance: true, ngImport: i0 }); }
}
export { TuiHintPointer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintPointer, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHint][tuiHintPointer]',
                    providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
                    host: {
                        '(mousemove.silent)': 'onMove($event)',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC1wb2ludGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvZGlyZWN0aXZlcy9oaW50L2hpbnQtcG9pbnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RCxPQUFPLEVBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFdEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDOztBQUVwRCxNQVFhLGNBQWUsU0FBUSxZQUFZO0lBUmhEOztRQVNZLGdCQUFXLEdBQUcsaUJBQWlCLENBQUM7S0FTM0M7SUFQVSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRVMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBYTtRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDOytHQVRRLGNBQWM7bUdBQWQsY0FBYyx1SUFMWixDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7U0FLbEUsY0FBYzs0RkFBZCxjQUFjO2tCQVIxQixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsZ0JBQWdCLEVBQUUsV0FBVyxnQkFBZ0IsQ0FBQztvQkFDM0UsSUFBSSxFQUFFO3dCQUNGLG9CQUFvQixFQUFFLGdCQUFnQjtxQkFDekM7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VNUFRZX0NMSUVOVF9SRUNUfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge3R1aVBvaW50VG9DbGllbnRSZWN0fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQgdHlwZSB7VHVpUmVjdEFjY2Vzc29yfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jbGFzc2VzJztcbmltcG9ydCB7dHVpQXNEcml2ZXIsIHR1aUFzUmVjdEFjY2Vzc29yfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jbGFzc2VzJztcblxuaW1wb3J0IHtUdWlIaW50SG92ZXJ9IGZyb20gJy4vaGludC1ob3Zlci5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aUhpbnRdW3R1aUhpbnRQb2ludGVyXScsXG4gICAgcHJvdmlkZXJzOiBbdHVpQXNSZWN0QWNjZXNzb3IoVHVpSGludFBvaW50ZXIpLCB0dWlBc0RyaXZlcihUdWlIaW50UG9pbnRlcildLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhtb3VzZW1vdmUuc2lsZW50KSc6ICdvbk1vdmUoJGV2ZW50KScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSGludFBvaW50ZXIgZXh0ZW5kcyBUdWlIaW50SG92ZXIgaW1wbGVtZW50cyBUdWlSZWN0QWNjZXNzb3Ige1xuICAgIHByaXZhdGUgY3VycmVudFJlY3QgPSBFTVBUWV9DTElFTlRfUkVDVDtcblxuICAgIHB1YmxpYyBnZXRDbGllbnRSZWN0KCk6IERPTVJlY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVjdDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3ZlKHtjbGllbnRYLCBjbGllbnRZfTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRSZWN0ID0gdHVpUG9pbnRUb0NsaWVudFJlY3QoY2xpZW50WCwgY2xpZW50WSk7XG4gICAgfVxufVxuIl19