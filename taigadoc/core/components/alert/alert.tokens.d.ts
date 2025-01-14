import type { FactoryProvider } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { TuiAlertOptions } from './alert.interfaces';
export declare const TUI_ALERT_DEFAULT_OPTIONS: Omit<TuiAlertOptions, 'appearance' | 'icon'>;
export declare const TUI_ALERT_OPTIONS: import("@angular/core").InjectionToken<TuiAlertOptions<undefined>>;
export declare const TUI_ALERT_POSITION: import("@angular/core").InjectionToken<string>;
export declare const TUI_ALERTS: import("@angular/core").InjectionToken<BehaviorSubject<readonly any[]>>;
/**
 * Grouping alerts by their component
 */
export declare const TUI_ALERTS_GROUPED: import("@angular/core").InjectionToken<import("rxjs").Observable<(readonly any[])[]>>;
export declare function tuiAlertOptionsProvider(options: Partial<TuiAlertOptions>): FactoryProvider;
