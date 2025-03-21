import type { TuiDateMode } from '@taiga-ui/cdk/date-time';
import type { TuiCountryIsoCode } from '@taiga-ui/i18n/types';
import type { Observable } from 'rxjs';
export declare const TUI_CONFIRM_WORDS: import("@angular/core").InjectionToken<Observable<{
    no: string;
    yes: string;
}>>;
export declare const TUI_CANCEL_WORD: import("@angular/core").InjectionToken<Observable<string>>;
export declare const TUI_DONE_WORD: import("@angular/core").InjectionToken<Observable<string>>;
export declare const TUI_MORE_WORD: import("@angular/core").InjectionToken<Observable<string>>;
export declare const TUI_HIDE_TEXT: import("@angular/core").InjectionToken<Observable<string>>;
export declare const TUI_SHOW_ALL_TEXT: import("@angular/core").InjectionToken<Observable<string>>;
export declare const TUI_OTHER_DATE_TEXT: import("@angular/core").InjectionToken<Observable<string>>;
export declare const TUI_CHOOSE_DAY_OR_RANGE_TEXTS: import("@angular/core").InjectionToken<Observable<readonly [choose_day: string, choose_range: string, choose_days: string]>>;
export declare const TUI_FROM_TO_TEXTS: import("@angular/core").InjectionToken<Observable<readonly [from: string, to: string]>>;
export declare const TUI_PLUS_MINUS_TEXTS: import("@angular/core").InjectionToken<Observable<readonly [plus: string, minus: string]>>;
export declare const TUI_TIME_TEXTS: import("@angular/core").InjectionToken<Observable<{
    'HH:MM': string;
    'HH:MM AA': string;
    'HH:MM:SS': string;
    'HH:MM:SS AA': string;
    'HH:MM:SS.MSS': string;
    'HH:MM:SS.MSS AA': string;
}>>;
export declare const TUI_DATE_TEXTS: import("@angular/core").InjectionToken<Observable<Record<TuiDateMode, string>>>;
export declare const TUI_DIGITAL_INFORMATION_UNITS: import("@angular/core").InjectionToken<Observable<readonly [short_byte: string, short_kilobyte: string, short_megabyte: string]>>;
export declare const TUI_COPY_TEXTS: import("@angular/core").InjectionToken<Observable<readonly [copy: string, copied: string]>>;
export declare const TUI_PASSWORD_TEXTS: import("@angular/core").InjectionToken<Observable<readonly [show_password: string, hide_password: string]>>;
export declare const TUI_CALENDAR_MONTHS: import("@angular/core").InjectionToken<Observable<readonly [January: string, February: string, March: string, April: string, May: string, June: string, July: string, August: string, September: string, October: string, November: string, December: string]>>;
export declare const TUI_FILE_TEXTS: import("@angular/core").InjectionToken<Observable<{
    loadingError: string;
    preview: string;
    remove: string;
}>>;
export declare const TUI_PAGINATION_TEXTS: import("@angular/core").InjectionToken<Observable<readonly [previous_page: string, next_page: string]>>;
export declare const TUI_INPUT_FILE_TEXTS: import("@angular/core").InjectionToken<Observable<{
    defaultLabelMultiple: string;
    defaultLabelSingle: string;
    defaultLinkMultiple: string;
    defaultLinkSingle: string;
    drop: string;
    dropMultiple: string;
    formatRejectionReason: string;
    maxSizeRejectionReason: string;
}>>;
export declare const TUI_MULTI_SELECT_TEXTS: import("@angular/core").InjectionToken<Observable<{
    all: string;
    none: string;
}>>;
export declare const TUI_COUNTRIES: import("@angular/core").InjectionToken<Observable<Record<TuiCountryIsoCode, string>>>;
export declare const TUI_PREVIEW_TEXTS: import("@angular/core").InjectionToken<Observable<{
    rotate: string;
}>>;
export declare const TUI_PREVIEW_ZOOM_TEXTS: import("@angular/core").InjectionToken<Observable<{
    zoomIn: string;
    zoomOut: string;
    reset: string;
}>>;
export declare const TUI_INTERNATIONAL_SEARCH: import("@angular/core").InjectionToken<Observable<string>>;
