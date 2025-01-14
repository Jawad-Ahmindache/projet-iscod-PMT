import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { MAX_YEAR, MIN_YEAR, TuiDayRange, TuiMonth, TuiMonthRange, TuiYear, } from '@taiga-ui/cdk/date-time';
import { TuiHovered } from '@taiga-ui/cdk/directives/hovered';
import { TuiLet } from '@taiga-ui/cdk/directives/let';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { tuiIsNumber } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiScrollIntoView } from '@taiga-ui/core/components/scrollbar';
import * as i0 from "@angular/core";
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
export { TuiCalendarYear };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIteWVhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIteWVhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIteWVhci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTFELE9BQU8sRUFDSCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFdBQVcsRUFDWCxRQUFRLEVBQ1IsYUFBYSxFQUNiLE9BQU8sR0FDVixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRXJFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdEUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztBQUV2QixNQVdhLGVBQWU7SUFYNUI7UUFZWSxnQkFBVyxHQUFrQixJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBR3JELFVBQUssR0FNQyxJQUFJLENBQUM7UUFHWCxnQkFBVyxHQUFX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QUFDLElBQUksQ0FBQztJQUM3QyxDQUFDOytHQWhIUSxlQUFlO21HQUFmLGVBQWUsc1NDdEM1QiwwdkJBcUJBLDZ0SERTYyxVQUFVLDhGQUFFLE1BQU0seUVBQUUsY0FBYyw2R0FBRSxpQkFBaUI7O1NBUXRELGVBQWU7NEZBQWYsZUFBZTtrQkFYM0IsU0FBUztpQ0FDTSxJQUFJLFlBQ04sbUJBQW1CLFdBQ3BCLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLENBQUMsbUJBRy9DLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0Ysa0JBQWtCLEVBQUUsVUFBVTtxQkFDakM7OEJBT00sS0FBSztzQkFEWCxLQUFLO2dCQVVDLFdBQVc7c0JBRGpCLEtBQUs7Z0JBSUMsR0FBRztzQkFEVCxLQUFLO2dCQUlDLEdBQUc7c0JBRFQsS0FBSztnQkFJQyxtQkFBbUI7c0JBRHpCLEtBQUs7Z0JBSVUsU0FBUztzQkFEeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUVUlfRkFMU0VfSEFORExFUn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1R1aURheX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kYXRlLXRpbWUnO1xuaW1wb3J0IHtcbiAgICBNQVhfWUVBUixcbiAgICBNSU5fWUVBUixcbiAgICBUdWlEYXlSYW5nZSxcbiAgICBUdWlNb250aCxcbiAgICBUdWlNb250aFJhbmdlLFxuICAgIFR1aVllYXIsXG59IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB7VHVpSG92ZXJlZH0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL2hvdmVyZWQnO1xuaW1wb3J0IHtUdWlMZXR9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGlyZWN0aXZlcy9sZXQnO1xuaW1wb3J0IHtUdWlSZXBlYXRUaW1lc30gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL3JlcGVhdC10aW1lcyc7XG5pbXBvcnQgdHlwZSB7VHVpQm9vbGVhbkhhbmRsZXJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHt0dWlJc051bWJlcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB7VHVpU2Nyb2xsSW50b1ZpZXd9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvc2Nyb2xsYmFyJztcblxuY29uc3QgTElNSVQgPSAxMDA7XG5jb25zdCBJVEVNU19JTl9ST1cgPSA0O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAndHVpLWNhbGVuZGFyLXllYXInLFxuICAgIGltcG9ydHM6IFtUdWlIb3ZlcmVkLCBUdWlMZXQsIFR1aVJlcGVhdFRpbWVzLCBUdWlTY3JvbGxJbnRvVmlld10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLXllYXIudGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIteWVhci5zdHlsZS5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLl9waWNraW5nXSc6ICdpc1NpbmdsZScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpQ2FsZW5kYXJZZWFyIHtcbiAgICBwcml2YXRlIGhvdmVyZWRJdGVtOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN1cnJlbnRZZWFyID0gVHVpTW9udGguY3VycmVudExvY2FsKCkueWVhcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlxuICAgICAgICB8IFR1aURheVJhbmdlXG4gICAgICAgIHwgVHVpTW9udGhSYW5nZVxuICAgICAgICB8IFR1aVllYXJcbiAgICAgICAgfCBudW1iZXJcbiAgICAgICAgfCByZWFkb25seSBUdWlEYXlbXVxuICAgICAgICB8IG51bGwgPSBudWxsO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW5pdGlhbEl0ZW06IG51bWJlciA9IHRoaXMuY3VycmVudFllYXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtaW46IG51bWJlciB8IG51bGwgPSBNSU5fWUVBUjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heDogbnVtYmVyIHwgbnVsbCA9IE1BWF9ZRUFSO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZWRJdGVtSGFuZGxlcjogVHVpQm9vbGVhbkhhbmRsZXI8bnVtYmVyPiA9IFRVSV9GQUxTRV9IQU5ETEVSO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IHllYXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgcHVibGljIGlzRGlzYWJsZWQoaXRlbTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAodGhpcy5tYXggJiYgdGhpcy5tYXggPCBpdGVtKSB8fFxuICAgICAgICAgICAgKHRoaXMubWluICYmIHRoaXMubWluID4gaXRlbSkgfHxcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRJdGVtSGFuZGxlcihpdGVtKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtUmFuZ2UoaXRlbTogbnVtYmVyKTogJ2FjdGl2ZScgfCAnZW5kJyB8ICdtaWRkbGUnIHwgJ3N0YXJ0JyB8IG51bGwge1xuICAgICAgICBjb25zdCB7dmFsdWUsIGhvdmVyZWRJdGVtfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVHVpWWVhcikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnllYXIgPT09IGl0ZW0gPyAnYWN0aXZlJyA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHVpSXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGl0ZW0gPyAnYWN0aXZlJyA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFR1aU1vbnRoUmFuZ2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU/LmZpbmQoKGRheSkgPT4gZGF5LnllYXIgPT09IGl0ZW0pID8gJ2FjdGl2ZScgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaG92ZXJlZCA9IHRoaXMuaXNTaW5nbGUgPyBob3ZlcmVkSXRlbSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGZyb20gPSBNYXRoLm1pbih2YWx1ZS5mcm9tLnllYXIsIGhvdmVyZWQgPz8gdmFsdWUudG8ueWVhcik7XG4gICAgICAgIGNvbnN0IHRvID0gTWF0aC5tYXgodmFsdWUuZnJvbS55ZWFyLCBob3ZlcmVkID8/IHZhbHVlLnRvLnllYXIpO1xuXG4gICAgICAgIGlmIChmcm9tID09PSB0byAmJiB2YWx1ZS5mcm9tLnllYXIgPT09IHZhbHVlLnRvLnllYXIgJiYgZnJvbSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyb20gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnc3RhcnQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvID09PSBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VuZCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJvbSA8IGl0ZW0gJiYgaXRlbSA8IHRvID8gJ21pZGRsZScgOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1Ib3ZlcmVkKGhvdmVyZWQ6IGJvb2xlYW4sIGl0ZW06IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUhvdmVyZWRJdGVtKGhvdmVyZWQsIGl0ZW0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaXNTaW5nbGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlIGluc3RhbmNlb2YgVHVpTW9udGhSYW5nZVxuICAgICAgICAgICAgPyB0aGlzLnZhbHVlLmZyb20ubW9udGhTYW1lKHRoaXMudmFsdWUudG8pXG4gICAgICAgICAgICA6IHRoaXMudmFsdWUgaW5zdGFuY2VvZiBUdWlEYXlSYW5nZSAmJiB0aGlzLnZhbHVlLmlzU2luZ2xlRGF5O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgcm93cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCh0aGlzLmNhbGN1bGF0ZWRNYXggLSB0aGlzLmNhbGN1bGF0ZWRNaW4pIC8gSVRFTVNfSU5fUk9XKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2Nyb2xsSXRlbUludG9WaWV3KGl0ZW06IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsSXRlbSA9PT0gaXRlbTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbShyb3dJbmRleDogbnVtYmVyLCBjb2xJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHJvd0luZGV4ICogSVRFTVNfSU5fUk9XICsgY29sSW5kZXggKyB0aGlzLmNhbGN1bGF0ZWRNaW47XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGl0ZW1Jc1RvZGF5KGl0ZW06IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50WWVhciA9PT0gaXRlbTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBjYWxjdWxhdGVkTWluKCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGluaXRpYWwgPSB0aGlzLmluaXRpYWxJdGVtIC0gTElNSVQ7XG4gICAgICAgIGNvbnN0IG1pbiA9IHRoaXMubWluID8/IE1JTl9ZRUFSO1xuXG4gICAgICAgIHJldHVybiBtaW4gPiBpbml0aWFsID8gbWluIDogaW5pdGlhbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBjYWxjdWxhdGVkTWF4KCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGluaXRpYWwgPSB0aGlzLmluaXRpYWxJdGVtICsgTElNSVQ7XG4gICAgICAgIGNvbnN0IG1heCA9IHRoaXMubWF4ID8/IE1BWF9ZRUFSO1xuXG4gICAgICAgIHJldHVybiBtYXggPCBpbml0aWFsID8gbWF4ICsgMSA6IGluaXRpYWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3ZlcmVkSXRlbShob3ZlcmVkOiBib29sZWFuLCBpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSXRlbSA9IGhvdmVyZWQgPyBpdGVtIDogbnVsbDtcbiAgICB9XG59XG4iLCI8ZGl2XG4gICAgKnR1aVJlcGVhdFRpbWVzPVwibGV0IHJvd0luZGV4IG9mIHJvd3NcIlxuICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktY2FsZW5kYXIteWVhcl9fcm93XCJcbiAgICBjbGFzcz1cInQtcm93XCJcbj5cbiAgICA8bmctY29udGFpbmVyICp0dWlSZXBlYXRUaW1lcz1cImxldCBjb2xJbmRleCBvZiA0XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgICp0dWlMZXQ9XCJnZXRJdGVtKHJvd0luZGV4LCBjb2xJbmRleCkgYXMgaXRlbVwiXG4gICAgICAgICAgICBhdXRvbWF0aW9uLWlkPVwidHVpLWNhbGVuZGFyLXllYXJfX2NlbGxcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0LWNlbGxcIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1yYW5nZV09XCJnZXRJdGVtUmFuZ2UoaXRlbSlcIlxuICAgICAgICAgICAgW2NsYXNzLnQtY2VsbF9kaXNhYmxlZF09XCJpc0Rpc2FibGVkKGl0ZW0pXCJcbiAgICAgICAgICAgIFtjbGFzcy50LWNlbGxfdG9kYXldPVwiaXRlbUlzVG9kYXkoaXRlbSlcIlxuICAgICAgICAgICAgW3R1aVNjcm9sbEludG9WaWV3XT1cInNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKVwiXG4gICAgICAgICAgICAoY2xpY2spPVwieWVhckNsaWNrLmVtaXQoaXRlbSlcIlxuICAgICAgICAgICAgKHR1aUhvdmVyZWRDaGFuZ2UpPVwib25JdGVtSG92ZXJlZCgkZXZlbnQsIGl0ZW0pXCJcbiAgICAgICAgPlxuICAgICAgICAgICAge3sgaXRlbSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19