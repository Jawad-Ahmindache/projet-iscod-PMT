import { Directive, inject, INJECTOR, Input, TemplateRef } from '@angular/core';
import { TuiPopupService } from '@taiga-ui/core/directives/popup';
import { PolymorpheusComponent, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { TuiSidebarComponent } from './sidebar.component';
import * as i0 from "@angular/core";
/**
 * @deprecated use {@link TuiDrawer} instead
 */
class TuiSidebarDirective extends PolymorpheusTemplate {
    constructor() {
        super(...arguments);
        this.injector = inject(INJECTOR);
        this.service = inject(TuiPopupService);
        this.component = new PolymorpheusComponent(TuiSidebarComponent, this.injector);
        this.sidebarRef = null;
        this.direction = 'left';
        this.autoWidth = false;
        this.content = inject((TemplateRef));
    }
    set tuiSidebar(open) {
        if (open) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    ngOnDestroy() {
        this.hide();
    }
    show() {
        if (this.sidebarRef !== null) {
            return;
        }
        this.sidebarRef = this.service.add(this.component);
        this.sidebarRef.changeDetectorRef.detectChanges();
    }
    hide() {
        if (this.sidebarRef === null) {
            return;
        }
        this.service.remove(this.sidebarRef);
        this.sidebarRef = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSidebarDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiSidebarDirective, isStandalone: true, selector: "[tuiSidebar]", inputs: { direction: ["tuiSidebarDirection", "direction"], autoWidth: ["tuiSidebarAutoWidth", "autoWidth"], tuiSidebar: "tuiSidebar" }, usesInheritance: true, ngImport: i0 }); }
}
export { TuiSidebarDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSidebarDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiSidebar]',
                }]
        }], propDecorators: { direction: [{
                type: Input,
                args: ['tuiSidebarDirection']
            }], autoWidth: [{
                type: Input,
                args: ['tuiSidebarAutoWidth']
            }], tuiSidebar: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRvbi1tb2JpbGUvZGlyZWN0aXZlcy9zaWRlYmFyL3NpZGViYXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUVoRSxPQUFPLEVBQUMscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVuRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFeEQ7O0dBRUc7QUFDSCxNQUlhLG1CQUNULFNBQVEsb0JBQXVCO0lBTG5DOztRQVFxQixhQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLFlBQU8sR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFbEMsY0FBUyxHQUFHLElBQUkscUJBQXFCLENBQ2xELG1CQUFtQixFQUNuQixJQUFJLENBQUMsUUFBUSxDQUNoQixDQUFDO1FBRU0sZUFBVSxHQUE2QyxJQUFJLENBQUM7UUFHN0QsY0FBUyxHQUEyQixNQUFNLENBQUM7UUFHM0MsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVULFlBQU8sR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFjLENBQUEsQ0FBQyxDQUFDO0tBZ0NwRDtJQTlCRyxJQUNXLFVBQVUsQ0FBQyxJQUFhO1FBQy9CLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVPLElBQUk7UUFDUixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQzFCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVPLElBQUk7UUFDUixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQzFCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDOytHQW5EUSxtQkFBbUI7bUdBQW5CLG1CQUFtQjs7U0FBbkIsbUJBQW1COzRGQUFuQixtQkFBbUI7a0JBSi9CLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxjQUFjO2lCQUMzQjs4QkFnQlUsU0FBUztzQkFEZixLQUFLO3VCQUFDLHFCQUFxQjtnQkFJckIsU0FBUztzQkFEZixLQUFLO3VCQUFDLHFCQUFxQjtnQkFNakIsVUFBVTtzQkFEcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtDb21wb25lbnRSZWYsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0LCBJTkpFQ1RPUiwgSW5wdXQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHVpUG9wdXBTZXJ2aWNlfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9kaXJlY3RpdmVzL3BvcHVwJztcbmltcG9ydCB0eXBlIHtUdWlIb3Jpem9udGFsRGlyZWN0aW9ufSBmcm9tICdAdGFpZ2EtdWkvY29yZS90eXBlcyc7XG5pbXBvcnQge1BvbHltb3JwaGV1c0NvbXBvbmVudCwgUG9seW1vcnBoZXVzVGVtcGxhdGV9IGZyb20gJ0B0YWlnYS11aS9wb2x5bW9ycGhldXMnO1xuXG5pbXBvcnQge1R1aVNpZGViYXJDb21wb25lbnR9IGZyb20gJy4vc2lkZWJhci5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgVHVpRHJhd2VyfSBpbnN0ZWFkXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpU2lkZWJhcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlTaWRlYmFyRGlyZWN0aXZlPFQgPSBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj5cbiAgICBleHRlbmRzIFBvbHltb3JwaGV1c1RlbXBsYXRlPFQ+XG4gICAgaW1wbGVtZW50cyBPbkRlc3Ryb3lcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yID0gaW5qZWN0KElOSkVDVE9SKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2UgPSBpbmplY3QoVHVpUG9wdXBTZXJ2aWNlKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50ID0gbmV3IFBvbHltb3JwaGV1c0NvbXBvbmVudChcbiAgICAgICAgVHVpU2lkZWJhckNvbXBvbmVudCxcbiAgICAgICAgdGhpcy5pbmplY3RvcixcbiAgICApO1xuXG4gICAgcHJpdmF0ZSBzaWRlYmFyUmVmOiBDb21wb25lbnRSZWY8VHVpU2lkZWJhckNvbXBvbmVudD4gfCBudWxsID0gbnVsbDtcblxuICAgIEBJbnB1dCgndHVpU2lkZWJhckRpcmVjdGlvbicpXG4gICAgcHVibGljIGRpcmVjdGlvbjogVHVpSG9yaXpvbnRhbERpcmVjdGlvbiA9ICdsZWZ0JztcblxuICAgIEBJbnB1dCgndHVpU2lkZWJhckF1dG9XaWR0aCcpXG4gICAgcHVibGljIGF1dG9XaWR0aCA9IGZhbHNlO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRlbnQgPSBpbmplY3QoVGVtcGxhdGVSZWY8VD4pO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHR1aVNpZGViYXIob3BlbjogYm9vbGVhbikge1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zaWRlYmFyUmVmICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNpZGViYXJSZWYgPSB0aGlzLnNlcnZpY2UuYWRkKHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyUmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNpZGViYXJSZWYgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VydmljZS5yZW1vdmUodGhpcy5zaWRlYmFyUmVmKTtcbiAgICAgICAgdGhpcy5zaWRlYmFyUmVmID0gbnVsbDtcbiAgICB9XG59XG4iXX0=