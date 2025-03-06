import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import { Directive, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TUI_FALSE_HANDLER, TUI_TRUE_HANDLER } from '@taiga-ui/cdk/constants';
import { tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { combineLatest, filter, map, merge, tap } from 'rxjs';
import * as i0 from "@angular/core";
const SLIDER_INTERACTION_KEYS = new Set([
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'End',
    'Home',
    'PageDown',
    'PageUp',
]);
/**
 * Native <input type='range' readonly> doesn't work.
 * This directive imitates this native behaviour.
 */
class TuiSliderReadonly {
    constructor() {
        this.el = tuiInjectElement();
        this.doc = inject(DOCUMENT);
        this.readonly = true;
        const touchStart$ = tuiTypedFromEvent(this.el, 'touchstart', {
            passive: false,
        });
        const touchMove$ = tuiTypedFromEvent(this.doc, 'touchmove', {
            passive: false,
        });
        const touchEnd$ = tuiTypedFromEvent(this.doc, 'touchend', {
            passive: true,
        });
        const shouldPreventMove$ = merge(touchStart$.pipe(tap((e) => this.preventEvent(e)), map(TUI_TRUE_HANDLER)), touchEnd$.pipe(map(TUI_FALSE_HANDLER)));
        /**
         * @bad TODO think about another solution.
         * Keep in mind that preventing touch event (on slider) inside `@HostListener('touchstart')` doesn't work for mobile chrome.
         */
        combineLatest([touchMove$, shouldPreventMove$])
            .pipe(filter(([_, shouldPreventMove]) => shouldPreventMove), takeUntilDestroyed())
            .subscribe(([moveEvent]) => this.preventEvent(moveEvent));
    }
    preventEvent(event) {
        if (event.cancelable && this.readonly) {
            event.preventDefault();
        }
    }
    preventKeyboardInteraction(event) {
        if (SLIDER_INTERACTION_KEYS.has(event.key)) {
            this.preventEvent(event);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderReadonly, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: TuiSliderReadonly, isStandalone: true, selector: "input[tuiSlider][readonly]", inputs: { readonly: ["readonly", "readonly", coerceBooleanProperty] }, host: { listeners: { "keydown": "preventKeyboardInteraction($event)", "mousedown": "preventEvent($event)" } }, ngImport: i0 }); }
}
export { TuiSliderReadonly };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderReadonly, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[tuiSlider][readonly]',
                    host: {
                        '(keydown)': 'preventKeyboardInteraction($event)',
                        '(mousedown)': 'preventEvent($event)',
                    },
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { readonly: [{
                type: Input,
                args: [{ transform: coerceBooleanProperty }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXJlYWRvbmx5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3NsaWRlci9oZWxwZXJzL3NsaWRlci1yZWFkb25seS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFNUQsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNwQyxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsS0FBSztJQUNMLE1BQU07SUFDTixVQUFVO0lBQ1YsUUFBUTtDQUNYLENBQUMsQ0FBQztBQUVIOzs7R0FHRztBQUNILE1BUWEsaUJBQWlCO0lBTzFCO1FBTmlCLE9BQUUsR0FBRyxnQkFBZ0IsRUFBb0IsQ0FBQztRQUMxQyxRQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR2pDLGFBQVEsR0FBaUIsSUFBSSxDQUFDO1FBR2pDLE1BQU0sV0FBVyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFO1lBQ3pELE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNILE1BQU0sVUFBVSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFO1lBQ3hELE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNILE1BQU0sU0FBUyxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFO1lBQ3RELE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUVILE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUM1QixXQUFXLENBQUMsSUFBSSxDQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNoQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FDeEIsRUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQ3pDLENBQUM7UUFFRjs7O1dBR0c7UUFDSCxhQUFhLENBQUMsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzthQUMxQyxJQUFJLENBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFDckQsa0JBQWtCLEVBQUUsQ0FDdkI7YUFDQSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVTLFlBQVksQ0FBQyxLQUFZO1FBQy9CLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25DLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFUywwQkFBMEIsQ0FBQyxLQUFvQjtRQUNyRCxJQUFJLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtJQUNMLENBQUM7K0dBaERRLGlCQUFpQjttR0FBakIsaUJBQWlCLDJHQUlQLHFCQUFxQjs7U0FKL0IsaUJBQWlCOzRGQUFqQixpQkFBaUI7a0JBUjdCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLElBQUksRUFBRTt3QkFDRixXQUFXLEVBQUUsb0NBQW9DO3dCQUNqRCxhQUFhLEVBQUUsc0JBQXNCO3FCQUN4QztpQkFDSjswRUFNVSxRQUFRO3NCQURkLEtBQUs7dUJBQUMsRUFBQyxTQUFTLEVBQUUscUJBQXFCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlVW50aWxEZXN0cm95ZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7VFVJX0ZBTFNFX0hBTkRMRVIsIFRVSV9UUlVFX0hBTkRMRVJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB7dHVpVHlwZWRGcm9tRXZlbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIGZpbHRlciwgbWFwLCBtZXJnZSwgdGFwfSBmcm9tICdyeGpzJztcblxuY29uc3QgU0xJREVSX0lOVEVSQUNUSU9OX0tFWVMgPSBuZXcgU2V0KFtcbiAgICAnQXJyb3dEb3duJyxcbiAgICAnQXJyb3dMZWZ0JyxcbiAgICAnQXJyb3dSaWdodCcsXG4gICAgJ0Fycm93VXAnLFxuICAgICdFbmQnLFxuICAgICdIb21lJyxcbiAgICAnUGFnZURvd24nLFxuICAgICdQYWdlVXAnLFxuXSk7XG5cbi8qKlxuICogTmF0aXZlIDxpbnB1dCB0eXBlPSdyYW5nZScgcmVhZG9ubHk+IGRvZXNuJ3Qgd29yay5cbiAqIFRoaXMgZGlyZWN0aXZlIGltaXRhdGVzIHRoaXMgbmF0aXZlIGJlaGF2aW91ci5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2lucHV0W3R1aVNsaWRlcl1bcmVhZG9ubHldJyxcbiAgICBob3N0OiB7XG4gICAgICAgICcoa2V5ZG93biknOiAncHJldmVudEtleWJvYXJkSW50ZXJhY3Rpb24oJGV2ZW50KScsXG4gICAgICAgICcobW91c2Vkb3duKSc6ICdwcmV2ZW50RXZlbnQoJGV2ZW50KScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpU2xpZGVyUmVhZG9ubHkge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50PEhUTUxJbnB1dEVsZW1lbnQ+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2MgPSBpbmplY3QoRE9DVU1FTlQpO1xuXG4gICAgQElucHV0KHt0cmFuc2Zvcm06IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0pXG4gICAgcHVibGljIHJlYWRvbmx5OiBCb29sZWFuSW5wdXQgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoU3RhcnQkID0gdHVpVHlwZWRGcm9tRXZlbnQodGhpcy5lbCwgJ3RvdWNoc3RhcnQnLCB7XG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRvdWNoTW92ZSQgPSB0dWlUeXBlZEZyb21FdmVudCh0aGlzLmRvYywgJ3RvdWNobW92ZScsIHtcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdG91Y2hFbmQkID0gdHVpVHlwZWRGcm9tRXZlbnQodGhpcy5kb2MsICd0b3VjaGVuZCcsIHtcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNob3VsZFByZXZlbnRNb3ZlJCA9IG1lcmdlKFxuICAgICAgICAgICAgdG91Y2hTdGFydCQucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKGUpID0+IHRoaXMucHJldmVudEV2ZW50KGUpKSxcbiAgICAgICAgICAgICAgICBtYXAoVFVJX1RSVUVfSEFORExFUiksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdG91Y2hFbmQkLnBpcGUobWFwKFRVSV9GQUxTRV9IQU5ETEVSKSksXG4gICAgICAgICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBiYWQgVE9ETyB0aGluayBhYm91dCBhbm90aGVyIHNvbHV0aW9uLlxuICAgICAgICAgKiBLZWVwIGluIG1pbmQgdGhhdCBwcmV2ZW50aW5nIHRvdWNoIGV2ZW50IChvbiBzbGlkZXIpIGluc2lkZSBgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcpYCBkb2Vzbid0IHdvcmsgZm9yIG1vYmlsZSBjaHJvbWUuXG4gICAgICAgICAqL1xuICAgICAgICBjb21iaW5lTGF0ZXN0KFt0b3VjaE1vdmUkLCBzaG91bGRQcmV2ZW50TW92ZSRdKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKChbXywgc2hvdWxkUHJldmVudE1vdmVdKSA9PiBzaG91bGRQcmV2ZW50TW92ZSksXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKCksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChbbW92ZUV2ZW50XSkgPT4gdGhpcy5wcmV2ZW50RXZlbnQobW92ZUV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHByZXZlbnRFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmNhbmNlbGFibGUgJiYgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcmV2ZW50S2V5Ym9hcmRJbnRlcmFjdGlvbihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoU0xJREVSX0lOVEVSQUNUSU9OX0tFWVMuaGFzKGV2ZW50LmtleSkpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmVudEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==