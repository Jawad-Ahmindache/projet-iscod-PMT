import { EventEmitter } from '@angular/core';
import type { TuiSizeS } from '@taiga-ui/core/types';
import { TuiAccordionItemContent } from './accordion-item-content.directive';
import { TuiAccordionItemEagerContent } from './accordion-item-eager-content.directive';
import * as i0 from "@angular/core";
export declare class TuiAccordionItem {
    private readonly cdr;
    protected readonly eagerContent?: TuiAccordionItemEagerContent;
    protected readonly lazyContent?: TuiAccordionItemContent;
    noPadding: boolean;
    showArrow: boolean;
    borders: 'all' | 'top-bottom' | null;
    size: TuiSizeS;
    disabled: boolean;
    disableHover: boolean;
    open: boolean;
    async: boolean;
    readonly openChange: EventEmitter<boolean>;
    close(): void;
    protected onRowToggle(): void;
    protected onItemKeyDownEsc(event: Event): void;
    private updateOpen;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiAccordionItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiAccordionItem, "tui-accordion-item", never, { "noPadding": { "alias": "noPadding"; "required": false; }; "showArrow": { "alias": "showArrow"; "required": false; }; "borders": { "alias": "borders"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "disableHover": { "alias": "disableHover"; "required": false; }; "open": { "alias": "open"; "required": false; }; "async": { "alias": "async"; "required": false; }; }, { "openChange": "openChange"; }, ["eagerContent", "lazyContent"], ["*", "[tuiAccordionItemContent]:not(ng-template)"], true, never>;
}
