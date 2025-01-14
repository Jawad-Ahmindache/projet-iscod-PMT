import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
class TuiStringifyPipe {
    transform(key) {
        return (value) => String(value[key] ?? '');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStringifyPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiStringifyPipe, isStandalone: true, name: "tuiStringify" }); }
}
export { TuiStringifyPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStringifyPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiStringify',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5naWZ5LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvcGlwZXMvc3RyaW5naWZ5L3N0cmluZ2lmeS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBR25DLE1BSWEsZ0JBQWdCO0lBQ2xCLFNBQVMsQ0FDWixHQUFNO1FBRU4sT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOytHQUxRLGdCQUFnQjs2R0FBaEIsZ0JBQWdCOztTQUFoQixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFKNUIsSUFBSTttQkFBQztvQkFDRixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFLGNBQWM7aUJBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1BpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtUdWlTdHJpbmdIYW5kbGVyfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3R5cGVzJztcblxuQFBpcGUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgbmFtZTogJ3R1aVN0cmluZ2lmeScsXG59KVxuZXhwb3J0IGNsYXNzIFR1aVN0cmluZ2lmeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwdWJsaWMgdHJhbnNmb3JtPEsgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBrZXk6IEssXG4gICAgKTogVHVpU3RyaW5nSGFuZGxlcjxSZWFkb25seTxSZWNvcmQ8YW55LCBhbnk+ICYgUmVjb3JkPEssIHVua25vd24+Pj4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlKSA9PiBTdHJpbmcodmFsdWVba2V5XSA/PyAnJyk7XG4gICAgfVxufVxuIl19