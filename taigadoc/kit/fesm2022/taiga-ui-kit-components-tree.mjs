import { NgIf, NgTemplateOutlet, AsyncPipe, NgForOf } from '@angular/common';
import * as i0 from '@angular/core';
import { Directive, Input, inject, forwardRef, Component, ChangeDetectionStrategy, SkipSelf, ContentChildren, ViewChild, EventEmitter, Output, Injectable } from '@angular/core';
import { TuiLet } from '@taiga-ui/cdk/directives/let';
import { tuiCreateToken, tuiProvide, tuiIsPresent } from '@taiga-ui/cdk/utils/miscellaneous';
import { injectContext, PolymorpheusComponent, PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { Subject, startWith, map, distinctUntilChanged, mergeMap, tap } from 'rxjs';
import { EMPTY_ARRAY, TUI_TRUE_HANDLER, EMPTY_FUNCTION, EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { toSignal } from '@angular/core/rxjs-interop';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { TuiExpandComponent } from '@taiga-ui/core/components/expand';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TUI_COMMON_ICONS } from '@taiga-ui/core/tokens';
import { TUI_MORE_WORD } from '@taiga-ui/kit/tokens';

class TuiTreeChildren {
    constructor() {
        this.childrenHandler = TuiTreeChildren.defaultHandler;
    }
    static defaultHandler(item) {
        return Array.isArray(item) ? item : EMPTY_ARRAY;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeChildren, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTreeChildren, isStandalone: true, selector: "tui-tree[childrenHandler]", inputs: { childrenHandler: "childrenHandler" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeChildren, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-tree[childrenHandler]',
                }]
        }], propDecorators: { childrenHandler: [{
                type: Input
            }] } });

class TuiTreeItemContent {
    constructor() {
        this.controller = inject(forwardRef(() => TUI_TREE_CONTROLLER));
        this.change$ = new Subject();
        this.icons = inject(TUI_COMMON_ICONS);
        this.more = toSignal(inject(TUI_MORE_WORD));
        this.context = injectContext();
        this.expanded = toSignal(this.change$.pipe(startWith(null), map(() => this.isExpanded), distinctUntilChanged()), { initialValue: this.isExpanded });
    }
    ngDoCheck() {
        this.change$.next();
    }
    get isExpandable() {
        return (this.context.$implicit.isExpandable &&
            this.controller !== TUI_DEFAULT_TREE_CONTROLLER);
    }
    get isExpanded() {
        return this.context.$implicit.isExpanded;
    }
    onClick() {
        this.controller.toggle(this.context.$implicit);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeItemContent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTreeItemContent, isStandalone: true, selector: "ng-component", host: { properties: { "class._expandable": "isExpandable" } }, ngImport: i0, template: "<button\n    *ngIf=\"isExpandable\"\n    appearance=\"flat\"\n    size=\"xs\"\n    tuiIconButton\n    type=\"button\"\n    class=\"t-button\"\n    [class.t-button_expanded]=\"expanded()\"\n    [iconStart]=\"icons.more\"\n    [style.border-radius.%]=\"100\"\n    (click)=\"onClick()\"\n>\n    {{ more() }}\n</button>\n<ng-container [ngTemplateOutlet]=\"context.template\" />\n", styles: [":host{display:flex;align-items:center}:host :host-context(tui-tree-item._expandable):not(._expandable){padding-left:2rem}.t-button{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:.5rem}.t-button_expanded{transform:rotate(90deg)}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeItemContent, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [NgIf, NgTemplateOutlet, TuiButton], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._expandable]': 'isExpandable',
                    }, template: "<button\n    *ngIf=\"isExpandable\"\n    appearance=\"flat\"\n    size=\"xs\"\n    tuiIconButton\n    type=\"button\"\n    class=\"t-button\"\n    [class.t-button_expanded]=\"expanded()\"\n    [iconStart]=\"icons.more\"\n    [style.border-radius.%]=\"100\"\n    (click)=\"onClick()\"\n>\n    {{ more() }}\n</button>\n<ng-container [ngTemplateOutlet]=\"context.template\" />\n", styles: [":host{display:flex;align-items:center}:host :host-context(tui-tree-item._expandable):not(._expandable){padding-left:2rem}.t-button{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:.5rem}.t-button_expanded{transform:rotate(90deg)}\n"] }]
        }] });

const TUI_TREE_ITEM_CONTENT = new PolymorpheusComponent(TuiTreeItemContent);
const TUI_DEFAULT_TREE_CONTROLLER = {
    isExpanded: TUI_TRUE_HANDLER,
    toggle: EMPTY_FUNCTION,
};

