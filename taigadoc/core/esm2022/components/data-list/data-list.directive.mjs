import { Directive } from '@angular/core';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i0 from "@angular/core";
class TuiDataListDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDataListDirective, isStandalone: true, selector: "ng-template[tuiDataList]", ngImport: i0 }); }
}
export { TuiDataListDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiDataList]',
                }]
        }] });
export function tuiAsDataList(list) {
    return tuiProvide(TuiDataListDirective, list);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1saXN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9kYXRhLWxpc3QvZGF0YS1saXN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFN0QsTUFJYSxvQkFBb0I7K0dBQXBCLG9CQUFvQjttR0FBcEIsb0JBQW9COztTQUFwQixvQkFBb0I7NEZBQXBCLG9CQUFvQjtrQkFKaEMsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLDBCQUEwQjtpQkFDdkM7O0FBR0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFnQztJQUMxRCxPQUFPLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Byb3ZpZGVyLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpUHJvdmlkZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3R1aURhdGFMaXN0XScsXG59KVxuZXhwb3J0IGNsYXNzIFR1aURhdGFMaXN0RGlyZWN0aXZlIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiB0dWlBc0RhdGFMaXN0KGxpc3Q6IFR5cGU8VHVpRGF0YUxpc3REaXJlY3RpdmU+KTogUHJvdmlkZXIge1xuICAgIHJldHVybiB0dWlQcm92aWRlKFR1aURhdGFMaXN0RGlyZWN0aXZlLCBsaXN0KTtcbn1cbiJdfQ==