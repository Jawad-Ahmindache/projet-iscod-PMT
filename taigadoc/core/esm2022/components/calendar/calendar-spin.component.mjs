import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { TUI_FIRST_DAY, TUI_LAST_DAY, TuiMonth } from '@taiga-ui/cdk/date-time';
import { TuiLink } from '@taiga-ui/core/components/link';
import { TuiSpinButton } from '@taiga-ui/core/components/spin-button';
import { TuiMonthPipe } from '@taiga-ui/core/pipes';
import * as i0 from "@angular/core";
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
export { TuiCalendarSpin };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXItc3Bpbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXItc3Bpbi50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDOUUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7O0FBRWxELE1BUWEsZUFBZTtJQVI1QjtRQVVXLFVBQUssR0FBRyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFHaEMsUUFBRyxHQUFhLGFBQWEsQ0FBQztRQUc5QixRQUFHLEdBQWEsWUFBWSxDQUFDO1FBR3BCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUczQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQXdCM0Q7SUF0QmEsV0FBVztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVTLE1BQU0sQ0FBQyxJQUFrQjtRQUMvQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUU7SUFDTCxDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQWU7UUFDL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQXJDUSxlQUFlO21HQUFmLGVBQWUsa01DdEI1Qix1d0JBd0JBLDJFRFBjLFNBQVMsOENBQUUsSUFBSSw2RkFBRSxPQUFPLHVGQUFFLFlBQVksaURBQUUsYUFBYTs7U0FLdEQsZUFBZTs0RkFBZixlQUFlO2tCQVIzQixTQUFTO2lDQUNNLElBQUksWUFDTixtQkFBbUIsV0FDcEIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLG1CQUcvQyx1QkFBdUIsQ0FBQyxNQUFNOzhCQUl4QyxLQUFLO3NCQURYLEtBQUs7Z0JBSUMsR0FBRztzQkFEVCxLQUFLO2dCQUlDLEdBQUc7c0JBRFQsS0FBSztnQkFJVSxXQUFXO3NCQUQxQixNQUFNO2dCQUlTLFNBQVM7c0JBRHhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FzeW5jUGlwZSwgTmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1R1aU1vbnRoTGlrZSwgVHVpWWVhcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kYXRlLXRpbWUnO1xuaW1wb3J0IHtUVUlfRklSU1RfREFZLCBUVUlfTEFTVF9EQVksIFR1aU1vbnRofSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RhdGUtdGltZSc7XG5pbXBvcnQge1R1aUxpbmt9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQge1R1aVNwaW5CdXR0b259IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvc3Bpbi1idXR0b24nO1xuaW1wb3J0IHtUdWlNb250aFBpcGV9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3BpcGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3R1aS1jYWxlbmRhci1zcGluJyxcbiAgICBpbXBvcnRzOiBbQXN5bmNQaXBlLCBOZ0lmLCBUdWlMaW5rLCBUdWlNb250aFBpcGUsIFR1aVNwaW5CdXR0b25dLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci1zcGluLnRlbXBsYXRlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXNwaW4uc3R5bGUubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlDYWxlbmRhclNwaW4ge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlID0gVHVpTW9udGguY3VycmVudExvY2FsKCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtaW46IFR1aU1vbnRoID0gVFVJX0ZJUlNUX0RBWTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heDogVHVpTW9udGggPSBUVUlfTEFTVF9EQVk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFR1aU1vbnRoPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IHllYXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8VHVpWWVhcj4oKTtcblxuICAgIHByb3RlY3RlZCBvblllYXJDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy55ZWFyQ2xpY2submV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXBwZW5kKGRhdGU6IFR1aU1vbnRoTGlrZSk6IHZvaWQge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUuYXBwZW5kKGRhdGUpO1xuXG4gICAgICAgIGlmICh0aGlzLm1pbi5tb250aFNhbWVPckFmdGVyKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLm1pbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMubWF4Lm1vbnRoU2FtZU9yQmVmb3JlKHZhbHVlKSA/IHRoaXMubWF4IDogdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSh2YWx1ZTogVHVpTW9udGgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUubW9udGhTYW1lKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbn1cbiIsIjx0dWktc3Bpbi1idXR0b25cbiAgICBbZm9jdXNhYmxlXT1cImZhbHNlXCJcbiAgICBbbGVmdERpc2FibGVkXT1cInZhbHVlLm1vbnRoU2FtZU9yQmVmb3JlKG1pbilcIlxuICAgIFtyaWdodERpc2FibGVkXT1cInZhbHVlLm1vbnRoU2FtZU9yQWZ0ZXIobWF4KVwiXG4gICAgKGxlZnRDbGljayk9XCJhcHBlbmQoe21vbnRoOiAtMX0pXCJcbiAgICAocmlnaHRDbGljayk9XCJhcHBlbmQoe21vbnRoOiAxfSlcIlxuPlxuICAgIHt7IHZhbHVlIHwgdHVpTW9udGggfCBhc3luYyB9fVxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtaW4ueWVhciA9PT0gbWF4LnllYXI7IGVsc2UgYnV0dG9uXCI+XG4gICAgICAgIHt7IHZhbHVlLmZvcm1hdHRlZFllYXIgfX1cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJ5ZWFyLWJ0blwiXG4gICAgICAgICAgICBhdXRvbWF0aW9uLWlkPVwidHVpLXByaW1pdGl2ZS15ZWFyLW1vbnRoLXBhZ2luYXRpb25fX3llYXItYnV0dG9uXCJcbiAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgdHVpTGlua1xuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25ZZWFyQ2xpY2soKVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHt7IHZhbHVlLmZvcm1hdHRlZFllYXIgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvdHVpLXNwaW4tYnV0dG9uPlxuIl19