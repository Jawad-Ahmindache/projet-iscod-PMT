import { AsyncPipe, NgIf, PercentPipe } from '@angular/common';
import * as i0 from '@angular/core';
import { Directive, inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ChangeDetectorRef, ViewEncapsulation, Injectable } from '@angular/core';
import { tuiClamp, tuiRound } from '@taiga-ui/cdk/utils/math';
import { tuiButtonOptionsProvider, TuiButton } from '@taiga-ui/core/components/button';
import { TUI_PREVIEW_ICONS, TUI_PAGINATION_TEXTS, TUI_PREVIEW_ZOOM_TEXTS, TUI_PREVIEW_TEXTS } from '@taiga-ui/kit/tokens';
import { WaMutationObserver } from '@ng-web-apis/mutation-observer';
import { WaResizeObserver } from '@ng-web-apis/resize-observer';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { TuiPan } from '@taiga-ui/cdk/directives/pan';
import { TuiZoom } from '@taiga-ui/cdk/directives/zoom';
import { tuiDragAndDropFrom, tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiSlideInTop, tuiFadeIn } from '@taiga-ui/core/animations';
import * as i2 from '@taiga-ui/core/directives/hint';
import { TuiHint } from '@taiga-ui/core/directives/hint';
import { switchMap, merge, of, timer, map, startWith, BehaviorSubject, combineLatest } from 'rxjs';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from '@taiga-ui/kit/components/slider';
import { TuiSlider } from '@taiga-ui/kit/components/slider';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { injectContext, PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { TuiPopoverDirective } from '@taiga-ui/cdk/directives/popover';
import { TuiPopoverService, tuiAsPopover } from '@taiga-ui/cdk/services';
import { TUI_DIALOGS } from '@taiga-ui/core/components/dialog';

class TuiPreviewAction {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewAction, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewAction, isStandalone: true, selector: "[tuiPreviewAction]", host: { properties: { "style.border-radius.rem": "100" } }, providers: [
            tuiButtonOptionsProvider({
                appearance: 'preview-action',
                size: 's',
            }),
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewAction, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiPreviewAction]',
                    providers: [
                        tuiButtonOptionsProvider({
                            appearance: 'preview-action',
                            size: 's',
                        }),
                    ],
                    host: {
                        '[style.border-radius.rem]': '100',
                    },
                }]
        }] });

