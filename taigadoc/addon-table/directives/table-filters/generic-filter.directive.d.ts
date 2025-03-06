import { AbstractTuiTableFilter } from './abstract-table-filter';
import * as i0 from "@angular/core";
export declare class TuiGenericFilter<T, G> extends AbstractTuiTableFilter<T, G> {
    filter: (item: T, value: G) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiGenericFilter<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiGenericFilter<any, any>, "[tuiGenericFilter]", never, { "filter": { "alias": "tuiGenericFilter"; "required": false; }; }, {}, never, never, true, never>;
}
