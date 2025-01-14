import { EventEmitter } from '@angular/core';
import { TuiDay, TuiDayRange, TuiMonth } from '@taiga-ui/cdk/date-time';
import type { TuiBooleanHandler, TuiHandler } from '@taiga-ui/cdk/types';
import * as i0 from "@angular/core";
export type TuiMarkerHandler = TuiHandler<TuiDay, [] | [string, string] | [string]>;
export declare class TuiCalendarSheet {
    private readonly today;
    protected readonly unorderedWeekDays$: import("rxjs").Observable<readonly [Monday: string, Tuesday: string, Wednesday: string, Thursday: string, Friday: string, Saturday: string, Sunday: string]>;
    protected readonly dayTypeHandler: TuiHandler<TuiDay, string>;
    month: TuiMonth;
    disabledItemHandler: TuiBooleanHandler<TuiDay>;
    markerHandler: TuiMarkerHandler | null;
    value: TuiDay | TuiDayRange | readonly TuiDay[] | null;
    hoveredItem: TuiDay | null;
    showAdjacent: boolean;
    readonly hoveredItemChange: EventEmitter<TuiDay | null>;
    readonly dayClick: EventEmitter<TuiDay>;
    itemIsInterval(day: TuiDay): boolean;
    onItemHovered(item: TuiDay | false): void;
    getItemRange(item: TuiDay): 'active' | 'end' | 'middle' | 'start' | null;
    protected get isSingleDayRange(): boolean;
    protected readonly toMarkers: (day: TuiDay, today: boolean, range: string | null, markerHandler: TuiMarkerHandler | null) => [
        string,
        string
    ] | [
        string
    ] | null;
    protected itemIsToday(item: TuiDay): boolean;
    protected itemIsUnavailable(item: TuiDay): boolean;
    protected onItemClick(item: TuiDay): void;
    private getRange;
    private updateHoveredItem;
    private rangeHasDisabledDay;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiCalendarSheet, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiCalendarSheet, "tui-calendar-sheet", never, { "month": { "alias": "month"; "required": false; }; "disabledItemHandler": { "alias": "disabledItemHandler"; "required": false; }; "markerHandler": { "alias": "markerHandler"; "required": false; }; "value": { "alias": "value"; "required": false; }; "hoveredItem": { "alias": "hoveredItem"; "required": false; }; "showAdjacent": { "alias": "showAdjacent"; "required": false; }; }, { "hoveredItemChange": "hoveredItemChange"; "dayClick": "dayClick"; }, never, never, true, never>;
}
