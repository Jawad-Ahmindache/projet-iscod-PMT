import type { QueryList } from '@angular/core';
import { EventEmitter } from '@angular/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { TuiTableDirective } from '../directives/table.directive';
import { TuiTableTr } from '../tr/tr.component';
import * as i0 from "@angular/core";
export declare class TuiTableTbody<T extends Partial<Record<keyof T, any>>> {
    private readonly options;
    protected readonly table: TuiTableDirective<T>;
    readonly rows: QueryList<TuiTableTr<T>>;
    data: readonly T[];
    heading: PolymorpheusContent;
    open: boolean;
    readonly openChange: EventEmitter<boolean>;
    protected onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableTbody<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTableTbody<any>, "tbody[tuiTbody]", never, { "data": { "alias": "data"; "required": false; }; "heading": { "alias": "heading"; "required": false; }; "open": { "alias": "open"; "required": false; }; }, { "openChange": "openChange"; }, ["rows"], ["*"], true, never>;
}
