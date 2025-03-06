import { NgForOf, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Component, ChangeDetectionStrategy, ViewChildren, forwardRef, Input, Output } from '@angular/core';
import { TuiElement } from '@taiga-ui/cdk/directives/element';
import * as i1 from '@taiga-ui/core/components/data-list';
import { tuiInjectDataListSize, tuiAsDataListAccessor, TuiOption, TuiDataList, TuiDataListDirective } from '@taiga-ui/core/components/data-list';
import { TuiLoader } from '@taiga-ui/core/components/loader';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiIsNativeFocused } from '@taiga-ui/cdk/utils/focus';
import { tuiIsPresent } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_ITEMS_HANDLERS } from '@taiga-ui/kit/tokens';

class TuiDataListWrapperComponent {
    constructor() {
        this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
        this.optionsQuery = EMPTY_QUERY;
        this.items = [];
        this.disabledItemHandler = this.itemsHandlers.disabledItemHandler;
        this.size = tuiInjectDataListSize();
        this.itemClick = new EventEmitter();
        this.itemContent = ({ $implicit }) => this.itemsHandlers.stringify($implicit);
    }
    getContext($implicit, { nativeElement }) {
        return { $implicit, active: tuiIsNativeFocused(nativeElement) };
    }
    getOptions(includeDisabled = false) {
        return this.optionsQuery
            .filter(({ disabled }) => includeDisabled || !disabled)
            .map(({ value }) => value)
            .filter(tuiIsPresent);
    }
    $cast(items) {
        return items;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiDataListWrapperComponent, isStandalone: true, selector: "tui-data-list-wrapper:not([labels])", inputs: { items: "items", disabledItemHandler: "disabledItemHandler", emptyContent: "emptyContent", size: "size", itemContent: "itemContent" }, outputs: { itemClick: "itemClick" }, providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)], viewQueries: [{ propertyName: "optionsQuery", predicate: i0.forwardRef(function () { return TuiOption; }), descendants: true }], ngImport: i0, template: "<tui-data-list\n    *ngIf=\"items; else loading\"\n    [emptyContent]=\"emptyContent\"\n    [size]=\"size\"\n>\n    <button\n        *ngFor=\"let item of $cast(items)\"\n        #elementRef=\"elementRef\"\n        automation-id=\"tui-data-list-wrapper__option\"\n        tuiElement\n        tuiOption\n        type=\"button\"\n        [disabled]=\"disabledItemHandler(item)\"\n        [value]=\"item\"\n        (click)=\"itemClick.emit(item)\"\n    >\n        <span class=\"t-content\">\n            <ng-container *polymorpheusOutlet=\"itemContent as text; context: getContext(item, elementRef)\">\n                {{ text }}\n            </ng-container>\n        </span>\n    </button>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader\n        automation-id=\"tui-data-list-wrapper__loader\"\n        class=\"t-loader\"\n    />\n</ng-template>\n", styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "component", type: i1.TuiDataListComponent, selector: "tui-data-list", inputs: ["emptyContent", "size"] }, { kind: "component", type: i1.TuiOption, selector: "button[tuiOption], a[tuiOption], label[tuiOption]", inputs: ["disabled", "value"] }, { kind: "directive", type: TuiElement, selector: "[tuiElement]", exportAs: ["elementRef"] }, { kind: "component", type: TuiLoader, selector: "tui-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListWrapperComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-data-list-wrapper:not([labels])', imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader], changeDetection: ChangeDetectionStrategy.OnPush, providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)], template: "<tui-data-list\n    *ngIf=\"items; else loading\"\n    [emptyContent]=\"emptyContent\"\n    [size]=\"size\"\n>\n    <button\n        *ngFor=\"let item of $cast(items)\"\n        #elementRef=\"elementRef\"\n        automation-id=\"tui-data-list-wrapper__option\"\n        tuiElement\n        tuiOption\n        type=\"button\"\n        [disabled]=\"disabledItemHandler(item)\"\n        [value]=\"item\"\n        (click)=\"itemClick.emit(item)\"\n    >\n        <span class=\"t-content\">\n            <ng-container *polymorpheusOutlet=\"itemContent as text; context: getContext(item, elementRef)\">\n                {{ text }}\n            </ng-container>\n        </span>\n    </button>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader\n        automation-id=\"tui-data-list-wrapper__loader\"\n        class=\"t-loader\"\n    />\n</ng-template>\n", styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"] }]
        }], propDecorators: { optionsQuery: [{
                type: ViewChildren,
                args: [forwardRef(() => TuiOption)]
            }], items: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], emptyContent: [{
                type: Input
            }], size: [{
                type: Input
            }], itemClick: [{
                type: Output
            }], itemContent: [{
                type: Input
            }] } });

