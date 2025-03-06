import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { TUI_FIRST_DAY, TUI_LAST_DAY, TUI_LAST_DISPLAYED_DAY, TuiDay, TuiMonth, } from '@taiga-ui/cdk/date-time';
import { TuiMapperPipe } from '@taiga-ui/cdk/pipes/mapper';
import { tuiNullableSame } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiScrollbar } from '@taiga-ui/core/components/scrollbar';
import { TuiCalendarSheet } from './calendar-sheet.component';
import { TuiCalendarSpin } from './calendar-spin.component';
import { TuiCalendarYear } from './calendar-year.component';
import * as i0 from "@angular/core";
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
export { TuiCalendar };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRCxPQUFPLEVBQ0gsYUFBYSxFQUNiLFlBQVksRUFDWixzQkFBc0IsRUFDdEIsTUFBTSxFQUNOLFFBQVEsR0FDWCxNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUV6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBR2pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7O0FBRTFELE1BZWEsV0FBVztJQWZ4QjtRQWdCWSxRQUFHLEdBQW9ELElBQUksQ0FBQztRQUU1RCxTQUFJLEdBQXFCLE9BQU8sQ0FBQztRQUdsQyxVQUFLLEdBQWEsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRzFDLHdCQUFtQixHQUE4QixpQkFB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QURULEtBQUs7Z0JBSUMsR0FBRztzQkFEVCxLQUFLO2dCQUlDLGNBQWM7c0JBRHBCLEtBQUs7Z0JBSUMsY0FBYztzQkFEcEIsS0FBSztnQkFJQyxXQUFXO3NCQURqQixLQUFLO2dCQUlDLFlBQVk7c0JBRGxCLEtBQUs7Z0JBSUMsYUFBYTtzQkFEbkIsS0FBSztnQkFJVSxRQUFRO3NCQUR2QixNQUFNO2dCQUlTLFdBQVc7c0JBRDFCLE1BQU07Z0JBSVMsaUJBQWlCO3NCQURoQyxNQUFNO2dCQUlJLEtBQUs7c0JBRGYsS0FBSztnQkFjSyxXQUFXO3NCQURyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RVSV9GQUxTRV9IQU5ETEVSfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQgdHlwZSB7VHVpRGF5UmFuZ2V9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB7XG4gICAgVFVJX0ZJUlNUX0RBWSxcbiAgICBUVUlfTEFTVF9EQVksXG4gICAgVFVJX0xBU1RfRElTUExBWUVEX0RBWSxcbiAgICBUdWlEYXksXG4gICAgVHVpTW9udGgsXG59IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB7VHVpTWFwcGVyUGlwZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9waXBlcy9tYXBwZXInO1xuaW1wb3J0IHR5cGUge1R1aUJvb2xlYW5IYW5kbGVyLCBUdWlNYXBwZXJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHt0dWlOdWxsYWJsZVNhbWV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQge1R1aVNjcm9sbGJhcn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy9zY3JvbGxiYXInO1xuXG5pbXBvcnQgdHlwZSB7VHVpTWFya2VySGFuZGxlcn0gZnJvbSAnLi9jYWxlbmRhci1zaGVldC5jb21wb25lbnQnO1xuaW1wb3J0IHtUdWlDYWxlbmRhclNoZWV0fSBmcm9tICcuL2NhbGVuZGFyLXNoZWV0LmNvbXBvbmVudCc7XG5pbXBvcnQge1R1aUNhbGVuZGFyU3Bpbn0gZnJvbSAnLi9jYWxlbmRhci1zcGluLmNvbXBvbmVudCc7XG5pbXBvcnQge1R1aUNhbGVuZGFyWWVhcn0gZnJvbSAnLi9jYWxlbmRhci15ZWFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktY2FsZW5kYXInLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmdJZixcbiAgICAgICAgVHVpQ2FsZW5kYXJTaGVldCxcbiAgICAgICAgVHVpQ2FsZW5kYXJTcGluLFxuICAgICAgICBUdWlDYWxlbmRhclllYXIsXG4gICAgICAgIFR1aU1hcHBlclBpcGUsXG4gICAgICAgIFR1aVNjcm9sbGJhcixcbiAgICBdLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5zdHlsZS5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFR1aUNhbGVuZGFyIHtcbiAgICBwcml2YXRlIGRheTogVHVpRGF5IHwgVHVpRGF5UmFuZ2UgfCByZWFkb25seSBUdWlEYXlbXSB8IG51bGwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB2aWV3OiAnbW9udGgnIHwgJ3llYXInID0gJ21vbnRoJztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1vbnRoOiBUdWlNb250aCA9IFR1aU1vbnRoLmN1cnJlbnRMb2NhbCgpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZWRJdGVtSGFuZGxlcjogVHVpQm9vbGVhbkhhbmRsZXI8VHVpRGF5PiA9IFRVSV9GQUxTRV9IQU5ETEVSO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWluOiBUdWlEYXkgfCBudWxsID0gVFVJX0ZJUlNUX0RBWTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heDogVHVpRGF5IHwgbnVsbCA9IFRVSV9MQVNUX0RBWTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1pblZpZXdlZE1vbnRoOiBUdWlNb250aCB8IG51bGwgPSBUVUlfRklSU1RfREFZO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWF4Vmlld2VkTW9udGg6IFR1aU1vbnRoIHwgbnVsbCA9IFRVSV9MQVNUX0RBWTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhvdmVyZWRJdGVtOiBUdWlEYXkgfCBudWxsID0gbnVsbDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNob3dBZGphY2VudCA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtYXJrZXJIYW5kbGVyOiBUdWlNYXJrZXJIYW5kbGVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGF5Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFR1aURheT4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZWFkb25seSBtb250aENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHVpTW9udGg+KCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVhZG9ubHkgaG92ZXJlZEl0ZW1DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFR1aURheSB8IG51bGw+KCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IFR1aURheSB8IFR1aURheVJhbmdlIHwgcmVhZG9ubHkgVHVpRGF5W10gfCBudWxsKSB7XG4gICAgICAgIHRoaXMuZGF5ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zaG93QWRqYWNlbnQgJiZcbiAgICAgICAgICAgIHZhbHVlIGluc3RhbmNlb2YgVHVpRGF5ICYmXG4gICAgICAgICAgICB2YWx1ZS5kYXlTYW1lT3JCZWZvcmUoVFVJX0xBU1RfRElTUExBWUVEX0RBWSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRoID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgaW5pdGlhbFZpZXcodmlldzogJ21vbnRoJyB8ICd5ZWFyJykge1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdmFsdWUoKTogVHVpRGF5IHwgVHVpRGF5UmFuZ2UgfCByZWFkb25seSBUdWlEYXlbXSB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUGFnaW5hdGlvblZhbHVlQ2hhbmdlKG1vbnRoOiBUdWlNb250aCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXdlZE1vbnRoKG1vbnRoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXlDbGljayhkYXk6IFR1aURheSk6IHZvaWQge1xuICAgICAgICB0aGlzLmRheUNsaWNrLmVtaXQoZGF5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Ib3ZlcmVkSXRlbUNoYW5nZShkYXk6IFR1aURheSB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVIb3ZlcmVkRGF5KGRheSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBjb21wdXRlZE1pbigpOiBUdWlEYXkge1xuICAgICAgICByZXR1cm4gdGhpcy5taW4gPz8gVFVJX0ZJUlNUX0RBWTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXB1dGVkTWF4KCk6IFR1aURheSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1heCA/PyBUVUlfTEFTVF9EQVk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBjb21wdXRlZE1pblZpZXdlZE1vbnRoKCk6IFR1aU1vbnRoIHtcbiAgICAgICAgY29uc3QgbWluID0gdGhpcy5jb21wdXRlZE1pbjtcbiAgICAgICAgY29uc3QgbWluVmlld2VkID0gdGhpcy5taW5WaWV3ZWRNb250aCA/PyBUVUlfRklSU1RfREFZO1xuXG4gICAgICAgIHJldHVybiBtaW5WaWV3ZWQubW9udGhTYW1lT3JBZnRlcihtaW4pID8gbWluVmlld2VkIDogbWluO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgY29tcHV0ZWRNYXhWaWV3ZWRNb250aCgpOiBUdWlNb250aCB7XG4gICAgICAgIGNvbnN0IG1heCA9IHRoaXMuY29tcHV0ZWRNYXg7XG4gICAgICAgIGNvbnN0IG1heFZpZXdlZCA9IHRoaXMubWF4Vmlld2VkTW9udGggPz8gVFVJX0xBU1RfREFZO1xuXG4gICAgICAgIHJldHVybiBtYXhWaWV3ZWQubW9udGhTYW1lT3JCZWZvcmUobWF4KSA/IG1heFZpZXdlZCA6IG1heDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGlzSW5ZZWFyVmlldygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldyA9PT0gJ3llYXInO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWFkb25seSBkaXNhYmxlZEl0ZW1IYW5kbGVyTWFwcGVyOiBUdWlNYXBwZXI8XG4gICAgICAgIFtUdWlCb29sZWFuSGFuZGxlcjxUdWlEYXk+LCBUdWlEYXksIFR1aURheV0sXG4gICAgICAgIFR1aUJvb2xlYW5IYW5kbGVyPFR1aURheT5cbiAgICA+ID0gKGRpc2FibGVkSXRlbUhhbmRsZXIsIG1pbiwgbWF4KSA9PiAoaXRlbSkgPT5cbiAgICAgICAgaXRlbS5kYXlCZWZvcmUobWluKSB8fCBpdGVtLmRheUFmdGVyKG1heCkgfHwgZGlzYWJsZWRJdGVtSGFuZGxlcihpdGVtKTtcblxuICAgIHByb3RlY3RlZCBvblBhZ2luYXRpb25ZZWFyQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlldyA9ICd5ZWFyJztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25QaWNrZXJZZWFyQ2xpY2soeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlldyA9ICdtb250aCc7XG4gICAgICAgIHRoaXMudXBkYXRlVmlld2VkTW9udGgobmV3IFR1aU1vbnRoKHllYXIsIHRoaXMubW9udGgubW9udGgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZpZXdlZE1vbnRoKG1vbnRoOiBUdWlNb250aCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tb250aC5tb250aFNhbWUobW9udGgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vbnRoID0gbW9udGg7XG4gICAgICAgIHRoaXMubW9udGhDaGFuZ2UuZW1pdChtb250aCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3ZlcmVkRGF5KGRheTogVHVpRGF5IHwgbnVsbCk6IHZvaWQge1xuICAgICAgICBpZiAodHVpTnVsbGFibGVTYW1lKHRoaXMuaG92ZXJlZEl0ZW0sIGRheSwgKGEsIGIpID0+IGEuZGF5U2FtZShiKSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaG92ZXJlZEl0ZW0gPSBkYXk7XG4gICAgICAgIHRoaXMuaG92ZXJlZEl0ZW1DaGFuZ2UuZW1pdChkYXkpO1xuICAgIH1cbn1cbiIsIjx0dWktc2Nyb2xsYmFyXG4gICAgKm5nSWY9XCJpc0luWWVhclZpZXc7IGVsc2UgY2FsZW5kYXJcIlxuICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktY2FsZW5kYXJfX3Njcm9sbGJhclwiXG4gICAgY2xhc3M9XCJ0LXNjcm9sbGJhclwiXG4+XG4gICAgPHR1aS1jYWxlbmRhci15ZWFyXG4gICAgICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktY2FsZW5kYXJfX3llYXJcIlxuICAgICAgICBbaW5pdGlhbEl0ZW1dPVwibW9udGgueWVhclwiXG4gICAgICAgIFttYXhdPVwiY29tcHV0ZWRNYXgueWVhclwiXG4gICAgICAgIFttaW5dPVwiY29tcHV0ZWRNaW4ueWVhclwiXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICh5ZWFyQ2xpY2spPVwib25QaWNrZXJZZWFyQ2xpY2soJGV2ZW50KVwiXG4gICAgLz5cbjwvdHVpLXNjcm9sbGJhcj5cbjxuZy10ZW1wbGF0ZSAjY2FsZW5kYXI+XG4gICAgPHR1aS1jYWxlbmRhci1zcGluXG4gICAgICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktY2FsZW5kYXJfX3BhZ2luYXRpb25cIlxuICAgICAgICBjbGFzcz1cInQtcGFnaW5hdGlvblwiXG4gICAgICAgIFttYXhdPVwiY29tcHV0ZWRNYXhWaWV3ZWRNb250aFwiXG4gICAgICAgIFttaW5dPVwiY29tcHV0ZWRNaW5WaWV3ZWRNb250aFwiXG4gICAgICAgIFt2YWx1ZV09XCJtb250aFwiXG4gICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvblBhZ2luYXRpb25WYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKHllYXJDbGljayk9XCJvblBhZ2luYXRpb25ZZWFyQ2xpY2soKVwiXG4gICAgLz5cbiAgICA8dHVpLWNhbGVuZGFyLXNoZWV0XG4gICAgICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktY2FsZW5kYXJfX2NhbGVuZGFyXCJcbiAgICAgICAgW2Rpc2FibGVkSXRlbUhhbmRsZXJdPVwiZGlzYWJsZWRJdGVtSGFuZGxlciB8IHR1aU1hcHBlcjogZGlzYWJsZWRJdGVtSGFuZGxlck1hcHBlciA6IGNvbXB1dGVkTWluIDogY29tcHV0ZWRNYXhcIlxuICAgICAgICBbaG92ZXJlZEl0ZW1dPVwiaG92ZXJlZEl0ZW1cIlxuICAgICAgICBbbWFya2VySGFuZGxlcl09XCJtYXJrZXJIYW5kbGVyXCJcbiAgICAgICAgW21vbnRoXT1cIm1vbnRoXCJcbiAgICAgICAgW3Nob3dBZGphY2VudF09XCJzaG93QWRqYWNlbnRcIlxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAoZGF5Q2xpY2spPVwib25EYXlDbGljaygkZXZlbnQpXCJcbiAgICAgICAgKGhvdmVyZWRJdGVtQ2hhbmdlKT1cIm9uSG92ZXJlZEl0ZW1DaGFuZ2UoJGV2ZW50KVwiXG4gICAgLz5cbjwvbmctdGVtcGxhdGU+XG4iXX0=