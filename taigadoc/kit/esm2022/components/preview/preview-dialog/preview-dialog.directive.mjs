import { Directive } from '@angular/core';
import { TuiPopoverDirective } from '@taiga-ui/cdk/directives/popover';
import { tuiAsPopover } from '@taiga-ui/cdk/services';
import { TuiPreviewDialogService } from './preview-dialog.service';
import * as i0 from "@angular/core";
class TuiPreviewDialogDirective extends TuiPopoverDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewDialogDirective, isStandalone: true, selector: "ng-template[tuiPreviewDialog]", inputs: { open: ["tuiPreviewDialog", "open"] }, outputs: { openChange: "tuiPreviewDialogChange" }, providers: [tuiAsPopover(TuiPreviewDialogService)], usesInheritance: true, ngImport: i0 }); }
}
export { TuiPreviewDialogDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiPreviewDialog]',
                    inputs: ['open: tuiPreviewDialog'],
                    outputs: ['openChange: tuiPreviewDialogChange'],
                    providers: [tuiAsPopover(TuiPreviewDialogService)],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1kaWFsb2cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvcHJldmlldy9wcmV2aWV3LWRpYWxvZy9wcmV2aWV3LWRpYWxvZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7O0FBRWpFLE1BT2EseUJBQTBCLFNBQVEsbUJBQTRCOytHQUE5RCx5QkFBeUI7bUdBQXpCLHlCQUF5QiwrS0FGdkIsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7U0FFekMseUJBQXlCOzRGQUF6Qix5QkFBeUI7a0JBUHJDLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLE1BQU0sRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNsQyxPQUFPLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztvQkFDL0MsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLENBQUM7aUJBQ3JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUdWlQb3BvdmVyRGlyZWN0aXZlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RpcmVjdGl2ZXMvcG9wb3Zlcic7XG5pbXBvcnQge3R1aUFzUG9wb3Zlcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9zZXJ2aWNlcyc7XG5cbmltcG9ydCB7VHVpUHJldmlld0RpYWxvZ1NlcnZpY2V9IGZyb20gJy4vcHJldmlldy1kaWFsb2cuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0dWlQcmV2aWV3RGlhbG9nXScsXG4gICAgaW5wdXRzOiBbJ29wZW46IHR1aVByZXZpZXdEaWFsb2cnXSxcbiAgICBvdXRwdXRzOiBbJ29wZW5DaGFuZ2U6IHR1aVByZXZpZXdEaWFsb2dDaGFuZ2UnXSxcbiAgICBwcm92aWRlcnM6IFt0dWlBc1BvcG92ZXIoVHVpUHJldmlld0RpYWxvZ1NlcnZpY2UpXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpUHJldmlld0RpYWxvZ0RpcmVjdGl2ZSBleHRlbmRzIFR1aVBvcG92ZXJEaXJlY3RpdmU8dW5rbm93bj4ge31cbiJdfQ==