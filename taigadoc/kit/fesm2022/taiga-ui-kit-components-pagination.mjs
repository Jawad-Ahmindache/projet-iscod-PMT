import { AsyncPipe, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, ElementRef, Component, ChangeDetectionStrategy, ViewChildren, Input, Output } from '@angular/core';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { TuiLet } from '@taiga-ui/cdk/directives/let';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiIsNativeFocusedIn } from '@taiga-ui/cdk/utils/focus';
import { tuiClamp } from '@taiga-ui/cdk/utils/math';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TUI_SPIN_ICONS } from '@taiga-ui/core/tokens';
import { TUI_PAGINATION_TEXTS } from '@taiga-ui/kit/tokens';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';

const DOTS_LENGTH = 1;
const ACTIVE_ITEM_LENGTH = 1;
class TuiPagination {
    constructor() {
        this.els = EMPTY_QUERY;
        this.el = tuiInjectElement();
        this.texts$ = inject(TUI_PAGINATION_TEXTS);
        this.icons = inject(TUI_SPIN_ICONS);
        this.length = 1;
        this.focusable = true;
        this.size = 'l';
        this.disabled = false;
        /**
         * Amount of visible pages around active page
         */
        this.activePadding = 1;
        /**
         * Amount of visible pages at the edges
         */
        this.sidePadding = 1;
        /**
         * Active page index
         */
        this.index = 0;
        this.indexChange = new EventEmitter();
    }
    get nativeFocusableElement() {
        if (this.disabled) {
            return null;
        }
        let activeElementIndex = 0;
        const { elementsLength } = this;
        for (let i = 0; i < elementsLength; i++) {
            const itemIndex = this.getItemIndexByElementIndex(i);
            if (itemIndex) {
                activeElementIndex++;
            }
            if (itemIndex === this.index) {
                break;
            }
        }
        return (this.els.find((_, index) => index === activeElementIndex)?.nativeElement ??
            null);
    }
    get focused() {
        return tuiIsNativeFocusedIn(this.el);
    }
    get arrowIsDisabledLeft() {
        return this.index === 0;
    }
    get arrowIsDisabledRight() {
        return this.reverseIndex === 0;
    }
    /**
     * Number of items in a container.
     */
    get elementsLength() {
        return this.itemsFit ? this.length : this.maxElementsLength;
    }
    get buttonSize() {
        return this.size === 'm' ? 'xs' : 's';
    }
    elementIsFocusable(index) {
        return this.index === index && !this.focused;
    }
    /**
     * Get index by element index
     * @param elementIndex
     * @returns index or null (for '…')
     */
    getItemIndexByElementIndex(elementIndex) {
        if (this.size === 's') {
            return elementIndex;
        }
        if (elementIndex < this.sidePadding) {
            return elementIndex;
        }
        if (elementIndex === this.sidePadding && this.hasCollapsedItems(this.index)) {
            return null;
        }
        const reverseElementIndex = this.lastElementIndex - elementIndex;
        if (reverseElementIndex === this.sidePadding &&
            this.hasCollapsedItems(this.reverseIndex)) {
            return null;
        }
        if (reverseElementIndex < this.sidePadding) {
            return this.lastIndex - reverseElementIndex;
        }
        const computedIndex = this.index - this.maxHalfLength + elementIndex;
        return tuiClamp(computedIndex, elementIndex, this.lastIndex - reverseElementIndex);
    }
    getElementMode(index) {
        const fallback = this.size === 's' ? 'secondary' : 'flat';
        return this.index === index ? 'primary' : fallback;
    }
    onElementClick(index) {
        this.updateIndex(index);
    }
    onElementKeyDownArrowLeft(element) {
        if (element === this.els.first.nativeElement) {
            return;
        }
        const previous = this.els.find((_, index, array) => array[index + 1]?.nativeElement === element);
        previous?.nativeElement.focus();
    }
    onElementKeyDownArrowRight(element) {
        if (element === this.els.last.nativeElement) {
            return;
        }
        const next = this.els.find((_, index, array) => array[index - 1]?.nativeElement === element);
        next?.nativeElement.focus();
    }
    onArrowClick(direction) {
        this.tryChangeTo(direction);
        this.focusActive();
    }
    /**
     * Active index from the end
     */
    get reverseIndex() {
        return this.lastIndex - this.index;
    }
    /**
     * Max number of elements in half (not counting the middle one).
     */
    get maxHalfLength() {
        return this.sidePadding + DOTS_LENGTH + this.activePadding;
    }
    /**
     * Is there '...' anywhere
     */
    get itemsFit() {
        return this.length <= this.maxElementsLength;
    }
    /**
     * Max number of elements
     */
    get maxElementsLength() {
        return this.maxHalfLength * 2 + ACTIVE_ITEM_LENGTH;
    }
    get lastIndex() {
        return this.length - 1;
    }
    get lastElementIndex() {
        return this.elementsLength - 1;
    }
    /**
     * Are there collapsed items at that index
     * @param index
     * @returns there are collapsed items
     */
    hasCollapsedItems(index) {
        return !this.itemsFit && index > this.maxHalfLength;
    }
    tryChangeTo(direction) {
        this.updateIndex(tuiClamp(this.index + (direction === 'right' ? 1 : -1), 0, this.lastIndex));
    }
    focusActive() {
        const { nativeFocusableElement } = this;
        if (nativeFocusableElement) {
            nativeFocusableElement.focus();
        }
    }
    updateIndex(index) {
        if (this.index === index) {
            return;
        }
        this.index = index;
        this.indexChange.emit(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPagination, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPagination, isStandalone: true, selector: "tui-pagination", inputs: { length: "length", focusable: "focusable", size: "size", disabled: "disabled", activePadding: "activePadding", sidePadding: "sidePadding", content: "content", index: "index" }, outputs: { indexChange: "indexChange" }, viewQueries: [{ propertyName: "els", predicate: ["element"], descendants: true, read: ElementRef }], ngImport: i0, template: "<div class=\"t-content\">\n    <ng-container *ngIf=\"size !== 's'; else smallButtons\">\n        <ng-container *ngIf=\"texts$ | async as texts\">\n            <button\n                appearance=\"flat\"\n                tabIndex=\"-1\"\n                tuiIconButton\n                type=\"button\"\n                class=\"t-button\"\n                [disabled]=\"arrowIsDisabledLeft\"\n                [iconStart]=\"icons.decrement\"\n                [size]=\"buttonSize\"\n                (click)=\"onArrowClick('left')\"\n                (mousedown.silent.prevent)=\"(0)\"\n            >\n                {{ texts[0] }}\n            </button>\n            <ng-container *tuiRepeatTimes=\"let elementIndex of elementsLength\">\n                <ng-container *tuiLet=\"getItemIndexByElementIndex(elementIndex) as index\">\n                    <button\n                        *ngIf=\"index !== null; else dotsTemplate\"\n                        #element\n                        automation-id=\"tui-pagination__element\"\n                        tuiButton\n                        type=\"button\"\n                        class=\"t-button\"\n                        [appearance]=\"getElementMode(index)\"\n                        [disabled]=\"disabled\"\n                        [size]=\"buttonSize\"\n                        [tabIndex]=\"elementIsFocusable(index) ? 0 : -1\"\n                        (click)=\"onElementClick(index)\"\n                        (keydown.arrowLeft.prevent)=\"onElementKeyDownArrowLeft(element)\"\n                        (keydown.arrowRight.prevent)=\"onElementKeyDownArrowRight(element)\"\n                    >\n                        <ng-container *polymorpheusOutlet=\"content || index + 1 as text; context: {$implicit: index}\">\n                            {{ text }}\n                        </ng-container>\n                    </button>\n                </ng-container>\n            </ng-container>\n            <button\n                appearance=\"flat\"\n                tabIndex=\"-1\"\n                tuiIconButton\n                type=\"button\"\n                class=\"t-button\"\n                [disabled]=\"arrowIsDisabledRight\"\n                [iconStart]=\"icons.increment\"\n                [size]=\"buttonSize\"\n                (click)=\"onArrowClick('right')\"\n                (mousedown.silent.prevent)=\"(0)\"\n            >\n                {{ texts[1] }}\n            </button>\n        </ng-container>\n    </ng-container>\n    <ng-template #smallButtons>\n        <button\n            *tuiRepeatTimes=\"let indexItem of length\"\n            #element\n            tuiButton\n            type=\"button\"\n            class=\"t-button t-button_small\"\n            [appearance]=\"getElementMode(indexItem)\"\n            [disabled]=\"disabled\"\n            [tabIndex]=\"elementIsFocusable(indexItem) ? 0 : -1\"\n            (click)=\"onElementClick(indexItem)\"\n            (keydown.arrowLeft.prevent)=\"onElementKeyDownArrowLeft(element)\"\n            (keydown.arrowRight.prevent)=\"onElementKeyDownArrowRight(element)\"\n        >\n            {{ indexItem + 1 }}\n        </button>\n    </ng-template>\n    <ng-template #dotsTemplate>\n        <div\n            automation-id=\"tui-pagination__element\"\n            class=\"t-dots\"\n            [class.t-dots_small]=\"size === 'm'\"\n        ></div>\n    </ng-template>\n</div>\n", styles: [":host{display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);text-align:center}.t-content{display:flex;justify-content:center}.t-button{inline-size:var(--tui-height-s);margin:0 .125rem;flex-shrink:0}.t-button:first-child{margin-inline-start:0}.t-button:last-child{margin-inline-end:0}.t-button[data-size=xs]{inline-size:var(--tui-height-xs)}.t-button.t-button.t-button_small{inline-size:.5rem;block-size:.5rem;font-size:0;padding:0;margin:0}.t-button.t-button.t-button_small:not(:first-child){margin-left:.5rem}.t-dots{inline-size:var(--tui-height-s);block-size:var(--tui-height-s);line-height:var(--tui-height-s);margin:0 .125rem;flex-shrink:0;color:var(--tui-text-action);text-align:center;cursor:default}.t-dots_small{inline-size:var(--tui-height-xs);block-size:var(--tui-height-xs);line-height:var(--tui-height-xs)}.t-dots:before{content:\"\\2026\"}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "directive", type: TuiLet, selector: "[tuiLet]", inputs: ["tuiLet"] }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPagination, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-pagination', imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiButton, TuiLet, TuiRepeatTimes], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"t-content\">\n    <ng-container *ngIf=\"size !== 's'; else smallButtons\">\n        <ng-container *ngIf=\"texts$ | async as texts\">\n            <button\n                appearance=\"flat\"\n                tabIndex=\"-1\"\n                tuiIconButton\n                type=\"button\"\n                class=\"t-button\"\n                [disabled]=\"arrowIsDisabledLeft\"\n                [iconStart]=\"icons.decrement\"\n                [size]=\"buttonSize\"\n                (click)=\"onArrowClick('left')\"\n                (mousedown.silent.prevent)=\"(0)\"\n            >\n                {{ texts[0] }}\n            </button>\n            <ng-container *tuiRepeatTimes=\"let elementIndex of elementsLength\">\n                <ng-container *tuiLet=\"getItemIndexByElementIndex(elementIndex) as index\">\n                    <button\n                        *ngIf=\"index !== null; else dotsTemplate\"\n                        #element\n                        automation-id=\"tui-pagination__element\"\n                        tuiButton\n                        type=\"button\"\n                        class=\"t-button\"\n                        [appearance]=\"getElementMode(index)\"\n                        [disabled]=\"disabled\"\n                        [size]=\"buttonSize\"\n                        [tabIndex]=\"elementIsFocusable(index) ? 0 : -1\"\n                        (click)=\"onElementClick(index)\"\n                        (keydown.arrowLeft.prevent)=\"onElementKeyDownArrowLeft(element)\"\n                        (keydown.arrowRight.prevent)=\"onElementKeyDownArrowRight(element)\"\n                    >\n                        <ng-container *polymorpheusOutlet=\"content || index + 1 as text; context: {$implicit: index}\">\n                            {{ text }}\n                        </ng-container>\n                    </button>\n                </ng-container>\n            </ng-container>\n            <button\n                appearance=\"flat\"\n                tabIndex=\"-1\"\n                tuiIconButton\n                type=\"button\"\n                class=\"t-button\"\n                [disabled]=\"arrowIsDisabledRight\"\n                [iconStart]=\"icons.increment\"\n                [size]=\"buttonSize\"\n                (click)=\"onArrowClick('right')\"\n                (mousedown.silent.prevent)=\"(0)\"\n            >\n                {{ texts[1] }}\n            </button>\n        </ng-container>\n    </ng-container>\n    <ng-template #smallButtons>\n        <button\n            *tuiRepeatTimes=\"let indexItem of length\"\n            #element\n            tuiButton\n            type=\"button\"\n            class=\"t-button t-button_small\"\n            [appearance]=\"getElementMode(indexItem)\"\n            [disabled]=\"disabled\"\n            [tabIndex]=\"elementIsFocusable(indexItem) ? 0 : -1\"\n            (click)=\"onElementClick(indexItem)\"\n            (keydown.arrowLeft.prevent)=\"onElementKeyDownArrowLeft(element)\"\n            (keydown.arrowRight.prevent)=\"onElementKeyDownArrowRight(element)\"\n        >\n            {{ indexItem + 1 }}\n        </button>\n    </ng-template>\n    <ng-template #dotsTemplate>\n        <div\n            automation-id=\"tui-pagination__element\"\n            class=\"t-dots\"\n            [class.t-dots_small]=\"size === 'm'\"\n        ></div>\n    </ng-template>\n</div>\n", styles: [":host{display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);text-align:center}.t-content{display:flex;justify-content:center}.t-button{inline-size:var(--tui-height-s);margin:0 .125rem;flex-shrink:0}.t-button:first-child{margin-inline-start:0}.t-button:last-child{margin-inline-end:0}.t-button[data-size=xs]{inline-size:var(--tui-height-xs)}.t-button.t-button.t-button_small{inline-size:.5rem;block-size:.5rem;font-size:0;padding:0;margin:0}.t-button.t-button.t-button_small:not(:first-child){margin-left:.5rem}.t-dots{inline-size:var(--tui-height-s);block-size:var(--tui-height-s);line-height:var(--tui-height-s);margin:0 .125rem;flex-shrink:0;color:var(--tui-text-action);text-align:center;cursor:default}.t-dots_small{inline-size:var(--tui-height-xs);block-size:var(--tui-height-xs);line-height:var(--tui-height-xs)}.t-dots:before{content:\"\\2026\"}\n"] }]
        }], propDecorators: { els: [{
                type: ViewChildren,
                args: ['element', { read: ElementRef }]
            }], length: [{
                type: Input
            }], focusable: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], activePadding: [{
                type: Input
            }], sidePadding: [{
                type: Input
            }], content: [{
                type: Input
            }], index: [{
                type: Input
            }], indexChange: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiPagination };
//# sourceMappingURL=taiga-ui-kit-components-pagination.mjs.map
