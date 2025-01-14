import { TuiPortals } from '@taiga-ui/cdk/classes';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/platform";
import * as i2 from "@taiga-ui/cdk/directives/visual-viewport";
export declare class TuiRoot extends TuiPortals {
    protected readonly reducedMotion: boolean;
    protected readonly duration: number;
    protected readonly isMobileRes: import("@angular/core").Signal<boolean>;
    protected readonly nativeScrollbar: boolean;
    protected readonly scrollbars: boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiRoot, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiRoot, "tui-root", never, {}, {}, never, ["*", "tuiOverContent", "tuiOverDialogs", "tuiOverAlerts", "tuiOverDropdowns", "tuiOverHints"], true, [{ directive: typeof i1.TuiPlatform; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiVisualViewport; inputs: {}; outputs: {}; }]>;
}
