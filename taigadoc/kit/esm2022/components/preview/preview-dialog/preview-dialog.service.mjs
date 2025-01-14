import { Injectable } from '@angular/core';
import { TuiPopoverService } from '@taiga-ui/cdk/services';
import { TUI_DIALOGS } from '@taiga-ui/core/components/dialog';
import { TuiPreviewDialog } from './preview-dialog.component';
import * as i0 from "@angular/core";
class TuiPreviewDialogService extends TuiPopoverService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogService, providedIn: 'root', useFactory: () => new TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialog) }); }
}
export { TuiPreviewDialogService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialog),
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3ByZXZpZXcvcHJldmlldy1kaWFsb2cvcHJldmlldy1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUU3RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFNUQsTUFJYSx1QkFBd0IsU0FBUSxpQkFBMEI7K0dBQTFELHVCQUF1QjttSEFBdkIsdUJBQXVCLGNBSHBCLE1BQU0sY0FDTixHQUFHLEVBQUUsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQzs7U0FFbkUsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBSm5DLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyw0QkFBNEIsV0FBVyxFQUFFLGdCQUFnQixDQUFDO2lCQUMvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1R1aVBvcG92ZXJTZXJ2aWNlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3NlcnZpY2VzJztcbmltcG9ydCB7VFVJX0RJQUxPR1N9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvZGlhbG9nJztcblxuaW1wb3J0IHtUdWlQcmV2aWV3RGlhbG9nfSBmcm9tICcuL3ByZXZpZXctZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG4gICAgdXNlRmFjdG9yeTogKCkgPT4gbmV3IFR1aVByZXZpZXdEaWFsb2dTZXJ2aWNlKFRVSV9ESUFMT0dTLCBUdWlQcmV2aWV3RGlhbG9nKSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpUHJldmlld0RpYWxvZ1NlcnZpY2UgZXh0ZW5kcyBUdWlQb3BvdmVyU2VydmljZTx1bmtub3duPiB7fVxuIl19