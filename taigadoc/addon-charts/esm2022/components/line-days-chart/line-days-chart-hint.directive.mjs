import { __decorate } from "tslib";
import { ContentChildren, DestroyRef, Directive, forwardRef, inject, Input, NgZone, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiLineChartDrivers } from '@taiga-ui/addon-charts/components/line-chart';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { TuiHoveredService } from '@taiga-ui/cdk/directives/hovered';
import { tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { combineLatest, filter } from 'rxjs';
import { TuiLineDaysChart } from './line-days-chart.component';
import * as i0 from "@angular/core";
function find(value, current) {
    return value.find(([day]) => day.daySame(current)) || [current, NaN];
}
// TODO: Consider extending TuiLineChartHintDirective
class TuiLineDaysChartHint {
    constructor() {
        this.charts = EMPTY_QUERY;
        this.destroyRef = inject(DestroyRef);
        this.zone = inject(NgZone);
        this.hovered$ = inject(TuiHoveredService);
    }
    ngAfterContentInit() {
        combineLatest([
            ...this.charts.map(({ charts }) => tuiLineChartDrivers(charts)),
            this.hovered$,
        ])
            .pipe(filter((result) => !result.some(Boolean)), tuiZonefree(this.zone), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            this.charts.forEach((chart) => chart.onHovered(NaN));
        });
    }
    getContext(day) {
        return this.getMap(...this.charts.map(({ value }) => value)).get(String(day)) || [];
    }
    raise(day) {
        const current = this.charts
            .map(({ value }) => (day ? find(value, day) : []))
            .filter(([_, value]) => !Number.isNaN(value));
        const sorted = [...current].sort((a, b) => a[1] - b[1]);
        this.charts.forEach((chart, index) => {
            const item = current[index];
            chart.onHovered(day);
            chart.zIndex = Math.max(item ? sorted.indexOf(item) : 0, 0);
        });
    }
    getMap(...values) {
        return (values[0] || []).reduce((map, [day]) => map.set(String(day), values.map((value) => find(value, day))), new Map());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineDaysChartHint, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineDaysChartHint, isStandalone: true, selector: "[tuiLineChartHint]", inputs: { hint: ["tuiLineChartHint", "hint"] }, providers: [TuiHoveredService], queries: [{ propertyName: "charts", predicate: i0.forwardRef(function () { return TuiLineDaysChart; }) }], ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiLineDaysChartHint.prototype, "getMap", null);
export { TuiLineDaysChartHint };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineDaysChartHint, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiLineChartHint]',
                    providers: [TuiHoveredService],
                }]
        }], propDecorators: { charts: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiLineDaysChart)]
            }], hint: [{
                type: Input,
                args: ['tuiLineChartHint']
            }], getMap: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1kYXlzLWNoYXJ0LWhpbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvbGluZS1kYXlzLWNoYXJ0L2xpbmUtZGF5cy1jaGFydC1oaW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNILGVBQWUsRUFDZixVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXRELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUcxRCxPQUFPLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFN0QsU0FBUyxJQUFJLENBQUMsS0FBc0MsRUFBRSxPQUFlO0lBQ2pFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRUQscURBQXFEO0FBQ3JELE1BS2Esb0JBQW9CO0lBTGpDO1FBT3FCLFdBQU0sR0FBZ0MsV0FBVyxDQUFDO1FBRWxELGVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsU0FBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixhQUFRLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FtRHpEO0lBOUNVLGtCQUFrQjtRQUNyQixhQUFhLENBQUM7WUFDVixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFFLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFFBQVE7U0FDaEIsQ0FBQzthQUNHLElBQUksQ0FDRCxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUN6QyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN0QixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQ3RDO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sVUFBVSxDQUFDLEdBQVc7UUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEYsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXO1FBQ3BCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNO2FBQ3RCLEdBQUcsQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNqQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR08sTUFBTSxDQUNWLEdBQUcsTUFBOEM7UUFFakQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQzNCLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUNYLEdBQUcsQ0FBQyxHQUFHLENBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDMUMsRUFDTCxJQUFJLEdBQUcsRUFBMkMsQ0FDckQsQ0FBQztJQUNOLENBQUM7K0dBeERRLG9CQUFvQjttR0FBcEIsb0JBQW9CLGlIQUZsQixDQUFDLGlCQUFpQixDQUFDLG9GQUdJLGdCQUFnQjs7QUE0QzFDO0lBRFAsT0FBTztrREFZUDtTQXhEUSxvQkFBb0I7NEZBQXBCLG9CQUFvQjtrQkFMaEMsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQ2pDOzhCQUdvQixNQUFNO3NCQUR0QixlQUFlO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFRNUMsSUFBSTtzQkFEVixLQUFLO3VCQUFDLGtCQUFrQjtnQkFxQ2pCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50SW5pdCwgUXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIERlc3Ryb3lSZWYsXG4gICAgRGlyZWN0aXZlLFxuICAgIGZvcndhcmRSZWYsXG4gICAgaW5qZWN0LFxuICAgIElucHV0LFxuICAgIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2VVbnRpbERlc3Ryb3llZH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHt0dWlMaW5lQ2hhcnREcml2ZXJzfSBmcm9tICdAdGFpZ2EtdWkvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvbGluZS1jaGFydCc7XG5pbXBvcnQge0VNUFRZX1FVRVJZfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7VHVpRGF5fSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RhdGUtdGltZSc7XG5pbXBvcnQge1R1aUhvdmVyZWRTZXJ2aWNlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RpcmVjdGl2ZXMvaG92ZXJlZCc7XG5pbXBvcnQge3R1aVpvbmVmcmVlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL29ic2VydmFibGVzJztcbmltcG9ydCB0eXBlIHtUdWlDb250ZXh0fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3R5cGVzJztcbmltcG9ydCB7dHVpUHVyZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB0eXBlIHtUdWlQb2ludH0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHR5cGUge1BvbHltb3JwaGV1c0NvbnRlbnR9IGZyb20gJ0B0YWlnYS11aS9wb2x5bW9ycGhldXMnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0LCBmaWx0ZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1R1aUxpbmVEYXlzQ2hhcnR9IGZyb20gJy4vbGluZS1kYXlzLWNoYXJ0LmNvbXBvbmVudCc7XG5cbmZ1bmN0aW9uIGZpbmQodmFsdWU6IFJlYWRvbmx5QXJyYXk8W1R1aURheSwgbnVtYmVyXT4sIGN1cnJlbnQ6IFR1aURheSk6IFtUdWlEYXksIG51bWJlcl0ge1xuICAgIHJldHVybiB2YWx1ZS5maW5kKChbZGF5XSkgPT4gZGF5LmRheVNhbWUoY3VycmVudCkpIHx8IFtjdXJyZW50LCBOYU5dO1xufVxuXG4vLyBUT0RPOiBDb25zaWRlciBleHRlbmRpbmcgVHVpTGluZUNoYXJ0SGludERpcmVjdGl2ZVxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlMaW5lQ2hhcnRIaW50XScsXG4gICAgcHJvdmlkZXJzOiBbVHVpSG92ZXJlZFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlMaW5lRGF5c0NoYXJ0SGludCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBUdWlMaW5lRGF5c0NoYXJ0KSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNoYXJ0czogUXVlcnlMaXN0PFR1aUxpbmVEYXlzQ2hhcnQ+ID0gRU1QVFlfUVVFUlk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3lSZWYgPSBpbmplY3QoRGVzdHJveVJlZik7XG4gICAgcHJpdmF0ZSByZWFkb25seSB6b25lID0gaW5qZWN0KE5nWm9uZSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBob3ZlcmVkJCA9IGluamVjdChUdWlIb3ZlcmVkU2VydmljZSk7XG5cbiAgICBASW5wdXQoJ3R1aUxpbmVDaGFydEhpbnQnKVxuICAgIHB1YmxpYyBoaW50OiBQb2x5bW9ycGhldXNDb250ZW50PFR1aUNvbnRleHQ8cmVhZG9ubHkgVHVpUG9pbnRbXT4+O1xuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICAuLi50aGlzLmNoYXJ0cy5tYXAoKHtjaGFydHN9KSA9PiB0dWlMaW5lQ2hhcnREcml2ZXJzKGNoYXJ0cykpLFxuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkJCxcbiAgICAgICAgXSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcigocmVzdWx0KSA9PiAhcmVzdWx0LnNvbWUoQm9vbGVhbikpLFxuICAgICAgICAgICAgICAgIHR1aVpvbmVmcmVlKHRoaXMuem9uZSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveVJlZiksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0cy5mb3JFYWNoKChjaGFydCkgPT4gY2hhcnQub25Ib3ZlcmVkKE5hTikpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbnRleHQoZGF5OiBUdWlEYXkpOiBSZWFkb25seUFycmF5PFtUdWlEYXksIG51bWJlcl0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWFwKC4uLnRoaXMuY2hhcnRzLm1hcCgoe3ZhbHVlfSkgPT4gdmFsdWUpKS5nZXQoU3RyaW5nKGRheSkpIHx8IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyByYWlzZShkYXk6IFR1aURheSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5jaGFydHNcbiAgICAgICAgICAgIC5tYXAoKHt2YWx1ZX0pID0+IChkYXkgPyBmaW5kKHZhbHVlLCBkYXkpIDogW10pKVxuICAgICAgICAgICAgLmZpbHRlcigoW18sIHZhbHVlXSkgPT4gIU51bWJlci5pc05hTih2YWx1ZSkpO1xuICAgICAgICBjb25zdCBzb3J0ZWQgPSBbLi4uY3VycmVudF0uc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pO1xuXG4gICAgICAgIHRoaXMuY2hhcnRzLmZvckVhY2goKGNoYXJ0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGN1cnJlbnRbaW5kZXhdO1xuXG4gICAgICAgICAgICBjaGFydC5vbkhvdmVyZWQoZGF5KTtcbiAgICAgICAgICAgIGNoYXJ0LnpJbmRleCA9IE1hdGgubWF4KGl0ZW0gPyBzb3J0ZWQuaW5kZXhPZihpdGVtKSA6IDAsIDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBAdHVpUHVyZVxuICAgIHByaXZhdGUgZ2V0TWFwKFxuICAgICAgICAuLi52YWx1ZXM6IEFycmF5PFJlYWRvbmx5QXJyYXk8W1R1aURheSwgbnVtYmVyXT4+XG4gICAgKTogTWFwPHN0cmluZywgUmVhZG9ubHlBcnJheTxbVHVpRGF5LCBudW1iZXJdPj4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlc1swXSB8fCBbXSkucmVkdWNlKFxuICAgICAgICAgICAgKG1hcCwgW2RheV0pID0+XG4gICAgICAgICAgICAgICAgbWFwLnNldChcbiAgICAgICAgICAgICAgICAgICAgU3RyaW5nKGRheSksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiBmaW5kKHZhbHVlLCBkYXkpKSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgbmV3IE1hcDxzdHJpbmcsIFJlYWRvbmx5QXJyYXk8W1R1aURheSwgbnVtYmVyXT4+KCksXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19