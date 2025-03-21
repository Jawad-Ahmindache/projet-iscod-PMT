import type { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TuiTileService implements OnDestroy {
    private readonly isBrowser;
    private readonly el;
    private readonly tiles;
    private readonly sub;
    private readonly offset$;
    private readonly position$;
    init(element: HTMLElement): void;
    setOffset(offset: readonly [number, number]): void;
    ngOnDestroy(): void;
    private getRect;
    private setRect;
    private setPosition;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TuiTileService>;
}
