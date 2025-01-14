import { Directive, inject, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
class TuiTableHead {
    constructor() {
        this.tuiHead = '';
        this.template = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableHead, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableHead, isStandalone: true, selector: "[tuiHead]", inputs: { tuiHead: "tuiHead" }, ngImport: i0 }); }
}
export { TuiTableHead };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableHead, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHead]',
                }]
        }], propDecorators: { tuiHead: [{
                type: Input,
                args: [{ required: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvaGVhZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFcEUsTUFJYSxZQUFZO0lBSnpCO1FBTVcsWUFBTyxHQUFxQixFQUFFLENBQUM7UUFFdEIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQW9DLENBQUEsQ0FBQyxDQUFDO0tBQzNFOytHQUxZLFlBQVk7bUdBQVosWUFBWTs7U0FBWixZQUFZOzRGQUFaLFlBQVk7a0JBSnhCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxXQUFXO2lCQUN4Qjs4QkFHVSxPQUFPO3NCQURiLEtBQUs7dUJBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdCwgSW5wdXQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlIZWFkXScsXG59KVxuZXhwb3J0IGNsYXNzIFR1aVRhYmxlSGVhZDxUIGV4dGVuZHMgUGFydGlhbDxSZWNvcmQ8a2V5b2YgVCwgYW55Pj4+IHtcbiAgICBASW5wdXQoe3JlcXVpcmVkOiB0cnVlfSlcbiAgICBwdWJsaWMgdHVpSGVhZDogc3RyaW5nIHwga2V5b2YgVCA9ICcnO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHRlbXBsYXRlID0gaW5qZWN0KFRlbXBsYXRlUmVmPFJlY29yZDxzdHJpbmcsIHVua25vd24+Pik7XG59XG4iXX0=