import type { Provider } from '@angular/core';
import type { TuiCountryIsoCode } from '@taiga-ui/i18n/types';
import type { MetadataJson } from 'libphonenumber-js/core';
import type { Observable } from 'rxjs';
export interface TuiInputPhoneInternationalOptions {
    readonly countries: readonly TuiCountryIsoCode[];
    readonly countryIsoCode: TuiCountryIsoCode;
    readonly metadata: Observable<MetadataJson> | Promise<MetadataJson>;
    readonly separator: string;
}
export declare const TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS: TuiInputPhoneInternationalOptions;
/**
 * Default parameters for input phone international component
 */
export declare const TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS: import("@angular/core").InjectionToken<TuiInputPhoneInternationalOptions>;
export declare function tuiInputPhoneInternationalOptionsProvider(options: Partial<TuiInputPhoneInternationalOptions>): Provider;