/**
 * Controller for tracking value - TuiTreeItemComponent pairs
 */
const TUI_TREE_ACCESSOR = tuiCreateToken();
/**
 * Controller for expanding the tree
 */
const TUI_TREE_CONTROLLER = tuiCreateToken(TUI_DEFAULT_TREE_CONTROLLER);
/**
 * A node of a tree view
 */
const TUI_TREE_NODE = tuiCreateToken();
/**
 * A tree node placeholder for loading
 */
const TUI_TREE_LOADING = tuiCreateToken({});
/**
 * A tree node starting point
 */
const TUI_TREE_START = tuiCreateToken();
/**
 * A service to load tree progressively
 */
const TUI_TREE_LOADER = tuiCreateToken();
/**
 * Content for a tree item
 */
const TUI_TREE_CONTENT = tuiCreateToken(TUI_TREE_ITEM_CONTENT);
/**
 * Nesting level of current TreeView node
 */
const TUI_TREE_LEVEL = tuiCreateToken(-1);

class TuiTreeItem {
    constructor() {
        this.nested = EMPTY_QUERY;
        this.el = tuiInjectElement();
        this.controller = inject(forwardRef(() => TUI_TREE_CONTROLLER));
        this.change$ = new Subject();
        this.level = inject(forwardRef(() => TUI_TREE_LEVEL));
        this.content = inject(forwardRef(() => TUI_TREE_CONTENT));
        this.expanded = toSignal(this.change$.pipe(startWith(null), map(() => this.isExpanded)), { initialValue: this.isExpanded });
        this.attached = toSignal(this.change$.pipe(map(() => this.el.isConnected), distinctUntilChanged()), { initialValue: this.el.isConnected });
    }
    get isExpandable() {
        return !!this.nested.length;
    }
    get isExpanded() {
        return this.controller.isExpanded(this);
    }
    ngDoCheck() {
        this.checkChanges();
    }
    checkChanges() {
        this.change$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeItem, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTreeItem, isStandalone: true, selector: "tui-tree-item", host: { attributes: { "role": "treeitem" }, properties: { "class._expandable": "isExpandable" } }, providers: [
            tuiProvide(TUI_TREE_NODE, TuiTreeItem),
            {
                provide: TUI_TREE_LEVEL,
                deps: [[new SkipSelf(), TUI_TREE_LEVEL]],
                useFactory: (level) => ++level,
            },
        ], queries: [{ propertyName: "nested", predicate: TUI_TREE_NODE }], ngImport: i0, template: "<ng-template #template>\n    <ng-content />\n</ng-template>\n<ng-container *polymorpheusOutlet=\"content as text; context: {$implicit: this, template: template}\">\n    {{ text }}\n</ng-container>\n<tui-expand\n    *ngIf=\"isExpandable\"\n    role=\"group\"\n    class=\"t-children\"\n    [expanded]=\"expanded()\"\n>\n    <div>\n        <ng-content select=\"tui-tree-item\" />\n        <ng-content select=\"tui-tree\" />\n    </div>\n</tui-expand>\n<ng-container *ngIf=\"attached()\" />\n", styles: [":host{display:block}.t-children{position:relative;margin-left:var(--tui-tree-item-indent, 1.5rem)}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "component", type: TuiExpandComponent, selector: "tui-expand", inputs: ["async", "expanded"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeItem, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-tree-item', imports: [NgIf, PolymorpheusOutlet, TuiExpandComponent], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        tuiProvide(TUI_TREE_NODE, TuiTreeItem),
                        {
                            provide: TUI_TREE_LEVEL,
                            deps: [[new SkipSelf(), TUI_TREE_LEVEL]],
                            useFactory: (level) => ++level,
                        },
                    ], host: {
                        role: 'treeitem',
                        '[class._expandable]': 'isExpandable',
                    }, template: "<ng-template #template>\n    <ng-content />\n</ng-template>\n<ng-container *polymorpheusOutlet=\"content as text; context: {$implicit: this, template: template}\">\n    {{ text }}\n</ng-container>\n<tui-expand\n    *ngIf=\"isExpandable\"\n    role=\"group\"\n    class=\"t-children\"\n    [expanded]=\"expanded()\"\n>\n    <div>\n        <ng-content select=\"tui-tree-item\" />\n        <ng-content select=\"tui-tree\" />\n    </div>\n</tui-expand>\n<ng-container *ngIf=\"attached()\" />\n", styles: [":host{display:block}.t-children{position:relative;margin-left:var(--tui-tree-item-indent, 1.5rem)}\n"] }]
        }], propDecorators: { nested: [{
                type: ContentChildren,
                args: [TUI_TREE_NODE]
            }] } });

