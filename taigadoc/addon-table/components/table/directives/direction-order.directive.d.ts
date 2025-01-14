import * as i0 from "@angular/core";
export declare class TuiTableDirectionOrder<T> {
    private readonly table;
    readonly directionOrderChange: import("rxjs").Observable<"asc" | "desc">;
    set directionOrder(order: 'asc' | 'desc');
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableDirectionOrder<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiTableDirectionOrder<any>, "table[tuiTable][tuiDirectionOrder]", never, { "directionOrder": { "alias": "directionOrder"; "required": false; }; }, { "directionOrderChange": "directionOrderChange"; }, never, never, true, never>;
}
