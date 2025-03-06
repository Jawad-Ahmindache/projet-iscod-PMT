import { Directive, inject, Input } from '@angular/core';
import { tuiAsDriver, TuiDriver } from '@taiga-ui/core/classes';
import { BehaviorSubject } from 'rxjs';
import { TuiHintHover } from './hint-hover.directive';
import * as i0 from "@angular/core";
class TuiHintManual extends TuiDriver {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.hover = inject(TuiHintHover);
        this.stream$ = new BehaviorSubject(false);
        this.tuiHintManual = false;
        this.type = 'hint';
        this.hover.enabled = false;
    }
    ngOnChanges() {
        this.stream$.next(this.tuiHintManual);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintManual, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintManual, isStandalone: true, selector: "[tuiHint][tuiHintManual]", inputs: { tuiHintManual: "tuiHintManual" }, providers: [tuiAsDriver(TuiHintManual)], usesInheritance: true, usesOnChanges: true, ngImport: i0 }); }
}
export { TuiHintManual };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintManual, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHint][tuiHintManual]',
                    providers: [tuiAsDriver(TuiHintManual)],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiHintManual: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC1tYW51YWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL2hpbnQvaGludC1tYW51YWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDOztBQUVwRCxNQUthLGFBQWMsU0FBUSxTQUFTO0lBU3hDO1FBQ0ksS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBVDdDLFVBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0IsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRy9DLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRWIsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUkxQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQzsrR0FoQlEsYUFBYTttR0FBYixhQUFhLG1IQUZYLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztTQUU5QixhQUFhOzRGQUFiLGFBQWE7a0JBTHpCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLFdBQVcsZUFBZSxDQUFDO2lCQUMxQzswRUFNVSxhQUFhO3NCQURuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge09uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3R1aUFzRHJpdmVyLCBUdWlEcml2ZXJ9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1R1aUhpbnRIb3Zlcn0gZnJvbSAnLi9oaW50LWhvdmVyLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpSGludF1bdHVpSGludE1hbnVhbF0nLFxuICAgIHByb3ZpZGVyczogW3R1aUFzRHJpdmVyKFR1aUhpbnRNYW51YWwpXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSGludE1hbnVhbCBleHRlbmRzIFR1aURyaXZlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBob3ZlciA9IGluamVjdChUdWlIaW50SG92ZXIpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RyZWFtJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHVpSGludE1hbnVhbCA9IGZhbHNlO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSAnaGludCc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKHN1YnNjcmliZXIpID0+IHRoaXMuc3RyZWFtJC5zdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xuICAgICAgICB0aGlzLmhvdmVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RyZWFtJC5uZXh0KHRoaXMudHVpSGludE1hbnVhbCk7XG4gICAgfVxufVxuIl19