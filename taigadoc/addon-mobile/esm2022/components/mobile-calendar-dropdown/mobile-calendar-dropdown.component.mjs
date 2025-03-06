import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiMobileCalendar } from '@taiga-ui/addon-mobile/components/mobile-calendar';
import { TuiKeyboardService } from '@taiga-ui/addon-mobile/services';
import { TuiControl } from '@taiga-ui/cdk/classes';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay, TuiDayRange } from '@taiga-ui/cdk/date-time';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiFadeIn, tuiSlideInTop } from '@taiga-ui/core/animations';
import { TuiDropdownDirective } from '@taiga-ui/core/directives/dropdown';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { calculateDisabledItemHandler, TUI_DAY_CAPS_MAPPER, } from '@taiga-ui/kit/components/calendar-range';
import { TUI_MOBILE_CALENDAR } from '@taiga-ui/kit/tokens';
import { injectContext } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/active-zone";
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
export { TuiMobileCalendarDropdown };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileCalendarDropdown, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-mobile-calendar-dropdown', imports: [TuiMobileCalendar], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideInTop, tuiFadeIn], hostDirectives: [TuiActiveZone], host: {
                        '[@tuiSlideInTop]': 'animation',
                        '[@tuiFadeIn]': 'animation',
                    }, template: "<tui-mobile-calendar\n    [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n    [max]=\"max()\"\n    [min]=\"min()\"\n    [multi]=\"multi\"\n    [single]=\"single\"\n    (cancel)=\"close()\"\n    (confirm)=\"confirm($event)\"\n    (valueChange)=\"onValueChange($event)\"\n/>\n", styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;background:var(--tui-background-elevation-1);box-shadow:0 10rem var(--tui-background-elevation-1),0 -90vh 1rem 2rem var(--tui-service-backdrop)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { calculateDisabledItemHandler: [] } });
