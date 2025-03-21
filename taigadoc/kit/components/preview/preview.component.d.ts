import { ChangeDetectorRef } from '@angular/core';
import type { TuiZoomEvent } from '@taiga-ui/cdk/directives/zoom';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class TuiPreviewComponent {
    private readonly el;
    protected minZoom: number;
    protected width: number;
    protected height: number;
    protected readonly texts$: import("rxjs").Observable<{
        rotate: string;
    }>;
    protected readonly icons: import("@taiga-ui/kit/tokens").TuiPreviewIcons;
    protected readonly cdr: ChangeDetectorRef;
    protected readonly zoom$: BehaviorSubject<number>;
    protected readonly rotation$: BehaviorSubject<number>;
    protected readonly coordinates$: BehaviorSubject<readonly [number, number]>;
    protected readonly transitioned$: import("rxjs").Observable<boolean>;
    protected readonly cursor$: import("rxjs").Observable<string>;
    protected readonly wrapperTransform$: import("rxjs").Observable<string>;
    zoomable: boolean;
    rotatable: boolean;
    protected rotate(): void;
    protected onPan(delta: readonly [number, number]): void;
    protected onMutation(contentWrapper: HTMLElement): void;
    protected onZoom({ clientX, clientY, delta }: TuiZoomEvent): void;
    protected onResize([entry]: readonly ResizeObserverEntry[]): void;
    protected reset(): void;
    protected setZoom(zoom: number): void;
    private get offsets();
    private calculateMinZoom;
    private refresh;
    private processZoom;
    private getGuardedCoordinates;
    private getScaleCenter;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiPreviewComponent, "tui-preview", never, { "zoomable": { "alias": "zoomable"; "required": false; }; "rotatable": { "alias": "rotatable"; "required": false; }; }, {}, never, ["*", "tui-preview-title", "tui-preview-pagination", "[tuiPreviewAction]"], true, never>;
}
