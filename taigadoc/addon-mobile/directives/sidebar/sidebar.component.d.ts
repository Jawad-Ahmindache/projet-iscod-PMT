import type { AnimationOptions } from '@angular/animations';
import type { DoCheck } from '@angular/core';
import type { TuiHorizontalDirection } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
/**
 * @deprecated use {@link TuiDrawer} instead
 */
export declare class TuiSidebarComponent implements DoCheck {
    private readonly directive;
    private readonly options;
    private readonly left;
    private readonly right;
    ngDoCheck(): void;
    protected get animation(): AnimationOptions;
    protected get direction(): TuiHorizontalDirection;
    protected get content(): PolymorpheusContent;
    protected get autoWidth(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiSidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiSidebarComponent, "aside[tuiSidebar]", never, {}, {}, never, never, true, never>;
}
