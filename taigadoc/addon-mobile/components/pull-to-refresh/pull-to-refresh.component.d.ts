import type { TuiContext, TuiHandler } from '@taiga-ui/cdk/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { Observable } from 'rxjs';
import { TuiPullToRefreshService } from './pull-to-refresh.service';
import * as i0 from "@angular/core";
export declare class TuiPullToRefresh {
    private readonly isIOS;
    private readonly threshold;
    protected readonly pulling$: TuiPullToRefreshService;
    protected readonly component: PolymorpheusContent<TuiContext<number>>;
    protected readonly dropped$: Observable<boolean>;
    styleHandler: TuiHandler<number, Record<string, unknown> | null>;
    readonly pulled: Observable<unknown>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiPullToRefresh, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiPullToRefresh, "tui-pull-to-refresh", never, { "styleHandler": { "alias": "styleHandler"; "required": false; }; }, { "pulled": "pulled"; }, never, ["*"], true, never>;
}
