import * as i1 from '@angular/common';
import { CommonModule, AsyncPipe, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { TuiDay, TuiMonth, TuiDayRange, TUI_FIRST_DAY, TUI_LAST_DAY, MIN_YEAR, MAX_YEAR, TuiYear, TuiMonthRange, TUI_LAST_DISPLAYED_DAY } from '@taiga-ui/cdk/date-time';
import { TuiMapperPipe } from '@taiga-ui/cdk/pipes/mapper';
import { tuiNullableSame, tuiPure, tuiIsNumber } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiScrollIntoView, TuiScrollbar } from '@taiga-ui/core/components/scrollbar';
import { __decorate } from 'tslib';
import { TuiHovered } from '@taiga-ui/cdk/directives/hovered';
import { TuiLet } from '@taiga-ui/cdk/directives/let';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { TuiCalendarSheetPipe, TuiOrderWeekDaysPipe, TuiMonthPipe } from '@taiga-ui/core/pipes';
import { TUI_SHORT_WEEK_DAYS, TUI_DAY_TYPE_HANDLER } from '@taiga-ui/core/tokens';
import { TuiLink } from '@taiga-ui/core/components/link';
import { TuiSpinButton } from '@taiga-ui/core/components/spin-button';

class TuiCalendarSheet {
    constructor() {
        this.today = TuiDay.currentLocal();
        this.unorderedWeekDays$ = inject(TUI_SHORT_WEEK_DAYS);
        this.dayTypeHandler = inject(TUI_DAY_TYPE_HANDLER);
        this.month = TuiMonth.currentLocal();
        this.disabledItemHandler = TUI_FALSE_HANDLER;
        this.markerHandler = null;
        this.value = null;
        this.hoveredItem = null;
        this.showAdjacent = true;
        this.hoveredItemChange = new EventEmitter();
        this.dayClick = new EventEmitter();
        this.toMarkers = (day, today, range, markerHandler) => {
            if (today || ['active', 'end', 'start'].includes(range || '')) {
                return null;
            }
            const markers = markerHandler?.(day);
            return markers?.length ? markers : null;
        };
    }
    itemIsInterval(day) {
        const { value, hoveredItem } = this;
        if (!(value instanceof TuiDayRange)) {
            return false;
        }
        if (!value.isSingleDay) {
            return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
        }
        if (hoveredItem === null) {
            return false;
        }
        const range = TuiDayRange.sort(value.from, hoveredItem);
        return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
    }
    onItemHovered(item) {
        this.updateHoveredItem(item || null);
    }
    getItemRange(item) {
        const { value, hoveredItem } = this;
        if (value instanceof TuiDay) {
            return value.daySame(item) ? 'active' : null;
        }
        if (!value || !(value instanceof TuiDayRange)) {
            return value?.find((day) => day.daySame(item)) ? 'active' : null;
        }
        const range = this.getRange(value, hoveredItem);
        if (value.isSingleDay && range.isSingleDay && value.from.daySame(item)) {
            return 'active';
        }
        if (range.from.daySame(item)) {
            return 'start';
        }
        if (range.to.daySame(item)) {
            return 'end';
        }
        return range.from.dayBefore(item) && range.to.dayAfter(item) ? 'middle' : null;
    }
    get isSingleDayRange() {
        return this.value instanceof TuiDayRange && this.value.isSingleDay;
    }
    itemIsToday(item) {
        return this.today.daySame(item);
    }
    itemIsUnavailable(item) {
        return !this.month.monthSame(item);
    }
    onItemClick(item) {
        if (this.rangeHasDisabledDay(item)) {
            return;
        }
        this.dayClick.emit(item);
    }
    getRange(value, hoveredItem) {
        return value.isSingleDay
            ? TuiDayRange.sort(value.from, hoveredItem ?? value.to)
            : value;
    }
    updateHoveredItem(day) {
        if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }
        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
    rangeHasDisabledDay(item) {
        if (this.value instanceof TuiDayRange) {
            const range = this.getRange(this.value, item);
            for (const day = range.from.toUtcNativeDate(); day <= range.to.toUtcNativeDate(); day.setDate(day.getDate() + 1)) {
                const tuiDay = TuiDay.fromLocalNativeDate(day);
                if (this.disabledItemHandler(tuiDay)) {
                    return true;
                }
            }
        }
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarSheet, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiCalendarSheet, isStandalone: true, selector: "tui-calendar-sheet", inputs: { month: "month", disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", value: "value", hoveredItem: "hoveredItem", showAdjacent: "showAdjacent" }, outputs: { hoveredItemChange: "hoveredItemChange", dayClick: "dayClick" }, host: { properties: { "class._picking": "isSingleDayRange" } }, ngImport: i0, template: "<div class=\"t-row t-row_weekday\">\n    <div\n        *ngFor=\"let day of unorderedWeekDays$ | tuiOrderWeekDays | async\"\n        class=\"t-cell\"\n        [textContent]=\"day\"\n    ></div>\n</div>\n<div *tuiLet=\"month | tuiCalendarSheet: true as sheet\">\n    <div\n        *tuiRepeatTimes=\"let rowIndex of sheet.length\"\n        automation-id=\"tui-calendar-sheet__row\"\n        class=\"t-row\"\n    >\n        <ng-container *tuiRepeatTimes=\"let colIndex of sheet[rowIndex]?.length || 0\">\n            <ng-container *tuiLet=\"sheet[rowIndex]?.[colIndex] as item\">\n                <div\n                    *ngIf=\"item && (!itemIsUnavailable(item) || showAdjacent)\"\n                    automation-id=\"tui-calendar-sheet__cell\"\n                    class=\"t-cell\"\n                    [attr.data-range]=\"getItemRange(item)\"\n                    [attr.data-type]=\"item | tuiMapper: dayTypeHandler\"\n                    [class.t-cell_disabled]=\"disabledItemHandler(item)\"\n                    [class.t-cell_today]=\"itemIsToday(item)\"\n                    [class.t-cell_unavailable]=\"itemIsUnavailable(item)\"\n                    (click)=\"onItemClick(item)\"\n                    (tuiHoveredChange)=\"onItemHovered($event && item)\"\n                >\n                    {{ item.day }}\n                    <div\n                        *ngIf=\"\n                            item\n                                | tuiMapper\n                                    : toMarkers\n                                    : itemIsToday(item)\n                                    : getItemRange(item)\n                                    : markerHandler as markers\n                        \"\n                        class=\"t-dots\"\n                    >\n                        <div\n                            class=\"t-dot\"\n                            [style.background]=\"markers?.[0]\"\n                        ></div>\n                        <div\n                            *ngIf=\"markers.length > 1\"\n                            class=\"t-dot\"\n                            [style.background]=\"markers?.[1] || ''\"\n                        ></div>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-container>\n    </div>\n</div>\n", styles: [".t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell{inline-size:2.25rem}[data-type=weekday]{color:var(--tui-text-primary)}[data-type=weekend]{color:var(--tui-text-negative)}.t-row{justify-content:flex-start}.t-row:first-child{justify-content:flex-end}.t-row_weekday{font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable{opacity:var(--tui-disabled-opacity)}.t-dots{position:absolute;bottom:0;display:flex;justify-content:center;margin-top:-.5rem;padding-bottom:.25rem}.t-dot{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: TuiCalendarSheetPipe, name: "tuiCalendarSheet" }, { kind: "directive", type: TuiHovered, selector: "[tuiHoveredChange]", outputs: ["tuiHoveredChange"] }, { kind: "directive", type: TuiLet, selector: "[tuiLet]", inputs: ["tuiLet"] }, { kind: "pipe", type: TuiMapperPipe, name: "tuiMapper" }, { kind: "pipe", type: TuiOrderWeekDaysPipe, name: "tuiOrderWeekDays" }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiCalendarSheet.prototype, "getRange", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarSheet, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-calendar-sheet', imports: [
                        CommonModule,
                        TuiCalendarSheetPipe,
                        TuiHovered,
                        TuiLet,
                        TuiMapperPipe,
                        TuiOrderWeekDaysPipe,
                        TuiRepeatTimes,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._picking]': 'isSingleDayRange',
                    }, template: "<div class=\"t-row t-row_weekday\">\n    <div\n        *ngFor=\"let day of unorderedWeekDays$ | tuiOrderWeekDays | async\"\n        class=\"t-cell\"\n        [textContent]=\"day\"\n    ></div>\n</div>\n<div *tuiLet=\"month | tuiCalendarSheet: true as sheet\">\n    <div\n        *tuiRepeatTimes=\"let rowIndex of sheet.length\"\n        automation-id=\"tui-calendar-sheet__row\"\n        class=\"t-row\"\n    >\n        <ng-container *tuiRepeatTimes=\"let colIndex of sheet[rowIndex]?.length || 0\">\n            <ng-container *tuiLet=\"sheet[rowIndex]?.[colIndex] as item\">\n                <div\n                    *ngIf=\"item && (!itemIsUnavailable(item) || showAdjacent)\"\n                    automation-id=\"tui-calendar-sheet__cell\"\n                    class=\"t-cell\"\n                    [attr.data-range]=\"getItemRange(item)\"\n                    [attr.data-type]=\"item | tuiMapper: dayTypeHandler\"\n                    [class.t-cell_disabled]=\"disabledItemHandler(item)\"\n                    [class.t-cell_today]=\"itemIsToday(item)\"\n                    [class.t-cell_unavailable]=\"itemIsUnavailable(item)\"\n                    (click)=\"onItemClick(item)\"\n                    (tuiHoveredChange)=\"onItemHovered($event && item)\"\n                >\n                    {{ item.day }}\n                    <div\n                        *ngIf=\"\n                            item\n                                | tuiMapper\n                                    : toMarkers\n                                    : itemIsToday(item)\n                                    : getItemRange(item)\n                                    : markerHandler as markers\n                        \"\n                        class=\"t-dots\"\n                    >\n                        <div\n                            class=\"t-dot\"\n                            [style.background]=\"markers?.[0]\"\n                        ></div>\n                        <div\n                            *ngIf=\"markers.length > 1\"\n                            class=\"t-dot\"\n                            [style.background]=\"markers?.[1] || ''\"\n                        ></div>\n                    </div>\n                </div>\n            </ng-container>\n        </ng-container>\n    </div>\n</div>\n", styles: [".t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell{inline-size:2.25rem}[data-type=weekday]{color:var(--tui-text-primary)}[data-type=weekend]{color:var(--tui-text-negative)}.t-row{justify-content:flex-start}.t-row:first-child{justify-content:flex-end}.t-row_weekday{font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable{opacity:var(--tui-disabled-opacity)}.t-dots{position:absolute;bottom:0;display:flex;justify-content:center;margin-top:-.5rem;padding-bottom:.25rem}.t-dot{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}\n"] }]
        }], propDecorators: { month: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], markerHandler: [{
                type: Input
            }], value: [{
                type: Input
            }], hoveredItem: [{
                type: Input
            }], showAdjacent: [{
                type: Input
            }], hoveredItemChange: [{
                type: Output
            }], dayClick: [{
                type: Output
            }], getRange: [] } });

