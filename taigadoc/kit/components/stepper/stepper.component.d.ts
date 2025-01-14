import { EventEmitter } from '@angular/core';
import type { TuiOrientation } from '@taiga-ui/core/types';
import type { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TuiStepperComponent {
    private readonly steps;
    private readonly cdr;
    private readonly el;
    private readonly scrollService;
    private readonly speed;
    private readonly destroyRef;
    protected activeItemIndex: number;
    protected readonly $: import("rxjs").Subscription;
    orientation: TuiOrientation;
    readonly activeItemIndexChange: EventEmitter<number>;
    set activeIndex(index: number);
    indexOf(step: HTMLElement): number;
    isActive(index: number): boolean;
    activate(index: number): void;
    protected get changes$(): Observable<unknown>;
    protected onHorizontal(event: Event, step: number): void;
    protected onVertical(event: Event, step: number): void;
    private moveFocus;
    private scrollIntoView;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiStepperComponent, "tui-stepper, nav[tuiStepper]", never, { "orientation": { "alias": "orientation"; "required": false; }; "activeIndex": { "alias": "activeItemIndex"; "required": false; }; }, { "activeItemIndexChange": "activeItemIndexChange"; }, ["steps"], ["*"], true, never>;
}
