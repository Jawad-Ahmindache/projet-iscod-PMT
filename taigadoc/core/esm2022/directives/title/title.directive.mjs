import { ChangeDetectionStrategy, Component, Directive, Input, ViewEncapsulation, } from '@angular/core';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i0 from "@angular/core";
class TuiTitleStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTitleStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTitleStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-title" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTitleStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-title',
                    }, styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"] }]
        }] });
class TuiTitle {
    constructor() {
        this.nothing = tuiWithStyles(TuiTitleStyles);
        this.size = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTitle, isStandalone: true, selector: "[tuiTitle]", inputs: { size: ["tuiTitle", "size"] }, host: { attributes: { "tuiTitle": "" }, properties: { "attr.data-size": "size || null" } }, ngImport: i0 }); }
}
export { TuiTitle };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTitle, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTitle]',
                    host: {
                        tuiTitle: '',
                        '[attr.data-size]': 'size || null',
                    },
                }]
        }], propDecorators: { size: [{
                type: Input,
                args: ['tuiTitle']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL3RpdGxlL3RpdGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7O0FBR2hFLE1BVU0sY0FBYzsrR0FBZCxjQUFjO21HQUFkLGNBQWMsK0dBUk4sRUFBRTs7NEZBUVYsY0FBYztrQkFWbkIsU0FBUztpQ0FDTSxJQUFJLFlBQ04sRUFBRSxpQkFFRyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjs7QUFJTCxNQVFhLFFBQVE7SUFSckI7UUFTdUIsWUFBTyxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUdwRCxTQUFJLEdBQTZCLEVBQUUsQ0FBQztLQUM5QzsrR0FMWSxRQUFRO21HQUFSLFFBQVE7O1NBQVIsUUFBUTs0RkFBUixRQUFRO2tCQVJwQixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsSUFBSSxFQUFFO3dCQUNGLFFBQVEsRUFBRSxFQUFFO3dCQUNaLGtCQUFrQixFQUFFLGNBQWM7cUJBQ3JDO2lCQUNKOzhCQUtVLElBQUk7c0JBRFYsS0FBSzt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIElucHV0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpV2l0aFN0eWxlc30gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB0eXBlIHtUdWlTaXplTCwgVHVpU2l6ZVN9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgc3R5bGVzOiBbJ0BpbXBvcnQgXCJAdGFpZ2EtdWkvY29yZS9zdHlsZXMvY29tcG9uZW50cy90aXRsZS5sZXNzXCI7J10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAndHVpLXRpdGxlJyxcbiAgICB9LFxufSlcbmNsYXNzIFR1aVRpdGxlU3R5bGVzIHt9XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpVGl0bGVdJyxcbiAgICBob3N0OiB7XG4gICAgICAgIHR1aVRpdGxlOiAnJyxcbiAgICAgICAgJ1thdHRyLmRhdGEtc2l6ZV0nOiAnc2l6ZSB8fCBudWxsJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlUaXRsZSB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG5vdGhpbmcgPSB0dWlXaXRoU3R5bGVzKFR1aVRpdGxlU3R5bGVzKTtcblxuICAgIEBJbnB1dCgndHVpVGl0bGUnKVxuICAgIHB1YmxpYyBzaXplOiBUdWlTaXplTCB8IFR1aVNpemVTIHwgJycgPSAnJztcbn1cbiJdfQ==