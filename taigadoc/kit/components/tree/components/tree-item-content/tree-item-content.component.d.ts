import type { DoCheck } from '@angular/core';
import type { TuiTreeItemContext } from '../../misc/tree.interfaces';
import * as i0 from "@angular/core";
export declare class TuiTreeItemContent implements DoCheck {
    private readonly controller;
    private readonly change$;
    protected readonly icons: import("@taiga-ui/core/tokens").TuiCommonIcons;
    protected readonly more: import("@angular/core").Signal<string | undefined>;
    protected readonly context: TuiTreeItemContext;
    protected readonly expanded: import("@angular/core").Signal<boolean>;
    ngDoCheck(): void;
    protected get isExpandable(): boolean;
    protected get isExpanded(): boolean;
    protected onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTreeItemContent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTreeItemContent, "ng-component", never, {}, {}, never, never, true, never>;
}
