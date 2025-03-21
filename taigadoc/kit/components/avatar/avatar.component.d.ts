import type { SafeResourceUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/appearance";
export declare class TuiAvatar {
    private readonly options;
    size: "m" | "s" | "xs" | "l" | "xl" | "xxl";
    round: boolean;
    src?: SafeResourceUrl | string | null;
    protected get value(): SafeResourceUrl | string;
    protected get svg(): boolean;
    protected get type(): 'content' | 'icon' | 'img' | 'text';
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiAvatar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiAvatar, "tui-avatar,button[tuiAvatar],a[tuiAvatar]", never, { "size": { "alias": "size"; "required": false; }; "round": { "alias": "round"; "required": false; }; "src": { "alias": "src"; "required": false; }; }, {}, never, ["*"], true, [{ directive: typeof i1.TuiWithAppearance; inputs: {}; outputs: {}; }]>;
}
