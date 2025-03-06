import * as i0 from "@angular/core";
export declare class TuiTableSortBy<T extends Partial<Record<keyof T, any>>> {
    private readonly sortables;
    private readonly table;
    readonly tuiSortByChange: import("rxjs").Observable<keyof T | null>;
    tuiSortBy: string | keyof T | null;
    set sortBy(sortBy: string | keyof T | null);
    protected checkSortables(): void;
    private getKey;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableSortBy<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiTableSortBy<any>, "table[tuiTable][tuiSortBy]", never, { "sortBy": { "alias": "tuiSortBy"; "required": false; }; }, { "tuiSortByChange": "tuiSortByChange"; }, ["sortables"], never, true, never>;
}
