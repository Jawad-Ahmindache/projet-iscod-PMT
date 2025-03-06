import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { AsyncPipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from '@angular/core';
import { Directive, Input, inject, Injectable, TemplateRef, Component, ChangeDetectionStrategy, ContentChildren, ContentChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MutationObserverService, WA_MUTATION_OBSERVER_INIT } from '@ng-web-apis/mutation-observer';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { Subject, Observable, merge, debounceTime, map, distinctUntilChanged, share } from 'rxjs';
import { tuiZonefreeScheduler, tuiZoneOptimized } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiClamp } from '@taiga-ui/cdk/utils/math';

class TuiItemsWithMoreDirective {
    constructor() {
        this.itemsLimit = Infinity;
        this.required = -1;
        this.side = 'end';
        // TODO: refactor to signal inputs after Angular update
        this.change$ = new Subject();
    }
    ngOnChanges() {
        this.change$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiItemsWithMoreDirective, isStandalone: true, inputs: { itemsLimit: "itemsLimit", required: "required", side: "side" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], propDecorators: { itemsLimit: [{
                type: Input
            }], required: [{
                type: Input
            }], side: [{
                type: Input
            }] } });

class TuiItemsWithMoreService extends Observable {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.el = tuiInjectElement();
        this.directive = inject(TuiItemsWithMoreDirective);
        this.stream$ = merge(this.directive.change$, inject(MutationObserverService, { self: true }), inject(ResizeObserverService, { self: true })).pipe(debounceTime(0, tuiZonefreeScheduler()), map(() => this.getOverflowIndex()), distinctUntilChanged(), tuiZoneOptimized(), share());
    }
    getOverflowIndex() {
        const { side, itemsLimit } = this.directive;
        const { clientWidth, children } = this.el;
        const items = Array.from(children, ({ clientWidth }) => clientWidth);
        const index = side === 'start' ? 0 : items.length - 1;
        const more = children[index]?.tagName === 'SPAN' ? (items[index] ?? 0) : 0;
        const total = items.reduce((sum, width) => sum + width, 0) - more;
        if (total <= clientWidth && itemsLimit >= items.length) {
            return side === 'end' ? itemsLimit : 0;
        }
        return side === 'start'
            ? this.getIndexStart(items, total, more)
            : this.getIndexEnd(items, total, more);
    }
    getIndexStart(items, total, more) {
        const { required, itemsLimit } = this.directive;
        const { clientWidth } = this.el;
        const min = Number.isFinite(itemsLimit) ? items.length - itemsLimit - 1 : 0;
        const last = items.length - 1;
        const mandatory = required === -1 ? last : required;
        for (let i = 1; i < last; i++) {
            if (i === mandatory + 1) {
                continue;
            }
            total -= items[i] ?? 0;
            if (total + more <= clientWidth) {
                return tuiClamp(i, mandatory < min ? min + 1 : min, items.length);
            }
        }
        return items.length;
    }
    getIndexEnd(items, total, more) {
        const { required, itemsLimit } = this.directive;
        const { clientWidth } = this.el;
        const max = itemsLimit > required ? itemsLimit - 1 : itemsLimit - 2;
        const last = items.length - 1;
        const mandatory = required === -1 ? 0 : required;
        for (let i = last - 1; i > 0; i--) {
            if (i === mandatory) {
                continue;
            }
            total -= items[i] ?? 0;
            if (total + more <= clientWidth) {
                return tuiClamp(i - 1, -1, max);
            }
        }
        return -1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class TuiMore {
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMore, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiMore, isStandalone: true, selector: "[tuiMore]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMore, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiMore]',
                }]
        }] });

