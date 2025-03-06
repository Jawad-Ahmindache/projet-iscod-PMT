import { afterNextRender, ChangeDetectionStrategy, Component, computed, Directive, inject, Input, signal, ViewEncapsulation, } from '@angular/core';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiIsString, tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_APPEARANCE_OPTIONS } from './appearance.options';
import * as i0 from "@angular/core";
class TuiAppearanceStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAppearanceStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiAppearanceStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-appearance" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiAppearance]{transition-property:color,background,opacity,box-shadow,border;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem}[tuiAppearance].tui-appearance-initializing{transition:none!important}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAppearanceStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-appearance',
                    }, styles: ["[tuiAppearance]{transition-property:color,background,opacity,box-shadow,border;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem}[tuiAppearance].tui-appearance-initializing{transition:none!important}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}\n"] }]
        }] });
class TuiAppearance {
    constructor() {
        this.el = tuiInjectElement();
        this.nothing = tuiWithStyles(TuiAppearanceStyles);
        this.modes = computed((mode = this.mode()) => !mode || tuiIsString(mode) ? mode : mode.join(' '));
        // TODO: refactor to signal inputs after Angular update
        this.appearance = signal(inject(TUI_APPEARANCE_OPTIONS).appearance);
        this.state = signal(null);
        this.focus = signal(null);
        this.mode = signal(null);
        afterNextRender(() => {
            this.el.classList.toggle('tui-appearance-initializing', 
            // Triggering reflow so there's no transition
            // eslint-disable-next-line
            !!this.el.offsetWidth && false);
        });
    }
    set tuiAppearance(appearance) {
        this.appearance.set(appearance);
    }
    set tuiAppearanceState(state) {
        this.state.set(state);
    }
    set tuiAppearanceFocus(focus) {
        this.focus.set(focus);
    }
    set tuiAppearanceMode(mode) {
        this.mode.set(mode);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAppearance, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiAppearance, isStandalone: true, selector: "[tuiAppearance]", inputs: { tuiAppearance: "tuiAppearance", tuiAppearanceState: "tuiAppearanceState", tuiAppearanceFocus: "tuiAppearanceFocus", tuiAppearanceMode: "tuiAppearanceMode" }, host: { attributes: { "tuiAppearance": "" }, properties: { "attr.data-appearance": "appearance()", "attr.data-state": "state()", "attr.data-focus": "focus()", "attr.data-mode": "modes()" }, classAttribute: "tui-appearance-initializing" }, ngImport: i0 }); }
}
export { TuiAppearance };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAppearance, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiAppearance]',
                    host: {
                        class: 'tui-appearance-initializing',
                        tuiAppearance: '',
                        '[attr.data-appearance]': 'appearance()',
                        '[attr.data-state]': 'state()',
                        '[attr.data-focus]': 'focus()',
                        '[attr.data-mode]': 'modes()',
                    },
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiAppearance: [{
                type: Input
            }], tuiAppearanceState: [{
                type: Input
            }], tuiAppearanceFocus: [{
                type: Input
            }], tuiAppearanceMode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZWFyYW5jZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2RpcmVjdGl2ZXMvYXBwZWFyYW5jZS9hcHBlYXJhbmNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsZUFBZSxFQUNmLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsR0FDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUk3RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFNUQsTUFVTSxtQkFBbUI7K0dBQW5CLG1CQUFtQjttR0FBbkIsbUJBQW1CLG9IQVJYLEVBQUU7OzRGQVFWLG1CQUFtQjtrQkFWeEIsU0FBUztpQ0FDTSxJQUFJLFlBQ04sRUFBRSxpQkFFRyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNGLEtBQUssRUFBRSxnQkFBZ0I7cUJBQzFCOztBQUlMLE1BWWEsYUFBYTtJQWN0QjtRQWJpQixPQUFFLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztRQUV0QixZQUFPLEdBQUcsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDN0MsVUFBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUN2RCxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDckQsQ0FBQztRQUVGLHVEQUF1RDtRQUN2QyxlQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELFVBQUssR0FBRyxNQUFNLENBQTZCLElBQUksQ0FBQyxDQUFDO1FBQ2pELFVBQUssR0FBRyxNQUFNLENBQWlCLElBQUksQ0FBQyxDQUFDO1FBQ3JDLFNBQUksR0FBRyxNQUFNLENBQW9DLElBQUksQ0FBQyxDQUFDO1FBR25FLGVBQWUsQ0FBQyxHQUFHLEVBQUU7WUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNwQiw2QkFBNkI7WUFDN0IsNkNBQTZDO1lBQzdDLDJCQUEyQjtZQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksS0FBSyxDQUNqQyxDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsSUFDVyxhQUFhLENBQUMsVUFBOEM7UUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQ1csa0JBQWtCLENBQUMsS0FBaUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQ1csa0JBQWtCLENBQUMsS0FBcUI7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQ1csaUJBQWlCLENBQUMsSUFBdUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzsrR0EzQ1EsYUFBYTttR0FBYixhQUFhOztTQUFiLGFBQWE7NEZBQWIsYUFBYTtrQkFaekIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsSUFBSSxFQUFFO3dCQUNGLEtBQUssRUFBRSw2QkFBNkI7d0JBQ3BDLGFBQWEsRUFBRSxFQUFFO3dCQUNqQix3QkFBd0IsRUFBRSxjQUFjO3dCQUN4QyxtQkFBbUIsRUFBRSxTQUFTO3dCQUM5QixtQkFBbUIsRUFBRSxTQUFTO3dCQUM5QixrQkFBa0IsRUFBRSxTQUFTO3FCQUNoQztpQkFDSjswRUEyQmMsYUFBYTtzQkFEdkIsS0FBSztnQkFNSyxrQkFBa0I7c0JBRDVCLEtBQUs7Z0JBTUssa0JBQWtCO3NCQUQ1QixLQUFLO2dCQU1LLGlCQUFpQjtzQkFEM0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgYWZ0ZXJOZXh0UmVuZGVyLFxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBjb21wdXRlZCxcbiAgICBEaXJlY3RpdmUsXG4gICAgaW5qZWN0LFxuICAgIElucHV0LFxuICAgIHNpZ25hbCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7dHVpSXNTdHJpbmcsIHR1aVdpdGhTdHlsZXN9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQgdHlwZSB7VHVpSW50ZXJhY3RpdmVTdGF0ZX0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgdHlwZSB7VHVpQXBwZWFyYW5jZU9wdGlvbnN9IGZyb20gJy4vYXBwZWFyYW5jZS5vcHRpb25zJztcbmltcG9ydCB7VFVJX0FQUEVBUkFOQ0VfT1BUSU9OU30gZnJvbSAnLi9hcHBlYXJhbmNlLm9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBzdHlsZXM6IFsnQGltcG9ydCBcIkB0YWlnYS11aS9jb3JlL3N0eWxlcy9jb21wb25lbnRzL2FwcGVhcmFuY2UubGVzc1wiOyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3R1aS1hcHBlYXJhbmNlJyxcbiAgICB9LFxufSlcbmNsYXNzIFR1aUFwcGVhcmFuY2VTdHlsZXMge31cblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlBcHBlYXJhbmNlXScsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3R1aS1hcHBlYXJhbmNlLWluaXRpYWxpemluZycsXG4gICAgICAgIHR1aUFwcGVhcmFuY2U6ICcnLFxuICAgICAgICAnW2F0dHIuZGF0YS1hcHBlYXJhbmNlXSc6ICdhcHBlYXJhbmNlKCknLFxuICAgICAgICAnW2F0dHIuZGF0YS1zdGF0ZV0nOiAnc3RhdGUoKScsXG4gICAgICAgICdbYXR0ci5kYXRhLWZvY3VzXSc6ICdmb2N1cygpJyxcbiAgICAgICAgJ1thdHRyLmRhdGEtbW9kZV0nOiAnbW9kZXMoKScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpQXBwZWFyYW5jZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbCA9IHR1aUluamVjdEVsZW1lbnQoKTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBub3RoaW5nID0gdHVpV2l0aFN0eWxlcyhUdWlBcHBlYXJhbmNlU3R5bGVzKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbW9kZXMgPSBjb21wdXRlZCgobW9kZSA9IHRoaXMubW9kZSgpKSA9PlxuICAgICAgICAhbW9kZSB8fCB0dWlJc1N0cmluZyhtb2RlKSA/IG1vZGUgOiBtb2RlLmpvaW4oJyAnKSxcbiAgICApO1xuXG4gICAgLy8gVE9ETzogcmVmYWN0b3IgdG8gc2lnbmFsIGlucHV0cyBhZnRlciBBbmd1bGFyIHVwZGF0ZVxuICAgIHB1YmxpYyByZWFkb25seSBhcHBlYXJhbmNlID0gc2lnbmFsKGluamVjdChUVUlfQVBQRUFSQU5DRV9PUFRJT05TKS5hcHBlYXJhbmNlKTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RhdGUgPSBzaWduYWw8VHVpSW50ZXJhY3RpdmVTdGF0ZSB8IG51bGw+KG51bGwpO1xuICAgIHB1YmxpYyByZWFkb25seSBmb2N1cyA9IHNpZ25hbDxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gICAgcHVibGljIHJlYWRvbmx5IG1vZGUgPSBzaWduYWw8c3RyaW5nIHwgcmVhZG9ubHkgc3RyaW5nW10gfCBudWxsPihudWxsKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBhZnRlck5leHRSZW5kZXIoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgICAgICAgICAgICd0dWktYXBwZWFyYW5jZS1pbml0aWFsaXppbmcnLFxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXJpbmcgcmVmbG93IHNvIHRoZXJlJ3Mgbm8gdHJhbnNpdGlvblxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgICEhdGhpcy5lbC5vZmZzZXRXaWR0aCAmJiBmYWxzZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0dWlBcHBlYXJhbmNlKGFwcGVhcmFuY2U6IFR1aUFwcGVhcmFuY2VPcHRpb25zWydhcHBlYXJhbmNlJ10pIHtcbiAgICAgICAgdGhpcy5hcHBlYXJhbmNlLnNldChhcHBlYXJhbmNlKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHVpQXBwZWFyYW5jZVN0YXRlKHN0YXRlOiBUdWlJbnRlcmFjdGl2ZVN0YXRlIHwgbnVsbCkge1xuICAgICAgICB0aGlzLnN0YXRlLnNldChzdGF0ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHR1aUFwcGVhcmFuY2VGb2N1cyhmb2N1czogYm9vbGVhbiB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5mb2N1cy5zZXQoZm9jdXMpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0dWlBcHBlYXJhbmNlTW9kZShtb2RlOiBzdHJpbmcgfCByZWFkb25seSBzdHJpbmdbXSB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5tb2RlLnNldChtb2RlKTtcbiAgICB9XG59XG4iXX0=