class TuiTreeNode {
    constructor() {
        this.component = inject(TuiTreeItem);
        this.directive = inject(TUI_TREE_ACCESSOR, {
            optional: true,
        });
    }
    set value(value) {
        this.directive?.register(this.component, value);
    }
    ngOnDestroy() {
        this.directive?.unregister(this.component);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeNode, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTreeNode, isStandalone: true, selector: "tui-tree-item[tuiTreeNode]", inputs: { value: ["tuiTreeNode", "value"] }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeNode, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-tree-item[tuiTreeNode]',
                }]
        }], propDecorators: { value: [{
                type: Input,
                args: ['tuiTreeNode']
            }] } });

class TuiTreeComponent {
    constructor() {
        this.check$ = new Subject();
        this.children$ = this.check$.pipe(startWith(null), map(() => this.handler(this.value)), distinctUntilChanged());
        this.directive = inject(TuiTreeChildren, {
            optional: true,
        });
        this.trackBy = (_, item) => item;
        this.content = ({ $implicit }) => String($implicit);
    }
    ngDoCheck() {
        this.checkChanges();
    }
    checkChanges() {
        this.check$.next();
        this.item?.checkChanges();
        this.child?.checkChanges();
    }
    get handler() {
        return this.directive?.childrenHandler || TuiTreeChildren.defaultHandler;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTreeComponent, isStandalone: true, selector: "tui-tree", inputs: { value: "value", trackBy: "trackBy", content: "content" }, host: { attributes: { "role": "tree" } }, providers: [tuiProvide(TUI_TREE_NODE, TuiTreeComponent)], viewQueries: [{ propertyName: "item", first: true, predicate: i0.forwardRef(function () { return TuiTreeItem; }), descendants: true }, { propertyName: "child", first: true, predicate: i0.forwardRef(function () { return TuiTreeComponent; }), descendants: true }], ngImport: i0, template: "<tui-tree-item\n    *tuiLet=\"children$ | async as children\"\n    #view\n    [tuiTreeNode]=\"value\"\n>\n    <ng-container *ngIf=\"value !== children\">\n        <ng-container *polymorpheusOutlet=\"content as text; context: {$implicit: value, node: view}\">\n            {{ text }}\n        </ng-container>\n    </ng-container>\n    <tui-tree\n        *ngFor=\"let child of children; trackBy: trackBy\"\n        [content]=\"content\"\n        [trackBy]=\"trackBy\"\n        [value]=\"child\"\n    />\n</tui-tree-item>\n", styles: [":host{position:relative;display:block}\n"], dependencies: [{ kind: "component", type: TuiTreeComponent, selector: "tui-tree", inputs: ["value", "trackBy", "content"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiLet, selector: "[tuiLet]", inputs: ["tuiLet"] }, { kind: "component", type: TuiTreeItem, selector: "tui-tree-item" }, { kind: "directive", type: TuiTreeNode, selector: "tui-tree-item[tuiTreeNode]", inputs: ["tuiTreeNode"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-tree', imports: [
                        AsyncPipe,
                        NgForOf,
                        NgIf,
                        PolymorpheusOutlet,
                        TuiLet,
                        TuiTreeItem,
                        TuiTreeNode,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [tuiProvide(TUI_TREE_NODE, TuiTreeComponent)], host: { role: 'tree' }, template: "<tui-tree-item\n    *tuiLet=\"children$ | async as children\"\n    #view\n    [tuiTreeNode]=\"value\"\n>\n    <ng-container *ngIf=\"value !== children\">\n        <ng-container *polymorpheusOutlet=\"content as text; context: {$implicit: value, node: view}\">\n            {{ text }}\n        </ng-container>\n    </ng-container>\n    <tui-tree\n        *ngFor=\"let child of children; trackBy: trackBy\"\n        [content]=\"content\"\n        [trackBy]=\"trackBy\"\n        [value]=\"child\"\n    />\n</tui-tree-item>\n", styles: [":host{position:relative;display:block}\n"] }]
        }], propDecorators: { item: [{
                type: ViewChild,
                args: [forwardRef(() => TuiTreeItem)]
            }], child: [{
                type: ViewChild,
                args: [forwardRef(() => TuiTreeComponent)]
            }], value: [{
                type: Input,
                args: [{
                        required: true,
                    }]
            }], trackBy: [{
                type: Input
            }], content: [{
                type: Input
            }] } });

