import { ChangeDetectionStrategy, Component, Directive, inject, ViewEncapsulation, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiTextfieldComponent } from '@taiga-ui/core/components/textfield';
import { tuiAppearanceOptionsProvider, tuiAppearanceState, TuiWithAppearance, } from '@taiga-ui/core/directives/appearance';
import { TUI_HINT_OPTIONS, TuiHintDescribe, TuiHintDirective, TuiHintHover, } from '@taiga-ui/core/directives/hint';
import { TUI_ICON_START } from '@taiga-ui/core/tokens';
import { map } from 'rxjs';
import { TUI_TOOLTIP_OPTIONS } from './tooltip.options';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/appearance";
import * as i2 from "@taiga-ui/core/directives/hint";
class TuiTooltipStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTooltipStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTooltipStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-tooltip" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip]{border-width:.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover) and (pointer: fine){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTooltipStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-tooltip',
                    }, styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip]{border-width:.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover) and (pointer: fine){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"] }]
        }] });
class TuiTooltip {
    constructor() {
        this.textfield = inject(TuiTextfieldComponent, { optional: true });
        this.isMobile = inject(TUI_IS_MOBILE);
        this.describe = inject(TuiHintDescribe);
        this.driver = inject(TuiHintHover);
        this.nothing = tuiWithStyles(TuiTooltipStyles);
        this.state = tuiAppearanceState(toSignal(inject(TuiHintHover).pipe(map((hover) => (hover ? 'hover' : null)), tuiWatch()), { initialValue: null }));
    }
    ngDoCheck() {
        if (this.textfield?.id) {
            this.describe.tuiHintDescribe = this.textfield.id;
        }
    }
    onClick(event) {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            this.driver.toggle();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTooltip, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTooltip, isStandalone: true, selector: "tui-icon[tuiTooltip]", host: { attributes: { "tuiTooltip": "" }, listeners: { "click.prevent": "0", "mousedown": "onClick($event)" } }, providers: [
            tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS),
            {
                provide: TUI_ICON_START,
                useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon,
            },
        ], hostDirectives: [{ directive: i1.TuiWithAppearance }, { directive: i2.TuiHintDescribe, inputs: ["tuiHintDescribe", "tuiTooltipDescribe"] }, { directive: i2.TuiHintDirective, inputs: ["tuiHint", "tuiTooltip", "tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"] }], ngImport: i0 }); }
}
export { TuiTooltip };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTooltip, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-icon[tuiTooltip]',
                    providers: [
                        tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS),
                        {
                            provide: TUI_ICON_START,
                            useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon,
                        },
                    ],
                    hostDirectives: [
                        TuiWithAppearance,
                        {
                            directive: TuiHintDescribe,
                            inputs: ['tuiHintDescribe: tuiTooltipDescribe'],
                        },
                        {
                            directive: TuiHintDirective,
                            inputs: ['tuiHint: tuiTooltip', 'tuiHintAppearance', 'tuiHintContext'],
                        },
                    ],
                    host: {
                        tuiTooltip: '',
                        '(click.prevent)': '0',
                        '(mousedown)': 'onClick($event)',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04saUJBQWlCLEdBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQ0gsNEJBQTRCLEVBQzVCLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDcEIsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5QyxPQUFPLEVBQ0gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsWUFBWSxHQUNmLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFekIsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFdEQsTUFVTSxnQkFBZ0I7K0dBQWhCLGdCQUFnQjttR0FBaEIsZ0JBQWdCLGlIQVJSLEVBQUU7OzRGQVFWLGdCQUFnQjtrQkFWckIsU0FBUztpQ0FDTSxJQUFJLFlBQ04sRUFBRSxpQkFFRyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNGLEtBQUssRUFBRSxhQUFhO3FCQUN2Qjs7QUFJTCxNQTRCYSxVQUFVO0lBNUJ2QjtRQTZCcUIsY0FBUyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVELGFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNuQyxXQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTVCLFlBQU8sR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxVQUFLLEdBQW9CLGtCQUFrQixDQUMxRCxRQUFRLENBQ0osTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDckIsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUN4QyxRQUFRLEVBQUUsQ0FDYixFQUNELEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUN2QixDQUNKLENBQUM7S0FnQkw7SUFkVSxTQUFTO1FBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFUyxPQUFPLENBQUMsS0FBaUI7UUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7K0dBOUJRLFVBQVU7bUdBQVYsVUFBVSxvTEF6QlI7WUFDUCw0QkFBNEIsQ0FBQyxtQkFBbUIsQ0FBQztZQUNqRDtnQkFDSSxPQUFPLEVBQUUsY0FBYztnQkFDdkIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUNiLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJO2FBQ3hFO1NBQ0o7O1NBa0JRLFVBQVU7NEZBQVYsVUFBVTtrQkE1QnRCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFNBQVMsRUFBRTt3QkFDUCw0QkFBNEIsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDakQ7NEJBQ0ksT0FBTyxFQUFFLGNBQWM7NEJBQ3ZCLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FDYixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSTt5QkFDeEU7cUJBQ0o7b0JBQ0QsY0FBYyxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakI7NEJBQ0ksU0FBUyxFQUFFLGVBQWU7NEJBQzFCLE1BQU0sRUFBRSxDQUFDLHFDQUFxQyxDQUFDO3lCQUNsRDt3QkFDRDs0QkFDSSxTQUFTLEVBQUUsZ0JBQWdCOzRCQUMzQixNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQzt5QkFDekU7cUJBQ0o7b0JBQ0QsSUFBSSxFQUFFO3dCQUNGLFVBQVUsRUFBRSxFQUFFO3dCQUNkLGlCQUFpQixFQUFFLEdBQUc7d0JBQ3RCLGFBQWEsRUFBRSxpQkFBaUI7cUJBQ25DO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0RvQ2hlY2ssIFNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgaW5qZWN0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7dHVpV2F0Y2h9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHtUVUlfSVNfTU9CSUxFfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3Rva2Vucyc7XG5pbXBvcnQge3R1aVdpdGhTdHlsZXN9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQge1R1aVRleHRmaWVsZENvbXBvbmVudH0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy90ZXh0ZmllbGQnO1xuaW1wb3J0IHtcbiAgICB0dWlBcHBlYXJhbmNlT3B0aW9uc1Byb3ZpZGVyLFxuICAgIHR1aUFwcGVhcmFuY2VTdGF0ZSxcbiAgICBUdWlXaXRoQXBwZWFyYW5jZSxcbn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvZGlyZWN0aXZlcy9hcHBlYXJhbmNlJztcbmltcG9ydCB7XG4gICAgVFVJX0hJTlRfT1BUSU9OUyxcbiAgICBUdWlIaW50RGVzY3JpYmUsXG4gICAgVHVpSGludERpcmVjdGl2ZSxcbiAgICBUdWlIaW50SG92ZXIsXG59IGZyb20gJ0B0YWlnYS11aS9jb3JlL2RpcmVjdGl2ZXMvaGludCc7XG5pbXBvcnQge1RVSV9JQ09OX1NUQVJUfSBmcm9tICdAdGFpZ2EtdWkvY29yZS90b2tlbnMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1RVSV9UT09MVElQX09QVElPTlN9IGZyb20gJy4vdG9vbHRpcC5vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9vbHRpcC5zdHlsZS5sZXNzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAndHVpLXRvb2x0aXAnLFxuICAgIH0sXG59KVxuY2xhc3MgVHVpVG9vbHRpcFN0eWxlcyB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAndHVpLWljb25bdHVpVG9vbHRpcF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB0dWlBcHBlYXJhbmNlT3B0aW9uc1Byb3ZpZGVyKFRVSV9UT09MVElQX09QVElPTlMpLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBUVUlfSUNPTl9TVEFSVCxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6ICgpID0+XG4gICAgICAgICAgICAgICAgaW5qZWN0KFRVSV9UT09MVElQX09QVElPTlMpLmljb24gfHwgaW5qZWN0KFRVSV9ISU5UX09QVElPTlMpLmljb24sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0RGlyZWN0aXZlczogW1xuICAgICAgICBUdWlXaXRoQXBwZWFyYW5jZSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlOiBUdWlIaW50RGVzY3JpYmUsXG4gICAgICAgICAgICBpbnB1dHM6IFsndHVpSGludERlc2NyaWJlOiB0dWlUb29sdGlwRGVzY3JpYmUnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlOiBUdWlIaW50RGlyZWN0aXZlLFxuICAgICAgICAgICAgaW5wdXRzOiBbJ3R1aUhpbnQ6IHR1aVRvb2x0aXAnLCAndHVpSGludEFwcGVhcmFuY2UnLCAndHVpSGludENvbnRleHQnXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgdHVpVG9vbHRpcDogJycsXG4gICAgICAgICcoY2xpY2sucHJldmVudCknOiAnMCcsXG4gICAgICAgICcobW91c2Vkb3duKSc6ICdvbkNsaWNrKCRldmVudCknLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aVRvb2x0aXAgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHRmaWVsZCA9IGluamVjdChUdWlUZXh0ZmllbGRDb21wb25lbnQsIHtvcHRpb25hbDogdHJ1ZX0pO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNNb2JpbGUgPSBpbmplY3QoVFVJX0lTX01PQklMRSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXNjcmliZSA9IGluamVjdChUdWlIaW50RGVzY3JpYmUpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZHJpdmVyID0gaW5qZWN0KFR1aUhpbnRIb3Zlcik7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbm90aGluZyA9IHR1aVdpdGhTdHlsZXMoVHVpVG9vbHRpcFN0eWxlcyk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0YXRlOiBTaWduYWw8dW5rbm93bj4gPSB0dWlBcHBlYXJhbmNlU3RhdGUoXG4gICAgICAgIHRvU2lnbmFsKFxuICAgICAgICAgICAgaW5qZWN0KFR1aUhpbnRIb3ZlcikucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoKGhvdmVyKSA9PiAoaG92ZXIgPyAnaG92ZXInIDogbnVsbCkpLFxuICAgICAgICAgICAgICAgIHR1aVdhdGNoKCksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAge2luaXRpYWxWYWx1ZTogbnVsbH0sXG4gICAgICAgICksXG4gICAgKTtcblxuICAgIHB1YmxpYyBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRleHRmaWVsZD8uaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpYmUudHVpSGludERlc2NyaWJlID0gdGhpcy50ZXh0ZmllbGQuaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kcml2ZXIudG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=