import { __decorate } from "tslib";
import { computed, Directive, inject } from '@angular/core';
import { EMPTY_CLIENT_RECT } from '@taiga-ui/cdk/constants';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { TUI_IS_TOUCH } from '@taiga-ui/cdk/tokens';
import { tuiGetActualTarget, tuiPointToClientRect } from '@taiga-ui/cdk/utils/dom';
import { tuiAsDriver, tuiAsRectAccessor, TuiRectAccessor } from '@taiga-ui/core/classes';
import { shouldCall } from '@taiga-ui/event-plugins';
import { TuiDropdownDriver } from './dropdown.driver';
import * as i0 from "@angular/core";
function activeZoneFilter(event) {
    return !event || !this.activeZone.contains(tuiGetActualTarget(event));
}
class TuiDropdownContext extends TuiRectAccessor {
    constructor() {
        super(...arguments);
        this.isTouch = inject(TUI_IS_TOUCH);
        this.driver = inject(TuiDropdownDriver);
        this.currentRect = EMPTY_CLIENT_RECT;
        this.userSelect = computed(() => (this.isTouch() ? 'none' : null));
        this.activeZone = inject(TuiActiveZone);
        this.type = 'dropdown';
    }
    getClientRect() {
        return this.currentRect;
    }
    closeDropdown(_event) {
        this.driver.next(false);
        this.currentRect = EMPTY_CLIENT_RECT;
    }
    onContextMenu(x, y) {
        this.currentRect = tuiPointToClientRect(x, y);
        this.driver.next(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownContext, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownContext, isStandalone: true, selector: "[tuiDropdownContext]", host: { listeners: { "document:pointerdown.silent": "closeDropdown($event)", "document:contextmenu.capture.silent": "closeDropdown($event)", "document:keydown.esc": "closeDropdown()", "longtap": "onContextMenu($event.detail.clientX, $event.detail.clientY)" }, properties: { "style.user-select": "userSelect()", "style.-webkit-user-select": "userSelect()", "style.-webkit-touch-callout": "userSelect()" } }, providers: [
            TuiActiveZone,
            TuiDropdownDriver,
            tuiAsDriver(TuiDropdownDriver),
            tuiAsRectAccessor(TuiDropdownContext),
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    shouldCall(activeZoneFilter)
], TuiDropdownContext.prototype, "closeDropdown", null);
export { TuiDropdownContext };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownContext, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownContext]',
                    providers: [
                        TuiActiveZone,
                        TuiDropdownDriver,
                        tuiAsDriver(TuiDropdownDriver),
                        tuiAsRectAccessor(TuiDropdownContext),
                    ],
                    host: {
                        '[style.user-select]': 'userSelect()',
                        '[style.-webkit-user-select]': 'userSelect()',
                        '[style.-webkit-touch-callout]': 'userSelect()',
                        '(document:pointerdown.silent)': 'closeDropdown($event)',
                        '(document:contextmenu.capture.silent)': 'closeDropdown($event)',
                        '(document:keydown.esc)': 'closeDropdown()',
                        '(longtap)': 'onContextMenu($event.detail.clientX, $event.detail.clientY)',
                    },
                }]
        }], propDecorators: { closeDropdown: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY29udGV4dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2RpcmVjdGl2ZXMvZHJvcGRvd24vZHJvcGRvd24tY29udGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDOztBQUVwRCxTQUFTLGdCQUFnQixDQUEyQixLQUFhO0lBQzdELE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzFFLENBQUM7QUFFRCxNQW1CYSxrQkFBbUIsU0FBUSxlQUFlO0lBbkJ2RDs7UUFvQnFCLFlBQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsV0FBTSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVDLGdCQUFXLEdBQUcsaUJBQWlCLENBQUM7UUFFckIsZUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlELGVBQVUsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFdEMsU0FBSSxHQUFHLFVBQVUsQ0FBQztLQWdCckM7SUFkVSxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBR1MsYUFBYSxDQUFDLE1BQWM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztJQUN6QyxDQUFDO0lBRVMsYUFBYSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7K0dBdkJRLGtCQUFrQjttR0FBbEIsa0JBQWtCLDBkQWhCaEI7WUFDUCxhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztTQUN4Qzs7QUEwQlM7SUFEVCxVQUFVLENBQUMsZ0JBQWdCLENBQUM7dURBSTVCO1NBbEJRLGtCQUFrQjs0RkFBbEIsa0JBQWtCO2tCQW5COUIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsU0FBUyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixXQUFXLENBQUMsaUJBQWlCLENBQUM7d0JBQzlCLGlCQUFpQixvQkFBb0I7cUJBQ3hDO29CQUNELElBQUksRUFBRTt3QkFDRixxQkFBcUIsRUFBRSxjQUFjO3dCQUNyQyw2QkFBNkIsRUFBRSxjQUFjO3dCQUM3QywrQkFBK0IsRUFBRSxjQUFjO3dCQUMvQywrQkFBK0IsRUFBRSx1QkFBdUI7d0JBQ3hELHVDQUF1QyxFQUFFLHVCQUF1Qjt3QkFDaEUsd0JBQXdCLEVBQUUsaUJBQWlCO3dCQUMzQyxXQUFXLEVBQUUsNkRBQTZEO3FCQUM3RTtpQkFDSjs4QkFnQmEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcHV0ZWQsIERpcmVjdGl2ZSwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RU1QVFlfQ0xJRU5UX1JFQ1R9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB7VHVpQWN0aXZlWm9uZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL2FjdGl2ZS16b25lJztcbmltcG9ydCB7VFVJX0lTX1RPVUNIfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3Rva2Vucyc7XG5pbXBvcnQge3R1aUdldEFjdHVhbFRhcmdldCwgdHVpUG9pbnRUb0NsaWVudFJlY3R9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7dHVpQXNEcml2ZXIsIHR1aUFzUmVjdEFjY2Vzc29yLCBUdWlSZWN0QWNjZXNzb3J9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHtzaG91bGRDYWxsfSBmcm9tICdAdGFpZ2EtdWkvZXZlbnQtcGx1Z2lucyc7XG5cbmltcG9ydCB7VHVpRHJvcGRvd25Ecml2ZXJ9IGZyb20gJy4vZHJvcGRvd24uZHJpdmVyJztcblxuZnVuY3Rpb24gYWN0aXZlWm9uZUZpbHRlcih0aGlzOiBUdWlEcm9wZG93bkNvbnRleHQsIGV2ZW50PzogRXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWV2ZW50IHx8ICF0aGlzLmFjdGl2ZVpvbmUuY29udGFpbnModHVpR2V0QWN0dWFsVGFyZ2V0KGV2ZW50KSk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpRHJvcGRvd25Db250ZXh0XScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFR1aUFjdGl2ZVpvbmUsXG4gICAgICAgIFR1aURyb3Bkb3duRHJpdmVyLFxuICAgICAgICB0dWlBc0RyaXZlcihUdWlEcm9wZG93bkRyaXZlciksXG4gICAgICAgIHR1aUFzUmVjdEFjY2Vzc29yKFR1aURyb3Bkb3duQ29udGV4dCksXG4gICAgXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbc3R5bGUudXNlci1zZWxlY3RdJzogJ3VzZXJTZWxlY3QoKScsXG4gICAgICAgICdbc3R5bGUuLXdlYmtpdC11c2VyLXNlbGVjdF0nOiAndXNlclNlbGVjdCgpJyxcbiAgICAgICAgJ1tzdHlsZS4td2Via2l0LXRvdWNoLWNhbGxvdXRdJzogJ3VzZXJTZWxlY3QoKScsXG4gICAgICAgICcoZG9jdW1lbnQ6cG9pbnRlcmRvd24uc2lsZW50KSc6ICdjbG9zZURyb3Bkb3duKCRldmVudCknLFxuICAgICAgICAnKGRvY3VtZW50OmNvbnRleHRtZW51LmNhcHR1cmUuc2lsZW50KSc6ICdjbG9zZURyb3Bkb3duKCRldmVudCknLFxuICAgICAgICAnKGRvY3VtZW50OmtleWRvd24uZXNjKSc6ICdjbG9zZURyb3Bkb3duKCknLFxuICAgICAgICAnKGxvbmd0YXApJzogJ29uQ29udGV4dE1lbnUoJGV2ZW50LmRldGFpbC5jbGllbnRYLCAkZXZlbnQuZGV0YWlsLmNsaWVudFkpJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlEcm9wZG93bkNvbnRleHQgZXh0ZW5kcyBUdWlSZWN0QWNjZXNzb3Ige1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNUb3VjaCA9IGluamVjdChUVUlfSVNfVE9VQ0gpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZHJpdmVyID0gaW5qZWN0KFR1aURyb3Bkb3duRHJpdmVyKTtcbiAgICBwcml2YXRlIGN1cnJlbnRSZWN0ID0gRU1QVFlfQ0xJRU5UX1JFQ1Q7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdXNlclNlbGVjdCA9IGNvbXB1dGVkKCgpID0+ICh0aGlzLmlzVG91Y2goKSA/ICdub25lJyA6IG51bGwpKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYWN0aXZlWm9uZSA9IGluamVjdChUdWlBY3RpdmVab25lKTtcblxuICAgIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ2Ryb3Bkb3duJztcblxuICAgIHB1YmxpYyBnZXRDbGllbnRSZWN0KCk6IERPTVJlY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVjdDtcbiAgICB9XG5cbiAgICBAc2hvdWxkQ2FsbChhY3RpdmVab25lRmlsdGVyKVxuICAgIHByb3RlY3RlZCBjbG9zZURyb3Bkb3duKF9ldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJpdmVyLm5leHQoZmFsc2UpO1xuICAgICAgICB0aGlzLmN1cnJlbnRSZWN0ID0gRU1QVFlfQ0xJRU5UX1JFQ1Q7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ29udGV4dE1lbnUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UmVjdCA9IHR1aVBvaW50VG9DbGllbnRSZWN0KHgsIHkpO1xuICAgICAgICB0aGlzLmRyaXZlci5uZXh0KHRydWUpO1xuICAgIH1cbn1cbiJdfQ==