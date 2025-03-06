import { inject, Injectable } from '@angular/core';
import { TuiPopoverService } from '@taiga-ui/cdk/services';
import { TUI_ALERTS } from '@taiga-ui/core/components/alert';
import { TUI_PUSH_OPTIONS } from './push.options';
import { TuiPushAlert } from './push-alert.component';
import * as i0 from "@angular/core";
class TuiPushService extends TuiPopoverService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushService, providedIn: 'root', useFactory: () => new TuiPushService(TUI_ALERTS, TuiPushAlert, inject(TUI_PUSH_OPTIONS)) }); }
}
export { TuiPushService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiPushService(TUI_ALERTS, TuiPushAlert, inject(TUI_PUSH_OPTIONS)),
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvcHVzaC9wdXNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFcEQsTUFLYSxjQUFlLFNBQVEsaUJBQXlDOytHQUFoRSxjQUFjO21IQUFkLGNBQWMsY0FKWCxNQUFNLGNBQ04sR0FBRyxFQUFFLENBQ2IsSUFBSSxjQUFjLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7U0FFakUsY0FBYzs0RkFBZCxjQUFjO2tCQUwxQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO29CQUNsQixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQ2IsbUJBQW1CLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUdWlQb3BvdmVyU2VydmljZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9zZXJ2aWNlcyc7XG5pbXBvcnQge1RVSV9BTEVSVFN9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvYWxlcnQnO1xuXG5pbXBvcnQgdHlwZSB7VHVpUHVzaE9wdGlvbnN9IGZyb20gJy4vcHVzaC5vcHRpb25zJztcbmltcG9ydCB7VFVJX1BVU0hfT1BUSU9OU30gZnJvbSAnLi9wdXNoLm9wdGlvbnMnO1xuaW1wb3J0IHtUdWlQdXNoQWxlcnR9IGZyb20gJy4vcHVzaC1hbGVydC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICAgIHVzZUZhY3Rvcnk6ICgpID0+XG4gICAgICAgIG5ldyBUdWlQdXNoU2VydmljZShUVUlfQUxFUlRTLCBUdWlQdXNoQWxlcnQsIGluamVjdChUVUlfUFVTSF9PUFRJT05TKSksXG59KVxuZXhwb3J0IGNsYXNzIFR1aVB1c2hTZXJ2aWNlIGV4dGVuZHMgVHVpUG9wb3ZlclNlcnZpY2U8VHVpUHVzaE9wdGlvbnMsIHN0cmluZz4ge31cbiJdfQ==