class TuiPreviewPagination {
    constructor() {
        this.icons = inject(TUI_PREVIEW_ICONS);
        this.texts$ = inject(TUI_PAGINATION_TEXTS);
        this.length = 1;
        this.index = 0;
        this.indexChange = new EventEmitter();
    }
    onArrowClick(step) {
        this.updateIndex(tuiClamp(this.index + step, 0, this.length - 1));
    }
    get leftButtonDisabled() {
        return this.index === 0;
    }
    get rightButtonDisabled() {
        return this.index === this.length - 1;
    }
    updateIndex(index) {
        if (this.index === index) {
            return;
        }
        this.index = index;
        this.indexChange.emit(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewPagination, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewPagination, isStandalone: true, selector: "tui-preview-pagination", inputs: { length: "length", index: "index" }, outputs: { indexChange: "indexChange" }, host: { listeners: { "document:keydown.arrowRight.prevent": "onArrowClick(1)", "document:keydown.arrowLeft.prevent": "onArrowClick(-1)" } }, ngImport: i0, template: "<ng-container *ngIf=\"texts$ | async as texts\">\n    <button\n        tuiIconButton\n        tuiPreviewAction\n        type=\"button\"\n        class=\"t-arrow_left\"\n        [disabled]=\"leftButtonDisabled\"\n        [iconStart]=\"icons.prev\"\n        (click)=\"onArrowClick(-1)\"\n    >\n        {{ texts[0] }}\n    </button>\n    {{ index + 1 }}/{{ length }}\n    <button\n        tuiIconButton\n        tuiPreviewAction\n        type=\"button\"\n        class=\"t-arrow_right\"\n        [disabled]=\"rightButtonDisabled\"\n        [iconStart]=\"icons.next\"\n        (click)=\"onArrowClick(1)\"\n    >\n        {{ texts[1] }}\n    </button>\n</ng-container>\n", styles: [":host{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-font-text-s);justify-content:space-between;align-items:center;inline-size:6.25rem}.t-arrow_left{border-start-end-radius:0;border-end-end-radius:0}.t-arrow_right{border-start-start-radius:0;border-end-start-radius:0}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "directive", type: TuiPreviewAction, selector: "[tuiPreviewAction]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewPagination, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-preview-pagination', imports: [AsyncPipe, NgIf, TuiButton, TuiPreviewAction], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '(document:keydown.arrowRight.prevent)': 'onArrowClick(1)',
                        '(document:keydown.arrowLeft.prevent)': 'onArrowClick(-1)',
                    }, template: "<ng-container *ngIf=\"texts$ | async as texts\">\n    <button\n        tuiIconButton\n        tuiPreviewAction\n        type=\"button\"\n        class=\"t-arrow_left\"\n        [disabled]=\"leftButtonDisabled\"\n        [iconStart]=\"icons.prev\"\n        (click)=\"onArrowClick(-1)\"\n    >\n        {{ texts[0] }}\n    </button>\n    {{ index + 1 }}/{{ length }}\n    <button\n        tuiIconButton\n        tuiPreviewAction\n        type=\"button\"\n        class=\"t-arrow_right\"\n        [disabled]=\"rightButtonDisabled\"\n        [iconStart]=\"icons.next\"\n        (click)=\"onArrowClick(1)\"\n    >\n        {{ texts[1] }}\n    </button>\n</ng-container>\n", styles: [":host{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-font-text-s);justify-content:space-between;align-items:center;inline-size:6.25rem}.t-arrow_left{border-start-end-radius:0;border-end-end-radius:0}.t-arrow_right{border-start-start-radius:0;border-end-start-radius:0}\n"] }]
        }], propDecorators: { length: [{
                type: Input
            }], index: [{
                type: Input
            }], indexChange: [{
                type: Output
            }] } });

