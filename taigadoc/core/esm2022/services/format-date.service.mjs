import { inject, Injectable, LOCALE_ID } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
class TuiFormatDateService {
    constructor() {
        this.locale = inject(LOCALE_ID);
    }
    format(timestamp) {
        return of(new Date(timestamp).toLocaleTimeString(this.locale, {
            hour: 'numeric',
            minute: '2-digit',
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatDateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatDateService, providedIn: 'root' }); }
}
export { TuiFormatDateService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatDateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc2VydmljZXMvZm9ybWF0LWRhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFeEIsTUFHYSxvQkFBb0I7SUFIakM7UUFJdUIsV0FBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQVVqRDtJQVJVLE1BQU0sQ0FBQyxTQUFpQjtRQUMzQixPQUFPLEVBQUUsQ0FDTCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hELElBQUksRUFBRSxTQUFTO1lBQ2YsTUFBTSxFQUFFLFNBQVM7U0FDcEIsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDOytHQVZRLG9CQUFvQjttSEFBcEIsb0JBQW9CLGNBRmpCLE1BQU07O1NBRVQsb0JBQW9COzRGQUFwQixvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge29mfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpRm9ybWF0RGF0ZVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCByZWFkb25seSBsb2NhbGUgPSBpbmplY3QoTE9DQUxFX0lEKTtcblxuICAgIHB1YmxpYyBmb3JtYXQodGltZXN0YW1wOiBudW1iZXIpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgICBuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlVGltZVN0cmluZyh0aGlzLmxvY2FsZSwge1xuICAgICAgICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==