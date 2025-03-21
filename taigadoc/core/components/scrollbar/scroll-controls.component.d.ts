import * as i0 from "@angular/core";
export declare class TuiScrollControls {
    private readonly scrollRef;
    protected readonly nativeScrollbar: boolean;
    protected readonly options: import("@angular/animations").AnimationOptions;
    protected readonly refresh$: import("rxjs").Observable<[boolean, boolean] | boolean[]>;
    private get scrollbars();
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiScrollControls, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiScrollControls, "tui-scroll-controls", never, {}, {}, never, never, true, never>;
}
