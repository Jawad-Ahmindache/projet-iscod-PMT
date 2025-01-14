import { EventEmitter } from '@angular/core';
import type { TuiTablePaginationOptions } from './table-pagination.options';
import * as i0 from "@angular/core";
export interface TuiTablePaginationEvent {
    readonly page: number;
    readonly size: number;
}
export declare class TuiTablePagination {
    private readonly options;
    protected open: boolean;
    protected readonly icons: import("@taiga-ui/core/tokens").TuiSpinIcons;
    protected readonly spinTexts$: import("rxjs").Observable<readonly [previous: string, next: string]>;
    protected readonly texts$: import("rxjs").Observable<{
        linesPerPage: string;
        of: string;
        pages: string;
    }>;
    protected readonly commonIcons: import("@taiga-ui/core/tokens").TuiCommonIcons;
    items: readonly number[];
    total: number;
    page: number;
    size: number;
    readonly paginationChange: EventEmitter<TuiTablePaginationEvent>;
    onItem(size: number): void;
    protected get pages(): number;
    protected get showPages(): boolean;
    protected get sizeOptionContent(): TuiTablePaginationOptions['sizeOptionContent'];
    protected get start(): number;
    protected get end(): number;
    protected get leftDisabled(): boolean;
    protected get rightDisabled(): boolean;
    protected get pagination(): TuiTablePaginationEvent;
    protected back(): void;
    protected forth(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTablePagination, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTablePagination, "tui-table-pagination", never, { "items": { "alias": "items"; "required": false; }; "total": { "alias": "total"; "required": false; }; "page": { "alias": "page"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "paginationChange": "paginationChange"; }, never, never, true, never>;
}
