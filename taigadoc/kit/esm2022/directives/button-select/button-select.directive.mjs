import { Directive } from '@angular/core';
import { TuiControl } from '@taiga-ui/cdk/classes';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_DATA_LIST_HOST } from '@taiga-ui/core/components/data-list';
import { TuiWithTextfieldDropdown } from '@taiga-ui/core/components/textfield';
import { TuiDropdownDirective, tuiDropdownOpen, tuiDropdownOptionsProvider, TuiWithDropdownOpen, } from '@taiga-ui/core/directives/dropdown';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/dropdown";
import * as i2 from "@taiga-ui/core/components/textfield";
class TuiButtonSelect extends TuiControl {
    constructor() {
        super(...arguments);
        this.open = tuiDropdownOpen();
        this.size = 's';
    }
    handleOption(option) {
        this.onChange(option);
        this.open.set(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonSelect, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiButtonSelect, isStandalone: true, selector: "button[tuiButtonSelect]", providers: [
            // TODO: Add checkmark once we properly implement new Select, then add to demo
            tuiProvide(TUI_DATA_LIST_HOST, TuiButtonSelect),
            tuiDropdownOptionsProvider({ align: 'right' }),
        ], usesInheritance: true, hostDirectives: [{ directive: i1.TuiDropdownDirective }, { directive: i1.TuiWithDropdownOpen }, { directive: i2.TuiWithTextfieldDropdown }], ngImport: i0 }); }
}
export { TuiButtonSelect };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonSelect, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'button[tuiButtonSelect]',
                    providers: [
                        // TODO: Add checkmark once we properly implement new Select, then add to demo
                        tuiProvide(TUI_DATA_LIST_HOST, TuiButtonSelect),
                        tuiDropdownOptionsProvider({ align: 'right' }),
                    ],
                    hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvZGlyZWN0aXZlcy9idXR0b24tc2VsZWN0L2J1dHRvbi1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUU3RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQ0gsb0JBQW9CLEVBQ3BCLGVBQWUsRUFDZiwwQkFBMEIsRUFDMUIsbUJBQW1CLEdBQ3RCLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFFNUMsTUFVYSxlQUFtQixTQUFRLFVBQWE7SUFWckQ7O1FBV3FCLFNBQUksR0FBRyxlQUFlLEVBQUUsQ0FBQztRQUUxQixTQUFJLEdBQUcsR0FBRyxDQUFDO0tBTTlCO0lBSlUsWUFBWSxDQUFDLE1BQVM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOytHQVJRLGVBQWU7bUdBQWYsZUFBZSxzRUFQYjtZQUNQLDhFQUE4RTtZQUM5RSxVQUFVLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDO1lBQy9DLDBCQUEwQixDQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDO1NBQy9DOztTQUdRLGVBQWU7NEZBQWYsZUFBZTtrQkFWM0IsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFFO3dCQUNQLDhFQUE4RTt3QkFDOUUsVUFBVSxDQUFDLGtCQUFrQixrQkFBa0I7d0JBQy9DLDBCQUEwQixDQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDO3FCQUMvQztvQkFDRCxjQUFjLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSx3QkFBd0IsQ0FBQztpQkFDeEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1R1aUNvbnRyb2x9IGZyb20gJ0B0YWlnYS11aS9jZGsvY2xhc3Nlcyc7XG5pbXBvcnQge3R1aVByb3ZpZGV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQgdHlwZSB7VHVpRGF0YUxpc3RIb3N0fSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL2RhdGEtbGlzdCc7XG5pbXBvcnQge1RVSV9EQVRBX0xJU1RfSE9TVH0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy9kYXRhLWxpc3QnO1xuaW1wb3J0IHtUdWlXaXRoVGV4dGZpZWxkRHJvcGRvd259IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvdGV4dGZpZWxkJztcbmltcG9ydCB7XG4gICAgVHVpRHJvcGRvd25EaXJlY3RpdmUsXG4gICAgdHVpRHJvcGRvd25PcGVuLFxuICAgIHR1aURyb3Bkb3duT3B0aW9uc1Byb3ZpZGVyLFxuICAgIFR1aVdpdGhEcm9wZG93bk9wZW4sXG59IGZyb20gJ0B0YWlnYS11aS9jb3JlL2RpcmVjdGl2ZXMvZHJvcGRvd24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnYnV0dG9uW3R1aUJ1dHRvblNlbGVjdF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICAvLyBUT0RPOiBBZGQgY2hlY2ttYXJrIG9uY2Ugd2UgcHJvcGVybHkgaW1wbGVtZW50IG5ldyBTZWxlY3QsIHRoZW4gYWRkIHRvIGRlbW9cbiAgICAgICAgdHVpUHJvdmlkZShUVUlfREFUQV9MSVNUX0hPU1QsIFR1aUJ1dHRvblNlbGVjdCksXG4gICAgICAgIHR1aURyb3Bkb3duT3B0aW9uc1Byb3ZpZGVyKHthbGlnbjogJ3JpZ2h0J30pLFxuICAgIF0sXG4gICAgaG9zdERpcmVjdGl2ZXM6IFtUdWlEcm9wZG93bkRpcmVjdGl2ZSwgVHVpV2l0aERyb3Bkb3duT3BlbiwgVHVpV2l0aFRleHRmaWVsZERyb3Bkb3duXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpQnV0dG9uU2VsZWN0PFQ+IGV4dGVuZHMgVHVpQ29udHJvbDxUPiBpbXBsZW1lbnRzIFR1aURhdGFMaXN0SG9zdDxUPiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvcGVuID0gdHVpRHJvcGRvd25PcGVuKCk7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgc2l6ZSA9ICdzJztcblxuICAgIHB1YmxpYyBoYW5kbGVPcHRpb24ob3B0aW9uOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25DaGFuZ2Uob3B0aW9uKTtcbiAgICAgICAgdGhpcy5vcGVuLnNldChmYWxzZSk7XG4gICAgfVxufVxuIl19