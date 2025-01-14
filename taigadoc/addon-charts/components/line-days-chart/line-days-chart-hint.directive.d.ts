import type { AfterContentInit } from '@angular/core';
import type { TuiDay } from '@taiga-ui/cdk/date-time';
import type { TuiContext } from '@taiga-ui/cdk/types';
import type { TuiPoint } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
export declare class TuiLineDaysChartHint implements AfterContentInit {
    private readonly charts;
    private readonly destroyRef;
    private readonly zone;
    private readonly hovered$;
    hint: PolymorpheusContent<TuiContext<readonly TuiPoint[]>>;
    ngAfterContentInit(): void;
    getContext(day: TuiDay): ReadonlyArray<[TuiDay, number]>;
    raise(day: TuiDay): void;
    private getMap;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiLineDaysChartHint, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiLineDaysChartHint, "[tuiLineChartHint]", never, { "hint": { "alias": "tuiLineChartHint"; "required": false; }; }, {}, ["charts"], never, true, never>;
}
