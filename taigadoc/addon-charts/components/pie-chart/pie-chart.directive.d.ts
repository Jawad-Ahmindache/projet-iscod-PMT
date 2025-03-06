import * as i0 from "@angular/core";
export declare class TuiPieChartDirective {
    private readonly sector$;
    private readonly el;
    private readonly performance;
    private readonly animationFrame$;
    private readonly speed;
    protected readonly $: import("rxjs").Subscription;
    set tuiPieChart(sector: readonly [number, number]);
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiPieChartDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiPieChartDirective, "path[tuiPieChart]", never, { "tuiPieChart": { "alias": "tuiPieChart"; "required": false; }; }, {}, never, never, true, never>;
}
