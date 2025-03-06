import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiCreateUnfinishedValidator } from './unfinished.validator';
import * as i0 from "@angular/core";
class TuiUnfinishedValidator {
    constructor() {
        this.validate = tuiCreateUnfinishedValidator(tuiInjectElement(), tuiInjectElement().getAttribute('tuiUnfinishedValidator') || '');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiUnfinishedValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiUnfinishedValidator, isStandalone: true, selector: "input[tuiUnfinishedValidator]", providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)], ngImport: i0 }); }
}
export { TuiUnfinishedValidator };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiUnfinishedValidator, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[tuiUnfinishedValidator]',
                    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5maW5pc2hlZC12YWxpZGF0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2RpcmVjdGl2ZXMvdW5maW5pc2hlZC12YWxpZGF0b3IvdW5maW5pc2hlZC12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUU3RCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFcEUsTUFLYSxzQkFBc0I7SUFMbkM7UUFNb0IsYUFBUSxHQUFHLDRCQUE0QixDQUNuRCxnQkFBZ0IsRUFBRSxFQUNsQixnQkFBZ0IsRUFBRSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FDbEUsQ0FBQztLQUNMOytHQUxZLHNCQUFzQjttR0FBdEIsc0JBQXNCLDRFQUZwQixDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7O1NBRTNELHNCQUFzQjs0RkFBdEIsc0JBQXNCO2tCQUxsQyxTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSwwQkFBMEIsSUFBSSxDQUFDLENBQUM7aUJBQ3ZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1ZhbGlkYXRvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOR19WQUxJREFUT1JTfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7dHVpUHJvdmlkZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcblxuaW1wb3J0IHt0dWlDcmVhdGVVbmZpbmlzaGVkVmFsaWRhdG9yfSBmcm9tICcuL3VuZmluaXNoZWQudmFsaWRhdG9yJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2lucHV0W3R1aVVuZmluaXNoZWRWYWxpZGF0b3JdJyxcbiAgICBwcm92aWRlcnM6IFt0dWlQcm92aWRlKE5HX1ZBTElEQVRPUlMsIFR1aVVuZmluaXNoZWRWYWxpZGF0b3IsIHRydWUpXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVW5maW5pc2hlZFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gICAgcHVibGljIHJlYWRvbmx5IHZhbGlkYXRlID0gdHVpQ3JlYXRlVW5maW5pc2hlZFZhbGlkYXRvcihcbiAgICAgICAgdHVpSW5qZWN0RWxlbWVudCgpLFxuICAgICAgICB0dWlJbmplY3RFbGVtZW50KCkuZ2V0QXR0cmlidXRlKCd0dWlVbmZpbmlzaGVkVmFsaWRhdG9yJykgfHwgJycsXG4gICAgKTtcbn1cbiJdfQ==