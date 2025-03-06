import { Directive, inject, TemplateRef } from '@angular/core';
import { TuiTextfieldComponent } from './textfield.component';
import * as i0 from "@angular/core";
class TuiTextfieldContent {
    constructor() {
        inject(TuiTextfieldComponent).vcr?.createEmbeddedView(inject(TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldContent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldContent, isStandalone: true, selector: "ng-template[tuiTextfieldContent]", ngImport: i0 }); }
}
export { TuiTextfieldContent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldContent, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiTextfieldContent]',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpZWxkLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9jb21wb25lbnRzL3RleHRmaWVsZC90ZXh0ZmllbGQtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDOztBQUU1RCxNQUlhLG1CQUFtQjtJQUM1QjtRQUNJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOytHQUhRLG1CQUFtQjttR0FBbkIsbUJBQW1COztTQUFuQixtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFKL0IsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLGtDQUFrQztpQkFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0LCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VHVpVGV4dGZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3RleHRmaWVsZC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdHVpVGV4dGZpZWxkQ29udGVudF0nLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlUZXh0ZmllbGRDb250ZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaW5qZWN0KFR1aVRleHRmaWVsZENvbXBvbmVudCkudmNyPy5jcmVhdGVFbWJlZGRlZFZpZXcoaW5qZWN0KFRlbXBsYXRlUmVmKSk7XG4gICAgfVxufVxuIl19