import type { AfterContentInit, QueryList } from '@angular/core';
import type { Observable } from 'rxjs';
import { TuiTableHead } from '../directives/head.directive';
import { TuiTableDirective } from '../directives/table.directive';
import { TuiTableTh } from '../th/th.component';
import * as i0 from "@angular/core";
export declare class TuiTableThGroup<T extends Partial<Record<keyof T, any>>> implements AfterContentInit {
    protected readonly th: TuiTableTh<T>;
    protected readonly heads: QueryList<TuiTableHead<T>>;
    protected heads$: Observable<Record<any, TuiTableHead<T>>> | null;
    protected readonly table: TuiTableDirective<T>;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableThGroup<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTableThGroup<any>, "tr[tuiThGroup]", never, {}, {}, ["th", "heads"], ["*"], true, never>;
}
