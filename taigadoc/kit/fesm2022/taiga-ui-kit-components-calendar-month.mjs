import { __decorate } from 'tslib';
import { NgIf, AsyncPipe, NgForOf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { TuiDay, TUI_FIRST_DAY, TUI_LAST_DAY, TuiMonthRange, TuiMonth, TuiYear } from '@taiga-ui/cdk/date-time';
import { TuiHovered } from '@taiga-ui/cdk/directives/hovered';
import { TuiLet } from '@taiga-ui/cdk/directives/let';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { tuiNullableSame, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiCalendarYear } from '@taiga-ui/core/components/calendar';
import { TuiLink } from '@taiga-ui/core/components/link';
import { TuiScrollbar } from '@taiga-ui/core/components/scrollbar';
import { TuiSpinButton } from '@taiga-ui/core/components/spin-button';
import { TUI_CALENDAR_MONTHS } from '@taiga-ui/kit/tokens';

const TODAY = TuiDay.currentLocal();
class TuiCalendarMonth {
    constructor() {
        this.isYearPickerShown = false;
        this.months = toSignal(inject(TUI_CALENDAR_MONTHS));
        this.value = null;
        this.year = TODAY;
        this.disabledItemHandler = TUI_FALSE_HANDLER;
        this.minLength = null;
        this.maxLength = null;
        this.min = TUI_FIRST_DAY;
        this.max = TUI_LAST_DAY;
        this.monthClick = new EventEmitter();
        this.hoveredItemChange = new EventEmitter();
        this.yearChange = new EventEmitter();
        this.hoveredItem = null;
    }
    get isSingle() {
        return this.value instanceof TuiMonthRange && this.value.isSingleMonth;
    }
    onNextYear() {
        this.updateActiveYear(this.year.append({ year: 1 }));
    }
    onPreviousYear() {
        this.updateActiveYear(this.year.append({ year: -1 }));
    }
    getItemRange(item) {
        const { value, hoveredItem } = this;
        if (!(value instanceof TuiMonthRange)) {
            return value?.monthSame(item) ? 'active' : null;
        }
        const months = item.month + item.year * 12;
        const hovered = hoveredItem ? hoveredItem.month + hoveredItem.year * 12 : null;
        const from = value.from.month + value.from.year * 12;
        const to = value.to.month + value.to.year * 12;
        const picking = this.isSingle ? hovered : null;
        const min = Math.min(from, to, picking ?? from);
        const max = Math.max(from, to, picking ?? from);
        if (min === max && min === months) {
            return 'active';
        }
        if (min === months) {
            return 'start';
        }
        if (max === months) {
            return 'end';
        }
        return min < months && months < max ? 'middle' : null;
    }
    get computedMin() {
        return this.min ?? TUI_FIRST_DAY;
    }
    get computedMax() {
        return this.max ?? TUI_LAST_DAY;
    }
    get previousYearDisabled() {
        return this.year.yearSameOrBefore(this.computedMin);
    }
    get nextYearDisabled() {
        return this.year.yearSameOrAfter(this.computedMax);
    }
    get disabledItemHandlerWithMinMax() {
        return this.calculateDisabledItemHandlerWithMinMax(this.disabledItemHandler, this.value, this.computedMin, this.computedMax, this.minLength, this.maxLength);
    }
    getTuiMonth(monthNumber, yearNumber) {
        return new TuiMonth(yearNumber, monthNumber);
    }
    isItemToday(item) {
        return TODAY.monthSame(item);
    }
    onPickerYearClick(year) {
        this.isYearPickerShown = false;
        if (this.year.year !== year) {
            this.updateActiveYear(new TuiYear(year));
        }
    }
    onItemClick(month) {
        if (!this.disabledItemHandlerWithMinMax(month)) {
            this.monthClick.emit(month);
        }
    }
    onYearClick() {
        this.isYearPickerShown = true;
    }
    onItemHovered(hovered, item) {
        this.updateHoveredItem(hovered ? item : null);
    }
    calculateDisabledItemHandlerWithMinMax(disabledItemHandler, value, min, max, minLength, maxLength) {
        return (item) => {
            const delta = value instanceof TuiMonthRange && value.isSingleMonth
                ? Math.abs(item.year * 12 +
                    item.month -
                    value.from.year * 12 -
                    value.from.month)
                : 0;
            const tooLong = delta && maxLength && delta > maxLength;
            const tooShort = delta && minLength && delta < minLength;
            return (tooLong ||
                tooShort ||
                item.monthBefore(min) ||
                item.monthAfter(max) ||
                disabledItemHandler(item));
        };
    }
    updateHoveredItem(month) {
        if (tuiNullableSame(this.hoveredItem, month, (a, b) => a.monthSame(b))) {
            return;
        }
        this.hoveredItem = month;
        this.hoveredItemChange.emit(month);
    }
    updateActiveYear(year) {
        this.year = year;
        this.yearChange.emit(year);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarMonth, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiCalendarMonth, isStandalone: true, selector: "tui-calendar-month", inputs: { value: "value", year: "year", disabledItemHandler: "disabledItemHandler", minLength: "minLength", maxLength: "maxLength", min: "min", max: "max" }, outputs: { monthClick: "monthClick", hoveredItemChange: "hoveredItemChange", yearChange: "yearChange" }, host: { properties: { "class._picking": "isSingle" } }, ngImport: i0, template: "<tui-scrollbar\n    *ngIf=\"isYearPickerShown; else monthSelect\"\n    class=\"t-scrollbar\"\n>\n    <tui-calendar-year\n        [initialItem]=\"year.year\"\n        [max]=\"computedMax.year\"\n        [min]=\"computedMin.year\"\n        [value]=\"value\"\n        (yearClick)=\"onPickerYearClick($event)\"\n    />\n</tui-scrollbar>\n<ng-template #monthSelect>\n    <tui-spin-button\n        class=\"t-spin\"\n        [focusable]=\"false\"\n        [leftDisabled]=\"previousYearDisabled\"\n        [rightDisabled]=\"nextYearDisabled\"\n        (leftClick)=\"onPreviousYear()\"\n        (rightClick)=\"onNextYear()\"\n    >\n        <button\n            automation-id=\"tui-calendar-month__active-year\"\n            tabIndex=\"-1\"\n            tuiLink\n            type=\"button\"\n            (click)=\"onYearClick()\"\n        >\n            {{ year.formattedYear }}\n        </button>\n    </tui-spin-button>\n    <div\n        *tuiRepeatTimes=\"let row of 3\"\n        class=\"t-row\"\n    >\n        <ng-container *tuiRepeatTimes=\"let column of 4\">\n            <div\n                *tuiLet=\"getTuiMonth(row * 4 + column, year.year) as item\"\n                class=\"t-cell\"\n                [attr.data-range]=\"getItemRange(item)\"\n                [class.t-cell_disabled]=\"disabledItemHandlerWithMinMax(item)\"\n                [class.t-cell_today]=\"isItemToday(item)\"\n                (click)=\"onItemClick(item)\"\n                (tuiHoveredChange)=\"onItemHovered($event, item)\"\n            >\n                {{ months()?.[row * 4 + column] }}\n            </div>\n        </ng-container>\n    </div>\n</ng-template>\n", styles: [".t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;block-size:12rem;inline-size:16rem;padding:1.125rem;box-sizing:content-box}.t-spin{margin-block-end:1rem}.t-cell{inline-size:4rem;border-block-start-width:.75rem;border-block-end-width:.75rem}.t-scrollbar{block-size:inherit;inline-size:inherit}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TuiCalendarYear, selector: "tui-calendar-year", inputs: ["value", "initialItem", "min", "max", "disabledItemHandler"], outputs: ["yearClick"] }, { kind: "directive", type: TuiHovered, selector: "[tuiHoveredChange]", outputs: ["tuiHoveredChange"] }, { kind: "directive", type: TuiLet, selector: "[tuiLet]", inputs: ["tuiLet"] }, { kind: "directive", type: TuiLink, selector: "a[tuiLink], button[tuiLink]", inputs: ["pseudo"] }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }, { kind: "component", type: TuiScrollbar, selector: "tui-scrollbar", inputs: ["hidden"] }, { kind: "component", type: TuiSpinButton, selector: "tui-spin-button", inputs: ["focusable", "disabled", "leftDisabled", "rightDisabled"], outputs: ["leftClick", "rightClick"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiCalendarMonth.prototype, "calculateDisabledItemHandlerWithMinMax", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarMonth, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-calendar-month', imports: [
                        AsyncPipe,
                        NgForOf,
                        NgIf,
                        TuiCalendarYear,
                        TuiHovered,
                        TuiLet,
                        TuiLink,
                        TuiRepeatTimes,
                        TuiScrollbar,
                        TuiSpinButton,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._picking]': 'isSingle',
                    }, template: "<tui-scrollbar\n    *ngIf=\"isYearPickerShown; else monthSelect\"\n    class=\"t-scrollbar\"\n>\n    <tui-calendar-year\n        [initialItem]=\"year.year\"\n        [max]=\"computedMax.year\"\n        [min]=\"computedMin.year\"\n        [value]=\"value\"\n        (yearClick)=\"onPickerYearClick($event)\"\n    />\n</tui-scrollbar>\n<ng-template #monthSelect>\n    <tui-spin-button\n        class=\"t-spin\"\n        [focusable]=\"false\"\n        [leftDisabled]=\"previousYearDisabled\"\n        [rightDisabled]=\"nextYearDisabled\"\n        (leftClick)=\"onPreviousYear()\"\n        (rightClick)=\"onNextYear()\"\n    >\n        <button\n            automation-id=\"tui-calendar-month__active-year\"\n            tabIndex=\"-1\"\n            tuiLink\n            type=\"button\"\n            (click)=\"onYearClick()\"\n        >\n            {{ year.formattedYear }}\n        </button>\n    </tui-spin-button>\n    <div\n        *tuiRepeatTimes=\"let row of 3\"\n        class=\"t-row\"\n    >\n        <ng-container *tuiRepeatTimes=\"let column of 4\">\n            <div\n                *tuiLet=\"getTuiMonth(row * 4 + column, year.year) as item\"\n                class=\"t-cell\"\n                [attr.data-range]=\"getItemRange(item)\"\n                [class.t-cell_disabled]=\"disabledItemHandlerWithMinMax(item)\"\n                [class.t-cell_today]=\"isItemToday(item)\"\n                (click)=\"onItemClick(item)\"\n                (tuiHoveredChange)=\"onItemHovered($event, item)\"\n            >\n                {{ months()?.[row * 4 + column] }}\n            </div>\n        </ng-container>\n    </div>\n</ng-template>\n", styles: [".t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:\"\";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 32\"><path d=\"M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z\"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover) and (pointer: fine){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;block-size:12rem;inline-size:16rem;padding:1.125rem;box-sizing:content-box}.t-spin{margin-block-end:1rem}.t-cell{inline-size:4rem;border-block-start-width:.75rem;border-block-end-width:.75rem}.t-scrollbar{block-size:inherit;inline-size:inherit}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], year: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], monthClick: [{
                type: Output
            }], hoveredItemChange: [{
                type: Output
            }], yearChange: [{
                type: Output
            }], calculateDisabledItemHandlerWithMinMax: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiCalendarMonth };
//# sourceMappingURL=taiga-ui-kit-components-calendar-month.mjs.map
