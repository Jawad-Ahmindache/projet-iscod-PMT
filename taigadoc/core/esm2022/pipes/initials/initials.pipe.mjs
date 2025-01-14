import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
class TuiInitialsPipe {
    transform(text) {
        return text
            .toUpperCase()
            .split(' ')
            .map(([char]) => char)
            .join('')
            .slice(0, 2);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInitialsPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiInitialsPipe, isStandalone: true, name: "tuiInitials" }); }
}
export { TuiInitialsPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInitialsPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiInitials',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbHMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvcGlwZXMvaW5pdGlhbHMvaW5pdGlhbHMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUVuQyxNQUlhLGVBQWU7SUFDakIsU0FBUyxDQUFDLElBQVk7UUFDekIsT0FBTyxJQUFJO2FBQ04sV0FBVyxFQUFFO2FBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzthQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ1IsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOytHQVJRLGVBQWU7NkdBQWYsZUFBZTs7U0FBZixlQUFlOzRGQUFmLGVBQWU7a0JBSjNCLElBQUk7bUJBQUM7b0JBQ0YsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRSxhQUFhO2lCQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIG5hbWU6ICd0dWlJbml0aWFscycsXG59KVxuZXhwb3J0IGNsYXNzIFR1aUluaXRpYWxzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHB1YmxpYyB0cmFuc2Zvcm0odGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgLm1hcCgoW2NoYXJdKSA9PiBjaGFyKVxuICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAuc2xpY2UoMCwgMik7XG4gICAgfVxufVxuIl19