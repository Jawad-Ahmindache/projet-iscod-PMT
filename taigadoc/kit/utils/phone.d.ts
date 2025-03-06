import type { TuiCountryIsoCode } from '@taiga-ui/i18n/types/country-iso-code';
import type { MetadataJson } from 'libphonenumber-js/core';
export declare function tuiGetCallingCode(iso: TuiCountryIsoCode, metadata?: MetadataJson | null): string;
