import { Directive, inject, Input } from '@angular/core';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_NUMBER_FORMAT } from '@taiga-ui/core/tokens';
import { combineLatest, map, Observable, ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
class TuiNumberFormat extends Observable {
    constructor() {
        super((subscriber) => combineLatest([this.parent, this.settings])
            .pipe(map(([parent, settings]) => ({ ...parent, ...settings })))
            .subscribe(subscriber));
        this.settings = new ReplaySubject(1);
        this.parent = inject(TUI_NUMBER_FORMAT, { skipSelf: true });
    }
    set tuiNumberFormat(format) {
        this.settings.next(format);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiNumberFormat, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiNumberFormat, isStandalone: true, selector: "[tuiNumberFormat]", inputs: { tuiNumberFormat: "tuiNumberFormat" }, providers: [tuiProvide(TUI_NUMBER_FORMAT, TuiNumberFormat)], usesInheritance: true, ngImport: i0 }); }
}
export { TuiNumberFormat };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiNumberFormat, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiNumberFormat]',
                    providers: [tuiProvide(TUI_NUMBER_FORMAT, TuiNumberFormat)],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiNumberFormat: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvcm1hdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2RpcmVjdGl2ZXMvbnVtYmVyLWZvcm1hdC9udW1iZXItZm9ybWF0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRTdELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRW5FLE1BS2EsZUFBZ0IsU0FBUSxVQUFtQztJQUlwRTtRQUNJLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQ2pCLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdELFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FDN0IsQ0FBQztRQVJXLGFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsV0FBTSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBUXRFLENBQUM7SUFFRCxJQUNXLGVBQWUsQ0FBQyxNQUF3QztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDOytHQWZRLGVBQWU7bUdBQWYsZUFBZSxnSEFGYixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQzs7U0FFbEQsZUFBZTs0RkFBZixlQUFlO2tCQUwzQixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLGtCQUFrQixDQUFDO2lCQUM5RDswRUFjYyxlQUFlO3NCQUR6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0dWlQcm92aWRlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHR5cGUge1R1aU51bWJlckZvcm1hdFNldHRpbmdzfSBmcm9tICdAdGFpZ2EtdWkvY29yZS90b2tlbnMnO1xuaW1wb3J0IHtUVUlfTlVNQkVSX0ZPUk1BVH0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdG9rZW5zJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgbWFwLCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlOdW1iZXJGb3JtYXRdJyxcbiAgICBwcm92aWRlcnM6IFt0dWlQcm92aWRlKFRVSV9OVU1CRVJfRk9STUFULCBUdWlOdW1iZXJGb3JtYXQpXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpTnVtYmVyRm9ybWF0IGV4dGVuZHMgT2JzZXJ2YWJsZTxUdWlOdW1iZXJGb3JtYXRTZXR0aW5ncz4ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2V0dGluZ3MgPSBuZXcgUmVwbGF5U3ViamVjdDxQYXJ0aWFsPFR1aU51bWJlckZvcm1hdFNldHRpbmdzPj4oMSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnQgPSBpbmplY3QoVFVJX05VTUJFUl9GT1JNQVQsIHtza2lwU2VsZjogdHJ1ZX0pO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKChzdWJzY3JpYmVyKSA9PlxuICAgICAgICAgICAgY29tYmluZUxhdGVzdChbdGhpcy5wYXJlbnQsIHRoaXMuc2V0dGluZ3NdKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcCgoW3BhcmVudCwgc2V0dGluZ3NdKSA9PiAoey4uLnBhcmVudCwgLi4uc2V0dGluZ3N9KSkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShzdWJzY3JpYmVyKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHVpTnVtYmVyRm9ybWF0KGZvcm1hdDogUGFydGlhbDxUdWlOdW1iZXJGb3JtYXRTZXR0aW5ncz4pIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5uZXh0KGZvcm1hdCk7XG4gICAgfVxufVxuIl19