class TuiCalendarSpin {
    constructor() {
        this.value = TuiMonth.currentLocal();
        this.min = TUI_FIRST_DAY;
        this.max = TUI_LAST_DAY;
        this.valueChange = new EventEmitter();
        this.yearClick = new EventEmitter();
    }
    onYearClick() {
        this.yearClick.next(this.value);
    }
    append(date) {
        const value = this.value.append(date);
        if (this.min.monthSameOrAfter(value)) {
            this.updateValue(this.min);
        }
        else {
            this.updateValue(this.max.monthSameOrBefore(value) ? this.max : value);
        }
    }
    updateValue(value) {
        if (this.value.monthSame(value)) {
            return;
        }
        this.value = value;
        this.valueChange.emit(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarSpin, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiCalendarSpin, isStandalone: true, selector: "tui-calendar-spin", inputs: { value: "value", min: "min", max: "max" }, outputs: { valueChange: "valueChange", yearClick: "yearClick" }, ngImport: i0, template: "<tui-spin-button\n    [focusable]=\"false\"\n    [leftDisabled]=\"value.monthSameOrBefore(min)\"\n    [rightDisabled]=\"value.monthSameOrAfter(max)\"\n    (leftClick)=\"append({month: -1})\"\n    (rightClick)=\"append({month: 1})\"\n>\n    {{ value | tuiMonth | async }}\n    <ng-container *ngIf=\"min.year === max.year; else button\">\n        {{ value.formattedYear }}\n    </ng-container>\n    <ng-template #button>\n        <button\n            id=\"year-btn\"\n            automation-id=\"tui-primitive-year-month-pagination__year-button\"\n            tabIndex=\"-1\"\n            tuiLink\n            type=\"button\"\n            (click)=\"onYearClick()\"\n        >\n            {{ value.formattedYear }}\n        </button>\n    </ng-template>\n</tui-spin-button>\n", styles: [":host{display:block}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiLink, selector: "a[tuiLink], button[tuiLink]", inputs: ["pseudo"] }, { kind: "pipe", type: TuiMonthPipe, name: "tuiMonth" }, { kind: "component", type: TuiSpinButton, selector: "tui-spin-button", inputs: ["focusable", "disabled", "leftDisabled", "rightDisabled"], outputs: ["leftClick", "rightClick"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarSpin, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-calendar-spin', imports: [AsyncPipe, NgIf, TuiLink, TuiMonthPipe, TuiSpinButton], changeDetection: ChangeDetectionStrategy.OnPush, template: "<tui-spin-button\n    [focusable]=\"false\"\n    [leftDisabled]=\"value.monthSameOrBefore(min)\"\n    [rightDisabled]=\"value.monthSameOrAfter(max)\"\n    (leftClick)=\"append({month: -1})\"\n    (rightClick)=\"append({month: 1})\"\n>\n    {{ value | tuiMonth | async }}\n    <ng-container *ngIf=\"min.year === max.year; else button\">\n        {{ value.formattedYear }}\n    </ng-container>\n    <ng-template #button>\n        <button\n            id=\"year-btn\"\n            automation-id=\"tui-primitive-year-month-pagination__year-button\"\n            tabIndex=\"-1\"\n            tuiLink\n            type=\"button\"\n            (click)=\"onYearClick()\"\n        >\n            {{ value.formattedYear }}\n        </button>\n    </ng-template>\n</tui-spin-button>\n", styles: [":host{display:block}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], yearClick: [{
                type: Output
            }] } });

