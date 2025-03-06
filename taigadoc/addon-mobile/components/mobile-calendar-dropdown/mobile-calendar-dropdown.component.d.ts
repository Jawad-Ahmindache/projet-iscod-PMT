import type { ValueProvider } from '@angular/core';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk/date-time';
import type { TuiBooleanHandler } from '@taiga-ui/cdk/types';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/active-zone";
export interface TuiMobileCalendarData {
    disabledItemHandler?: TuiBooleanHandler<TuiDay>;
    max?: TuiDay | null;
    min?: TuiDay | null;
    multi?: boolean;
    single?: boolean;
}
export declare class TuiMobileCalendarDropdown {
    private readonly dropdown;
    private readonly keyboard;
    private readonly context;
    private readonly observer?;
    private readonly data;
    private selectedPeriod;
    protected readonly animation: {
        value: string;
        params: {
            start: string;
            duration: number;
        };
    };
    protected readonly control: any;
    protected readonly range: boolean;
    protected readonly multi: boolean;
    protected readonly single: boolean;
    constructor();
    max(): TuiDay;
    min(): TuiDay;
    onValueChange(value: TuiDay | TuiDayRange | readonly TuiDay[] | null): void;
    protected get calculatedDisabledItemHandler(): TuiBooleanHandler<TuiDay>;
    protected close(): void;
    protected confirm(value: any): void;
    private calculateDisabledItemHandler;
    private is;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiMobileCalendarDropdown, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiMobileCalendarDropdown, "tui-mobile-calendar-dropdown", never, {}, {}, never, never, true, [{ directive: typeof i1.TuiActiveZone; inputs: {}; outputs: {}; }]>;
}
export declare function tuiProvideMobileCalendar(): ValueProvider;
