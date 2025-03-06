import { inject, Pipe } from '@angular/core';
import { TUI_MONTHS } from '@taiga-ui/core/tokens';
import { map } from 'rxjs';
import * as i0 from "@angular/core";
class TuiMonthPipe {
    constructor() {
        this.months$ = inject(TUI_MONTHS);
    }
    transform({ month }) {
        return this.months$.pipe(map((months) => months[month] || months[0]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMonthPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiMonthPipe, isStandalone: true, name: "tuiMonth" }); }
}
export { TuiMonthPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMonthPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiMonth',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvcGlwZXMvbW9udGgvbW9udGgucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFakQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFekIsTUFJYSxZQUFZO0lBSnpCO1FBS3FCLFlBQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7S0FLakQ7SUFIVSxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7K0dBTFEsWUFBWTs2R0FBWixZQUFZOztTQUFaLFlBQVk7NEZBQVosWUFBWTtrQkFKeEIsSUFBSTttQkFBQztvQkFDRixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFLFVBQVU7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1BpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpbmplY3QsIFBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1R1aU1vbnRofSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RhdGUtdGltZSc7XG5pbXBvcnQge1RVSV9NT05USFN9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcyc7XG5cbkBQaXBlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIG5hbWU6ICd0dWlNb250aCcsXG59KVxuZXhwb3J0IGNsYXNzIFR1aU1vbnRoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9udGhzJCA9IGluamVjdChUVUlfTU9OVEhTKTtcblxuICAgIHB1YmxpYyB0cmFuc2Zvcm0oe21vbnRofTogVHVpTW9udGgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tb250aHMkLnBpcGUobWFwKChtb250aHMpID0+IG1vbnRoc1ttb250aF0gfHwgbW9udGhzWzBdKSk7XG4gICAgfVxufVxuIl19