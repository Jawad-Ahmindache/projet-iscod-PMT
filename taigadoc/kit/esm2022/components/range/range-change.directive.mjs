import { DOCUMENT } from '@angular/common';
import { Directive, EventEmitter, inject, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiClamp, tuiRound } from '@taiga-ui/cdk/utils/math';
import { TUI_FLOATING_PRECISION } from '@taiga-ui/kit/components/slider';
import { filter, map, merge, repeat, startWith, switchMap, takeUntil, tap } from 'rxjs';
import { TuiRange } from './range.component';
import * as i0 from "@angular/core";
class TuiRangeChange {
    constructor() {
        this.doc = inject(DOCUMENT);
        this.el = tuiInjectElement();
        this.range = inject(TuiRange);
        /**
         * TODO replace with pointer events (when all supported browsers can handle them).
         * Don't forget to use setPointerCapture instead of listening all doc events
         */
        this.pointerDown$ = tuiTypedFromEvent(this.el, 'pointerdown', {
            passive: true,
            capture: true,
        });
        this.pointerMove$ = merge(tuiTypedFromEvent(this.doc, 'touchmove').pipe(filter(({ touches }) => touches.length === 1), map(({ touches }) => touches[0]), filter((event) => !!event)), tuiTypedFromEvent(this.doc, 'mousemove'));
        this.pointerUp$ = merge(tuiTypedFromEvent(this.doc, 'touchend', { passive: true }), tuiTypedFromEvent(this.doc, 'mouseup', { passive: true }));
        this.activeThumbChange = new EventEmitter();
        let activeThumb;
        this.pointerDown$
            .pipe(tap(({ clientX, target }) => {
            activeThumb = this.detectActiveThumb(clientX, target);
            this.activeThumbChange.emit(activeThumb);
            if (this.range.focusable) {
                this.el.focus();
            }
        }), switchMap((event) => this.pointerMove$.pipe(startWith(event))), map(({ clientX }) => this.getFractionFromEvents(clientX ?? 0)), takeUntil(this.pointerUp$), repeat(), takeUntilDestroyed())
            .subscribe((fraction) => {
            const value = this.range.toValue(fraction);
            this.range.processValue(value, activeThumb === 'right');
        });
    }
    getFractionFromEvents(clickClientX) {
        const hostRect = this.el.getBoundingClientRect();
        const value = clickClientX - hostRect.left;
        const total = hostRect.width;
        return tuiClamp(tuiRound(value / total, TUI_FLOATING_PRECISION), 0, 1);
    }
    detectActiveThumb(clientX, target) {
        const [leftSliderRef, rightSliderRef] = this.range.slidersRefs;
        switch (target) {
            case leftSliderRef?.nativeElement:
                return 'left';
            case rightSliderRef?.nativeElement:
                return 'right';
            default:
                return this.findNearestActiveThumb(clientX);
        }
    }
    findNearestActiveThumb(clientX) {
        const fraction = this.getFractionFromEvents(clientX);
        const deltaLeft = fraction * 100 - this.range.left();
        const deltaRight = fraction * 100 - 100 + this.range.right();
        return Math.abs(deltaLeft) > Math.abs(deltaRight) ||
            deltaRight > 0 ||
            (this.range.left() === 0 && this.range.right() === 100)
            ? 'right'
            : 'left';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRangeChange, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiRangeChange, isStandalone: true, outputs: { activeThumbChange: "activeThumbChange" }, ngImport: i0 }); }
}
export { TuiRangeChange };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRangeChange, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { activeThumbChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtY2hhbmdlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3JhbmdlL3JhbmdlLWNoYW5nZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV0RixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRTNDLE1BR2EsY0FBYztJQStCdkI7UUE5QmlCLFFBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsVUFBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQzs7O1dBR0c7UUFDYyxpQkFBWSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFO1lBQ3RFLE9BQU8sRUFBRSxJ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QUMsV0FBVyxDQUFDO1FBRS9ELFFBQVEsTUFBTSxFQUFFO1lBQ1osS0FBSyxhQUFhLEVBQUUsYUFBYTtnQkFDN0IsT0FBTyxNQUFNLENBQUM7WUFDbEIsS0FBSyxjQUFjLEVBQUUsYUFBYTtnQkFDOUIsT0FBTyxPQUFPLENBQUM7WUFDbkI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBRU8sc0JBQXNCLENBQUMsT0FBZTtRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsTUFBTSxTQUFTLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JELE1BQU0sVUFBVSxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFN0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQzdDLFVBQVUsR0FBRyxDQUFDO1lBQ2QsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQztZQUN2RCxDQUFDLENBQUMsT0FBTztZQUNULENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDakIsQ0FBQzsrR0EzRlEsY0FBYzttR0FBZCxjQUFjOztTQUFkLGNBQWM7NEZBQWQsY0FBYztrQkFIMUIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtpQkFDbkI7MEVBOEJtQixpQkFBaUI7c0JBRGhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgaW5qZWN0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlVW50aWxEZXN0cm95ZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7dHVpVHlwZWRGcm9tRXZlbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge3R1aUNsYW1wLCB0dWlSb3VuZH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9tYXRoJztcbmltcG9ydCB7VFVJX0ZMT0FUSU5HX1BSRUNJU0lPTn0gZnJvbSAnQHRhaWdhLXVpL2tpdC9jb21wb25lbnRzL3NsaWRlcic7XG5pbXBvcnQge2ZpbHRlciwgbWFwLCBtZXJnZSwgcmVwZWF0LCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsLCB0YXB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1R1aVJhbmdlfSBmcm9tICcuL3JhbmdlLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFR1aVJhbmdlQ2hhbmdlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvYyA9IGluamVjdChET0NVTUVOVCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbCA9IHR1aUluamVjdEVsZW1lbnQoKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJhbmdlID0gaW5qZWN0KFR1aVJhbmdlKTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8gcmVwbGFjZSB3aXRoIHBvaW50ZXIgZXZlbnRzICh3aGVuIGFsbCBzdXBwb3J0ZWQgYnJvd3NlcnMgY2FuIGhhbmRsZSB0aGVtKS5cbiAgICAgKiBEb24ndCBmb3JnZXQgdG8gdXNlIHNldFBvaW50ZXJDYXB0dXJlIGluc3RlYWQgb2YgbGlzdGVuaW5nIGFsbCBkb2MgZXZlbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBwb2ludGVyRG93biQgPSB0dWlUeXBlZEZyb21FdmVudCh0aGlzLmVsLCAncG9pbnRlcmRvd24nLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgfSk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvaW50ZXJNb3ZlJCA9IG1lcmdlKFxuICAgICAgICB0dWlUeXBlZEZyb21FdmVudCh0aGlzLmRvYywgJ3RvdWNobW92ZScpLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoKHt0b3VjaGVzfSkgPT4gdG91Y2hlcy5sZW5ndGggPT09IDEpLFxuICAgICAgICAgICAgbWFwKCh7dG91Y2hlc30pID0+IHRvdWNoZXNbMF0pLFxuICAgICAgICAgICAgZmlsdGVyKChldmVudCk6IGV2ZW50IGlzIFRvdWNoID0+ICEhZXZlbnQpLFxuICAgICAgICApLFxuICAgICAgICB0dWlUeXBlZEZyb21FdmVudCh0aGlzLmRvYywgJ21vdXNlbW92ZScpLFxuICAgICk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvaW50ZXJVcCQgPSBtZXJnZShcbiAgICAgICAgdHVpVHlwZWRGcm9tRXZlbnQodGhpcy5kb2MsICd0b3VjaGVuZCcsIHtwYXNzaXZlOiB0cnVlfSksXG4gICAgICAgIHR1aVR5cGVkRnJvbUV2ZW50KHRoaXMuZG9jLCAnbW91c2V1cCcsIHtwYXNzaXZlOiB0cnVlfSksXG4gICAgKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZWFkb25seSBhY3RpdmVUaHVtYkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8J2xlZnQnIHwgJ3JpZ2h0Jz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgYWN0aXZlVGh1bWI6ICdsZWZ0JyB8ICdyaWdodCc7XG5cbiAgICAgICAgdGhpcy5wb2ludGVyRG93biRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoe2NsaWVudFgsIHRhcmdldH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlVGh1bWIgPSB0aGlzLmRldGVjdEFjdGl2ZVRodW1iKGNsaWVudFgsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGh1bWJDaGFuZ2UuZW1pdChhY3RpdmVUaHVtYik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmFuZ2UuZm9jdXNhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKGV2ZW50KSA9PiB0aGlzLnBvaW50ZXJNb3ZlJC5waXBlKHN0YXJ0V2l0aChldmVudCkpKSxcbiAgICAgICAgICAgICAgICBtYXAoKHtjbGllbnRYfSkgPT4gdGhpcy5nZXRGcmFjdGlvbkZyb21FdmVudHMoY2xpZW50WCA/PyAwKSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMucG9pbnRlclVwJCksXG4gICAgICAgICAgICAgICAgcmVwZWF0KCksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKCksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChmcmFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yYW5nZS50b1ZhbHVlKGZyYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2UucHJvY2Vzc1ZhbHVlKHZhbHVlLCBhY3RpdmVUaHVtYiA9PT0gJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZyYWN0aW9uRnJvbUV2ZW50cyhjbGlja0NsaWVudFg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjbGlja0NsaWVudFggLSBob3N0UmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCB0b3RhbCA9IGhvc3RSZWN0LndpZHRoO1xuXG4gICAgICAgIHJldHVybiB0dWlDbGFtcCh0dWlSb3VuZCh2YWx1ZSAvIHRvdGFsLCBUVUlfRkxPQVRJTkdfUFJFQ0lTSU9OKSwgMCwgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXRlY3RBY3RpdmVUaHVtYihcbiAgICAgICAgY2xpZW50WDogbnVtYmVyLFxuICAgICAgICB0YXJnZXQ6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICApOiAnbGVmdCcgfCAncmlnaHQnIHtcbiAgICAgICAgY29uc3QgW2xlZnRTbGlkZXJSZWYsIHJpZ2h0U2xpZGVyUmVmXSA9IHRoaXMucmFuZ2Uuc2xpZGVyc1JlZnM7XG5cbiAgICAgICAgc3dpdGNoICh0YXJnZXQpIHtcbiAgICAgICAgICAgIGNhc2UgbGVmdFNsaWRlclJlZj8ubmF0aXZlRWxlbWVudDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xlZnQnO1xuICAgICAgICAgICAgY2FzZSByaWdodFNsaWRlclJlZj8ubmF0aXZlRWxlbWVudDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZE5lYXJlc3RBY3RpdmVUaHVtYihjbGllbnRYKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZmluZE5lYXJlc3RBY3RpdmVUaHVtYihjbGllbnRYOiBudW1iZXIpOiAnbGVmdCcgfCAncmlnaHQnIHtcbiAgICAgICAgY29uc3QgZnJhY3Rpb24gPSB0aGlzLmdldEZyYWN0aW9uRnJvbUV2ZW50cyhjbGllbnRYKTtcbiAgICAgICAgY29uc3QgZGVsdGFMZWZ0ID0gZnJhY3Rpb24gKiAxMDAgLSB0aGlzLnJhbmdlLmxlZnQoKTtcbiAgICAgICAgY29uc3QgZGVsdGFSaWdodCA9IGZyYWN0aW9uICogMTAwIC0gMTAwICsgdGhpcy5yYW5nZS5yaWdodCgpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhkZWx0YUxlZnQpID4gTWF0aC5hYnMoZGVsdGFSaWdodCkgfHxcbiAgICAgICAgICAgIGRlbHRhUmlnaHQgPiAwIHx8XG4gICAgICAgICAgICAodGhpcy5yYW5nZS5sZWZ0KCkgPT09IDAgJiYgdGhpcy5yYW5nZS5yaWdodCgpID09PSAxMDApXG4gICAgICAgICAgICA/ICdyaWdodCdcbiAgICAgICAgICAgIDogJ2xlZnQnO1xuICAgIH1cbn1cbiJdfQ==