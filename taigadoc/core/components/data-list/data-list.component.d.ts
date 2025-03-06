import type { AfterContentChecked } from '@angular/core';
import type { TuiSizeL, TuiSizeS } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { TuiDataListAccessor } from './data-list.tokens';
import * as i0 from "@angular/core";
export declare function tuiInjectDataListSize(): TuiSizeL | TuiSizeS;
export declare class TuiDataListComponent<T> implements TuiDataListAccessor<T>, AfterContentChecked {
    private readonly options;
    private origin?;
    private readonly ngZone;
    private readonly destroyRef;
    private readonly el;
    private readonly cdr;
    protected readonly fallback: import("@angular/core").Signal<string | undefined>;
    protected readonly empty: import("@angular/core").WritableSignal<boolean>;
    emptyContent: PolymorpheusContent;
    size: "m" | "l" | "s";
    onKeyDownArrow(current: HTMLElement, step: number): void;
    handleFocusLossIfNecessary(element?: Element): void;
    ngAfterContentChecked(): void;
    getOptions(includeDisabled?: boolean): readonly T[];
    protected onFocusIn(relatedTarget: HTMLElement, currentTarget: HTMLElement): void;
    private get elements();
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDataListComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiDataListComponent<any>, "tui-data-list", never, { "emptyContent": { "alias": "emptyContent"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, ["options"], ["*"], true, never>;
}
