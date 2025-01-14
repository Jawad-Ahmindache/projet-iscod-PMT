import type { AfterContentInit } from '@angular/core';
import { TuiTableCell } from '../directives/cell.directive';
import { TuiTableDirective } from '../directives/table.directive';
import * as i0 from "@angular/core";
export declare class TuiTableTr<T extends Partial<Record<keyof T, any>>> implements AfterContentInit {
    private readonly cells;
    private readonly body;
    private readonly contentReady$;
    protected readonly table: TuiTableDirective<T>;
    protected readonly cells$: import("rxjs").Observable<Record<string | keyof T, TuiTableCell>>;
    protected readonly item$: import("rxjs").Observable<Record<string | keyof T, any>>;
    ngAfterContentInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableTr<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTableTr<any>, "tr[tuiTr]", never, {}, {}, ["cells"], never, true, never>;
}
