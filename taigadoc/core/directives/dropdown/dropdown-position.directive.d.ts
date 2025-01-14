import { EventEmitter } from '@angular/core';
import { TuiPositionAccessor, TuiRectAccessor } from '@taiga-ui/core/classes';
import type { TuiPoint, TuiVerticalDirection } from '@taiga-ui/core/types';
import * as i0 from "@angular/core";
export declare class TuiDropdownPosition extends TuiPositionAccessor {
    private readonly options;
    private readonly viewport;
    private previous?;
    readonly directionChange: EventEmitter<TuiVerticalDirection>;
    readonly type = "dropdown";
    readonly accessor: TuiRectAccessor | null;
    emitDirection(direction: TuiVerticalDirection): void;
    getPosition({ width, height }: DOMRect): TuiPoint;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDropdownPosition, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiDropdownPosition, never, never, {}, { "directionChange": "tuiDropdownDirectionChange"; }, never, never, true, never>;
}
