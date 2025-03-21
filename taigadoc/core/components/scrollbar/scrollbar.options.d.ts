export interface TuiScrollbarOptions {
    mode: 'always' | 'hidden' | 'hover' | 'native';
}
export declare const TUI_DEFAULT_SCROLLBAR_OPTIONS: TuiScrollbarOptions;
export declare const TUI_SCROLLBAR_OPTIONS: import("@angular/core").InjectionToken<TuiScrollbarOptions>, tuiScrollbarOptionsProvider: (item: Partial<TuiScrollbarOptions> | import("@angular/core").ProviderToken<Partial<TuiScrollbarOptions>>) => import("@angular/core").FactoryProvider;
