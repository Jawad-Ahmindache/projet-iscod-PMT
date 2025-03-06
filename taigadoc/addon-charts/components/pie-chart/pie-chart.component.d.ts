import { EventEmitter } from '@angular/core';
import type { TuiContext } from '@taiga-ui/cdk/types';
import type { TuiSizeXL, TuiSizeXS } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
export declare class TuiPieChart {
    private readonly hintOptions;
    private readonly autoId;
    value: readonly number[];
    size: TuiSizeXL | TuiSizeXS;
    masked: boolean;
    activeItemIndex: number;
    readonly activeItemIndexChange: EventEmitter<number>;
    constructor();
    protected get empty(): boolean;
    protected get hintContent(): PolymorpheusContent<TuiContext<number>>;
    protected get maskId(): string;
    protected get mask(): string | null;
    protected get radius(): string;
    protected get segments(): ReadonlyArray<[number, number]>;
    protected getTransform(index: number): string | null;
    protected onHovered(hovered: boolean, index: number): void;
    private getSum;
    private getSegments;
    private getDeg;
    private updateActiveItemIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiPieChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiPieChart, "tui-pie-chart", never, { "value": { "alias": "value"; "required": false; }; "size": { "alias": "size"; "required": false; }; "masked": { "alias": "masked"; "required": false; }; "activeItemIndex": { "alias": "activeItemIndex"; "required": false; }; }, { "activeItemIndexChange": "activeItemIndexChange"; }, never, never, true, never>;
}
