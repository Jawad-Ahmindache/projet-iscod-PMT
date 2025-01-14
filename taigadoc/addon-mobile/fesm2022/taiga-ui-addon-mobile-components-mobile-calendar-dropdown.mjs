import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiMobileCalendar } from '@taiga-ui/addon-mobile/components/mobile-calendar';
import { TuiKeyboardService } from '@taiga-ui/addon-mobile/services';
import { TuiControl } from '@taiga-ui/cdk/classes';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { TUI_LAST_DAY, TUI_FIRST_DAY, TuiDayRange, TuiDay } from '@taiga-ui/cdk/date-time';
import * as i1 from '@taiga-ui/cdk/directives/active-zone';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiSlideInTop, tuiFadeIn } from '@taiga-ui/core/animations';
import { TuiDropdownDirective } from '@taiga-ui/core/directives/dropdown';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { TUI_DAY_CAPS_MAPPER, calculateDisabledItemHandler } from '@taiga-ui/kit/components/calendar-range';
import { TUI_MOBILE_CALENDAR } from '@taiga-ui/kit/tokens';
import { injectContext } from '@taiga-ui/polymorpheus';

class TuiMobileCalendarDropdown {
    constructor() {
        // TODO: Rework to use TuiDropdownOpenDirective so the focus returns to the field on closing
        this.dropdown = inject(TuiDropdownDirective, { optional: true });
        this.keyboard = inject(TuiKeyboardService);
        this.context = injectContext({ optional: true });
        this.observer = this.context?.$implicit;
        this.data = this.context?.data || {};
        this.selectedPeriod = null;
        this.animation = {
            value: '',
            params: {
                start: '100vh',
                duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
            },
        };
        // TODO: Refactor to proper Date, DateMulti and DateRange components after they are added to kit
        this.control = inject(TuiControl, { optional: true });
        this.range = this.is('tui-input-date-range');
        this.multi = this.data.multi || this.is('tui-input-date[multiple]');
        this.single = this.data.single || this.is('tui-input-date:not([multiple])');
        this.keyboard.hide();
    }
    max() {
        return (this.data.max ||
            (this.range
                ? TUI_DAY_CAPS_MAPPER(this.control.max, this.selectedPeriod, this.control.maxLength, false)
                : this.control?.max) ||
            TUI_LAST_DAY);
    }
    min() {
        return (this.data.min ||
            (this.range
                ? TUI_DAY_CAPS_MAPPER(this.control.min, this.selectedPeriod, this.control.maxLength, true)
                : this.control?.min) ||
            TUI_FIRST_DAY);
    }
    onValueChange(value) {
        if (!this.range) {
            return;
        }
        if (value === null || value instanceof TuiDayRange) {
            this.selectedPeriod = value;
        }
        else if (value instanceof TuiDay) {
            this.selectedPeriod = new TuiDayRange(value, value);
        }
    }
    get calculatedDisabledItemHandler() {
        return this.calculateDisabledItemHandler(this.data.disabledItemHandler ||
            this.control?.disabledItemHandler ||
            TUI_FALSE_HANDLER, this.selectedPeriod, this.control?.minLength ?? null);
    }
    close() {
        this.dropdown?.toggle(false);
        this.observer?.complete();
        this.keyboard.show();
    }
    confirm(value) {
        const normalizedValue = this.range ? this.selectedPeriod : value;
        if (this.control) {
            this.control.value = normalizedValue;
        }
        this.observer?.next(normalizedValue);
        this.close();
    }
    calculateDisabledItemHandler(disabledItemHandler, value, minLength) {
        return calculateDisabledItemHandler(disabledItemHandler, value, minLength);
    }
    is(selector) {
        return !!this.dropdown?.el.closest(selector);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileCalendarDropdown, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiMobileCalendarDropdown, isStandalone: true, selector: "tui-mobile-calendar-dropdown", host: { properties: { "@tuiSlideInTop": "animation", "@tuiFadeIn": "animation" } }, hostDirectives: [{ directive: i1.TuiActiveZone }], ngImport: i0, template: "<tui-mobile-calendar\n    [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n    [max]=\"max()\"\n    [min]=\"min()\"\n    [multi]=\"multi\"\n    [single]=\"single\"\n    (cancel)=\"close()\"\n    (confirm)=\"confirm($event)\"\n    (valueChange)=\"onValueChange($event)\"\n/>\n", styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;background:var(--tui-background-elevation-1);box-shadow:0 10rem var(--tui-background-elevation-1),0 -90vh 1rem 2rem var(--tui-service-backdrop)}\n"], dependencies: [{ kind: "component", type: TuiMobileCalendar, selector: "tui-mobile-calendar", inputs: ["single", "multi", "min", "max", "disabledItemHandler", "value"], outputs: ["cancel", "confirm", "valueChange"] }], animations: [tuiSlideInTop, tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiMobileCalendarDropdown.prototype, "calculateDisabledItemHandler", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileCalendarDropdown, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-mobile-calendar-dropdown', imports: [TuiMobileCalendar], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideInTop, tuiFadeIn], hostDirectives: [TuiActiveZone], host: {
                        '[@tuiSlideInTop]': 'animation',
                        '[@tuiFadeIn]': 'animation',
                    }, template: "<tui-mobile-calendar\n    [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n    [max]=\"max()\"\n    [min]=\"min()\"\n    [multi]=\"multi\"\n    [single]=\"single\"\n    (cancel)=\"close()\"\n    (confirm)=\"confirm($event)\"\n    (valueChange)=\"onValueChange($event)\"\n/>\n", styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;background:var(--tui-background-elevation-1);box-shadow:0 10rem var(--tui-background-elevation-1),0 -90vh 1rem 2rem var(--tui-service-backdrop)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { calculateDisabledItemHandler: [] } });
function tuiProvideMobileCalendar() {
    return {
        provide: TUI_MOBILE_CALENDAR,
        useValue: TuiMobileCalendarDropdown,
    };
}

/**
 * Generated bundle index. Do not edit.
 */

export { TuiMobileCalendarDropdown, tuiProvideMobileCalendar };
//# sourceMappingURL=taiga-ui-addon-mobile-components-mobile-calendar-dropdown.mjs.map
