import type { PipeTransform } from '@angular/core';
import type { TuiStringMatcher } from '@taiga-ui/cdk/types';
import * as i0 from "@angular/core";
export declare class TuiFilterByInputPipe implements PipeTransform {
    private readonly textfield;
    private readonly host;
    transform<T>(items: readonly T[], matcher?: TuiStringMatcher<T>): readonly T[];
    private filter;
    private filterFlat;
    private filter2d;
    private getMatch;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiFilterByInputPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TuiFilterByInputPipe, "tuiFilterByInput", true>;
}
