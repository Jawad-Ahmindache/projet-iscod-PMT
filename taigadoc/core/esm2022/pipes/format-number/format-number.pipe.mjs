import { inject, Pipe } from '@angular/core';
import { TUI_NUMBER_FORMAT } from '@taiga-ui/core/tokens';
import { tuiFormatNumber } from '@taiga-ui/core/utils/format';
import { map } from 'rxjs';
import * as i0 from "@angular/core";
class TuiFormatNumberPipe {
    constructor() {
        this.numberFormat = inject(TUI_NUMBER_FORMAT);
    }
    /**
     * Formats number adding thousand separators and correct decimal separator
     * padding decimal part with zeroes to given length
     * @param value number
     * @param settings See {@link TuiNumberFormatSettings}
     */
    transform(value, settings = {}) {
        return this.numberFormat.pipe(map((format) => tuiFormatNumber(value, {
            ...format,
            precision: Number.isNaN(format.precision)
                ? Infinity
                : format.precision,
            ...settings,
        })));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatNumberPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatNumberPipe, isStandalone: true, name: "tuiFormatNumber" }); }
}
export { TuiFormatNumberPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatNumberPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiFormatNumber',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9waXBlcy9mb3JtYXQtbnVtYmVyL2Zvcm1hdC1udW1iZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFFNUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFekIsTUFJYSxtQkFBbUI7SUFKaEM7UUFLcUIsaUJBQVksR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQXdCN0Q7SUF0Qkc7Ozs7O09BS0c7SUFDSSxTQUFTLENBQ1osS0FBYSxFQUNiLFdBQTZDLEVBQUU7UUFFL0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDekIsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDWCxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQ25CLEdBQUcsTUFBTTtZQUNULFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxRQUFRO2dCQUNWLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUztZQUN0QixHQUFHLFFBQVE7U0FDZCxDQUFDLENBQ0wsQ0FDSixDQUFDO0lBQ04sQ0FBQzsrR0F4QlEsbUJBQW1COzZHQUFuQixtQkFBbUI7O1NBQW5CLG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUovQixJQUFJO21CQUFDO29CQUNGLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUUsaUJBQWlCO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aW5qZWN0LCBQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtUdWlOdW1iZXJGb3JtYXRTZXR0aW5nc30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdG9rZW5zJztcbmltcG9ydCB7VFVJX05VTUJFUl9GT1JNQVR9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge3R1aUZvcm1hdE51bWJlcn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdXRpbHMvZm9ybWF0JztcbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzJztcblxuQFBpcGUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgbmFtZTogJ3R1aUZvcm1hdE51bWJlcicsXG59KVxuZXhwb3J0IGNsYXNzIFR1aUZvcm1hdE51bWJlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG51bWJlckZvcm1hdCA9IGluamVjdChUVUlfTlVNQkVSX0ZPUk1BVCk7XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXRzIG51bWJlciBhZGRpbmcgdGhvdXNhbmQgc2VwYXJhdG9ycyBhbmQgY29ycmVjdCBkZWNpbWFsIHNlcGFyYXRvclxuICAgICAqIHBhZGRpbmcgZGVjaW1hbCBwYXJ0IHdpdGggemVyb2VzIHRvIGdpdmVuIGxlbmd0aFxuICAgICAqIEBwYXJhbSB2YWx1ZSBudW1iZXJcbiAgICAgKiBAcGFyYW0gc2V0dGluZ3MgU2VlIHtAbGluayBUdWlOdW1iZXJGb3JtYXRTZXR0aW5nc31cbiAgICAgKi9cbiAgICBwdWJsaWMgdHJhbnNmb3JtKFxuICAgICAgICB2YWx1ZTogbnVtYmVyLFxuICAgICAgICBzZXR0aW5nczogUGFydGlhbDxUdWlOdW1iZXJGb3JtYXRTZXR0aW5ncz4gPSB7fSxcbiAgICApOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJGb3JtYXQucGlwZShcbiAgICAgICAgICAgIG1hcCgoZm9ybWF0KSA9PlxuICAgICAgICAgICAgICAgIHR1aUZvcm1hdE51bWJlcih2YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAuLi5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogTnVtYmVyLmlzTmFOKGZvcm1hdC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEluZmluaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdC5wcmVjaXNpb24sXG4gICAgICAgICAgICAgICAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=