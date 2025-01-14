import { inject, Injectable } from '@angular/core';
import { TuiSheetDialogService } from '@taiga-ui/addon-mobile/components/sheet-dialog';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiDialogService } from '@taiga-ui/core/components/dialog';
import * as i0 from "@angular/core";
/**
 * Same as `TuiDialogService` but automatically switches to `TuiSheetDialogService` on mobile
 */
class TuiResponsiveDialogService {
    constructor() {
        this.isMobile = inject(TUI_IS_MOBILE);
        this.dialogs = inject(TuiDialogService);
        this.sheets = inject(TuiSheetDialogService);
    }
    open(content, options = {}) {
        return this.isMobile
            ? this.sheets.open(content, options)
            : this.dialogs.open(content, {
                ...options,
                label: tuiIsString(options.label) ? options.label : '',
            });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiResponsiveDialogService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiResponsiveDialogService, providedIn: 'root' }); }
}
export { TuiResponsiveDialogService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiResponsiveDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLW1vYmlsZS9kaXJlY3RpdmVzL3Jlc3BvbnNpdmUtZGlhbG9nL3Jlc3BvbnNpdmUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDckYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUU5RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFXbEU7O0dBRUc7QUFDSCxNQUdhLDBCQUEwQjtJQUh2QztRQUlxQixhQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLFlBQU8sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuQyxXQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FlM0Q7SUFiVSxJQUFJLENBQ1AsT0FFQyxFQUNELFVBQW9ELEVBQUU7UUFFdEQsT0FBTyxJQUFJLENBQUMsUUFBUTtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztZQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN2QixHQUFHLE9BQU87Z0JBQ1YsS0FBSyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDekQsQ0FBQyxDQUFDO0lBQ2IsQ0FBQzsrR0FqQlEsMEJBQTBCO21IQUExQiwwQkFBMEIsY0FGdkIsTUFBTTs7U0FFVCwwQkFBMEI7NEZBQTFCLDBCQUEwQjtrQkFIdEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7VHVpU2hlZXREaWFsb2dPcHRpb25zfSBmcm9tICdAdGFpZ2EtdWkvYWRkb24tbW9iaWxlL2NvbXBvbmVudHMvc2hlZXQtZGlhbG9nJztcbmltcG9ydCB7VHVpU2hlZXREaWFsb2dTZXJ2aWNlfSBmcm9tICdAdGFpZ2EtdWkvYWRkb24tbW9iaWxlL2NvbXBvbmVudHMvc2hlZXQtZGlhbG9nJztcbmltcG9ydCB7VFVJX0lTX01PQklMRX0gZnJvbSAnQHRhaWdhLXVpL2Nkay90b2tlbnMnO1xuaW1wb3J0IHt0dWlJc1N0cmluZ30gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB0eXBlIHtUdWlEaWFsb2dDb250ZXh0LCBUdWlEaWFsb2dPcHRpb25zfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL2RpYWxvZyc7XG5pbXBvcnQge1R1aURpYWxvZ1NlcnZpY2V9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvZGlhbG9nJztcbmltcG9ydCB0eXBlIHtQb2x5bW9ycGhldXNDb250ZW50fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBUdWlSZXNwb25zaXZlRGlhbG9nT3B0aW9uczxJID0gdW5kZWZpbmVkPlxuICAgIGV4dGVuZHMgT21pdDxUdWlEaWFsb2dPcHRpb25zPEk+LCAnbGFiZWwnPixcbiAgICAgICAgVHVpU2hlZXREaWFsb2dPcHRpb25zPHVua25vd24+IHtcbiAgICByZWFkb25seSBkYXRhOiBJIGV4dGVuZHMgdm9pZCA/IHVuZGVmaW5lZCA6IEkgJiB7YnV0dG9uPzogc3RyaW5nfTtcbiAgICByZWFkb25seSBsYWJlbDogUG9seW1vcnBoZXVzQ29udGVudDtcbn1cblxuLyoqXG4gKiBTYW1lIGFzIGBUdWlEaWFsb2dTZXJ2aWNlYCBidXQgYXV0b21hdGljYWxseSBzd2l0Y2hlcyB0byBgVHVpU2hlZXREaWFsb2dTZXJ2aWNlYCBvbiBtb2JpbGVcbiAqL1xuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpUmVzcG9uc2l2ZURpYWxvZ1NlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNNb2JpbGUgPSBpbmplY3QoVFVJX0lTX01PQklMRSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkaWFsb2dzID0gaW5qZWN0KFR1aURpYWxvZ1NlcnZpY2UpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2hlZXRzID0gaW5qZWN0KFR1aVNoZWV0RGlhbG9nU2VydmljZSk7XG5cbiAgICBwdWJsaWMgb3BlbjxHID0gdm9pZD4oXG4gICAgICAgIGNvbnRlbnQ6IFBvbHltb3JwaGV1c0NvbnRlbnQ8XG4gICAgICAgICAgICBUdWlEaWFsb2dDb250ZXh0PEc+ICYgVHVpUmVzcG9uc2l2ZURpYWxvZ09wdGlvbnM8YW55PlxuICAgICAgICA+LFxuICAgICAgICBvcHRpb25zOiBQYXJ0aWFsPFR1aVJlc3BvbnNpdmVEaWFsb2dPcHRpb25zPGFueT4+ID0ge30sXG4gICAgKTogT2JzZXJ2YWJsZTxHPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTW9iaWxlXG4gICAgICAgICAgICA/IHRoaXMuc2hlZXRzLm9wZW4oY29udGVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIDogdGhpcy5kaWFsb2dzLm9wZW4oY29udGVudCwge1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiB0dWlJc1N0cmluZyhvcHRpb25zLmxhYmVsKSA/IG9wdGlvbnMubGFiZWwgOiAnJyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19