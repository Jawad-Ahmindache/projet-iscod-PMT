import { inject, Injectable } from '@angular/core';
import { TuiPopoverService } from '@taiga-ui/cdk/services';
import { TUI_DIALOGS } from '@taiga-ui/core/components/dialog';
import { TuiMobileDialog } from './mobile-dialog.component';
import { TUI_MOBILE_DIALOG_OPTIONS } from './mobile-dialog.options';
import * as i0 from "@angular/core";
class TuiMobileDialogService extends TuiPopoverService {
    open(content, options = {}) {
        return super.open(content, options);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileDialogService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileDialogService, providedIn: 'root', useFactory: () => new TuiMobileDialogService(TUI_DIALOGS, TuiMobileDialog, inject(TUI_MOBILE_DIALOG_OPTIONS)) }); }
}
export { TuiMobileDialogService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiMobileDialogService(TUI_DIALOGS, TuiMobileDialog, inject(TUI_MOBILE_DIALOG_OPTIONS)),
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tbW9iaWxlL2NvbXBvbmVudHMvbW9iaWxlLWRpYWxvZy9tb2JpbGUtZGlhbG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBSTdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFbEUsTUFTYSxzQkFBdUIsU0FBUSxpQkFHM0M7SUFDbUIsSUFBSSxDQUNoQixPQUVDLEVBQ0QsVUFBZ0QsRUFBRTtRQUVsRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7K0dBWFEsc0JBQXNCO21IQUF0QixzQkFBc0IsY0FSbkIsTUFBTSxjQUNOLEdBQUcsRUFBRSxDQUNiLElBQUksc0JBQXNCLENBQ3RCLFdBQVcsRUFDWCxlQUFlLEVBQ2YsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQ3BDOztTQUVJLHNCQUFzQjs0RkFBdEIsc0JBQXNCO2tCQVRsQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO29CQUNsQixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQ2IsMkJBQ0ksV0FBVyxFQUNYLGVBQWUsRUFDZixNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FDcEM7aUJBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7VHVpUG9wb3ZlckNvbnRleHR9IGZyb20gJ0B0YWlnYS11aS9jZGsvc2VydmljZXMnO1xuaW1wb3J0IHtUdWlQb3BvdmVyU2VydmljZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9zZXJ2aWNlcyc7XG5pbXBvcnQge1RVSV9ESUFMT0dTfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL2RpYWxvZyc7XG5pbXBvcnQgdHlwZSB7UG9seW1vcnBoZXVzQ29udGVudH0gZnJvbSAnQHRhaWdhLXVpL3BvbHltb3JwaGV1cyc7XG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7VHVpTW9iaWxlRGlhbG9nfSBmcm9tICcuL21vYmlsZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB0eXBlIHtUdWlNb2JpbGVEaWFsb2dPcHRpb25zfSBmcm9tICcuL21vYmlsZS1kaWFsb2cub3B0aW9ucyc7XG5pbXBvcnQge1RVSV9NT0JJTEVfRElBTE9HX09QVElPTlN9IGZyb20gJy4vbW9iaWxlLWRpYWxvZy5vcHRpb25zJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICB1c2VGYWN0b3J5OiAoKSA9PlxuICAgICAgICBuZXcgVHVpTW9iaWxlRGlhbG9nU2VydmljZShcbiAgICAgICAgICAgIFRVSV9ESUFMT0dTLFxuICAgICAgICAgICAgVHVpTW9iaWxlRGlhbG9nLFxuICAgICAgICAgICAgaW5qZWN0KFRVSV9NT0JJTEVfRElBTE9HX09QVElPTlMpLFxuICAgICAgICApLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlNb2JpbGVEaWFsb2dTZXJ2aWNlIGV4dGVuZHMgVHVpUG9wb3ZlclNlcnZpY2U8XG4gICAgVHVpTW9iaWxlRGlhbG9nT3B0aW9uczxhbnk+LFxuICAgIG51bWJlclxuPiB7XG4gICAgcHVibGljIG92ZXJyaWRlIG9wZW4oXG4gICAgICAgIGNvbnRlbnQ6IFBvbHltb3JwaGV1c0NvbnRlbnQ8XG4gICAgICAgICAgICBUdWlNb2JpbGVEaWFsb2dPcHRpb25zPGFueT4gJiBUdWlQb3BvdmVyQ29udGV4dDxudW1iZXI+XG4gICAgICAgID4sXG4gICAgICAgIG9wdGlvbnM6IFBhcnRpYWw8VHVpTW9iaWxlRGlhbG9nT3B0aW9uczxhbnk+PiA9IHt9LFxuICAgICk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBzdXBlci5vcGVuKGNvbnRlbnQsIG9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==