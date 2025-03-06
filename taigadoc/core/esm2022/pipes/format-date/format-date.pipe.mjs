import { inject, Pipe } from '@angular/core';
import { TuiFormatDateService } from '@taiga-ui/core/services';
import * as i0 from "@angular/core";
class TuiFormatDatePipe {
    constructor() {
        this.service = inject(TuiFormatDateService);
    }
    transform(timestampOrDate) {
        return this.service.format(timestampOrDate.valueOf());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatDatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatDatePipe, isStandalone: true, name: "tuiFormatDate" }); }
}
export { TuiFormatDatePipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatDatePipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiFormatDate',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvcGlwZXMvZm9ybWF0LWRhdGUvZm9ybWF0LWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7QUFHN0QsTUFJYSxpQkFBaUI7SUFKOUI7UUFLcUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBSzNEO0lBSFUsU0FBUyxDQUFDLGVBQThCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQzsrR0FMUSxpQkFBaUI7NkdBQWpCLGlCQUFpQjs7U0FBakIsaUJBQWlCOzRGQUFqQixpQkFBaUI7a0JBSjdCLElBQUk7bUJBQUM7b0JBQ0YsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRSxlQUFlO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aW5qZWN0LCBQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHVpRm9ybWF0RGF0ZVNlcnZpY2V9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3NlcnZpY2VzJztcbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQFBpcGUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgbmFtZTogJ3R1aUZvcm1hdERhdGUnLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlGb3JtYXREYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZSA9IGluamVjdChUdWlGb3JtYXREYXRlU2VydmljZSk7XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKHRpbWVzdGFtcE9yRGF0ZTogRGF0ZSB8IG51bWJlcik6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZm9ybWF0KHRpbWVzdGFtcE9yRGF0ZS52YWx1ZU9mKCkpO1xuICAgIH1cbn1cbiJdfQ==