export function tuiProvideMobileCalendar() {
    return {
        provide: TUI_MOBILE_CALENDAR,
        useValue: TuiMobileCalendarDropdown,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWNhbGVuZGFyLWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLW1vYmlsZS9jb21wb25lbnRzL21vYmlsZS1jYWxlbmRhci1kcm9wZG93bi9tb2JpbGUtY2FsZW5kYXItZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tbW9iaWxlL2NvbXBvbmVudHMvbW9iaWxlLWNhbGVuZGFyLWRyb3Bkb3duL21vYmlsZS1jYWxlbmRhci1kcm9wZG93bi50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUNwRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUVuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUNILDRCQUE0QixFQUM1QixtQkFBbUIsR0FDdEIsTUFBTSx5Q0FBeUMsQ0FBQztBQUNqRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQVdyRCxNQWNhLHlCQUF5QjtJQXlCbEM7UUF4QkEsNEZBQTRGO1FBQzNFLGFBQVEsR0FBRyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMxRCxhQUFRLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEMsWUFBTyxHQUFHLGFBQWEsQ0FBc0IsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMvRCxhQUFRLEdBQW1CLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQ25ELFNBQUksR0FBMEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDO1FBRWhFLG1CQUFjLEdBQXVCLElBQUksQ0FBQztRQUUvQixjQUFTLEdBQUc7WUFDM0IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE9BQU87Z0JBQ2QsUUFBUSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUN6RDtTQUNKLENBQUM7UUFFRixnR0FBZ0c7UUFDN0UsWUFBTyxHQUFRLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNwRCxVQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3hDLFVBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDL0QsV0FBTSxHQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFHOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sR0FBRztRQUNOLE9BQU8sQ0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDYixDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNQLENBQUMsQ0FBQyxtQkFBbUIsQ0FDZixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQ3RCLEtBQUssQ0FDUjtnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7WUFDeEIsWUFBWSxDQUNmLENBQUM7SUFDTixDQUFDO0lBRU0sR0FBRztRQUNOLE9BQU8sQ0FDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDYixDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNQLENBQUMsQ0FBQyxtQkFBbUIsQ0FDZixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQ3RCLElBQUksQ0FDUDtnQkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7WUFDeEIsYUFBYSxDQUNoQixDQUFDO0lBQ04sQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFzRDtRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLE9BQU87U0FDVjtRQUVELElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQztJQUVELElBQWMsNkJBQTZCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQjtZQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFtQjtZQUNqQyxpQkFBaUIsRUFDckIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLElBQUksSUFBSSxDQUNsQyxDQUFDO0lBQ04sQ0FBQztJQUVTLEtBQUs7UUFDWCxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVTLE9BQU8sQ0FBQyxLQUFVO1FBQ3hCLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVqRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7U0FDeEM7UUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUdPLDRCQUE0QixDQUNoQyxtQkFBOEMsRUFDOUMsS0FBeUIsRUFDekIsU0FBNEI7UUFFNUIsT0FBTyw0QkFBNEIsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVPLEVBQUUsQ0FBQyxRQUFnQjtRQUN2QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzsrR0E3R1EseUJBQXlCO21HQUF6Qix5QkFBeUIsK05DN0N0Qyw2UkFVQSwrUUR3QmMsaUJBQWlCLDRLQUlmLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQzs7QUEwRzlCO0lBRFAsT0FBTzs2RUFPUDtTQXpHUSx5QkFBeUI7NEZBQXpCLHlCQUF5QjtrQkFkckMsU0FBUztpQ0FDTSxJQUFJLFlBQ04sOEJBQThCLFdBQy9CLENBQUMsaUJBQWlCLENBQUMsbUJBR1gsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsa0JBQ3RCLENBQUMsYUFBYSxDQUFDLFFBQ3pCO3dCQUNGLGtCQUFrQixFQUFFLFdBQVc7d0JBQy9CLGNBQWMsRUFBRSxXQUFXO3FCQUM5QjswRUFxR08sNEJBQTRCO0FBYXhDLE1BQU0sVUFBVSx3QkFBd0I7SUFDcEMsT0FBTztRQUNILE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsUUFBUSxFQUFFLHlCQUF5QjtLQUN0QyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtWYWx1ZVByb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHVpTW9iaWxlQ2FsZW5kYXJ9IGZyb20gJ0B0YWlnYS11aS9hZGRvbi1tb2JpbGUvY29tcG9uZW50cy9tb2JpbGUtY2FsZW5kYXInO1xuaW1wb3J0IHtUdWlLZXlib2FyZFNlcnZpY2V9IGZyb20gJ0B0YWlnYS11aS9hZGRvbi1tb2JpbGUvc2VydmljZXMnO1xuaW1wb3J0IHtUdWlDb250cm9sfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NsYXNzZXMnO1xuaW1wb3J0IHtUVUlfRkFMU0VfSEFORExFUn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9jb25zdGFudHMnO1xuaW1wb3J0IHR5cGUge1R1aURheUxpa2V9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGF0ZS10aW1lJztcbmltcG9ydCB7VFVJX0ZJUlNUX0RBWSwgVFVJX0xBU1RfREFZLCBUdWlEYXksIFR1aURheVJhbmdlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RhdGUtdGltZSc7XG5pbXBvcnQge1R1aUFjdGl2ZVpvbmV9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGlyZWN0aXZlcy9hY3RpdmUtem9uZSc7XG5pbXBvcnQgdHlwZSB7VHVpQm9vbGVhbkhhbmRsZXJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHt0dWlQdXJlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHt0dWlGYWRlSW4sIHR1aVNsaWRlSW5Ub3B9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtUdWlEcm9wZG93bkRpcmVjdGl2ZX0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvZGlyZWN0aXZlcy9kcm9wZG93bic7XG5pbXBvcnQge1RVSV9BTklNQVRJT05TX1NQRUVEfSBmcm9tICdAdGFpZ2EtdWkvY29yZS90b2tlbnMnO1xuaW1wb3J0IHt0dWlHZXREdXJhdGlvbn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQge1xuICAgIGNhbGN1bGF0ZURpc2FibGVkSXRlbUhhbmRsZXIsXG4gICAgVFVJX0RBWV9DQVBTX01BUFBFUixcbn0gZnJvbSAnQHRhaWdhLXVpL2tpdC9jb21wb25lbnRzL2NhbGVuZGFyLXJhbmdlJztcbmltcG9ydCB7VFVJX01PQklMRV9DQUxFTkRBUn0gZnJvbSAnQHRhaWdhLXVpL2tpdC90b2tlbnMnO1xuaW1wb3J0IHtpbmplY3RDb250ZXh0fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcbmltcG9ydCB0eXBlIHtPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHVpTW9iaWxlQ2FsZW5kYXJEYXRhIHtcbiAgICBkaXNhYmxlZEl0ZW1IYW5kbGVyPzogVHVpQm9vbGVhbkhhbmRsZXI8VHVpRGF5PjtcbiAgICBtYXg/OiBUdWlEYXkgfCBudWxsO1xuICAgIG1pbj86IFR1aURheSB8IG51bGw7XG4gICAgbXVsdGk/OiBib29sZWFuO1xuICAgIHNpbmdsZT86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktbW9iaWxlLWNhbGVuZGFyLWRyb3Bkb3duJyxcbiAgICBpbXBvcnRzOiBbVHVpTW9iaWxlQ2FsZW5kYXJdLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2JpbGUtY2FsZW5kYXItZHJvcGRvd24udGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9iaWxlLWNhbGVuZGFyLWRyb3Bkb3duLnN0eWxlLmxlc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBhbmltYXRpb25zOiBbdHVpU2xpZGVJblRvcCwgdHVpRmFkZUluXSxcbiAgICBob3N0RGlyZWN0aXZlczogW1R1aUFjdGl2ZVpvbmVdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tAdHVpU2xpZGVJblRvcF0nOiAnYW5pbWF0aW9uJyxcbiAgICAgICAgJ1tAdHVpRmFkZUluXSc6ICdhbmltYXRpb24nLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aU1vYmlsZUNhbGVuZGFyRHJvcGRvd24ge1xuICAgIC8vIFRPRE86IFJld29yayB0byB1c2UgVHVpRHJvcGRvd25PcGVuRGlyZWN0aXZlIHNvIHRoZSBmb2N1cyByZXR1cm5zIHRvIHRoZSBmaWVsZCBvbiBjbG9zaW5nXG4gICAgcHJpdmF0ZSByZWFkb25seSBkcm9wZG93biA9IGluamVjdChUdWlEcm9wZG93bkRpcmVjdGl2ZSwge29wdGlvbmFsOiB0cnVlfSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBrZXlib2FyZCA9IGluamVjdChUdWlLZXlib2FyZFNlcnZpY2UpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dCA9IGluamVjdENvbnRleHQ8UmVjb3JkPHN0cmluZywgYW55Pj4oe29wdGlvbmFsOiB0cnVlfSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvYnNlcnZlcj86IE9ic2VydmVyPGFueT4gPSB0aGlzLmNvbnRleHQ/LiRpbXBsaWNpdDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGE6IFR1aU1vYmlsZUNhbGVuZGFyRGF0YSA9IHRoaXMuY29udGV4dD8uZGF0YSB8fCB7fTtcblxuICAgIHByaXZhdGUgc2VsZWN0ZWRQZXJpb2Q6IFR1aURheVJhbmdlIHwgbnVsbCA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYW5pbWF0aW9uID0ge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgc3RhcnQ6ICcxMDB2aCcsXG4gICAgICAgICAgICBkdXJhdGlvbjogdHVpR2V0RHVyYXRpb24oaW5qZWN0KFRVSV9BTklNQVRJT05TX1NQRUVEKSksXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIFRPRE86IFJlZmFjdG9yIHRvIHByb3BlciBEYXRlLCBEYXRlTXVsdGkgYW5kIERhdGVSYW5nZSBjb21wb25lbnRzIGFmdGVyIHRoZXkgYXJlIGFkZGVkIHRvIGtpdFxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb250cm9sOiBhbnkgPSBpbmplY3QoVHVpQ29udHJvbCwge29wdGlvbmFsOiB0cnVlfSk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHJhbmdlID0gdGhpcy5pcygndHVpLWlucHV0LWRhdGUtcmFuZ2UnKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbXVsdGkgPSB0aGlzLmRhdGEubXVsdGkgfHwgdGhpcy5pcygndHVpLWlucHV0LWRhdGVbbXVsdGlwbGVdJyk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHNpbmdsZSA9XG4gICAgICAgIHRoaXMuZGF0YS5zaW5nbGUgfHwgdGhpcy5pcygndHVpLWlucHV0LWRhdGU6bm90KFttdWx0aXBsZV0pJyk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlib2FyZC5oaWRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG1heCgpOiBUdWlEYXkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5kYXRhLm1heCB8fFxuICAgICAgICAgICAgKHRoaXMucmFuZ2VcbiAgICAgICAgICAgICAgICA/IFRVSV9EQVlfQ0FQU19NQVBQRVIoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sLm1heCxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUGVyaW9kLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5tYXhMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiB0aGlzLmNvbnRyb2w/Lm1heCkgfHxcbiAgICAgICAgICAgIFRVSV9MQVNUX0RBWVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBtaW4oKTogVHVpRGF5IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuZGF0YS5taW4gfHxcbiAgICAgICAgICAgICh0aGlzLnJhbmdlXG4gICAgICAgICAgICAgICAgPyBUVUlfREFZX0NBUFNfTUFQUEVSKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbC5taW4sXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBlcmlvZCxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2wubWF4TGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiB0aGlzLmNvbnRyb2w/Lm1pbikgfHxcbiAgICAgICAgICAgIFRVSV9GSVJTVF9EQVlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogVHVpRGF5IHwgVHVpRGF5UmFuZ2UgfCByZWFkb25seSBUdWlEYXlbXSB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnJhbmdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgaW5zdGFuY2VvZiBUdWlEYXlSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFBlcmlvZCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVHVpRGF5KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUGVyaW9kID0gbmV3IFR1aURheVJhbmdlKHZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNhbGN1bGF0ZWREaXNhYmxlZEl0ZW1IYW5kbGVyKCk6IFR1aUJvb2xlYW5IYW5kbGVyPFR1aURheT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVEaXNhYmxlZEl0ZW1IYW5kbGVyKFxuICAgICAgICAgICAgdGhpcy5kYXRhLmRpc2FibGVkSXRlbUhhbmRsZXIgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2w/LmRpc2FibGVkSXRlbUhhbmRsZXIgfHxcbiAgICAgICAgICAgICAgICBUVUlfRkFMU0VfSEFORExFUixcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQZXJpb2QsXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2w/Lm1pbkxlbmd0aCA/PyBudWxsLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbG9zZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bj8udG9nZ2xlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcj8uY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZC5zaG93KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbmZpcm0odmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSB0aGlzLnJhbmdlID8gdGhpcy5zZWxlY3RlZFBlcmlvZCA6IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC52YWx1ZSA9IG5vcm1hbGl6ZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXI/Lm5leHQobm9ybWFsaXplZFZhbHVlKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIEB0dWlQdXJlXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVEaXNhYmxlZEl0ZW1IYW5kbGVyKFxuICAgICAgICBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBUdWlCb29sZWFuSGFuZGxlcjxUdWlEYXk+LFxuICAgICAgICB2YWx1ZTogVHVpRGF5UmFuZ2UgfCBudWxsLFxuICAgICAgICBtaW5MZW5ndGg6IFR1aURheUxpa2UgfCBudWxsLFxuICAgICk6IFR1aUJvb2xlYW5IYW5kbGVyPFR1aURheT4ge1xuICAgICAgICByZXR1cm4gY2FsY3VsYXRlRGlzYWJsZWRJdGVtSGFuZGxlcihkaXNhYmxlZEl0ZW1IYW5kbGVyLCB2YWx1ZSwgbWluTGVuZ3RoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzKHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5kcm9wZG93bj8uZWwuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHVpUHJvdmlkZU1vYmlsZUNhbGVuZGFyKCk6IFZhbHVlUHJvdmlkZXIge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3ZpZGU6IFRVSV9NT0JJTEVfQ0FMRU5EQVIsXG4gICAgICAgIHVzZVZhbHVlOiBUdWlNb2JpbGVDYWxlbmRhckRyb3Bkb3duLFxuICAgIH07XG59XG4iLCI8dHVpLW1vYmlsZS1jYWxlbmRhclxuICAgIFtkaXNhYmxlZEl0ZW1IYW5kbGVyXT1cImNhbGN1bGF0ZWREaXNhYmxlZEl0ZW1IYW5kbGVyXCJcbiAgICBbbWF4XT1cIm1heCgpXCJcbiAgICBbbWluXT1cIm1pbigpXCJcbiAgICBbbXVsdGldPVwibXVsdGlcIlxuICAgIFtzaW5nbGVdPVwic2luZ2xlXCJcbiAgICAoY2FuY2VsKT1cImNsb3NlKClcIlxuICAgIChjb25maXJtKT1cImNvbmZpcm0oJGV2ZW50KVwiXG4gICAgKHZhbHVlQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4vPlxuIl19