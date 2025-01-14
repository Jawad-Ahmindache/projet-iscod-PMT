import type { ElementRef, QueryList } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TuiOption } from '@taiga-ui/core/components/data-list';
import type { TuiValueContentContext } from '@taiga-ui/core/types';
import type { TuiItemsHandlers } from '@taiga-ui/kit/tokens';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
export declare class TuiDataListWrapperComponent<T, K = T> {
    private readonly itemsHandlers;
    protected readonly optionsQuery: QueryList<TuiOption<T>>;
    items: readonly K[] | null;
    disabledItemHandler: TuiItemsHandlers<T>['disabledItemHandler'];
    emptyContent: PolymorpheusContent;
    size: "m" | "l" | "s";
    readonly itemClick: EventEmitter<T>;
    itemContent: PolymorpheusContent<TuiValueContentContext<T>>;
    getContext($implicit: T, { nativeElement }: ElementRef<HTMLElement>): TuiValueContentContext<T>;
    getOptions(includeDisabled?: boolean): readonly T[];
    protected $cast(items: readonly K[]): readonly T[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDataListWrapperComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiDataListWrapperComponent<any, any>, "tui-data-list-wrapper:not([labels])", never, { "items": { "alias": "items"; "required": false; }; "disabledItemHandler": { "alias": "disabledItemHandler"; "required": false; }; "emptyContent": { "alias": "emptyContent"; "required": false; }; "size": { "alias": "size"; "required": false; }; "itemContent": { "alias": "itemContent"; "required": false; }; }, { "itemClick": "itemClick"; }, never, never, true, never>;
}
