import { inject, Injectable } from '@angular/core';
import { TuiPopoverService } from '@taiga-ui/cdk/services';
import { TUI_DIALOGS } from '@taiga-ui/core/components/dialog';
import { TuiPdfViewerComponent } from './pdf-viewer.component';
import { TUI_PDF_VIEWER_OPTIONS } from './pdf-viewer.options';
import * as i0 from "@angular/core";
class TuiPdfViewerService extends TuiPopoverService {
    open(content, options = {}) {
        return super.open(content, options);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerService, providedIn: 'root', useFactory: () => new TuiPdfViewerService(TUI_DIALOGS, TuiPdfViewerComponent, inject(TUI_PDF_VIEWER_OPTIONS)) }); }
}
export { TuiPdfViewerService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiPdfViewerService(TUI_DIALOGS, TuiPdfViewerComponent, inject(TUI_PDF_VIEWER_OPTIONS)),
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXZpZXdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvcGRmLXZpZXdlci9wZGYtdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBSTdELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQU01RCxNQVNhLG1CQUFvQixTQUFRLGlCQUErQztJQUNwRSxJQUFJLENBQ2hCLE9BQXFDLEVBQ3JDLFVBQTZDLEVBQUU7UUFFL0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzsrR0FOUSxtQkFBbUI7bUhBQW5CLG1CQUFtQixjQVJoQixNQUFNLGNBQ04sR0FBRyxFQUFFLENBQ2IsSUFBSSxtQkFBbUIsQ0FDbkIsV0FBVyxFQUNYLHFCQUFxQixFQUNyQixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FDakM7O1NBRUksbUJBQW1COzRGQUFuQixtQkFBbUI7a0JBVC9CLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FDYix3QkFDSSxXQUFXLEVBQ1gscUJBQXFCLEVBQ3JCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUNqQztpQkFDUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtTYWZlUmVzb3VyY2VVcmx9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHR5cGUge1R1aVBvcG92ZXJDb250ZXh0fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3NlcnZpY2VzJztcbmltcG9ydCB7VHVpUG9wb3ZlclNlcnZpY2V9IGZyb20gJ0B0YWlnYS11aS9jZGsvc2VydmljZXMnO1xuaW1wb3J0IHtUVUlfRElBTE9HU30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy9kaWFsb2cnO1xuaW1wb3J0IHR5cGUge1BvbHltb3JwaGV1c0NvbnRlbnR9IGZyb20gJ0B0YWlnYS11aS9wb2x5bW9ycGhldXMnO1xuaW1wb3J0IHR5cGUge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1R1aVBkZlZpZXdlckNvbXBvbmVudH0gZnJvbSAnLi9wZGYtdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgdHlwZSB7VHVpUGRmVmlld2VyT3B0aW9uc30gZnJvbSAnLi9wZGYtdmlld2VyLm9wdGlvbnMnO1xuaW1wb3J0IHtUVUlfUERGX1ZJRVdFUl9PUFRJT05TfSBmcm9tICcuL3BkZi12aWV3ZXIub3B0aW9ucyc7XG5cbnR5cGUgQ29udGVudDxHPiA9IFBvbHltb3JwaGV1c0NvbnRlbnQ8XG4gICAgVHVpUGRmVmlld2VyT3B0aW9uczx1bmtub3duPiAmIFR1aVBvcG92ZXJDb250ZXh0PEc+XG4+O1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICAgIHVzZUZhY3Rvcnk6ICgpID0+XG4gICAgICAgIG5ldyBUdWlQZGZWaWV3ZXJTZXJ2aWNlKFxuICAgICAgICAgICAgVFVJX0RJQUxPR1MsXG4gICAgICAgICAgICBUdWlQZGZWaWV3ZXJDb21wb25lbnQsXG4gICAgICAgICAgICBpbmplY3QoVFVJX1BERl9WSUVXRVJfT1BUSU9OUyksXG4gICAgICAgICksXG59KVxuZXhwb3J0IGNsYXNzIFR1aVBkZlZpZXdlclNlcnZpY2UgZXh0ZW5kcyBUdWlQb3BvdmVyU2VydmljZTxUdWlQZGZWaWV3ZXJPcHRpb25zPHVua25vd24+PiB7XG4gICAgcHVibGljIG92ZXJyaWRlIG9wZW48Rz4oXG4gICAgICAgIGNvbnRlbnQ6IENvbnRlbnQ8Rz4gfCBTYWZlUmVzb3VyY2VVcmwsXG4gICAgICAgIG9wdGlvbnM6IFBhcnRpYWw8VHVpUGRmVmlld2VyT3B0aW9uczxhbnk+PiA9IHt9LFxuICAgICk6IE9ic2VydmFibGU8Rz4ge1xuICAgICAgICByZXR1cm4gc3VwZXIub3Blbihjb250ZW50IGFzIENvbnRlbnQ8Rz4sIG9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==