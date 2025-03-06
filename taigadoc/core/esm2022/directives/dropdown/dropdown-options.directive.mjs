import { Directive, inject, Input, Optional, Self, SkipSelf } from '@angular/core';
import { tuiCreateToken, tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiOverrideOptions } from '@taiga-ui/core/utils';
import * as i0 from "@angular/core";
/** Default values for dropdown options */
export const TUI_DROPDOWN_DEFAULT_OPTIONS = {
    align: 'left',
    direction: null,
    limitWidth: 'auto',
    maxHeight: 400,
    minHeight: 80,
    offset: 4,
    appearance: '',
};
/**
 * Default parameters for dropdown directive
 */
export const TUI_DROPDOWN_OPTIONS = tuiCreateToken(TUI_DROPDOWN_DEFAULT_OPTIONS);
export const tuiDropdownOptionsProvider = (override) => ({
    provide: TUI_DROPDOWN_OPTIONS,
    deps: [
        [new Optional(), new Self(), TuiDropdownOptionsDirective],
        [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS),
});
class TuiDropdownOptionsDirective {
    constructor() {
        this.options = inject(TUI_DROPDOWN_OPTIONS, { skipSelf: true });
        this.align = this.options.align;
        this.appearance = this.options.appearance;
        this.direction = this.options.direction;
        this.limitWidth = this.options.limitWidth;
        this.minHeight = this.options.minHeight;
        this.maxHeight = this.options.maxHeight;
        this.offset = this.options.offset;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOptionsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownOptionsDirective, isStandalone: true, selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]", inputs: { align: ["tuiDropdownAlign", "align"], appearance: ["tuiDropdownAppearance", "appearance"], direction: ["tuiDropdownDirection", "direction"], limitWidth: ["tuiDropdownLimitWidth", "limitWidth"], minHeight: ["tuiDropdownMinHeight", "minHeight"], maxHeight: ["tuiDropdownMaxHeight", "maxHeight"], offset: ["tuiDropdownOffset", "offset"] }, providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)], ngImport: i0 }); }
}
export { TuiDropdownOptionsDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOptionsDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]',
                    providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)],
                }]
        }], propDecorators: { align: [{
                type: Input,
                args: ['tuiDropdownAlign']
            }], appearance: [{
                type: Input,
                args: ['tuiDropdownAppearance']
            }], direction: [{
                type: Input,
                args: ['tuiDropdownDirection']
            }], limitWidth: [{
                type: Input,
                args: ['tuiDropdownLimitWidth']
            }], minHeight: [{
                type: Input,
                args: ['tuiDropdownMinHeight']
            }], maxHeight: [{
                type: Input,
                args: ['tuiDropdownMaxHeight']
            }], offset: [{
                type: Input,
                args: ['tuiDropdownOffset']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tb3B0aW9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2RpcmVjdGl2ZXMvZHJvcGRvd24vZHJvcGRvd24tb3B0aW9ucy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxjQUFjLEVBQUUsVUFBVSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFN0UsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7O0FBZXhELDBDQUEwQztBQUMxQyxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBdUI7SUFDNUQsS0FBSyxFQUFFLE1BQU07SUFDYixTQUFTLEVBQUUsSUFBSTtJQUNmLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFNBQVMsRUFBRSxHQUFHO0lBQ2QsU0FBUyxFQUFFLEVBQUU7SUFDYixNQUFNLEVBQUUsQ0FBQztJQUNULFVBQVUsRUFBRSxFQUFFO0NBQ2pCLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBRWpGLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUVoQixDQUFDLFFBQXFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0QsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixJQUFJLEVBQUU7UUFDRixDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSwyQkFBMkIsQ0FBQztRQUN6RCxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQztLQUN6RDtJQUNELFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsNEJBQTRCLENBQUM7Q0FDekUsQ0FBQyxDQUFDO0FBRUgsTUFNYSwyQkFBMkI7SUFOeEM7UUFPcUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBR25FLFVBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUczQixlQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFHckMsY0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBR25DLGVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUdyQyxjQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFHbkMsY0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBR25DLFdBQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUN2QzsrR0F2QlksMkJBQTJCO21HQUEzQiwyQkFBMkIsMmlCQUZ6QixDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDOztTQUVqRSwyQkFBMkI7NEZBQTNCLDJCQUEyQjtrQkFOdkMsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUNKLG1LQUFtSztvQkFDdkssU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQiw4QkFBOEIsQ0FBQztpQkFDN0U7OEJBS1UsS0FBSztzQkFEWCxLQUFLO3VCQUFDLGtCQUFrQjtnQkFJbEIsVUFBVTtzQkFEaEIsS0FBSzt1QkFBQyx1QkFBdUI7Z0JBSXZCLFNBQVM7c0JBRGYsS0FBSzt1QkFBQyxzQkFBc0I7Z0JBSXRCLFVBQVU7c0JBRGhCLEtBQUs7dUJBQUMsdUJBQXVCO2dCQUl2QixTQUFTO3NCQURmLEtBQUs7dUJBQUMsc0JBQXNCO2dCQUl0QixTQUFTO3NCQURmLEtBQUs7dUJBQUMsc0JBQXNCO2dCQUl0QixNQUFNO3NCQURaLEtBQUs7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0ZhY3RvcnlQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0LCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpQ3JlYXRlVG9rZW4sIHR1aVByb3ZpZGV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQgdHlwZSB7VHVpVmVydGljYWxEaXJlY3Rpb259IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB7dHVpT3ZlcnJpZGVPcHRpb25zfSBmcm9tICdAdGFpZ2EtdWkvY29yZS91dGlscyc7XG5cbmV4cG9ydCB0eXBlIFR1aURyb3Bkb3duQWxpZ24gPSAnY2VudGVyJyB8ICdsZWZ0JyB8ICdyaWdodCc7XG5leHBvcnQgdHlwZSBUdWlEcm9wZG93bldpZHRoID0gJ2F1dG8nIHwgJ2ZpeGVkJyB8ICdtaW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFR1aURyb3Bkb3duT3B0aW9ucyB7XG4gICAgcmVhZG9ubHkgYWxpZ246IFR1aURyb3Bkb3duQWxpZ247XG4gICAgcmVhZG9ubHkgYXBwZWFyYW5jZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGRpcmVjdGlvbjogVHVpVmVydGljYWxEaXJlY3Rpb24gfCBudWxsO1xuICAgIHJlYWRvbmx5IGxpbWl0V2lkdGg6IFR1aURyb3Bkb3duV2lkdGg7XG4gICAgcmVhZG9ubHkgbWF4SGVpZ2h0OiBudW1iZXI7XG4gICAgcmVhZG9ubHkgbWluSGVpZ2h0OiBudW1iZXI7XG4gICAgcmVhZG9ubHkgb2Zmc2V0OiBudW1iZXI7XG59XG5cbi8qKiBEZWZhdWx0IHZhbHVlcyBmb3IgZHJvcGRvd24gb3B0aW9ucyAqL1xuZXhwb3J0IGNvbnN0IFRVSV9EUk9QRE9XTl9ERUZBVUxUX09QVElPTlM6IFR1aURyb3Bkb3duT3B0aW9ucyA9IHtcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGRpcmVjdGlvbjogbnVsbCxcbiAgICBsaW1pdFdpZHRoOiAnYXV0bycsXG4gICAgbWF4SGVpZ2h0OiA0MDAsXG4gICAgbWluSGVpZ2h0OiA4MCxcbiAgICBvZmZzZXQ6IDQsXG4gICAgYXBwZWFyYW5jZTogJycsXG59O1xuXG4vKipcbiAqIERlZmF1bHQgcGFyYW1ldGVycyBmb3IgZHJvcGRvd24gZGlyZWN0aXZlXG4gKi9cbmV4cG9ydCBjb25zdCBUVUlfRFJPUERPV05fT1BUSU9OUyA9IHR1aUNyZWF0ZVRva2VuKFRVSV9EUk9QRE9XTl9ERUZBVUxUX09QVElPTlMpO1xuXG5leHBvcnQgY29uc3QgdHVpRHJvcGRvd25PcHRpb25zUHJvdmlkZXI6IChcbiAgICBvcHRpb25zOiBQYXJ0aWFsPFR1aURyb3Bkb3duT3B0aW9ucz4sXG4pID0+IEZhY3RvcnlQcm92aWRlciA9IChvdmVycmlkZTogUGFydGlhbDxUdWlEcm9wZG93bk9wdGlvbnM+KSA9PiAoe1xuICAgIHByb3ZpZGU6IFRVSV9EUk9QRE9XTl9PUFRJT05TLFxuICAgIGRlcHM6IFtcbiAgICAgICAgW25ldyBPcHRpb25hbCgpLCBuZXcgU2VsZigpLCBUdWlEcm9wZG93bk9wdGlvbnNEaXJlY3RpdmVdLFxuICAgICAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUVUlfRFJPUERPV05fT1BUSU9OU10sXG4gICAgXSxcbiAgICB1c2VGYWN0b3J5OiB0dWlPdmVycmlkZU9wdGlvbnMob3ZlcnJpZGUsIFRVSV9EUk9QRE9XTl9ERUZBVUxUX09QVElPTlMpLFxufSk7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6XG4gICAgICAgICdbdHVpRHJvcGRvd25BbGlnbl0sIFt0dWlEcm9wZG93bkFwcGVhcmFuY2VdLCBbdHVpRHJvcGRvd25EaXJlY3Rpb25dLCBbdHVpRHJvcGRvd25MaW1pdFdpZHRoXSwgW3R1aURyb3Bkb3duTWluSGVpZ2h0XSwgW3R1aURyb3Bkb3duTWF4SGVpZ2h0XSwgW3R1aURyb3Bkb3duT2Zmc2V0XScsXG4gICAgcHJvdmlkZXJzOiBbdHVpUHJvdmlkZShUVUlfRFJPUERPV05fT1BUSU9OUywgVHVpRHJvcGRvd25PcHRpb25zRGlyZWN0aXZlKV0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aURyb3Bkb3duT3B0aW9uc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIFR1aURyb3Bkb3duT3B0aW9ucyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zID0gaW5qZWN0KFRVSV9EUk9QRE9XTl9PUFRJT05TLCB7c2tpcFNlbGY6IHRydWV9KTtcblxuICAgIEBJbnB1dCgndHVpRHJvcGRvd25BbGlnbicpXG4gICAgcHVibGljIGFsaWduID0gdGhpcy5vcHRpb25zLmFsaWduO1xuXG4gICAgQElucHV0KCd0dWlEcm9wZG93bkFwcGVhcmFuY2UnKVxuICAgIHB1YmxpYyBhcHBlYXJhbmNlID0gdGhpcy5vcHRpb25zLmFwcGVhcmFuY2U7XG5cbiAgICBASW5wdXQoJ3R1aURyb3Bkb3duRGlyZWN0aW9uJylcbiAgICBwdWJsaWMgZGlyZWN0aW9uID0gdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcblxuICAgIEBJbnB1dCgndHVpRHJvcGRvd25MaW1pdFdpZHRoJylcbiAgICBwdWJsaWMgbGltaXRXaWR0aCA9IHRoaXMub3B0aW9ucy5saW1pdFdpZHRoO1xuXG4gICAgQElucHV0KCd0dWlEcm9wZG93bk1pbkhlaWdodCcpXG4gICAgcHVibGljIG1pbkhlaWdodCA9IHRoaXMub3B0aW9ucy5taW5IZWlnaHQ7XG5cbiAgICBASW5wdXQoJ3R1aURyb3Bkb3duTWF4SGVpZ2h0JylcbiAgICBwdWJsaWMgbWF4SGVpZ2h0ID0gdGhpcy5vcHRpb25zLm1heEhlaWdodDtcblxuICAgIEBJbnB1dCgndHVpRHJvcGRvd25PZmZzZXQnKVxuICAgIHB1YmxpYyBvZmZzZXQgPSB0aGlzLm9wdGlvbnMub2Zmc2V0O1xufVxuIl19