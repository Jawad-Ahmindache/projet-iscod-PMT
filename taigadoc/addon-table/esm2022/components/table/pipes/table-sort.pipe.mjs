import { __decorate } from "tslib";
import { inject, Pipe } from '@angular/core';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiTableDirective } from '../directives/table.directive';
import * as i0 from "@angular/core";
class TuiTableSortPipe {
    constructor() {
        this.table = inject((TuiTableDirective));
    }
    transform(data) {
        return this.sort(data ?? [], this.table.sorter, this.table.direction);
    }
    sort(data, sorter, direction) {
        return [...data].sort((a, b) => direction * sorter(a, b));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortPipe, isStandalone: true, name: "tuiTableSort", pure: false }); }
}
__decorate([
    tuiPure
], TuiTableSortPipe.prototype, "sort", null);
export { TuiTableSortPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiTableSort',
                    pure: false,
                }]
        }], propDecorators: { sort: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tdGFibGUvY29tcG9uZW50cy90YWJsZS9waXBlcy90YWJsZS1zb3J0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQzs7QUFHaEUsTUFLYSxnQkFBZ0I7SUFMN0I7UUFNcUIsVUFBSyxHQUFHLE1BQU0sQ0FBQyxDQUFBLGlCQUFvQixDQUFBLENBQUMsQ0FBQztLQWN6RDtJQVpVLFNBQVMsQ0FBYyxJQUEwQjtRQUNwRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFHTyxJQUFJLENBQ1IsSUFBa0IsRUFDbEIsTUFBd0IsRUFDeEIsU0FBMkI7UUFFM0IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOytHQWRRLGdCQUFnQjs2R0FBaEIsZ0JBQWdCOztBQVFqQjtJQURQLE9BQU87NENBT1A7U0FkUSxnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFMNUIsSUFBSTttQkFBQztvQkFDRixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFLGNBQWM7b0JBQ3BCLElBQUksRUFBRSxLQUFLO2lCQUNkOzhCQVNXLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2luamVjdCwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7VHVpQ29tcGFyYXRvcn0gZnJvbSAnQHRhaWdhLXVpL2FkZG9uLXRhYmxlL3R5cGVzJztcbmltcG9ydCB7dHVpUHVyZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcblxuaW1wb3J0IHtUdWlUYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi4vZGlyZWN0aXZlcy90YWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHR5cGUge1R1aVNvcnREaXJlY3Rpb259IGZyb20gJy4uL3RhYmxlLm9wdGlvbnMnO1xuXG5AUGlwZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBuYW1lOiAndHVpVGFibGVTb3J0JyxcbiAgICBwdXJlOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGFibGVTb3J0UGlwZTxLID0gUGFydGlhbDxSZWNvcmQ8YW55LCBhbnk+Pj4gaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhYmxlID0gaW5qZWN0KFR1aVRhYmxlRGlyZWN0aXZlPEs+KTtcblxuICAgIHB1YmxpYyB0cmFuc2Zvcm08VCBleHRlbmRzIEs+KGRhdGE/OiByZWFkb25seSBUW10gfCBudWxsKTogcmVhZG9ubHkgVFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydDxUPihkYXRhID8/IFtdLCB0aGlzLnRhYmxlLnNvcnRlciwgdGhpcy50YWJsZS5kaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIEB0dWlQdXJlXG4gICAgcHJpdmF0ZSBzb3J0PFQgZXh0ZW5kcyBLPihcbiAgICAgICAgZGF0YTogcmVhZG9ubHkgVFtdLFxuICAgICAgICBzb3J0ZXI6IFR1aUNvbXBhcmF0b3I8VD4sXG4gICAgICAgIGRpcmVjdGlvbjogVHVpU29ydERpcmVjdGlvbixcbiAgICApOiByZWFkb25seSBUW10ge1xuICAgICAgICByZXR1cm4gWy4uLmRhdGFdLnNvcnQoKGEsIGIpID0+IGRpcmVjdGlvbiAqIHNvcnRlcihhLCBiKSk7XG4gICAgfVxufVxuIl19