class TuiItemsWithMoreComponent {
    constructor() {
        this.items = EMPTY_QUERY;
        this.directive = inject(TuiItemsWithMoreDirective);
        this.lastIndex = toSignal(inject(TuiItemsWithMoreService), {
            initialValue: 0,
        });
    }
    get isMoreHidden() {
        const { side } = this.directive;
        return ((this.lastIndex() >= this.items.length - 1 && side === 'end') ||
            (!this.lastIndex() && side === 'start'));
    }
    isHidden(index) {
        const { side, required } = this.directive;
        return ((index > this.lastIndex() && index !== required && side === 'end') ||
            (index < this.lastIndex() && index !== required && side === 'start'));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiItemsWithMoreComponent, isStandalone: true, selector: "tui-items-with-more", providers: [
            MutationObserverService,
            ResizeObserverService,
            TuiItemsWithMoreService,
            {
                provide: WA_MUTATION_OBSERVER_INIT,
                useValue: {
                    childList: true,
                    characterData: true,
                    subtree: true,
                },
            },
        ], queries: [{ propertyName: "more", first: true, predicate: TuiMore, descendants: true, read: TemplateRef }, { propertyName: "items", predicate: TuiItem, descendants: true, read: TemplateRef }], hostDirectives: [{ directive: TuiItemsWithMoreDirective, inputs: ["itemsLimit", "itemsLimit", "required", "required", "side", "side"] }], ngImport: i0, template: "<ng-container *ngIf=\"items.changes | async\" />\n<ng-container\n    *ngIf=\"directive.side === 'start'\"\n    [ngTemplateOutlet]=\"template\"\n/>\n<div\n    *ngFor=\"let item of items; let index = index\"\n    class=\"t-item\"\n    [class.t-item_hidden]=\"isHidden(index)\"\n>\n    <ng-container *ngTemplateOutlet=\"item\" />\n</div>\n<ng-container\n    *ngIf=\"directive.side === 'end'\"\n    [ngTemplateOutlet]=\"template\"\n/>\n<ng-template #template>\n    <span\n        *ngIf=\"!isMoreHidden\"\n        class=\"t-item\"\n    >\n        <ng-container\n            [ngTemplateOutlet]=\"more || null\"\n            [ngTemplateOutletContext]=\"{$implicit: lastIndex()}\"\n        />\n    </span>\n</ng-template>\n", styles: [":host{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap}.t-item{flex:0 0 auto}.t-item_hidden{position:absolute;visibility:hidden}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-items-with-more', imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        MutationObserverService,
                        ResizeObserverService,
                        TuiItemsWithMoreService,
                        {
                            provide: WA_MUTATION_OBSERVER_INIT,
                            useValue: {
                                childList: true,
                                characterData: true,
                                subtree: true,
                            },
                        },
                    ], hostDirectives: [
                        {
                            directive: TuiItemsWithMoreDirective,
                            inputs: ['itemsLimit', 'required', 'side'],
                        },
                    ], template: "<ng-container *ngIf=\"items.changes | async\" />\n<ng-container\n    *ngIf=\"directive.side === 'start'\"\n    [ngTemplateOutlet]=\"template\"\n/>\n<div\n    *ngFor=\"let item of items; let index = index\"\n    class=\"t-item\"\n    [class.t-item_hidden]=\"isHidden(index)\"\n>\n    <ng-container *ngTemplateOutlet=\"item\" />\n</div>\n<ng-container\n    *ngIf=\"directive.side === 'end'\"\n    [ngTemplateOutlet]=\"template\"\n/>\n<ng-template #template>\n    <span\n        *ngIf=\"!isMoreHidden\"\n        class=\"t-item\"\n    >\n        <ng-container\n            [ngTemplateOutlet]=\"more || null\"\n            [ngTemplateOutletContext]=\"{$implicit: lastIndex()}\"\n        />\n    </span>\n</ng-template>\n", styles: [":host{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap}.t-item{flex:0 0 auto}.t-item_hidden{position:absolute;visibility:hidden}\n"] }]
        }], propDecorators: { items: [{
                type: ContentChildren,
                args: [TuiItem, { read: TemplateRef, descendants: true }]
            }], more: [{
                type: ContentChild,
                args: [TuiMore, { read: TemplateRef }]
            }] } });

const TuiItemsWithMore = [
    TuiItemsWithMoreComponent,
    TuiItemsWithMoreDirective,
    TuiMore,
    TuiItem,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiItemsWithMore, TuiItemsWithMoreComponent, TuiItemsWithMoreDirective, TuiItemsWithMoreService, TuiMore };
//# sourceMappingURL=taiga-ui-kit-components-items-with-more.mjs.map
