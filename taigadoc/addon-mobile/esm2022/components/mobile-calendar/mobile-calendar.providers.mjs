import { VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { Optional } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { TuiScrollService } from '@taiga-ui/cdk/services';
import { TUI_IS_IOS } from '@taiga-ui/cdk/tokens';
import { tuiCreateToken } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_CALENDAR_DATE_STREAM } from '@taiga-ui/kit/tokens';
import { EMPTY } from 'rxjs';
import { TuiMobileCalendarStrategy } from './mobile-calendar.strategy';
/**
 * Stream for updating value
 */
export const TUI_VALUE_STREAM = tuiCreateToken();
export const TUI_MOBILE_CALENDAR_PROVIDERS = [
    TuiScrollService,
    {
        provide: VIRTUAL_SCROLL_STRATEGY,
        deps: [TUI_IS_IOS, TuiScrollService],
        useClass: TuiMobileCalendarStrategy,
    },
    {
        provide: TUI_VALUE_STREAM,
        deps: [[new Optional(), TUI_CALENDAR_DATE_STREAM]],
        useFactory: (value$) => (value$ || EMPTY).pipe(tuiWatch(), takeUntilDestroyed()),
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWNhbGVuZGFyLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLW1vYmlsZS9jb21wb25lbnRzL21vYmlsZS1jYWxlbmRhci9tb2JpbGUtY2FsZW5kYXIucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRS9ELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFOUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDakUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFOUQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUUzQixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUVyRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLGNBQWMsRUFBa0MsQ0FBQztBQUVqRixNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBZTtJQUNyRCxnQkFBZ0I7SUFDaEI7UUFDSSxPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztRQUNwQyxRQUFRLEVBQUUseUJBQXlCO0tBQ3RDO0lBQ0Q7UUFDSSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xELFVBQVUsRUFBRSxDQUNSLE1BQTZDLEVBQ2YsRUFBRSxDQUNoQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztLQUMvRDtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ZJUlRVQUxfU0NST0xMX1NUUkFURUdZfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB0eXBlIHtQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgdHlwZSB7VHVpRGF5UmFuZ2V9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB7dHVpV2F0Y2h9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHtUdWlTY3JvbGxTZXJ2aWNlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3NlcnZpY2VzJztcbmltcG9ydCB7VFVJX0lTX0lPU30gZnJvbSAnQHRhaWdhLXVpL2Nkay90b2tlbnMnO1xuaW1wb3J0IHt0dWlDcmVhdGVUb2tlbn0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB7VFVJX0NBTEVOREFSX0RBVEVfU1RSRUFNfSBmcm9tICdAdGFpZ2EtdWkva2l0L3Rva2Vucyc7XG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0VNUFRZfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUdWlNb2JpbGVDYWxlbmRhclN0cmF0ZWd5fSBmcm9tICcuL21vYmlsZS1jYWxlbmRhci5zdHJhdGVneSc7XG5cbi8qKlxuICogU3RyZWFtIGZvciB1cGRhdGluZyB2YWx1ZVxuICovXG5leHBvcnQgY29uc3QgVFVJX1ZBTFVFX1NUUkVBTSA9IHR1aUNyZWF0ZVRva2VuPE9ic2VydmFibGU8VHVpRGF5UmFuZ2UgfCBudWxsPj4oKTtcblxuZXhwb3J0IGNvbnN0IFRVSV9NT0JJTEVfQ0FMRU5EQVJfUFJPVklERVJTOiBQcm92aWRlcltdID0gW1xuICAgIFR1aVNjcm9sbFNlcnZpY2UsXG4gICAge1xuICAgICAgICBwcm92aWRlOiBWSVJUVUFMX1NDUk9MTF9TVFJBVEVHWSxcbiAgICAgICAgZGVwczogW1RVSV9JU19JT1MsIFR1aVNjcm9sbFNlcnZpY2VdLFxuICAgICAgICB1c2VDbGFzczogVHVpTW9iaWxlQ2FsZW5kYXJTdHJhdGVneSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcHJvdmlkZTogVFVJX1ZBTFVFX1NUUkVBTSxcbiAgICAgICAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgVFVJX0NBTEVOREFSX0RBVEVfU1RSRUFNXV0sXG4gICAgICAgIHVzZUZhY3Rvcnk6IChcbiAgICAgICAgICAgIHZhbHVlJDogT2JzZXJ2YWJsZTxUdWlEYXlSYW5nZSB8IG51bGw+IHwgbnVsbCxcbiAgICAgICAgKTogT2JzZXJ2YWJsZTxUdWlEYXlSYW5nZSB8IG51bGw+ID0+XG4gICAgICAgICAgICAodmFsdWUkIHx8IEVNUFRZKS5waXBlKHR1aVdhdGNoKCksIHRha2VVbnRpbERlc3Ryb3llZCgpKSxcbiAgICB9LFxuXTtcbiJdfQ==