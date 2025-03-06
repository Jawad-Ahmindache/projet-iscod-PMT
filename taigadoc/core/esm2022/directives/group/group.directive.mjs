import { ChangeDetectionStrategy, Component, Directive, inject, Input, ViewEncapsulation, } from '@angular/core';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_GROUP_OPTIONS } from './group.options';
import * as i0 from "@angular/core";
class TuiGroupStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGroupStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiGroupStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-group" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-clip: inset(-1rem 1px -1rem -1rem)}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0}[tuiGroup]>*:disabled,[tuiGroup]>*._disabled{z-index:0}[tuiGroup]>*:invalid:not([data-mode]),[tuiGroup]>*[data-mode~=invalid]{z-index:2;--t-group-clip: none}[tuiGroup]>*:has(:invalid:not([data-mode])),[tuiGroup]>*:has([data-mode~=invalid]){z-index:2;--t-group-clip: none}[tuiGroup]>*:focus-within{z-index:3;--t-group-clip: none}[tuiGroup]>*:has([data-focus=true]){z-index:3;--t-group-clip: none}[tuiGroup]>*:checked:not([data-mode]),[tuiGroup]>*[data-mode~=checked]{z-index:4;--t-group-clip: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:4;--t-group-clip: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin);clip-path:var(--t-group-clip)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}[tuiGroup]>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-clip: inset(-1rem -1rem 1px -1rem)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGroupStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-group',
                    }, styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-clip: inset(-1rem 1px -1rem -1rem)}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0}[tuiGroup]>*:disabled,[tuiGroup]>*._disabled{z-index:0}[tuiGroup]>*:invalid:not([data-mode]),[tuiGroup]>*[data-mode~=invalid]{z-index:2;--t-group-clip: none}[tuiGroup]>*:has(:invalid:not([data-mode])),[tuiGroup]>*:has([data-mode~=invalid]){z-index:2;--t-group-clip: none}[tuiGroup]>*:focus-within{z-index:3;--t-group-clip: none}[tuiGroup]>*:has([data-focus=true]){z-index:3;--t-group-clip: none}[tuiGroup]>*:checked:not([data-mode]),[tuiGroup]>*[data-mode~=checked]{z-index:4;--t-group-clip: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:4;--t-group-clip: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin);clip-path:var(--t-group-clip)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}[tuiGroup]>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-clip: inset(-1rem -1rem 1px -1rem)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"] }]
        }] });
