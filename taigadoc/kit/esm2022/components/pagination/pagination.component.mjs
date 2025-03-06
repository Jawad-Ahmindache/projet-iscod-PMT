import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChildren, } from '@angular/core';
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
import * as i0 from "@angular/core";
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
export { TuiPagination };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnRlbXBsYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUVyRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzNELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQU9yRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sa0JB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LElBQUksWUFDTixnQkFBZ0IsV0FDakIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLG1CQUdoRSx1QkFBdUIsQ0FBQyxNQUFNOzhCQUk5QixHQUFHO3NCQURuQixZQUFZO3VCQUFDLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7Z0JBU3BDLE1BQU07c0JBRFosS0FBSztnQkFJQyxTQUFTO3NCQURmLEtBQUs7Z0JBSUMsSUFBSTtzQkFEVixLQUFLO2dCQUlVLFFBQVE7c0JBRHZCLEtBQUs7Z0JBT0MsYUFBYTtzQkFEbkIsS0FBSztnQkFPQyxXQUFXO3NCQURqQixLQUFLO2dCQU9DLE9BQU87c0JBRGIsS0FBSztnQkFPQyxLQUFLO3NCQURYLEtBQUs7Z0JBSVUsV0FBVztzQkFEMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNQaXBlLCBOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge1F1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBpbmplY3QsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VNUFRZX1FVRVJZfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge1R1aUxldH0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL2xldCc7XG5pbXBvcnQge1R1aVJlcGVhdFRpbWVzfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RpcmVjdGl2ZXMvcmVwZWF0LXRpbWVzJztcbmltcG9ydCB0eXBlIHtUdWlDb250ZXh0fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3R5cGVzJztcbmltcG9ydCB7dHVpSW5qZWN0RWxlbWVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuaW1wb3J0IHt0dWlJc05hdGl2ZUZvY3VzZWRJbn0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9mb2N1cyc7XG5pbXBvcnQge3R1aUNsYW1wfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21hdGgnO1xuaW1wb3J0IHtUdWlCdXR0b259IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7VFVJX1NQSU5fSUNPTlN9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgVHVpSG9yaXpvbnRhbERpcmVjdGlvbixcbiAgICBUdWlTaXplTCxcbiAgICBUdWlTaXplUyxcbiAgICBUdWlTaXplWFMsXG59IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB7VFVJX1BBR0lOQVRJT05fVEVYVFN9IGZyb20gJ0B0YWlnYS11aS9raXQvdG9rZW5zJztcbmltcG9ydCB0eXBlIHtQb2x5bW9ycGhldXNDb250ZW50fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcbmltcG9ydCB7UG9seW1vcnBoZXVzT3V0bGV0fSBmcm9tICdAdGFpZ2EtdWkvcG9seW1vcnBoZXVzJztcblxuY29uc3QgRE9UU19MRU5HVEggPSAxO1xuY29uc3QgQUNUSVZFX0lURU1fTEVOR1RIID0gMTtcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3R1aS1wYWdpbmF0aW9uJyxcbiAgICBpbXBvcnRzOiBbQXN5bmNQaXBlLCBOZ0lmLCBQb2x5bW9ycGhldXNPdXRsZXQsIFR1aUJ1dHRvbiwgVHVpTGV0LCBUdWlSZXBlYXRUaW1lc10sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24udGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdGlvbi5zdHlsZS5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFR1aVBhZ2luYXRpb24ge1xuICAgIEBWaWV3Q2hpbGRyZW4oJ2VsZW1lbnQnLCB7cmVhZDogRWxlbWVudFJlZn0pXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPEhUTUxFbGVtZW50Pj4gPSBFTVBUWV9RVUVSWTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGV4dHMkID0gaW5qZWN0KFRVSV9QQUdJTkFUSU9OX1RFWFRTKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaWNvbnMgPSBpbmplY3QoVFVJX1NQSU5fSUNPTlMpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbGVuZ3RoID0gMTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGZvY3VzYWJsZSA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzaXplOiBUdWlTaXplTCB8IFR1aVNpemVTID0gJ2wnO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEFtb3VudCBvZiB2aXNpYmxlIHBhZ2VzIGFyb3VuZCBhY3RpdmUgcGFnZVxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFjdGl2ZVBhZGRpbmcgPSAxO1xuXG4gICAgLyoqXG4gICAgICogQW1vdW50IG9mIHZpc2libGUgcGFnZXMgYXQgdGhlIGVkZ2VzXG4gICAgICovXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2lkZVBhZGRpbmcgPSAxO1xuXG4gICAgLyoqXG4gICAgICogQ3VzdG9taXphdGlvbiBmb3IgcGFnZSBudW1iZXIgZGlzcGxheS5cbiAgICAgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb250ZW50OiBQb2x5bW9ycGhldXNDb250ZW50PFR1aUNvbnRleHQ8bnVtYmVyPj47XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmUgcGFnZSBpbmRleFxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGluZGV4ID0gMDtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZWFkb25seSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgcHVibGljIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhY3RpdmVFbGVtZW50SW5kZXggPSAwO1xuICAgICAgICBjb25zdCB7ZWxlbWVudHNMZW5ndGh9ID0gdGhpcztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4QnlFbGVtZW50SW5kZXgoaSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50SW5kZXgrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gdGhpcy5pbmRleCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMuZWxzLmZpbmQoKF8sIGluZGV4KSA9PiBpbmRleCA9PT0gYWN0aXZlRWxlbWVudEluZGV4KT8ubmF0aXZlRWxlbWVudCA/P1xuICAgICAgICAgICAgbnVsbFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR1aUlzTmF0aXZlRm9jdXNlZEluKHRoaXMuZWwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYXJyb3dJc0Rpc2FibGVkTGVmdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhcnJvd0lzRGlzYWJsZWRSaWdodCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZUluZGV4ID09PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBpdGVtcyBpbiBhIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGVsZW1lbnRzTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zRml0ID8gdGhpcy5sZW5ndGggOiB0aGlzLm1heEVsZW1lbnRzTGVuZ3RoO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYnV0dG9uU2l6ZSgpOiBUdWlTaXplWFMge1xuICAgICAgICByZXR1cm4gdGhpcy5zaXplID09PSAnbScgPyAneHMnIDogJ3MnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBlbGVtZW50SXNGb2N1c2FibGUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA9PT0gaW5kZXggJiYgIXRoaXMuZm9jdXNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaW5kZXggYnkgZWxlbWVudCBpbmRleFxuICAgICAqIEBwYXJhbSBlbGVtZW50SW5kZXhcbiAgICAgKiBAcmV0dXJucyBpbmRleCBvciBudWxsIChmb3IgJ+KApicpXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEl0ZW1JbmRleEJ5RWxlbWVudEluZGV4KGVsZW1lbnRJbmRleDogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGlmICh0aGlzLnNpemUgPT09ICdzJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50SW5kZXggPCB0aGlzLnNpZGVQYWRkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsZW1lbnRJbmRleCA9PT0gdGhpcy5zaWRlUGFkZGluZyAmJiB0aGlzLmhhc0NvbGxhcHNlZEl0ZW1zKHRoaXMuaW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldmVyc2VFbGVtZW50SW5kZXggPSB0aGlzLmxhc3RFbGVtZW50SW5kZXggLSBlbGVtZW50SW5kZXg7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmV2ZXJzZUVsZW1lbnRJbmRleCA9PT0gdGhpcy5zaWRlUGFkZGluZyAmJlxuICAgICAgICAgICAgdGhpcy5oYXNDb2xsYXBzZWRJdGVtcyh0aGlzLnJldmVyc2VJbmRleClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXZlcnNlRWxlbWVudEluZGV4IDwgdGhpcy5zaWRlUGFkZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFzdEluZGV4IC0gcmV2ZXJzZUVsZW1lbnRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVkSW5kZXggPSB0aGlzLmluZGV4IC0gdGhpcy5tYXhIYWxmTGVuZ3RoICsgZWxlbWVudEluZGV4O1xuXG4gICAgICAgIHJldHVybiB0dWlDbGFtcChcbiAgICAgICAgICAgIGNvbXB1dGVkSW5kZXgsXG4gICAgICAgICAgICBlbGVtZW50SW5kZXgsXG4gICAgICAgICAgICB0aGlzLmxhc3RJbmRleCAtIHJldmVyc2VFbGVtZW50SW5kZXgsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEVsZW1lbnRNb2RlKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBmYWxsYmFjayA9IHRoaXMuc2l6ZSA9PT0gJ3MnID8gJ3NlY29uZGFyeScgOiAnZmxhdCc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IGluZGV4ID8gJ3ByaW1hcnknIDogZmFsbGJhY2s7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRWxlbWVudENsaWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbmRleChpbmRleCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRWxlbWVudEtleURvd25BcnJvd0xlZnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxzLmZpcnN0Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5lbHMuZmluZChcbiAgICAgICAgICAgIChfLCBpbmRleCwgYXJyYXkpID0+IGFycmF5W2luZGV4ICsgMV0/Lm5hdGl2ZUVsZW1lbnQgPT09IGVsZW1lbnQsXG4gICAgICAgICk7XG5cbiAgICAgICAgcHJldmlvdXM/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FbGVtZW50S2V5RG93bkFycm93UmlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxzLmxhc3QubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMuZWxzLmZpbmQoXG4gICAgICAgICAgICAoXywgaW5kZXgsIGFycmF5KSA9PiBhcnJheVtpbmRleCAtIDFdPy5uYXRpdmVFbGVtZW50ID09PSBlbGVtZW50LFxuICAgICAgICApO1xuXG4gICAgICAgIG5leHQ/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25BcnJvd0NsaWNrKGRpcmVjdGlvbjogVHVpSG9yaXpvbnRhbERpcmVjdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLnRyeUNoYW5nZVRvKGRpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuZm9jdXNBY3RpdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmUgaW5kZXggZnJvbSB0aGUgZW5kXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgcmV2ZXJzZUluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RJbmRleCAtIHRoaXMuaW5kZXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWF4IG51bWJlciBvZiBlbGVtZW50cyBpbiBoYWxmIChub3QgY291bnRpbmcgdGhlIG1pZGRsZSBvbmUpLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IG1heEhhbGZMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lkZVBhZGRpbmcgKyBET1RTX0xFTkdUSCArIHRoaXMuYWN0aXZlUGFkZGluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyB0aGVyZSAnLi4uJyBhbnl3aGVyZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IGl0ZW1zRml0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPD0gdGhpcy5tYXhFbGVtZW50c0xlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXggbnVtYmVyIG9mIGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgbWF4RWxlbWVudHNMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4SGFsZkxlbmd0aCAqIDIgKyBBQ1RJVkVfSVRFTV9MRU5HVEg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgbGFzdEluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgbGFzdEVsZW1lbnRJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50c0xlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXJlIHRoZXJlIGNvbGxhcHNlZCBpdGVtcyBhdCB0aGF0IGluZGV4XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQHJldHVybnMgdGhlcmUgYXJlIGNvbGxhcHNlZCBpdGVtc1xuICAgICAqL1xuICAgIHByaXZhdGUgaGFzQ29sbGFwc2VkSXRlbXMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXRlbXNGaXQgJiYgaW5kZXggPiB0aGlzLm1heEhhbGZMZW5ndGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cnlDaGFuZ2VUbyhkaXJlY3Rpb246IFR1aUhvcml6b250YWxEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbmRleChcbiAgICAgICAgICAgIHR1aUNsYW1wKHRoaXMuaW5kZXggKyAoZGlyZWN0aW9uID09PSAncmlnaHQnID8gMSA6IC0xKSwgMCwgdGhpcy5sYXN0SW5kZXgpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNBY3RpdmUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHtuYXRpdmVGb2N1c2FibGVFbGVtZW50fSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5pbmRleENoYW5nZS5lbWl0KGluZGV4KTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidC1jb250ZW50XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNpemUgIT09ICdzJzsgZWxzZSBzbWFsbEJ1dHRvbnNcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRleHRzJCB8IGFzeW5jIGFzIHRleHRzXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cImZsYXRcIlxuICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICAgIHR1aUljb25CdXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiYXJyb3dJc0Rpc2FibGVkTGVmdFwiXG4gICAgICAgICAgICAgICAgW2ljb25TdGFydF09XCJpY29ucy5kZWNyZW1lbnRcIlxuICAgICAgICAgICAgICAgIFtzaXplXT1cImJ1dHRvblNpemVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkFycm93Q2xpY2soJ2xlZnQnKVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZG93bi5zaWxlbnQucHJldmVudCk9XCIoMClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IHRleHRzWzBdIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKnR1aVJlcGVhdFRpbWVzPVwibGV0IGVsZW1lbnRJbmRleCBvZiBlbGVtZW50c0xlbmd0aFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKnR1aUxldD1cImdldEl0ZW1JbmRleEJ5RWxlbWVudEluZGV4KGVsZW1lbnRJbmRleCkgYXMgaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpbmRleCAhPT0gbnVsbDsgZWxzZSBkb3RzVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgI2VsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktcGFnaW5hdGlvbl9fZWxlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0dWlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXBwZWFyYW5jZV09XCJnZXRFbGVtZW50TW9kZShpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzaXplXT1cImJ1dHRvblNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3RhYkluZGV4XT1cImVsZW1lbnRJc0ZvY3VzYWJsZShpbmRleCkgPyAwIDogLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRWxlbWVudENsaWNrKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bi5hcnJvd0xlZnQucHJldmVudCk9XCJvbkVsZW1lbnRLZXlEb3duQXJyb3dMZWZ0KGVsZW1lbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXlkb3duLmFycm93UmlnaHQucHJldmVudCk9XCJvbkVsZW1lbnRLZXlEb3duQXJyb3dSaWdodChlbGVtZW50KVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKnBvbHltb3JwaGV1c091dGxldD1cImNvbnRlbnQgfHwgaW5kZXggKyAxIGFzIHRleHQ7IGNvbnRleHQ6IHskaW1wbGljaXQ6IGluZGV4fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJmbGF0XCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgICB0dWlJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImFycm93SXNEaXNhYmxlZFJpZ2h0XCJcbiAgICAgICAgICAgICAgICBbaWNvblN0YXJ0XT1cImljb25zLmluY3JlbWVudFwiXG4gICAgICAgICAgICAgICAgW3NpemVdPVwiYnV0dG9uU2l6ZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQXJyb3dDbGljaygncmlnaHQnKVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZG93bi5zaWxlbnQucHJldmVudCk9XCIoMClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IHRleHRzWzFdIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNzbWFsbEJ1dHRvbnM+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICp0dWlSZXBlYXRUaW1lcz1cImxldCBpbmRleEl0ZW0gb2YgbGVuZ3RoXCJcbiAgICAgICAgICAgICNlbGVtZW50XG4gICAgICAgICAgICB0dWlCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJ0LWJ1dHRvbiB0LWJ1dHRvbl9zbWFsbFwiXG4gICAgICAgICAgICBbYXBwZWFyYW5jZV09XCJnZXRFbGVtZW50TW9kZShpbmRleEl0ZW0pXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICBbdGFiSW5kZXhdPVwiZWxlbWVudElzRm9jdXNhYmxlKGluZGV4SXRlbSkgPyAwIDogLTFcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uRWxlbWVudENsaWNrKGluZGV4SXRlbSlcIlxuICAgICAgICAgICAgKGtleWRvd24uYXJyb3dMZWZ0LnByZXZlbnQpPVwib25FbGVtZW50S2V5RG93bkFycm93TGVmdChlbGVtZW50KVwiXG4gICAgICAgICAgICAoa2V5ZG93bi5hcnJvd1JpZ2h0LnByZXZlbnQpPVwib25FbGVtZW50S2V5RG93bkFycm93UmlnaHQoZWxlbWVudClcIlxuICAgICAgICA+XG4gICAgICAgICAgICB7eyBpbmRleEl0ZW0gKyAxIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNkb3RzVGVtcGxhdGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGF1dG9tYXRpb24taWQ9XCJ0dWktcGFnaW5hdGlvbl9fZWxlbWVudFwiXG4gICAgICAgICAgICBjbGFzcz1cInQtZG90c1wiXG4gICAgICAgICAgICBbY2xhc3MudC1kb3RzX3NtYWxsXT1cInNpemUgPT09ICdtJ1wiXG4gICAgICAgID48L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG4iXX0=