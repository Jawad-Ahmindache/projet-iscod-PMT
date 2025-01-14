import { Pipe } from '@angular/core';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { fromEvent, map, startWith } from 'rxjs';
import * as i0 from "@angular/core";
class TuiFallbackSrcPipe {
    constructor() {
        this.el = tuiInjectElement();
    }
    transform(src, fallback) {
        return fromEvent(this.el, 'error', { capture: true }).pipe(map(() => fallback), startWith(src || fallback));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFallbackSrcPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiFallbackSrcPipe, isStandalone: true, name: "tuiFallbackSrc" }); }
}
export { TuiFallbackSrcPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFallbackSrcPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiFallbackSrc',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFsbGJhY2stc3JjLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3BpcGVzL2ZhbGxiYWNrLXNyYy9mYWxsYmFjay1zcmMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFL0MsTUFJYSxrQkFBa0I7SUFKL0I7UUFLcUIsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7S0FRNUM7SUFOVSxTQUFTLENBQUMsR0FBVyxFQUFFLFFBQWdCO1FBQzFDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQ25CLFNBQVMsQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLENBQzdCLENBQUM7SUFDTixDQUFDOytHQVJRLGtCQUFrQjs2R0FBbEIsa0JBQWtCOztTQUFsQixrQkFBa0I7NEZBQWxCLGtCQUFrQjtrQkFKOUIsSUFBSTttQkFBQztvQkFDRixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFLGdCQUFnQjtpQkFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Zyb21FdmVudCwgbWFwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMnO1xuXG5AUGlwZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBuYW1lOiAndHVpRmFsbGJhY2tTcmMnLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlGYWxsYmFja1NyY1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsID0gdHVpSW5qZWN0RWxlbWVudCgpO1xuXG4gICAgcHVibGljIHRyYW5zZm9ybShzcmM6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBmcm9tRXZlbnQodGhpcy5lbCwgJ2Vycm9yJywge2NhcHR1cmU6IHRydWV9KS5waXBlKFxuICAgICAgICAgICAgbWFwKCgpID0+IGZhbGxiYWNrKSxcbiAgICAgICAgICAgIHN0YXJ0V2l0aChzcmMgfHwgZmFsbGJhY2spLFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==