import { __decorate } from "tslib";
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiLink } from '@taiga-ui/core/components/link';
import { TuiBreakpointService } from '@taiga-ui/core/services';
import { TUI_INPUT_FILE_TEXTS } from '@taiga-ui/kit/tokens';
import { injectContext } from '@taiga-ui/polymorpheus';
import { combineLatest, map, of } from 'rxjs';
import { TuiInputFiles } from './input-files.component';
import * as i0 from "@angular/core";
class TuiInputFilesContent {
    constructor() {
        this.breakpoint$ = inject(TuiBreakpointService);
        this.text$ = inject(TUI_INPUT_FILE_TEXTS);
        this.context = injectContext();
        this.component = inject(TuiInputFiles);
    }
    get link$() {
        return this.computeLink$(this.context.$implicit, !!this.component.input?.input.multiple);
    }
    get label$() {
        return this.computeLabel$(this.context.$implicit, !!this.component.input?.input.multiple);
    }
    computeLink$(fileDragged, multiple) {
        return fileDragged
            ? of('')
            : this.text$.pipe(map((t) => (multiple ? t.defaultLinkMultiple : t.defaultLinkSingle)));
    }
    computeLabel$(fileDragged, multiple) {
        return fileDragged
            ? combineLatest([this.breakpoint$, this.text$]).pipe(map(([breakpoint, text]) => {
                if (breakpoint === 'mobile') {
                    return '';
                }
                return multiple ? text.dropMultiple : text.drop;
            }))
            : combineLatest([this.breakpoint$, this.text$]).pipe(map(([breakpoint, text]) => {
                if (breakpoint === 'mobile') {
                    return '';
                }
                return multiple
                    ? text.defaultLabelMultiple
                    : text.defaultLabelSingle;
            }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesContent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputFilesContent, isStandalone: true, selector: "ng-component", ngImport: i0, template: `
        <a tuiLink>{{ link$ | async }}</a>
        {{ label$ | async }}
    `, isInline: true, dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: TuiLink, selector: "a[tuiLink], button[tuiLink]", inputs: ["pseudo"] }], changeDetection: i0.ChangeDetectionStrategy.Default }); }
}
__decorate([
    tuiPure
], TuiInputFilesContent.prototype, "computeLink$", null);
__decorate([
    tuiPure
], TuiInputFilesContent.prototype, "computeLabel$", null);
export { TuiInputFilesContent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesContent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    imports: [AsyncPipe, TuiLink],
                    template: `
        <a tuiLink>{{ link$ | async }}</a>
        {{ label$ | async }}
    `,
                    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
                    changeDetection: ChangeDetectionStrategy.Default,
                }]
        }], propDecorators: { computeLink$: [], computeLabel$: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZXMuY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL2ZpbGVzL2lucHV0LWZpbGVzL2lucHV0LWZpbGVzLmNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRCxPQUFPLEVBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlCQUF5QixDQUFDOztBQUV0RCxNQVVhLG9CQUFvQjtJQVZqQztRQVdxQixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNDLFVBQUssR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNyQyxZQUFPLEdBQUcsYUFBYSxFQUF1QixDQUFDO1FBQy9DLGNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7S0FpRHREO0lBL0NHLElBQWMsS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUN6QyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQWMsTUFBTTtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FDekMsQ0FBQztJQUNOLENBQUM7SUFHTyxZQUFZLENBQUMsV0FBb0IsRUFBRSxRQUFpQjtRQUN4RCxPQUFPLFdBQVc7WUFDZCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNSLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDWCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQ3ZFLENBQUM7SUFDWixDQUFDO0lBR08sYUFBYSxDQUFDLFdBQW9CLEVBQUUsUUFBaUI7UUFDekQsT0FBTyxXQUFXO1lBQ2QsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUN2QixJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7b0JBQ3pCLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2dCQUVELE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUNMO1lBQ0gsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM5QyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUN2QixJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7b0JBQ3pCLE9BQU8sRUFBRSxDQUFDO2lCQUNiO2dCQUVELE9BQU8sUUFBUTtvQkFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQjtvQkFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ1osQ0FBQzsrR0FwRFEsb0JBQW9CO21HQUFwQixvQkFBb0Isd0VBUG5COzs7S0FHVCx1REFKUyxTQUFTLDhDQUFFLE9BQU87O0FBNkJwQjtJQURQLE9BQU87d0RBT1A7QUFHTztJQURQLE9BQU87eURBdUJQO1NBcERRLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQVZoQyxTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO29CQUM3QixRQUFRLEVBQUU7OztLQUdUO29CQUNELHFGQUFxRjtvQkFDckYsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87aUJBQ25EOzhCQXNCVyxZQUFZLE1BU1osYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1R1aUNvbnRleHR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHt0dWlQdXJlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtUdWlMaW5rfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IHtUdWlCcmVha3BvaW50U2VydmljZX0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvc2VydmljZXMnO1xuaW1wb3J0IHtUVUlfSU5QVVRfRklMRV9URVhUU30gZnJvbSAnQHRhaWdhLXVpL2tpdC90b2tlbnMnO1xuaW1wb3J0IHtpbmplY3RDb250ZXh0fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcbmltcG9ydCB0eXBlIHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgbWFwLCBvZn0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7VHVpSW5wdXRGaWxlc30gZnJvbSAnLi9pbnB1dC1maWxlcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGltcG9ydHM6IFtBc3luY1BpcGUsIFR1aUxpbmtdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhIHR1aUxpbms+e3sgbGluayQgfCBhc3luYyB9fTwvYT5cbiAgICAgICAge3sgbGFiZWwkIHwgYXN5bmMgfX1cbiAgICBgLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvcHJlZmVyLW9uLXB1c2gtY29tcG9uZW50LWNoYW5nZS1kZXRlY3Rpb25cbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG59KVxuZXhwb3J0IGNsYXNzIFR1aUlucHV0RmlsZXNDb250ZW50IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJyZWFrcG9pbnQkID0gaW5qZWN0KFR1aUJyZWFrcG9pbnRTZXJ2aWNlKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHQkID0gaW5qZWN0KFRVSV9JTlBVVF9GSUxFX1RFWFRTKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQgPSBpbmplY3RDb250ZXh0PFR1aUNvbnRleHQ8Ym9vbGVhbj4+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnQgPSBpbmplY3QoVHVpSW5wdXRGaWxlcyk7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGxpbmskKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVMaW5rJChcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC4kaW1wbGljaXQsXG4gICAgICAgICAgICAhIXRoaXMuY29tcG9uZW50LmlucHV0Py5pbnB1dC5tdWx0aXBsZSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGxhYmVsJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wdXRlTGFiZWwkKFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LiRpbXBsaWNpdCxcbiAgICAgICAgICAgICEhdGhpcy5jb21wb25lbnQuaW5wdXQ/LmlucHV0Lm11bHRpcGxlLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIEB0dWlQdXJlXG4gICAgcHJpdmF0ZSBjb21wdXRlTGluayQoZmlsZURyYWdnZWQ6IGJvb2xlYW4sIG11bHRpcGxlOiBib29sZWFuKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIGZpbGVEcmFnZ2VkXG4gICAgICAgICAgICA/IG9mKCcnKVxuICAgICAgICAgICAgOiB0aGlzLnRleHQkLnBpcGUoXG4gICAgICAgICAgICAgICAgICBtYXAoKHQpID0+IChtdWx0aXBsZSA/IHQuZGVmYXVsdExpbmtNdWx0aXBsZSA6IHQuZGVmYXVsdExpbmtTaW5nbGUpKSxcbiAgICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBAdHVpUHVyZVxuICAgIHByaXZhdGUgY29tcHV0ZUxhYmVsJChmaWxlRHJhZ2dlZDogYm9vbGVhbiwgbXVsdGlwbGU6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gZmlsZURyYWdnZWRcbiAgICAgICAgICAgID8gY29tYmluZUxhdGVzdChbdGhpcy5icmVha3BvaW50JCwgdGhpcy50ZXh0JF0pLnBpcGUoXG4gICAgICAgICAgICAgICAgICBtYXAoKFticmVha3BvaW50LCB0ZXh0XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChicmVha3BvaW50ID09PSAnbW9iaWxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG11bHRpcGxlID8gdGV4dC5kcm9wTXVsdGlwbGUgOiB0ZXh0LmRyb3A7XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBjb21iaW5lTGF0ZXN0KFt0aGlzLmJyZWFrcG9pbnQkLCB0aGlzLnRleHQkXSkucGlwZShcbiAgICAgICAgICAgICAgICAgIG1hcCgoW2JyZWFrcG9pbnQsIHRleHRdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrcG9pbnQgPT09ICdtb2JpbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0ZXh0LmRlZmF1bHRMYWJlbE11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdGV4dC5kZWZhdWx0TGFiZWxTaW5nbGU7XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=