import { Directive, inject, INJECTOR, Input, signal } from '@angular/core';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiAsRectAccessor, tuiAsVehicle } from '@taiga-ui/core/classes';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { TUI_HINT_COMPONENT } from './hint.providers';
import { TuiHintService } from './hint.service';
import { TuiHintDriver } from './hint-driver.directive';
import { TuiHintHover } from './hint-hover.directive';
import { TUI_HINT_OPTIONS } from './hint-options.directive';
import { TuiHintPosition } from './hint-position.directive';
import * as i0 from "@angular/core";
import * as i1 from "./hint-driver.directive";
import * as i2 from "./hint-hover.directive";
import * as i3 from "./hint-position.directive";
class TuiHintDirective {
    constructor() {
        this.service = inject(TuiHintService);
        this.appearance = inject(TUI_HINT_OPTIONS).appearance;
        this.content = signal(null);
        this.component = inject((PolymorpheusComponent));
        this.el = tuiInjectElement();
        this.activeZone = inject(TuiActiveZone, { optional: true });
        this.type = 'hint';
    }
    set tuiHint(content) {
        this.content.set(content);
        if (!content) {
            this.toggle(false);
        }
    }
    ngOnDestroy() {
        this.toggle(false);
    }
    getClientRect() {
        return this.el.getBoundingClientRect();
    }
    toggle(show) {
        if (show && this.content()) {
            this.service.add(this);
        }
        else {
            this.service.remove(this);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintDirective, isStandalone: true, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: { context: ["tuiHintContext", "context"], appearance: ["tuiHintAppearance", "appearance"], tuiHint: "tuiHint" }, providers: [
            tuiAsRectAccessor(TuiHintDirective),
            tuiAsVehicle(TuiHintDirective),
            {
                provide: PolymorpheusComponent,
                deps: [TUI_HINT_COMPONENT, INJECTOR],
                useClass: PolymorpheusComponent,
            },
        ], hostDirectives: [{ directive: i1.TuiHintDriver }, { directive: i2.TuiHintHover, inputs: ["tuiHintHideDelay", "tuiHintHideDelay", "tuiHintShowDelay", "tuiHintShowDelay"] }, { directive: i3.TuiHintPosition, inputs: ["tuiHintDirection", "tuiHintDirection"], outputs: ["tuiHintDirectionChange", "tuiHintDirectionChange"] }], ngImport: i0 }); }
}
export { TuiHintDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHint]:not(ng-container):not(ng-template)',
                    providers: [
                        tuiAsRectAccessor(TuiHintDirective),
                        tuiAsVehicle(TuiHintDirective),
                        {
                            provide: PolymorpheusComponent,
                            deps: [TUI_HINT_COMPONENT, INJECTOR],
                            useClass: PolymorpheusComponent,
                        },
                    ],
                    hostDirectives: [
                        TuiHintDriver,
                        {
                            directive: TuiHintHover,
                            inputs: ['tuiHintHideDelay', 'tuiHintShowDelay'],
                        },
                        {
                            directive: TuiHintPosition,
                            inputs: ['tuiHintDirection'],
                            outputs: ['tuiHintDirectionChange'],
                        },
                    ],
                }]
        }], propDecorators: { context: [{
                type: Input,
                args: ['tuiHintContext']
            }], appearance: [{
                type: Input,
                args: ['tuiHintAppearance']
            }], tuiHint: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2RpcmVjdGl2ZXMvaGludC9oaW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBR3ZFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTdELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFFMUQsTUF5QmEsZ0JBQWdCO0lBekI3QjtRQTRCcUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQU0zQyxlQUFVLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxDQUFDO1FBRWpELFlBQU8sR0FBRyxNQUFNLENBQXlCLElBQUksQ0FBQyxDQUFDO1FBQy9DLGNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQSxxQkFBOEIsQ0FBQSxDQUFDLENBQUM7UUFDMUMsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN0RCxTQUFJLEdBQUcsTUFBTSxDQUFDO0tBMEJqQztJQXhCRyxJQUNXLE9BQU8sQ0FBQyxPQUErQjtRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU0sYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQWE7UUFDdkIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7K0dBeENRLGdCQUFnQjttR0FBaEIsZ0JBQWdCLG9OQXRCZDtZQUNQLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDO1lBQ25DLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztZQUM5QjtnQkFDSSxPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxxQkFBcUI7YUFDbEM7U0FDSjs7U0FjUSxnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkF6QjVCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSw4Q0FBOEM7b0JBQ3hELFNBQVMsRUFBRTt3QkFDUCxpQkFBaUIsa0JBQWtCO3dCQUNuQyxZQUFZLGtCQUFrQjt3QkFDOUI7NEJBQ0ksT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDOzRCQUNwQyxRQUFRLEVBQUUscUJBQXFCO3lCQUNsQztxQkFDSjtvQkFDRCxjQUFjLEVBQUU7d0JBQ1osYUFBYTt3QkFDYjs0QkFDSSxTQUFTLEVBQUUsWUFBWTs0QkFDdkIsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7eUJBQ25EO3dCQUNEOzRCQUNJLFNBQVMsRUFBRSxlQUFlOzRCQUMxQixNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs0QkFDNUIsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7eUJBQ3RDO3FCQUNKO2lCQUNKOzhCQU9VLE9BQU87c0JBRGIsS0FBSzt1QkFBQyxnQkFBZ0I7Z0JBSWhCLFVBQVU7c0JBRGhCLEtBQUs7dUJBQUMsbUJBQW1CO2dCQVVmLE9BQU87c0JBRGpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBpbmplY3QsIElOSkVDVE9SLCBJbnB1dCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHVpQWN0aXZlWm9uZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL2FjdGl2ZS16b25lJztcbmltcG9ydCB7dHVpSW5qZWN0RWxlbWVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuaW1wb3J0IHR5cGUge1R1aVJlY3RBY2Nlc3NvciwgVHVpVmVoaWNsZX0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY2xhc3Nlcyc7XG5pbXBvcnQge3R1aUFzUmVjdEFjY2Vzc29yLCB0dWlBc1ZlaGljbGV9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHR5cGUge1R1aVBvcnRhbEl0ZW19IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHtQb2x5bW9ycGhldXNDb250ZW50fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcbmltcG9ydCB7UG9seW1vcnBoZXVzQ29tcG9uZW50fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcblxuaW1wb3J0IHtUVUlfSElOVF9DT01QT05FTlR9IGZyb20gJy4vaGludC5wcm92aWRlcnMnO1xuaW1wb3J0IHtUdWlIaW50U2VydmljZX0gZnJvbSAnLi9oaW50LnNlcnZpY2UnO1xuaW1wb3J0IHtUdWlIaW50RHJpdmVyfSBmcm9tICcuL2hpbnQtZHJpdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1R1aUhpbnRIb3Zlcn0gZnJvbSAnLi9oaW50LWhvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1RVSV9ISU5UX09QVElPTlN9IGZyb20gJy4vaGludC1vcHRpb25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1R1aUhpbnRQb3NpdGlvbn0gZnJvbSAnLi9oaW50LXBvc2l0aW9uLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpSGludF06bm90KG5nLWNvbnRhaW5lcik6bm90KG5nLXRlbXBsYXRlKScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHR1aUFzUmVjdEFjY2Vzc29yKFR1aUhpbnREaXJlY3RpdmUpLFxuICAgICAgICB0dWlBc1ZlaGljbGUoVHVpSGludERpcmVjdGl2ZSksXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IFBvbHltb3JwaGV1c0NvbXBvbmVudCxcbiAgICAgICAgICAgIGRlcHM6IFtUVUlfSElOVF9DT01QT05FTlQsIElOSkVDVE9SXSxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBQb2x5bW9ycGhldXNDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0RGlyZWN0aXZlczogW1xuICAgICAgICBUdWlIaW50RHJpdmVyLFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3RpdmU6IFR1aUhpbnRIb3ZlcixcbiAgICAgICAgICAgIGlucHV0czogWyd0dWlIaW50SGlkZURlbGF5JywgJ3R1aUhpbnRTaG93RGVsYXknXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlOiBUdWlIaW50UG9zaXRpb24sXG4gICAgICAgICAgICBpbnB1dHM6IFsndHVpSGludERpcmVjdGlvbiddLFxuICAgICAgICAgICAgb3V0cHV0czogWyd0dWlIaW50RGlyZWN0aW9uQ2hhbmdlJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSGludERpcmVjdGl2ZTxDPlxuICAgIGltcGxlbWVudHMgT25EZXN0cm95LCBUdWlQb3J0YWxJdGVtPEM+LCBUdWlSZWN0QWNjZXNzb3IsIFR1aVZlaGljbGVcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2UgPSBpbmplY3QoVHVpSGludFNlcnZpY2UpO1xuXG4gICAgQElucHV0KCd0dWlIaW50Q29udGV4dCcpXG4gICAgcHVibGljIGNvbnRleHQ/OiBDO1xuXG4gICAgQElucHV0KCd0dWlIaW50QXBwZWFyYW5jZScpXG4gICAgcHVibGljIGFwcGVhcmFuY2UgPSBpbmplY3QoVFVJX0hJTlRfT1BUSU9OUykuYXBwZWFyYW5jZTtcblxuICAgIHB1YmxpYyBjb250ZW50ID0gc2lnbmFsPFBvbHltb3JwaGV1c0NvbnRlbnQ8Qz4+KG51bGwpO1xuICAgIHB1YmxpYyBjb21wb25lbnQgPSBpbmplY3QoUG9seW1vcnBoZXVzQ29tcG9uZW50PHVua25vd24+KTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG4gICAgcHVibGljIHJlYWRvbmx5IGFjdGl2ZVpvbmU/ID0gaW5qZWN0KFR1aUFjdGl2ZVpvbmUsIHtvcHRpb25hbDogdHJ1ZX0pO1xuICAgIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ2hpbnQnO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHR1aUhpbnQoY29udGVudDogUG9seW1vcnBoZXVzQ29udGVudDxDPikge1xuICAgICAgICB0aGlzLmNvbnRlbnQuc2V0KGNvbnRlbnQpO1xuXG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsaWVudFJlY3QoKTogRE9NUmVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoc2hvdyAmJiB0aGlzLmNvbnRlbnQoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLmFkZCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5yZW1vdmUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=