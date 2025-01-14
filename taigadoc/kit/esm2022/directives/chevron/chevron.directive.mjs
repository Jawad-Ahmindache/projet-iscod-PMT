import { ChangeDetectionStrategy, Component, Directive, effect, inject, Input, signal, ViewEncapsulation, } from '@angular/core';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiCreateToken, tuiProvide, tuiWithStyles, } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiDropdownDirective } from '@taiga-ui/core/directives/dropdown';
import { TUI_ICON_END } from '@taiga-ui/core/tokens';
import * as i0 from "@angular/core";
export const TUI_CHEVRON = tuiCreateToken('@tui.chevron-down');
class TuiChevronStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChevronStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiChevronStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-chevron" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChevronStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'tui-chevron' }, styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"] }]
        }] });
class TuiChevron {
    constructor() {
        this.el = tuiInjectElement();
        this.dropdown = inject(TuiDropdownDirective, { optional: true });
        this.nothing = tuiWithStyles(TuiChevronStyles);
        this.toggle = effect(() => this.el.classList.toggle('_chevron-rotated', this.chevron() || (this.chevron() === '' && !!this.dropdown?.ref())));
        // TODO: refactor to signal inputs after Angular update
        this.chevron = signal('');
    }
    set tuiChevron(chevron) {
        this.chevron.set(chevron);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChevron, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiChevron, isStandalone: true, selector: "[tuiChevron]", inputs: { tuiChevron: "tuiChevron" }, host: { attributes: { "tuiChevron": "" } }, providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)], ngImport: i0 }); }
}
export { TuiChevron };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChevron, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiChevron]',
                    providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
                    host: { tuiChevron: '' },
                }]
        }], propDecorators: { tuiChevron: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hldnJvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvZGlyZWN0aXZlcy9jaGV2cm9uL2NoZXZyb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEdBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFDSCxjQUFjLEVBQ2QsVUFBVSxFQUNWLGFBQWEsR0FDaEIsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7O0FBRW5ELE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUUvRCxNQVFNLGdCQUFnQjsrR0FBaEIsZ0JBQWdCO21HQUFoQixnQkFBZ0IsaUhBTlIsRUFBRTs7NEZBTVYsZ0JBQWdCO2tCQVJyQixTQUFTO2lDQUNNLElBQUksWUFDTixFQUFFLGlCQUVHLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sUUFDekMsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFDOztBQUloQyxNQU1hLFVBQVU7SUFOdkI7UUFPcUIsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBRXhELFlBQU8sR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMxQyxXQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUNwQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQ3BCLGtCQUFrQixFQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQ3RFLENBQ0osQ0FBQztRQUVGLHVEQUF1RDtRQUN2QyxZQUFPLEdBQUcsTUFBTSxDQUFlLEVBQUUsQ0FBQyxDQUFDO0tBTXREO0lBSkcsSUFDVyxVQUFVLENBQUMsT0FBcUI7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzsrR0FsQlEsVUFBVTttR0FBVixVQUFVLDZJQUhSLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQzs7U0FHekMsVUFBVTs0RkFBVixVQUFVO2tCQU50QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDbEQsSUFBSSxFQUFFLEVBQUMsVUFBVSxFQUFFLEVBQUUsRUFBQztpQkFDekI7OEJBaUJjLFVBQVU7c0JBRHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgZWZmZWN0LFxuICAgIGluamVjdCxcbiAgICBJbnB1dCxcbiAgICBzaWduYWwsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge1xuICAgIHR1aUNyZWF0ZVRva2VuLFxuICAgIHR1aVByb3ZpZGUsXG4gICAgdHVpV2l0aFN0eWxlcyxcbn0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB7VHVpRHJvcGRvd25EaXJlY3RpdmV9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2RpcmVjdGl2ZXMvZHJvcGRvd24nO1xuaW1wb3J0IHtUVUlfSUNPTl9FTkR9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5cbmV4cG9ydCBjb25zdCBUVUlfQ0hFVlJPTiA9IHR1aUNyZWF0ZVRva2VuKCdAdHVpLmNoZXZyb24tZG93bicpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jaGV2cm9uLnN0eWxlLmxlc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtjbGFzczogJ3R1aS1jaGV2cm9uJ30sXG59KVxuY2xhc3MgVHVpQ2hldnJvblN0eWxlcyB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aUNoZXZyb25dJyxcbiAgICBwcm92aWRlcnM6IFt0dWlQcm92aWRlKFRVSV9JQ09OX0VORCwgVFVJX0NIRVZST04pXSxcbiAgICBob3N0OiB7dHVpQ2hldnJvbjogJyd9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlDaGV2cm9uIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsID0gdHVpSW5qZWN0RWxlbWVudCgpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZHJvcGRvd24gPSBpbmplY3QoVHVpRHJvcGRvd25EaXJlY3RpdmUsIHtvcHRpb25hbDogdHJ1ZX0pO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG5vdGhpbmcgPSB0dWlXaXRoU3R5bGVzKFR1aUNoZXZyb25TdHlsZXMpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB0b2dnbGUgPSBlZmZlY3QoKCkgPT5cbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgICAgICAgJ19jaGV2cm9uLXJvdGF0ZWQnLFxuICAgICAgICAgICAgdGhpcy5jaGV2cm9uKCkgfHwgKHRoaXMuY2hldnJvbigpID09PSAnJyAmJiAhIXRoaXMuZHJvcGRvd24/LnJlZigpKSxcbiAgICAgICAgKSxcbiAgICApO1xuXG4gICAgLy8gVE9ETzogcmVmYWN0b3IgdG8gc2lnbmFsIGlucHV0cyBhZnRlciBBbmd1bGFyIHVwZGF0ZVxuICAgIHB1YmxpYyByZWFkb25seSBjaGV2cm9uID0gc2lnbmFsPGJvb2xlYW4gfCAnJz4oJycpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHR1aUNoZXZyb24oY2hldnJvbjogYm9vbGVhbiB8ICcnKSB7XG4gICAgICAgIHRoaXMuY2hldnJvbi5zZXQoY2hldnJvbik7XG4gICAgfVxufVxuIl19