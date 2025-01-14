import type { Provider, TemplateRef, Type } from '@angular/core';
import type { TuiContext, TuiIdentityMatcher, TuiStringHandler } from '@taiga-ui/cdk/types';
import type { TuiSizeL, TuiSizeS } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
export interface TuiDataListAccessor<T = unknown> {
    getOptions(includeDisabled?: boolean): readonly T[];
}
export interface TuiDataListHost<T> {
    checkOption?(option: T): void;
    handleOption?(option: T): void;
    readonly identityMatcher?: TuiIdentityMatcher<T>;
    readonly stringify?: TuiStringHandler<T>;
    readonly size?: TuiSizeL | TuiSizeS;
}
/**
 * Content for tuiOption component
 */
export declare const TUI_OPTION_CONTENT: import("@angular/core").InjectionToken<PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>>>;
export declare function tuiAsOptionContent(useValue: PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>>): Provider;
/**
 * Accessor for data-list options
 */
export declare const TUI_DATA_LIST_ACCESSOR: import("@angular/core").InjectionToken<TuiDataListAccessor<unknown>>;
export declare function tuiAsDataListAccessor(accessor: Type<TuiDataListAccessor>): Provider;
/**
 * DataList controller
 */
export declare const TUI_DATA_LIST_HOST: import("@angular/core").InjectionToken<TuiDataListHost<unknown>>;
export declare function tuiAsDataListHost<T>(host: Type<TuiDataListHost<T>>): Provider;
