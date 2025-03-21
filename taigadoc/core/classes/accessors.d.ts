import type { AbstractType, ExistingProvider, FactoryProvider, Type } from '@angular/core';
import type { TuiPoint } from '@taiga-ui/core/types';
export declare abstract class TuiAccessor {
    abstract readonly type: string;
}
export declare abstract class TuiPositionAccessor extends TuiAccessor {
    abstract getPosition(rect: DOMRect, element?: HTMLElement): TuiPoint;
}
export declare abstract class TuiRectAccessor extends TuiAccessor {
    abstract getClientRect(): DOMRect;
}
export declare function tuiProvideAccessor<T extends TuiAccessor>(provide: AbstractType<T>, type: string, fallback: Type<T>): FactoryProvider;
export declare function tuiFallbackAccessor<T extends TuiAccessor>(type: string): (accessors: readonly T[] | null, fallback: T) => T;
export declare function tuiPositionAccessorFor(type: string, fallback: Type<TuiPositionAccessor>): FactoryProvider;
export declare function tuiRectAccessorFor(type: string, fallback: Type<TuiRectAccessor>): FactoryProvider;
export declare function tuiAsPositionAccessor(accessor: Type<TuiPositionAccessor>): ExistingProvider;
export declare function tuiAsRectAccessor(accessor: Type<TuiRectAccessor>): ExistingProvider;
