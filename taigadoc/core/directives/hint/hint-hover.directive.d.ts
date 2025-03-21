import { TuiDriver } from '@taiga-ui/core/classes';
import type { TuiHintOptions } from './hint-options.directive';
import * as i0 from "@angular/core";
export declare class TuiHintHover extends TuiDriver {
    private readonly isMobile;
    private readonly el;
    private readonly hovered$;
    private readonly options;
    private visible;
    private readonly toggle$;
    private readonly stream$;
    private readonly parent;
    tuiHintShowDelay: TuiHintOptions['showDelay'];
    tuiHintHideDelay: TuiHintOptions['hideDelay'];
    readonly type = "hint";
    enabled: boolean;
    constructor();
    toggle(visible?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiHintHover, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiHintHover, never, ["tuiHintHover"], { "tuiHintShowDelay": { "alias": "tuiHintShowDelay"; "required": false; }; "tuiHintHideDelay": { "alias": "tuiHintHideDelay"; "required": false; }; }, {}, never, never, true, never>;
}
