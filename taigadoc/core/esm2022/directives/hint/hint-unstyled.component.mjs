import { ChangeDetectionStrategy, Component, Directive, inject, TemplateRef, } from '@angular/core';
import { tuiParentAnimation } from '@taiga-ui/core/animations';
import { injectContext, PolymorpheusComponent, PolymorpheusOutlet, } from '@taiga-ui/polymorpheus';
import { TuiHintDirective } from './hint.directive';
import * as i0 from "@angular/core";
class TuiHintUnstyledComponent {
    constructor() {
        this.context = injectContext();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintUnstyledComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintUnstyledComponent, isStandalone: true, selector: "ng-component", host: { properties: { "@tuiParentAnimation": "" } }, ngImport: i0, template: '<ng-container *polymorpheusOutlet="context.$implicit.content()" />', isInline: true, dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], animations: [tuiParentAnimation], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiHintUnstyledComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintUnstyledComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    imports: [PolymorpheusOutlet],
                    template: '<ng-container *polymorpheusOutlet="context.$implicit.content()" />',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [tuiParentAnimation],
                    host: { '[@tuiParentAnimation]': '' },
                }]
        }] });
class TuiHintUnstyled {
    constructor() {
        const hint = inject((TuiHintDirective));
        hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent);
        hint.content.set(inject((TemplateRef)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintUnstyled, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintUnstyled, isStandalone: true, selector: "ng-template[tuiHint]", ngImport: i0 }); }
}
export { TuiHintUnstyled };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintUnstyled, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiHint]',
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC11bnN0eWxlZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2RpcmVjdGl2ZXMvaGludC9oaW50LXVuc3R5bGVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsR0FDZCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUc3RCxPQUFPLEVBQ0gsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixrQkFBa0IsR0FDckIsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFbEQsTUFRYSx3QkFBd0I7SUFSckM7UUFTdUIsWUFBTyxHQUN0QixhQUFhLEVBRVYsQ0FBQztLQUNYOytHQUxZLHdCQUF3QjttR0FBeEIsd0JBQXdCLDZIQUx2QixvRUFBb0UsNERBRHBFLGtCQUFrQixnSEFHaEIsQ0FBQyxrQkFBa0IsQ0FBQzs7U0FHdkIsd0JBQXdCOzRGQUF4Qix3QkFBd0I7a0JBUnBDLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUM3QixRQUFRLEVBQUUsb0VBQW9FO29CQUM5RSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2hDLElBQUksRUFBRSxFQUFDLHVCQUF1QixFQUFFLEVBQUUsRUFBQztpQkFDdEM7O0FBUUQsTUFJYSxlQUFlO0lBQ3hCO1FBQ0ksTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUEsZ0JBQW1CLENBQUEsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBLFdBQWMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOytHQU5RLGVBQWU7bUdBQWYsZUFBZTs7U0FBZixlQUFlOzRGQUFmLGVBQWU7a0JBSjNCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxzQkFBc0I7aUJBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1dyaXRhYmxlU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBpbmplY3QsXG4gICAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1R1aUNvbnRleHR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHt0dWlQYXJlbnRBbmltYXRpb259IGZyb20gJ0B0YWlnYS11aS9jb3JlL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHR5cGUge1R1aVBvcnRhbEl0ZW19IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB0eXBlIHtQb2x5bW9ycGhldXNDb250ZW50fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcbmltcG9ydCB7XG4gICAgaW5qZWN0Q29udGV4dCxcbiAgICBQb2x5bW9ycGhldXNDb21wb25lbnQsXG4gICAgUG9seW1vcnBoZXVzT3V0bGV0LFxufSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcblxuaW1wb3J0IHtUdWlIaW50RGlyZWN0aXZlfSBmcm9tICcuL2hpbnQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbUG9seW1vcnBoZXVzT3V0bGV0XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250YWluZXIgKnBvbHltb3JwaGV1c091dGxldD1cImNvbnRleHQuJGltcGxpY2l0LmNvbnRlbnQoKVwiIC8+JyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBhbmltYXRpb25zOiBbdHVpUGFyZW50QW5pbWF0aW9uXSxcbiAgICBob3N0OiB7J1tAdHVpUGFyZW50QW5pbWF0aW9uXSc6ICcnfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSGludFVuc3R5bGVkQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29udGV4dCA9XG4gICAgICAgIGluamVjdENvbnRleHQ8XG4gICAgICAgICAgICBUdWlDb250ZXh0PFR1aVBvcnRhbEl0ZW0gJiB7Y29udGVudDogV3JpdGFibGVTaWduYWw8UG9seW1vcnBoZXVzQ29udGVudD59PlxuICAgICAgICA+KCk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0dWlIaW50XScsXG59KVxuZXhwb3J0IGNsYXNzIFR1aUhpbnRVbnN0eWxlZDxDPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGhpbnQgPSBpbmplY3QoVHVpSGludERpcmVjdGl2ZTxDPik7XG5cbiAgICAgICAgaGludC5jb21wb25lbnQgPSBuZXcgUG9seW1vcnBoZXVzQ29tcG9uZW50KFR1aUhpbnRVbnN0eWxlZENvbXBvbmVudCk7XG4gICAgICAgIGhpbnQuY29udGVudC5zZXQoaW5qZWN0KFRlbXBsYXRlUmVmPEM+KSk7XG4gICAgfVxufVxuIl19