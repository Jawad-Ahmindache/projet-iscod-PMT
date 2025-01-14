import type { TuiValueTransformer } from '@taiga-ui/cdk/classes';
import type { TuiDay, TuiDayRange, TuiTime } from '@taiga-ui/cdk/date-time';
/**
 * Control value transformer of TuiDay to custom value format for InputDate* components
 */
export declare const TUI_DATE_VALUE_TRANSFORMER: import("@angular/core").InjectionToken<TuiValueTransformer<TuiDay | null, unknown>>;
/**
 * Control value transformer for InputDateRange component
 */
export declare const TUI_DATE_RANGE_VALUE_TRANSFORMER: import("@angular/core").InjectionToken<TuiValueTransformer<TuiDayRange | null, unknown>>;
/**
 * Control value transformer for InputDateTime component
 */
export declare const TUI_DATE_TIME_VALUE_TRANSFORMER: import("@angular/core").InjectionToken<TuiValueTransformer<[TuiDay | null, TuiTime | null], unknown>>;
/**
 * Control value transformer for InputTime component
 */
export declare const TUI_TIME_VALUE_TRANSFORMER: import("@angular/core").InjectionToken<TuiValueTransformer<TuiTime | null, unknown>>;
