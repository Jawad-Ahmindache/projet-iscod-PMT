import type { Provider } from '@angular/core';
import type { TuiSizeL } from '@taiga-ui/core/types';
export interface TuiBreadcrumbsOptions {
    readonly icon: string;
    readonly size: TuiSizeL;
    readonly itemsLimit: number;
}
export declare const TUI_BREADCRUMBS_DEFAULT_OPTIONS: TuiBreadcrumbsOptions;
export declare const TUI_BREADCRUMBS_OPTIONS: import("@angular/core").InjectionToken<TuiBreadcrumbsOptions>;
export declare function tuiBreadcrumbsOptionsProvider(options: Partial<TuiBreadcrumbsOptions>): Provider;
