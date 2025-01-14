import { Directive, inject, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TuiTableHead } from '@taiga-ui/addon-table/components';
import { defer, distinctUntilChanged, EMPTY, merge } from 'rxjs';
import { AbstractTuiTableFilter } from './abstract-table-filter';
import { TuiTableFiltersDirective } from './table-filters.directive';
import * as i0 from "@angular/core";
class TuiTableFilterDirective {
    constructor() {
        this.head = inject((TuiTableHead), { optional: true });
        this.delegate = inject((AbstractTuiTableFilter));
        this.control = inject(NgControl);
        this.filters = inject((TuiTableFiltersDirective));
        this.refresh$ = defer(() => merge(this.control.valueChanges || EMPTY, this.control.statusChanges?.pipe(distinctUntilChanged()) || EMPTY));
    }
    ngOnInit() {
        this.filters.register(this);
    }
    ngOnDestroy() {
        this.filters.unregister(this);
    }
    filter(item) {
        const { disabled, value } = this.control;
        return (!!disabled ||
            !this.key ||
            this.delegate.filter(item[this.key], value));
    }
    get key() {
        return this.tuiTableFilter || this.head?.tuiHead;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFilterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableFilterDirective, isStandalone: true, selector: "[tuiTableFilter]", inputs: { tuiTableFilter: "tuiTableFilter" }, ngImport: i0 }); }
}
export { TuiTableFilterDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFilterDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTableFilter]',
                }]
        }], propDecorators: { tuiTableFilter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZmlsdGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLXRhYmxlL2RpcmVjdGl2ZXMvdGFibGUtZmlsdGVycy90YWJsZS1maWx0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRTlELE9BQU8sRUFBQyxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUUvRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFbkUsTUFJYSx1QkFBdUI7SUFKcEM7UUFLcUIsU0FBSSxHQUFHLE1BQU0sQ0FBQyxDQUFBLFlBQWUsQ0FBQSxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDakQsYUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFBLHNCQUEyQyxDQUFBLENBQUMsQ0FBQztRQUMvRCxZQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLFlBQU8sR0FBRyxNQUFNLENBQUMsQ0FBQSx3QkFBMkIsQ0FBQSxDQUFDLENBQUM7UUFLakQsYUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FDbEMsS0FBSyxDQUNELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLEtBQUssRUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQ3BFLENBQ0osQ0FBQztLQXVCTDtJQXJCVSxRQUFRO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQU87UUFDakIsTUFBTSxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRXZDLE9BQU8sQ0FDSCxDQUFDLENBQUMsUUFBUTtZQUNWLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUN6RCxDQUFDO0lBQ04sQ0FBQztJQUVELElBQVksR0FBRztRQUNYLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztJQUNyRCxDQUFDOytHQXBDUSx1QkFBdUI7bUdBQXZCLHVCQUF1Qjs7U0FBdkIsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBSm5DLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9COzhCQVFVLGNBQWM7c0JBRHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VHVpVGFibGVIZWFkfSBmcm9tICdAdGFpZ2EtdWkvYWRkb24tdGFibGUvY29tcG9uZW50cyc7XG5pbXBvcnQgdHlwZSB7VHVpVmFsdWVzT2Z9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHtkZWZlciwgZGlzdGluY3RVbnRpbENoYW5nZWQsIEVNUFRZLCBtZXJnZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7QWJzdHJhY3RUdWlUYWJsZUZpbHRlcn0gZnJvbSAnLi9hYnN0cmFjdC10YWJsZS1maWx0ZXInO1xuaW1wb3J0IHR5cGUge1R1aVRhYmxlRmlsdGVyfSBmcm9tICcuL3RhYmxlLWZpbHRlcic7XG5pbXBvcnQge1R1aVRhYmxlRmlsdGVyc0RpcmVjdGl2ZX0gZnJvbSAnLi90YWJsZS1maWx0ZXJzLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpVGFibGVGaWx0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGFibGVGaWx0ZXJEaXJlY3RpdmU8VD4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgVHVpVGFibGVGaWx0ZXI8VD4ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaGVhZCA9IGluamVjdChUdWlUYWJsZUhlYWQ8VD4sIHtvcHRpb25hbDogdHJ1ZX0pO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGUgPSBpbmplY3QoQWJzdHJhY3RUdWlUYWJsZUZpbHRlcjxUdWlWYWx1ZXNPZjxUPiwgYW55Pik7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250cm9sID0gaW5qZWN0KE5nQ29udHJvbCk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGZpbHRlcnMgPSBpbmplY3QoVHVpVGFibGVGaWx0ZXJzRGlyZWN0aXZlPFQ+KTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR1aVRhYmxlRmlsdGVyPzoga2V5b2YgVDtcblxuICAgIHB1YmxpYyByZWFkb25seSByZWZyZXNoJCA9IGRlZmVyKCgpID0+XG4gICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgdGhpcy5jb250cm9sLnZhbHVlQ2hhbmdlcyB8fCBFTVBUWSxcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzPy5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpIHx8IEVNUFRZLFxuICAgICAgICApLFxuICAgICk7XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmlsdGVycy5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmlsdGVycy51bnJlZ2lzdGVyKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaWx0ZXIoaXRlbTogVCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7ZGlzYWJsZWQsIHZhbHVlfSA9IHRoaXMuY29udHJvbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgISFkaXNhYmxlZCB8fFxuICAgICAgICAgICAgIXRoaXMua2V5IHx8XG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlLmZpbHRlcihpdGVtW3RoaXMua2V5IGFzIGtleW9mIFRdLCB2YWx1ZSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBrZXkoKTogc3RyaW5nIHwga2V5b2YgVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnR1aVRhYmxlRmlsdGVyIHx8IHRoaXMuaGVhZD8udHVpSGVhZDtcbiAgICB9XG59XG4iXX0=