const STEP = 0.5;
class TuiPreviewZoom {
    constructor() {
        this.icons = inject(TUI_PREVIEW_ICONS);
        this.zoomTexts$ = inject(TUI_PREVIEW_ZOOM_TEXTS);
        this.min = 0.5;
        this.max = 2;
        this.value = 1;
        this.valueChange = new EventEmitter();
        this.reset = new EventEmitter();
        this.hintShow$ = this.valueChange.pipe(switchMap(() => merge(of(true), timer(1000).pipe(map(TUI_FALSE_HANDLER)))), startWith(false));
    }
    get leftButtonDisabled() {
        return this.value === this.min;
    }
    get rightButtonDisabled() {
        return this.value === this.max;
    }
    get collapseVisible() {
        return this.value > this.min;
    }
    onModelChange(value) {
        const clamped = tuiClamp(value, this.min, this.max);
        if (clamped === this.value) {
            return;
        }
        this.value = clamped;
        this.valueChange.emit(clamped);
    }
    onReset() {
        this.reset.emit();
    }
    onMinus() {
        this.onModelChange(this.value - STEP);
    }
    onPlus() {
        this.onModelChange(this.value < 1 ? 1 : this.value + STEP);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewZoom, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewZoom, isStandalone: true, selector: "tui-preview-zoom", inputs: { min: "min", max: "max", value: "value" }, outputs: { valueChange: "valueChange", reset: "reset" }, ngImport: i0, template: "<ng-container *ngIf=\"zoomTexts$ | async as texts\">\n    <section class=\"t-zoom\">\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            type=\"button\"\n            class=\"t-sign_minus\"\n            [disabled]=\"leftButtonDisabled\"\n            [iconStart]=\"icons.zoomOut\"\n            (click)=\"onMinus()\"\n        >\n            {{ texts.zoomOut }}\n        </button>\n        <label tuiSliderThumbLabel>\n            <div\n                tuiHintAppearance=\"dark\"\n                tuiHintDirection=\"top-right\"\n                [tuiHint]=\"hint\"\n                [tuiHintManual]=\"!!(hintShow$ | async)\"\n            ></div>\n\n            <ng-template #hint>\n                {{ (valueChange | async) || value | percent }}\n            </ng-template>\n\n            <input\n                step=\"any\"\n                tuiSlider\n                tuiTheme=\"dark\"\n                type=\"range\"\n                class=\"t-slider\"\n                [max]=\"max\"\n                [min]=\"min\"\n                [ngModel]=\"value\"\n                [ngModelOptions]=\"{standalone: true}\"\n                (ngModelChange)=\"onModelChange($event)\"\n            />\n        </label>\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            type=\"button\"\n            class=\"t-sign_plus\"\n            [disabled]=\"rightButtonDisabled\"\n            [iconStart]=\"icons.zoomIn\"\n            (click)=\"onPlus()\"\n        >\n            {{ texts.zoomIn }}\n        </button>\n    </section>\n\n    <button\n        tuiHintAppearance=\"dark\"\n        tuiHintDescribe\n        tuiHintDirection=\"top-right\"\n        tuiIconButton\n        tuiPreviewAction\n        type=\"button\"\n        class=\"t-reset-button\"\n        [class.t-invisible]=\"!collapseVisible\"\n        [iconStart]=\"icons.zoomReset\"\n        [tuiHint]=\"texts.reset\"\n        (click)=\"onReset()\"\n    ></button>\n</ng-container>\n", styles: [":host{position:relative;display:flex}.t-zoom{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-font-text-s);justify-content:space-between;align-items:center;inline-size:12rem}.t-slider{inline-size:7.5rem}.t-sign_minus{border-start-end-radius:0;border-end-end-radius:0}.t-sign_plus{border-start-start-radius:0;border-end-start-radius:0}.t-invisible{visibility:hidden}.t-reset-button{margin-left:.3125rem}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: PercentPipe, name: "percent" }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "directive", type: i2.TuiHintDirective, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: ["tuiHintContext", "tuiHintAppearance", "tuiHint"] }, { kind: "directive", type: i2.TuiHintDescribe, selector: "[tuiHintDescribe]", inputs: ["tuiHintDescribe"] }, { kind: "directive", type: i2.TuiHintManual, selector: "[tuiHint][tuiHintManual]", inputs: ["tuiHintManual"] }, { kind: "directive", type: TuiPreviewAction, selector: "[tuiPreviewAction]" }, { kind: "component", type: i3.TuiSliderComponent, selector: "input[type=range][tuiSlider]", inputs: ["size", "segments"] }, { kind: "component", type: i3.TuiSliderThumbLabel, selector: "[tuiSliderThumbLabel]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewZoom, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-preview-zoom', imports: [
                        AsyncPipe,
                        FormsModule,
                        NgIf,
                        PercentPipe,
                        TuiButton,
                        TuiHint,
                        TuiPreviewAction,
                        TuiSlider,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"zoomTexts$ | async as texts\">\n    <section class=\"t-zoom\">\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            type=\"button\"\n            class=\"t-sign_minus\"\n            [disabled]=\"leftButtonDisabled\"\n            [iconStart]=\"icons.zoomOut\"\n            (click)=\"onMinus()\"\n        >\n            {{ texts.zoomOut }}\n        </button>\n        <label tuiSliderThumbLabel>\n            <div\n                tuiHintAppearance=\"dark\"\n                tuiHintDirection=\"top-right\"\n                [tuiHint]=\"hint\"\n                [tuiHintManual]=\"!!(hintShow$ | async)\"\n            ></div>\n\n            <ng-template #hint>\n                {{ (valueChange | async) || value | percent }}\n            </ng-template>\n\n            <input\n                step=\"any\"\n                tuiSlider\n                tuiTheme=\"dark\"\n                type=\"range\"\n                class=\"t-slider\"\n                [max]=\"max\"\n                [min]=\"min\"\n                [ngModel]=\"value\"\n                [ngModelOptions]=\"{standalone: true}\"\n                (ngModelChange)=\"onModelChange($event)\"\n            />\n        </label>\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            type=\"button\"\n            class=\"t-sign_plus\"\n            [disabled]=\"rightButtonDisabled\"\n            [iconStart]=\"icons.zoomIn\"\n            (click)=\"onPlus()\"\n        >\n            {{ texts.zoomIn }}\n        </button>\n    </section>\n\n    <button\n        tuiHintAppearance=\"dark\"\n        tuiHintDescribe\n        tuiHintDirection=\"top-right\"\n        tuiIconButton\n        tuiPreviewAction\n        type=\"button\"\n        class=\"t-reset-button\"\n        [class.t-invisible]=\"!collapseVisible\"\n        [iconStart]=\"icons.zoomReset\"\n        [tuiHint]=\"texts.reset\"\n        (click)=\"onReset()\"\n    ></button>\n</ng-container>\n", styles: [":host{position:relative;display:flex}.t-zoom{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-font-text-s);justify-content:space-between;align-items:center;inline-size:12rem}.t-slider{inline-size:7.5rem}.t-sign_minus{border-start-end-radius:0;border-end-end-radius:0}.t-sign_plus{border-start-start-radius:0;border-end-start-radius:0}.t-invisible{visibility:hidden}.t-reset-button{margin-left:.3125rem}\n"] }]
        }], propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], reset: [{
                type: Output
            }] } });

