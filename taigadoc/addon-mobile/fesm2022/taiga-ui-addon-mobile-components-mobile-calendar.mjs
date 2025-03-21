import { VIRTUAL_SCROLL_STRATEGY, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DOCUMENT, AsyncPipe, NgForOf, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { Optional, inject, DestroyRef, NgZone, EventEmitter, Component, ChangeDetectionStrategy, ViewChild, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiMobileCalendarSheet } from '@taiga-ui/addon-mobile/components/mobile-calendar-sheet';
import { TuiRipple, TuiTouchable } from '@taiga-ui/addon-mobile/directives';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { MONTHS_IN_YEAR, TuiDay, TuiMonth, TUI_FIRST_DAY, TUI_LAST_DAY, TuiDayRange } from '@taiga-ui/cdk/date-time';
import { tuiWatch, tuiZonefreeScheduler, tuiZonefree, tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { TuiMapperPipe } from '@taiga-ui/cdk/pipes/mapper';
import { TUI_IS_IOS, TUI_IS_E2E } from '@taiga-ui/cdk/tokens';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TuiLink } from '@taiga-ui/core/components/link';
import { TuiMonthPipe } from '@taiga-ui/core/pipes/month';
import { TuiOrderWeekDaysPipe } from '@taiga-ui/core/pipes/order-week-days';
import { TUI_ANIMATIONS_SPEED, TUI_COMMON_ICONS, TUI_CLOSE_WORD, TUI_SHORT_WEEK_DAYS } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { TUI_CALENDAR_DATE_STREAM, TUI_CANCEL_WORD, TUI_DONE_WORD, TUI_CHOOSE_DAY_OR_RANGE_TEXTS } from '@taiga-ui/kit/tokens';
import { tuiToggleDay } from '@taiga-ui/kit/utils';
import { Subject, distinctUntilChanged, takeUntil, EMPTY, BehaviorSubject, skip, timer, identity, delay, take, windowToggle, mergeMap, map, filter, switchMap, race, debounceTime } from 'rxjs';
import { TuiScrollService } from '@taiga-ui/cdk/services';
import { tuiPure, tuiCreateToken } from '@taiga-ui/cdk/utils/miscellaneous';
import { __decorate } from 'tslib';

function getCycle(options) {
    return Array.from({ length: options.yearCycle }, (_, i) => Array.from({ length: MONTHS_IN_YEAR }, (_, month) => options.label +
        weekCount({ year: i, month, startingYear: options.startingYear }) *
            options.week));
}
function weekCount(options) {
    const firstOfMonth = new Date(options.year + options.startingYear, options.month, 1);
    const lastOfMonth = new Date(options.year + options.startingYear, options.month + 1, 0);
    const days = lastOfMonth.getDate() + (firstOfMonth.getDay() || 7) - 1;
    return Math.ceil(days / 7);
}
const SCROLL_DEBOUNCE_TIME = 80;
const YEARS_IN_ROW = 5;
const STARTING_YEAR = 1900;
const RANGE = 196;
const BUFFER = 500;
const ANDROID_LABEL = 64;
const ANDROID_WEEK = 48;
const IOS_LABEL = 50;
const IOS_WEEK = 50;
const YEARLY_CYCLE = 28;
const ANDROID_CYCLE = getCycle({
    label: ANDROID_LABEL,
    week: ANDROID_WEEK,
    yearCycle: YEARLY_CYCLE,
    startingYear: STARTING_YEAR,
});
const IOS_CYCLE = getCycle({
    label: IOS_LABEL,
    week: IOS_WEEK,
    yearCycle: YEARLY_CYCLE,
    startingYear: STARTING_YEAR,
});

const ANDROID_CYCLE_HEIGHT = reduceCycle(ANDROID_CYCLE);
const IOS_CYCLE_HEIGHT = reduceCycle(IOS_CYCLE);
function reduceCycle(cycle, lastYear = 28, lastMonth = 12) {
    return cycle.reduce((total, year, yearIndex) => yearIndex <= lastYear
        ? total +
            year.reduce((sum, month, monthIndex) => yearIndex < lastYear ||
                (yearIndex === lastYear && monthIndex < lastMonth)
                ? sum + month
                : sum, 0)
        : total, 0);
}
/**
 * This scroll strategy is hard wired with styles for iOS and Android.
 * It is dependent on month height on those platforms and is designed to
 * work for {@link TuiMobileCalendar} with years 1906 to 2102
 */
class TuiMobileCalendarStrategy {
    constructor(isIOS, scrollService) {
        this.isIOS = isIOS;
        this.scrollService = scrollService;
        this.index$ = new Subject();
        this.viewport = null;
        this.destroy$ = new Subject();
    }
    get scrolledIndexChange() {
        return this.index$.pipe(distinctUntilChanged());
    }
    attach(viewport) {
        const cycle = this.isIOS ? IOS_CYCLE_HEIGHT : ANDROID_CYCLE_HEIGHT;
        this.viewport = viewport;
        this.viewport.setTotalContentSize(cycle * 7);
        this.updateRenderedRange(this.viewport);
    }
    detach() {
        this.index$.complete();
        this.viewport = null;
        this.destroy$.next();
        this.destroy$.complete();
    }
    onContentScrolled() {
        if (this.viewport) {
            this.updateRenderedRange(this.viewport);
        }
    }
    /** These do not matter for this case */
    onDataLengthChanged() { }
    onContentRendered() { }
    onRenderedOffsetChanged() { }
    scrollToIndex(index, behavior) {
        if (!this.viewport) {
            return;
        }
        const scrollTop = this.getOffsetForIndex(index);
        if (behavior !== 'smooth') {
            this.viewport.scrollToOffset(scrollTop, behavior);
            return;
        }
        this.scrollService
            .scroll$(this.viewport.elementRef.nativeElement, scrollTop)
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
    getOffsetForIndex(index) {
        const month = index % MONTHS_IN_YEAR;
        const year = (index - month) / MONTHS_IN_YEAR;
        return this.computeHeight(year, month);
    }
    getIndexForOffset(offset) {
        const cycle = this.isIOS ? IOS_CYCLE : ANDROID_CYCLE;
        const cycleHeight = this.isIOS ? IOS_CYCLE_HEIGHT : ANDROID_CYCLE_HEIGHT;
        const remainder = offset % cycleHeight;
        const years = ((offset - remainder) / cycleHeight) * YEARLY_CYCLE;
        let accumulator = 0;
        for (let year = 0; year < cycle.length; year++) {
            for (let month = 0; month < (cycle[year]?.length ?? 0); month++) {
                accumulator += cycle[year]?.[month] ?? 0;
                if (accumulator - (cycle[year]?.[month] ?? 0) / 2 > remainder) {
                    return Math.max((years + year) * MONTHS_IN_YEAR + month, 0);
                }
            }
        }
        return RANGE;
    }
    computeHeight(year, month) {
        const cycle = this.isIOS ? IOS_CYCLE : ANDROID_CYCLE;
        const remainder = year % YEARLY_CYCLE;
        const remainderHeight = reduceCycle(cycle, remainder, month);
        const fullCycles = (year - remainder) / YEARLY_CYCLE;
        const fullCyclesHeight = this.isIOS
            ? fullCycles * IOS_CYCLE_HEIGHT
            : fullCycles * ANDROID_CYCLE_HEIGHT;
        return fullCyclesHeight + remainderHeight;
    }
    updateRenderedRange(viewport) {
        const offset = viewport.measureScrollOffset();
        const { start, end } = viewport.getRenderedRange();
        const viewportSize = viewport.getViewportSize();
        const dataLength = viewport.getDataLength();
        const newRange = { start, end };
        const firstVisibleIndex = this.getIndexForOffset(offset);
        const startBuffer = offset - this.getOffsetForIndex(start);
        if (startBuffer < BUFFER && start !== 0) {
            newRange.start = Math.max(0, this.getIndexForOffset(offset - BUFFER * 2));
            newRange.end = Math.min(dataLength, this.getIndexForOffset(offset + viewportSize + BUFFER));
        }
        else {
            const endBuffer = this.getOffsetForIndex(end) - offset - viewportSize;
            if (endBuffer < BUFFER && end !== dataLength) {
                newRange.start = Math.max(0, this.getIndexForOffset(offset - BUFFER));
                newRange.end = Math.min(dataLength, this.getIndexForOffset(offset + viewportSize + BUFFER * 2));
            }
        }
        viewport.setRenderedRange(newRange);
        viewport.setRenderedContentOffset(this.getOffsetForIndex(newRange.start));
        this.index$.next(firstVisibleIndex);
    }
}
__decorate([
    tuiPure
], TuiMobileCalendarStrategy.prototype, "scrolledIndexChange", null);

/**
 * Stream for updating value
 */
const TUI_VALUE_STREAM = tuiCreateToken();
const TUI_MOBILE_CALENDAR_PROVIDERS = [
    TuiScrollService,
    {
        provide: VIRTUAL_SCROLL_STRATEGY,
        deps: [TUI_IS_IOS, TuiScrollService],
        useClass: TuiMobileCalendarStrategy,
    },
    {
        provide: TUI_VALUE_STREAM,
        deps: [[new Optional(), TUI_CALENDAR_DATE_STREAM]],
        useFactory: (value$) => (value$ || EMPTY).pipe(tuiWatch(), takeUntilDestroyed()),
    },
];

class TuiMobileCalendar {
    constructor() {
        this.value$ = new BehaviorSubject(null);
        this.today = TuiDay.currentLocal();
        this.activeYear = 0;
        this.activeMonth = 0;
        this.destroyRef = inject(DestroyRef);
        this.doc = inject(DOCUMENT);
        this.speed = inject(TUI_ANIMATIONS_SPEED);
        this.ngZone = inject(NgZone);
        this.initialized = false;
        this.isIOS = inject(TUI_IS_IOS);
        this.isE2E = inject(TUI_IS_E2E);
        this.icons = inject(TUI_COMMON_ICONS);
        this.closeWord$ = inject(TUI_CLOSE_WORD);
        this.cancelWord$ = inject(TUI_CANCEL_WORD);
        this.doneWord$ = inject(TUI_DONE_WORD);
        this.unorderedWeekDays$ = inject(TUI_SHORT_WEEK_DAYS);
        this.chooseDayOrRangeTexts$ = inject(TUI_CHOOSE_DAY_OR_RANGE_TEXTS, {
            optional: true,
        });
        this.years = Array.from({ length: RANGE }, (_, i) => i + STARTING_YEAR);
        this.months = Array.from({ length: RANGE * 12 }, (_, i) => new TuiMonth(Math.floor(i / MONTHS_IN_YEAR) + STARTING_YEAR, i % MONTHS_IN_YEAR));
        this.single = true;
        this.multi = false;
        this.min = TUI_FIRST_DAY;
        this.max = TUI_LAST_DAY;
        this.disabledItemHandler = TUI_FALSE_HANDLER;
        this.cancel = new EventEmitter();
        this.confirm = new EventEmitter();
        this.valueChange = this.value$.pipe(skip(1), distinctUntilChanged((a, b) => a?.toString() === b?.toString()), takeUntilDestroyed());
        this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) ||
            (max !== null && item.dayAfter(max)) ||
            disabledItemHandler(item);
        inject(TUI_VALUE_STREAM)
            .pipe(takeUntilDestroyed())
            .subscribe((value) => {
            this.value = value;
        });
    }
    ngAfterViewInit() {
        this.activeYear = this.initialYear;
        this.activeMonth = this.initialMonth;
        // Virtual scroll has not yet rendered items even in ngAfterViewInit
        this.waitScrolledChange();
    }
    setYear(year) {
        if (this.activeYear === year) {
            return;
        }
        this.activeMonth += this.getMonthOffset(year);
        this.activeYear = year;
        this.scrollToActiveYear('smooth');
        timer(0, tuiZonefreeScheduler(this.ngZone))
            .pipe(tuiZonefree(this.ngZone), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.scrollToActiveMonth());
    }
    set value(value) {
        this.value$.next(value);
    }
    get value() {
        return this.value$.value;
    }
    get yearWidth() {
        return this.doc.documentElement.clientWidth / YEARS_IN_ROW;
    }
    onClose() {
        this.cancel.emit();
    }
    onConfirm() {
        if (this.value) {
            this.confirm.emit(this.value);
        }
        else {
            this.cancel.emit();
        }
    }
    onDayClick(day) {
        if (this.single) {
            this.value = day;
        }
        else if (this.isMultiValue(this.value)) {
            this.value = tuiToggleDay(this.value, day);
        }
        else if (this.value instanceof TuiDay) {
            this.value = TuiDayRange.sort(this.value, day);
        }
        else if (this.value instanceof TuiDayRange && !this.value.isSingleDay) {
            this.value = day;
        }
        else if (this.value instanceof TuiDayRange) {
            this.value = TuiDayRange.sort(this.value.from, day);
        }
        else if (!this.value) {
            this.value = day;
        }
    }
    getState(index) {
        if (this.isYearActive(index)) {
            return 'active';
        }
        if (this.isYearActive(index - 1) || this.isYearActive(index + 1)) {
            return 'adjacent';
        }
        return null;
    }
    onMonthChange(month) {
        // Skipping initial callback where index === 0
        if (!month || this.activeMonth === month) {
            return;
        }
        this.activeMonth = month;
        const activeYear = this.monthToYear(month);
        if (activeYear === this.activeYear) {
            return;
        }
        this.activeYear = activeYear;
        this.scrollToActiveYear();
    }
    get initialYear() {
        if (!this.value) {
            return this.today.year;
        }
        if (this.value instanceof TuiDay) {
            return this.value.year;
        }
        if (!(this.value instanceof TuiDayRange)) {
            return this.value?.[0]?.year ?? this.today.year;
        }
        return this.value.to.year;
    }
    get initialMonth() {
        if (!this.value) {
            return this.today.month + (this.today.year - STARTING_YEAR) * MONTHS_IN_YEAR;
        }
        if (this.value instanceof TuiDay) {
            return this.value.month + (this.value.year - STARTING_YEAR) * MONTHS_IN_YEAR;
        }
        if (!(this.value instanceof TuiDayRange)) {
            return ((this.value?.[0]?.month ?? this.today.month) +
                ((this.value?.[0]?.year ?? this.today.year) - STARTING_YEAR) *
                    MONTHS_IN_YEAR);
        }
        return (this.value.to.month + (this.value.to.year - STARTING_YEAR) * MONTHS_IN_YEAR);
    }
    isMultiValue(day) {
        return !(day instanceof TuiDay) && !(day instanceof TuiDayRange) && this.multi;
    }
    getYearsViewportSize() {
        return this.yearsScrollRef?.getViewportSize() || 0;
    }
    updateViewportDimension() {
        this.yearsScrollRef?.checkViewportSize();
        this.monthsScrollRef?.checkViewportSize();
    }
    lateInit() {
        return this.getYearsViewportSize() > 0 ? identity : delay(200);
    }
    waitScrolledChange() {
        this.updateViewportDimension();
        this.monthsScrollRef?.scrolledIndexChange
            .pipe(delay(tuiGetDuration(this.speed)), this.lateInit(), take(1), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            this.initialized = true;
            this.updateViewportDimension();
            this.initYearScroll();
            this.initMonthScroll();
            this.scrollToActiveYear();
            this.scrollToActiveMonth();
        });
    }
    initYearScroll() {
        const { yearsScrollRef } = this;
        if (!yearsScrollRef) {
            return;
        }
        const touchstart$ = tuiTypedFromEvent(yearsScrollRef.elementRef.nativeElement, 'touchstart', { passive: true });
        const touchend$ = tuiTypedFromEvent(yearsScrollRef.elementRef.nativeElement, 'touchend', { passive: true });
        const click$ = tuiTypedFromEvent(yearsScrollRef.elementRef.nativeElement, 'click');
        // Refresh activeYear
        yearsScrollRef
            .elementScrolled()
            .pipe(
        // Ignore smooth scroll resulting from click on the exact year
        windowToggle(touchstart$, () => click$), mergeMap((x) => x), 
        // Delay is required to run months scroll in the next frame to prevent flicker
        delay(0), map(() => Math.round(yearsScrollRef.measureScrollOffset() / this.yearWidth) +
            Math.floor(YEARS_IN_ROW / 2) +
            STARTING_YEAR), filter((activeYear) => activeYear !== this.activeYear), takeUntilDestroyed(this.destroyRef))
            .subscribe((activeYear) => {
            this.activeMonth += this.getMonthOffset(activeYear);
            this.activeYear = activeYear;
            this.scrollToActiveMonth();
        });
        // Smooth scroll to activeYear after scrolling is done
        touchstart$
            .pipe(switchMap(() => touchend$), switchMap(() => race(yearsScrollRef.elementScrolled(), timer(SCROLL_DEBOUNCE_TIME, tuiZonefreeScheduler(this.ngZone))).pipe(debounceTime(SCROLL_DEBOUNCE_TIME * 2, tuiZonefreeScheduler(this.ngZone)), take(1), takeUntil(touchstart$))), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.scrollToActiveYear('smooth'));
    }
    initMonthScroll() {
        const { monthsScrollRef } = this;
        if (!monthsScrollRef) {
            return;
        }
        const touchstart$ = tuiTypedFromEvent(monthsScrollRef.elementRef.nativeElement, 'touchstart', { passive: true });
        const touchend$ = tuiTypedFromEvent(monthsScrollRef.elementRef.nativeElement, 'touchend', { passive: true });
        // Smooth scroll to the closest month after scrolling is done
        touchstart$
            .pipe(switchMap(() => touchend$), switchMap(() => race(monthsScrollRef.elementScrolled(), timer(SCROLL_DEBOUNCE_TIME, tuiZonefreeScheduler(this.ngZone))).pipe(debounceTime(SCROLL_DEBOUNCE_TIME * 2, tuiZonefreeScheduler(this.ngZone)), take(1), takeUntil(touchstart$))), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.scrollToActiveMonth('smooth'));
    }
    scrollToActiveYear(behavior = 'auto') {
        this.yearsScrollRef?.scrollToIndex(Math.max(this.activeYear - STARTING_YEAR - 2, 0), this.isE2E ? 'auto' : behavior);
    }
    scrollToActiveMonth(behavior = 'auto') {
        this.monthsScrollRef?.scrollToIndex(this.activeMonth, this.isE2E ? 'auto' : behavior);
    }
    isYearActive(index) {
        return index === this.activeYear;
    }
    monthToYear(month) {
        return Math.ceil((month + 1) / MONTHS_IN_YEAR) + STARTING_YEAR - 1;
    }
    getMonthOffset(year) {
        return (year - this.activeYear) * MONTHS_IN_YEAR;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileCalendar, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiMobileCalendar, isStandalone: true, selector: "tui-mobile-calendar", inputs: { single: "single", multi: "multi", min: "min", max: "max", disabledItemHandler: "disabledItemHandler", value: "value" }, outputs: { cancel: "cancel", confirm: "confirm", valueChange: "valueChange" }, host: { listeners: { "mousedown.prevent": "0" }, properties: { "class._ios": "isIOS", "class._initialized": "initialized" } }, providers: TUI_MOBILE_CALENDAR_PROVIDERS, viewQueries: [{ propertyName: "yearsScrollRef", first: true, predicate: ["yearsScrollRef"], descendants: true }, { propertyName: "monthsScrollRef", first: true, predicate: ["monthsScrollRef"], descendants: true }], ngImport: i0, template: "<header\n    *ngIf=\"chooseDayOrRangeTexts$ | async as texts\"\n    class=\"t-header\"\n>\n    <button\n        appearance=\"\"\n        automation-id=\"tui-mobile-calendar__cancel\"\n        tuiIconButton\n        tuiRipple\n        type=\"button\"\n        class=\"t-close\"\n        [iconStart]=\"icons.close\"\n        [style.border-radius.%]=\"100\"\n        (click)=\"onClose()\"\n    >\n        {{ closeWord$ | async }}\n    </button>\n    <button\n        tuiLink\n        tuiTouchable=\"opacity\"\n        type=\"button\"\n        class=\"t-link t-link_close\"\n        (click)=\"onClose()\"\n    >\n        {{ cancelWord$ | async }}\n    </button>\n    <h2\n        automation-id=\"tui-mobile-calendar__label\"\n        class=\"t-label\"\n    >\n        {{ single ? texts[0] : multi ? texts[2] : texts[1] }}\n    </h2>\n    <button\n        automation-id=\"tui-mobile-calendar__confirm\"\n        tuiLink\n        tuiTouchable=\"opacity\"\n        type=\"button\"\n        class=\"t-link\"\n        (click)=\"onConfirm()\"\n    >\n        {{ doneWord$ | async }}\n    </button>\n</header>\n<cdk-virtual-scroll-viewport\n    #yearsScrollRef\n    orientation=\"horizontal\"\n    class=\"t-years\"\n    [itemSize]=\"yearWidth\"\n>\n    <div class=\"t-years-wrapper\">\n        <button\n            *cdkVirtualFor=\"let index of years\"\n            type=\"button\"\n            class=\"t-year\"\n            [attr.data-state]=\"getState(index)\"\n            (click)=\"setYear(index)\"\n        >\n            {{ index }}\n        </button>\n    </div>\n</cdk-virtual-scroll-viewport>\n<div class=\"t-week\">\n    <div\n        *ngFor=\"let day of unorderedWeekDays$ | tuiOrderWeekDays | async\"\n        class=\"t-day\"\n    >\n        {{ day }}\n    </div>\n</div>\n<cdk-virtual-scroll-viewport\n    #monthsScrollRef\n    itemSize=\"354\"\n    maxBufferPx=\"5000\"\n    minBufferPx=\"0\"\n    class=\"t-months\"\n    (scrolledIndexChange)=\"onMonthChange($event)\"\n>\n    <section\n        *cdkVirtualFor=\"let month of months; templateCacheSize: 10\"\n        class=\"t-month-wrapper\"\n    >\n        <h2 class=\"t-month\">{{ month | tuiMonth | async }}</h2>\n        <tui-mobile-calendar-sheet\n            class=\"t-calendar\"\n            [disabledItemHandler]=\"disabledItemHandler | tuiMapper: disabledItemHandlerMapper : min : max\"\n            [month]=\"month\"\n            [value]=\"value\"\n            (dayClick)=\"onDayClick($event)\"\n        />\n    </section>\n</cdk-virtual-scroll-viewport>\n", styles: [":host{display:block;block-size:100%;font-family:-apple-system,BlinkMacSystemFont,Roboto,sans-serif;color:var(--tui-text-primary);-webkit-tap-highlight-color:transparent}.t-header{position:relative;display:flex;align-items:center;block-size:3.5rem;padding:0 1rem;border-bottom:.5px solid var(--tui-border-normal)}:host._ios .t-header{block-size:2.75rem;border-bottom:none}.t-close{inline-size:1.5rem;block-size:1.5rem;margin-right:2rem}:host._ios .t-close{display:none}.t-link{margin-left:auto;flex-shrink:0;font-size:.875rem;line-height:1rem;font-weight:500;text-transform:uppercase;color:var(--tui-text-action)}.t-link_close{display:none}:host._ios .t-link{min-inline-size:3.75rem;text-align:end;font-size:.9375rem;line-height:1.125rem;font-weight:400;letter-spacing:.018125rem;text-transform:none}:host._ios .t-link_close{display:block;margin:0 auto 0 0;text-align:start}.t-label{flex-grow:1;margin:0;font-size:1.25rem;line-height:3.5rem;font-weight:500;letter-spacing:-.0125rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-label+.t-link{padding-left:1rem}:host._ios .t-label{font-size:1.0625rem;font-weight:600;letter-spacing:-.025625rem;text-align:center}.t-years{scrollbar-width:none;-ms-overflow-style:none;block-size:4.0625rem;background-color:var(--tui-background-base);box-shadow:0 .5px var(--tui-border-normal)}.t-years::-webkit-scrollbar,.t-years::-webkit-scrollbar-thumb{display:none}:host._ios .t-years{background-color:transparent}.t-years-wrapper{display:flex;block-size:4.0625rem}.t-year{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;outline:none;inline-size:20vw;flex-shrink:0;font-size:.9375rem;font-weight:700;letter-spacing:.015625rem;cursor:pointer;opacity:.1;transform:scale(.73);transition:color,opacity,transform .2s}.t-year[data-state=adjacent]{transform:scale(.86);opacity:.3}.t-year[data-state=active]{color:var(--tui-text-action);opacity:1;transform:scale(1)}.t-week{display:flex;align-items:center;block-size:1.875rem;inline-size:20.75rem;max-inline-size:100%;margin:0 auto;font-size:.75rem}:host._ios .t-week{inline-size:22.625rem;font-size:.6875rem;font-weight:500;color:var(--tui-text-secondary)}.t-day{flex:1;text-align:center}.t-months{scrollbar-width:none;-ms-overflow-style:none;block-size:calc(100% - 9.5rem);box-shadow:0 -1px var(--tui-border-normal);overflow-x:hidden}.t-months::-webkit-scrollbar,.t-months::-webkit-scrollbar-thumb{display:none}:host._ios .t-months{block-size:calc(100% - 8.75rem)}.t-month-wrapper{display:flex;margin:.625rem 0 -.625rem;block-size:22.125rem;flex-direction:column}.t-month{block-size:2.75rem;inline-size:100%;line-height:2.75rem;padding-left:1rem;font-size:.875rem;font-weight:500;text-transform:uppercase;margin:0 0 1.25rem;box-sizing:border-box;border-bottom:.5px solid var(--tui-border-normal)}:host._ios .t-month{block-size:3.125rem;margin:0;border-bottom:none;text-transform:none;font-size:1.375rem;line-height:3.125rem;letter-spacing:.02rem;font-weight:700}.t-calendar{margin:0 auto;transition:opacity .2s}.t-week,.t-years,.t-months{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host(._initialized) .t-week,:host(._initialized) .t-years,:host(._initialized) .t-months{opacity:1}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "directive", type: TuiLink, selector: "a[tuiLink], button[tuiLink]", inputs: ["pseudo"] }, { kind: "pipe", type: TuiMapperPipe, name: "tuiMapper" }, { kind: "component", type: TuiMobileCalendarSheet, selector: "tui-mobile-calendar-sheet" }, { kind: "pipe", type: TuiMonthPipe, name: "tuiMonth" }, { kind: "pipe", type: TuiOrderWeekDaysPipe, name: "tuiOrderWeekDays" }, { kind: "directive", type: TuiRipple, selector: "[tuiRipple]", inputs: ["tuiRipple"] }, { kind: "directive", type: TuiTouchable, selector: "[tuiTouchable]", inputs: ["tuiTouchable"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileCalendar, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-mobile-calendar', imports: [
                        AsyncPipe,
                        CdkFixedSizeVirtualScroll,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                        NgForOf,
                        NgIf,
                        TuiButton,
                        TuiLink,
                        TuiMapperPipe,
                        TuiMobileCalendarSheet,
                        TuiMonthPipe,
                        TuiOrderWeekDaysPipe,
                        TuiRipple,
                        TuiTouchable,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: TUI_MOBILE_CALENDAR_PROVIDERS, host: {
                        '[class._ios]': 'isIOS',
                        '[class._initialized]': 'initialized',
                        '(mousedown.prevent)': '0',
                    }, template: "<header\n    *ngIf=\"chooseDayOrRangeTexts$ | async as texts\"\n    class=\"t-header\"\n>\n    <button\n        appearance=\"\"\n        automation-id=\"tui-mobile-calendar__cancel\"\n        tuiIconButton\n        tuiRipple\n        type=\"button\"\n        class=\"t-close\"\n        [iconStart]=\"icons.close\"\n        [style.border-radius.%]=\"100\"\n        (click)=\"onClose()\"\n    >\n        {{ closeWord$ | async }}\n    </button>\n    <button\n        tuiLink\n        tuiTouchable=\"opacity\"\n        type=\"button\"\n        class=\"t-link t-link_close\"\n        (click)=\"onClose()\"\n    >\n        {{ cancelWord$ | async }}\n    </button>\n    <h2\n        automation-id=\"tui-mobile-calendar__label\"\n        class=\"t-label\"\n    >\n        {{ single ? texts[0] : multi ? texts[2] : texts[1] }}\n    </h2>\n    <button\n        automation-id=\"tui-mobile-calendar__confirm\"\n        tuiLink\n        tuiTouchable=\"opacity\"\n        type=\"button\"\n        class=\"t-link\"\n        (click)=\"onConfirm()\"\n    >\n        {{ doneWord$ | async }}\n    </button>\n</header>\n<cdk-virtual-scroll-viewport\n    #yearsScrollRef\n    orientation=\"horizontal\"\n    class=\"t-years\"\n    [itemSize]=\"yearWidth\"\n>\n    <div class=\"t-years-wrapper\">\n        <button\n            *cdkVirtualFor=\"let index of years\"\n            type=\"button\"\n            class=\"t-year\"\n            [attr.data-state]=\"getState(index)\"\n            (click)=\"setYear(index)\"\n        >\n            {{ index }}\n        </button>\n    </div>\n</cdk-virtual-scroll-viewport>\n<div class=\"t-week\">\n    <div\n        *ngFor=\"let day of unorderedWeekDays$ | tuiOrderWeekDays | async\"\n        class=\"t-day\"\n    >\n        {{ day }}\n    </div>\n</div>\n<cdk-virtual-scroll-viewport\n    #monthsScrollRef\n    itemSize=\"354\"\n    maxBufferPx=\"5000\"\n    minBufferPx=\"0\"\n    class=\"t-months\"\n    (scrolledIndexChange)=\"onMonthChange($event)\"\n>\n    <section\n        *cdkVirtualFor=\"let month of months; templateCacheSize: 10\"\n        class=\"t-month-wrapper\"\n    >\n        <h2 class=\"t-month\">{{ month | tuiMonth | async }}</h2>\n        <tui-mobile-calendar-sheet\n            class=\"t-calendar\"\n            [disabledItemHandler]=\"disabledItemHandler | tuiMapper: disabledItemHandlerMapper : min : max\"\n            [month]=\"month\"\n            [value]=\"value\"\n            (dayClick)=\"onDayClick($event)\"\n        />\n    </section>\n</cdk-virtual-scroll-viewport>\n", styles: [":host{display:block;block-size:100%;font-family:-apple-system,BlinkMacSystemFont,Roboto,sans-serif;color:var(--tui-text-primary);-webkit-tap-highlight-color:transparent}.t-header{position:relative;display:flex;align-items:center;block-size:3.5rem;padding:0 1rem;border-bottom:.5px solid var(--tui-border-normal)}:host._ios .t-header{block-size:2.75rem;border-bottom:none}.t-close{inline-size:1.5rem;block-size:1.5rem;margin-right:2rem}:host._ios .t-close{display:none}.t-link{margin-left:auto;flex-shrink:0;font-size:.875rem;line-height:1rem;font-weight:500;text-transform:uppercase;color:var(--tui-text-action)}.t-link_close{display:none}:host._ios .t-link{min-inline-size:3.75rem;text-align:end;font-size:.9375rem;line-height:1.125rem;font-weight:400;letter-spacing:.018125rem;text-transform:none}:host._ios .t-link_close{display:block;margin:0 auto 0 0;text-align:start}.t-label{flex-grow:1;margin:0;font-size:1.25rem;line-height:3.5rem;font-weight:500;letter-spacing:-.0125rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-label+.t-link{padding-left:1rem}:host._ios .t-label{font-size:1.0625rem;font-weight:600;letter-spacing:-.025625rem;text-align:center}.t-years{scrollbar-width:none;-ms-overflow-style:none;block-size:4.0625rem;background-color:var(--tui-background-base);box-shadow:0 .5px var(--tui-border-normal)}.t-years::-webkit-scrollbar,.t-years::-webkit-scrollbar-thumb{display:none}:host._ios .t-years{background-color:transparent}.t-years-wrapper{display:flex;block-size:4.0625rem}.t-year{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;outline:none;inline-size:20vw;flex-shrink:0;font-size:.9375rem;font-weight:700;letter-spacing:.015625rem;cursor:pointer;opacity:.1;transform:scale(.73);transition:color,opacity,transform .2s}.t-year[data-state=adjacent]{transform:scale(.86);opacity:.3}.t-year[data-state=active]{color:var(--tui-text-action);opacity:1;transform:scale(1)}.t-week{display:flex;align-items:center;block-size:1.875rem;inline-size:20.75rem;max-inline-size:100%;margin:0 auto;font-size:.75rem}:host._ios .t-week{inline-size:22.625rem;font-size:.6875rem;font-weight:500;color:var(--tui-text-secondary)}.t-day{flex:1;text-align:center}.t-months{scrollbar-width:none;-ms-overflow-style:none;block-size:calc(100% - 9.5rem);box-shadow:0 -1px var(--tui-border-normal);overflow-x:hidden}.t-months::-webkit-scrollbar,.t-months::-webkit-scrollbar-thumb{display:none}:host._ios .t-months{block-size:calc(100% - 8.75rem)}.t-month-wrapper{display:flex;margin:.625rem 0 -.625rem;block-size:22.125rem;flex-direction:column}.t-month{block-size:2.75rem;inline-size:100%;line-height:2.75rem;padding-left:1rem;font-size:.875rem;font-weight:500;text-transform:uppercase;margin:0 0 1.25rem;box-sizing:border-box;border-bottom:.5px solid var(--tui-border-normal)}:host._ios .t-month{block-size:3.125rem;margin:0;border-bottom:none;text-transform:none;font-size:1.375rem;line-height:3.125rem;letter-spacing:.02rem;font-weight:700}.t-calendar{margin:0 auto;transition:opacity .2s}.t-week,.t-years,.t-months{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host(._initialized) .t-week,:host(._initialized) .t-years,:host(._initialized) .t-months{opacity:1}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { yearsScrollRef: [{
                type: ViewChild,
                args: ['yearsScrollRef']
            }], monthsScrollRef: [{
                type: ViewChild,
                args: ['monthsScrollRef']
            }], single: [{
                type: Input
            }], multi: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], cancel: [{
                type: Output
            }], confirm: [{
                type: Output
            }], valueChange: [{
                type: Output
            }], value: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { ANDROID_CYCLE, ANDROID_LABEL, ANDROID_WEEK, BUFFER, IOS_CYCLE, IOS_LABEL, IOS_WEEK, RANGE, SCROLL_DEBOUNCE_TIME, STARTING_YEAR, TUI_MOBILE_CALENDAR_PROVIDERS, TUI_VALUE_STREAM, TuiMobileCalendar, TuiMobileCalendarStrategy, YEARLY_CYCLE, YEARS_IN_ROW };
//# sourceMappingURL=taiga-ui-addon-mobile-components-mobile-calendar.mjs.map
