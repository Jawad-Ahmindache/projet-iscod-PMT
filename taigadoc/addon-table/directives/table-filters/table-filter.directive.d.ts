import type { OnDestroy, OnInit } from '@angular/core';
import type { TuiTableFilter } from './table-filter';
import { TuiTableFiltersDirective } from './table-filters.directive';
import * as i0 from "@angular/core";
export declare class TuiTableFilterDirective<T> implements OnInit, OnDestroy, TuiTableFilter<T> {
    private readonly head;
    private readonly delegate;
    private readonly control;
    protected readonly filters: TuiTableFiltersDirective<any>;
    tuiTableFilter?: keyof T;
    readonly refresh$: import("rxjs").Observable<any>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    filter(item: T): boolean;
    private get key();
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableFilterDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiTableFilterDirective<any>, "[tuiTableFilter]", never, { "tuiTableFilter": { "alias": "tuiTableFilter"; "required": false; }; }, {}, never, never, true, never>;
}
