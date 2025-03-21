import type { TuiNumberFormatSettings } from '@taiga-ui/core/tokens';
/**
 * Formats number adding a thousand separators and correct decimal separator
 * padding decimal part with zeroes to given length
 *
 * @param value the input number
 * @param settings See {@link TuiNumberFormatSettings}
 * @return the formatted string
 */
export declare function tuiFormatNumber(value: number, settings?: Partial<TuiNumberFormatSettings>): string;
