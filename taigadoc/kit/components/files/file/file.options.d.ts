import type { TuiContext } from '@taiga-ui/cdk/types';
import type { TuiAppearanceOptions } from '@taiga-ui/core/directives/appearance';
import type { TuiSizeL } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { TuiFileState } from '../files.types';
export interface TuiFileOptions extends TuiAppearanceOptions {
    readonly formatSize: (units: readonly [string, string, string], size?: number) => string | null;
    readonly icons: Record<Exclude<TuiFileState, 'loading'>, PolymorpheusContent<TuiContext<TuiSizeL>>>;
}
export declare const TUI_FILE_DEFAULT_OPTIONS: TuiFileOptions;
/**
 * Default parameters for file component
 */
export declare const TUI_FILE_OPTIONS: import("@angular/core").InjectionToken<TuiFileOptions>, tuiFileOptionsProvider: (item: Partial<TuiFileOptions> | import("@angular/core").ProviderToken<Partial<TuiFileOptions>>) => import("@angular/core").FactoryProvider;