class TuiDataListGroupWrapperComponent extends TuiDataListWrapperComponent {
    constructor() {
        super(...arguments);
        this.labels = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListGroupWrapperComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiDataListGroupWrapperComponent, isStandalone: true, selector: "tui-data-list-wrapper[labels]", inputs: { labels: "labels" }, providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)], usesInheritance: true, ngImport: i0, template: "<tui-data-list\n    *ngIf=\"items; else loading\"\n    [emptyContent]=\"emptyContent\"\n    [size]=\"size\"\n>\n    <tui-opt-group\n        *ngFor=\"let group of items; let index = index\"\n        [label]=\"labels[index]\"\n    >\n        <button\n            *ngFor=\"let item of group\"\n            #elementRef=\"elementRef\"\n            automation-id=\"tui-data-list-wrapper__option\"\n            tuiElement\n            tuiOption\n            type=\"button\"\n            [disabled]=\"disabledItemHandler(item)\"\n            [value]=\"item\"\n            (click)=\"itemClick.emit(item)\"\n        >\n            <ng-container *polymorpheusOutlet=\"itemContent as text; context: getContext(item, elementRef)\">\n                {{ text }}\n            </ng-container>\n        </button>\n    </tui-opt-group>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader class=\"t-loader\" />\n</ng-template>\n", styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "component", type: i1.TuiDataListComponent, selector: "tui-data-list", inputs: ["emptyContent", "size"] }, { kind: "component", type: i1.TuiOption, selector: "button[tuiOption], a[tuiOption], label[tuiOption]", inputs: ["disabled", "value"] }, { kind: "directive", type: i1.TuiOptGroup, selector: "tui-opt-group", inputs: ["label"] }, { kind: "directive", type: TuiElement, selector: "[tuiElement]", exportAs: ["elementRef"] }, { kind: "component", type: TuiLoader, selector: "tui-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListGroupWrapperComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-data-list-wrapper[labels]', imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader], changeDetection: ChangeDetectionStrategy.OnPush, providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)], template: "<tui-data-list\n    *ngIf=\"items; else loading\"\n    [emptyContent]=\"emptyContent\"\n    [size]=\"size\"\n>\n    <tui-opt-group\n        *ngFor=\"let group of items; let index = index\"\n        [label]=\"labels[index]\"\n    >\n        <button\n            *ngFor=\"let item of group\"\n            #elementRef=\"elementRef\"\n            automation-id=\"tui-data-list-wrapper__option\"\n            tuiElement\n            tuiOption\n            type=\"button\"\n            [disabled]=\"disabledItemHandler(item)\"\n            [value]=\"item\"\n            (click)=\"itemClick.emit(item)\"\n        >\n            <ng-container *polymorpheusOutlet=\"itemContent as text; context: getContext(item, elementRef)\">\n                {{ text }}\n            </ng-container>\n        </button>\n    </tui-opt-group>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader class=\"t-loader\" />\n</ng-template>\n", styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"] }]
        }], propDecorators: { labels: [{
                type: Input
            }] } });

const TuiDataListWrapper = [
    TuiDataListWrapperComponent,
    TuiDataListGroupWrapperComponent,
    TuiDataListDirective,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiDataListGroupWrapperComponent, TuiDataListWrapper, TuiDataListWrapperComponent };
//# sourceMappingURL=taiga-ui-kit-components-data-list-wrapper.mjs.map