const INITIAL_SCALE_COEF = 0.8;
const EMPTY_COORDINATES = [0, 0];
const ROTATION_ANGLE = 90;
class TuiPreviewComponent {
    constructor() {
        this.el = tuiInjectElement();
        this.minZoom = 1;
        this.width = 0;
        this.height = 0;
        this.texts$ = inject(TUI_PREVIEW_TEXTS);
        this.icons = inject(TUI_PREVIEW_ICONS);
        this.cdr = inject(ChangeDetectorRef);
        this.zoom$ = new BehaviorSubject(this.minZoom);
        this.rotation$ = new BehaviorSubject(0);
        this.coordinates$ = new BehaviorSubject(EMPTY_COORDINATES);
        this.transitioned$ = merge(tuiDragAndDropFrom(this.el).pipe(map(({ stage }) => stage !== 'continues')), tuiTypedFromEvent(this.el, 'touchmove', {
            passive: true,
        }).pipe(map(TUI_FALSE_HANDLER)), tuiTypedFromEvent(this.el, 'wheel', { passive: true }).pipe(map(TUI_FALSE_HANDLER)));
        this.cursor$ = tuiDragAndDropFrom(this.el).pipe(map(({ stage }) => (stage === 'continues' ? 'grabbing' : 'initial')), startWith('initial'));
        this.wrapperTransform$ = combineLatest([
            this.coordinates$.pipe(map(([x, y]) => `${tuiPx(x)}, ${tuiPx(y)}`)),
            this.zoom$,
            this.rotation$,
        ]).pipe(map(([translate, zoom, rotation]) => `translate(${translate}) scale(${zoom}) rotate(${rotation}deg)`));
        this.zoomable = true;
        this.rotatable = false;
    }
    rotate() {
        this.rotation$.next(this.rotation$.value - ROTATION_ANGLE);
    }
    onPan(delta) {
        this.coordinates$.next(this.getGuardedCoordinates(this.coordinates$.value[0] + delta[0], this.coordinates$.value[1] + delta[1]));
    }
    onMutation(contentWrapper) {
        const { clientWidth, clientHeight } = contentWrapper;
        this.refresh(clientWidth, clientHeight);
    }
    onZoom({ clientX, clientY, delta }) {
        if (this.zoomable) {
            this.processZoom(clientX, clientY, delta);
        }
    }
    onResize([entry]) {
        if (entry?.contentRect) {
            this.refresh(entry.contentRect.width, entry.contentRect.height);
            this.cdr.detectChanges();
        }
    }
    reset() {
        this.zoom$.next(this.minZoom);
        this.coordinates$.next(EMPTY_COORDINATES);
    }
    setZoom(zoom) {
        this.zoom$.next(zoom);
        const [x, y] = this.coordinates$.value;
        this.coordinates$.next(this.getGuardedCoordinates(x, y));
    }
    get offsets() {
        const offsetX = ((this.zoom$.value - this.minZoom) * this.width) / 2;
        const offsetY = ((this.zoom$.value - this.minZoom) * this.height) / 2;
        return { offsetX, offsetY };
    }
    calculateMinZoom(contentHeight, contentWidth, boxHeight, boxWidth) {
        const bigSize = contentHeight > boxHeight * INITIAL_SCALE_COEF ||
            contentWidth > boxWidth * INITIAL_SCALE_COEF;
        const { clientHeight, clientWidth } = this.el;
        return bigSize
            ? tuiRound(Math.min((clientHeight * INITIAL_SCALE_COEF) / contentHeight, (clientWidth * INITIAL_SCALE_COEF) / contentWidth), 2)
            : 1;
    }
    refresh(width, height) {
        this.width = width;
        this.height = height;
        this.minZoom = this.calculateMinZoom(height, width, this.el.clientHeight, this.el.clientWidth);
        this.zoom$.next(this.minZoom);
        this.coordinates$.next(EMPTY_COORDINATES);
        this.rotation$.next(0);
    }
    processZoom(clientX, clientY, delta) {
        const oldScale = this.zoom$.value;
        const newScale = tuiClamp(oldScale + delta, this.minZoom, 2);
        const center = this.getScaleCenter({ clientX, clientY }, this.coordinates$.value, this.zoom$.value);
        const moveX = center[0] * oldScale - center[0] * newScale;
        const moveY = center[1] * oldScale - center[1] * newScale;
        this.zoom$.next(newScale);
        this.coordinates$.next(this.getGuardedCoordinates(this.coordinates$.value[0] + moveX, this.coordinates$.value[1] + moveY));
    }
    getGuardedCoordinates(x, y) {
        const { offsetX, offsetY } = this.offsets;
        return [tuiClamp(x, -offsetX, offsetX), tuiClamp(y, -offsetY, offsetY)];
    }
    getScaleCenter({ clientX, clientY }, [x, y], scale) {
        return [
            (clientX - x - this.el.offsetWidth / 2) / scale,
            (clientY - y - this.el.offsetHeight / 2) / scale,
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewComponent, isStandalone: true, selector: "tui-preview", inputs: { zoomable: "zoomable", rotatable: "rotatable" }, ngImport: i0, template: "<ng-container *ngIf=\"texts$ | async as texts\">\n    <section\n        #contentWrapper\n        attributeFilter=\"src\"\n        characterData\n        childList\n        subtree\n        class=\"t-wrapper\"\n        [class.t-not-interactive-content]=\"zoomable\"\n        [class.t-transitive]=\"transitioned$ | async\"\n        [style.cursor]=\"cursor$ | async\"\n        [style.transform]=\"wrapperTransform$ | async\"\n        (tuiPan)=\"onPan($event)\"\n        (tuiZoom)=\"onZoom($event)\"\n        (waMutationObserver)=\"onMutation(contentWrapper)\"\n        (waResizeObserver)=\"onResize($event)\"\n    >\n        <ng-content />\n    </section>\n\n    <header class=\"t-header\">\n        <div class=\"t-title\">\n            <ng-content select=\"tui-preview-title\" />\n        </div>\n\n        <ng-content select=\"tui-preview-pagination\" />\n\n        <div class=\"t-actions\">\n            <ng-content select=\"[tuiPreviewAction]\" />\n        </div>\n    </header>\n\n    <footer class=\"t-footer\">\n        <button\n            *ngIf=\"rotatable\"\n            tuiHintAppearance=\"dark\"\n            tuiHintDescribe\n            tuiHintDirection=\"top-right\"\n            tuiIconButton\n            tuiPreviewAction\n            type=\"button\"\n            class=\"t-rotate-button\"\n            [iconStart]=\"icons.rotate\"\n            [tuiHint]=\"texts.rotate\"\n            (click)=\"rotate()\"\n        ></button>\n\n        <tui-preview-zoom\n            *ngIf=\"zoomable\"\n            [min]=\"minZoom\"\n            [value]=\"(zoom$ | async) || 1\"\n            (reset)=\"reset()\"\n            (valueChange)=\"setZoom($event)\"\n        />\n    </footer>\n</ng-container>\n", styles: [":host{position:relative;display:flex;justify-content:center;align-items:center;inline-size:100%;block-size:100%;-webkit-user-select:none;user-select:none}.t-header{position:fixed;top:1rem;display:flex;inline-size:100%;padding:0 1rem;box-sizing:border-box}.t-footer{position:absolute;bottom:1rem;display:flex;inline-size:100%;padding:0 1rem;box-sizing:border-box;justify-content:center}.t-actions{display:flex;flex:1;justify-content:flex-end}.t-actions ::ng-deep>*{margin-left:.625rem}.t-rotate-button{margin-right:.3125rem}.t-title{flex:1}:host-context(tui-root._mobile) .t-title{display:none}.t-not-interactive-content ::ng-deep>*{pointer-events:none}.t-wrapper{will-change:transform}.t-transitive{transition-duration:.3s}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "directive", type: i2.TuiHintDirective, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: ["tuiHintContext", "tuiHintAppearance", "tuiHint"] }, { kind: "directive", type: i2.TuiHintDescribe, selector: "[tuiHintDescribe]", inputs: ["tuiHintDescribe"] }, { kind: "directive", type: TuiPan, selector: "[tuiPan]", outputs: ["tuiPan"] }, { kind: "directive", type: TuiPreviewAction, selector: "[tuiPreviewAction]" }, { kind: "component", type: TuiPreviewZoom, selector: "tui-preview-zoom", inputs: ["min", "max", "value"], outputs: ["valueChange", "reset"] }, { kind: "directive", type: TuiZoom, selector: "[tuiZoom]", outputs: ["tuiZoom"] }, { kind: "directive", type: WaMutationObserver, selector: "[waMutationObserver]", inputs: ["attributeFilter", "attributeOldValue", "attributes", "characterData", "characterDataOldValue", "childList", "subtree"], outputs: ["waMutationObserver"], exportAs: ["MutationObserver"] }, { kind: "directive", type: WaResizeObserver, selector: "[waResizeObserver]", inputs: ["box"], outputs: ["waResizeObserver"] }], animations: [tuiSlideInTop], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-preview', imports: [
                        AsyncPipe,
                        NgIf,
                        TuiButton,
                        TuiHint,
                        TuiPan,
                        TuiPreviewAction,
                        TuiPreviewZoom,
                        TuiZoom,
                        WaMutationObserver,
                        WaResizeObserver,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideInTop], template: "<ng-container *ngIf=\"texts$ | async as texts\">\n    <section\n        #contentWrapper\n        attributeFilter=\"src\"\n        characterData\n        childList\n        subtree\n        class=\"t-wrapper\"\n        [class.t-not-interactive-content]=\"zoomable\"\n        [class.t-transitive]=\"transitioned$ | async\"\n        [style.cursor]=\"cursor$ | async\"\n        [style.transform]=\"wrapperTransform$ | async\"\n        (tuiPan)=\"onPan($event)\"\n        (tuiZoom)=\"onZoom($event)\"\n        (waMutationObserver)=\"onMutation(contentWrapper)\"\n        (waResizeObserver)=\"onResize($event)\"\n    >\n        <ng-content />\n    </section>\n\n    <header class=\"t-header\">\n        <div class=\"t-title\">\n            <ng-content select=\"tui-preview-title\" />\n        </div>\n\n        <ng-content select=\"tui-preview-pagination\" />\n\n        <div class=\"t-actions\">\n            <ng-content select=\"[tuiPreviewAction]\" />\n        </div>\n    </header>\n\n    <footer class=\"t-footer\">\n        <button\n            *ngIf=\"rotatable\"\n            tuiHintAppearance=\"dark\"\n            tuiHintDescribe\n            tuiHintDirection=\"top-right\"\n            tuiIconButton\n            tuiPreviewAction\n            type=\"button\"\n            class=\"t-rotate-button\"\n            [iconStart]=\"icons.rotate\"\n            [tuiHint]=\"texts.rotate\"\n            (click)=\"rotate()\"\n        ></button>\n\n        <tui-preview-zoom\n            *ngIf=\"zoomable\"\n            [min]=\"minZoom\"\n            [value]=\"(zoom$ | async) || 1\"\n            (reset)=\"reset()\"\n            (valueChange)=\"setZoom($event)\"\n        />\n    </footer>\n</ng-container>\n", styles: [":host{position:relative;display:flex;justify-content:center;align-items:center;inline-size:100%;block-size:100%;-webkit-user-select:none;user-select:none}.t-header{position:fixed;top:1rem;display:flex;inline-size:100%;padding:0 1rem;box-sizing:border-box}.t-footer{position:absolute;bottom:1rem;display:flex;inline-size:100%;padding:0 1rem;box-sizing:border-box;justify-content:center}.t-actions{display:flex;flex:1;justify-content:flex-end}.t-actions ::ng-deep>*{margin-left:.625rem}.t-rotate-button{margin-right:.3125rem}.t-title{flex:1}:host-context(tui-root._mobile) .t-title{display:none}.t-not-interactive-content ::ng-deep>*{pointer-events:none}.t-wrapper{will-change:transform}.t-transitive{transition-duration:.3s}\n"] }]
        }], propDecorators: { zoomable: [{
                type: Input
            }], rotatable: [{
                type: Input
            }] } });

