import type { ElementRef, QueryList } from '@angular/core';
import type { TuiSizeXL } from '@taiga-ui/core/types';
import type { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TuiArcChart {
    private readonly arcs$;
    protected initialized: import("@angular/core").WritableSignal<boolean>;
    protected readonly $: import("rxjs").Subscription;
    value: readonly number[];
    size: TuiSizeXL;
    max: number;
    minLabel: string;
    maxLabel: string;
    activeItemIndex: number;
    readonly activeItemIndexChange: Observable<number>;
    protected set arcs(arcs: QueryList<ElementRef<SVGElement>>);
    protected get width(): number;
    protected get strokeWidth(): number;
    protected isInactive(index: number): boolean;
    protected getInset(index: number): number;
    protected getDiameter(index: number): number;
    protected getLength(index: number): number;
    protected getOffset(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiArcChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiArcChart, "tui-arc-chart", never, { "value": { "alias": "value"; "required": false; }; "size": { "alias": "size"; "required": false; }; "max": { "alias": "max"; "required": false; }; "minLabel": { "alias": "minLabel"; "required": false; }; "maxLabel": { "alias": "maxLabel"; "required": false; }; "activeItemIndex": { "alias": "activeItemIndex"; "required": false; }; }, { "activeItemIndexChange": "activeItemIndexChange"; }, never, ["*"], true, never>;
}
