import type { AfterViewInit, QueryList } from '@angular/core';
import { TuiLineChart } from '@taiga-ui/addon-charts/components/line-chart';
import { TuiDay } from '@taiga-ui/cdk/date-time';
import type { TuiContext, TuiStringHandler } from '@taiga-ui/cdk/types';
import type { TuiPoint } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
export declare class TuiLineDaysChart implements AfterViewInit {
    private readonly destroyRef;
    private readonly zone;
    private readonly hovered$;
    private readonly options;
    private readonly hintDirective;
    readonly charts: QueryList<TuiLineChart>;
    y: number;
    height: number;
    smoothingFactor: number;
    hintContent: PolymorpheusContent<TuiContext<[TuiDay, number]>>;
    xStringify: TuiStringHandler<TuiDay> | null;
    yStringify: TuiStringHandler<number> | null;
    dots: boolean;
    zIndex: number;
    value: ReadonlyArray<[TuiDay, number]>;
    set valueSetter(value: ReadonlyArray<[TuiDay, number]>);
    get hint(): PolymorpheusContent<TuiContext<[TuiDay, number]>> | PolymorpheusContent<TuiContext<readonly TuiPoint[]>>;
    ngAfterViewInit(): void;
    onHovered(day: TuiDay | number): void;
    raise(index: number, { value }: TuiLineChart): void;
    getContext(index: number, { value }: TuiLineChart): unknown;
    protected get months(): ReadonlyArray<readonly TuiPoint[]>;
    protected get firstWidth(): number;
    protected getHintContext(x: number, value: ReadonlyArray<[TuiDay, number]>): [TuiDay, number] | null;
    protected readonly daysStringify: TuiStringHandler<number>;
    protected getX(index: number): number;
    protected getWidth(index: number): number;
    private breakMonths;
    private getDay;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiLineDaysChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiLineDaysChart, "tui-line-days-chart", never, { "y": { "alias": "y"; "required": false; }; "height": { "alias": "height"; "required": false; }; "smoothingFactor": { "alias": "smoothingFactor"; "required": false; }; "hintContent": { "alias": "hintContent"; "required": false; }; "xStringify": { "alias": "xStringify"; "required": false; }; "yStringify": { "alias": "yStringify"; "required": false; }; "dots": { "alias": "dots"; "required": false; }; "valueSetter": { "alias": "value"; "required": false; }; }, {}, never, never, true, never>;
}
