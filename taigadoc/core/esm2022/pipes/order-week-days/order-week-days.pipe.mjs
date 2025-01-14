import { inject, Pipe } from '@angular/core';
import { TUI_FIRST_DAY_OF_WEEK } from '@taiga-ui/core/tokens';
import { map } from 'rxjs';
import * as i0 from "@angular/core";
function convertToSundayFirstWeekFormat(weekDaysNames) {
    const sundayIndex = weekDaysNames.length - 1;
    return [weekDaysNames[sundayIndex] || '', ...weekDaysNames.slice(0, sundayIndex)];
}
class TuiOrderWeekDaysPipe {
    constructor() {
        this.firstDayOfWeekIndex = inject(TUI_FIRST_DAY_OF_WEEK);
    }
    transform(mondayFirstWeekDays$) {
        return mondayFirstWeekDays$.pipe(map(convertToSundayFirstWeekFormat), map((weekDays) => [
            ...weekDays.slice(this.firstDayOfWeekIndex),
            ...weekDays.slice(0, this.firstDayOfWeekIndex),
        ]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiOrderWeekDaysPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiOrderWeekDaysPipe, isStandalone: true, name: "tuiOrderWeekDays" }); }
}
export { TuiOrderWeekDaysPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiOrderWeekDaysPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiOrderWeekDays',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItd2Vlay1kYXlzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3BpcGVzL29yZGVyLXdlZWstZGF5cy9vcmRlci13ZWVrLWRheXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sTUFBTSxDQUFDOztBQUV6QixTQUFTLDhCQUE4QixDQUNuQyxhQUFnQztJQUVoQyxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUU3QyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQztBQUVELE1BSWEsb0JBQW9CO0lBSmpDO1FBS3FCLHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBYXhFO0lBWFUsU0FBUyxDQUNaLG9CQUFtRDtRQUVuRCxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FDNUIsR0FBRyxDQUFDLDhCQUE4QixDQUFDLEVBQ25DLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDZCxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzNDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pELENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQzsrR0FiUSxvQkFBb0I7NkdBQXBCLG9CQUFvQjs7U0FBcEIsb0JBQW9COzRGQUFwQixvQkFBb0I7a0JBSmhDLElBQUk7bUJBQUM7b0JBQ0YsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLElBQUksRUFBRSxrQkFBa0I7aUJBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1BpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpbmplY3QsIFBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUVUlfRklSU1RfREFZX09GX1dFRUt9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcyc7XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1N1bmRheUZpcnN0V2Vla0Zvcm1hdChcbiAgICB3ZWVrRGF5c05hbWVzOiByZWFkb25seSBzdHJpbmdbXSxcbik6IHJlYWRvbmx5IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzdW5kYXlJbmRleCA9IHdlZWtEYXlzTmFtZXMubGVuZ3RoIC0gMTtcblxuICAgIHJldHVybiBbd2Vla0RheXNOYW1lc1tzdW5kYXlJbmRleF0gfHwgJycsIC4uLndlZWtEYXlzTmFtZXMuc2xpY2UoMCwgc3VuZGF5SW5kZXgpXTtcbn1cblxuQFBpcGUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgbmFtZTogJ3R1aU9yZGVyV2Vla0RheXMnLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlPcmRlcldlZWtEYXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlyc3REYXlPZldlZWtJbmRleCA9IGluamVjdChUVUlfRklSU1RfREFZX09GX1dFRUspO1xuXG4gICAgcHVibGljIHRyYW5zZm9ybShcbiAgICAgICAgbW9uZGF5Rmlyc3RXZWVrRGF5cyQ6IE9ic2VydmFibGU8cmVhZG9ubHkgc3RyaW5nW10+LFxuICAgICk6IE9ic2VydmFibGU8cmVhZG9ubHkgc3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIG1vbmRheUZpcnN0V2Vla0RheXMkLnBpcGUoXG4gICAgICAgICAgICBtYXAoY29udmVydFRvU3VuZGF5Rmlyc3RXZWVrRm9ybWF0KSxcbiAgICAgICAgICAgIG1hcCgod2Vla0RheXMpID0+IFtcbiAgICAgICAgICAgICAgICAuLi53ZWVrRGF5cy5zbGljZSh0aGlzLmZpcnN0RGF5T2ZXZWVrSW5kZXgpLFxuICAgICAgICAgICAgICAgIC4uLndlZWtEYXlzLnNsaWNlKDAsIHRoaXMuZmlyc3REYXlPZldlZWtJbmRleCksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=