import { TuiValidationError } from '@taiga-ui/cdk/classes';
import * as i0 from "@angular/core";
export declare class TuiError {
    protected readonly options: import("@angular/animations").AnimationOptions;
    protected error: TuiValidationError | null;
    protected visible: boolean;
    protected readonly default: import("@angular/core").Signal<string | undefined>;
    set errorSetter(error: TuiValidationError | string | null);
    protected onAnimation(visible: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiError, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiError, "tui-error", never, { "errorSetter": { "alias": "error"; "required": false; }; }, {}, never, never, true, never>;
}
