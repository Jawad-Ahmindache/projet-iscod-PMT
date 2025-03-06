import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiAsPortal, TuiPortals } from '@taiga-ui/cdk/classes';
import { TuiDropdownService } from './dropdown.service';
import * as i0 from "@angular/core";
/**
 * Host element for dynamically created portals, for example using {@link TuiDropdownDirective}.
 */
class TuiDropdowns extends TuiPortals {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdowns, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdowns, isStandalone: true, selector: "tui-dropdowns", providers: [tuiAsPortal(TuiDropdownService)], usesInheritance: true, ngImport: i0, template: '<ng-container #viewContainer />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiDropdowns };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdowns, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'tui-dropdowns',
                    template: '<ng-container #viewContainer />',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [tuiAsPortal(TuiDropdownService)],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvZGlyZWN0aXZlcy9kcm9wZG93bi9kcm9wZG93bnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFdEQ7O0dBRUc7QUFDSCxNQU9hLFlBQWEsU0FBUSxVQUFVOytHQUEvQixZQUFZO21HQUFaLFlBQVksNERBRlYsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxpREFGbEMsaUNBQWlDOztTQUlsQyxZQUFZOzRGQUFaLFlBQVk7a0JBUHhCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7aUJBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpQXNQb3J0YWwsIFR1aVBvcnRhbHN9IGZyb20gJ0B0YWlnYS11aS9jZGsvY2xhc3Nlcyc7XG5cbmltcG9ydCB7VHVpRHJvcGRvd25TZXJ2aWNlfSBmcm9tICcuL2Ryb3Bkb3duLnNlcnZpY2UnO1xuXG4vKipcbiAqIEhvc3QgZWxlbWVudCBmb3IgZHluYW1pY2FsbHkgY3JlYXRlZCBwb3J0YWxzLCBmb3IgZXhhbXBsZSB1c2luZyB7QGxpbmsgVHVpRHJvcGRvd25EaXJlY3RpdmV9LlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAndHVpLWRyb3Bkb3ducycsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGFpbmVyICN2aWV3Q29udGFpbmVyIC8+JyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFt0dWlBc1BvcnRhbChUdWlEcm9wZG93blNlcnZpY2UpXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpRHJvcGRvd25zIGV4dGVuZHMgVHVpUG9ydGFscyB7fVxuIl19