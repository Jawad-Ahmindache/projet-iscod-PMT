import type { QueryList } from '@angular/core';
import type { TuiContext, TuiMapper } from '@taiga-ui/cdk/types';
import type { TuiSizeL, TuiSizeS } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TuiBarChart {
    private readonly hintOptions;
    private readonly autoId;
    protected readonly drivers: QueryList<Observable<boolean>>;
    value: ReadonlyArray<readonly number[]>;
    max: number;
    size: TuiSizeL | TuiSizeS | null;
    collapsed: boolean;
    get transposed(): ReadonlyArray<readonly number[]>;
    get computedMax(): number;
    readonly percentMapper: TuiMapper<[
        readonly number[],
        boolean,
        number
    ], number>;
    protected get hintContent(): PolymorpheusContent<TuiContext<number>>;
    protected getHintId(index: number): string;
    private transpose;
    private getMax;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiBarChart, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiBarChart, "tui-bar-chart", never, { "value": { "alias": "value"; "required": false; }; "max": { "alias": "max"; "required": false; }; "size": { "alias": "size"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; }, {}, never, never, true, never>;
}
