import { AsyncPipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, forwardRef, inject, } from '@angular/core';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiQueryListChanges } from '@taiga-ui/cdk/observables';
import { map, ReplaySubject, switchMap } from 'rxjs';
import { TuiTableCell } from '../directives/cell.directive';
import { TuiTableDirective } from '../directives/table.directive';
import { TUI_TABLE_PROVIDER } from '../providers/table.provider';
import { TuiTableTbody } from '../tbody/tbody.component';
import { TuiTableTd } from '../td/td.component';
import * as i0 from "@angular/core";
class TuiTableTr {
    constructor() {
        this.cells = EMPTY_QUERY;
        this.body = inject(forwardRef(() => TuiTableTbody));
        this.contentReady$ = new ReplaySubject(1);
        this.table = inject(forwardRef(() => TuiTableDirective));
        this.cells$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.cells)), map((cells) => cells.reduce((record, item) => ({ ...record, [item.tuiCell]: item }), {})));
        this.item$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.body.rows)), map((rows) => this.body.data[rows.findIndex((row) => row === this)]));
    }
    async ngAfterContentInit() {
        await Promise.resolve();
        this.contentReady$.next(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTr, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableTr, isStandalone: true, selector: "tr[tuiTr]", providers: [TUI_TABLE_PROVIDER], queries: [{ propertyName: "cells", predicate: i0.forwardRef(function () { return TuiTableCell; }) }], ngImport: i0, template: "<ng-container *ngIf=\"cells$ | async as items; else dummy\">\n    <ng-container\n        *ngFor=\"let key of table.columns\"\n        [ngTemplateOutlet]=\"(items[key] && items[key].template) || plain\"\n    >\n        <ng-template #plain>\n            <td\n                *ngIf=\"item$ | async as item\"\n                tuiTd\n            >\n                {{ item[key] }}\n            </td>\n        </ng-template>\n    </ng-container>\n</ng-container>\n<ng-template #dummy><td></td></ng-template>\n", dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TuiTableTd, selector: "th[tuiTd], td[tuiTd]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiTableTr };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTr, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tr[tuiTr]', imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTd], changeDetection: ChangeDetectionStrategy.OnPush, providers: [TUI_TABLE_PROVIDER], template: "<ng-container *ngIf=\"cells$ | async as items; else dummy\">\n    <ng-container\n        *ngFor=\"let key of table.columns\"\n        [ngTemplateOutlet]=\"(items[key] && items[key].template) || plain\"\n    >\n        <ng-template #plain>\n            <td\n                *ngIf=\"item$ | async as item\"\n                tuiTd\n            >\n                {{ item[key] }}\n            </td>\n        </ng-template>\n    </ng-container>\n</ng-container>\n<ng-template #dummy><td></td></ng-template>\n" }]
        }], propDecorators: { cells: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiTableCell)]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tdGFibGUvY29tcG9uZW50cy90YWJsZS90ci90ci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3RhYmxlL3RyL3RyLnRlbXBsYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFM0UsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixNQUFNLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFOUMsTUFRYSxVQUFVO0lBUnZCO1FBWXFCLFVBQUssR0FBNEIsV0FBVyxDQUFDO1FBRTdDLFNBQUksR0FBRyxNQUFNLENBQW1CLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRWpFLGtCQUFhLEdBQUcsSUFBSSxhQUFhLENBQVUsQ0FBQyxDQUFDLENBQUM7UUFFNUMsVUFBSyxHQUFHLE1BQU0sQ0FDN0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQ3RDLENBQUM7UUFFaUIsV0FBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUMvQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQ2hELEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1YsS0FBSyxDQUFDLE1BQU0sQ0FDUixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxFQUNyRCxFQUE0QyxDQUMvQyxDQUNKLENBQ0osQ0FBQztRQUVpQixVQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzlDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3BELEdBQUcsQ0FDQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUduRCxDQUNSLENBQ0osQ0FBQztLQU1MO0lBSlUsS0FBSyxDQUFDLGtCQUFrQjtRQUMzQixNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOytHQXRDUSxVQUFVO21HQUFWLFVBQVUsd0RBRlIsQ0FBQyxrQkFBa0IsQ0FBQyxtRkFLRyxZQUFZLGlDQzlCbEQseWZBZ0JBLHVDRE1jLFNBQVMsOENBQUUsT0FBTyxtSEFBRSxJQUFJLDZGQUFFLGdCQUFnQixvSkFBRSxVQUFVOztTQUt2RCxVQUFVOzRGQUFWLFVBQVU7a0JBUnRCLFNBQVM7aUNBQ00sSUFBSSxZQUNOLFdBQVcsV0FDWixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxtQkFFaEQsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLGtCQUFrQixDQUFDOzhCQU1kLEtBQUs7c0JBRHJCLGVBQWU7dUJBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNQaXBlLCBOZ0Zvck9mLCBOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgZm9yd2FyZFJlZixcbiAgICBpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFTVBUWV9RVUVSWX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9jb25zdGFudHMnO1xuaW1wb3J0IHt0dWlRdWVyeUxpc3RDaGFuZ2VzfSBmcm9tICdAdGFpZ2EtdWkvY2RrL29ic2VydmFibGVzJztcbmltcG9ydCB7bWFwLCBSZXBsYXlTdWJqZWN0LCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1R1aVRhYmxlQ2VsbH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1R1aVRhYmxlRGlyZWN0aXZlfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1RVSV9UQUJMRV9QUk9WSURFUn0gZnJvbSAnLi4vcHJvdmlkZXJzL3RhYmxlLnByb3ZpZGVyJztcbmltcG9ydCB7VHVpVGFibGVUYm9keX0gZnJvbSAnLi4vdGJvZHkvdGJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7VHVpVGFibGVUZH0gZnJvbSAnLi4vdGQvdGQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3RyW3R1aVRyXScsXG4gICAgaW1wb3J0czogW0FzeW5jUGlwZSwgTmdGb3JPZiwgTmdJZiwgTmdUZW1wbGF0ZU91dGxldCwgVHVpVGFibGVUZF0sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RyLnRlbXBsYXRlLmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW1RVSV9UQUJMRV9QUk9WSURFUl0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aVRhYmxlVHI8VCBleHRlbmRzIFBhcnRpYWw8UmVjb3JkPGtleW9mIFQsIGFueT4+PlxuICAgIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdFxue1xuICAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBUdWlUYWJsZUNlbGwpKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2VsbHM6IFF1ZXJ5TGlzdDxUdWlUYWJsZUNlbGw+ID0gRU1QVFlfUVVFUlk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGJvZHkgPSBpbmplY3Q8VHVpVGFibGVUYm9keTxUPj4oZm9yd2FyZFJlZigoKSA9PiBUdWlUYWJsZVRib2R5KSk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRlbnRSZWFkeSQgPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigxKTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSB0YWJsZSA9IGluamVjdDxUdWlUYWJsZURpcmVjdGl2ZTxUPj4oXG4gICAgICAgIGZvcndhcmRSZWYoKCkgPT4gVHVpVGFibGVEaXJlY3RpdmUpLFxuICAgICk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2VsbHMkID0gdGhpcy5jb250ZW50UmVhZHkkLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0dWlRdWVyeUxpc3RDaGFuZ2VzKHRoaXMuY2VsbHMpKSxcbiAgICAgICAgbWFwKChjZWxscykgPT5cbiAgICAgICAgICAgIGNlbGxzLnJlZHVjZShcbiAgICAgICAgICAgICAgICAocmVjb3JkLCBpdGVtKSA9PiAoey4uLnJlY29yZCwgW2l0ZW0udHVpQ2VsbF06IGl0ZW19KSxcbiAgICAgICAgICAgICAgICB7fSBhcyBSZWNvcmQ8c3RyaW5nIHwga2V5b2YgVCwgVHVpVGFibGVDZWxsPixcbiAgICAgICAgICAgICksXG4gICAgICAgICksXG4gICAgKTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBpdGVtJCA9IHRoaXMuY29udGVudFJlYWR5JC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdHVpUXVlcnlMaXN0Q2hhbmdlcyh0aGlzLmJvZHkucm93cykpLFxuICAgICAgICBtYXAoXG4gICAgICAgICAgICAocm93cykgPT5cbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkuZGF0YVtyb3dzLmZpbmRJbmRleCgocm93KSA9PiByb3cgPT09IHRoaXMpXSBhcyBSZWNvcmQ8XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyB8IGtleW9mIFQsXG4gICAgICAgICAgICAgICAgICAgIGFueVxuICAgICAgICAgICAgICAgID4sXG4gICAgICAgICksXG4gICAgKTtcblxuICAgIHB1YmxpYyBhc3luYyBuZ0FmdGVyQ29udGVudEluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLmNvbnRlbnRSZWFkeSQubmV4dCh0cnVlKTtcbiAgICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbHMkIHwgYXN5bmMgYXMgaXRlbXM7IGVsc2UgZHVtbXlcIj5cbiAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0Zvcj1cImxldCBrZXkgb2YgdGFibGUuY29sdW1uc1wiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIihpdGVtc1trZXldICYmIGl0ZW1zW2tleV0udGVtcGxhdGUpIHx8IHBsYWluXCJcbiAgICA+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjcGxhaW4+XG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0kIHwgYXN5bmMgYXMgaXRlbVwiXG4gICAgICAgICAgICAgICAgdHVpVGRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBpdGVtW2tleV0gfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbjxuZy10ZW1wbGF0ZSAjZHVtbXk+PHRkPjwvdGQ+PC9uZy10ZW1wbGF0ZT5cbiJdfQ==