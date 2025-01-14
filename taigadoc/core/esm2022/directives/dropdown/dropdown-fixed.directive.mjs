import { Directive, inject } from '@angular/core';
import { tuiOverrideOptions } from '@taiga-ui/core/utils/miscellaneous';
import { TUI_DROPDOWN_DEFAULT_OPTIONS, TUI_DROPDOWN_OPTIONS, tuiDropdownOptionsProvider, } from './dropdown-options.directive';
import * as i0 from "@angular/core";
class TuiDropdownFixed {
    constructor() {
        const override = tuiOverrideOptions({ limitWidth: 'fixed' }, TUI_DROPDOWN_DEFAULT_OPTIONS);
        override(inject(TUI_DROPDOWN_OPTIONS, { self: true, optional: true }), null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownFixed, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownFixed, isStandalone: true, providers: [tuiDropdownOptionsProvider({})], ngImport: i0 }); }
}
export { TuiDropdownFixed };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownFixed, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    providers: [tuiDropdownOptionsProvider({})],
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tZml4ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL2Ryb3Bkb3duL2Ryb3Bkb3duLWZpeGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUV0RSxPQUFPLEVBQ0gsNEJBQTRCLEVBQzVCLG9CQUFvQixFQUNwQiwwQkFBMEIsR0FDN0IsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFdEMsTUFJYSxnQkFBZ0I7SUFDekI7UUFDSSxNQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FDL0IsRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFDLEVBQ3JCLDRCQUE0QixDQUMvQixDQUFDO1FBRUYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQzsrR0FSUSxnQkFBZ0I7bUdBQWhCLGdCQUFnQixpQ0FGZCxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxDQUFDOztTQUVsQyxnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFKNUIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3R1aU92ZXJyaWRlT3B0aW9uc30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5cbmltcG9ydCB7XG4gICAgVFVJX0RST1BET1dOX0RFRkFVTFRfT1BUSU9OUyxcbiAgICBUVUlfRFJPUERPV05fT1BUSU9OUyxcbiAgICB0dWlEcm9wZG93bk9wdGlvbnNQcm92aWRlcixcbn0gZnJvbSAnLi9kcm9wZG93bi1vcHRpb25zLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgcHJvdmlkZXJzOiBbdHVpRHJvcGRvd25PcHRpb25zUHJvdmlkZXIoe30pXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpRHJvcGRvd25GaXhlZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJyaWRlID0gdHVpT3ZlcnJpZGVPcHRpb25zKFxuICAgICAgICAgICAge2xpbWl0V2lkdGg6ICdmaXhlZCd9LFxuICAgICAgICAgICAgVFVJX0RST1BET1dOX0RFRkFVTFRfT1BUSU9OUyxcbiAgICAgICAgKTtcblxuICAgICAgICBvdmVycmlkZShpbmplY3QoVFVJX0RST1BET1dOX09QVElPTlMsIHtzZWxmOiB0cnVlLCBvcHRpb25hbDogdHJ1ZX0pLCBudWxsKTtcbiAgICB9XG59XG4iXX0=