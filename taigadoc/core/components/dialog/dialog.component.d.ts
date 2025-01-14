import type { TuiPopover } from '@taiga-ui/cdk/services';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import type { TuiDialogOptions, TuiDialogSize } from './dialog.interfaces';
import * as i0 from "@angular/core";
export declare class TuiDialogComponent<O, I> {
    private readonly speed;
    private readonly animation;
    private readonly fullscreenAnimation;
    protected readonly close$: Subject<void>;
    protected readonly context: TuiPopover<TuiDialogOptions<I>, O>;
    protected readonly closeWord$: Observable<string>;
    protected readonly icons: import("@taiga-ui/core/tokens").TuiCommonIcons;
    protected readonly slideInTop: import("@angular/core").Signal<{
        readonly value: "";
        readonly params: {
            readonly start: "40px";
            readonly duration: number;
        };
    } | {
        readonly value: "";
        readonly params: {
            readonly start: "100vh";
            readonly duration: number;
        };
    }>;
    protected readonly isMobile: import("@angular/core").Signal<boolean | undefined>;
    constructor();
    protected get size(): TuiDialogSize;
    protected get header(): PolymorpheusContent<TuiPopover<TuiDialogOptions<I>, O>>;
    private close;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDialogComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiDialogComponent<any, any>, "tui-dialog", never, {}, {}, never, never, true, never>;
}
