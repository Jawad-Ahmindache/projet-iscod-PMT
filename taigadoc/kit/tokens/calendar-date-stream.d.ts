import type { InjectionToken, Provider } from '@angular/core';
import type { TuiValueTransformer } from '@taiga-ui/cdk/classes';
import type { TuiDay, TuiDayRange } from '@taiga-ui/cdk/date-time';
import type { Observable } from 'rxjs';
/**
 * Stream that emits calendar data change
 */
export declare const TUI_CALENDAR_DATE_STREAM: InjectionToken<Observable<TuiDay | TuiDayRange | null>>;
export declare function tuiDateStreamWithTransformer(transformer: InjectionToken<TuiValueTransformer<any>>): Provider;
