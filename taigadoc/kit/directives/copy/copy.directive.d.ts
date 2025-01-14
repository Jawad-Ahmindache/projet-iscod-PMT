import { TuiTextfieldComponent } from '@taiga-ui/core/components/textfield';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/appearance";
import * as i2 from "@taiga-ui/core/directives/hint";
export declare class TuiCopy {
    private readonly options;
    private readonly copied$;
    private readonly doc;
    protected readonly textfield: TuiTextfieldComponent<any>;
    protected readonly hint: import("@angular/core").Signal<string>;
    protected readonly icons: import("@angular/core").Signal<string>;
    tuiCopy: string;
    protected get disabled(): boolean;
    protected copy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiCopy, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiCopy, "tui-icon[tuiCopy]", never, { "tuiCopy": { "alias": "tuiCopy"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiWithAppearance; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiHintDirective; inputs: { "tuiHintAppearance": "tuiHintAppearance"; "tuiHintContext": "tuiHintContext"; }; outputs: {}; }]>;
}
