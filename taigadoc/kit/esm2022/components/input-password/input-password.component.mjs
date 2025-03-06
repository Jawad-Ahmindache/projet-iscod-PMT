import { ChangeDetectionStrategy, Component, computed, inject, signal, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tuiFallbackValueProvider } from '@taiga-ui/cdk/tokens';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TUI_TEXTFIELD_OPTIONS, TuiTextfieldContent, TuiWithTextfield, } from '@taiga-ui/core/components/textfield';
import { TuiTooltip } from '@taiga-ui/kit/directives';
import { TUI_PASSWORD_TEXTS } from '@taiga-ui/kit/tokens';
import { TUI_INPUT_PASSWORD_OPTIONS } from './input-password.options';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/components/textfield";
/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
class TuiInputPassword {
    constructor() {
        this.options = inject(TUI_INPUT_PASSWORD_OPTIONS);
        this.texts = toSignal(inject(TUI_PASSWORD_TEXTS), {
            initialValue: ['', ''],
        });
        this.el = tuiInjectElement();
        this.size = inject(TUI_TEXTFIELD_OPTIONS).size;
        this.hidden = signal(true);
        this.text = computed(() => this.hidden() ? this.texts()[0] : this.texts()[1]);
        this.icon = computed((size = this.size()) => {
            const icon = this.hidden() ? this.options.icons.show : this.options.icons.hide;
            return tuiIsString(icon) ? icon : icon(size);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputPassword, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputPassword, isStandalone: true, selector: "input[tuiInputPassword]", host: { properties: { "type": "hidden() ? \"password\" : \"text\"" } }, providers: [tuiFallbackValueProvider('')], hostDirectives: [{ directive: i1.TuiWithTextfield }], ngImport: i0, template: `
        <tui-icon
            *tuiTextfieldContent
            [icon]="icon()"
            [style.border]="size() === 's' ? null : 'none'"
            [tuiTooltip]="text()"
            (click)="hidden.set(!hidden())"
            (mousedown.capture.prevent.stop)="el.focus()"
        />
    `, isInline: true, dependencies: [{ kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }, { kind: "directive", type: TuiTextfieldContent, selector: "ng-template[tuiTextfieldContent]" }, { kind: "directive", type: TuiTooltip, selector: "tui-icon[tuiTooltip]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiInputPassword };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputPassword, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'input[tuiInputPassword]',
                    imports: [TuiIcon, TuiTextfieldContent, TuiTooltip],
                    template: `
        <tui-icon
            *tuiTextfieldContent
            [icon]="icon()"
            [style.border]="size() === 's' ? null : 'none'"
            [tuiTooltip]="text()"
            (click)="hidden.set(!hidden())"
            (mousedown.capture.prevent.stop)="el.focus()"
        />
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [tuiFallbackValueProvider('')],
                    hostDirectives: [TuiWithTextfield],
                    host: {
                        '[type]': 'hidden() ? "password" : "text"',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvaW5wdXQtcGFzc3dvcmQvaW5wdXQtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFFBQVEsRUFDUixNQUFNLEVBQ04sTUFBTSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDOUQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFDSCxxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLGdCQUFnQixHQUNuQixNQUFNLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXBFOztHQUVHO0FBQ0gsTUFxQmEsZ0JBQWdCO0lBckI3QjtRQXNCcUIsWUFBTyxHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzdDLFVBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7WUFDMUQsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBVTtTQUNsQyxDQUFDLENBQUM7UUFFZ0IsT0FBRSxHQUFHLGdCQUFnQixFQUFvQixDQUFDO1FBQzFDLFNBQUksR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUMsV0FBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixTQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUNwQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNwRCxDQUFDO1FBRWlCLFNBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7WUFDdEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUUvRSxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7S0FDTjsrR0FsQlksZ0JBQWdCO21HQUFoQixnQkFBZ0IsOElBTmQsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxnRkFYL0I7Ozs7Ozs7OztLQVNULDREQVZTLE9BQU8scUZBQUUsbUJBQW1CLDZFQUFFLFVBQVU7O1NBa0J6QyxnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFyQjVCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxVQUFVLENBQUM7b0JBQ25ELFFBQVEsRUFBRTs7Ozs7Ozs7O0tBU1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN6QyxjQUFjLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDbEMsSUFBSSxFQUFFO3dCQUNGLFFBQVEsRUFBRSxnQ0FBZ0M7cUJBQzdDO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgY29tcHV0ZWQsXG4gICAgaW5qZWN0LFxuICAgIHNpZ25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge3R1aUZhbGxiYWNrVmFsdWVQcm92aWRlcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay90b2tlbnMnO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge3R1aUlzU3RyaW5nfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtUdWlJY29ufSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL2ljb24nO1xuaW1wb3J0IHtcbiAgICBUVUlfVEVYVEZJRUxEX09QVElPTlMsXG4gICAgVHVpVGV4dGZpZWxkQ29udGVudCxcbiAgICBUdWlXaXRoVGV4dGZpZWxkLFxufSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL3RleHRmaWVsZCc7XG5pbXBvcnQge1R1aVRvb2x0aXB9IGZyb20gJ0B0YWlnYS11aS9raXQvZGlyZWN0aXZlcyc7XG5pbXBvcnQge1RVSV9QQVNTV09SRF9URVhUU30gZnJvbSAnQHRhaWdhLXVpL2tpdC90b2tlbnMnO1xuXG5pbXBvcnQge1RVSV9JTlBVVF9QQVNTV09SRF9PUFRJT05TfSBmcm9tICcuL2lucHV0LXBhc3N3b3JkLm9wdGlvbnMnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgVHVpUGFzc3dvcmR9IHdpdGgge0BsaW5rIFR1aVRleHRmaWVsZH1cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2lucHV0W3R1aUlucHV0UGFzc3dvcmRdJyxcbiAgICBpbXBvcnRzOiBbVHVpSWNvbiwgVHVpVGV4dGZpZWxkQ29udGVudCwgVHVpVG9vbHRpcF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHR1aS1pY29uXG4gICAgICAgICAgICAqdHVpVGV4dGZpZWxkQ29udGVudFxuICAgICAgICAgICAgW2ljb25dPVwiaWNvbigpXCJcbiAgICAgICAgICAgIFtzdHlsZS5ib3JkZXJdPVwic2l6ZSgpID09PSAncycgPyBudWxsIDogJ25vbmUnXCJcbiAgICAgICAgICAgIFt0dWlUb29sdGlwXT1cInRleHQoKVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiaGlkZGVuLnNldCghaGlkZGVuKCkpXCJcbiAgICAgICAgICAgIChtb3VzZWRvd24uY2FwdHVyZS5wcmV2ZW50LnN0b3ApPVwiZWwuZm9jdXMoKVwiXG4gICAgICAgIC8+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFt0dWlGYWxsYmFja1ZhbHVlUHJvdmlkZXIoJycpXSxcbiAgICBob3N0RGlyZWN0aXZlczogW1R1aVdpdGhUZXh0ZmllbGRdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1t0eXBlXSc6ICdoaWRkZW4oKSA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwiJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlJbnB1dFBhc3N3b3JkIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnMgPSBpbmplY3QoVFVJX0lOUFVUX1BBU1NXT1JEX09QVElPTlMpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHMgPSB0b1NpZ25hbChpbmplY3QoVFVJX1BBU1NXT1JEX1RFWFRTKSwge1xuICAgICAgICBpbml0aWFsVmFsdWU6IFsnJywgJyddIGFzIGNvbnN0LFxuICAgIH0pO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGVsID0gdHVpSW5qZWN0RWxlbWVudDxIVE1MSW5wdXRFbGVtZW50PigpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBzaXplID0gaW5qZWN0KFRVSV9URVhURklFTERfT1BUSU9OUykuc2l6ZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaGlkZGVuID0gc2lnbmFsKHRydWUpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB0ZXh0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICAgdGhpcy5oaWRkZW4oKSA/IHRoaXMudGV4dHMoKVswXSA6IHRoaXMudGV4dHMoKVsxXSxcbiAgICApO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGljb24gPSBjb21wdXRlZCgoc2l6ZSA9IHRoaXMuc2l6ZSgpKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb24gPSB0aGlzLmhpZGRlbigpID8gdGhpcy5vcHRpb25zLmljb25zLnNob3cgOiB0aGlzLm9wdGlvbnMuaWNvbnMuaGlkZTtcblxuICAgICAgICByZXR1cm4gdHVpSXNTdHJpbmcoaWNvbikgPyBpY29uIDogaWNvbihzaXplKTtcbiAgICB9KTtcbn1cbiJdfQ==