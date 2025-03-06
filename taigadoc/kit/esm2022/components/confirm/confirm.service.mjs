import { inject, Injectable } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core/components/dialog';
import { defer, of } from 'rxjs';
import { TUI_CONFIRM } from './confirm.component';
import * as i0 from "@angular/core";
class TuiConfirmService {
    constructor() {
        this.dialogs = inject(TuiDialogService);
        this.dirty = false;
    }
    markAsDirty() {
        this.dirty = true;
    }
    markAsPristine() {
        this.dirty = false;
    }
    withConfirm(options) {
        return defer(() => this.dirty
            ? this.dialogs.open(TUI_CONFIRM, {
                size: 's',
                ...options,
            })
            : of(true));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConfirmService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConfirmService }); }
}
export { TuiConfirmService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConfirmService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvY29uZmlybS9jb25maXJtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFFbEUsT0FBTyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQUVoRCxNQUNhLGlCQUFpQjtJQUQ5QjtRQUVxQixZQUFPLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUMsVUFBSyxHQUFHLEtBQUssQ0FBQztLQXNCekI7SUFwQlUsV0FBVztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxXQUFXLENBQ2QsT0FBa0Q7UUFFbEQsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQ2QsSUFBSSxDQUFDLEtBQUs7WUFDTixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQVUsV0FBVyxFQUFFO2dCQUNwQyxJQUFJLEVBQUUsR0FBRztnQkFDVCxHQUFHLE9BQU87YUFDYixDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDakIsQ0FBQztJQUNOLENBQUM7K0dBdkJRLGlCQUFpQjttSEFBakIsaUJBQWlCOztTQUFqQixpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtUdWlEaWFsb2dPcHRpb25zfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL2RpYWxvZyc7XG5pbXBvcnQge1R1aURpYWxvZ1NlcnZpY2V9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvZGlhbG9nJztcbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVmZXIsIG9mfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUge1R1aUNvbmZpcm1EYXRhfSBmcm9tICcuL2NvbmZpcm0uY29tcG9uZW50JztcbmltcG9ydCB7VFVJX0NPTkZJUk19IGZyb20gJy4vY29uZmlybS5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHVpQ29uZmlybVNlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGlhbG9ncyA9IGluamVjdChUdWlEaWFsb2dTZXJ2aWNlKTtcbiAgICBwcml2YXRlIGRpcnR5ID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgbWFya0FzRGlydHkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYXJrQXNQcmlzdGluZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3aXRoQ29uZmlybShcbiAgICAgICAgb3B0aW9uczogUGFydGlhbDxUdWlEaWFsb2dPcHRpb25zPFR1aUNvbmZpcm1EYXRhPj4sXG4gICAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBkZWZlcigoKSA9PlxuICAgICAgICAgICAgdGhpcy5kaXJ0eVxuICAgICAgICAgICAgICAgID8gdGhpcy5kaWFsb2dzLm9wZW48Ym9vbGVhbj4oVFVJX0NPTkZJUk0sIHtcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiAncycsXG4gICAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBvZih0cnVlKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=