import { EventEmitter } from '@angular/core';
import { TuiPositionAccessor } from '@taiga-ui/core/classes';
import type { TuiPoint } from '@taiga-ui/core/types';
import type { TuiHintDirection, TuiHintOptions } from './hint-options.directive';
import * as i0 from "@angular/core";
export declare class TuiHintPosition extends TuiPositionAccessor {
    private readonly offset;
    private readonly viewport;
    private readonly accessor;
    private readonly points;
    direction: TuiHintOptions['direction'];
    readonly directionChange: EventEmitter<TuiHintDirection>;
    readonly type = "hint";
    emitDirection(direction: TuiHintDirection): void;
    getPosition(rect: DOMRect, el?: HTMLElement): TuiPoint;
    private get fallback();
    private checkPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiHintPosition, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiHintPosition, never, never, { "direction": { "alias": "tuiHintDirection"; "required": false; }; }, { "directionChange": "tuiHintDirectionChange"; }, never, never, true, never>;
}
