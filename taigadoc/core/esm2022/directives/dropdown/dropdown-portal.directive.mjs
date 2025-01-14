import { Directive, inject, Input, TemplateRef } from '@angular/core';
import { TuiDropdownService } from './dropdown.service';
import * as i0 from "@angular/core";
/**
 * @deprecated use {@link TuiPopup} directive instead
 */
class TuiDropdownPortal {
    constructor() {
        this.template = inject(TemplateRef);
        this.service = inject(TuiDropdownService);
    }
    set tuiDropdown(show) {
        this.viewRef?.destroy();
        if (show) {
            this.viewRef = this.service.addTemplate(this.template);
        }
    }
    ngOnDestroy() {
        this.viewRef?.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPortal, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownPortal, isStandalone: true, selector: "ng-template[tuiDropdown]", inputs: { tuiDropdown: "tuiDropdown" }, ngImport: i0 }); }
}
export { TuiDropdownPortal };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPortal, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiDropdown]',
                }]
        }], propDecorators: { tuiDropdown: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tcG9ydGFsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvZGlyZWN0aXZlcy9kcm9wZG93bi9kcm9wZG93bi1wb3J0YWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7O0FBRXREOztHQUVHO0FBQ0gsTUFJYSxpQkFBaUI7SUFKOUI7UUFLcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixZQUFPLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FnQnpEO0lBWkcsSUFDVyxXQUFXLENBQUMsSUFBYTtRQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQzsrR0FqQlEsaUJBQWlCO21HQUFqQixpQkFBaUI7O1NBQWpCLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQUo3QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsMEJBQTBCO2lCQUN2Qzs4QkFRYyxXQUFXO3NCQURyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0VtYmVkZGVkVmlld1JlZiwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBpbmplY3QsIElucHV0LCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VHVpRHJvcGRvd25TZXJ2aWNlfSBmcm9tICcuL2Ryb3Bkb3duLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgVHVpUG9wdXB9IGRpcmVjdGl2ZSBpbnN0ZWFkXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0dWlEcm9wZG93bl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlEcm9wZG93blBvcnRhbCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZSA9IGluamVjdChUZW1wbGF0ZVJlZik7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzZXJ2aWNlID0gaW5qZWN0KFR1aURyb3Bkb3duU2VydmljZSk7XG5cbiAgICBwcml2YXRlIHZpZXdSZWY/OiBFbWJlZGRlZFZpZXdSZWY8dW5rbm93bj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHVpRHJvcGRvd24oc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnZpZXdSZWY/LmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgdGhpcy52aWV3UmVmID0gdGhpcy5zZXJ2aWNlLmFkZFRlbXBsYXRlKHRoaXMudGVtcGxhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdSZWY/LmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=