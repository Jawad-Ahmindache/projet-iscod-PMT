import { inject, Pipe } from '@angular/core';
import { TUI_COUNTRIES } from '@taiga-ui/kit/tokens';
import { map } from 'rxjs';
import * as i0 from "@angular/core";
class TuiSortCountriesPipe {
    constructor() {
        this.countriesNames$ = inject(TUI_COUNTRIES);
    }
    transform(countries) {
        return this.countriesNames$.pipe(map((names) => [...countries].sort((a, b) => names[a].localeCompare(names[b]))));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSortCountriesPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiSortCountriesPipe, isStandalone: true, name: "tuiSortCountries" }); }
}
export { TuiSortCountriesPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSortCountriesPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiSortCountries',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1jb3VudHJpZXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9waXBlcy9zb3J0LWNvdW50cmllcy9zb3J0LWNvdW50cmllcy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVuRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUV6QixNQUlhLG9CQUFvQjtJQUpqQztRQUtxQixvQkFBZSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztLQVc1RDtJQVRVLFNBQVMsQ0FDWixTQUF1QztRQUV2QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUM1QixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNWLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2xFLENBQ0osQ0FBQztJQUNOLENBQUM7K0dBWFEsb0JBQW9COzZHQUFwQixvQkFBb0I7O1NBQXBCLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQUpoQyxJQUFJO21CQUFDO29CQUNGLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUUsa0JBQWtCO2lCQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aW5qZWN0LCBQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtUdWlDb3VudHJ5SXNvQ29kZX0gZnJvbSAnQHRhaWdhLXVpL2kxOG4vdHlwZXMnO1xuaW1wb3J0IHtUVUlfQ09VTlRSSUVTfSBmcm9tICdAdGFpZ2EtdWkva2l0L3Rva2Vucyc7XG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcyc7XG5cbkBQaXBlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIG5hbWU6ICd0dWlTb3J0Q291bnRyaWVzJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpU29ydENvdW50cmllc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvdW50cmllc05hbWVzJCA9IGluamVjdChUVUlfQ09VTlRSSUVTKTtcblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oXG4gICAgICAgIGNvdW50cmllczogcmVhZG9ubHkgVHVpQ291bnRyeUlzb0NvZGVbXSxcbiAgICApOiBPYnNlcnZhYmxlPFR1aUNvdW50cnlJc29Db2RlW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY291bnRyaWVzTmFtZXMkLnBpcGUoXG4gICAgICAgICAgICBtYXAoKG5hbWVzKSA9PlxuICAgICAgICAgICAgICAgIFsuLi5jb3VudHJpZXNdLnNvcnQoKGEsIGIpID0+IG5hbWVzW2FdLmxvY2FsZUNvbXBhcmUobmFtZXNbYl0pKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19