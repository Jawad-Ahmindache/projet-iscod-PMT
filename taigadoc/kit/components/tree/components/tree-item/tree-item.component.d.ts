import type { DoCheck } from '@angular/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import type { TuiTreeItemContext } from '../../misc/tree.interfaces';
import * as i0 from "@angular/core";
export declare class TuiTreeItem implements DoCheck {
    private readonly nested;
    private readonly el;
    private readonly controller;
    private readonly change$;
    protected readonly level: number;
    protected readonly content: PolymorpheusContent<TuiTreeItemContext>;
    protected readonly expanded: import("@angular/core").Signal<boolean>;
    protected readonly attached: import("@angular/core").Signal<boolean>;
    get isExpandable(): boolean;
    get isExpanded(): boolean;
    ngDoCheck(): void;
    checkChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTreeItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTreeItem, "tui-tree-item", never, {}, {}, ["nested"], ["*", "tui-tree-item", "tui-tree"], true, never>;
}
