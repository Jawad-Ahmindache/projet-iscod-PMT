import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_BUTTON_OPTIONS } from '@taiga-ui/core/components/button';
import { TuiLoader } from '@taiga-ui/core/components/loader';
import { tuiSizeBigger } from '@taiga-ui/core/utils/miscellaneous';
import * as i0 from "@angular/core";
class TuiButtonLoading {
    constructor() {
        this.options = inject(TUI_BUTTON_OPTIONS);
        this.size = this.options.size;
        this.loading = false;
    }
    get loaderSize() {
        return tuiSizeBigger(this.size) ? 'm' : 's';
    }
    get label() {
        return tuiIsString(this.loading) ? this.loading : '';
    }
    onClick(event) {
        if (this.loading) {
            event.stopPropagation();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonLoading, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiButtonLoading, isStandalone: true, selector: "[tuiButton][loading],[tuiIconButton][loading]", inputs: { size: "size", loading: "loading" }, host: { listeners: { "click.capture": "onClick($event)" }, properties: { "attr.aria-disabled": "loading", "class._loading": "loading" } }, ngImport: i0, template: `
        <ng-content />
        <tui-loader
            aria-live="polite"
            role="status"
            class="t-loader"
            [inheritColor]="true"
            [showLoader]="!!loading"
            [size]="loaderSize"
            [textContent]="label"
        />
    `, isInline: true, dependencies: [{ kind: "component", type: TuiLoader, selector: "tui-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiButtonLoading };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiButtonLoading, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: '[tuiButton][loading],[tuiIconButton][loading]',
                    imports: [TuiLoader],
                    template: `
        <ng-content />
        <tui-loader
            aria-live="polite"
            role="status"
            class="t-loader"
            [inheritColor]="true"
            [showLoader]="!!loading"
            [size]="loaderSize"
            [textContent]="label"
        />
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[attr.aria-disabled]': 'loading',
                        '[class._loading]': 'loading',
                        '(click.capture)': 'onClick($event)',
                    },
                }]
        }], propDecorators: { size: [{
                type: Input
            }], loading: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxvYWRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvYnV0dG9uLWxvYWRpbmcvYnV0dG9uLWxvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDOUQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBRTNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFFakUsTUF1QmEsZ0JBQWdCO0lBdkI3QjtRQXdCcUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRy9DLFNBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUd6QixZQUFPLEdBQTRCLEtBQUssQ0FBQztLQWVuRDtJQWJHLElBQWMsVUFBVTtRQUNwQixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2hELENBQUM7SUFFRCxJQUFjLEtBQUs7UUFDZixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRVMsT0FBTyxDQUFDLEtBQWlCO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMzQjtJQUNMLENBQUM7K0dBckJRLGdCQUFnQjttR0FBaEIsZ0JBQWdCLGtTQW5CZjs7Ozs7Ozs7Ozs7S0FXVCw0REFaUyxTQUFTOztTQW9CVixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkF2QjVCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSwrQ0FBK0M7b0JBQ3pELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztLQVdUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0Ysc0JBQXNCLEVBQUUsU0FBUzt3QkFDakMsa0JBQWtCLEVBQUUsU0FBUzt3QkFDN0IsaUJBQWlCLEVBQUUsaUJBQWlCO3FCQUN2QztpQkFDSjs4QkFLVSxJQUFJO3NCQURWLEtBQUs7Z0JBSUMsT0FBTztzQkFEYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBpbmplY3QsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpSXNTdHJpbmd9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQge1RVSV9CVVRUT05fT1BUSU9OU30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IHtUdWlMb2FkZXJ9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvbG9hZGVyJztcbmltcG9ydCB0eXBlIHtUdWlTaXplU30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHt0dWlTaXplQmlnZ2VyfSBmcm9tICdAdGFpZ2EtdWkvY29yZS91dGlscy9taXNjZWxsYW5lb3VzJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlCdXR0b25dW2xvYWRpbmddLFt0dWlJY29uQnV0dG9uXVtsb2FkaW5nXScsXG4gICAgaW1wb3J0czogW1R1aUxvYWRlcl0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQgLz5cbiAgICAgICAgPHR1aS1sb2FkZXJcbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgICAgIGNsYXNzPVwidC1sb2FkZXJcIlxuICAgICAgICAgICAgW2luaGVyaXRDb2xvcl09XCJ0cnVlXCJcbiAgICAgICAgICAgIFtzaG93TG9hZGVyXT1cIiEhbG9hZGluZ1wiXG4gICAgICAgICAgICBbc2l6ZV09XCJsb2FkZXJTaXplXCJcbiAgICAgICAgICAgIFt0ZXh0Q29udGVudF09XCJsYWJlbFwiXG4gICAgICAgIC8+XG4gICAgYCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdsb2FkaW5nJyxcbiAgICAgICAgJ1tjbGFzcy5fbG9hZGluZ10nOiAnbG9hZGluZycsXG4gICAgICAgICcoY2xpY2suY2FwdHVyZSknOiAnb25DbGljaygkZXZlbnQpJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlCdXR0b25Mb2FkaW5nIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnMgPSBpbmplY3QoVFVJX0JVVFRPTl9PUFRJT05TKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGxvYWRlclNpemUoKTogVHVpU2l6ZVMge1xuICAgICAgICByZXR1cm4gdHVpU2l6ZUJpZ2dlcih0aGlzLnNpemUpID8gJ20nIDogJ3MnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHR1aUlzU3RyaW5nKHRoaXMubG9hZGluZykgPyB0aGlzLmxvYWRpbmcgOiAnJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==