import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation, } from '@angular/core';
import { tuiFadeIn, tuiSlideInTop } from '@taiga-ui/core/animations';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { injectContext, PolymorpheusOutlet, PolymorpheusTemplate, } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
class TuiPreviewDialog {
    constructor() {
        this.context = injectContext();
        this.animation = {
            value: '',
            params: {
                start: '100vh',
                duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
            },
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewDialog, isStandalone: true, selector: "tui-preview-dialog", host: { listeners: { "document:keydown.esc": "context.$implicit.complete()" }, properties: { "@tuiSlideInTop": "animation", "@tuiFadeIn": "animation" } }, ngImport: i0, template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `, isInline: true, styles: ["tui-preview-dialog{inline-size:100%;block-size:100%}[tuiAppearance][data-appearance=preview-action]{background:#686868f5;color:#fff}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action][data-state=hover]{background:#9f9f9fdb}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=hover]{background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][data-state=active]{background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active]:hover{background:#9f9f9fbf}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], animations: [tuiSlideInTop, tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { TuiPreviewDialog };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialog, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-preview-dialog', imports: [PolymorpheusOutlet, PolymorpheusTemplate], template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideInTop, tuiFadeIn], host: {
                        '(document:keydown.esc)': 'context.$implicit.complete()',
                        '[@tuiSlideInTop]': 'animation',
                        '[@tuiFadeIn]': 'animation',
                    }, styles: ["tui-preview-dialog{inline-size:100%;block-size:100%}[tuiAppearance][data-appearance=preview-action]{background:#686868f5;color:#fff}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action][data-state=hover]{background:#9f9f9fdb}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=hover]{background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][data-state=active]{background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active]:hover{background:#9f9f9fbf}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvcHJldmlldy9wcmV2aWV3LWRpYWxvZy9wcmV2aWV3LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsTUFBTSxFQUNOLGlCQUFpQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQ0gsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixvQkFBb0IsR0FDdkIsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFaEMsTUFtQmEsZ0JBQWdCO0lBbkI3QjtRQW9CdUIsWUFBTyxHQUFHLGFBQWEsRUFBMEIsQ0FBQztRQUNsRCxjQUFTLEdBQUc7WUFDM0IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE9BQU87Z0JBQ2QsUUFBUSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUN6RDtTQUNKLENBQUM7S0FDTDsrR0FUWSxnQkFBZ0I7bUdBQWhCLGdCQUFnQix5T0FmZjs7OztLQUlULHNqREFMUyxrQkFBa0IsZ0hBU2hCLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQzs7U0FPN0IsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBbkI1QixTQUFTO2lDQUNNLElBQUksWUFDTixvQkFBb0IsV0FDckIsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxZQUN6Qzs7OztLQUlULGlCQUVjLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLFFBQ2hDO3dCQUNGLHdCQUF3QixFQUFFLDhCQUE4Qjt3QkFDeEQsa0JBQWtCLEVBQUUsV0FBVzt3QkFDL0IsY0FBYyxFQUFFLFdBQVc7cUJBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgaW5qZWN0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtUdWlQb3BvdmVyfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3NlcnZpY2VzJztcbmltcG9ydCB7dHVpRmFkZUluLCB0dWlTbGlkZUluVG9wfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9hbmltYXRpb25zJztcbmltcG9ydCB7VFVJX0FOSU1BVElPTlNfU1BFRUR9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge3R1aUdldER1cmF0aW9ufSBmcm9tICdAdGFpZ2EtdWkvY29yZS91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB7XG4gICAgaW5qZWN0Q29udGV4dCxcbiAgICBQb2x5bW9ycGhldXNPdXRsZXQsXG4gICAgUG9seW1vcnBoZXVzVGVtcGxhdGUsXG59IGZyb20gJ0B0YWlnYS11aS9wb2x5bW9ycGhldXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAndHVpLXByZXZpZXctZGlhbG9nJyxcbiAgICBpbXBvcnRzOiBbUG9seW1vcnBoZXVzT3V0bGV0LCBQb2x5bW9ycGhldXNUZW1wbGF0ZV0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoZXVzT3V0bGV0PVwiY29udGV4dC5jb250ZW50IGFzIHRleHQ7IGNvbnRleHQ6IGNvbnRleHRcIj5cbiAgICAgICAgICAgIHt7IHRleHQgfX1cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi9wcmV2aWV3LWRpYWxvZy5zdHlsZS5sZXNzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBhbmltYXRpb25zOiBbdHVpU2xpZGVJblRvcCwgdHVpRmFkZUluXSxcbiAgICBob3N0OiB7XG4gICAgICAgICcoZG9jdW1lbnQ6a2V5ZG93bi5lc2MpJzogJ2NvbnRleHQuJGltcGxpY2l0LmNvbXBsZXRlKCknLFxuICAgICAgICAnW0B0dWlTbGlkZUluVG9wXSc6ICdhbmltYXRpb24nLFxuICAgICAgICAnW0B0dWlGYWRlSW5dJzogJ2FuaW1hdGlvbicsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpUHJldmlld0RpYWxvZyB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRleHQgPSBpbmplY3RDb250ZXh0PFR1aVBvcG92ZXI8dm9pZCwgdm9pZD4+KCk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGFuaW1hdGlvbiA9IHtcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHN0YXJ0OiAnMTAwdmgnLFxuICAgICAgICAgICAgZHVyYXRpb246IHR1aUdldER1cmF0aW9uKGluamVjdChUVUlfQU5JTUFUSU9OU19TUEVFRCkpLFxuICAgICAgICB9LFxuICAgIH07XG59XG4iXX0=