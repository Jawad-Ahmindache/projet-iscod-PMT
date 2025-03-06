import type { Provider } from '@angular/core';
import type { TuiSizeL, TuiSizeS } from '@taiga-ui/core/types';
export declare const TuiSortDirection: {
    readonly Asc: 1;
    readonly Desc: -1;
};
export type TuiSortDirection = (typeof TuiSortDirection)[keyof typeof TuiSortDirection];
export interface TuiTableOptions {
    readonly direction: TuiSortDirection;
    readonly requiredSort: boolean;
    readonly open: boolean;
    readonly resizable: boolean;
    readonly size: TuiSizeL | TuiSizeS;
    readonly sortIcons: {
        readonly asc: string;
        readonly desc: string;
        readonly off: string;
    };
    readonly sticky: boolean;
}
export declare const TUI_TABLE_DEFAULT_OPTIONS: TuiTableOptions;
export declare const TUI_TABLE_OPTIONS: import("@angular/core").InjectionToken<TuiTableOptions>;
export declare function tuiTableOptionsProvider(options: Partial<TuiTableOptions>): Provider;
