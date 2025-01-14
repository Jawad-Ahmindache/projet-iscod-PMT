import type { Provider } from '@angular/core';
import type { TuiStringHandler } from '@taiga-ui/cdk/types';
export declare const TUI_ICON_RESOLVER: import("@angular/core").InjectionToken<TuiStringHandler<string>>;
/**
 * @deprecated use {@link TUI_ICON_RESOLVER}
 */
export declare const TUI_ICON_START_RESOLVER: import("@angular/core").InjectionToken<TuiStringHandler<string>>;
export declare function tuiInjectIconResolver(): TuiStringHandler<string>;
export declare function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider;
