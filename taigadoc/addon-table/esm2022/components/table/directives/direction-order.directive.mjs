import { Directive, inject, Input, Output } from '@angular/core';
import { map } from 'rxjs';
import { TuiSortDirection } from '../table.options';
import { TuiTableDirective } from './table.directive';
import * as i0 from "@angular/core";
class TuiTableDirectionOrder {
    constructor() {
        this.table = inject((TuiTableDirective));
        this.directionOrderChange = this.table.directionChange.pipe(map((dir) => (dir === 1 ? 'asc' : 'desc')));
    }
    set directionOrder(order) {
        this.table.direction =
            order === 'asc' ? TuiSortDirection.Asc : TuiSortDirection.Desc;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableDirectionOrder, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableDirectionOrder, isStandalone: true, selector: "table[tuiTable][tuiDirectionOrder]", inputs: { directionOrder: "directionOrder" }, outputs: { directionOrderChange: "directionOrderChange" }, ngImport: i0 }); }
}
export { TuiTableDirectionOrder };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableDirectionOrder, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'table[tuiTable][tuiDirectionOrder]',
                }]
        }], propDecorators: { directionOrderChange: [{
                type: Output
            }], directionOrder: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLW9yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLXRhYmxlL2NvbXBvbmVudHMvdGFibGUvZGlyZWN0aXZlcy9kaXJlY3Rpb24tb3JkZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFcEQsTUFJYSxzQkFBc0I7SUFKbkM7UUFLcUIsVUFBSyxHQUFHLE1BQU0sQ0FBQyxDQUFBLGlCQUFvQixDQUFBLENBQUMsQ0FBQztRQUd0Qyx5QkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQ2xFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzdDLENBQUM7S0FPTDtJQUxHLElBQ1csY0FBYyxDQUFDLEtBQXFCO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztZQUNoQixLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUN2RSxDQUFDOytHQVpRLHNCQUFzQjttR0FBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7NEZBQXRCLHNCQUFzQjtrQkFKbEMsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLG9DQUFvQztpQkFDakQ7OEJBS21CLG9CQUFvQjtzQkFEbkMsTUFBTTtnQkFNSSxjQUFjO3NCQUR4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdCwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7VHVpU29ydERpcmVjdGlvbn0gZnJvbSAnLi4vdGFibGUub3B0aW9ucyc7XG5pbXBvcnQge1R1aVRhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3RhYmxlLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0YWJsZVt0dWlUYWJsZV1bdHVpRGlyZWN0aW9uT3JkZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGFibGVEaXJlY3Rpb25PcmRlcjxUPiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0YWJsZSA9IGluamVjdChUdWlUYWJsZURpcmVjdGl2ZTxUPik7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGlyZWN0aW9uT3JkZXJDaGFuZ2UgPSB0aGlzLnRhYmxlLmRpcmVjdGlvbkNoYW5nZS5waXBlKFxuICAgICAgICBtYXAoKGRpcikgPT4gKGRpciA9PT0gMSA/ICdhc2MnIDogJ2Rlc2MnKSksXG4gICAgKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBkaXJlY3Rpb25PcmRlcihvcmRlcjogJ2FzYycgfCAnZGVzYycpIHtcbiAgICAgICAgdGhpcy50YWJsZS5kaXJlY3Rpb24gPVxuICAgICAgICAgICAgb3JkZXIgPT09ICdhc2MnID8gVHVpU29ydERpcmVjdGlvbi5Bc2MgOiBUdWlTb3J0RGlyZWN0aW9uLkRlc2M7XG4gICAgfVxufVxuIl19