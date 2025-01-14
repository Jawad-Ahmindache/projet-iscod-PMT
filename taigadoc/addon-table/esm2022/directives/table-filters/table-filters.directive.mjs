import { Directive } from '@angular/core';
import { identity, map, merge, ReplaySubject, startWith, switchMap } from 'rxjs';
import * as i0 from "@angular/core";
class TuiTableFiltersDirective {
    constructor() {
        this.refresh$ = new ReplaySubject(1);
        this.filters = [];
    }
    register(filter) {
        this.filters = this.filters.concat(filter);
        this.update();
    }
    unregister(filter) {
        this.filters = this.filters.filter((item) => item !== filter);
        this.update();
    }
    filter(items) {
        return this.refresh$.pipe(switchMap(identity), startWith(null), map(() => items.filter((item) => this.check(item))));
    }
    check(item) {
        return this.filters.every((filter) => filter.filter(item));
    }
    update() {
        this.refresh$.next(merge(...this.filters.map(({ refresh$ }) => refresh$)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableFiltersDirective, isStandalone: true, selector: "[tuiTableFilters]", ngImport: i0 }); }
}
export { TuiTableFiltersDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTableFilters]',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZmlsdGVycy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRvbi10YWJsZS9kaXJlY3RpdmVzL3RhYmxlLWZpbHRlcnMvdGFibGUtZmlsdGVycy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxPQUFPLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBSS9FLE1BSWEsd0JBQXdCO0lBSnJDO1FBS3FCLGFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBc0IsQ0FBQyxDQUFDLENBQUM7UUFFOUQsWUFBTyxHQUFxQyxFQUFFLENBQUM7S0EyQjFEO0lBekJVLFFBQVEsQ0FBQyxNQUF5QjtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sVUFBVSxDQUFDLE1BQXlCO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFtQjtRQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNyQixTQUFTLENBQUMsUUFBUSxDQUFDLEVBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ3RELENBQUM7SUFDTixDQUFDO0lBRU8sS0FBSyxDQUFDLElBQU87UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTyxNQUFNO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzsrR0E3QlEsd0JBQXdCO21HQUF4Qix3QkFBd0I7O1NBQXhCLHdCQUF3Qjs0RkFBeEIsd0JBQXdCO2tCQUpwQyxTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7aWRlbnRpdHksIG1hcCwgbWVyZ2UsIFJlcGxheVN1YmplY3QsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUge1R1aVRhYmxlRmlsdGVyfSBmcm9tICcuL3RhYmxlLWZpbHRlcic7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpVGFibGVGaWx0ZXJzXScsXG59KVxuZXhwb3J0IGNsYXNzIFR1aVRhYmxlRmlsdGVyc0RpcmVjdGl2ZTxUPiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSByZWZyZXNoJCA9IG5ldyBSZXBsYXlTdWJqZWN0PE9ic2VydmFibGU8dW5rbm93bj4+KDEpO1xuXG4gICAgcHJpdmF0ZSBmaWx0ZXJzOiBSZWFkb25seUFycmF5PFR1aVRhYmxlRmlsdGVyPFQ+PiA9IFtdO1xuXG4gICAgcHVibGljIHJlZ2lzdGVyKGZpbHRlcjogVHVpVGFibGVGaWx0ZXI8VD4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gdGhpcy5maWx0ZXJzLmNvbmNhdChmaWx0ZXIpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyKGZpbHRlcjogVHVpVGFibGVGaWx0ZXI8VD4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gdGhpcy5maWx0ZXJzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gZmlsdGVyKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlsdGVyKGl0ZW1zOiByZWFkb25seSBUW10pOiBPYnNlcnZhYmxlPHJlYWRvbmx5IFRbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoJC5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGlkZW50aXR5KSxcbiAgICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgICAgIG1hcCgoKSA9PiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHRoaXMuY2hlY2soaXRlbSkpKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrKGl0ZW06IFQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5ldmVyeSgoZmlsdGVyKSA9PiBmaWx0ZXIuZmlsdGVyKGl0ZW0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoJC5uZXh0KG1lcmdlKC4uLnRoaXMuZmlsdGVycy5tYXAoKHtyZWZyZXNoJH0pID0+IHJlZnJlc2gkKSkpO1xuICAgIH1cbn1cbiJdfQ==