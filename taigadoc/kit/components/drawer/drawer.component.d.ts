import type { AnimationOptions } from '@angular/animations';
import type { TuiHorizontalDirection } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export declare class TuiDrawer {
    protected readonly options: AnimationOptions;
    direction: TuiHorizontalDirection;
    overlay: boolean;
    protected get animation(): AnimationOptions & {
        value: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDrawer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiDrawer, "tui-drawer", never, { "direction": { "alias": "direction"; "required": false; }; "overlay": { "alias": "overlay"; "required": false; }; }, {}, never, ["header", "*", "footer"], true, never>;
}