const LIMIT = 100;
const ITEMS_IN_ROW = 4;
class TuiCalendarYear {
    constructor() {
        this.hoveredItem = null;
        this.currentYear = TuiMonth.currentLocal().year;
        this.value = null;
        this.initialItem = this.currentYear;
        this.min = MIN_YEAR;
        this.max = MAX_YEAR;
        this.disabledItemHandler = TUI_FALSE_HANDLER;
        this.yearClick = new EventEmitter();
    }
    isDisabled(item) {
        return ((this.max && this.max < item) ||
            (this.min && this.min > item) ||
            this.disabledItemHandler(item));
    }
    getItemRange(item) {
        const { value, hoveredItem } = this;
        if (value instanceof TuiYear) {
            return value.year === item ? 'active' : null;
        }
        if (tuiIsNumber(value)) {
            return value === item ? 'active' : null;
        }
        if (!(value instanceof TuiMonthRange)) {
            return value?.find((day) => day.year === item) ? 'active' : null;
        }
        const hovered = this.isSingle ? hoveredItem : null;
        const from = Math.min(value.from.year, hovered ?? value.to.year);
        const to = Math.max(value.from.year, hovered ?? value.to.year);
        if (from === to && value.from.year === value.to.year && from === item) {
            return 'active';
        }
        if (from === item) {
            return 'start';
        }
        if (to === item) {
            return 'end';
        }
        return from < item && item < to ? 'middle' : null;
    }
    onItemHovered(hovered, item) {
        this.updateHoveredItem(hovered, item);
    }
    get isSingle() {
        return this.value instanceof TuiMonthRange
            ? this.value.from.monthSame(this.value.to)
            : this.value instanceof TuiDayRange && this.value.isSingleDay;
    }
    get rows() {
        return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
    }
    scrollItemIntoView(item) {
        return this.initialItem === item;
    }
    getItem(rowIndex, colIndex) {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }
    itemIsToday(item) {
        return this.currentYear === item;
    }
    get calculatedMin() {
        const initial = this.initialItem - LIMIT;
        const min = this.min ?? MIN_YEAR;
        return min > initial ? min : initial;
    }
    get calculatedMax() {
        const initial = this.initialItem + LIMIT;
        const max = this.max ?? MAX_YEAR;
        return max < initial ? max + 1 : initial;
    }
    updateHoveredItem(hovered, item) {
        this.hoveredItem = hovered ? item : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarYear, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiCalendarYear, isStandalone: true, selector: "tui-calendar-year", inputs: { value: "value", initialItem: "initialItem", min: "min", max: "max", disabledItemHandler: "disabledItemHandler" }, outputs: { yearClick: "yearClick" }, host: { properties: { "class._picking": "isSingle" } }, ngImport: i0, template: "<div\n    *tuiRepeatTimes=\"let rowIndex of rows\"\n    automation-id=\"tui-calendar-year__row\"\n    class=\"t-row\"\n>\n    <ng-container *tuiRepeatTimes=\"let colIndex of 4\">\n        <div\n            *tuiLet=\"getItem(rowIndex, colIndex) as item\"\n            automation-id=\"tui-calendar-year__cell\"\n            class=\"t-cell\"\n            [attr.data-range]=\"getItemRange(item)\"\n            [class.t-cell_disabled]=\"isDisabled(item)\"\n            [class.t-cell_today]=\"itemIsToday(item)\"\n            [tuiScrollIntoView]=\"scrollItemIntoView(item)\"\n            (click)=\"yearClick.emit(item)\"\n            (tuiHoveredChange)=\"onItemHovered($event, item)\"\n        >\n            {{ item }}\n        </div>\n    </ng-container>\n</div>\n", styles: [".t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;inline-size:16rem}.t-cell{inline-size:4rem;border-block-start-width:.5rem;border-block-end-width:.5rem}\n"], dependencies: [{ kind: "directive", type: TuiHovered, selector: "[tuiHoveredChange]", outputs: ["tuiHoveredChange"] }, { kind: "directive", type: TuiLet, selector: "[tuiLet]", inputs: ["tuiLet"] }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }, { kind: "directive", type: TuiScrollIntoView, selector: "[tuiScrollIntoView]", inputs: ["tuiScrollIntoView"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarYear, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-calendar-year', imports: [TuiHovered, TuiLet, TuiRepeatTimes, TuiScrollIntoView], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._picking]': 'isSingle',
                    }, template: "<div\n    *tuiRepeatTimes=\"let rowIndex of rows\"\n    automation-id=\"tui-calendar-year__row\"\n    class=\"t-row\"\n>\n    <ng-container *tuiRepeatTimes=\"let colIndex of 4\">\n        <div\n            *tuiLet=\"getItem(rowIndex, colIndex) as item\"\n            automation-id=\"tui-calendar-year__cell\"\n            class=\"t-cell\"\n            [attr.data-range]=\"getItemRange(item)\"\n            [class.t-cell_disabled]=\"isDisabled(item)\"\n            [class.t-cell_today]=\"itemIsToday(item)\"\n            [tuiScrollIntoView]=\"scrollItemIntoView(item)\"\n            (click)=\"yearClick.emit(item)\"\n            (tuiHoveredChange)=\"onItemHovered($event, item)\"\n        >\n            {{ item }}\n        </div>\n    </ng-container>\n</div>\n", styles: [".t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;inline-size:16rem}.t-cell{inline-size:4rem;border-block-start-width:.5rem;border-block-end-width:.5rem}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], initialItem: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], yearClick: [{
                type: Output
            }] } });

