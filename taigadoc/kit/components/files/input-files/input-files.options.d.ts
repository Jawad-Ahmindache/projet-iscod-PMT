import type { Provider } from '@angular/core';
import type { TuiSizeL } from '@taiga-ui/core/types';
export interface TuiInputFilesOptions {
    accept: string;
    maxFileSize: number;
    multiple: boolean;
    size: TuiSizeL;
}
export declare const TUI_INPUT_FILES_DEFAULT_OPTIONS: TuiInputFilesOptions;
/**
 * Default parameters for input files component
 */
export declare const TUI_INPUT_FILES_OPTIONS: import("@angular/core").InjectionToken<TuiInputFilesOptions>;
export declare function tuiInputFilesOptionsProvider(options: Partial<TuiInputFilesOptions>): Provider;
