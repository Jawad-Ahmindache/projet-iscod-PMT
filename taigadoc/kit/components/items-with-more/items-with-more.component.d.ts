import type { QueryList } from '@angular/core';
import { TemplateRef } from '@angular/core';
import type { TuiContext } from '@taiga-ui/cdk/types';
import { TuiItemsWithMoreDirective } from './items-with-more.directive';
import * as i0 from "@angular/core";
import * as i1 from "./items-with-more.directive";
export declare class TuiItemsWithMoreComponent {
    protected readonly items: QueryList<TemplateRef<unknown>>;
    protected readonly more?: TemplateRef<TuiContext<number>>;
    protected readonly directive: TuiItemsWithMoreDirective;
    protected readonly lastIndex: import("@angular/core").Signal<number>;
    protected get isMoreHidden(): boolean;
    protected isHidden(index: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiItemsWithMoreComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiItemsWithMoreComponent, "tui-items-with-more", never, {}, {}, ["more", "items"], never, true, [{ directive: typeof i1.TuiItemsWithMoreDirective; inputs: { "itemsLimit": "itemsLimit"; "required": "required"; "side": "side"; }; outputs: {}; }]>;
}
