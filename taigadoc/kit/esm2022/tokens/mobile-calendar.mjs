import { inject } from '@angular/core';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiCreateToken } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_DROPDOWN_COMPONENT } from '@taiga-ui/core/directives/dropdown';
/**
 * A component for mobile data picker
 */
export const TUI_MOBILE_CALENDAR = tuiCreateToken();
export const TUI_MOBILE_CALENDAR_PROVIDER = {
    provide: TUI_DROPDOWN_COMPONENT,
    useFactory: () => (inject(TUI_IS_MOBILE) && inject(TUI_MOBILE_CALENDAR, { optional: true })) ||
        inject(TUI_DROPDOWN_COMPONENT, { skipSelf: true }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L3Rva2Vucy9tb2JpbGUtY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBRTFFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsY0FBYyxFQUFpQixDQUFDO0FBRW5FLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFvQjtJQUN6RCxPQUFPLEVBQUUsc0JBQXNCO0lBQy9CLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FDYixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxNQUFNLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN4RSxNQUFNLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7Q0FDdkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtGYWN0b3J5UHJvdmlkZXIsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUVUlfSVNfTU9CSUxFfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3Rva2Vucyc7XG5pbXBvcnQge3R1aUNyZWF0ZVRva2VufSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtUVUlfRFJPUERPV05fQ09NUE9ORU5UfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9kaXJlY3RpdmVzL2Ryb3Bkb3duJztcblxuLyoqXG4gKiBBIGNvbXBvbmVudCBmb3IgbW9iaWxlIGRhdGEgcGlja2VyXG4gKi9cbmV4cG9ydCBjb25zdCBUVUlfTU9CSUxFX0NBTEVOREFSID0gdHVpQ3JlYXRlVG9rZW48VHlwZTx1bmtub3duPj4oKTtcblxuZXhwb3J0IGNvbnN0IFRVSV9NT0JJTEVfQ0FMRU5EQVJfUFJPVklERVI6IEZhY3RvcnlQcm92aWRlciA9IHtcbiAgICBwcm92aWRlOiBUVUlfRFJPUERPV05fQ09NUE9ORU5ULFxuICAgIHVzZUZhY3Rvcnk6ICgpID0+XG4gICAgICAgIChpbmplY3QoVFVJX0lTX01PQklMRSkgJiYgaW5qZWN0KFRVSV9NT0JJTEVfQ0FMRU5EQVIsIHtvcHRpb25hbDogdHJ1ZX0pKSB8fFxuICAgICAgICBpbmplY3QoVFVJX0RST1BET1dOX0NPTVBPTkVOVCwge3NraXBTZWxmOiB0cnVlfSksXG59O1xuIl19