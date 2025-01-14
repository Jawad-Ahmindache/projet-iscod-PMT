import { ContentChildren, Directive, inject, Input, Output } from '@angular/core';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { delay, filter, map } from 'rxjs';
import { TuiTableSortable } from './sortable.directive';
import { TuiTableDirective } from './table.directive';
import * as i0 from "@angular/core";
class TuiTableSortBy {
    constructor() {
        this.sortables = EMPTY_QUERY;
        this.table = inject((TuiTableDirective));
        this.tuiSortByChange = this.table.sorterChange.pipe(
        // delay is for getting actual ContentChildren (sortables) https://github.com/angular/angular/issues/38976
        delay(0), filter(() => !!this.sortables.length), map((sorter) => this.getKey(sorter)));
        this.tuiSortBy = null;
    }
    set sortBy(sortBy) {
        this.tuiSortBy = sortBy;
        this.checkSortables();
    }
    checkSortables() {
        this.sortables.forEach((s) => s.check());
    }
    getKey(sorter) {
        return this.sortables.find((s) => s.sorter === sorter)?.key || null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortBy, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableSortBy, isStandalone: true, selector: "table[tuiTable][tuiSortBy]", inputs: { sortBy: ["tuiSortBy", "sortBy"] }, outputs: { tuiSortByChange: "tuiSortByChange" }, queries: [{ propertyName: "sortables", predicate: TuiTableSortable, descendants: true }], ngImport: i0 }); }
}
export { TuiTableSortBy };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortBy, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'table[tuiTable][tuiSortBy]',
                }]
        }], propDecorators: { sortables: [{
                type: ContentChildren,
                args: [TuiTableSortable, { descendants: true }]
            }], tuiSortByChange: [{
                type: Output
            }], sortBy: [{
                type: Input,
                args: ['tuiSortBy']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1ieS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvc29ydC1ieS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFcEQsTUFJYSxjQUFjO0lBSjNCO1FBTXFCLGNBQVMsR0FBbUMsV0FBVyxDQUFDO1FBRXhELFVBQUssR0FBRyxNQUFNLENBQUMsQ0FBQSxpQkFBb0IsQ0FBQSxDQUFDLENBQUM7UUFHdEMsb0JBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQzFELDBHQUEwRztRQUMxRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ1IsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUNyQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDdkMsQ0FBQztRQUVLLGNBQVMsR0FBNEIsSUFBSSxDQUFDO0tBZXBEO0lBYkcsSUFDVyxNQUFNLENBQUMsTUFBK0I7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFUyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8sTUFBTSxDQUFDLE1BQStCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQztJQUN4RSxDQUFDOytHQTVCUSxjQUFjO21HQUFkLGNBQWMsOE1BQ04sZ0JBQWdCOztTQUR4QixjQUFjOzRGQUFkLGNBQWM7a0JBSjFCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSw0QkFBNEI7aUJBQ3pDOzhCQUdvQixTQUFTO3NCQUR6QixlQUFlO3VCQUFDLGdCQUFnQixFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBQztnQkFNdEMsZUFBZTtzQkFEOUIsTUFBTTtnQkFXSSxNQUFNO3NCQURoQixLQUFLO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIGluamVjdCwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7VHVpQ29tcGFyYXRvcn0gZnJvbSAnQHRhaWdhLXVpL2FkZG9uLXRhYmxlL3R5cGVzJztcbmltcG9ydCB7RU1QVFlfUVVFUll9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB7ZGVsYXksIGZpbHRlciwgbWFwfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUdWlUYWJsZVNvcnRhYmxlfSBmcm9tICcuL3NvcnRhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1R1aVRhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3RhYmxlLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0YWJsZVt0dWlUYWJsZV1bdHVpU29ydEJ5XScsXG59KVxuZXhwb3J0IGNsYXNzIFR1aVRhYmxlU29ydEJ5PFQgZXh0ZW5kcyBQYXJ0aWFsPFJlY29yZDxrZXlvZiBULCBhbnk+Pj4ge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oVHVpVGFibGVTb3J0YWJsZSwge2Rlc2NlbmRhbnRzOiB0cnVlfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNvcnRhYmxlczogUXVlcnlMaXN0PFR1aVRhYmxlU29ydGFibGU8VD4+ID0gRU1QVFlfUVVFUlk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhYmxlID0gaW5qZWN0KFR1aVRhYmxlRGlyZWN0aXZlPFQ+KTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZWFkb25seSB0dWlTb3J0QnlDaGFuZ2UgPSB0aGlzLnRhYmxlLnNvcnRlckNoYW5nZS5waXBlKFxuICAgICAgICAvLyBkZWxheSBpcyBmb3IgZ2V0dGluZyBhY3R1YWwgQ29udGVudENoaWxkcmVuIChzb3J0YWJsZXMpIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzM4OTc2XG4gICAgICAgIGRlbGF5KDApLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLnNvcnRhYmxlcy5sZW5ndGgpLFxuICAgICAgICBtYXAoKHNvcnRlcikgPT4gdGhpcy5nZXRLZXkoc29ydGVyKSksXG4gICAgKTtcblxuICAgIHB1YmxpYyB0dWlTb3J0Qnk6IHN0cmluZyB8IGtleW9mIFQgfCBudWxsID0gbnVsbDtcblxuICAgIEBJbnB1dCgndHVpU29ydEJ5JylcbiAgICBwdWJsaWMgc2V0IHNvcnRCeShzb3J0Qnk6IHN0cmluZyB8IGtleW9mIFQgfCBudWxsKSB7XG4gICAgICAgIHRoaXMudHVpU29ydEJ5ID0gc29ydEJ5O1xuICAgICAgICB0aGlzLmNoZWNrU29ydGFibGVzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNoZWNrU29ydGFibGVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNvcnRhYmxlcy5mb3JFYWNoKChzKSA9PiBzLmNoZWNrKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0S2V5KHNvcnRlcjogVHVpQ29tcGFyYXRvcjxUPiB8IG51bGwpOiBrZXlvZiBUIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRhYmxlcy5maW5kKChzKSA9PiBzLnNvcnRlciA9PT0gc29ydGVyKT8ua2V5IHx8IG51bGw7XG4gICAgfVxufVxuIl19