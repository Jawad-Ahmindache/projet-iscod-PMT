import { Directive, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MutationObserverService, WA_MUTATION_OBSERVER_INIT, } from '@ng-web-apis/mutation-observer';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { fromEvent, merge, Subject } from 'rxjs';
import { TUI_FLUID_TYPOGRAPHY_OPTIONS } from './fluid-typography.options';
import * as i0 from "@angular/core";
const STEP = 1 / 16;
class TuiFluidTypography {
    constructor() {
        // TODO: refactor to signal inputs after Angular update
        this.changes$ = new Subject();
        this.el = tuiInjectElement();
        this.options = inject(TUI_FLUID_TYPOGRAPHY_OPTIONS);
        this.sub = merge(this.changes$, inject(ResizeObserverService, { self: true }), inject(MutationObserverService, { self: true }), fromEvent(this.el, 'input'))
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => {
            const min = Number(this.tuiFluidTypography[0] || this.options.min);
            const max = Number(this.tuiFluidTypography[1] || this.options.max);
            for (let i = max; i >= min; i -= STEP) {
                this.el.style.fontSize = `${i}rem`;
                if (this.el.scrollWidth <= this.el.clientWidth) {
                    break;
                }
            }
        });
        this.tuiFluidTypography = '';
    }
    ngOnChanges() {
        this.changes$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFluidTypography, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiFluidTypography, isStandalone: true, selector: "[tuiFluidTypography]", inputs: { tuiFluidTypography: "tuiFluidTypography" }, host: { attributes: { "tuiFluidTypography": "" } }, providers: [
            ResizeObserverService,
            MutationObserverService,
            {
                provide: WA_MUTATION_OBSERVER_INIT,
                useValue: { characterData: true, subtree: true },
            },
        ], usesOnChanges: true, ngImport: i0 }); }
}
export { TuiFluidTypography };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFluidTypography, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiFluidTypography]',
                    providers: [
                        ResizeObserverService,
                        MutationObserverService,
                        {
                            provide: WA_MUTATION_OBSERVER_INIT,
                            useValue: { characterData: true, subtree: true },
                        },
                    ],
                    host: { tuiFluidTypography: '' },
                }]
        }], propDecorators: { tuiFluidTypography: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx1aWQtdHlwb2dyYXBoeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvZGlyZWN0aXZlcy9mbHVpZC10eXBvZ3JhcGh5L2ZsdWlkLXR5cG9ncmFwaHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLHlCQUF5QixHQUM1QixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFL0MsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sNEJBQTRCLENBQUM7O0FBRXhFLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFcEIsTUFhYSxrQkFBa0I7SUFiL0I7UUFjSSx1REFBdUQ7UUFDdEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFHLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRTdDLFFBQUcsR0FBRyxLQUFLLENBQzFCLElBQUksQ0FBQyxRQUFRLEVBQ2IsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLEVBQzNDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxFQUM3QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FDOUI7YUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQzthQUN6QyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ1osTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuRSxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUVuQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO29CQUM1QyxNQUFNO2lCQUNUO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUdBLHVCQUFrQixHQUE2QyxFQUFFLENBQUM7S0FLNUU7SUFIVSxXQUFXO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOytHQS9CUSxrQkFBa0I7bUdBQWxCLGtCQUFrQiw2S0FWaEI7WUFDUCxxQkFBcUI7WUFDckIsdUJBQXVCO1lBQ3ZCO2dCQUNJLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLFFBQVEsRUFBRSxFQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQzthQUNqRDtTQUNKOztTQUdRLGtCQUFrQjs0RkFBbEIsa0JBQWtCO2tCQWI5QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxTQUFTLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCOzRCQUNJLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsRUFBRSxFQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQzt5QkFDakQ7cUJBQ0o7b0JBQ0QsSUFBSSxFQUFFLEVBQUMsa0JBQWtCLEVBQUUsRUFBRSxFQUFDO2lCQUNqQzs4QkE0QlUsa0JBQWtCO3NCQUR4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge09uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2VVbnRpbERlc3Ryb3llZH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHtcbiAgICBNdXRhdGlvbk9ic2VydmVyU2VydmljZSxcbiAgICBXQV9NVVRBVElPTl9PQlNFUlZFUl9JTklULFxufSBmcm9tICdAbmctd2ViLWFwaXMvbXV0YXRpb24tb2JzZXJ2ZXInO1xuaW1wb3J0IHtSZXNpemVPYnNlcnZlclNlcnZpY2V9IGZyb20gJ0BuZy13ZWItYXBpcy9yZXNpemUtb2JzZXJ2ZXInO1xuaW1wb3J0IHt0dWlab25lZnJlZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9vYnNlcnZhYmxlcyc7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7ZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7VFVJX0ZMVUlEX1RZUE9HUkFQSFlfT1BUSU9OU30gZnJvbSAnLi9mbHVpZC10eXBvZ3JhcGh5Lm9wdGlvbnMnO1xuXG5jb25zdCBTVEVQID0gMSAvIDE2O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aUZsdWlkVHlwb2dyYXBoeV0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBSZXNpemVPYnNlcnZlclNlcnZpY2UsXG4gICAgICAgIE11dGF0aW9uT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBXQV9NVVRBVElPTl9PQlNFUlZFUl9JTklULFxuICAgICAgICAgICAgdXNlVmFsdWU6IHtjaGFyYWN0ZXJEYXRhOiB0cnVlLCBzdWJ0cmVlOiB0cnVlfSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGhvc3Q6IHt0dWlGbHVpZFR5cG9ncmFwaHk6ICcnfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpRmx1aWRUeXBvZ3JhcGh5IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICAvLyBUT0RPOiByZWZhY3RvciB0byBzaWduYWwgaW5wdXRzIGFmdGVyIEFuZ3VsYXIgdXBkYXRlXG4gICAgcHJpdmF0ZSByZWFkb25seSBjaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbCA9IHR1aUluamVjdEVsZW1lbnQoKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnMgPSBpbmplY3QoVFVJX0ZMVUlEX1RZUE9HUkFQSFlfT1BUSU9OUyk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3ViID0gbWVyZ2UoXG4gICAgICAgIHRoaXMuY2hhbmdlcyQsXG4gICAgICAgIGluamVjdChSZXNpemVPYnNlcnZlclNlcnZpY2UsIHtzZWxmOiB0cnVlfSksXG4gICAgICAgIGluamVjdChNdXRhdGlvbk9ic2VydmVyU2VydmljZSwge3NlbGY6IHRydWV9KSxcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWwsICdpbnB1dCcpLFxuICAgIClcbiAgICAgICAgLnBpcGUodHVpWm9uZWZyZWUoKSwgdGFrZVVudGlsRGVzdHJveWVkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWluID0gTnVtYmVyKHRoaXMudHVpRmx1aWRUeXBvZ3JhcGh5WzBdIHx8IHRoaXMub3B0aW9ucy5taW4pO1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gTnVtYmVyKHRoaXMudHVpRmx1aWRUeXBvZ3JhcGh5WzFdIHx8IHRoaXMub3B0aW9ucy5tYXgpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbWF4OyBpID49IG1pbjsgaSAtPSBTVEVQKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5mb250U2l6ZSA9IGAke2l9cmVtYDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsLnNjcm9sbFdpZHRoIDw9IHRoaXMuZWwuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR1aUZsdWlkVHlwb2dyYXBoeTogcmVhZG9ubHkgW21pbjogbnVtYmVyLCBtYXg6IG51bWJlcl0gfCAnJyA9ICcnO1xuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5nZXMkLm5leHQoKTtcbiAgICB9XG59XG4iXX0=