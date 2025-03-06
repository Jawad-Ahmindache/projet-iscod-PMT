import { __decorate } from 'tslib';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { TUI_FIRST_DAY, TUI_LAST_DAY, TuiMonth, TuiDayRange, TuiDay } from '@taiga-ui/cdk/date-time';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { TuiMapperPipe } from '@taiga-ui/cdk/pipes/mapper';
import { tuiIsString, tuiNullableSame, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiCalendar } from '@taiga-ui/core/components/calendar';
import * as i1 from '@taiga-ui/core/components/data-list';
import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TUI_COMMON_ICONS } from '@taiga-ui/core/tokens';
import { TUI_OTHER_DATE_TEXT, TUI_CALENDAR_DATE_STREAM } from '@taiga-ui/kit/tokens';

const calculateDisabledItemHandler = (disabledItemHandler, value, minLength) => (item) => {
    if (!value?.isSingleDay || !minLength) {
        return disabledItemHandler(item);
    }
    const negativeMinLength = Object.fromEntries(Object.entries(minLength).map(([key, value]) => [key, -value]));
    const disabledBefore = value.from.append(negativeMinLength).append({ day: 1 });
    const disabledAfter = value.from.append(minLength).append({ day: -1 });
    const inDisabledRange = disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);
    return inDisabledRange || disabledItemHandler(item);
};

const TUI_DAY_CAPS_MAPPER = (current, value, maxLength, backwards) => {
    if (!value?.isSingleDay || !maxLength) {
        return backwards ? current || TUI_FIRST_DAY : current || TUI_LAST_DAY;
    }
    const negativeMaxLength = Object.fromEntries(Object.entries(maxLength).map(([key, value]) => [key, -value]));
    const dateShift = value.from
        .append(backwards ? negativeMaxLength : maxLength)
        .append({ day: !backwards ? -1 : 1 });
    if (backwards) {
        return dateShift.dayBefore(current || TUI_FIRST_DAY)
            ? current || TUI_FIRST_DAY
            : dateShift;
    }
    if (!current) {
        return dateShift;
    }
    return dateShift.dayAfter(current) ? current : dateShift;
};

