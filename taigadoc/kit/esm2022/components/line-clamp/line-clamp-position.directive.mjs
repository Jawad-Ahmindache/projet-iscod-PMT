import { Directive, inject } from '@angular/core';
import { tuiAsPositionAccessor, TuiPositionAccessor } from '@taiga-ui/core/classes';
import { TuiHintDirective } from '@taiga-ui/core/directives/hint';
import * as i0 from "@angular/core";
class TuiLineClampPositionDirective extends TuiPositionAccessor {
    constructor() {
        super(...arguments);
        this.accessor = inject(TuiHintDirective);
        this.type = 'hint';
    }
    getPosition() {
        const { top, left } = this.accessor.getClientRect();
        return [top, left];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClampPositionDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineClampPositionDirective, isStandalone: true, selector: "[tuiLineClampPosition]", providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)], usesInheritance: true, ngImport: i0 }); }
}
export { TuiLineClampPositionDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClampPositionDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiLineClampPosition]',
                    providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jbGFtcC1wb3NpdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvY29tcG9uZW50cy9saW5lLWNsYW1wL2xpbmUtY2xhbXAtcG9zaXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2xGLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOztBQUdoRSxNQUthLDZCQUE4QixTQUFRLG1CQUFtQjtJQUx0RTs7UUFNcUIsYUFBUSxHQUFHLE1BQU0sQ0FBa0IsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxTQUFJLEdBQUcsTUFBTSxDQUFDO0tBT2pDO0lBTFUsV0FBVztRQUNkLE1BQU0sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVsRCxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7K0dBUlEsNkJBQTZCO21HQUE3Qiw2QkFBNkIscUVBRjNCLENBQUMscUJBQXFCLENBQUMsNkJBQTZCLENBQUMsQ0FBQzs7U0FFeEQsNkJBQTZCOzRGQUE3Qiw2QkFBNkI7a0JBTHpDLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQiwrQkFBK0IsQ0FBQztpQkFDcEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtUdWlSZWN0QWNjZXNzb3J9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHt0dWlBc1Bvc2l0aW9uQWNjZXNzb3IsIFR1aVBvc2l0aW9uQWNjZXNzb3J9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHtUdWlIaW50RGlyZWN0aXZlfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9kaXJlY3RpdmVzL2hpbnQnO1xuaW1wb3J0IHR5cGUge1R1aVBvaW50fSBmcm9tICdAdGFpZ2EtdWkvY29yZS90eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpTGluZUNsYW1wUG9zaXRpb25dJyxcbiAgICBwcm92aWRlcnM6IFt0dWlBc1Bvc2l0aW9uQWNjZXNzb3IoVHVpTGluZUNsYW1wUG9zaXRpb25EaXJlY3RpdmUpXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpTGluZUNsYW1wUG9zaXRpb25EaXJlY3RpdmUgZXh0ZW5kcyBUdWlQb3NpdGlvbkFjY2Vzc29yIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yID0gaW5qZWN0PFR1aVJlY3RBY2Nlc3Nvcj4oVHVpSGludERpcmVjdGl2ZSk7XG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSAnaGludCc7XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogVHVpUG9pbnQge1xuICAgICAgICBjb25zdCB7dG9wLCBsZWZ0fSA9IHRoaXMuYWNjZXNzb3IuZ2V0Q2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHJldHVybiBbdG9wLCBsZWZ0XTtcbiAgICB9XG59XG4iXX0=