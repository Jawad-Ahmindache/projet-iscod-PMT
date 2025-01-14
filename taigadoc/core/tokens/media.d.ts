export interface TuiMedia {
    readonly desktopLarge: number;
    readonly desktopSmall: number;
    readonly mobile: number;
    readonly tablet?: number;
}
/**
 * Token for media constant
 */
export declare const TUI_MEDIA: import("@angular/core").InjectionToken<TuiMedia>;
