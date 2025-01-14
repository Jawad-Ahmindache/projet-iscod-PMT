import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, forwardRef, inject, Input } from '@angular/core';
import { TuiTableTh } from '../th/th.component';
import { TuiTableSortBy } from './sort-by.directive';
import { TuiTableDirective } from './table.directive';
import * as i0 from "@angular/core";
class TuiTableSortable {
    constructor() {
        this.table = inject((TuiTableDirective));
        this.th = inject((TuiTableTh));
        this.sortBy = inject(forwardRef(() => TuiTableSortBy));
        this.sorter = () => 0;
    }
    get key() {
        return this.th.key;
    }
    ngOnChanges() {
        if (this.sortable) {
            this.sorter = this.match ? this.table.sorter : this.sorter;
            this.th.sorter = this.sorter;
        }
        else {
            this.th.sorter = null;
        }
    }
    check() {
        if (this.match && this.table.sorter !== this.sorter) {
            this.table.updateSorter(this.sorter);
        }
    }
    get match() {
        return this.sortBy.tuiSortBy === this.key;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortable, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: TuiTableSortable, isStandalone: true, selector: "th[tuiTh][tuiSortable]", inputs: { sortable: ["tuiSortable", "sortable", coerceBooleanProperty] }, usesOnChanges: true, ngImport: i0 }); }
}
export { TuiTableSortable };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortable, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'th[tuiTh][tuiSortable]',
                }]
        }], propDecorators: { sortable: [{
                type: Input,
                args: [{
                        alias: 'tuiSortable',
                        transform: coerceBooleanProperty,
                    }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tdGFibGUvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3NvcnRhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR25FLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXBELE1BSWEsZ0JBQWdCO0lBSjdCO1FBT3FCLFVBQUssR0FBRyxNQUFNLENBQUMsQ0FBQSxpQkFBb0IsQ0FBQSxDQUFDLENBQUM7UUFDckMsT0FBRSxHQUFHLE1BQU0sQ0FBQyxDQUFBLFVBQWEsQ0FBQSxDQUFDLENBQUM7UUFDM0IsV0FBTSxHQUFHLE1BQU0sQ0FBb0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFZL0UsV0FBTSxHQUFxQixHQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FvQnJEO0lBeEJHLElBQVcsR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUlNLFdBQVc7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNELElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDaEM7YUFBTTtZQUNILElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFTSxLQUFLO1FBQ1IsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVELElBQVksS0FBSztRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUM5QyxDQUFDOytHQXBDUSxnQkFBZ0I7bUdBQWhCLGdCQUFnQiwwR0FTVixxQkFBcUI7O1NBVDNCLGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUo1QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsd0JBQXdCO2lCQUNyQzs4QkFZVSxRQUFRO3NCQUpkLEtBQUs7dUJBQUM7d0JBQ0gsS0FBSyxFQUFFLGFBQWE7d0JBQ3BCLFNBQVMsRUFBRSxxQkFBcUI7cUJBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0Jvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Y29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHR5cGUge09uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgaW5qZWN0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7VHVpQ29tcGFyYXRvcn0gZnJvbSAnQHRhaWdhLXVpL2FkZG9uLXRhYmxlL3R5cGVzJztcblxuaW1wb3J0IHtUdWlUYWJsZVRofSBmcm9tICcuLi90aC90aC5jb21wb25lbnQnO1xuaW1wb3J0IHtUdWlUYWJsZVNvcnRCeX0gZnJvbSAnLi9zb3J0LWJ5LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1R1aVRhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3RhYmxlLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0aFt0dWlUaF1bdHVpU29ydGFibGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGFibGVTb3J0YWJsZTxUIGV4dGVuZHMgUGFydGlhbDxSZWNvcmQ8a2V5b2YgVCwgYW55Pj4+XG4gICAgaW1wbGVtZW50cyBPbkNoYW5nZXNcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhYmxlID0gaW5qZWN0KFR1aVRhYmxlRGlyZWN0aXZlPFQ+KTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRoID0gaW5qZWN0KFR1aVRhYmxlVGg8VD4pO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc29ydEJ5ID0gaW5qZWN0PFR1aVRhYmxlU29ydEJ5PFQ+Pihmb3J3YXJkUmVmKCgpID0+IFR1aVRhYmxlU29ydEJ5KSk7XG5cbiAgICBASW5wdXQoe1xuICAgICAgICBhbGlhczogJ3R1aVNvcnRhYmxlJyxcbiAgICAgICAgdHJhbnNmb3JtOiBjb2VyY2VCb29sZWFuUHJvcGVydHksXG4gICAgfSlcbiAgICBwdWJsaWMgc29ydGFibGU6IEJvb2xlYW5JbnB1dDtcblxuICAgIHB1YmxpYyBnZXQga2V5KCk6IGtleW9mIFQge1xuICAgICAgICByZXR1cm4gdGhpcy50aC5rZXk7XG4gICAgfVxuXG4gICAgcHVibGljIHNvcnRlcjogVHVpQ29tcGFyYXRvcjxUPiA9ICgpOiBudW1iZXIgPT4gMDtcblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGVyID0gdGhpcy5tYXRjaCA/IHRoaXMudGFibGUuc29ydGVyIDogdGhpcy5zb3J0ZXI7XG4gICAgICAgICAgICB0aGlzLnRoLnNvcnRlciA9IHRoaXMuc29ydGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aC5zb3J0ZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tYXRjaCAmJiB0aGlzLnRhYmxlLnNvcnRlciAhPT0gdGhpcy5zb3J0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGUudXBkYXRlU29ydGVyKHRoaXMuc29ydGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IG1hdGNoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0QnkudHVpU29ydEJ5ID09PSB0aGlzLmtleTtcbiAgICB9XG59XG4iXX0=