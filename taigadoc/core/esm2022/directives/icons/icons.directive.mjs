import { ChangeDetectionStrategy, Component, Directive, inject, Input, ViewEncapsulation, } from '@angular/core';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_ICON_END, TUI_ICON_START, tuiInjectIconResolver } from '@taiga-ui/core/tokens';
import * as i0 from "@angular/core";
class TuiIconsStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIconsStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiIconsStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-icons" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:\"\";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIconsStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-icons',
                    }, styles: ["[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:\"\";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n"] }]
        }] });
class TuiIcons {
    constructor() {
        this.nothing = tuiWithStyles(TuiIconsStyles);
        this.resolver = tuiInjectIconResolver();
        this.iconStart = inject(TUI_ICON_START, { self: true, optional: true }) || '';
        this.iconEnd = inject(TUI_ICON_END, { self: true, optional: true }) || '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIcons, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiIcons, isStandalone: true, inputs: { iconStart: "iconStart", iconEnd: "iconEnd" }, host: { attributes: { "tuiIcons": "" }, properties: { "style.--t-icon-start": "iconStart ? \"url(\" + resolver(iconStart) + \")\" : null", "style.--t-icon-end": "iconEnd ? \"url(\" + resolver(iconEnd) + \")\" : null" } }, ngImport: i0 }); }
}
export { TuiIcons };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIcons, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    host: {
                        tuiIcons: '',
                        '[style.--t-icon-start]': 'iconStart ? "url(" + resolver(iconStart) + ")" : null',
                        '[style.--t-icon-end]': 'iconEnd ? "url(" + resolver(iconEnd) + ")" : null',
                    },
                }]
        }], propDecorators: { iconStart: [{
                type: Input
            }], iconEnd: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL2ljb25zL2ljb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxpQkFBaUIsR0FDcEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBRTFGLE1BVU0sY0FBYzsrR0FBZCxjQUFjO21HQUFkLGNBQWMsK0dBUk4sRUFBRTs7NEZBUVYsY0FBYztrQkFWbkIsU0FBUztpQ0FDTSxJQUFJLFlBQ04sRUFBRSxpQkFFRyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjs7QUFJTCxNQVFhLFFBQVE7SUFSckI7UUFTdUIsWUFBTyxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxhQUFRLEdBQTZCLHFCQUFxQixFQUFFLENBQUM7UUFHekUsY0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUd2RSxZQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzdFOytHQVRZLFFBQVE7bUdBQVIsUUFBUTs7U0FBUixRQUFROzRGQUFSLFFBQVE7a0JBUnBCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRTt3QkFDRixRQUFRLEVBQUUsRUFBRTt3QkFDWix3QkFBd0IsRUFBRSx1REFBdUQ7d0JBQ2pGLHNCQUFzQixFQUFFLG1EQUFtRDtxQkFDOUU7aUJBQ0o7OEJBTVUsU0FBUztzQkFEZixLQUFLO2dCQUlDLE9BQU87c0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBpbmplY3QsXG4gICAgSW5wdXQsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1R1aVN0cmluZ0hhbmRsZXJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHt0dWlXaXRoU3R5bGVzfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtUVUlfSUNPTl9FTkQsIFRVSV9JQ09OX1NUQVJULCB0dWlJbmplY3RJY29uUmVzb2x2ZXJ9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHN0eWxlczogWydAaW1wb3J0IFwiQHRhaWdhLXVpL2NvcmUvc3R5bGVzL2NvbXBvbmVudHMvaWNvbnMubGVzc1wiOyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3R1aS1pY29ucycsXG4gICAgfSxcbn0pXG5jbGFzcyBUdWlJY29uc1N0eWxlcyB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgdHVpSWNvbnM6ICcnLFxuICAgICAgICAnW3N0eWxlLi0tdC1pY29uLXN0YXJ0XSc6ICdpY29uU3RhcnQgPyBcInVybChcIiArIHJlc29sdmVyKGljb25TdGFydCkgKyBcIilcIiA6IG51bGwnLFxuICAgICAgICAnW3N0eWxlLi0tdC1pY29uLWVuZF0nOiAnaWNvbkVuZCA/IFwidXJsKFwiICsgcmVzb2x2ZXIoaWNvbkVuZCkgKyBcIilcIiA6IG51bGwnLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aUljb25zIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbm90aGluZyA9IHR1aVdpdGhTdHlsZXMoVHVpSWNvbnNTdHlsZXMpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSByZXNvbHZlcjogVHVpU3RyaW5nSGFuZGxlcjxzdHJpbmc+ID0gdHVpSW5qZWN0SWNvblJlc29sdmVyKCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpY29uU3RhcnQgPSBpbmplY3QoVFVJX0lDT05fU1RBUlQsIHtzZWxmOiB0cnVlLCBvcHRpb25hbDogdHJ1ZX0pIHx8ICcnO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaWNvbkVuZCA9IGluamVjdChUVUlfSUNPTl9FTkQsIHtzZWxmOiB0cnVlLCBvcHRpb25hbDogdHJ1ZX0pIHx8ICcnO1xufVxuIl19