class TuiTreeControllerDirective {
    constructor() {
        this.items = new Map();
        this.fallback = true;
        this.map = new Map();
        this.toggled = new EventEmitter();
    }
    register(item, value) {
        this.items.set(item, value);
    }
    unregister(item) {
        this.items.delete(item);
    }
    isExpanded(item) {
        const value = this.items.get(item);
        return (value && this.map.get(value)) ?? this.fallback;
    }
    toggle(item) {
        const value = this.items.get(item);
        const expanded = this.isExpanded(item);
        if (!tuiIsPresent(value)) {
            return;
        }
        this.toggled.emit(value);
        this.map.set(value, !expanded);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeControllerDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTreeControllerDirective, isStandalone: true, selector: "[tuiTreeController][map]", inputs: { fallback: ["tuiTreeController", "fallback"], map: "map" }, outputs: { toggled: "toggled" }, providers: [
            tuiProvide(TUI_TREE_ACCESSOR, TuiTreeControllerDirective),
            tuiProvide(TUI_TREE_CONTROLLER, TuiTreeControllerDirective),
        ], exportAs: ["tuiTreeController"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeControllerDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTreeController][map]',
                    providers: [
                        tuiProvide(TUI_TREE_ACCESSOR, TuiTreeControllerDirective),
                        tuiProvide(TUI_TREE_CONTROLLER, TuiTreeControllerDirective),
                    ],
                    exportAs: 'tuiTreeController',
                }]
        }], propDecorators: { fallback: [{
                type: Input,
                args: ['tuiTreeController']
            }], map: [{
                type: Input
            }], toggled: [{
                type: Output
            }] } });

class TuiTreeItemController {
    constructor() {
        this.map = new WeakMap();
        this.fallback = true;
    }
    isExpanded(item) {
        return this.map.get(item) ?? this.fallback;
    }
    toggle(item) {
        this.map.set(item, !this.isExpanded(item));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeItemController, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTreeItemController, isStandalone: true, selector: "[tuiTreeController]:not([map])", inputs: { fallback: ["tuiTreeController", "fallback"] }, providers: [tuiProvide(TUI_TREE_CONTROLLER, TuiTreeItemController)], exportAs: ["tuiTreeController"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeItemController, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTreeController]:not([map])',
                    providers: [tuiProvide(TUI_TREE_CONTROLLER, TuiTreeItemController)],
                    exportAs: 'tuiTreeController',
                }]
        }], propDecorators: { fallback: [{
                type: Input,
                args: ['tuiTreeController']
            }] } });

class TuiTreeService {
    constructor() {
        this.loading = inject(TUI_TREE_LOADING);
        this.start = inject(TUI_TREE_START);
        this.loader = inject(TUI_TREE_LOADER);
        this.map = new Map([[this.loading, []]]);
        this.load$ = new Subject();
        this.data$ = this.load$.pipe(mergeMap((item) => this.loader.loadChildren(item).pipe(tap((children) => this.map.set(item, children)), map((children) => children.filter((item) => !this.loader.hasChildren(item))), tap((children) => children.forEach((child) => this.map.set(child, []))))), startWith(null), map(() => this.start));
    }
    getChildren(item) {
        return this.map.get(item) || [this.loading];
    }
    loadChildren(item) {
        if (this.map.get(item)) {
            return;
        }
        this.map.set(item, [this.loading]);
        this.load$.next(item);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTreeService, decorators: [{
            type: Injectable
        }] });

const TuiTree = [
    TuiTreeComponent,
    TuiTreeItem,
    TuiTreeItemContent,
    TuiTreeChildren,
    TuiTreeItemController,
    TuiTreeControllerDirective,
    TuiTreeNode,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_DEFAULT_TREE_CONTROLLER, TUI_TREE_ACCESSOR, TUI_TREE_CONTENT, TUI_TREE_CONTROLLER, TUI_TREE_ITEM_CONTENT, TUI_TREE_LEVEL, TUI_TREE_LOADER, TUI_TREE_LOADING, TUI_TREE_NODE, TUI_TREE_START, TuiTree, TuiTreeChildren, TuiTreeComponent, TuiTreeControllerDirective, TuiTreeItem, TuiTreeItemContent, TuiTreeItemController, TuiTreeNode, TuiTreeService };
//# sourceMappingURL=taiga-ui-kit-components-tree.mjs.map
