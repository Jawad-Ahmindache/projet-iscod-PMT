import { Directive, inject, Input } from '@angular/core';
import { tuiAsDriver } from '@taiga-ui/core/classes';
import { TuiDropdownDriver } from './dropdown.driver';
import * as i0 from "@angular/core";
class TuiDropdownManual {
    constructor() {
        this.driver = inject(TuiDropdownDriver);
        this.tuiDropdownManual = false;
    }
    ngOnChanges() {
        this.driver.next(!!this.tuiDropdownManual);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownManual, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownManual, isStandalone: true, selector: "[tuiDropdownManual]", inputs: { tuiDropdownManual: "tuiDropdownManual" }, providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)], usesOnChanges: true, ngImport: i0 }); }
}
export { TuiDropdownManual };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownManual, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownManual]',
                    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
                }]
        }], propDecorators: { tuiDropdownManual: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWFudWFsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvZGlyZWN0aXZlcy9kcm9wZG93bi9kcm9wZG93bi1tYW51YWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFbkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXBELE1BS2EsaUJBQWlCO0lBTDlCO1FBTXFCLFdBQU0sR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUc3QyxzQkFBaUIsR0FBaUIsS0FBSyxDQUFDO0tBS2xEO0lBSFUsV0FBVztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvQyxDQUFDOytHQVJRLGlCQUFpQjttR0FBakIsaUJBQWlCLHNIQUZmLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O1NBRXJELGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUw3QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztpQkFDakU7OEJBS1UsaUJBQWlCO3NCQUR2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge09uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3R1aUFzRHJpdmVyfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jbGFzc2VzJztcblxuaW1wb3J0IHtUdWlEcm9wZG93bkRyaXZlcn0gZnJvbSAnLi9kcm9wZG93bi5kcml2ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aURyb3Bkb3duTWFudWFsXScsXG4gICAgcHJvdmlkZXJzOiBbVHVpRHJvcGRvd25Ecml2ZXIsIHR1aUFzRHJpdmVyKFR1aURyb3Bkb3duRHJpdmVyKV0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aURyb3Bkb3duTWFudWFsIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRyaXZlciA9IGluamVjdChUdWlEcm9wZG93bkRyaXZlcik7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0dWlEcm9wZG93bk1hbnVhbDogYm9vbGVhbiB8ICcnID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJpdmVyLm5leHQoISF0aGlzLnR1aURyb3Bkb3duTWFudWFsKTtcbiAgICB9XG59XG4iXX0=