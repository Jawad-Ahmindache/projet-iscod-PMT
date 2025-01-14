import { __decorate } from "tslib";
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { TUI_FIRST_DAY, TUI_LAST_DAY, TuiDayRange, TuiMonth, } from '@taiga-ui/cdk/date-time';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { TuiMapperPipe } from '@taiga-ui/cdk/pipes/mapper';
import { tuiIsString, tuiNullableSame, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiCalendar } from '@taiga-ui/core/components/calendar';
import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TUI_COMMON_ICONS } from '@taiga-ui/core/tokens';
import { TUI_CALENDAR_DATE_STREAM, TUI_OTHER_DATE_TEXT } from '@taiga-ui/kit/tokens';
import { calculateDisabledItemHandler } from './calculate-disabled-item-handler';
import { TUI_DAY_CAPS_MAPPER } from './day-caps-mapper';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/components/data-list";
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
export { TuiCalendarRange };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvY2FsZW5kYXItcmFuZ2UvY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvY2FsZW5kYXItcmFuZ2UvY2FsZW5kYXItcmFuZ2UudGVtcGxhdGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTFELE9BQU8sRUFDSCxhQUFhLEVBQ2IsWUFBWSxFQUNaLFdBQVcsRUFDWCxRQUFRLEdBQ1gsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXpELE9BQU8sRUFBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRXhGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDaEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFN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Q0FDTSxJQUFJLFlBQ04sb0JBQW9CLFdBQ3JCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLG1CQUdwRSx1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNGLDRCQUE0QixFQUFFLGVBQWU7cUJBQ2hEOzBFQWlCTSxtQkFBbUI7c0JBRHpCLEtBQUs7Z0JBSUMsYUFBYTtzQkFEbkIsS0FBSztnQkFJQyxLQUFLO3NCQURYLEtBQUs7Z0JBSUMsR0FBRztzQkFEVCxLQUFLO2dCQUlDLEdBQUc7c0JBRFQsS0FBSztnQkFJQyxTQUFTO3NCQURmLEtBQUs7Z0JBSUMsU0FBUztzQkFEZixLQUFLO2dCQUlDLEtBQUs7c0JBRFgsS0FBSztnQkFJQyxJQUFJO3NCQURWLEtBQUs7Z0JBSVUsV0FBVztzQkFEMUIsTUFBTTtnQkFJUyxVQUFVO3NCQUR6QixNQUFNO2dCQWFJLGtCQUFrQjtzQkFENUIsS0FBSztnQkFrSkUsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBc3luY1BpcGUsIE5nRm9yT2YsIE5nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7T25DaGFuZ2VzLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGluamVjdCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlVW50aWxEZXN0cm95ZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7VFVJX0ZBTFNFX0hBTkRMRVJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHtUdWlEYXksIFR1aURheUxpa2V9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB7XG4gICAgVFVJX0ZJUlNUX0RBWSxcbiAgICBUVUlfTEFTVF9EQVksXG4gICAgVHVpRGF5UmFuZ2UsXG4gICAgVHVpTW9udGgsXG59IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB7dHVpV2F0Y2h9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHtUdWlNYXBwZXJQaXBlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3BpcGVzL21hcHBlcic7XG5pbXBvcnQgdHlwZSB7VHVpQm9vbGVhbkhhbmRsZXIsIFR1aU1hcHBlcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay90eXBlcyc7XG5pbXBvcnQge3R1aUlzU3RyaW5nLCB0dWlOdWxsYWJsZVNhbWUsIHR1aVB1cmV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQgdHlwZSB7VHVpTWFya2VySGFuZGxlcn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy9jYWxlbmRhcic7XG5pbXBvcnQge1R1aUNhbGVuZGFyfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL2NhbGVuZGFyJztcbmltcG9ydCB7VHVpRGF0YUxpc3R9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvZGF0YS1saXN0JztcbmltcG9ydCB7VHVpSWNvbn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7VFVJX0NPTU1PTl9JQ09OU30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdG9rZW5zJztcbmltcG9ydCB7VFVJX0NBTEVOREFSX0RBVEVfU1RSRUFNLCBUVUlfT1RIRVJfREFURV9URVhUfSBmcm9tICdAdGFpZ2EtdWkva2l0L3Rva2Vucyc7XG5pbXBvcnQgdHlwZSB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7Y2FsY3VsYXRlRGlzYWJsZWRJdGVtSGFuZGxlcn0gZnJvbSAnLi9jYWxjdWxhdGUtZGlzYWJsZWQtaXRlbS1oYW5kbGVyJztcbmltcG9ydCB7VFVJX0RBWV9DQVBTX01BUFBFUn0gZnJvbSAnLi9kYXktY2Fwcy1tYXBwZXInO1xuaW1wb3J0IHR5cGUge1R1aURheVJhbmdlUGVyaW9kfSBmcm9tICcuL2RheS1yYW5nZS1wZXJpb2QnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAndHVpLWNhbGVuZGFyLXJhbmdlJyxcbiAgICBpbXBvcnRzOiBbQXN5bmNQaXBlLCBOZ0Zvck9mLCBOZ0lmLCBUdWlDYWxlbmRhciwgVHVpRGF0YUxpc3QsIFR1aUljb24sIFR1aU1hcHBlclBpcGVdLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci1yYW5nZS50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci1yYW5nZS5zdHlsZS5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaG9zdDoge1xuICAgICAgICAnKGRvY3VtZW50OmtleWRvd24uY2FwdHVyZSknOiAnb25Fc2MoJGV2ZW50KScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpQ2FsZW5kYXJSYW5nZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB1c2UgYGl0ZW1gXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZWxlY3RlZFBlcmlvZDogVHVpRGF5UmFuZ2VQZXJpb2QgfCBudWxsID0gbnVsbDtcblxuICAgIHByb3RlY3RlZCBwcmV2aW91c1ZhbHVlOiBUdWlEYXlSYW5nZSB8IG51bGwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBob3ZlcmVkSXRlbTogVHVpRGF5IHwgbnVsbCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG1vbnRoOiBUdWlNb250aCA9IFR1aU1vbnRoLmN1cnJlbnRMb2NhbCgpO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG90aGVyRGF0ZVRleHQkID0gaW5qZWN0KFRVSV9PVEhFUl9EQVRFX1RFWFQpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBpY29ucyA9IGluamVjdChUVUlfQ09NTU9OX0lDT05TKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2Fwc01hcHBlciA9IFRVSV9EQVlfQ0FQU19NQVBQRVI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBUdWlCb29sZWFuSGFuZGxlcjxUdWlEYXk+ID0gVFVJX0ZBTFNFX0hBTkRMRVI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXJrZXJIYW5kbGVyOiBUdWlNYXJrZXJIYW5kbGVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpdGVtczogcmVhZG9ubHkgVHVpRGF5UmFuZ2VQZXJpb2RbXSA9IFtdO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWluOiBUdWlEYXkgfCBudWxsID0gVFVJX0ZJUlNUX0RBWTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heDogVHVpRGF5IHwgbnVsbCA9IFRVSV9MQVNUX0RBWTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1pbkxlbmd0aDogVHVpRGF5TGlrZSB8IG51bGwgPSBudWxsO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4TGVuZ3RoOiBUdWlEYXlMaWtlIHwgbnVsbCA9IG51bGw7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTogVHVpRGF5UmFuZ2UgfCBudWxsID0gbnVsbDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGl0ZW06IFR1aURheVJhbmdlUGVyaW9kIHwgbnVsbCA9IG51bGw7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFR1aURheVJhbmdlIHwgbnVsbD4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZWFkb25seSBpdGVtQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUdWlEYXlSYW5nZVBlcmlvZCB8IG51bGw+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaW5qZWN0PE9ic2VydmFibGU8VHVpRGF5UmFuZ2UgfCBudWxsPj4oVFVJX0NBTEVOREFSX0RBVEVfU1RSRUFNLCB7b3B0aW9uYWw6IHRydWV9KVxuICAgICAgICAgICAgPy5waXBlKHR1aVdhdGNoKCksIHRha2VVbnRpbERlc3Ryb3llZCgpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0RGVmYXVsdFZpZXdlZE1vbnRoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgZGVmYXVsdFZpZXdlZE1vbnRoKG1vbnRoOiBUdWlNb250aCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9udGggPSBtb250aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdFZpZXdlZE1vbnRoKCk6IFR1aU1vbnRoIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIGBpdGVtYFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRBY3RpdmVQZXJpb2QoKTogVHVpRGF5UmFuZ2VQZXJpb2QgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRQZXJpb2Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgdXNlIGBpdGVtYFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWRBY3RpdmVQZXJpb2QocGVyaW9kOiBUdWlEYXlSYW5nZVBlcmlvZCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBlcmlvZCA9IHBlcmlvZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0RGVmYXVsdFZpZXdlZE1vbnRoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdERlZmF1bHRWaWV3ZWRNb250aCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgY2FsY3VsYXRlZERpc2FibGVkSXRlbUhhbmRsZXIoKTogVHVpQm9vbGVhbkhhbmRsZXI8VHVpRGF5PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZURpc2FibGVkSXRlbUhhbmRsZXIoXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkSXRlbUhhbmRsZXIsXG4gICAgICAgICAgICB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgdGhpcy5taW5MZW5ndGgsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRXNjKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09ICdFc2NhcGUnIHx8ICF0aGlzLnZhbHVlPy5pc1NpbmdsZURheSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnByZXZpb3VzVmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1vbnRoT2Zmc2V0OiBUdWlNYXBwZXI8W1R1aU1vbnRoLCBudW1iZXJdLCBUdWlNb250aD4gPSAoXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBtb250aCxcbiAgICApID0+IHZhbHVlLmFwcGVuZCh7bW9udGh9KTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBtYXBwZXI6IFR1aU1hcHBlcjxcbiAgICAgICAgW1xuICAgICAgICAgICAgcmVhZG9ubHkgVHVpRGF5UmFuZ2VQZXJpb2RbXSxcbiAgICAgICAgICAgIFR1aURheSB8IG51bGwsXG4gICAgICAgICAgICBUdWlEYXkgfCBudWxsLFxuICAgICAgICAgICAgVHVpRGF5TGlrZSB8IG51bGwsXG4gICAgICAgICAgICBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgICAgICBdLFxuICAgICAgICBSZWFkb25seUFycmF5PFR1aURheVJhbmdlUGVyaW9kIHwgc3RyaW5nPlxuICAgID4gPSAoaXRlbXMsIG1pbiwgbWF4LCBtaW5MZW5ndGgsIG90aGVyRGF0ZVRleHQpID0+IFtcbiAgICAgICAgLi4uaXRlbXMuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgKG1pbkxlbmd0aCA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJhbmdlLmZyb21cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQobWluTGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCh7ZGF5OiAtMX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF5U2FtZU9yQmVmb3JlKGl0ZW0ucmFuZ2UudG8pKSAmJlxuICAgICAgICAgICAgICAgIChtaW4gPT09IG51bGwgfHwgaXRlbS5yYW5nZS50by5kYXlTYW1lT3JBZnRlcihtaW4pKSAmJlxuICAgICAgICAgICAgICAgIChtYXggPT09IG51bGwgfHwgaXRlbS5yYW5nZS5mcm9tLmRheVNhbWVPckJlZm9yZShtYXgpKSxcbiAgICAgICAgKSxcbiAgICAgICAgb3RoZXJEYXRlVGV4dCB8fCAnJyxcbiAgICBdO1xuXG4gICAgcHJvdGVjdGVkIGlzSXRlbUFjdGl2ZShpdGVtOiBUdWlEYXlSYW5nZVBlcmlvZCB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7YWN0aXZlUGVyaW9kfSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0dWlJc1N0cmluZyhpdGVtKSAmJiBhY3RpdmVQZXJpb2QgPT09IG51bGwpIHx8XG4gICAgICAgICAgICBhY3RpdmVQZXJpb2QgPT09IGl0ZW0gfHxcbiAgICAgICAgICAgIGFjdGl2ZVBlcmlvZD8udG9TdHJpbmcoKSA9PT0gaXRlbS50b1N0cmluZygpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSXRlbVNlbGVjdChpdGVtOiBUdWlEYXlSYW5nZVBlcmlvZCB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIXR1aUlzU3RyaW5nKGl0ZW0pKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWN0aXZlUGVyaW9kID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoaXRlbS5yYW5nZS5kYXlMaW1pdCh0aGlzLm1pbiwgdGhpcy5tYXgpKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbUNoYW5nZS5lbWl0KGl0ZW0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlUGVyaW9kICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQWN0aXZlUGVyaW9kID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1DaGFuZ2UuZW1pdChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdERlZmF1bHRWaWV3ZWRNb250aCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk1vbnRoQ2hhbmdlKG1vbnRoOiBUdWlNb250aCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vbnRoID0gbW9udGg7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGF5Q2xpY2soZGF5OiBUdWlEYXkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEFjdGl2ZVBlcmlvZCA9IG51bGw7XG5cbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlPy5pc1NpbmdsZURheSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ldyBUdWlEYXlSYW5nZShkYXksIGRheSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1DaGFuZ2UuZW1pdCh0aGlzLmZpbmRJdGVtQnlEYXlSYW5nZSh0aGlzLnZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzb3J0ZWREYXlSYW5nZSA9IFR1aURheVJhbmdlLnNvcnQodGhpcy52YWx1ZS5mcm9tLCBkYXkpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHNvcnRlZERheVJhbmdlKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbUNoYW5nZS5lbWl0KHRoaXMuZmluZEl0ZW1CeURheVJhbmdlKHNvcnRlZERheVJhbmdlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUodmFsdWU6IFR1aURheVJhbmdlIHwgbnVsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgYWN0aXZlUGVyaW9kKCk6IFR1aURheVJhbmdlUGVyaW9kIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLml0ZW0gPz9cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBY3RpdmVQZXJpb2QgPz9cbiAgICAgICAgICAgICh0aGlzLml0ZW1zLmZpbmQoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgdHVpTnVsbGFibGVTYW1lPFR1aURheVJhbmdlPihcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmZyb20uZGF5U2FtZShiLmZyb20uZGF5TGltaXQodGhpcy5taW4sIHRoaXMubWF4KSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGEudG8uZGF5U2FtZShiLnRvLmRheUxpbWl0KHRoaXMubWluLCB0aGlzLm1heCkpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApIHx8XG4gICAgICAgICAgICAgICAgbnVsbClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBAdHVpUHVyZVxuICAgIHByaXZhdGUgY2FsY3VsYXRlRGlzYWJsZWRJdGVtSGFuZGxlcihcbiAgICAgICAgZGlzYWJsZWRJdGVtSGFuZGxlcjogVHVpQm9vbGVhbkhhbmRsZXI8VHVpRGF5PixcbiAgICAgICAgdmFsdWU6IFR1aURheVJhbmdlIHwgbnVsbCxcbiAgICAgICAgbWluTGVuZ3RoOiBUdWlEYXlMaWtlIHwgbnVsbCxcbiAgICApOiBUdWlCb29sZWFuSGFuZGxlcjxUdWlEYXk+IHtcbiAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZURpc2FibGVkSXRlbUhhbmRsZXIoZGlzYWJsZWRJdGVtSGFuZGxlciwgdmFsdWUsIG1pbkxlbmd0aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0RGVmYXVsdFZpZXdlZE1vbnRoKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IHRoaXMuaXRlbXMubGVuZ3RoID8gdGhpcy52YWx1ZS50byA6IHRoaXMudmFsdWUuZnJvbTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1heCAmJiB0aGlzLm1vbnRoLm1vbnRoU2FtZU9yQWZ0ZXIodGhpcy5tYXgpKSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gdGhpcy5pdGVtcy5sZW5ndGggPyB0aGlzLm1heCA6IHRoaXMubWF4LmFwcGVuZCh7bW9udGg6IC0xfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5taW4gJiYgdGhpcy5tb250aC5tb250aFNhbWVPckJlZm9yZSh0aGlzLm1pbikpIHtcbiAgICAgICAgICAgIHRoaXMubW9udGggPSB0aGlzLm1pbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZmluZEl0ZW1CeURheVJhbmdlKGRheVJhbmdlOiBUdWlEYXlSYW5nZSk6IFR1aURheVJhbmdlUGVyaW9kIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoKGl0ZW0pID0+IGRheVJhbmdlLmRheVNhbWUoaXRlbS5yYW5nZSkpID8/IG51bGw7XG4gICAgfVxufVxuIiwiPHR1aS1jYWxlbmRhclxuICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktY2FsZW5kYXItcmFuZ2VfX2NhbGVuZGFyXCJcbiAgICBjbGFzcz1cInQtY2FsZW5kYXJcIlxuICAgIFtkaXNhYmxlZEl0ZW1IYW5kbGVyXT1cImNhbGN1bGF0ZWREaXNhYmxlZEl0ZW1IYW5kbGVyXCJcbiAgICBbbWFya2VySGFuZGxlcl09XCJtYXJrZXJIYW5kbGVyXCJcbiAgICBbbWF4XT1cIm1heCB8IHR1aU1hcHBlcjogY2Fwc01hcHBlciA6IHZhbHVlIDogbWF4TGVuZ3RoIDogZmFsc2VcIlxuICAgIFttYXhWaWV3ZWRNb250aF09XCJpdGVtcy5sZW5ndGggPyBudWxsIDogKGRlZmF1bHRWaWV3ZWRNb250aCB8IHR1aU1hcHBlcjogbW9udGhPZmZzZXQgOiAtMSlcIlxuICAgIFttaW5dPVwibWluIHwgdHVpTWFwcGVyOiBjYXBzTWFwcGVyIDogdmFsdWUgOiBtYXhMZW5ndGggOiB0cnVlXCJcbiAgICBbbW9udGhdPVwiZGVmYXVsdFZpZXdlZE1vbnRoXCJcbiAgICBbc2hvd0FkamFjZW50XT1cIiEhaXRlbXMubGVuZ3RoXCJcbiAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgIFsoaG92ZXJlZEl0ZW0pXT1cImhvdmVyZWRJdGVtXCJcbiAgICAoZGF5Q2xpY2spPVwib25EYXlDbGljaygkZXZlbnQpXCJcbiAgICAobW9udGhDaGFuZ2UpPVwib25Nb250aENoYW5nZSgkZXZlbnQpXCJcbiAgICAobW91c2Vkb3duLnByZXZlbnQuc2lsZW50KT1cIigwKVwiXG4vPlxuPHR1aS1jYWxlbmRhclxuICAgICpuZ0lmPVwiIWl0ZW1zLmxlbmd0aDsgZWxzZSBwcmVzZXRzXCJcbiAgICBbZGlzYWJsZWRJdGVtSGFuZGxlcl09XCJjYWxjdWxhdGVkRGlzYWJsZWRJdGVtSGFuZGxlclwiXG4gICAgW21hcmtlckhhbmRsZXJdPVwibWFya2VySGFuZGxlclwiXG4gICAgW21heF09XCJtYXggfCB0dWlNYXBwZXI6IGNhcHNNYXBwZXIgOiB2YWx1ZSA6IG1heExlbmd0aCA6IGZhbHNlXCJcbiAgICBbbWluXT1cIm1pbiB8IHR1aU1hcHBlcjogY2Fwc01hcHBlciA6IHZhbHVlIDogbWF4TGVuZ3RoIDogdHJ1ZVwiXG4gICAgW21pblZpZXdlZE1vbnRoXT1cImRlZmF1bHRWaWV3ZWRNb250aCB8IHR1aU1hcHBlcjogbW9udGhPZmZzZXQgOiAxXCJcbiAgICBbbW9udGhdPVwiZGVmYXVsdFZpZXdlZE1vbnRoIHwgdHVpTWFwcGVyOiBtb250aE9mZnNldCA6IDFcIlxuICAgIFtzaG93QWRqYWNlbnRdPVwiZmFsc2VcIlxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgWyhob3ZlcmVkSXRlbSldPVwiaG92ZXJlZEl0ZW1cIlxuICAgIChkYXlDbGljayk9XCJvbkRheUNsaWNrKCRldmVudClcIlxuICAgIChtb250aENoYW5nZSk9XCJvbk1vbnRoQ2hhbmdlKCRldmVudC5hcHBlbmQoe21vbnRoOiAtMX0pKVwiXG4gICAgKG1vdXNlZG93bi5wcmV2ZW50LnNpbGVudCk9XCIoMClcIlxuLz5cbjxuZy10ZW1wbGF0ZSAjcHJlc2V0cz5cbiAgICA8dHVpLWRhdGEtbGlzdFxuICAgICAgICBhdXRvbWF0aW9uLWlkPVwidHVpLWNhbGVuZGFyLXJhbmdlX19tZW51XCJcbiAgICAgICAgcm9sZT1cIm1lbnVcIlxuICAgICAgICBbc3R5bGUuZmxleF09XCIxXCJcbiAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zIHwgdHVpTWFwcGVyOiBtYXBwZXIgOiBtaW4gOiBtYXggOiBtaW5MZW5ndGggOiAob3RoZXJEYXRlVGV4dCQgfCBhc3luYylcIlxuICAgICAgICAgICAgYXV0b21hdGlvbi1pZD1cInR1aS1jYWxlbmRhci1yYW5nZV9fbWVudV9faXRlbVwiXG4gICAgICAgICAgICByb2xlPVwibWVudWl0ZW1yYWRpb1wiXG4gICAgICAgICAgICB0dWlPcHRpb25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1jaGVja2VkXT1cImlzSXRlbUFjdGl2ZShpdGVtKVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25JdGVtU2VsZWN0KGl0ZW0pXCJcbiAgICAgICAgICAgIChtb3VzZWRvd24ucHJldmVudC5zaWxlbnQpPVwiKDApXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3sgaXRlbSB9fVxuICAgICAgICAgICAgPHR1aS1pY29uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpc0l0ZW1BY3RpdmUoaXRlbSlcIlxuICAgICAgICAgICAgICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktY2FsZW5kYXItcmFuZ2VfX2NoZWNrbWFya1wiXG4gICAgICAgICAgICAgICAgW2ljb25dPVwiaWNvbnMuY2hlY2tcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5mb250LXNpemUucmVtXT1cIjFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC90dWktZGF0YS1saXN0PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==