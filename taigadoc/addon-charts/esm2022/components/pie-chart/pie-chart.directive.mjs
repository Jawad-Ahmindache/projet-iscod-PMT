import { Directive, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WA_ANIMATION_FRAME, WA_PERFORMANCE } from '@ng-web-apis/common';
import { tuiDescribeSector } from '@taiga-ui/addon-charts/utils';
import { tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiClamp } from '@taiga-ui/cdk/utils/math';
import { tuiEaseInOutQuad } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { BehaviorSubject, map, pairwise, switchMap, takeWhile } from 'rxjs';
import * as i0 from "@angular/core";
class TuiPieChartDirective {
    constructor() {
        this.sector$ = new BehaviorSubject([0, 0]);
        this.el = tuiInjectElement();
        this.performance = inject(WA_PERFORMANCE);
        this.animationFrame$ = inject(WA_ANIMATION_FRAME);
        this.speed = inject(TUI_ANIMATIONS_SPEED);
        this.$ = this.sector$
            .pipe(pairwise(), switchMap(([prev, cur]) => {
            const now = this.performance.now();
            const startDelta = cur[0] - prev[0];
            const endDelta = cur[1] - prev[1];
            return this.animationFrame$.pipe(map((timestamp) => tuiEaseInOutQuad(tuiClamp((timestamp - now) / tuiGetDuration(this.speed), 0, 1))), takeWhile((progress) => progress < 1, true), map((progress) => [
                prev[0] + startDelta * progress,
                cur[1] > 359 ? cur[1] : prev[1] + endDelta * progress,
            ]));
        }), tuiZonefree(), takeUntilDestroyed())
            .subscribe(([start, end]) => this.el.setAttribute('d', tuiDescribeSector(start, end)));
    }
    set tuiPieChart(sector) {
        this.sector$.next(sector);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPieChartDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPieChartDirective, isStandalone: true, selector: "path[tuiPieChart]", inputs: { tuiPieChart: "tuiPieChart" }, ngImport: i0 }); }
}
export { TuiPieChartDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPieChartDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'path[tuiPieChart]',
                }]
        }], propDecorators: { tuiPieChart: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL3BpZS1jaGFydC9waWUtY2hhcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRTFFLE1BSWEsb0JBQW9CO0lBSmpDO1FBS3FCLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBNEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxPQUFFLEdBQUcsZ0JBQWdCLEVBQWtCLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckMsb0JBQWUsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxVQUFLLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbkMsTUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPO2FBQzlCLElBQUksQ0FDRCxRQUFRLEVBQUUsRUFDVixTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbkMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQzVCLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQ2QsZ0JBQWdCLENBQ1osUUFBUSxDQUNKLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQzlDLENBQUMsRUFDRCxDQUFDLENBQ0osQ0FDSixDQUNKLEVBQ0QsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUMzQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO2dCQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsUUFBUTtnQkFDL0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLFFBQVE7YUFDeEQsQ0FBQyxDQUNMLENBQUM7UUFDTixDQUFDLENBQUMsRUFDRixXQUFXLEVBQUUsRUFDYixrQkFBa0IsRUFBRSxDQUN2QjthQUNBLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUMzRCxDQUFDO0tBTVQ7SUFKRyxJQUNXLFdBQVcsQ0FBQyxNQUFpQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOytHQXpDUSxvQkFBb0I7bUdBQXBCLG9CQUFvQjs7U0FBcEIsb0JBQW9COzRGQUFwQixvQkFBb0I7a0JBSmhDLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxtQkFBbUI7aUJBQ2hDOzhCQXdDYyxXQUFXO3NCQURyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlVW50aWxEZXN0cm95ZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7V0FfQU5JTUFUSU9OX0ZSQU1FLCBXQV9QRVJGT1JNQU5DRX0gZnJvbSAnQG5nLXdlYi1hcGlzL2NvbW1vbic7XG5pbXBvcnQge3R1aURlc2NyaWJlU2VjdG9yfSBmcm9tICdAdGFpZ2EtdWkvYWRkb24tY2hhcnRzL3V0aWxzJztcbmltcG9ydCB7dHVpWm9uZWZyZWV9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge3R1aUNsYW1wfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21hdGgnO1xuaW1wb3J0IHt0dWlFYXNlSW5PdXRRdWFkfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtUVUlfQU5JTUFUSU9OU19TUEVFRH0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdG9rZW5zJztcbmltcG9ydCB7dHVpR2V0RHVyYXRpb259IGZyb20gJ0B0YWlnYS11aS9jb3JlL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIG1hcCwgcGFpcndpc2UsIHN3aXRjaE1hcCwgdGFrZVdoaWxlfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3BhdGhbdHVpUGllQ2hhcnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpUGllQ2hhcnREaXJlY3RpdmUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VjdG9yJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8cmVhZG9ubHkgW251bWJlciwgbnVtYmVyXT4oWzAsIDBdKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsID0gdHVpSW5qZWN0RWxlbWVudDxTVkdQYXRoRWxlbWVudD4oKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlcmZvcm1hbmNlID0gaW5qZWN0KFdBX1BFUkZPUk1BTkNFKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFuaW1hdGlvbkZyYW1lJCA9IGluamVjdChXQV9BTklNQVRJT05fRlJBTUUpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQgPSBpbmplY3QoVFVJX0FOSU1BVElPTlNfU1BFRUQpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSAkID0gdGhpcy5zZWN0b3IkXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgcGFpcndpc2UoKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoW3ByZXYsIGN1cl0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSB0aGlzLnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGVsdGEgPSBjdXJbMF0gLSBwcmV2WzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZERlbHRhID0gY3VyWzFdIC0gcHJldlsxXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbkZyYW1lJC5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAoKHRpbWVzdGFtcCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHR1aUVhc2VJbk91dFF1YWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVpQ2xhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aW1lc3RhbXAgLSBub3cpIC8gdHVpR2V0RHVyYXRpb24odGhpcy5zcGVlZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHRha2VXaGlsZSgocHJvZ3Jlc3MpID0+IHByb2dyZXNzIDwgMSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgIG1hcCgocHJvZ3Jlc3MpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZbMF0gKyBzdGFydERlbHRhICogcHJvZ3Jlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJbMV0gPiAzNTkgPyBjdXJbMV0gOiBwcmV2WzFdICsgZW5kRGVsdGEgKiBwcm9ncmVzcyxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdHVpWm9uZWZyZWUoKSxcbiAgICAgICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCgpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKFtzdGFydCwgZW5kXSkgPT5cbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdkJywgdHVpRGVzY3JpYmVTZWN0b3Ioc3RhcnQsIGVuZCkpLFxuICAgICAgICApO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHR1aVBpZUNoYXJ0KHNlY3RvcjogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyXSkge1xuICAgICAgICB0aGlzLnNlY3RvciQubmV4dChzZWN0b3IpO1xuICAgIH1cbn1cbiJdfQ==