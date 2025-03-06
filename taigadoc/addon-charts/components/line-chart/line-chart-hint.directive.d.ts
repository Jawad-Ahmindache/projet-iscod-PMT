import type { AfterViewInit, QueryList } from '@angular/core';
import type { TuiContext } from '@taiga-ui/cdk/types';
import type { TuiPoint } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { Observable } from 'rxjs';
import { TuiLineChart } from './line-chart.component';
import * as i0 from "@angular/core";
export declare class TuiLineChartHint implements AfterViewInit {
    private readonly charts;
    private readonly chartsRef;
    private readonly renderer;
    private readonly destroyRef;
    private readonly zone;
    private readonly hovered$;
    hint: PolymorpheusContent<TuiContext<readonly TuiPoint[]>>;
    ngAfterViewInit(): void;
    getContext(index: number, _chart: TuiLineChart): readonly TuiPoint[];
    raise(index: number, _chart: TuiLineChart): void;
    private computeContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiLineChartHint, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiLineChartHint, "[tuiLineChartHint]", never, { "hint": { "alias": "tuiLineChartHint"; "required": false; }; }, {}, ["charts", "chartsRef"], never, true, never>;
}
export declare function tuiLineChartDrivers(charts: QueryList<{
    drivers: QueryList<Observable<boolean>>;
}>): Observable<boolean>;
