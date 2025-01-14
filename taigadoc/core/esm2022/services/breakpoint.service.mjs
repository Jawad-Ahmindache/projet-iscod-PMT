import { inject, Injectable } from '@angular/core';
import { tuiZoneOptimized } from '@taiga-ui/cdk/observables';
import { TUI_WINDOW_SIZE } from '@taiga-ui/cdk/tokens';
import { TUI_MEDIA } from '@taiga-ui/core/tokens';
import { distinctUntilChanged, map, Observable, shareReplay } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
class TuiBreakpointService extends Observable {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.media = inject(TUI_MEDIA);
        this.sorted = Object.values(this.media).sort((a, b) => a - b);
        this.invert = Object.keys(this.media).reduce((ret, key) => ({
            ...ret,
            [this.media[key]]: key,
        }), {});
        this.stream$ = inject(TUI_WINDOW_SIZE).pipe(map(({ width }) => this.sorted.find((size) => size > width)), map((key) => this.invert[key || this.sorted[this.sorted.length - 1] || 0]), distinctUntilChanged(), tuiZoneOptimized(), shareReplay({ bufferSize: 1, refCount: true }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBreakpointService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBreakpointService, providedIn: 'root' }); }
}
export { TuiBreakpointService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBreakpointService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zZXJ2aWNlcy9icmVha3BvaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXJELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBSXhFOztHQUVHO0FBQ0gsTUFHYSxvQkFBcUIsU0FBUSxVQUF3QztJQXFCOUU7UUFDSSxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFyQjdDLFVBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUIsV0FBTSxHQUFhLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRSxXQUFNLEdBQTBDLE1BQU0sQ0FBQyxJQUFJLENBQ3hFLElBQUksQ0FBQyxLQUFLLENBQ2IsQ0FBQyxNQUFNLENBQ0osQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsR0FBRyxHQUFHO1lBQ04sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQTRCLENBQUMsQ0FBQyxFQUFFLEdBQUc7U0FDbEQsQ0FBQyxFQUNGLEVBQUUsQ0FDTCxDQUFDO1FBRWUsWUFBTyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQ25ELEdBQUcsQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFDMUQsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQzFFLG9CQUFvQixFQUFFLEVBQ3RCLGdCQUFnQixFQUFFLEVBQ2xCLFdBQVcsQ0FBQyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQy9DLENBQUM7SUFJRixDQUFDOytHQXZCUSxvQkFBb0I7bUhBQXBCLG9CQUFvQixjQUZqQixNQUFNOztTQUVULG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpWm9uZU9wdGltaXplZH0gZnJvbSAnQHRhaWdhLXVpL2Nkay9vYnNlcnZhYmxlcyc7XG5pbXBvcnQge1RVSV9XSU5ET1dfU0laRX0gZnJvbSAnQHRhaWdhLXVpL2Nkay90b2tlbnMnO1xuaW1wb3J0IHR5cGUge1R1aU1lZGlhfSBmcm9tICdAdGFpZ2EtdWkvY29yZS90b2tlbnMnO1xuaW1wb3J0IHtUVUlfTUVESUF9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIE9ic2VydmFibGUsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgVHVpQnJlYWtwb2ludE1lZGlhS2V5ID0ga2V5b2YgT21pdDxUdWlNZWRpYSwgJ3RhYmxldCc+O1xuXG4vKipcbiAqIFNlcnZpY2UgdG8gcHJvdmlkZSB0aGUgY3VycmVudCBicmVha3BvaW50IGJhc2VkIG9uIFRhaWdhIFVJJ3MgbWVkaWEgcXVlcmllc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlCcmVha3BvaW50U2VydmljZSBleHRlbmRzIE9ic2VydmFibGU8VHVpQnJlYWtwb2ludE1lZGlhS2V5IHwgbnVsbD4ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVkaWEgPSBpbmplY3QoVFVJX01FRElBKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNvcnRlZDogbnVtYmVyW10gPSBPYmplY3QudmFsdWVzKHRoaXMubWVkaWEpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGludmVydDogUmVjb3JkPG51bWJlciwgVHVpQnJlYWtwb2ludE1lZGlhS2V5PiA9IE9iamVjdC5rZXlzKFxuICAgICAgICB0aGlzLm1lZGlhLFxuICAgICkucmVkdWNlKFxuICAgICAgICAocmV0LCBrZXkpID0+ICh7XG4gICAgICAgICAgICAuLi5yZXQsXG4gICAgICAgICAgICBbdGhpcy5tZWRpYVtrZXkgYXMgVHVpQnJlYWtwb2ludE1lZGlhS2V5XV06IGtleSxcbiAgICAgICAgfSksXG4gICAgICAgIHt9LFxuICAgICk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0cmVhbSQgPSBpbmplY3QoVFVJX1dJTkRPV19TSVpFKS5waXBlKFxuICAgICAgICBtYXAoKHt3aWR0aH0pID0+IHRoaXMuc29ydGVkLmZpbmQoKHNpemUpID0+IHNpemUgPiB3aWR0aCkpLFxuICAgICAgICBtYXAoKGtleSkgPT4gdGhpcy5pbnZlcnRba2V5IHx8IHRoaXMuc29ydGVkW3RoaXMuc29ydGVkLmxlbmd0aCAtIDFdIHx8IDBdKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgdHVpWm9uZU9wdGltaXplZCgpLFxuICAgICAgICBzaGFyZVJlcGxheSh7YnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWV9KSxcbiAgICApO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKChzdWJzY3JpYmVyKSA9PiB0aGlzLnN0cmVhbSQuc3Vic2NyaWJlKHN1YnNjcmliZXIpKTtcbiAgICB9XG59XG4iXX0=