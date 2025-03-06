import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, Input, NgZone, Output, signal, ViewChild, } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { WaResizeObserver } from '@ng-web-apis/resize-observer';
import { tuiTypedFromEvent, tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiInjectElement, tuiIsCurrentTarget } from '@taiga-ui/cdk/utils/dom';
import { TUI_HINT_COMPONENT, TuiHint, TuiHintDirective, } from '@taiga-ui/core/directives/hint';
import { PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { BehaviorSubject, distinctUntilChanged, filter, map, of, pairwise, startWith, Subject, switchMap, timer, } from 'rxjs';
import { TUI_LINE_CLAMP_OPTIONS } from './line-clamp.options';
import { TuiLineClampBox } from './line-clamp-box.component';
import { TuiLineClampPositionDirective } from './line-clamp-position.directive';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/hint";
class TuiLineClamp {
    constructor() {
        this.options = inject(TUI_LINE_CLAMP_OPTIONS);
        this.el = tuiInjectElement();
        this.cd = inject(ChangeDetectorRef);
        this.zone = inject(NgZone);
        this.linesLimit$ = new BehaviorSubject(1);
        this.isOverflown$ = new Subject();
        this.initialized = signal(false);
        this.maxHeight = signal(0);
        this.height = signal(0);
        this.$ = timer(0)
            .pipe(tuiZonefree(this.zone), takeUntilDestroyed())
            .subscribe(() => this.initialized.set(true));
        this.lineClamp = toSignal(this.linesLimit$.pipe(startWith(1), pairwise(), switchMap(([prev, next]) => next >= prev
            ? of(next)
            : tuiTypedFromEvent(this.el, 'transitionend').pipe(filter(tuiIsCurrentTarget), map(() => next))), takeUntilDestroyed()), { initialValue: 0 });
        this.lineHeight = 24;
        this.overflownChange = this.isOverflown$.pipe(distinctUntilChanged());
    }
    set linesLimit(linesLimit) {
        this.linesLimit$.next(linesLimit);
    }
    ngDoCheck() {
        this.update();
        this.isOverflown$.next(this.overflown);
    }
    ngAfterViewInit() {
        this.initialized.set(true);
    }
    get overflown() {
        if (!this.outlet) {
            return false;
        }
        const { scrollHeight, scrollWidth } = this.outlet.nativeElement;
        const { clientHeight, clientWidth } = this.el;
        // 4px buffer for IE/Edge incorrectly rounding scrollHeight
        return scrollHeight - clientHeight > 4 || scrollWidth - clientWidth > 0;
    }
    get computedContent() {
        return this.options.showHint && this.overflown ? this.content : '';
    }
    updateView() {
        this.cd.detectChanges();
    }
    update() {
        if (this.outlet) {
            this.height.set(this.outlet.nativeElement.scrollHeight + 4);
        }
        if (this.initialized()) {
            this.maxHeight.set(this.lineHeight * this.linesLimit$.value);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClamp, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineClamp, isStandalone: true, selector: "tui-line-clamp", inputs: { lineHeight: "lineHeight", content: "content", linesLimit: "linesLimit" }, outputs: { overflownChange: "overflownChange" }, host: { listeners: { "transitionend": "updateView()", "mouseenter": "updateView()", "resize": "updateView()" }, properties: { "style.height.px": "height()", "style.max-height.px": "maxHeight()", "class._initialized": "initialized()" } }, providers: [
            {
                provide: TUI_HINT_COMPONENT,
                useValue: TuiLineClampBox,
            },
        ], viewQueries: [{ propertyName: "outlet", first: true, predicate: TuiHintDirective, descendants: true, read: ElementRef }], ngImport: i0, template: "<div\n    tuiLineClampPosition\n    class=\"t-wrapper\"\n    [style.-webkit-line-clamp]=\"lineClamp()\"\n    [style.word-break]=\"lineClamp() > 1 ? 'break-word' : 'break-all'\"\n    [tuiHint]=\"computedContent\"\n>\n    <ng-container *polymorpheusOutlet=\"content as text\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: [":host{position:relative;display:block;overflow:hidden}:host._initialized{transition-property:max-height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-wrapper{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: i1.TuiHintDirective, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: ["tuiHintContext", "tuiHintAppearance", "tuiHint"] }, { kind: "directive", type: TuiLineClampPositionDirective, selector: "[tuiLineClampPosition]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiLineClamp };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClamp, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-line-clamp', imports: [
                        AsyncPipe,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiHint,
                        TuiLineClampPositionDirective,
                        WaResizeObserver,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: TUI_HINT_COMPONENT,
                            useValue: TuiLineClampBox,
                        },
                    ], host: {
                        '[style.height.px]': 'height()',
                        '[style.max-height.px]': 'maxHeight()',
                        '[class._initialized]': 'initialized()',
                        '(transitionend)': 'updateView()',
                        '(mouseenter)': 'updateView()',
                        '(resize)': 'updateView()',
                    }, template: "<div\n    tuiLineClampPosition\n    class=\"t-wrapper\"\n    [style.-webkit-line-clamp]=\"lineClamp()\"\n    [style.word-break]=\"lineClamp() > 1 ? 'break-word' : 'break-all'\"\n    [tuiHint]=\"computedContent\"\n>\n    <ng-container *polymorpheusOutlet=\"content as text\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: [":host{position:relative;display:block;overflow:hidden}:host._initialized{transition-property:max-height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-wrapper{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}\n"] }]
        }], propDecorators: { outlet: [{
                type: ViewChild,
                args: [TuiHintDirective, { read: ElementRef }]
            }], lineHeight: [{
                type: Input
            }], content: [{
                type: Input
            }], overflownChange: [{
                type: Output
            }], linesLimit: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jbGFtcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvY29tcG9uZW50cy9saW5lLWNsYW1wL2xpbmUtY2xhbXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvbGluZS1jbGFtcC9saW5lLWNsYW1wLnRlbXBsYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTFDLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFFLFFBQVEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxXQUFXLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RSxPQUFPLEVBQ0gsa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxnQkFBZ0IsR0FDbkIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVoRixPQUFPLEVBQ0gsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixNQUFNLEVBQ04sR0FBRyxFQUNILEVBQUUsRUFDRixRQUFRLEVBQ1IsU0FBUyxFQUNULE9BQU8sRUFDUCxTQUFTLEVBQ1QsS0FBSyxHQUNSLE1BQU0sTUFBTSxDQUFD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QUUsVUFBVTt3QkFDL0IsdUJBQXVCLEVBQUUsYUFBYTt3QkFDdEMsc0JBQXNCLEVBQUUsZUFBZTt3QkFDdkMsaUJBQWlCLEVBQUUsY0FBYzt3QkFDakMsY0FBYyxFQUFFLGNBQWM7d0JBQzlCLFVBQVUsRUFBRSxjQUFjO3FCQUM3Qjs4QkFJZ0IsTUFBTTtzQkFEdEIsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7Z0JBbUN4QyxVQUFVO3NCQURoQixLQUFLO2dCQUlDLE9BQU87c0JBRGIsS0FBSztnQkFJVSxlQUFlO3NCQUQ5QixNQUFNO2dCQUtJLFVBQVU7c0JBRHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FzeW5jUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtBZnRlclZpZXdJbml0LCBEb0NoZWNrfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgaW5qZWN0LFxuICAgIElucHV0LFxuICAgIE5nWm9uZSxcbiAgICBPdXRwdXQsXG4gICAgc2lnbmFsLFxuICAgIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2VVbnRpbERlc3Ryb3llZCwgdG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7V2FSZXNpemVPYnNlcnZlcn0gZnJvbSAnQG5nLXdlYi1hcGlzL3Jlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQge3R1aVR5cGVkRnJvbUV2ZW50LCB0dWlab25lZnJlZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9vYnNlcnZhYmxlcyc7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnQsIHR1aUlzQ3VycmVudFRhcmdldH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuaW1wb3J0IHtcbiAgICBUVUlfSElOVF9DT01QT05FTlQsXG4gICAgVHVpSGludCxcbiAgICBUdWlIaW50RGlyZWN0aXZlLFxufSBmcm9tICdAdGFpZ2EtdWkvY29yZS9kaXJlY3RpdmVzL2hpbnQnO1xuaW1wb3J0IHR5cGUge1BvbHltb3JwaGV1c0NvbnRlbnR9IGZyb20gJ0B0YWlnYS11aS9wb2x5bW9ycGhldXMnO1xuaW1wb3J0IHtQb2x5bW9ycGhldXNPdXRsZXQsIFBvbHltb3JwaGV1c1RlbXBsYXRlfSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gICAgQmVoYXZpb3JTdWJqZWN0LFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICAgIGZpbHRlcixcbiAgICBtYXAsXG4gICAgb2YsXG4gICAgcGFpcndpc2UsXG4gICAgc3RhcnRXaXRoLFxuICAgIFN1YmplY3QsXG4gICAgc3dpdGNoTWFwLFxuICAgIHRpbWVyLFxufSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUVUlfTElORV9DTEFNUF9PUFRJT05TfSBmcm9tICcuL2xpbmUtY2xhbXAub3B0aW9ucyc7XG5pbXBvcnQge1R1aUxpbmVDbGFtcEJveH0gZnJvbSAnLi9saW5lLWNsYW1wLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHtUdWlMaW5lQ2xhbXBQb3NpdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi9saW5lLWNsYW1wLXBvc2l0aW9uLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktbGluZS1jbGFtcCcsXG4gICAgaW1wb3J0czogW1xuICAgICAgICBBc3luY1BpcGUsXG4gICAgICAgIFBvbHltb3JwaGV1c091dGxldCxcbiAgICAgICAgUG9seW1vcnBoZXVzVGVtcGxhdGUsXG4gICAgICAgIFR1aUhpbnQsXG4gICAgICAgIFR1aUxpbmVDbGFtcFBvc2l0aW9uRGlyZWN0aXZlLFxuICAgICAgICBXYVJlc2l6ZU9ic2VydmVyLFxuICAgIF0sXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpbmUtY2xhbXAudGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGluZS1jbGFtcC5zdHlsZS5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IFRVSV9ISU5UX0NPTVBPTkVOVCxcbiAgICAgICAgICAgIHVzZVZhbHVlOiBUdWlMaW5lQ2xhbXBCb3gsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQoKScsXG4gICAgICAgICdbc3R5bGUubWF4LWhlaWdodC5weF0nOiAnbWF4SGVpZ2h0KCknLFxuICAgICAgICAnW2NsYXNzLl9pbml0aWFsaXplZF0nOiAnaW5pdGlhbGl6ZWQoKScsXG4gICAgICAgICcodHJhbnNpdGlvbmVuZCknOiAndXBkYXRlVmlldygpJyxcbiAgICAgICAgJyhtb3VzZWVudGVyKSc6ICd1cGRhdGVWaWV3KCknLFxuICAgICAgICAnKHJlc2l6ZSknOiAndXBkYXRlVmlldygpJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlMaW5lQ2xhbXAgaW1wbGVtZW50cyBEb0NoZWNrLCBBZnRlclZpZXdJbml0IHtcbiAgICBAVmlld0NoaWxkKFR1aUhpbnREaXJlY3RpdmUsIHtyZWFkOiBFbGVtZW50UmVmfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IG91dGxldD86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zID0gaW5qZWN0KFRVSV9MSU5FX0NMQU1QX09QVElPTlMpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZCA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gICAgcHJpdmF0ZSByZWFkb25seSB6b25lOiBOZ1pvbmUgPSBpbmplY3QoTmdab25lKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpbmVzTGltaXQkID0gbmV3IEJlaGF2aW9yU3ViamVjdCgxKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlzT3ZlcmZsb3duJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJvdGVjdGVkIGluaXRpYWxpemVkID0gc2lnbmFsKGZhbHNlKTtcbiAgICBwcm90ZWN0ZWQgbWF4SGVpZ2h0ID0gc2lnbmFsKDApO1xuICAgIHByb3RlY3RlZCBoZWlnaHQgPSBzaWduYWwoMCk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgJCA9IHRpbWVyKDApXG4gICAgICAgIC5waXBlKHR1aVpvbmVmcmVlKHRoaXMuem9uZSksIHRha2VVbnRpbERlc3Ryb3llZCgpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaW5pdGlhbGl6ZWQuc2V0KHRydWUpKTtcblxuICAgIHByb3RlY3RlZCBsaW5lQ2xhbXAgPSB0b1NpZ25hbChcbiAgICAgICAgdGhpcy5saW5lc0xpbWl0JC5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKDEpLFxuICAgICAgICAgICAgcGFpcndpc2UoKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoW3ByZXYsIG5leHRdKSA9PlxuICAgICAgICAgICAgICAgIG5leHQgPj0gcHJldlxuICAgICAgICAgICAgICAgICAgICA/IG9mKG5leHQpXG4gICAgICAgICAgICAgICAgICAgIDogdHVpVHlwZWRGcm9tRXZlbnQodGhpcy5lbCwgJ3RyYW5zaXRpb25lbmQnKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIodHVpSXNDdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwKCgpID0+IG5leHQpLFxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKCksXG4gICAgICAgICksXG4gICAgICAgIHtpbml0aWFsVmFsdWU6IDB9LFxuICAgICk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBsaW5lSGVpZ2h0ID0gMjQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb250ZW50OiBQb2x5bW9ycGhldXNDb250ZW50O1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IG92ZXJmbG93bkNoYW5nZTogT2JzZXJ2YWJsZTxib29sZWFuPiA9XG4gICAgICAgIHRoaXMuaXNPdmVyZmxvd24kLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgbGluZXNMaW1pdChsaW5lc0xpbWl0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saW5lc0xpbWl0JC5uZXh0KGxpbmVzTGltaXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuaXNPdmVyZmxvd24kLm5leHQodGhpcy5vdmVyZmxvd24pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQuc2V0KHRydWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgb3ZlcmZsb3duKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMub3V0bGV0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7c2Nyb2xsSGVpZ2h0LCBzY3JvbGxXaWR0aH0gPSB0aGlzLm91dGxldC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCB7Y2xpZW50SGVpZ2h0LCBjbGllbnRXaWR0aH0gPSB0aGlzLmVsO1xuXG4gICAgICAgIC8vIDRweCBidWZmZXIgZm9yIElFL0VkZ2UgaW5jb3JyZWN0bHkgcm91bmRpbmcgc2Nyb2xsSGVpZ2h0XG4gICAgICAgIHJldHVybiBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQgPiA0IHx8IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggPiAwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgY29tcHV0ZWRDb250ZW50KCk6IFBvbHltb3JwaGV1c0NvbnRlbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNob3dIaW50ICYmIHRoaXMub3ZlcmZsb3duID8gdGhpcy5jb250ZW50IDogJyc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vdXRsZXQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0LnNldCh0aGlzLm91dGxldC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArIDQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5tYXhIZWlnaHQuc2V0KHRoaXMubGluZUhlaWdodCAqIHRoaXMubGluZXNMaW1pdCQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGRpdlxuICAgIHR1aUxpbmVDbGFtcFBvc2l0aW9uXG4gICAgY2xhc3M9XCJ0LXdyYXBwZXJcIlxuICAgIFtzdHlsZS4td2Via2l0LWxpbmUtY2xhbXBdPVwibGluZUNsYW1wKClcIlxuICAgIFtzdHlsZS53b3JkLWJyZWFrXT1cImxpbmVDbGFtcCgpID4gMSA/ICdicmVhay13b3JkJyA6ICdicmVhay1hbGwnXCJcbiAgICBbdHVpSGludF09XCJjb21wdXRlZENvbnRlbnRcIlxuPlxuICAgIDxuZy1jb250YWluZXIgKnBvbHltb3JwaGV1c091dGxldD1cImNvbnRlbnQgYXMgdGV4dFwiPlxuICAgICAgICB7eyB0ZXh0IH19XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==