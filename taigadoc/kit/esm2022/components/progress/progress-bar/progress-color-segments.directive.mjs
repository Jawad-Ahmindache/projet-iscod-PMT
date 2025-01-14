import { Directive, inject, Input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { tuiWatch, tuiZonefull } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map } from 'rxjs';
import * as i0 from "@angular/core";
class TuiProgressColorSegments {
    constructor() {
        this.colors$ = new BehaviorSubject([]);
        this.el = tuiInjectElement();
        this.color = toSignal(combineLatest([
            this.colors$,
            inject(ResizeObserverService, { self: true }).pipe(map(() => this.el.offsetWidth), distinctUntilChanged()),
        ]).pipe(map(([colors, width]) => {
            const segmentWidth = Math.ceil(width / colors.length);
            const colorsString = colors.reduce((acc, color, i) => `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`, '');
            return `linear-gradient(to right ${colorsString})`;
        }), tuiZonefull(), tuiWatch()));
    }
    set colors(colors) {
        this.colors$.next(colors);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressColorSegments, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiProgressColorSegments, isStandalone: true, selector: "progress[tuiProgressBar][tuiProgressColorSegments]", inputs: { colors: ["tuiProgressColorSegments", "colors"] }, host: { properties: { "style.--tui-progress-color": "color()" } }, providers: [ResizeObserverService], ngImport: i0 }); }
}
export { TuiProgressColorSegments };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressColorSegments, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'progress[tuiProgressBar][tuiProgressColorSegments]',
                    providers: [ResizeObserverService],
                    host: { '[style.--tui-progress-color]': 'color()' },
                }]
        }], propDecorators: { colors: [{
                type: Input,
                args: ['tuiProgressColorSegments']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtY29sb3Itc2VnbWVudHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWNvbG9yLXNlZ21lbnRzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUUvRSxNQU1hLHdCQUF3QjtJQU5yQztRQU9xQixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUMsT0FBRSxHQUFHLGdCQUFnQixFQUF1QixDQUFDO1FBRTNDLFVBQUssR0FBRyxRQUFRLENBQy9CLGFBQWEsQ0FBQztZQUNWLElBQUksQ0FBQyxPQUFPO1lBQ1osTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFDOUIsb0JBQW9CLEVBQUUsQ0FDekI7U0FDSixDQUFDLENBQUMsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDcEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzlCLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUNkLEdBQUcsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEdBQUcsWUFBWSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksSUFBSSxFQUN4RSxFQUFFLENBQ0wsQ0FBQztZQUVGLE9BQU8sNEJBQTRCLFlBQVksR0FBRyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxFQUNGLFdBQVcsRUFBRSxFQUNiLFFBQVEsRUFBRSxDQUNiLENBQ0osQ0FBQztLQU1MO0lBSkcsSUFDVyxNQUFNLENBQUMsTUFBZ0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzsrR0E5QlEsd0JBQXdCO21HQUF4Qix3QkFBd0IsZ09BSHRCLENBQUMscUJBQXFCLENBQUM7O1NBR3pCLHdCQUF3Qjs0RkFBeEIsd0JBQXdCO2tCQU5wQyxTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsb0RBQW9EO29CQUM5RCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDbEMsSUFBSSxFQUFFLEVBQUMsOEJBQThCLEVBQUUsU0FBUyxFQUFDO2lCQUNwRDs4QkE2QmMsTUFBTTtzQkFEaEIsS0FBSzt1QkFBQywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge1Jlc2l6ZU9ic2VydmVyU2VydmljZX0gZnJvbSAnQG5nLXdlYi1hcGlzL3Jlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQge3R1aVdhdGNoLCB0dWlab25lZnVsbH0gZnJvbSAnQHRhaWdhLXVpL2Nkay9vYnNlcnZhYmxlcyc7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3Byb2dyZXNzW3R1aVByb2dyZXNzQmFyXVt0dWlQcm9ncmVzc0NvbG9yU2VnbWVudHNdJyxcbiAgICBwcm92aWRlcnM6IFtSZXNpemVPYnNlcnZlclNlcnZpY2VdLFxuICAgIGhvc3Q6IHsnW3N0eWxlLi0tdHVpLXByb2dyZXNzLWNvbG9yXSc6ICdjb2xvcigpJ30sXG59KVxuZXhwb3J0IGNsYXNzIFR1aVByb2dyZXNzQ29sb3JTZWdtZW50cyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb2xvcnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4oW10pO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50PEhUTUxQcm9ncmVzc0VsZW1lbnQ+KCk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29sb3IgPSB0b1NpZ25hbChcbiAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICB0aGlzLmNvbG9ycyQsXG4gICAgICAgICAgICBpbmplY3QoUmVzaXplT2JzZXJ2ZXJTZXJ2aWNlLCB7c2VsZjogdHJ1ZX0pLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKCgpID0+IHRoaXMuZWwub2Zmc2V0V2lkdGgpLFxuICAgICAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgICApLFxuICAgICAgICBdKS5waXBlKFxuICAgICAgICAgICAgbWFwKChbY29sb3JzLCB3aWR0aF0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWdtZW50V2lkdGggPSBNYXRoLmNlaWwod2lkdGggLyBjb2xvcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvcnNTdHJpbmcgPSBjb2xvcnMucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAoYWNjLCBjb2xvciwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2FjY30sICR7Y29sb3J9ICR7aSAqIHNlZ21lbnRXaWR0aH1weCAkeyhpICsgMSkgKiBzZWdtZW50V2lkdGh9cHhgLFxuICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgJHtjb2xvcnNTdHJpbmd9KWA7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHR1aVpvbmVmdWxsKCksXG4gICAgICAgICAgICB0dWlXYXRjaCgpLFxuICAgICAgICApLFxuICAgICk7XG5cbiAgICBASW5wdXQoJ3R1aVByb2dyZXNzQ29sb3JTZWdtZW50cycpXG4gICAgcHVibGljIHNldCBjb2xvcnMoY29sb3JzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmNvbG9ycyQubmV4dChjb2xvcnMpO1xuICAgIH1cbn1cbiJdfQ==