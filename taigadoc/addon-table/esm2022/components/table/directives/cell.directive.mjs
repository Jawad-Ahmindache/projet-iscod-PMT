import { Directive, inject, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
class TuiTableCell {
    constructor() {
        this.tuiCell = '';
        this.template = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableCell, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableCell, isStandalone: true, selector: "ng-template[tuiCell]", inputs: { tuiCell: "tuiCell" }, ngImport: i0 }); }
}
export { TuiTableCell };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableCell, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiCell]',
                }]
        }], propDecorators: { tuiCell: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hZGRvbi10YWJsZS9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvY2VsbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFcEUsTUFJYSxZQUFZO0lBSnpCO1FBTVcsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUVKLGFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQSxXQUFvQyxDQUFBLENBQUMsQ0FBQztLQUMzRTsrR0FMWSxZQUFZO21HQUFaLFlBQVk7O1NBQVosWUFBWTs0RkFBWixZQUFZO2tCQUp4QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsc0JBQXNCO2lCQUNuQzs4QkFHVSxPQUFPO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0LCBJbnB1dCwgVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdHVpQ2VsbF0nLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlUYWJsZUNlbGwge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR1aUNlbGwgPSAnJztcblxuICAgIHB1YmxpYyByZWFkb25seSB0ZW1wbGF0ZSA9IGluamVjdChUZW1wbGF0ZVJlZjxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4pO1xufVxuIl19