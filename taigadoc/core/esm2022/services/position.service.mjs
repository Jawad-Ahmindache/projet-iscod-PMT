import { inject, Injectable, NgZone } from '@angular/core';
import { WA_ANIMATION_FRAME } from '@ng-web-apis/common';
import { EMPTY_CLIENT_RECT } from '@taiga-ui/cdk/constants';
import { tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { TuiPositionAccessor } from '@taiga-ui/core/classes';
import { finalize, map, Observable, startWith } from 'rxjs';
import * as i0 from "@angular/core";
class TuiPositionService extends Observable {
    constructor() {
        const animationFrame$ = inject(WA_ANIMATION_FRAME);
        const zone = inject(NgZone);
        super((subscriber) => animationFrame$
            .pipe(startWith(null), map(() => this.accessor.getPosition(this.el.getBoundingClientRect(), this.el)), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT)))
            .subscribe(subscriber));
        this.el = tuiInjectElement();
        this.accessor = inject(TuiPositionAccessor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPositionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPositionService }); }
}
export { TuiPositionService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPositionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc2VydmljZXMvcG9zaXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE9BQU8sRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRTFELE1BQ2Esa0JBQW1CLFNBQVEsVUFBb0I7SUFJeEQ7UUFDSSxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFNUIsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FDakIsZUFBZTthQUNWLElBQUksQ0FDRCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLEVBQy9CLElBQUksQ0FBQyxFQUFFLENBQ1YsQ0FDSixFQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFDakIsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FDL0Q7YUFDQSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQzdCLENBQUM7UUFyQlcsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBcUJ4RCxDQUFDOytHQXZCUSxrQkFBa0I7bUhBQWxCLGtCQUFrQjs7U0FBbEIsa0JBQWtCOzRGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgSW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V0FfQU5JTUFUSU9OX0ZSQU1FfSBmcm9tICdAbmctd2ViLWFwaXMvY29tbW9uJztcbmltcG9ydCB7RU1QVFlfQ0xJRU5UX1JFQ1R9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB7dHVpWm9uZWZyZWV9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge1R1aVBvc2l0aW9uQWNjZXNzb3J9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHR5cGUge1R1aVBvaW50fSBmcm9tICdAdGFpZ2EtdWkvY29yZS90eXBlcyc7XG5pbXBvcnQge2ZpbmFsaXplLCBtYXAsIE9ic2VydmFibGUsIHN0YXJ0V2l0aH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUdWlQb3NpdGlvblNlcnZpY2UgZXh0ZW5kcyBPYnNlcnZhYmxlPFR1aVBvaW50PiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbCA9IHR1aUluamVjdEVsZW1lbnQoKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yID0gaW5qZWN0KFR1aVBvc2l0aW9uQWNjZXNzb3IpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkZyYW1lJCA9IGluamVjdChXQV9BTklNQVRJT05fRlJBTUUpO1xuICAgICAgICBjb25zdCB6b25lID0gaW5qZWN0KE5nWm9uZSk7XG5cbiAgICAgICAgc3VwZXIoKHN1YnNjcmliZXIpID0+XG4gICAgICAgICAgICBhbmltYXRpb25GcmFtZSRcbiAgICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBtYXAoKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjZXNzb3IuZ2V0UG9zaXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdHVpWm9uZWZyZWUoem9uZSksXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMuYWNjZXNzb3IuZ2V0UG9zaXRpb24oRU1QVFlfQ0xJRU5UX1JFQ1QpKSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShzdWJzY3JpYmVyKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=