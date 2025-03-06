import { TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TuiTableHead<T extends Partial<Record<keyof T, any>>> {
    tuiHead: string | keyof T;
    readonly template: TemplateRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTableHead<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiTableHead<any>, "[tuiHead]", never, { "tuiHead": { "alias": "tuiHead"; "required": true; }; }, {}, never, never, true, never>;
}
