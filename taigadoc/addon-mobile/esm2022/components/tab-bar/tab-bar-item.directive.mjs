import { Directive, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLinkActive } from '@angular/router';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { EMPTY, filter } from 'rxjs';
import { TuiTabBarComponent } from './tab-bar.component';
import * as i0 from "@angular/core";
class TuiTabBarItemDirective {
    constructor() {
        const tabs = inject(TuiTabBarComponent);
        const el = tuiInjectElement();
        const link = inject(RouterLinkActive, { optional: true })?.isActiveChange || EMPTY;
        link.pipe(filter(Boolean), tuiWatch(), takeUntilDestroyed()).subscribe(() => tabs.setActive(el));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabBarItemDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabBarItemDirective, isStandalone: true, selector: "[tuiTabBarItem][routerLinkActive]", ngImport: i0 }); }
}
export { TuiTabBarItemDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabBarItemDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTabBarItem][routerLinkActive]',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJhci1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLW1vYmlsZS9jb21wb25lbnRzL3RhYi1iYXIvdGFiLWJhci1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFbkMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7O0FBRXZELE1BSWEsc0JBQXNCO0lBQy9CO1FBQ0ksTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEMsTUFBTSxFQUFFLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5QixNQUFNLElBQUksR0FDTixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBRSxjQUFjLElBQUksS0FBSyxDQUFDO1FBRXhFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQ3JCLENBQUM7SUFDTixDQUFDOytHQVZRLHNCQUFzQjttR0FBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7NEZBQXRCLHNCQUFzQjtrQkFKbEMsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLG1DQUFtQztpQkFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge1JvdXRlckxpbmtBY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge3R1aVdhdGNofSBmcm9tICdAdGFpZ2EtdWkvY2RrL29ic2VydmFibGVzJztcbmltcG9ydCB7dHVpSW5qZWN0RWxlbWVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuaW1wb3J0IHR5cGUge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtFTVBUWSwgZmlsdGVyfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUdWlUYWJCYXJDb21wb25lbnR9IGZyb20gJy4vdGFiLWJhci5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aVRhYkJhckl0ZW1dW3JvdXRlckxpbmtBY3RpdmVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGFiQmFySXRlbURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBpbmplY3QoVHVpVGFiQmFyQ29tcG9uZW50KTtcbiAgICAgICAgY29uc3QgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbms6IE9ic2VydmFibGU8Ym9vbGVhbj4gPVxuICAgICAgICAgICAgaW5qZWN0KFJvdXRlckxpbmtBY3RpdmUsIHtvcHRpb25hbDogdHJ1ZX0pPy5pc0FjdGl2ZUNoYW5nZSB8fCBFTVBUWTtcblxuICAgICAgICBsaW5rLnBpcGUoZmlsdGVyKEJvb2xlYW4pLCB0dWlXYXRjaCgpLCB0YWtlVW50aWxEZXN0cm95ZWQoKSkuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgICB0YWJzLnNldEFjdGl2ZShlbCksXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19