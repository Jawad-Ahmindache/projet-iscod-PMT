import type { TuiContext } from '@taiga-ui/cdk/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { Observable } from 'rxjs';
/**
 * Stream that emits when loading is over
 */
export declare const TUI_PULL_TO_REFRESH_LOADED: import("@angular/core").InjectionToken<Observable<unknown>>;
/**
 * Pull threshold in pixels until loading starts
 */
export declare const TUI_PULL_TO_REFRESH_THRESHOLD: import("@angular/core").InjectionToken<number>;
/**
 * Loading indicator component that gets current pull distance in pixels as context
 */
export declare const TUI_PULL_TO_REFRESH_COMPONENT: import("@angular/core").InjectionToken<PolymorpheusContent<TuiContext<number>>>;