class TuiGroup {
    constructor() {
        this.options = inject(TUI_GROUP_OPTIONS);
        this.nothing = tuiWithStyles(TuiGroupStyles);
        this.orientation = this.options.orientation;
        this.collapsed = this.options.collapsed;
        this.rounded = this.options.rounded;
        this.size = this.options.size;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiGroup, isStandalone: true, selector: "[tuiGroup]:not(ng-container)", inputs: { orientation: "orientation", collapsed: "collapsed", rounded: "rounded", size: "size" }, host: { attributes: { "tuiGroup": "", "role": "group" }, properties: { "attr.data-orientation": "orientation", "attr.data-size": "size", "style.--t-group-radius": "rounded ? null : 0", "style.--t-group-margin.rem": "collapsed ? null : 0.125", "style.--t-group-clip": "collapsed ? null : 0" } }, ngImport: i0 }); }
}
export { TuiGroup };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGroup, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiGroup]:not(ng-container)',
                    host: {
                        tuiGroup: '',
                        role: 'group',
                        '[attr.data-orientation]': 'orientation',
                        '[attr.data-size]': 'size',
                        '[style.--t-group-radius]': 'rounded ? null : 0',
                        '[style.--t-group-margin.rem]': 'collapsed ? null : 0.125',
                        '[style.--t-group-clip]': 'collapsed ? null : 0',
                    },
                }]
        }], propDecorators: { orientation: [{
                type: Input
            }], collapsed: [{
                type: Input
            }], rounded: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL2dyb3VwL2dyb3VwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxpQkFBaUIsR0FDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBR2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUVsRCxNQVVNLGNBQWM7K0dBQWQsY0FBYzttR0FBZCxjQUFjLCtHQVJOLEVBQUU7OzRGQVFWLGNBQWM7a0JBVm5CLFNBQVM7aUNBQ00sSUFBSSxZQUNOLEVBQUUsaUJBRUcsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxRQUN6Qzt3QkFDRixLQUFLLEVBQUUsV0FBVztxQkFDckI7O0FBSUwsTUFhYSxRQUFRO0lBYnJCO1FBY3FCLFlBQU8sR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVsQyxZQUFPLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBR3BELGdCQUFXLEdBQW1CLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBR3ZELGNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUduQyxZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFHL0IsU0FBSSxHQUF3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztLQUN4RDsrR0FoQlksUUFBUTttR0FBUixRQUFROztTQUFSLFFBQVE7NEZBQVIsUUFBUTtrQkFicEIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsSUFBSSxFQUFFO3dCQUNGLFFBQVEsRUFBRSxFQUFFO3dCQUNaLElBQUksRUFBRSxPQUFPO3dCQUNiLHlCQUF5QixFQUFFLGFBQWE7d0JBQ3hDLGtCQUFrQixFQUFFLE1BQU07d0JBQzFCLDBCQUEwQixFQUFFLG9CQUFvQjt3QkFDaEQsOEJBQThCLEVBQUUsMEJBQTBCO3dCQUMxRCx3QkFBd0IsRUFBRSxzQkFBc0I7cUJBQ25EO2lCQUNKOzhCQU9VLFdBQVc7c0JBRGpCLEtBQUs7Z0JBSUMsU0FBUztzQkFEZixLQUFLO2dCQUlDLE9BQU87c0JBRGIsS0FBSztnQkFJQyxJQUFJO3NCQURWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgaW5qZWN0LFxuICAgIElucHV0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpV2l0aFN0eWxlc30gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB0eXBlIHtUdWlPcmllbnRhdGlvbiwgVHVpU2l6ZUwsIFR1aVNpemVTfSBmcm9tICdAdGFpZ2EtdWkvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7VFVJX0dST1VQX09QVElPTlN9IGZyb20gJy4vZ3JvdXAub3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHN0eWxlVXJsczogWycuL2dyb3VwLnN0eWxlLmxlc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICd0dWktZ3JvdXAnLFxuICAgIH0sXG59KVxuY2xhc3MgVHVpR3JvdXBTdHlsZXMge31cblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlHcm91cF06bm90KG5nLWNvbnRhaW5lciknLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgdHVpR3JvdXA6ICcnLFxuICAgICAgICByb2xlOiAnZ3JvdXAnLFxuICAgICAgICAnW2F0dHIuZGF0YS1vcmllbnRhdGlvbl0nOiAnb3JpZW50YXRpb24nLFxuICAgICAgICAnW2F0dHIuZGF0YS1zaXplXSc6ICdzaXplJyxcbiAgICAgICAgJ1tzdHlsZS4tLXQtZ3JvdXAtcmFkaXVzXSc6ICdyb3VuZGVkID8gbnVsbCA6IDAnLFxuICAgICAgICAnW3N0eWxlLi0tdC1ncm91cC1tYXJnaW4ucmVtXSc6ICdjb2xsYXBzZWQgPyBudWxsIDogMC4xMjUnLFxuICAgICAgICAnW3N0eWxlLi0tdC1ncm91cC1jbGlwXSc6ICdjb2xsYXBzZWQgPyBudWxsIDogMCcsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpR3JvdXAge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9ucyA9IGluamVjdChUVUlfR1JPVVBfT1BUSU9OUyk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbm90aGluZyA9IHR1aVdpdGhTdHlsZXMoVHVpR3JvdXBTdHlsZXMpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3JpZW50YXRpb246IFR1aU9yaWVudGF0aW9uID0gdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgY29sbGFwc2VkID0gdGhpcy5vcHRpb25zLmNvbGxhcHNlZDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHJvdW5kZWQgPSB0aGlzLm9wdGlvbnMucm91bmRlZDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNpemU6IFR1aVNpemVMIHwgVHVpU2l6ZVMgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcbn1cbiJdfQ==