import type { DoCheck, Signal } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/appearance";
import * as i2 from "@taiga-ui/core/directives/hint";
export declare class TuiTooltip implements DoCheck {
    private readonly textfield;
    private readonly isMobile;
    private readonly describe;
    private readonly driver;
    protected readonly nothing: undefined;
    protected readonly state: Signal<unknown>;
    ngDoCheck(): void;
    protected onClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTooltip, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiTooltip, "tui-icon[tuiTooltip]", never, {}, {}, never, never, true, [{ directive: typeof i1.TuiWithAppearance; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiHintDescribe; inputs: { "tuiHintDescribe": "tuiTooltipDescribe"; }; outputs: {}; }, { directive: typeof i2.TuiHintDirective; inputs: { "tuiHint": "tuiTooltip"; "tuiHintAppearance": "tuiHintAppearance"; "tuiHintContext": "tuiHintContext"; }; outputs: {}; }]>;
}
