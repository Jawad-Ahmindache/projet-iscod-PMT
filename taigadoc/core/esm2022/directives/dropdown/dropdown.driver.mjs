import { Directive, Injectable } from '@angular/core';
import { TuiDriverDirective } from '@taiga-ui/core/classes';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
class TuiDropdownDriver extends BehaviorSubject {
    constructor() {
        super(false);
        this.type = 'dropdown';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriver, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriver }); }
}
export { TuiDropdownDriver };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
class TuiDropdownDriverDirective extends TuiDriverDirective {
    constructor() {
        super(...arguments);
        this.type = 'dropdown';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriverDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownDriverDirective, isStandalone: true, usesInheritance: true, ngImport: i0 }); }
}
export { TuiDropdownDriverDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriverDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL2Ryb3Bkb3duL2Ryb3Bkb3duLmRyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUVyQyxNQUNhLGlCQUFrQixTQUFRLGVBQXdCO0lBRzNEO1FBQ0ksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSEQsU0FBSSxHQUFHLFVBQVUsQ0FBQztJQUlsQyxDQUFDOytHQUxRLGlCQUFpQjttSEFBakIsaUJBQWlCOztTQUFqQixpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFEN0IsVUFBVTs7QUFTWCxNQUdhLDBCQUEyQixTQUFRLGtCQUFrQjtJQUhsRTs7UUFJb0IsU0FBSSxHQUFHLFVBQVUsQ0FBQztLQUNyQzsrR0FGWSwwQkFBMEI7bUdBQTFCLDBCQUEwQjs7U0FBMUIsMEJBQTBCOzRGQUExQiwwQkFBMEI7a0JBSHRDLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1R1aURyaXZlcn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY2xhc3Nlcyc7XG5pbXBvcnQge1R1aURyaXZlckRpcmVjdGl2ZX0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY2xhc3Nlcyc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUdWlEcm9wZG93bkRyaXZlciBleHRlbmRzIEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiBpbXBsZW1lbnRzIFR1aURyaXZlciB7XG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSAnZHJvcGRvd24nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKGZhbHNlKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFR1aURyb3Bkb3duRHJpdmVyRGlyZWN0aXZlIGV4dGVuZHMgVHVpRHJpdmVyRGlyZWN0aXZlIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZSA9ICdkcm9wZG93bic7XG59XG4iXX0=