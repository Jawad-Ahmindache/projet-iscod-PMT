import { inject, Pipe } from '@angular/core';
import { TUI_EMAIL_PIPE_OPTIONS } from './emails.options';
import * as i0 from "@angular/core";
class TuiEmailsPipe {
    constructor() {
        this.options = inject(TUI_EMAIL_PIPE_OPTIONS);
    }
    transform(query, suggestions = this.options) {
        return query.includes('@')
            ? suggestions
                .map((item) => query.slice(0, Math.max(0, query.indexOf('@') + 1)) + item)
                .filter((item) => item.startsWith(query))
            : [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiEmailsPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiEmailsPipe, isStandalone: true, name: "tuiEmails" }); }
}
export { TuiEmailsPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiEmailsPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiEmails',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvcGlwZXMvZW1haWxzL2VtYWlscy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDOztBQUV4RCxNQUlhLGFBQWE7SUFKMUI7UUFLcUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBZTdEO0lBYlUsU0FBUyxDQUNaLEtBQWEsRUFDYixjQUFpQyxJQUFJLENBQUMsT0FBTztRQUU3QyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxXQUFXO2lCQUNOLEdBQUcsQ0FDQSxDQUFDLElBQUksRUFBRSxFQUFFLENBQ0wsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FDakU7aUJBQ0EsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDOytHQWZRLGFBQWE7NkdBQWIsYUFBYTs7U0FBYixhQUFhOzRGQUFiLGFBQWE7a0JBSnpCLElBQUk7bUJBQUM7b0JBQ0YsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRSxXQUFXO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aW5qZWN0LCBQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtUVUlfRU1BSUxfUElQRV9PUFRJT05TfSBmcm9tICcuL2VtYWlscy5vcHRpb25zJztcblxuQFBpcGUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgbmFtZTogJ3R1aUVtYWlscycsXG59KVxuZXhwb3J0IGNsYXNzIFR1aUVtYWlsc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnMgPSBpbmplY3QoVFVJX0VNQUlMX1BJUEVfT1BUSU9OUyk7XG5cbiAgICBwdWJsaWMgdHJhbnNmb3JtKFxuICAgICAgICBxdWVyeTogc3RyaW5nLFxuICAgICAgICBzdWdnZXN0aW9uczogcmVhZG9ubHkgc3RyaW5nW10gPSB0aGlzLm9wdGlvbnMsXG4gICAgKTogcmVhZG9ubHkgc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gcXVlcnkuaW5jbHVkZXMoJ0AnKVxuICAgICAgICAgICAgPyBzdWdnZXN0aW9uc1xuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcXVlcnkuaW5kZXhPZignQCcpICsgMSkpICsgaXRlbSxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc3RhcnRzV2l0aChxdWVyeSkpXG4gICAgICAgICAgICA6IFtdO1xuICAgIH1cbn1cbiJdfQ==