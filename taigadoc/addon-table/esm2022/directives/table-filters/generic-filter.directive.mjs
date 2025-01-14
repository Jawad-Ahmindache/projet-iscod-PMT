import { Directive, Input } from '@angular/core';
import { TUI_TRUE_HANDLER } from '@taiga-ui/cdk/constants';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { AbstractTuiTableFilter } from './abstract-table-filter';
import * as i0 from "@angular/core";
class TuiGenericFilter extends AbstractTuiTableFilter {
    constructor() {
        super(...arguments);
        this.filter = TUI_TRUE_HANDLER;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGenericFilter, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiGenericFilter, isStandalone: true, selector: "[tuiGenericFilter]", inputs: { filter: ["tuiGenericFilter", "filter"] }, providers: [tuiProvide(AbstractTuiTableFilter, TuiGenericFilter)], usesInheritance: true, ngImport: i0 }); }
}
export { TuiGenericFilter };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGenericFilter, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiGenericFilter]',
                    providers: [tuiProvide(AbstractTuiTableFilter, TuiGenericFilter)],
                }]
        }], propDecorators: { filter: [{
                type: Input,
                args: ['tuiGenericFilter']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1maWx0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tdGFibGUvZGlyZWN0aXZlcy90YWJsZS1maWx0ZXJzL2dlbmVyaWMtZmlsdGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFN0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUJBQXlCLENBQUM7O0FBRS9ELE1BS2EsZ0JBQXVCLFNBQVEsc0JBQTRCO0lBTHhFOztRQU9XLFdBQU0sR0FBbUMsZ0JBQWdCLENBQUM7S0FDcEU7K0dBSFksZ0JBQWdCO21HQUFoQixnQkFBZ0IscUhBRmQsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7U0FFeEQsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBTDVCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsbUJBQW1CLENBQUM7aUJBQ3BFOzhCQUdVLE1BQU07c0JBRFosS0FBSzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUVUlfVFJVRV9IQU5ETEVSfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge3R1aVByb3ZpZGV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5cbmltcG9ydCB7QWJzdHJhY3RUdWlUYWJsZUZpbHRlcn0gZnJvbSAnLi9hYnN0cmFjdC10YWJsZS1maWx0ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aUdlbmVyaWNGaWx0ZXJdJyxcbiAgICBwcm92aWRlcnM6IFt0dWlQcm92aWRlKEFic3RyYWN0VHVpVGFibGVGaWx0ZXIsIFR1aUdlbmVyaWNGaWx0ZXIpXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpR2VuZXJpY0ZpbHRlcjxULCBHPiBleHRlbmRzIEFic3RyYWN0VHVpVGFibGVGaWx0ZXI8VCwgRz4ge1xuICAgIEBJbnB1dCgndHVpR2VuZXJpY0ZpbHRlcicpXG4gICAgcHVibGljIGZpbHRlcjogKGl0ZW06IFQsIHZhbHVlOiBHKSA9PiBib29sZWFuID0gVFVJX1RSVUVfSEFORExFUjtcbn1cbiJdfQ==