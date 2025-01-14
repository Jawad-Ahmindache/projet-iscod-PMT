import { Directive, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IntersectionObserverService, WA_INTERSECTION_THRESHOLD, } from '@ng-web-apis/intersection-observer';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { catchError, distinctUntilChanged, EMPTY, map } from 'rxjs';
import * as i0 from "@angular/core";
// TODO: Consider making universal and moving to CDK
class TuiStuck {
    constructor() {
        this.stuck = toSignal(inject(IntersectionObserverService).pipe(map((entries) => (entries[entries.length - 1]?.intersectionRatio ?? 0) < 1), distinctUntilChanged(), tuiWatch(), catchError(() => EMPTY)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStuck, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiStuck, isStandalone: true, selector: "tui-stuck:never", host: { properties: { "class._stuck": "stuck()" } }, providers: [
            IntersectionObserverService,
            {
                provide: WA_INTERSECTION_THRESHOLD,
                useValue: [0, 1],
            },
        ], ngImport: i0 }); }
}
export { TuiStuck };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStuck, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-stuck:never',
                    providers: [
                        IntersectionObserverService,
                        {
                            provide: WA_INTERSECTION_THRESHOLD,
                            useValue: [0, 1],
                        },
                    ],
                    host: { '[class._stuck]': 'stuck()' },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1Y2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tdGFibGUvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3N0dWNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUNILDJCQUEyQixFQUMzQix5QkFBeUIsR0FDNUIsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUVsRSxvREFBb0Q7QUFDcEQsTUFZYSxRQUFRO0lBWnJCO1FBYXVCLFVBQUssR0FBRyxRQUFRLENBQy9CLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLElBQUksQ0FDcEMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUMzRSxvQkFBb0IsRUFBRSxFQUN0QixRQUFRLEVBQUUsRUFDVixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQzFCLENBQ0osQ0FBQztLQUNMOytHQVRZLFFBQVE7bUdBQVIsUUFBUSxtSEFUTjtZQUNQLDJCQUEyQjtZQUMzQjtnQkFDSSxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ25CO1NBQ0o7O1NBR1EsUUFBUTs0RkFBUixRQUFRO2tCQVpwQixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixTQUFTLEVBQUU7d0JBQ1AsMkJBQTJCO3dCQUMzQjs0QkFDSSxPQUFPLEVBQUUseUJBQXlCOzRCQUNsQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lCQUNuQjtxQkFDSjtvQkFDRCxJQUFJLEVBQUUsRUFBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUM7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge1xuICAgIEludGVyc2VjdGlvbk9ic2VydmVyU2VydmljZSxcbiAgICBXQV9JTlRFUlNFQ1RJT05fVEhSRVNIT0xELFxufSBmcm9tICdAbmctd2ViLWFwaXMvaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcbmltcG9ydCB7dHVpV2F0Y2h9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHtjYXRjaEVycm9yLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgRU1QVFksIG1hcH0gZnJvbSAncnhqcyc7XG5cbi8vIFRPRE86IENvbnNpZGVyIG1ha2luZyB1bml2ZXJzYWwgYW5kIG1vdmluZyB0byBDREtcbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktc3R1Y2s6bmV2ZXInLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlclNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IFdBX0lOVEVSU0VDVElPTl9USFJFU0hPTEQsXG4gICAgICAgICAgICB1c2VWYWx1ZTogWzAsIDFdLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgaG9zdDogeydbY2xhc3MuX3N0dWNrXSc6ICdzdHVjaygpJ30sXG59KVxuZXhwb3J0IGNsYXNzIFR1aVN0dWNrIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3R1Y2sgPSB0b1NpZ25hbChcbiAgICAgICAgaW5qZWN0KEludGVyc2VjdGlvbk9ic2VydmVyU2VydmljZSkucGlwZShcbiAgICAgICAgICAgIG1hcCgoZW50cmllcykgPT4gKGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXT8uaW50ZXJzZWN0aW9uUmF0aW8gPz8gMCkgPCAxKSxcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgICB0dWlXYXRjaCgpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBFTVBUWSksIC8vIFNTUlxuICAgICAgICApLFxuICAgICk7XG59XG4iXX0=