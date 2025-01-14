import type { BooleanInput } from '@angular/cdk/coercion';
import type { OnChanges } from '@angular/core';
import type { TuiComparator } from '@taiga-ui/addon-table/types';
import * as i0 from "@angular/core";
export declare class TuiTableSortable<T extends Partial<Record<keyof T, any>>> implements OnChanges {
    private readonly table;
    private readonly th;
    private readonly sortBy;
    sortable: BooleanInput;
    get key(): keyof T;
    sorter: TuiComparator<T>;
    ngOnChanges(): void;
    check(): void;
    private get match();
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableSortable<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiTableSortable<any>, "th[tuiTh][tuiSortable]", never, { "sortable": { "alias": "tuiSortable"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_sortable: any;
}
