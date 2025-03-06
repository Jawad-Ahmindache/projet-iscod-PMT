import type { OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TuiItemsWithMoreDirective implements OnChanges {
    itemsLimit: number;
    required: number;
    side: 'end' | 'start';
    readonly change$: Subject<void>;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiItemsWithMoreDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiItemsWithMoreDirective, never, never, { "itemsLimit": { "alias": "itemsLimit"; "required": false; }; "required": { "alias": "required"; "required": false; }; "side": { "alias": "side"; "required": false; }; }, {}, never, never, true, never>;
}
