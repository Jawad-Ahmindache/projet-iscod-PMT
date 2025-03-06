import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TuiTilesComponent {
    private readonly el;
    private readonly el$;
    debounce: number;
    readonly orderChange: import("rxjs").Observable<Map<number, number>>;
    element: import("@angular/core").WritableSignal<Element | null>;
    readonly order$: BehaviorSubject<Map<number, number>>;
    set order(map: Map<number, number>);
    get order(): Map<number, number>;
    rearrange(element?: Element): void;
    private filter;
    private reorder;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTilesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTilesComponent, "tui-tiles", never, { "debounce": { "alias": "debounce"; "required": false; }; "order": { "alias": "order"; "required": false; }; }, { "orderChange": "orderChange"; }, never, ["*"], true, never>;
}
