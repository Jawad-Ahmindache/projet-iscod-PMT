import { ChangeDetectionStrategy, Component, ContentChild, Directive, inject, Input, ViewEncapsulation, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiAppearanceOptionsProvider, TuiWithAppearance, } from '@taiga-ui/core/directives/appearance';
import { TuiWithIcons } from '@taiga-ui/core/directives/icons';
import { tuiAvatarOptionsProvider } from '@taiga-ui/kit/components/avatar';
import { TUI_BLOCK_OPTIONS } from './block.options';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/native-validator";
import * as i2 from "@taiga-ui/core/directives/appearance";
import * as i3 from "@taiga-ui/core/directives/icons";
class TuiBlockStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBlockStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiBlockStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-block" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiBlock]{--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-font-text-m);padding:var(--tui-padding-l)}[tuiBlock][data-size=s]{gap:.5rem;font:var(--tui-font-text-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiBlock][data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock][data-size=m]{gap:.625rem;font:var(--tui-font-text-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock][data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]._disabled :focus{visibility:hidden}[tuiBlock][data-appearance=\"\"]{justify-content:center}[tuiBlock] input[tuiBlock]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;min-block-size:0;pointer-events:none;border-radius:inherit}[tuiBlock] tui-avatar{margin:-.25rem}[tuiBlock] [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock] [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock] [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBlockStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-block',
                    }, styles: ["[tuiBlock]{--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-font-text-m);padding:var(--tui-padding-l)}[tuiBlock][data-size=s]{gap:.5rem;font:var(--tui-font-text-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiBlock][data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock][data-size=m]{gap:.625rem;font:var(--tui-font-text-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock][data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]._disabled :focus{visibility:hidden}[tuiBlock][data-appearance=\"\"]{justify-content:center}[tuiBlock] input[tuiBlock]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;min-block-size:0;pointer-events:none;border-radius:inherit}[tuiBlock] tui-avatar{margin:-.25rem}[tuiBlock] [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock] [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock] [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n"] }]
        }] });
