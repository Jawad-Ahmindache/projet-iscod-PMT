import { inject, Pipe } from '@angular/core';
import { TuiTableFiltersDirective } from './table-filters.directive';
import * as i0 from "@angular/core";
class TuiTableFiltersPipe {
    constructor() {
        this.filters = inject((TuiTableFiltersDirective));
    }
    transform(items) {
        return this.filters.filter(items);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersPipe, isStandalone: true, name: "tuiTableFilters" }); }
}
export { TuiTableFiltersPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiTableFilters',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZmlsdGVycy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tdGFibGUvZGlyZWN0aXZlcy90YWJsZS1maWx0ZXJzL3RhYmxlLWZpbHRlcnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFbkUsTUFJYSxtQkFBbUI7SUFKaEM7UUFLcUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxDQUFBLHdCQUEyQixDQUFBLENBQUMsQ0FBQztLQUtsRTtJQUhVLFNBQVMsQ0FBSSxLQUFtQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7K0dBTFEsbUJBQW1COzZHQUFuQixtQkFBbUI7O1NBQW5CLG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUovQixJQUFJO21CQUFDO29CQUNGLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUUsaUJBQWlCO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aW5qZWN0LCBQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUdWlUYWJsZUZpbHRlcnNEaXJlY3RpdmV9IGZyb20gJy4vdGFibGUtZmlsdGVycy5kaXJlY3RpdmUnO1xuXG5AUGlwZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBuYW1lOiAndHVpVGFibGVGaWx0ZXJzJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGFibGVGaWx0ZXJzUGlwZTxUPiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsdGVycyA9IGluamVjdChUdWlUYWJsZUZpbHRlcnNEaXJlY3RpdmU8VD4pO1xuXG4gICAgcHVibGljIHRyYW5zZm9ybTxUPihpdGVtczogcmVhZG9ubHkgVFtdKTogT2JzZXJ2YWJsZTxyZWFkb25seSBUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5maWx0ZXIoaXRlbXMpO1xuICAgIH1cbn1cbiJdfQ==