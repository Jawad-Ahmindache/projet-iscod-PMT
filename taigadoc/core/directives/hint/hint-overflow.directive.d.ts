import * as i0 from "@angular/core";
import * as i1 from "./hint.directive";
export declare class TuiHintOverflow {
    private readonly hint;
    protected onMouseEnter({ scrollWidth, clientWidth, textContent }: Element): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiHintOverflow, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiHintOverflow, "[tuiHintOverflow]", never, {}, {}, never, never, true, [{ directive: typeof i1.TuiHintDirective; inputs: { "tuiHintAppearance": "tuiHintAppearance"; }; outputs: {}; }]>;
}
