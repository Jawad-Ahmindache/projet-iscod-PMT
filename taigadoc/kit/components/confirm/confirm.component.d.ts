import type { TuiDialogContext } from '@taiga-ui/core/components/dialog';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
export interface TuiConfirmData {
    readonly content?: PolymorpheusContent;
    readonly no?: string;
    readonly yes?: string;
    readonly appearance?: string;
}
export declare class TuiConfirm {
    private readonly isMobile;
    protected readonly words$: import("rxjs").Observable<{
        no: string;
        yes: string;
    }>;
    readonly context: TuiDialogContext<boolean, TuiConfirmData | undefined>;
    protected get appearance(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiConfirm, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiConfirm, "tui-confirm", never, {}, {}, never, never, true, never>;
}
export declare const TUI_CONFIRM: PolymorpheusComponent<TuiConfirm>;