class TuiCalendar {
    constructor() {
        this.day = null;
        this.view = 'month';
        this.month = TuiMonth.currentLocal();
        this.disabledItemHandler = TUI_FALSE_HANDLER;
        this.min = TUI_FIRST_DAY;
        this.max = TUI_LAST_DAY;
        this.minViewedMonth = TUI_FIRST_DAY;
        this.maxViewedMonth = TUI_LAST_DAY;
        this.hoveredItem = null;
        this.showAdjacent = true;
        this.markerHandler = null;
        this.dayClick = new EventEmitter();
        this.monthChange = new EventEmitter();
        this.hoveredItemChange = new EventEmitter();
        this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
    }
    set value(value) {
        this.day = value;
        if (this.showAdjacent &&
            value instanceof TuiDay &&
            value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)) {
            this.month = value;
        }
    }
    set initialView(view) {
        this.view = view;
    }
    get value() {
        return this.day;
    }
    onPaginationValueChange(month) {
        this.updateViewedMonth(month);
    }
    onDayClick(day) {
        this.dayClick.emit(day);
    }
    onHoveredItemChange(day) {
        this.updateHoveredDay(day);
    }
    get computedMin() {
        return this.min ?? TUI_FIRST_DAY;
    }
    get computedMax() {
        return this.max ?? TUI_LAST_DAY;
    }
    get computedMinViewedMonth() {
        const min = this.computedMin;
        const minViewed = this.minViewedMonth ?? TUI_FIRST_DAY;
        return minViewed.monthSameOrAfter(min) ? minViewed : min;
    }
    get computedMaxViewedMonth() {
        const max = this.computedMax;
        const maxViewed = this.maxViewedMonth ?? TUI_LAST_DAY;
        return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
    }
    get isInYearView() {
        return this.view === 'year';
    }
    onPaginationYearClick() {
        this.view = 'year';
    }
    onPickerYearClick(year) {
        this.view = 'month';
        this.updateViewedMonth(new TuiMonth(year, this.month.month));
    }
    updateViewedMonth(month) {
        if (this.month.monthSame(month)) {
            return;
        }
        this.month = month;
        this.monthChange.emit(month);
    }
    updateHoveredDay(day) {
        if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }
        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendar, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiCalendar, isStandalone: true, selector: "tui-calendar", inputs: { month: "month", disabledItemHandler: "disabledItemHandler", min: "min", max: "max", minViewedMonth: "minViewedMonth", maxViewedMonth: "maxViewedMonth", hoveredItem: "hoveredItem", showAdjacent: "showAdjacent", markerHandler: "markerHandler", value: "value", initialView: "initialView" }, outputs: { dayClick: "dayClick", monthChange: "monthChange", hoveredItemChange: "hoveredItemChange" }, ngImport: i0, template: "<tui-scrollbar\n    *ngIf=\"isInYearView; else calendar\"\n    automation-id=\"tui-calendar__scrollbar\"\n    class=\"t-scrollbar\"\n>\n    <tui-calendar-year\n        automation-id=\"tui-calendar__year\"\n        [initialItem]=\"month.year\"\n        [max]=\"computedMax.year\"\n        [min]=\"computedMin.year\"\n        [value]=\"value\"\n        (yearClick)=\"onPickerYearClick($event)\"\n    />\n</tui-scrollbar>\n<ng-template #calendar>\n    <tui-calendar-spin\n        automation-id=\"tui-calendar__pagination\"\n        class=\"t-pagination\"\n        [max]=\"computedMaxViewedMonth\"\n        [min]=\"computedMinViewedMonth\"\n        [value]=\"month\"\n        (valueChange)=\"onPaginationValueChange($event)\"\n        (yearClick)=\"onPaginationYearClick()\"\n    />\n    <tui-calendar-sheet\n        automation-id=\"tui-calendar__calendar\"\n        [disabledItemHandler]=\"disabledItemHandler | tuiMapper: disabledItemHandlerMapper : computedMin : computedMax\"\n        [hoveredItem]=\"hoveredItem\"\n        [markerHandler]=\"markerHandler\"\n        [month]=\"month\"\n        [showAdjacent]=\"showAdjacent\"\n        [value]=\"value\"\n        (dayClick)=\"onDayClick($event)\"\n        (hoveredItemChange)=\"onHoveredItemChange($event)\"\n    />\n</ng-template>\n", styles: [":host{display:block;min-block-size:18.25rem;inline-size:15.75rem;padding:1rem 1.125rem;box-sizing:content-box}.t-scrollbar{block-size:18.25rem;inline-size:16.875rem}.t-pagination{margin-bottom:1rem}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TuiCalendarSheet, selector: "tui-calendar-sheet", inputs: ["month", "disabledItemHandler", "markerHandler", "value", "hoveredItem", "showAdjacent"], outputs: ["hoveredItemChange", "dayClick"] }, { kind: "component", type: TuiCalendarSpin, selector: "tui-calendar-spin", inputs: ["value", "min", "max"], outputs: ["valueChange", "yearClick"] }, { kind: "component", type: TuiCalendarYear, selector: "tui-calendar-year", inputs: ["value", "initialItem", "min", "max", "disabledItemHandler"], outputs: ["yearClick"] }, { kind: "pipe", type: TuiMapperPipe, name: "tuiMapper" }, { kind: "component", type: TuiScrollbar, selector: "tui-scrollbar", inputs: ["hidden"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendar, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-calendar', imports: [
                        NgIf,
                        TuiCalendarSheet,
                        TuiCalendarSpin,
                        TuiCalendarYear,
                        TuiMapperPipe,
                        TuiScrollbar,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<tui-scrollbar\n    *ngIf=\"isInYearView; else calendar\"\n    automation-id=\"tui-calendar__scrollbar\"\n    class=\"t-scrollbar\"\n>\n    <tui-calendar-year\n        automation-id=\"tui-calendar__year\"\n        [initialItem]=\"month.year\"\n        [max]=\"computedMax.year\"\n        [min]=\"computedMin.year\"\n        [value]=\"value\"\n        (yearClick)=\"onPickerYearClick($event)\"\n    />\n</tui-scrollbar>\n<ng-template #calendar>\n    <tui-calendar-spin\n        automation-id=\"tui-calendar__pagination\"\n        class=\"t-pagination\"\n        [max]=\"computedMaxViewedMonth\"\n        [min]=\"computedMinViewedMonth\"\n        [value]=\"month\"\n        (valueChange)=\"onPaginationValueChange($event)\"\n        (yearClick)=\"onPaginationYearClick()\"\n    />\n    <tui-calendar-sheet\n        automation-id=\"tui-calendar__calendar\"\n        [disabledItemHandler]=\"disabledItemHandler | tuiMapper: disabledItemHandlerMapper : computedMin : computedMax\"\n        [hoveredItem]=\"hoveredItem\"\n        [markerHandler]=\"markerHandler\"\n        [month]=\"month\"\n        [showAdjacent]=\"showAdjacent\"\n        [value]=\"value\"\n        (dayClick)=\"onDayClick($event)\"\n        (hoveredItemChange)=\"onHoveredItemChange($event)\"\n    />\n</ng-template>\n", styles: [":host{display:block;min-block-size:18.25rem;inline-size:15.75rem;padding:1rem 1.125rem;box-sizing:content-box}.t-scrollbar{block-size:18.25rem;inline-size:16.875rem}.t-pagination{margin-bottom:1rem}\n"] }]
        }], propDecorators: { month: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], minViewedMonth: [{
                type: Input
            }], maxViewedMonth: [{
                type: Input
            }], hoveredItem: [{
                type: Input
            }], showAdjacent: [{
                type: Input
            }], markerHandler: [{
                type: Input
            }], dayClick: [{
                type: Output
            }], monthChange: [{
                type: Output
            }], hoveredItemChange: [{
                type: Output
            }], value: [{
                type: Input
            }], initialView: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiCalendar, TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear };
//# sourceMappingURL=taiga-ui-core-components-calendar.mjs.map
