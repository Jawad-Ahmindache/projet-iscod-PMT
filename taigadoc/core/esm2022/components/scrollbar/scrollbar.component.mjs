import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, } from '@angular/core';
import { TUI_IS_IOS } from '@taiga-ui/cdk/tokens';
import { tuiGetElementOffset, tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { TUI_SCROLL_REF } from '@taiga-ui/core/tokens';
import { TuiScrollControls } from './scroll-controls.component';
import { TUI_SCROLLBAR_OPTIONS } from './scrollbar.options';
import * as i0 from "@angular/core";
/**
 * An event for scrolling an element into view within {@link TuiScrollbar}.
 */
export const TUI_SCROLL_INTO_VIEW = 'tui-scroll-into-view';
/**
 * An event to notify {@link TuiScrollbar} that
 * it should control a nested element.
 */
export const TUI_SCROLLABLE = 'tui-scrollable';
class TuiScrollbar {
    constructor() {
        this.el = tuiInjectElement();
        this.options = inject(TUI_SCROLLBAR_OPTIONS);
        this.isIOS = inject(TUI_IS_IOS);
        this.browserScrollRef = new ElementRef(this.el);
        /**
         * @deprecated: use tuiScrollbarOptionsProvider({ mode: 'hidden' })
         */
        this.hidden = this.options.mode === 'hidden';
    }
    get delegated() {
        return this.scrollRef !== this.el || this.options.mode === 'native';
    }
    get scrollRef() {
        return this.browserScrollRef.nativeElement;
    }
    set scrollRef(element) {
        this.browserScrollRef.nativeElement = element;
    }
    scrollIntoView(detail) {
        if (this.delegated) {
            return;
        }
        const { offsetHeight, offsetWidth } = detail;
        const { offsetTop, offsetLeft } = tuiGetElementOffset(this.scrollRef, detail);
        const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
        const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;
        this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbar, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiScrollbar, isStandalone: true, selector: "tui-scrollbar", inputs: { hidden: "hidden" }, host: { listeners: { "tui-scrollable.stop": "scrollRef = $event.detail", "tui-scroll-into-view.stop": "scrollIntoView($event.detail)" }, properties: { "class._native-hidden": "options.mode !== \"native\" && (!isIOS || hidden)" } }, providers: [
            {
                provide: TUI_SCROLL_REF,
                useFactory: () => inject(TuiScrollbar).browserScrollRef,
            },
        ], ngImport: i0, template: "<tui-scroll-controls\n    *ngIf=\"!hidden && !isIOS && options.mode !== 'native'\"\n    class=\"t-bars\"\n    [class.t-hover-mode]=\"options.mode === 'hover'\"\n/>\n<div\n    class=\"t-content\"\n    [class.t-content_delegated]=\"delegated\"\n>\n    <ng-content />\n</div>\n", styles: [":host{position:relative;display:flex;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover .t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TuiScrollControls, selector: "tui-scroll-controls" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiScrollbar };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbar, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-scrollbar', imports: [NgIf, TuiScrollControls], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: TUI_SCROLL_REF,
                            useFactory: () => inject(TuiScrollbar).browserScrollRef,
                        },
                    ], host: {
                        '[class._native-hidden]': 'options.mode !== "native" && (!isIOS || hidden)',
                        [`(${TUI_SCROLLABLE}.stop)`]: 'scrollRef = $event.detail',
                        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: 'scrollIntoView($event.detail)',
                    }, template: "<tui-scroll-controls\n    *ngIf=\"!hidden && !isIOS && options.mode !== 'native'\"\n    class=\"t-bars\"\n    [class.t-hover-mode]=\"options.mode === 'hover'\"\n/>\n<div\n    class=\"t-content\"\n    [class.t-content_delegated]=\"delegated\"\n>\n    <ng-content />\n</div>\n", styles: [":host{position:relative;display:flex;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover .t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"] }]
        }], propDecorators: { hidden: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyLnRlbXBsYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxHQUNSLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFckQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0scUJBQXFCLENBQUM7O0FBRTFEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsc0JBQXNCLENBQUM7QUFFM0Q7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDO0FBRS9DLE1BbUJhLFlBQVk7SUFuQnpCO1FBb0JxQixPQUFFLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QixZQUFPLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDeEMsVUFBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFOUQ7O1dBRUc7UUFFSSxXQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO0tBMEJsRDtJQXhCRyxJQUFjLFNBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO0lBQ3hFLENBQUM7SUFFRCxJQUFjLFNBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFjLFNBQVMsQ0FBQyxPQUFvQjtRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztJQUNsRCxDQUFDO0lBRVMsY0FBYyxDQUFDLE1BQW1CO1FBQ3hDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixPQUFPO1NBQ1Y7UUFFRCxNQUFNLEVBQUMsWUFBWSxFQUFFLFdBQVcsRUFBQyxHQUFHLE1BQU0sQ0FBQztRQUMzQyxNQUFNLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUUsTUFBTSxTQUFTLEdBQUcsU0FBUyxHQUFHLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sVUFBVSxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVqRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOytHQXBDUSxZQUFZO21HQUFaLFlBQVksa1VBWlY7WUFDUDtnQkFDSSxPQUFPLEVBQUUsY0FBYztnQkFDdkIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxnQkFBZ0I7YUFDMUQ7U0FDSiwwQkN0Q0wsb1JBV0EsMnhCRGtCYyxJQUFJLDZGQUFFLGlCQUFpQjs7U0FnQnhCLFlBQVk7NEZBQVosWUFBWTtrQkFuQnhCLFNBQVM7aUNBQ00sSUFBSSxZQUNOLGVBQWUsV0FDaEIsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsbUJBR2pCLHVCQUF1QixDQUFDLE1BQU0sYUFDcEM7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLGNBQWM7NEJBQ3ZCLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLGNBQWMsQ0FBQyxnQkFBZ0I7eUJBQzFEO3FCQUNKLFFBQ0s7d0JBQ0Ysd0JBQXdCLEVBQUUsaURBQWlEO3dCQUMzRSxDQUFDLElBQUksY0FBYyxRQUFRLENBQUMsRUFBRSwyQkFBMkI7d0JBQ3pELENBQUMsSUFBSSxvQkFBb0IsUUFBUSxDQUFDLEVBQUUsK0JBQStCO3FCQUN0RTs4QkFhTSxNQUFNO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGluamVjdCxcbiAgICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RVSV9JU19JT1N9IGZyb20gJ0B0YWlnYS11aS9jZGsvdG9rZW5zJztcbmltcG9ydCB7dHVpR2V0RWxlbWVudE9mZnNldCwgdHVpSW5qZWN0RWxlbWVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuaW1wb3J0IHtUVUlfU0NST0xMX1JFRn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdG9rZW5zJztcblxuaW1wb3J0IHtUdWlTY3JvbGxDb250cm9sc30gZnJvbSAnLi9zY3JvbGwtY29udHJvbHMuY29tcG9uZW50JztcbmltcG9ydCB7VFVJX1NDUk9MTEJBUl9PUFRJT05TfSBmcm9tICcuL3Njcm9sbGJhci5vcHRpb25zJztcblxuLyoqXG4gKiBBbiBldmVudCBmb3Igc2Nyb2xsaW5nIGFuIGVsZW1lbnQgaW50byB2aWV3IHdpdGhpbiB7QGxpbmsgVHVpU2Nyb2xsYmFyfS5cbiAqL1xuZXhwb3J0IGNvbnN0IFRVSV9TQ1JPTExfSU5UT19WSUVXID0gJ3R1aS1zY3JvbGwtaW50by12aWV3JztcblxuLyoqXG4gKiBBbiBldmVudCB0byBub3RpZnkge0BsaW5rIFR1aVNjcm9sbGJhcn0gdGhhdFxuICogaXQgc2hvdWxkIGNvbnRyb2wgYSBuZXN0ZWQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IFRVSV9TQ1JPTExBQkxFID0gJ3R1aS1zY3JvbGxhYmxlJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3R1aS1zY3JvbGxiYXInLFxuICAgIGltcG9ydHM6IFtOZ0lmLCBUdWlTY3JvbGxDb250cm9sc10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Njcm9sbGJhci50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zY3JvbGxiYXIuc3R5bGUubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBUVUlfU0NST0xMX1JFRixcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IGluamVjdChUdWlTY3JvbGxiYXIpLmJyb3dzZXJTY3JvbGxSZWYsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MuX25hdGl2ZS1oaWRkZW5dJzogJ29wdGlvbnMubW9kZSAhPT0gXCJuYXRpdmVcIiAmJiAoIWlzSU9TIHx8IGhpZGRlbiknLFxuICAgICAgICBbYCgke1RVSV9TQ1JPTExBQkxFfS5zdG9wKWBdOiAnc2Nyb2xsUmVmID0gJGV2ZW50LmRldGFpbCcsXG4gICAgICAgIFtgKCR7VFVJX1NDUk9MTF9JTlRPX1ZJRVd9LnN0b3ApYF06ICdzY3JvbGxJbnRvVmlldygkZXZlbnQuZGV0YWlsKScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpU2Nyb2xsYmFyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsID0gdHVpSW5qZWN0RWxlbWVudCgpO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG9wdGlvbnMgPSBpbmplY3QoVFVJX1NDUk9MTEJBUl9PUFRJT05TKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaXNJT1MgPSBpbmplY3QoVFVJX0lTX0lPUyk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJyb3dzZXJTY3JvbGxSZWYgPSBuZXcgRWxlbWVudFJlZih0aGlzLmVsKTtcblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkOiB1c2UgdHVpU2Nyb2xsYmFyT3B0aW9uc1Byb3ZpZGVyKHsgbW9kZTogJ2hpZGRlbicgfSlcbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoaWRkZW4gPSB0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ2hpZGRlbic7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGRlbGVnYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsUmVmICE9PSB0aGlzLmVsIHx8IHRoaXMub3B0aW9ucy5tb2RlID09PSAnbmF0aXZlJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNjcm9sbFJlZigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmJyb3dzZXJTY3JvbGxSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0IHNjcm9sbFJlZihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLmJyb3dzZXJTY3JvbGxSZWYubmF0aXZlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNjcm9sbEludG9WaWV3KGRldGFpbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsZWdhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7b2Zmc2V0SGVpZ2h0LCBvZmZzZXRXaWR0aH0gPSBkZXRhaWw7XG4gICAgICAgIGNvbnN0IHtvZmZzZXRUb3AsIG9mZnNldExlZnR9ID0gdHVpR2V0RWxlbWVudE9mZnNldCh0aGlzLnNjcm9sbFJlZiwgZGV0YWlsKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gb2Zmc2V0VG9wICsgb2Zmc2V0SGVpZ2h0IC8gMiAtIHRoaXMuc2Nyb2xsUmVmLmNsaWVudEhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBvZmZzZXRMZWZ0ICsgb2Zmc2V0V2lkdGggLyAyIC0gdGhpcy5zY3JvbGxSZWYuY2xpZW50V2lkdGggLyAyO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsUmVmLnNjcm9sbFRvPy4oc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKTtcbiAgICB9XG59XG4iLCI8dHVpLXNjcm9sbC1jb250cm9sc1xuICAgICpuZ0lmPVwiIWhpZGRlbiAmJiAhaXNJT1MgJiYgb3B0aW9ucy5tb2RlICE9PSAnbmF0aXZlJ1wiXG4gICAgY2xhc3M9XCJ0LWJhcnNcIlxuICAgIFtjbGFzcy50LWhvdmVyLW1vZGVdPVwib3B0aW9ucy5tb2RlID09PSAnaG92ZXInXCJcbi8+XG48ZGl2XG4gICAgY2xhc3M9XCJ0LWNvbnRlbnRcIlxuICAgIFtjbGFzcy50LWNvbnRlbnRfZGVsZWdhdGVkXT1cImRlbGVnYXRlZFwiXG4+XG4gICAgPG5nLWNvbnRlbnQgLz5cbjwvZGl2PlxuIl19