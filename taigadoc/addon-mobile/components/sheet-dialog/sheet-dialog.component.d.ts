import type { AfterViewInit } from '@angular/core';
import type { TuiPopover } from '@taiga-ui/cdk/services';
import type { TuiSheetDialogOptions } from './sheet-dialog.options';
import * as i0 from "@angular/core";
export declare class TuiSheetDialogComponent<I> implements AfterViewInit {
    private readonly stops;
    private readonly el;
    private pointers;
    protected readonly slideInTop: {
        value: string;
        params: {
            start: string;
            duration: number;
        };
    };
    protected readonly context: TuiPopover<TuiSheetDialogOptions<I>, any>;
    ngAfterViewInit(): void;
    protected close(): void;
    protected onPointerChange(delta: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiSheetDialogComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiSheetDialogComponent<any>, "tui-sheet-dialog", never, {}, {}, never, never, true, never>;
}
