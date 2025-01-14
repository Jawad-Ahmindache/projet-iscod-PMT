import { Directive, Input } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
class TuiItemsWithMoreDirective {
    constructor() {
        this.itemsLimit = Infinity;
        this.required = -1;
        this.side = 'end';
        // TODO: refactor to signal inputs after Angular update
        this.change$ = new Subject();
    }
    ngOnChanges() {
        this.change$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiItemsWithMoreDirective, isStandalone: true, inputs: { itemsLimit: "itemsLimit", required: "required", side: "side" }, usesOnChanges: true, ngImport: i0 }); }
}
export { TuiItemsWithMoreDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], propDecorators: { itemsLimit: [{
                type: Input
            }], required: [{
                type: Input
            }], side: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtd2l0aC1tb3JlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL2l0ZW1zLXdpdGgtbW9yZS9pdGVtcy13aXRoLW1vcmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBRTdCLE1BR2EseUJBQXlCO0lBSHRDO1FBS1csZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUd0QixhQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFHZCxTQUFJLEdBQW9CLEtBQUssQ0FBQztRQUVyQyx1REFBdUQ7UUFDdkMsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7S0FLakQ7SUFIVSxXQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOytHQWZRLHlCQUF5QjttR0FBekIseUJBQXlCOztTQUF6Qix5QkFBeUI7NEZBQXpCLHlCQUF5QjtrQkFIckMsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtpQkFDbkI7OEJBR1UsVUFBVTtzQkFEaEIsS0FBSztnQkFJQyxRQUFRO3NCQURkLEtBQUs7Z0JBSUMsSUFBSTtzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge09uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSXRlbXNXaXRoTW9yZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXRlbXNMaW1pdCA9IEluZmluaXR5O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVxdWlyZWQgPSAtMTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNpZGU6ICdlbmQnIHwgJ3N0YXJ0JyA9ICdlbmQnO1xuXG4gICAgLy8gVE9ETzogcmVmYWN0b3IgdG8gc2lnbmFsIGlucHV0cyBhZnRlciBBbmd1bGFyIHVwZGF0ZVxuICAgIHB1YmxpYyByZWFkb25seSBjaGFuZ2UkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFuZ2UkLm5leHQoKTtcbiAgICB9XG59XG4iXX0=