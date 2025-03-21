import type { PipeTransform } from '@angular/core';
import type { TuiStringHandler } from '@taiga-ui/cdk/types';
import * as i0 from "@angular/core";
export declare class TuiStringifyPipe implements PipeTransform {
    transform<K extends string>(key: K): TuiStringHandler<Readonly<Record<any, any> & Record<K, unknown>>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiStringifyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TuiStringifyPipe, "tuiStringify", true>;
}