class TuiCalendarRange {
    constructor() {
        /**
         * @deprecated use `item`
         */
        this.selectedPeriod = null;
        this.previousValue = null;
        this.hoveredItem = null;
        this.month = TuiMonth.currentLocal();
        this.otherDateText$ = inject(TUI_OTHER_DATE_TEXT);
        this.icons = inject(TUI_COMMON_ICONS);
        this.capsMapper = TUI_DAY_CAPS_MAPPER;
        this.disabledItemHandler = TUI_FALSE_HANDLER;
        this.markerHandler = null;
        this.items = [];
        this.min = TUI_FIRST_DAY;
        this.max = TUI_LAST_DAY;
        this.minLength = null;
        this.maxLength = null;
        this.value = null;
        this.item = null;
        this.valueChange = new EventEmitter();
        this.itemChange = new EventEmitter();
        this.monthOffset = (value, month) => value.append({ month });
        this.mapper = (items, min, max, minLength, otherDateText) => [
            ...items.filter((item) => (minLength === null ||
                item.range.from
                    .append(minLength)
                    .append({ day: -1 })
                    .daySameOrBefore(item.range.to)) &&
                (min === null || item.range.to.daySameOrAfter(min)) &&
                (max === null || item.range.from.daySameOrBefore(max))),
            otherDateText || '',
        ];
        inject(TUI_CALENDAR_DATE_STREAM, { optional: true })
            ?.pipe(tuiWatch(), takeUntilDestroyed())
            .subscribe((value) => {
            this.value = value;
            this.initDefaultViewedMonth();
        });
    }
    set defaultViewedMonth(month) {
        if (!this.value) {
            this.month = month;
        }
    }
    get defaultViewedMonth() {
        return this.month;
    }
    /**
     * @deprecated use `item`
     */
    get selectedActivePeriod() {
        return this.selectedPeriod;
    }
    /**
     * @deprecated use `item`
     */
    set selectedActivePeriod(period) {
        this.selectedPeriod = period;
    }
    ngOnChanges() {
        if (!this.value) {
            this.initDefaultViewedMonth();
        }
    }
    ngOnInit() {
        this.initDefaultViewedMonth();
    }
    get calculatedDisabledItemHandler() {
        return this.calculateDisabledItemHandler(this.disabledItemHandler, this.value, this.minLength);
    }
    onEsc(event) {
        if (event.key !== 'Escape' || !this.value?.isSingleDay) {
            return;
        }
        event.stopPropagation();
        this.value = this.previousValue;
    }
    isItemActive(item) {
        const { activePeriod } = this;
        return ((tuiIsString(item) && activePeriod === null) ||
            activePeriod === item ||
            activePeriod?.toString() === item.toString());
    }
    onItemSelect(item) {
        if (!tuiIsString(item)) {
            this.selectedActivePeriod = item;
            this.updateValue(item.range.dayLimit(this.min, this.max));
            this.itemChange.emit(item);
        }
        else if (this.activePeriod !== null) {
            this.selectedActivePeriod = null;
            this.updateValue(null);
            this.itemChange.emit(null);
        }
        this.initDefaultViewedMonth();
    }
    onMonthChange(month) {
        this.month = month;
    }
    onDayClick(day) {
        this.previousValue = this.value;
        this.selectedActivePeriod = null;
        if (!this.value?.isSingleDay) {
            this.value = new TuiDayRange(day, day);
            this.itemChange.emit(this.findItemByDayRange(this.value));
        }
        else {
            const sortedDayRange = TuiDayRange.sort(this.value.from, day);
            this.updateValue(sortedDayRange);
            this.itemChange.emit(this.findItemByDayRange(sortedDayRange));
        }
    }
    updateValue(value) {
        this.value = value;
        this.valueChange.emit(value);
    }
    get activePeriod() {
        return (this.item ??
            this.selectedActivePeriod ??
            (this.items.find((item) => tuiNullableSame(this.value, item.range, (a, b) => a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
                a.to.daySame(b.to.dayLimit(this.min, this.max)))) ||
                null));
    }
    calculateDisabledItemHandler(disabledItemHandler, value, minLength) {
        return calculateDisabledItemHandler(disabledItemHandler, value, minLength);
    }
    initDefaultViewedMonth() {
        if (this.value) {
            this.month = this.items.length ? this.value.to : this.value.from;
        }
        else if (this.max && this.month.monthSameOrAfter(this.max)) {
            this.month = this.items.length ? this.max : this.max.append({ month: -1 });
        }
        else if (this.min && this.month.monthSameOrBefore(this.min)) {
            this.month = this.min;
        }
    }
    findItemByDayRange(dayRange) {
        return this.items.find((item) => dayRange.daySame(item.range)) ?? null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarRange, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiCalendarRange, isStandalone: true, selector: "tui-calendar-range", inputs: { disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", items: "items", min: "min", max: "max", minLength: "minLength", maxLength: "maxLength", value: "value", item: "item", defaultViewedMonth: "defaultViewedMonth" }, outputs: { valueChange: "valueChange", itemChange: "itemChange" }, host: { listeners: { "document:keydown.capture": "onEsc($event)" } }, usesOnChanges: true, ngImport: i0, template: "<tui-calendar\n    automation-id=\"tui-calendar-range__calendar\"\n    class=\"t-calendar\"\n    [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n    [markerHandler]=\"markerHandler\"\n    [max]=\"max | tuiMapper: capsMapper : value : maxLength : false\"\n    [maxViewedMonth]=\"items.length ? null : (defaultViewedMonth | tuiMapper: monthOffset : -1)\"\n    [min]=\"min | tuiMapper: capsMapper : value : maxLength : true\"\n    [month]=\"defaultViewedMonth\"\n    [showAdjacent]=\"!!items.length\"\n    [value]=\"value\"\n    [(hoveredItem)]=\"hoveredItem\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event)\"\n    (mousedown.prevent.silent)=\"(0)\"\n/>\n<tui-calendar\n    *ngIf=\"!items.length; else presets\"\n    [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n    [markerHandler]=\"markerHandler\"\n    [max]=\"max | tuiMapper: capsMapper : value : maxLength : false\"\n    [min]=\"min | tuiMapper: capsMapper : value : maxLength : true\"\n    [minViewedMonth]=\"defaultViewedMonth | tuiMapper: monthOffset : 1\"\n    [month]=\"defaultViewedMonth | tuiMapper: monthOffset : 1\"\n    [showAdjacent]=\"false\"\n    [value]=\"value\"\n    [(hoveredItem)]=\"hoveredItem\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event.append({month: -1}))\"\n    (mousedown.prevent.silent)=\"(0)\"\n/>\n<ng-template #presets>\n    <tui-data-list\n        automation-id=\"tui-calendar-range__menu\"\n        role=\"menu\"\n        [style.flex]=\"1\"\n    >\n        <button\n            *ngFor=\"let item of items | tuiMapper: mapper : min : max : minLength : (otherDateText$ | async)\"\n            automation-id=\"tui-calendar-range__menu__item\"\n            role=\"menuitemradio\"\n            tuiOption\n            type=\"button\"\n            [attr.aria-checked]=\"isItemActive(item)\"\n            (click)=\"onItemSelect(item)\"\n            (mousedown.prevent.silent)=\"(0)\"\n        >\n            {{ item }}\n            <tui-icon\n                *ngIf=\"isItemActive(item)\"\n                automation-id=\"tui-calendar-range__checkmark\"\n                [icon]=\"icons.check\"\n                [style.font-size.rem]=\"1\"\n            />\n        </button>\n    </tui-data-list>\n</ng-template>\n", styles: [":host{display:flex;min-inline-size:30rem}.t-calendar{border-inline-end:1px solid var(--tui-border-normal)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TuiCalendar, selector: "tui-calendar", inputs: ["month", "disabledItemHandler", "min", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler", "value", "initialView"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }, { kind: "component", type: i1.TuiDataListComponent, selector: "tui-data-list", inputs: ["emptyContent", "size"] }, { kind: "component", type: i1.TuiOption, selector: "button[tuiOption], a[tuiOption], label[tuiOption]", inputs: ["disabled", "value"] }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }, { kind: "pipe", type: TuiMapperPipe, name: "tuiMapper" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiCalendarRange.prototype, "calculateDisabledItemHandler", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCalendarRange, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-calendar-range', imports: [AsyncPipe, NgForOf, NgIf, TuiCalendar, TuiDataList, TuiIcon, TuiMapperPipe], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '(document:keydown.capture)': 'onEsc($event)',
                    }, template: "<tui-calendar\n    automation-id=\"tui-calendar-range__calendar\"\n    class=\"t-calendar\"\n    [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n    [markerHandler]=\"markerHandler\"\n    [max]=\"max | tuiMapper: capsMapper : value : maxLength : false\"\n    [maxViewedMonth]=\"items.length ? null : (defaultViewedMonth | tuiMapper: monthOffset : -1)\"\n    [min]=\"min | tuiMapper: capsMapper : value : maxLength : true\"\n    [month]=\"defaultViewedMonth\"\n    [showAdjacent]=\"!!items.length\"\n    [value]=\"value\"\n    [(hoveredItem)]=\"hoveredItem\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event)\"\n    (mousedown.prevent.silent)=\"(0)\"\n/>\n<tui-calendar\n    *ngIf=\"!items.length; else presets\"\n    [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n    [markerHandler]=\"markerHandler\"\n    [max]=\"max | tuiMapper: capsMapper : value : maxLength : false\"\n    [min]=\"min | tuiMapper: capsMapper : value : maxLength : true\"\n    [minViewedMonth]=\"defaultViewedMonth | tuiMapper: monthOffset : 1\"\n    [month]=\"defaultViewedMonth | tuiMapper: monthOffset : 1\"\n    [showAdjacent]=\"false\"\n    [value]=\"value\"\n    [(hoveredItem)]=\"hoveredItem\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event.append({month: -1}))\"\n    (mousedown.prevent.silent)=\"(0)\"\n/>\n<ng-template #presets>\n    <tui-data-list\n        automation-id=\"tui-calendar-range__menu\"\n        role=\"menu\"\n        [style.flex]=\"1\"\n    >\n        <button\n            *ngFor=\"let item of items | tuiMapper: mapper : min : max : minLength : (otherDateText$ | async)\"\n            automation-id=\"tui-calendar-range__menu__item\"\n            role=\"menuitemradio\"\n            tuiOption\n            type=\"button\"\n            [attr.aria-checked]=\"isItemActive(item)\"\n            (click)=\"onItemSelect(item)\"\n            (mousedown.prevent.silent)=\"(0)\"\n        >\n            {{ item }}\n            <tui-icon\n                *ngIf=\"isItemActive(item)\"\n                automation-id=\"tui-calendar-range__checkmark\"\n                [icon]=\"icons.check\"\n                [style.font-size.rem]=\"1\"\n            />\n        </button>\n    </tui-data-list>\n</ng-template>\n", styles: [":host{display:flex;min-inline-size:30rem}.t-calendar{border-inline-end:1px solid var(--tui-border-normal)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { disabledItemHandler: [{
                type: Input
            }], markerHandler: [{
                type: Input
            }], items: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], value: [{
                type: Input
            }], item: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], itemChange: [{
                type: Output
            }], defaultViewedMonth: [{
                type: Input
            }], calculateDisabledItemHandler: [] } });

