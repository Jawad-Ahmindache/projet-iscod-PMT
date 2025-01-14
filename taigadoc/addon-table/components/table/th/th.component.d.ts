import type { TuiComparator } from '@taiga-ui/addon-table/types';
import { TuiTableDirective } from '../directives/table.directive';
import * as i0 from "@angular/core";
export declare class TuiTableTh<T extends Partial<Record<keyof T, any>>> {
    private readonly options;
    private readonly head;
    protected width: number | null;
    protected readonly table: TuiTableDirective<T> | null;
    sorter: TuiComparator<T> | null;
    resizable: boolean;
    sticky: boolean;
    requiredSort: boolean;
    get key(): keyof T;
    protected get isCurrent(): boolean;
    protected get icon(): string;
    protected updateSorterAndDirection(): void;
    protected onResized(width: number): void;
    private get isCurrentAndDescDirection();
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableTh<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTableTh<any>, "th[tuiTh]", never, { "sorter": { "alias": "sorter"; "required": false; }; "resizable": { "alias": "resizable"; "required": false; }; "sticky": { "alias": "sticky"; "required": false; }; "requiredSort": { "alias": "requiredSort"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare class TuiTableSortKeyException extends Error {
    constructor();
}
