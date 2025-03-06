import { ChangeDetectionStrategy, Component, forwardRef, inject, Input, } from '@angular/core';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiIsNativeFocused } from '@taiga-ui/cdk/utils/focus';
import { TuiDropdownDirective } from '@taiga-ui/core/directives/dropdown';
import { TuiWithIcons } from '@taiga-ui/core/directives/icons';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { TuiDataListComponent } from './data-list.component';
import { TUI_DATA_LIST_HOST, TUI_OPTION_CONTENT } from './data-list.tokens';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/icons";
// TODO: Consider all use cases for aria roles
class TuiOption {
    constructor() {
        this.isMobile = inject(TUI_IS_MOBILE);
        this.el = tuiInjectElement();
        this.dataList = inject(forwardRef(() => TuiDataListComponent), { optional: true });
        this.host = inject(TUI_DATA_LIST_HOST, {
            optional: true,
        });
        this.content = inject(TUI_OPTION_CONTENT, { optional: true });
        this.dropdown = inject(TuiDropdownDirective, {
            self: true,
            optional: true,
        })?.ref;
        this.disabled = false;
    }
    // Preventing focus loss upon focused option removal
    ngOnDestroy() {
        this.dataList?.handleFocusLossIfNecessary(this.el);
    }
    onClick() {
        if (this.host?.handleOption && this.value !== undefined) {
            this.host.handleOption(this.value);
        }
    }
    onMouseMove() {
        if (!this.isMobile && !tuiIsNativeFocused(this.el) && this.dataList) {
            this.el.focus({ preventScroll: true });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiOption, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiOption, isStandalone: true, selector: "button[tuiOption], a[tuiOption], label[tuiOption]", inputs: { disabled: "disabled", value: "value" }, host: { attributes: { "type": "button", "role": "option" }, listeners: { "click": "onClick()", "mousemove.silent": "onMouseMove()" }, properties: { "attr.disabled": "disabled || null", "class._with-dropdown": "dropdown?.()" } }, hostDirectives: [{ directive: i1.TuiWithIcons }], ngImport: i0, template: `
        <ng-container *polymorpheusOutlet="content || t as text; context: {$implicit: t}">
            {{ text }}
        </ng-container>
        <ng-template #t>
            <ng-content />
        </ng-template>
    `, isInline: true, dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiOption };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiOption, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'button[tuiOption], a[tuiOption], label[tuiOption]',
                    imports: [PolymorpheusOutlet],
                    template: `
        <ng-container *polymorpheusOutlet="content || t as text; context: {$implicit: t}">
            {{ text }}
        </ng-container>
        <ng-template #t>
            <ng-content />
        </ng-template>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [TuiWithIcons],
                    host: {
                        type: 'button',
                        role: 'option',
                        '[attr.disabled]': 'disabled || null',
                        '[class._with-dropdown]': 'dropdown?.()',
                        '(click)': 'onClick()',
                        '(mousemove.silent)': 'onMouseMove()',
                    },
                }]
        }], propDecorators: { disabled: [{
                type: Input
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9kYXRhLWxpc3Qvb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssR0FDUixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFbkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRTdELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7QUFFMUUsOENBQThDO0FBQzlDLE1BdUJhLFNBQVM7SUF2QnRCO1FBd0JxQixhQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLE9BQUUsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxNQUFNLENBQzlCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUN0QyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FDbkIsQ0FBQztRQUVlLFNBQUksR0FBRyxNQUFNLENBQXFCLGtCQUFrQixFQUFFO1lBQ25FLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUVnQixZQUFPLEdBRXRCLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBRTlCLGFBQVEsR0FBRyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDdkQsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDLEVBQUUsR0FBRyxDQUFDO1FBR0QsYUFBUSxHQUFHLEtBQUssQ0FBQztLQXFCM0I7SUFoQkcsb0RBQW9EO0lBQzdDLFdBQVc7UUFDZCxJQUFJLENBQUMsUUFBUSxFQUFFLDBCQUEwQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRVMsT0FBTztRQUNiLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVTLFdBQVc7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQzsrR0ExQ1EsU0FBUzttR0FBVCxTQUFTLHNiQW5CUjs7Ozs7OztLQU9ULDREQVJTLGtCQUFrQjs7U0FvQm5CLFNBQVM7NEZBQVQsU0FBUztrQkF2QnJCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxtREFBbUQ7b0JBQzdELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUM3QixRQUFRLEVBQUU7Ozs7Ozs7S0FPVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsY0FBYyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUM5QixJQUFJLEVBQUU7d0JBQ0YsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsaUJBQWlCLEVBQUUsa0JBQWtCO3dCQUNyQyx3QkFBd0IsRUFBRSxjQUFjO3dCQUN4QyxTQUFTLEVBQUUsV0FBVzt3QkFDdEIsb0JBQW9CLEVBQUUsZUFBZTtxQkFDeEM7aUJBQ0o7OEJBdUJVLFFBQVE7c0JBRGQsS0FBSztnQkFJQyxLQUFLO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T25EZXN0cm95LCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBmb3J3YXJkUmVmLFxuICAgIGluamVjdCxcbiAgICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RVSV9JU19NT0JJTEV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdG9rZW5zJztcbmltcG9ydCB0eXBlIHtUdWlDb250ZXh0fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3R5cGVzJztcbmltcG9ydCB7dHVpSW5qZWN0RWxlbWVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuaW1wb3J0IHt0dWlJc05hdGl2ZUZvY3VzZWR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZm9jdXMnO1xuaW1wb3J0IHtUdWlEcm9wZG93bkRpcmVjdGl2ZX0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvZGlyZWN0aXZlcy9kcm9wZG93bic7XG5pbXBvcnQge1R1aVdpdGhJY29uc30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvZGlyZWN0aXZlcy9pY29ucyc7XG5pbXBvcnQgdHlwZSB7UG9seW1vcnBoZXVzQ29udGVudH0gZnJvbSAnQHRhaWdhLXVpL3BvbHltb3JwaGV1cyc7XG5pbXBvcnQge1BvbHltb3JwaGV1c091dGxldH0gZnJvbSAnQHRhaWdhLXVpL3BvbHltb3JwaGV1cyc7XG5cbmltcG9ydCB7VHVpRGF0YUxpc3RDb21wb25lbnR9IGZyb20gJy4vZGF0YS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgdHlwZSB7VHVpRGF0YUxpc3RIb3N0fSBmcm9tICcuL2RhdGEtbGlzdC50b2tlbnMnO1xuaW1wb3J0IHtUVUlfREFUQV9MSVNUX0hPU1QsIFRVSV9PUFRJT05fQ09OVEVOVH0gZnJvbSAnLi9kYXRhLWxpc3QudG9rZW5zJztcblxuLy8gVE9ETzogQ29uc2lkZXIgYWxsIHVzZSBjYXNlcyBmb3IgYXJpYSByb2xlc1xuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2J1dHRvblt0dWlPcHRpb25dLCBhW3R1aU9wdGlvbl0sIGxhYmVsW3R1aU9wdGlvbl0nLFxuICAgIGltcG9ydHM6IFtQb2x5bW9ycGhldXNPdXRsZXRdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250YWluZXIgKnBvbHltb3JwaGV1c091dGxldD1cImNvbnRlbnQgfHwgdCBhcyB0ZXh0OyBjb250ZXh0OiB7JGltcGxpY2l0OiB0fVwiPlxuICAgICAgICAgICAge3sgdGV4dCB9fVxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICN0PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgLz5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBgLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3REaXJlY3RpdmVzOiBbVHVpV2l0aEljb25zXSxcbiAgICBob3N0OiB7XG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJyxcbiAgICAgICAgJ1tjbGFzcy5fd2l0aC1kcm9wZG93bl0nOiAnZHJvcGRvd24/LigpJyxcbiAgICAgICAgJyhjbGljayknOiAnb25DbGljaygpJyxcbiAgICAgICAgJyhtb3VzZW1vdmUuc2lsZW50KSc6ICdvbk1vdXNlTW92ZSgpJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlPcHRpb248VCA9IHVua25vd24+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlzTW9iaWxlID0gaW5qZWN0KFRVSV9JU19NT0JJTEUpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhTGlzdCA9IGluamVjdDxUdWlEYXRhTGlzdENvbXBvbmVudDxUPj4oXG4gICAgICAgIGZvcndhcmRSZWYoKCkgPT4gVHVpRGF0YUxpc3RDb21wb25lbnQpLFxuICAgICAgICB7b3B0aW9uYWw6IHRydWV9LFxuICAgICk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGhvc3QgPSBpbmplY3Q8VHVpRGF0YUxpc3RIb3N0PFQ+PihUVUlfREFUQV9MSVNUX0hPU1QsIHtcbiAgICAgICAgb3B0aW9uYWw6IHRydWUsXG4gICAgfSk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29udGVudDogUG9seW1vcnBoZXVzQ29udGVudDxcbiAgICAgICAgVHVpQ29udGV4dDxUZW1wbGF0ZVJlZjxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4+XG4gICAgPiA9IGluamVjdChUVUlfT1BUSU9OX0NPTlRFTlQsIHtvcHRpb25hbDogdHJ1ZX0pO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGRyb3Bkb3duID0gaW5qZWN0KFR1aURyb3Bkb3duRGlyZWN0aXZlLCB7XG4gICAgICAgIHNlbGY6IHRydWUsXG4gICAgICAgIG9wdGlvbmFsOiB0cnVlLFxuICAgIH0pPy5yZWY7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU/OiBUO1xuXG4gICAgLy8gUHJldmVudGluZyBmb2N1cyBsb3NzIHVwb24gZm9jdXNlZCBvcHRpb24gcmVtb3ZhbFxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhTGlzdD8uaGFuZGxlRm9jdXNMb3NzSWZOZWNlc3NhcnkodGhpcy5lbCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmhvc3Q/LmhhbmRsZU9wdGlvbiAmJiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5oYW5kbGVPcHRpb24odGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZU1vdmUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc01vYmlsZSAmJiAhdHVpSXNOYXRpdmVGb2N1c2VkKHRoaXMuZWwpICYmIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuZm9jdXMoe3ByZXZlbnRTY3JvbGw6IHRydWV9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==