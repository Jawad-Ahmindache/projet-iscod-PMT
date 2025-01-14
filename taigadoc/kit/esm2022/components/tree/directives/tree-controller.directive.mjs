import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { tuiIsPresent, tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_TREE_ACCESSOR, TUI_TREE_CONTROLLER } from '../misc/tree.tokens';
import * as i0 from "@angular/core";
class TuiTreeControllerDirective {
    constructor() {
        this.items = new Map();
        this.fallback = true;
        this.map = new Map();
        this.toggled = new EventEmitter();
    }
    register(item, value) {
        this.items.set(item, value);
    }
    unregister(item) {
        this.items.delete(item);
    }
    isExpanded(item) {
        const value = this.items.get(item);
        return (value && this.map.get(value)) ?? this.fallback;
    }
    toggle(item) {
        const value = this.items.get(item);
        const expanded = this.isExpanded(item);
        if (!tuiIsPresent(value)) {
            return;
        }
        this.toggled.emit(value);
        this.map.set(value, !expanded);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeControllerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTreeControllerDirective, isStandalone: true, selector: "[tuiTreeController][map]", inputs: { fallback: ["tuiTreeController", "fallback"], map: "map" }, outputs: { toggled: "toggled" }, providers: [
            tuiProvide(TUI_TREE_ACCESSOR, TuiTreeControllerDirective),
            tuiProvide(TUI_TREE_CONTROLLER, TuiTreeControllerDirective),
        ], exportAs: ["tuiTreeController"], ngImport: i0 }); }
}
export { TuiTreeControllerDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeControllerDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTreeController][map]',
                    providers: [
                        tuiProvide(TUI_TREE_ACCESSOR, TuiTreeControllerDirective),
                        tuiProvide(TUI_TREE_CONTROLLER, TuiTreeControllerDirective),
                    ],
                    exportAs: 'tuiTreeController',
                }]
        }], propDecorators: { fallback: [{
                type: Input,
                args: ['tuiTreeController']
            }], map: [{
                type: Input
            }], toggled: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jb250cm9sbGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3RyZWUvZGlyZWN0aXZlcy90cmVlLWNvbnRyb2xsZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFlBQVksRUFBRSxVQUFVLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUkzRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFM0UsTUFTYSwwQkFBMEI7SUFUdkM7UUFZdUIsVUFBSyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRzlDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFHaEIsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFjLENBQUM7UUFHbkIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7S0EyQm5EO0lBekJVLFFBQVEsQ0FBQyxJQUFpQixFQUFFLEtBQVE7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxVQUFVLENBQUMsSUFBaUI7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFpQjtRQUMvQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMzRCxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQWlCO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDOytHQXRDUSwwQkFBMEI7bUdBQTFCLDBCQUEwQiw2S0FOeEI7WUFDUCxVQUFVLENBQUMsaUJBQWlCLEVBQUUsMEJBQTBCLENBQUM7WUFDekQsVUFBVSxDQUFDLG1CQUFtQixFQUFFLDBCQUEwQixDQUFDO1NBQzlEOztTQUdRLDBCQUEwQjs0RkFBMUIsMEJBQTBCO2tCQVR0QyxTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxTQUFTLEVBQUU7d0JBQ1AsVUFBVSxDQUFDLGlCQUFpQiw2QkFBNkI7d0JBQ3pELFVBQVUsQ0FBQyxtQkFBbUIsNkJBQTZCO3FCQUM5RDtvQkFDRCxRQUFRLEVBQUUsbUJBQW1CO2lCQUNoQzs4QkFPVSxRQUFRO3NCQURkLEtBQUs7dUJBQUMsbUJBQW1CO2dCQUluQixHQUFHO3NCQURULEtBQUs7Z0JBSVUsT0FBTztzQkFEdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0dWlJc1ByZXNlbnQsIHR1aVByb3ZpZGV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5cbmltcG9ydCB0eXBlIHtUdWlUcmVlSXRlbX0gZnJvbSAnLi4vY29tcG9uZW50cy90cmVlLWl0ZW0vdHJlZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgdHlwZSB7VHVpVHJlZUFjY2Vzc29yLCBUdWlUcmVlQ29udHJvbGxlcn0gZnJvbSAnLi4vbWlzYy90cmVlLmludGVyZmFjZXMnO1xuaW1wb3J0IHtUVUlfVFJFRV9BQ0NFU1NPUiwgVFVJX1RSRUVfQ09OVFJPTExFUn0gZnJvbSAnLi4vbWlzYy90cmVlLnRva2Vucyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpVHJlZUNvbnRyb2xsZXJdW21hcF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB0dWlQcm92aWRlKFRVSV9UUkVFX0FDQ0VTU09SLCBUdWlUcmVlQ29udHJvbGxlckRpcmVjdGl2ZSksXG4gICAgICAgIHR1aVByb3ZpZGUoVFVJX1RSRUVfQ09OVFJPTExFUiwgVHVpVHJlZUNvbnRyb2xsZXJEaXJlY3RpdmUpLFxuICAgIF0sXG4gICAgZXhwb3J0QXM6ICd0dWlUcmVlQ29udHJvbGxlcicsXG59KVxuZXhwb3J0IGNsYXNzIFR1aVRyZWVDb250cm9sbGVyRGlyZWN0aXZlPFQ+XG4gICAgaW1wbGVtZW50cyBUdWlUcmVlQ29udHJvbGxlciwgVHVpVHJlZUFjY2Vzc29yPFQ+XG57XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGl0ZW1zID0gbmV3IE1hcDxUdWlUcmVlSXRlbSwgVD4oKTtcblxuICAgIEBJbnB1dCgndHVpVHJlZUNvbnRyb2xsZXInKVxuICAgIHB1YmxpYyBmYWxsYmFjayA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXAgPSBuZXcgTWFwPFQsIGJvb2xlYW4+KCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVhZG9ubHkgdG9nZ2xlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgIHB1YmxpYyByZWdpc3RlcihpdGVtOiBUdWlUcmVlSXRlbSwgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcy5zZXQoaXRlbSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyKGl0ZW06IFR1aVRyZWVJdGVtKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMuZGVsZXRlKGl0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0V4cGFuZGVkKGl0ZW06IFR1aVRyZWVJdGVtKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pdGVtcy5nZXQoaXRlbSk7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB0aGlzLm1hcC5nZXQodmFsdWUpKSA/PyB0aGlzLmZhbGxiYWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoaXRlbTogVHVpVHJlZUl0ZW0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLml0ZW1zLmdldChpdGVtKTtcbiAgICAgICAgY29uc3QgZXhwYW5kZWQgPSB0aGlzLmlzRXhwYW5kZWQoaXRlbSk7XG5cbiAgICAgICAgaWYgKCF0dWlJc1ByZXNlbnQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2dsZWQuZW1pdCh2YWx1ZSk7XG4gICAgICAgIHRoaXMubWFwLnNldCh2YWx1ZSwgIWV4cGFuZGVkKTtcbiAgICB9XG59XG4iXX0=