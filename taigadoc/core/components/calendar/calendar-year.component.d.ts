import { EventEmitter } from '@angular/core';
import type { TuiDay } from '@taiga-ui/cdk/date-time';
import { TuiDayRange, TuiMonthRange, TuiYear } from '@taiga-ui/cdk/date-time';
import type { TuiBooleanHandler } from '@taiga-ui/cdk/types';
import * as i0 from "@angular/core";
export declare class TuiCalendarYear {
    private hoveredItem;
    private readonly currentYear;
    value: TuiDayRange | TuiMonthRange | TuiYear | number | readonly TuiDay[] | null;
    initialItem: number;
    min: number | null;
    max: number | null;
    disabledItemHandler: TuiBooleanHandler<number>;
    readonly yearClick: EventEmitter<number>;
    isDisabled(item: number): boolean;
    getItemRange(item: number): 'active' | 'end' | 'middle' | 'start' | null;
    onItemHovered(hovered: boolean, item: number): void;
    protected get isSingle(): boolean;
    protected get rows(): number;
    protected scrollItemIntoView(item: number): boolean;
    protected getItem(rowIndex: number, colIndex: number): number;
    protected itemIsToday(item: number): boolean;
    private get calculatedMin();
    private get calculatedMax();
    private updateHoveredItem;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiCalendarYear, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiCalendarYear, "tui-calendar-year", never, { "value": { "alias": "value"; "required": false; }; "initialItem": { "alias": "initialItem"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "disabledItemHandler": { "alias": "disabledItemHandler"; "required": false; }; }, { "yearClick": "yearClick"; }, never, never, true, never>;
}
