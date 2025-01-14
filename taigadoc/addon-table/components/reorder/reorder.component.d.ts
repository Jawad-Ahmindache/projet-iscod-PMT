import { EventEmitter } from '@angular/core';
import type { TuiContext } from '@taiga-ui/cdk/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
export declare class TuiReorder<T> {
    private dragging;
    protected order: Map<number, number>;
    protected unsortedItems: readonly T[];
    protected readonly options: import("./reorder.options").TuiReorderOptions;
    protected readonly showHideText$: import("rxjs").Observable<string>;
    enabled: readonly T[];
    readonly itemsChange: EventEmitter<T[]>;
    readonly enabledChange: EventEmitter<T[]>;
    set items(items: readonly T[]);
    content: PolymorpheusContent<TuiContext<T> & {
        index: number;
    }>;
    protected onDrag(): void;
    protected onDrop(): void;
    protected isEnabled(item: T): boolean;
    protected getIcon(item: T): string;
    protected toggle(toggled: T): void;
    protected move(index: number, direction: number): void;
    private getSortedItems;
    private updateItems;
    private updateEnabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiReorder<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiReorder<any>, "tui-reorder", never, { "enabled": { "alias": "enabled"; "required": false; }; "items": { "alias": "items"; "required": false; }; "content": { "alias": "content"; "required": false; }; }, { "itemsChange": "itemsChange"; "enabledChange": "enabledChange"; }, never, never, true, never>;
}
