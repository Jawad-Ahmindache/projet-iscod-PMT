import { ContentChild, Directive, TemplateRef } from '@angular/core';
import { tuiDropdown } from '@taiga-ui/core/directives/dropdown';
import * as i0 from "@angular/core";
class TuiTextfieldDropdownDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldDropdownDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldDropdownDirective, isStandalone: true, selector: "ng-template[tuiTextfieldDropdown]", ngImport: i0 }); }
}
export { TuiTextfieldDropdownDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldDropdownDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiTextfieldDropdown]',
                }]
        }] });
class TuiWithTextfieldDropdown {
    constructor() {
        this.dropdown = tuiDropdown(null);
    }
    set template(template) {
        this.dropdown.set(template);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithTextfieldDropdown, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiWithTextfieldDropdown, isStandalone: true, queries: [{ propertyName: "template", first: true, predicate: TuiTextfieldDropdownDirective, descendants: true, read: TemplateRef }], ngImport: i0 }); }
}
export { TuiWithTextfieldDropdown };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithTextfieldDropdown, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], propDecorators: { template: [{
                type: ContentChild,
                args: [TuiTextfieldDropdownDirective, { read: TemplateRef, descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpZWxkLWRyb3Bkb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy90ZXh0ZmllbGQvdGV4dGZpZWxkLWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOztBQUcvRCxNQUlhLDZCQUE2QjsrR0FBN0IsNkJBQTZCO21HQUE3Qiw2QkFBNkI7O1NBQTdCLDZCQUE2Qjs0RkFBN0IsNkJBQTZCO2tCQUp6QyxTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsbUNBQW1DO2lCQUNoRDs7QUFHRCxNQUdhLHdCQUF3QjtJQUhyQztRQUlxQixhQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBTWpEO0lBSkcsSUFDYyxRQUFRLENBQUMsUUFBNkI7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQzsrR0FOUSx3QkFBd0I7bUdBQXhCLHdCQUF3QixvRkFHbkIsNkJBQTZCLDJCQUFTLFdBQVc7O1NBSHRELHdCQUF3Qjs0RkFBeEIsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO2lCQUNuQjs4QkFLaUIsUUFBUTtzQkFEckIsWUFBWTt1QkFBQyw2QkFBNkIsRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGVudENoaWxkLCBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpRHJvcGRvd259IGZyb20gJ0B0YWlnYS11aS9jb3JlL2RpcmVjdGl2ZXMvZHJvcGRvd24nO1xuaW1wb3J0IHR5cGUge1BvbHltb3JwaGV1c0NvbnRlbnR9IGZyb20gJ0B0YWlnYS11aS9wb2x5bW9ycGhldXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdHVpVGV4dGZpZWxkRHJvcGRvd25dJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGV4dGZpZWxkRHJvcGRvd25EaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpV2l0aFRleHRmaWVsZERyb3Bkb3duIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRyb3Bkb3duID0gdHVpRHJvcGRvd24obnVsbCk7XG5cbiAgICBAQ29udGVudENoaWxkKFR1aVRleHRmaWVsZERyb3Bkb3duRGlyZWN0aXZlLCB7cmVhZDogVGVtcGxhdGVSZWYsIGRlc2NlbmRhbnRzOiB0cnVlfSlcbiAgICBwcm90ZWN0ZWQgc2V0IHRlbXBsYXRlKHRlbXBsYXRlOiBQb2x5bW9ycGhldXNDb250ZW50KSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uc2V0KHRlbXBsYXRlKTtcbiAgICB9XG59XG4iXX0=