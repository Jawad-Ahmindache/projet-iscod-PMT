import type { OnChanges, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import type { TuiDay, TuiDayLike } from '@taiga-ui/cdk/date-time';
import { TuiDayRange, TuiMonth } from '@taiga-ui/cdk/date-time';
import type { TuiBooleanHandler, TuiMapper } from '@taiga-ui/cdk/types';
import type { TuiMarkerHandler } from '@taiga-ui/core/components/calendar';
import type { Observable } from 'rxjs';
import type { TuiDayRangePeriod } from './day-range-period';
import * as i0 from "@angular/core";
export declare class TuiCalendarRange implements OnInit, OnChanges {
    /**
     * @deprecated use `item`
     */
    private selectedPeriod;
    protected previousValue: TuiDayRange | null;
    protected hoveredItem: TuiDay | null;
    protected month: TuiMonth;
    protected readonly otherDateText$: Observable<string>;
    protected readonly icons: import("@taiga-ui/core/tokens").TuiCommonIcons;
    protected readonly capsMapper: TuiMapper<[TuiDay | null, TuiDayRange | null, TuiDayLike | null, boolean], TuiDay>;
    disabledItemHandler: TuiBooleanHandler<TuiDay>;
    markerHandler: TuiMarkerHandler | null;
    items: readonly TuiDayRangePeriod[];
    min: TuiDay | null;
    max: TuiDay | null;
    minLength: TuiDayLike | null;
    maxLength: TuiDayLike | null;
    value: TuiDayRange | null;
    item: TuiDayRangePeriod | null;
    readonly valueChange: EventEmitter<TuiDayRange | null>;
    readonly itemChange: EventEmitter<TuiDayRangePeriod | null>;
    constructor();
    set defaultViewedMonth(month: TuiMonth);
    get defaultViewedMonth(): TuiMonth;
    /**
     * @deprecated use `item`
     */
    get selectedActivePeriod(): TuiDayRangePeriod | null;
    /**
     * @deprecated use `item`
     */
    set selectedActivePeriod(period: TuiDayRangePeriod | null);
    ngOnChanges(): void;
    ngOnInit(): void;
    protected get calculatedDisabledItemHandler(): TuiBooleanHandler<TuiDay>;
    protected onEsc(event: KeyboardEvent): void;
    protected readonly monthOffset: TuiMapper<[TuiMonth, number], TuiMonth>;
    protected readonly mapper: TuiMapper<[
        readonly TuiDayRangePeriod[],
        TuiDay | null,
        TuiDay | null,
        TuiDayLike | null,
        string | null | undefined
    ], ReadonlyArray<TuiDayRangePeriod | string>>;
    protected isItemActive(item: TuiDayRangePeriod | string): boolean;
    protected onItemSelect(item: TuiDayRangePeriod | string): void;
    protected onMonthChange(month: TuiMonth): void;
    protected onDayClick(day: TuiDay): void;
    protected updateValue(value: TuiDayRange | null): void;
    private get activePeriod();
    private calculateDisabledItemHandler;
    private initDefaultViewedMonth;
    private findItemByDayRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiCalendarRange, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiCalendarRange, "tui-calendar-range", never, { "disabledItemHandler": { "alias": "disabledItemHandler"; "required": false; }; "markerHandler": { "alias": "markerHandler"; "required": false; }; "items": { "alias": "items"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "minLength": { "alias": "minLength"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "value": { "alias": "value"; "required": false; }; "item": { "alias": "item"; "required": false; }; "defaultViewedMonth": { "alias": "defaultViewedMonth"; "required": false; }; }, { "valueChange": "valueChange"; "itemChange": "itemChange"; }, never, never, true, never>;
}
