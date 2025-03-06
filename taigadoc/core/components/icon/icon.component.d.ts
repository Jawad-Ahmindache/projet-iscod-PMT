import type { TuiStringHandler } from '@taiga-ui/cdk/types';
import * as i0 from "@angular/core";
export declare class TuiIcon {
    protected readonly resolver: TuiStringHandler<string>;
    protected readonly backgroundSrc: import("@angular/core").WritableSignal<string | null>;
    protected readonly iconSrc: import("@angular/core").WritableSignal<string | null>;
    set icon(icon: string);
    set background(background: string);
    resolve(value?: string | null): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiIcon, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiIcon, "tui-icon", never, { "icon": { "alias": "icon"; "required": false; }; "background": { "alias": "background"; "required": false; }; }, {}, never, never, true, never>;
}
