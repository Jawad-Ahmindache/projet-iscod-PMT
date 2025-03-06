import type { PipeTransform } from '@angular/core';
import type { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TuiTableFiltersPipe<T> implements PipeTransform {
    private readonly filters;
    transform<T>(items: readonly T[]): Observable<readonly T[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableFiltersPipe<any>, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TuiTableFiltersPipe<any>, "tuiTableFilters", true>;
}
