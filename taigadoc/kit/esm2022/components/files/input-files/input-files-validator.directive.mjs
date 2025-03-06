import { Directive, inject, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { TuiValidator } from '@taiga-ui/cdk/directives/validator';
import { tuiCreateFileFormatValidator, tuiCreateFileSizeValidator, } from '../files.validators';
import { TUI_INPUT_FILES_OPTIONS } from './input-files.options';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/validator";
class TuiInputFilesValidator {
    constructor() {
        this.options = inject(TUI_INPUT_FILES_OPTIONS);
        this.validator = inject(TuiValidator);
        this.accept = this.options.accept;
        this.maxFileSize = this.options.maxFileSize;
    }
    ngOnChanges() {
        this.validate();
    }
    ngOnInit() {
        this.validate();
    }
    validate() {
        this.validator.tuiValidator =
            Validators.compose([
                tuiCreateFileFormatValidator(this.accept),
                tuiCreateFileSizeValidator(this.maxFileSize),
            ]) || Validators.nullValidator;
        this.validator.ngOnChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputFilesValidator, isStandalone: true, inputs: { accept: "accept", maxFileSize: "maxFileSize" }, host: { properties: { "accept": "accept" } }, exportAs: ["tuiInputFilesValidator"], usesOnChanges: true, hostDirectives: [{ directive: i1.TuiValidator }], ngImport: i0 }); }
}
export { TuiInputFilesValidator };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesValidator, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    exportAs: 'tuiInputFilesValidator',
                    hostDirectives: [TuiValidator],
                    host: {
                        '[accept]': 'accept',
                    },
                }]
        }], propDecorators: { accept: [{
                type: Input
            }], maxFileSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZXMtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL2ZpbGVzL2lucHV0LWZpbGVzL2lucHV0LWZpbGVzLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFFaEUsT0FBTyxFQUNILDRCQUE0QixFQUM1QiwwQkFBMEIsR0FDN0IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRTlELE1BUWEsc0JBQXNCO0lBUm5DO1FBU3FCLFlBQU8sR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMxQyxjQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRzNDLFdBQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUc3QixnQkFBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0tBa0JqRDtJQWhCVSxXQUFXO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZO1lBQ3ZCLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ2YsNEJBQTRCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDekMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMvQyxDQUFDLElBQUksVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7K0dBekJRLHNCQUFzQjttR0FBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7NEZBQXRCLHNCQUFzQjtrQkFSbEMsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsY0FBYyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUM5QixJQUFJLEVBQUU7d0JBQ0YsVUFBVSxFQUFFLFFBQVE7cUJBQ3ZCO2lCQUNKOzhCQU1VLE1BQU07c0JBRFosS0FBSztnQkFJQyxXQUFXO3NCQURqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge09uQ2hhbmdlcywgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBpbmplY3QsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUdWlWYWxpZGF0b3J9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGlyZWN0aXZlcy92YWxpZGF0b3InO1xuXG5pbXBvcnQge1xuICAgIHR1aUNyZWF0ZUZpbGVGb3JtYXRWYWxpZGF0b3IsXG4gICAgdHVpQ3JlYXRlRmlsZVNpemVWYWxpZGF0b3IsXG59IGZyb20gJy4uL2ZpbGVzLnZhbGlkYXRvcnMnO1xuaW1wb3J0IHtUVUlfSU5QVVRfRklMRVNfT1BUSU9OU30gZnJvbSAnLi9pbnB1dC1maWxlcy5vcHRpb25zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBleHBvcnRBczogJ3R1aUlucHV0RmlsZXNWYWxpZGF0b3InLFxuICAgIGhvc3REaXJlY3RpdmVzOiBbVHVpVmFsaWRhdG9yXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbYWNjZXB0XSc6ICdhY2NlcHQnLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aUlucHV0RmlsZXNWYWxpZGF0b3IgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zID0gaW5qZWN0KFRVSV9JTlBVVF9GSUxFU19PUFRJT05TKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbGlkYXRvciA9IGluamVjdChUdWlWYWxpZGF0b3IpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgYWNjZXB0ID0gdGhpcy5vcHRpb25zLmFjY2VwdDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heEZpbGVTaXplID0gdGhpcy5vcHRpb25zLm1heEZpbGVTaXplO1xuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IudHVpVmFsaWRhdG9yID1cbiAgICAgICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgdHVpQ3JlYXRlRmlsZUZvcm1hdFZhbGlkYXRvcih0aGlzLmFjY2VwdCksXG4gICAgICAgICAgICAgICAgdHVpQ3JlYXRlRmlsZVNpemVWYWxpZGF0b3IodGhpcy5tYXhGaWxlU2l6ZSksXG4gICAgICAgICAgICBdKSB8fCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3I7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLm5nT25DaGFuZ2VzKCk7XG4gICAgfVxufVxuIl19