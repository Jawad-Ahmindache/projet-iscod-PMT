import type { TuiPopover } from '@taiga-ui/cdk/services';
import type { TuiAlertOptions } from './alert.interfaces';
import * as i0 from "@angular/core";
export declare class TuiAlertComponent<O, I> {
    private readonly el;
    protected readonly icons: import("@taiga-ui/core/tokens").TuiCommonIcons;
    protected readonly options: import("@angular/animations").AnimationOptions;
    protected readonly close: import("@angular/core").Signal<string | undefined>;
    protected readonly position: string;
    protected readonly item: TuiPopover<TuiAlertOptions<I>, O>;
    protected readonly animation: {
        value: string;
        delay?: string | number | undefined;
        params?: {
            [name: string]: any;
        } | undefined;
    };
    protected readonly sub: import("rxjs").Subscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiAlertComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiAlertComponent<any, any>, "tui-alert", never, {}, {}, never, never, true, never>;
}
