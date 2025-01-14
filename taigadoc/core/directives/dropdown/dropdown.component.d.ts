import { TuiDropdownDirective } from './dropdown.directive';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/active-zone";
/**
 * @description:
 * This component is used to show template in a portal
 * using default style of white rounded box with a shadow
 */
export declare class TuiDropdownComponent {
    private readonly el;
    private readonly accessor;
    private readonly win;
    private readonly vvs;
    protected readonly animation: import("@angular/animations").AnimationOptions;
    protected readonly options: import("./dropdown-options.directive").TuiDropdownOptions;
    protected readonly directive: TuiDropdownDirective;
    protected readonly context: Record<any, any> | null;
    protected readonly theme: string | null | undefined;
    protected readonly sub: import("rxjs").Subscription;
    protected readonly close: () => void;
    private getStyles;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiDropdownComponent, "tui-dropdown", never, {}, {}, never, never, true, [{ directive: typeof i1.TuiActiveZone; inputs: {}; outputs: {}; }]>;
}
