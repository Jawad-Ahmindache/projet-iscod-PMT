import { Directive, inject, Input, TemplateRef } from '@angular/core';
import { TuiPopupService } from './popup.service';
import * as i0 from "@angular/core";
class TuiPopup {
    constructor() {
        this.template = inject(TemplateRef);
        this.service = inject(TuiPopupService);
    }
    set tuiPopup(show) {
        this.viewRef?.destroy();
        if (show) {
            this.viewRef = this.service.addTemplate(this.template);
        }
    }
    ngOnDestroy() {
        this.viewRef?.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPopup, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPopup, isStandalone: true, selector: "ng-template[tuiPopup]", inputs: { tuiPopup: "tuiPopup" }, ngImport: i0 }); }
}
export { TuiPopup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPopup, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiPopup]',
                }]
        }], propDecorators: { tuiPopup: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL3BvcHVwL3BvcHVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFaEQsTUFJYSxRQUFRO0lBSnJCO1FBS3FCLGFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0IsWUFBTyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQWdCdEQ7SUFaRyxJQUNXLFFBQVEsQ0FBQyxJQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxRDtJQUNMLENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUM1QixDQUFDOytHQWpCUSxRQUFRO21HQUFSLFFBQVE7O1NBQVIsUUFBUTs0RkFBUixRQUFRO2tCQUpwQixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsdUJBQXVCO2lCQUNwQzs4QkFRYyxRQUFRO3NCQURsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0VtYmVkZGVkVmlld1JlZiwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBpbmplY3QsIElucHV0LCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VHVpUG9wdXBTZXJ2aWNlfSBmcm9tICcuL3BvcHVwLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdHVpUG9wdXBdJyxcbn0pXG5leHBvcnQgY2xhc3MgVHVpUG9wdXAgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGUgPSBpbmplY3QoVGVtcGxhdGVSZWYpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VydmljZSA9IGluamVjdChUdWlQb3B1cFNlcnZpY2UpO1xuXG4gICAgcHJpdmF0ZSB2aWV3UmVmPzogRW1iZWRkZWRWaWV3UmVmPHVua25vd24+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHR1aVBvcHVwKHNob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy52aWV3UmVmPy5kZXN0cm95KCk7XG5cbiAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgIHRoaXMudmlld1JlZiA9IHRoaXMuc2VydmljZS5hZGRUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aWV3UmVmPy5kZXN0cm95KCk7XG4gICAgfVxufVxuIl19