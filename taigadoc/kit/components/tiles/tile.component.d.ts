import type { AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TuiTile implements OnDestroy, AfterViewInit {
    private readonly wrapper?;
    private readonly service;
    private readonly tiles;
    protected dragged: import("@angular/core").WritableSignal<boolean>;
    width: number;
    height: number;
    readonly element: HTMLElement;
    onDrag(offset: readonly [number, number]): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected get column(): string;
    protected get row(): string;
    protected onEnter(): void;
    protected onTransitionEnd(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTile, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTile, "tui-tile", never, { "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; }, {}, never, ["*"], true, never>;
}
