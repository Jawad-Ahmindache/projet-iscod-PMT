import { __decorate } from "tslib";
import { ChangeDetectorRef, Directive, inject, INJECTOR, Input, signal, TemplateRef, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiZonefreeScheduler } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiAsRectAccessor, tuiAsVehicle } from '@taiga-ui/core/classes';
import { tuiCheckFixedPosition } from '@taiga-ui/core/utils';
import { PolymorpheusComponent, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { Subject, throttleTime } from 'rxjs';
import { TuiDropdownDriverDirective } from './dropdown.driver';
import { TUI_DROPDOWN_COMPONENT } from './dropdown.providers';
import { TuiDropdownService } from './dropdown.service';
import { TuiDropdownPosition } from './dropdown-position.directive';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.driver";
import * as i2 from "./dropdown-position.directive";
class TuiDropdownDirective {
    constructor() {
        this.refresh$ = new Subject();
        this.service = inject(TuiDropdownService);
        this.cdr = inject(ChangeDetectorRef);
        this.sub = this.refresh$
            .pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed())
            .subscribe(() => {
            this.ref()?.changeDetectorRef.detectChanges();
            this.ref()?.changeDetectorRef.markForCheck();
        });
        this.el = tuiInjectElement();
        this.type = 'dropdown';
        this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR));
        this.ref = signal(null);
    }
    set tuiDropdown(content) {
        this.content =
            content instanceof TemplateRef
                ? new PolymorpheusTemplate(content, this.cdr)
                : content;
    }
    get position() {
        return tuiCheckFixedPosition(this.el) ? 'fixed' : 'absolute';
    }
    ngAfterViewChecked() {
        this.refresh$.next();
    }
    ngOnChanges() {
        if (!this.content) {
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
        const ref = this.ref();
        if (show && this.content && !ref) {
            this.ref.set(this.service.add(this.component));
        }
        else if (!show && ref) {
            this.ref.set(null);
            this.service.remove(ref);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownDirective, isStandalone: true, selector: "[tuiDropdown]:not(ng-container):not(ng-template)", inputs: { tuiDropdown: "tuiDropdown" }, providers: [
            tuiAsRectAccessor(TuiDropdownDirective),
            tuiAsVehicle(TuiDropdownDirective),
        ], exportAs: ["tuiDropdown"], usesOnChanges: true, hostDirectives: [{ directive: i1.TuiDropdownDriverDirective }, { directive: i2.TuiDropdownPosition, outputs: ["tuiDropdownDirectionChange", "tuiDropdownDirectionChange"] }], ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiDropdownDirective.prototype, "position", null);
export { TuiDropdownDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdown]:not(ng-container):not(ng-template)',
                    providers: [
                        tuiAsRectAccessor(TuiDropdownDirective),
                        tuiAsVehicle(TuiDropdownDirective),
                    ],
                    exportAs: 'tuiDropdown',
                    hostDirectives: [
                        TuiDropdownDriverDirective,
                        {
                            directive: TuiDropdownPosition,
                            outputs: ['tuiDropdownDirectionChange'],
                        },
                    ],
                }]
        }], propDecorators: { tuiDropdown: [{
                type: Input
            }], position: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL2Ryb3Bkb3duL2Ryb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNILGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsR0FDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUUvRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFMUQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXZFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRTNELE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25GLE9BQU8sRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzdELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7O0FBRWxFLE1BZ0JhLG9CQUFvQjtJQWhCakM7UUF5QnFCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxD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QUUsYUFBYTtvQkFDdkIsY0FBYyxFQUFFO3dCQUNaLDBCQUEwQjt3QkFDMUI7NEJBQ0ksU0FBUyxFQUFFLG1CQUFtQjs0QkFDOUIsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7eUJBQzFDO3FCQUNKO2lCQUNKOzhCQWdDYyxXQUFXO3NCQURyQixLQUFLO2dCQVNLLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWZ0ZXJWaWV3Q2hlY2tlZCwgQ29tcG9uZW50UmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIERpcmVjdGl2ZSxcbiAgICBpbmplY3QsXG4gICAgSU5KRUNUT1IsXG4gICAgSW5wdXQsXG4gICAgc2lnbmFsLFxuICAgIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge3R1aVpvbmVmcmVlU2NoZWR1bGVyfSBmcm9tICdAdGFpZ2EtdWkvY2RrL29ic2VydmFibGVzJztcbmltcG9ydCB0eXBlIHtUdWlDb250ZXh0fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3R5cGVzJztcbmltcG9ydCB7dHVpSW5qZWN0RWxlbWVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuaW1wb3J0IHt0dWlQdXJlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHR5cGUge1R1aVJlY3RBY2Nlc3NvciwgVHVpVmVoaWNsZX0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY2xhc3Nlcyc7XG5pbXBvcnQge3R1aUFzUmVjdEFjY2Vzc29yLCB0dWlBc1ZlaGljbGV9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHR5cGUge1R1aVBvcnRhbEl0ZW19IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB7dHVpQ2hlY2tGaXhlZFBvc2l0aW9ufSBmcm9tICdAdGFpZ2EtdWkvY29yZS91dGlscyc7XG5pbXBvcnQgdHlwZSB7UG9seW1vcnBoZXVzQ29udGVudH0gZnJvbSAnQHRhaWdhLXVpL3BvbHltb3JwaGV1cyc7XG5pbXBvcnQge1BvbHltb3JwaGV1c0NvbXBvbmVudCwgUG9seW1vcnBoZXVzVGVtcGxhdGV9IGZyb20gJ0B0YWlnYS11aS9wb2x5bW9ycGhldXMnO1xuaW1wb3J0IHtTdWJqZWN0LCB0aHJvdHRsZVRpbWV9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1R1aURyb3Bkb3duRHJpdmVyRGlyZWN0aXZlfSBmcm9tICcuL2Ryb3Bkb3duLmRyaXZlcic7XG5pbXBvcnQge1RVSV9EUk9QRE9XTl9DT01QT05FTlR9IGZyb20gJy4vZHJvcGRvd24ucHJvdmlkZXJzJztcbmltcG9ydCB7VHVpRHJvcGRvd25TZXJ2aWNlfSBmcm9tICcuL2Ryb3Bkb3duLnNlcnZpY2UnO1xuaW1wb3J0IHtUdWlEcm9wZG93blBvc2l0aW9ufSBmcm9tICcuL2Ryb3Bkb3duLXBvc2l0aW9uLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpRHJvcGRvd25dOm5vdChuZy1jb250YWluZXIpOm5vdChuZy10ZW1wbGF0ZSknLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB0dWlBc1JlY3RBY2Nlc3NvcihUdWlEcm9wZG93bkRpcmVjdGl2ZSksXG4gICAgICAgIHR1aUFzVmVoaWNsZShUdWlEcm9wZG93bkRpcmVjdGl2ZSksXG4gICAgXSxcbiAgICBleHBvcnRBczogJ3R1aURyb3Bkb3duJyxcbiAgICBob3N0RGlyZWN0aXZlczogW1xuICAgICAgICBUdWlEcm9wZG93bkRyaXZlckRpcmVjdGl2ZSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlOiBUdWlEcm9wZG93blBvc2l0aW9uLFxuICAgICAgICAgICAgb3V0cHV0czogWyd0dWlEcm9wZG93bkRpcmVjdGlvbkNoYW5nZSddLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aURyb3Bkb3duRGlyZWN0aXZlXG4gICAgaW1wbGVtZW50c1xuICAgICAgICBBZnRlclZpZXdDaGVja2VkLFxuICAgICAgICBPbkRlc3Ryb3ksXG4gICAgICAgIE9uQ2hhbmdlcyxcbiAgICAgICAgVHVpUG9ydGFsSXRlbSxcbiAgICAgICAgVHVpUmVjdEFjY2Vzc29yLFxuICAgICAgICBUdWlWZWhpY2xlXG57XG4gICAgcHJpdmF0ZSByZWFkb25seSByZWZyZXNoJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzZXJ2aWNlID0gaW5qZWN0KFR1aURyb3Bkb3duU2VydmljZSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN1YiA9IHRoaXMucmVmcmVzaCRcbiAgICAgICAgLnBpcGUodGhyb3R0bGVUaW1lKDAsIHR1aVpvbmVmcmVlU2NoZWR1bGVyKCkpLCB0YWtlVW50aWxEZXN0cm95ZWQoKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZigpPy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB0aGlzLnJlZigpPy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSAnZHJvcGRvd24nO1xuICAgIHB1YmxpYyByZWFkb25seSBjb21wb25lbnQgPSBuZXcgUG9seW1vcnBoZXVzQ29tcG9uZW50KFxuICAgICAgICBpbmplY3QoVFVJX0RST1BET1dOX0NPTVBPTkVOVCksXG4gICAgICAgIGluamVjdChJTkpFQ1RPUiksXG4gICAgKTtcblxuICAgIHB1YmxpYyByZWYgPSBzaWduYWw8Q29tcG9uZW50UmVmPHVua25vd24+IHwgbnVsbD4obnVsbCk7XG4gICAgcHVibGljIGNvbnRlbnQ6IFBvbHltb3JwaGV1c0NvbnRlbnQ8VHVpQ29udGV4dDwoKSA9PiB2b2lkPj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHVpRHJvcGRvd24oY29udGVudDogUG9seW1vcnBoZXVzQ29udGVudDxUdWlDb250ZXh0PCgpID0+IHZvaWQ+Pikge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPVxuICAgICAgICAgICAgY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmXG4gICAgICAgICAgICAgICAgPyBuZXcgUG9seW1vcnBoZXVzVGVtcGxhdGUoY29udGVudCwgdGhpcy5jZHIpXG4gICAgICAgICAgICAgICAgOiBjb250ZW50O1xuICAgIH1cblxuICAgIEB0dWlQdXJlXG4gICAgcHVibGljIGdldCBwb3NpdGlvbigpOiAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB7XG4gICAgICAgIHJldHVybiB0dWlDaGVja0ZpeGVkUG9zaXRpb24odGhpcy5lbCkgPyAnZml4ZWQnIDogJ2Fic29sdXRlJztcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZnJlc2gkLm5leHQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2xpZW50UmVjdCgpOiBET01SZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZShzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlZiA9IHRoaXMucmVmKCk7XG5cbiAgICAgICAgaWYgKHNob3cgJiYgdGhpcy5jb250ZW50ICYmICFyZWYpIHtcbiAgICAgICAgICAgIHRoaXMucmVmLnNldCh0aGlzLnNlcnZpY2UuYWRkKHRoaXMuY29tcG9uZW50KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXNob3cgJiYgcmVmKSB7XG4gICAgICAgICAgICB0aGlzLnJlZi5zZXQobnVsbCk7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UucmVtb3ZlKHJlZik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=