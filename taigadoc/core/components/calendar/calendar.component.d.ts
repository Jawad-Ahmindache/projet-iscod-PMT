import { EventEmitter } from '@angular/core';
import type { TuiDayRange } from '@taiga-ui/cdk/date-time';
import { TuiDay, TuiMonth } from '@taiga-ui/cdk/date-time';
import type { TuiBooleanHandler, TuiMapper } from '@taiga-ui/cdk/types';
import type { TuiMarkerHandler } from './calendar-sheet.component';
import * as i0 from "@angular/core";
export declare class TuiCalendar {
    private day;
    private view;
    month: TuiMonth;
    disabledItemHandler: TuiBooleanHandler<TuiDay>;
    min: TuiDay | null;
    max: TuiDay | null;
    minViewedMonth: TuiMonth | null;
    maxViewedMonth: TuiMonth | null;
    hoveredItem: TuiDay | null;
    showAdjacent: boolean;
    markerHandler: TuiMarkerHandler | null;
    readonly dayClick: EventEmitter<TuiDay>;
    readonly monthChange: EventEmitter<TuiMonth>;
    readonly hoveredItemChange: EventEmitter<TuiDay | null>;
    set value(value: TuiDay | TuiDayRange | readonly TuiDay[] | null);
    set initialView(view: 'month' | 'year');
    get value(): TuiDay | TuiDayRange | readonly TuiDay[] | null;
    onPaginationValueChange(month: TuiMonth): void;
    onDayClick(day: TuiDay): void;
    onHoveredItemChange(day: TuiDay | null): void;
    protected get computedMin(): TuiDay;
    protected get computedMax(): TuiDay;
    protected get computedMinViewedMonth(): TuiMonth;
    protected get computedMaxViewedMonth(): TuiMonth;
    protected get isInYearView(): boolean;
    protected readonly disabledItemHandlerMapper: TuiMapper<[
        TuiBooleanHandler<TuiDay>,
        TuiDay,
        TuiDay
    ], TuiBooleanHandler<TuiDay>>;
    protected onPaginationYearClick(): void;
    protected onPickerYearClick(year: number): void;
    private updateViewedMonth;
    private updateHoveredDay;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiCalendar, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiCalendar, "tui-calendar", never, { "month": { "alias": "month"; "required": false; }; "disabledItemHandler": { "alias": "disabledItemHandler"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "minViewedMonth": { "alias": "minViewedMonth"; "required": false; }; "maxViewedMonth": { "alias": "maxViewedMonth"; "required": false; }; "hoveredItem": { "alias": "hoveredItem"; "required": false; }; "showAdjacent": { "alias": "showAdjacent"; "required": false; }; "markerHandler": { "alias": "markerHandler"; "required": false; }; "value": { "alias": "value"; "required": false; }; "initialView": { "alias": "initialView"; "required": false; }; }, { "dayClick": "dayClick"; "monthChange": "monthChange"; "hoveredItemChange": "hoveredItemChange"; }, never, never, true, never>;
}
