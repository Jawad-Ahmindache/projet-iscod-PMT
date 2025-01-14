import type { Provider } from '@angular/core';
import type { TuiContext } from '@taiga-ui/cdk/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
export interface TuiTablePaginationOptions {
    readonly items: readonly number[];
    readonly showPages: boolean;
    readonly size: number;
    readonly sizeOptionContent: PolymorpheusContent<TuiContext<number> & {
        total: number;
    }>;
}
export declare const TUI_TABLE_PAGINATION_DEFAULT_OPTIONS: TuiTablePaginationOptions;
/**
 * Default parameters for TablePagination component
 */
export declare const TUI_TABLE_PAGINATION_OPTIONS: import("@angular/core").InjectionToken<TuiTablePaginationOptions>;
export declare function tuiTablePaginationOptionsProvider(options: Partial<TuiTablePaginationOptions>): Provider;
