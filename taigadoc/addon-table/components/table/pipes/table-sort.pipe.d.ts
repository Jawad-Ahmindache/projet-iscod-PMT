import type { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TuiTableSortPipe<K = Partial<Record<any, any>>> implements PipeTransform {
    private readonly table;
    transform<T extends K>(data?: readonly T[] | null): readonly T[];
    private sort;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableSortPipe<any>, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TuiTableSortPipe<any>, "tuiTableSort", true>;
}
