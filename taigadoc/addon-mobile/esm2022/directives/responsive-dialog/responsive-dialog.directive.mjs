import { Directive } from '@angular/core';
import { TuiPopoverDirective } from '@taiga-ui/cdk/directives/popover';
import { tuiAsPopover } from '@taiga-ui/cdk/services';
import { TuiResponsiveDialogService } from './responsive-dialog.service';
import * as i0 from "@angular/core";
class TuiResponsiveDialog extends TuiPopoverDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiResponsiveDialog, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiResponsiveDialog, isStandalone: true, selector: "ng-template[tuiResponsiveDialog]", inputs: { options: ["tuiResponsiveDialogOptions", "options"], open: ["tuiResponsiveDialog", "open"] }, outputs: { openChange: "tuiResponsiveDialogChange" }, providers: [tuiAsPopover(TuiResponsiveDialogService)], usesInheritance: true, ngImport: i0 }); }
}
export { TuiResponsiveDialog };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiResponsiveDialog, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiResponsiveDialog]',
                    inputs: ['options: tuiResponsiveDialogOptions', 'open: tuiResponsiveDialog'],
                    outputs: ['openChange: tuiResponsiveDialogChange'],
                    providers: [tuiAsPopover(TuiResponsiveDialogService)],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1kaWFsb2cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tbW9iaWxlL2RpcmVjdGl2ZXMvcmVzcG9uc2l2ZS1kaWFsb2cvcmVzcG9uc2l2ZS1kaWFsb2cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBR3BELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDZCQUE2QixDQUFDOztBQUV2RSxNQU9hLG1CQUFvQixTQUFRLG1CQUErQzsrR0FBM0UsbUJBQW1CO21HQUFuQixtQkFBbUIsNE9BRmpCLENBQUMsWUFBWSxDQUFDLDBCQUFpQyxDQUFDLENBQUM7O1NBRW5ELG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQVAvQixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxNQUFNLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSwyQkFBMkIsQ0FBQztvQkFDNUUsT0FBTyxFQUFFLENBQUMsdUNBQXVDLENBQUM7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQywwQkFBaUMsQ0FBQyxDQUFDO2lCQUMvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHVpUG9wb3ZlckRpcmVjdGl2ZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL3BvcG92ZXInO1xuaW1wb3J0IHt0dWlBc1BvcG92ZXJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvc2VydmljZXMnO1xuXG5pbXBvcnQgdHlwZSB7VHVpUmVzcG9uc2l2ZURpYWxvZ09wdGlvbnN9IGZyb20gJy4vcmVzcG9uc2l2ZS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQge1R1aVJlc3BvbnNpdmVEaWFsb2dTZXJ2aWNlfSBmcm9tICcuL3Jlc3BvbnNpdmUtZGlhbG9nLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdHVpUmVzcG9uc2l2ZURpYWxvZ10nLFxuICAgIGlucHV0czogWydvcHRpb25zOiB0dWlSZXNwb25zaXZlRGlhbG9nT3B0aW9ucycsICdvcGVuOiB0dWlSZXNwb25zaXZlRGlhbG9nJ10sXG4gICAgb3V0cHV0czogWydvcGVuQ2hhbmdlOiB0dWlSZXNwb25zaXZlRGlhbG9nQ2hhbmdlJ10sXG4gICAgcHJvdmlkZXJzOiBbdHVpQXNQb3BvdmVyKFR1aVJlc3BvbnNpdmVEaWFsb2dTZXJ2aWNlIGFzIGFueSldLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlSZXNwb25zaXZlRGlhbG9nIGV4dGVuZHMgVHVpUG9wb3ZlckRpcmVjdGl2ZTxUdWlSZXNwb25zaXZlRGlhbG9nT3B0aW9ucz4ge31cbiJdfQ==