class TuiBlock {
    constructor() {
        this.nothing = tuiWithStyles(TuiBlockStyles);
        this.size = inject(TUI_BLOCK_OPTIONS).size;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBlock, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiBlock, isStandalone: true, selector: "label[tuiBlock],input[tuiBlock]", inputs: { size: ["tuiBlock", "size"] }, host: { attributes: { "tuiBlock": "" }, properties: { "attr.data-size": "size || \"l\"", "class._disabled": "!!this.control?.disabled" } }, providers: [
            tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS),
            tuiAvatarOptionsProvider({ size: 's' }),
        ], queries: [{ propertyName: "control", first: true, predicate: NgControl, descendants: true }], hostDirectives: [{ directive: i1.TuiNativeValidator }, { directive: i2.TuiWithAppearance }, { directive: i3.TuiWithIcons }], ngImport: i0 }); }
}
export { TuiBlock };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBlock, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'label[tuiBlock],input[tuiBlock]',
                    providers: [
                        tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS),
                        tuiAvatarOptionsProvider({ size: 's' }),
                    ],
                    hostDirectives: [TuiNativeValidator, TuiWithAppearance, TuiWithIcons],
                    host: {
                        tuiBlock: '',
                        '[attr.data-size]': 'size || "l"',
                        '[class._disabled]': '!!this.control?.disabled',
                    },
                }]
        }], propDecorators: { control: [{
                type: ContentChild,
                args: [NgControl]
            }], size: [{
                type: Input,
                args: ['tuiBlock']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvYmxvY2svYmxvY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxpQkFBaUIsR0FDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQ0gsNEJBQTRCLEVBQzVCLGlCQUFpQixHQUNwQixNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUV6RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFbEQsTUFVTSxjQUFjOytHQUFkLGNBQWM7bUdBQWQsY0FBYywrR0FSTixFQUFFOzs0RkFRVixjQUFjO2tCQVZuQixTQUFTO2lDQUNNLElBQUksWUFDTixFQUFFLGlCQUVHLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0YsS0FBSyxFQUFFLFdBQVc7cUJBQ3JCOztBQUlMLE1BY2EsUUFBUTtJQWRyQjtRQWtCdUIsWUFBTyxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUdwRCxTQUFJLEdBQTZCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUMxRTsrR0FSWSxRQUFRO21HQUFSLFFBQVEsa1FBWE47WUFDUCw0QkFBNEIsQ0FBQyxpQkFBaUIsQ0FBQztZQUMvQyx3QkFBd0IsQ0FBQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQztTQUN4QywrREFTYSxTQUFTOztTQURkLFFBQVE7NEZBQVIsUUFBUTtrQkFkcEIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsU0FBUyxFQUFFO3dCQUNQLDRCQUE0QixDQUFDLGlCQUFpQixDQUFDO3dCQUMvQyx3QkFBd0IsQ0FBQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQztxQkFDeEM7b0JBQ0QsY0FBYyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO29CQUNyRSxJQUFJLEVBQUU7d0JBQ0YsUUFBUSxFQUFFLEVBQUU7d0JBQ1osa0JBQWtCLEVBQUUsYUFBYTt3QkFDakMsbUJBQW1CLEVBQUUsMEJBQTBCO3FCQUNsRDtpQkFDSjs4QkFHc0IsT0FBTztzQkFEekIsWUFBWTt1QkFBQyxTQUFTO2dCQU1oQixJQUFJO3NCQURWLEtBQUs7dUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBEaXJlY3RpdmUsXG4gICAgaW5qZWN0LFxuICAgIElucHV0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1R1aU5hdGl2ZVZhbGlkYXRvcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL25hdGl2ZS12YWxpZGF0b3InO1xuaW1wb3J0IHt0dWlXaXRoU3R5bGVzfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtcbiAgICB0dWlBcHBlYXJhbmNlT3B0aW9uc1Byb3ZpZGVyLFxuICAgIFR1aVdpdGhBcHBlYXJhbmNlLFxufSBmcm9tICdAdGFpZ2EtdWkvY29yZS9kaXJlY3RpdmVzL2FwcGVhcmFuY2UnO1xuaW1wb3J0IHtUdWlXaXRoSWNvbnN9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2RpcmVjdGl2ZXMvaWNvbnMnO1xuaW1wb3J0IHR5cGUge1R1aVNpemVMLCBUdWlTaXplU30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHt0dWlBdmF0YXJPcHRpb25zUHJvdmlkZXJ9IGZyb20gJ0B0YWlnYS11aS9raXQvY29tcG9uZW50cy9hdmF0YXInO1xuXG5pbXBvcnQge1RVSV9CTE9DS19PUFRJT05TfSBmcm9tICcuL2Jsb2NrLm9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBzdHlsZXM6IFsnQGltcG9ydCBcIkB0YWlnYS11aS9raXQvc3R5bGVzL2NvbXBvbmVudHMvYmxvY2subGVzc1wiOyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3R1aS1ibG9jaycsXG4gICAgfSxcbn0pXG5jbGFzcyBUdWlCbG9ja1N0eWxlcyB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnbGFiZWxbdHVpQmxvY2tdLGlucHV0W3R1aUJsb2NrXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHR1aUFwcGVhcmFuY2VPcHRpb25zUHJvdmlkZXIoVFVJX0JMT0NLX09QVElPTlMpLFxuICAgICAgICB0dWlBdmF0YXJPcHRpb25zUHJvdmlkZXIoe3NpemU6ICdzJ30pLFxuICAgIF0sXG4gICAgaG9zdERpcmVjdGl2ZXM6IFtUdWlOYXRpdmVWYWxpZGF0b3IsIFR1aVdpdGhBcHBlYXJhbmNlLCBUdWlXaXRoSWNvbnNdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgdHVpQmxvY2s6ICcnLFxuICAgICAgICAnW2F0dHIuZGF0YS1zaXplXSc6ICdzaXplIHx8IFwibFwiJyxcbiAgICAgICAgJ1tjbGFzcy5fZGlzYWJsZWRdJzogJyEhdGhpcy5jb250cm9sPy5kaXNhYmxlZCcsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpQmxvY2sge1xuICAgIEBDb250ZW50Q2hpbGQoTmdDb250cm9sKVxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250cm9sPzogTmdDb250cm9sO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG5vdGhpbmcgPSB0dWlXaXRoU3R5bGVzKFR1aUJsb2NrU3R5bGVzKTtcblxuICAgIEBJbnB1dCgndHVpQmxvY2snKVxuICAgIHB1YmxpYyBzaXplOiBUdWlTaXplTCB8IFR1aVNpemVTIHwgJycgPSBpbmplY3QoVFVJX0JMT0NLX09QVElPTlMpLnNpemU7XG59XG4iXX0=