class TuiPreviewTitle {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewTitle, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewTitle, isStandalone: true, selector: "tui-preview-title", ngImport: i0, template: `
        <ng-content></ng-content>
    `, isInline: true, styles: [":host{border-radius:1rem;background:#686868f5;color:#fff;display:inline-block;font:var(--tui-font-text-s);padding:.375rem .75rem}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewTitle, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-preview-title', template: `
        <ng-content></ng-content>
    `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{border-radius:1rem;background:#686868f5;color:#fff;display:inline-block;font:var(--tui-font-text-s);padding:.375rem .75rem}\n"] }]
        }] });

const TuiPreview = [
    TuiPreviewComponent,
    TuiPreviewTitle,
    TuiPreviewPagination,
    TuiPreviewAction,
    TuiPreviewZoom,
];

class TuiPreviewDialog {
    constructor() {
        this.context = injectContext();
        this.animation = {
            value: '',
            params: {
                start: '100vh',
                duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
            },
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewDialog, isStandalone: true, selector: "tui-preview-dialog", host: { listeners: { "document:keydown.esc": "context.$implicit.complete()" }, properties: { "@tuiSlideInTop": "animation", "@tuiFadeIn": "animation" } }, ngImport: i0, template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `, isInline: true, styles: ["tui-preview-dialog{inline-size:100%;block-size:100%}[tuiAppearance][data-appearance=preview-action]{background:#686868f5;color:#fff}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action][data-state=hover]{background:#9f9f9fdb}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=hover]{background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][data-state=active]{background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active]:hover{background:#9f9f9fbf}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], animations: [tuiSlideInTop, tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialog, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-preview-dialog', imports: [PolymorpheusOutlet, PolymorpheusTemplate], template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideInTop, tuiFadeIn], host: {
                        '(document:keydown.esc)': 'context.$implicit.complete()',
                        '[@tuiSlideInTop]': 'animation',
                        '[@tuiFadeIn]': 'animation',
                    }, styles: ["tui-preview-dialog{inline-size:100%;block-size:100%}[tuiAppearance][data-appearance=preview-action]{background:#686868f5;color:#fff}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action][data-state=hover]{background:#9f9f9fdb}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=hover]{background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][data-state=active]{background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active]:hover{background:#9f9f9fbf}\n"] }]
        }] });

class TuiPreviewDialogService extends TuiPopoverService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogService, providedIn: 'root', useFactory: () => new TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialog) }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialog),
                }]
        }] });

class TuiPreviewDialogDirective extends TuiPopoverDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewDialogDirective, isStandalone: true, selector: "ng-template[tuiPreviewDialog]", inputs: { open: ["tuiPreviewDialog", "open"] }, outputs: { openChange: "tuiPreviewDialogChange" }, providers: [tuiAsPopover(TuiPreviewDialogService)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiPreviewDialog]',
                    inputs: ['open: tuiPreviewDialog'],
                    outputs: ['openChange: tuiPreviewDialogChange'],
                    providers: [tuiAsPopover(TuiPreviewDialogService)],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiPreview, TuiPreviewAction, TuiPreviewComponent, TuiPreviewDialog, TuiPreviewDialogDirective, TuiPreviewDialogService, TuiPreviewPagination, TuiPreviewTitle, TuiPreviewZoom };
//# sourceMappingURL=taiga-ui-kit-components-preview.mjs.map
