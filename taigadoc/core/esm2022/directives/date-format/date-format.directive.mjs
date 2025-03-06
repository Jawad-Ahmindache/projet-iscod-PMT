import { Directive, inject, Input } from '@angular/core';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_DATE_FORMAT } from '@taiga-ui/core/tokens';
import { combineLatest, map, Observable, ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
class TuiDateFormat extends Observable {
    constructor() {
        super((subscriber) => combineLatest([this.parent, this.settings])
            .pipe(map(([parent, settings]) => ({ ...parent, ...settings })))
            .subscribe(subscriber));
        this.settings = new ReplaySubject(1);
        this.parent = inject(TUI_DATE_FORMAT, { skipSelf: true });
    }
    set tuiDateFormat(format) {
        this.settings.next(format);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDateFormat, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDateFormat, isStandalone: true, selector: "[tuiDateFormat]", inputs: { tuiDateFormat: "tuiDateFormat" }, providers: [tuiProvide(TUI_DATE_FORMAT, TuiDateFormat)], usesInheritance: true, ngImport: i0 }); }
}
export { TuiDateFormat };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDateFormat, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDateFormat]',
                    providers: [tuiProvide(TUI_DATE_FORMAT, TuiDateFormat)],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiDateFormat: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRTdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUVuRSxNQUthLGFBQWMsU0FBUSxVQUFpQztJQUloRTtRQUNJLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQ2pCLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdELFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FDN0IsQ0FBQztRQVJXLGFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBaUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsV0FBTSxHQUFHLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQVFwRSxDQUFDO0lBRUQsSUFDVyxhQUFhLENBQUMsTUFBc0M7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQzsrR0FmUSxhQUFhO21HQUFiLGFBQWEsMEdBRlgsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDOztTQUU5QyxhQUFhOzRGQUFiLGFBQWE7a0JBTHpCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLGdCQUFnQixDQUFDO2lCQUMxRDswRUFjYyxhQUFhO3NCQUR2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0dWlQcm92aWRlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHR5cGUge1R1aURhdGVGb3JtYXRTZXR0aW5nc30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdG9rZW5zJztcbmltcG9ydCB7VFVJX0RBVEVfRk9STUFUfSBmcm9tICdAdGFpZ2EtdWkvY29yZS90b2tlbnMnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBtYXAsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aURhdGVGb3JtYXRdJyxcbiAgICBwcm92aWRlcnM6IFt0dWlQcm92aWRlKFRVSV9EQVRFX0ZPUk1BVCwgVHVpRGF0ZUZvcm1hdCldLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlEYXRlRm9ybWF0IGV4dGVuZHMgT2JzZXJ2YWJsZTxUdWlEYXRlRm9ybWF0U2V0dGluZ3M+IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNldHRpbmdzID0gbmV3IFJlcGxheVN1YmplY3Q8UGFydGlhbDxUdWlEYXRlRm9ybWF0U2V0dGluZ3M+PigxKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmVudCA9IGluamVjdChUVUlfREFURV9GT1JNQVQsIHtza2lwU2VsZjogdHJ1ZX0pO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKChzdWJzY3JpYmVyKSA9PlxuICAgICAgICAgICAgY29tYmluZUxhdGVzdChbdGhpcy5wYXJlbnQsIHRoaXMuc2V0dGluZ3NdKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcCgoW3BhcmVudCwgc2V0dGluZ3NdKSA9PiAoey4uLnBhcmVudCwgLi4uc2V0dGluZ3N9KSkpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShzdWJzY3JpYmVyKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHVpRGF0ZUZvcm1hdChmb3JtYXQ6IFBhcnRpYWw8VHVpRGF0ZUZvcm1hdFNldHRpbmdzPikge1xuICAgICAgICB0aGlzLnNldHRpbmdzLm5leHQoZm9ybWF0KTtcbiAgICB9XG59XG4iXX0=