class TuiDayRangePeriod {
    constructor(range, name, content) {
        this.range = range;
        this.name = name;
        this.content = content;
    }
    toString() {
        return this.name;
    }
}
function tuiCreateDefaultDayRangePeriods(periodTitles = [
    'For all the time',
    'Today',
    'Yesterday',
    'Current week',
    'Current month',
    'Previous month',
]) {
    const today = TuiDay.currentLocal();
    const yesterday = today.append({ day: -1 });
    const startOfWeek = today.append({ day: -today.dayOfWeek() });
    const endOfWeek = startOfWeek.append({ day: 6 });
    const startOfMonth = today.append({ day: 1 - today.day });
    const endOfMonth = startOfMonth.append({ month: 1, day: -1 });
    const startOfLastMonth = startOfMonth.append({ month: -1 });
    return [
        new TuiDayRangePeriod(new TuiDayRange(TUI_FIRST_DAY, today), periodTitles[0]),
        new TuiDayRangePeriod(new TuiDayRange(today, today), periodTitles[1]),
        new TuiDayRangePeriod(new TuiDayRange(yesterday, yesterday), periodTitles[2]),
        new TuiDayRangePeriod(new TuiDayRange(startOfWeek, endOfWeek), periodTitles[3]),
        new TuiDayRangePeriod(new TuiDayRange(startOfMonth, endOfMonth), periodTitles[4]),
        new TuiDayRangePeriod(new TuiDayRange(startOfLastMonth, startOfMonth.append({ day: -1 })), periodTitles[5]),
    ];
}

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_DAY_CAPS_MAPPER, TuiCalendarRange, TuiDayRangePeriod, calculateDisabledItemHandler, tuiCreateDefaultDayRangePeriods };
//# sourceMappingURL=taiga-ui-kit-components-calendar-range.mjs.map
