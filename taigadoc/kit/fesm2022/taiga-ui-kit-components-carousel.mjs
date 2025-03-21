import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { __decorate } from 'tslib';
import { AsyncPipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Directive, Input, Output, ChangeDetectorRef, EventEmitter, TemplateRef, Component, ChangeDetectionStrategy, ContentChildren } from '@angular/core';
import * as i2 from '@ng-web-apis/intersection-observer';
import { WaIntersectionObserver } from '@ng-web-apis/intersection-observer';
import { TUI_FALSE_HANDLER, TUI_TRUE_HANDLER, EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { TuiPan } from '@taiga-ui/cdk/directives/pan';
import { TUI_SWIPE_OPTIONS, TuiSwipe } from '@taiga-ui/cdk/directives/swipe';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiClamp } from '@taiga-ui/cdk/utils/math';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { WA_PAGE_VISIBILITY } from '@ng-web-apis/common';
import { tuiTypedFromEvent, tuiIfMap, tuiZonefreeScheduler } from '@taiga-ui/cdk/observables';
import { Observable, BehaviorSubject, merge, map, combineLatest, interval, filter, throttleTime, tap } from 'rxjs';
import { tuiButtonOptionsProvider } from '@taiga-ui/core/components/button';

class TuiCarouselDirective extends Observable {
    constructor() {
        super((subscriber) => this.output$.subscribe(subscriber));
        this.el = tuiInjectElement();
        this.visible$ = inject(WA_PAGE_VISIBILITY);
        this.duration$ = new BehaviorSubject(0);
        this.running$ = merge(tuiTypedFromEvent(this.el, 'mouseenter').pipe(map(TUI_FALSE_HANDLER)), tuiTypedFromEvent(this.el, 'touchstart').pipe(map(TUI_FALSE_HANDLER)), tuiTypedFromEvent(this.el, 'touchend').pipe(map(TUI_TRUE_HANDLER)), tuiTypedFromEvent(this.el, 'mouseleave').pipe(map(TUI_TRUE_HANDLER)), this.visible$);
        this.output$ = combineLatest([this.duration$, this.running$]).pipe(tuiIfMap(([duration]) => interval(duration), (values) => values.every(Boolean)));
    }
    set duration(duration) {
        this.duration$.next(Number.isNaN(duration) ? this.duration$.value : duration);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiCarouselDirective, isStandalone: true, inputs: { duration: "duration" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { duration: [{
                type: Input
            }] } });

class TuiCarouselAutoscroll {
    constructor() {
        this.tuiCarouselAutoscroll = inject(TuiCarouselDirective);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselAutoscroll, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiCarouselAutoscroll, isStandalone: true, selector: "[tuiCarouselAutoscroll]", outputs: { tuiCarouselAutoscroll: "tuiCarouselAutoscroll" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselAutoscroll, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiCarouselAutoscroll]',
                }]
        }], propDecorators: { tuiCarouselAutoscroll: [{
                type: Output
            }] } });

class TuiCarouselScroll {
    constructor() {
        this.el = tuiInjectElement();
        this.tuiCarouselScroll = tuiTypedFromEvent(this.el, 'wheel').pipe(filter(({ deltaX }) => Math.abs(deltaX) > 20), throttleTime(500, tuiZonefreeScheduler()), map(({ deltaX }) => Math.sign(deltaX)), tap(() => {
            // So we always have space to scroll and overflow-behavior saves us from back nav
            this.el.scrollLeft = 10;
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselScroll, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiCarouselScroll, isStandalone: true, selector: "[tuiCarouselScroll]", outputs: { tuiCarouselScroll: "tuiCarouselScroll" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselScroll, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiCarouselScroll]',
                }]
        }], propDecorators: { tuiCarouselScroll: [{
                type: Output
            }] } });

class TuiCarouselComponent {
    constructor() {
        this.el = tuiInjectElement();
        this.cdr = inject(ChangeDetectorRef);
        this.isMobile = inject(TUI_IS_MOBILE);
        this.directive = inject(TuiCarouselDirective);
        this.translate = 0;
        this.items = EMPTY_QUERY;
        this.transitioned = true;
        this.index = 0;
        this.draggable = false;
        this.itemsCount = 1;
        this.indexChange = new EventEmitter();
    }
    set indexSetter(index) {
        this.index = index;
        this.directive.duration = NaN;
    }
    next() {
        if (this.items && this.index === this.items.length - this.itemsCount) {
            return;
        }
        this.updateIndex(this.index + 1);
    }
    prev() {
        this.updateIndex(this.index - 1);
    }
    get transform() {
        const x = this.transitioned ? this.computedTranslate : this.translate;
        return `translateX(${100 * x}%)`;
    }
    getStyle(itemsCount) {
        const percent = `${100 / itemsCount}%`;
        return {
            flexBasis: percent,
            minWidth: percent,
            maxWidth: percent,
        };
    }
    onTransitioned(transitioned) {
        this.transitioned = transitioned;
        if (!transitioned) {
            this.translate = this.computedTranslate;
        }
    }
    isDisabled(index) {
        return index < this.index || index > this.index + this.itemsCount;
    }
    onIntersection({ intersectionRatio }, index) {
        if (intersectionRatio && intersectionRatio >= 0.5 && !this.transitioned) {
            this.updateIndex(this.index < index ? index - this.itemsCount + 1 : index);
        }
    }
    onScroll(delta) {
        if (!this.isMobile) {
            if (delta > 0) {
                this.next();
            }
            else {
                this.prev();
            }
        }
    }
    onPan(x) {
        if (!this.computedDraggable) {
            return;
        }
        const min = 1 - this.items.length / this.itemsCount;
        this.translate = tuiClamp(x / this.el.clientWidth + this.translate, min, 0);
    }
    onSwipe(direction) {
        if (direction === 'left') {
            this.next();
        }
        else if (direction === 'right') {
            this.prev();
        }
    }
    onAutoscroll() {
        this.updateIndex(this.index === this.items.length - 1 ? 0 : this.index + 1);
    }
    get computedTranslate() {
        return -this.index / this.itemsCount;
    }
    get computedDraggable() {
        return this.isMobile || this.draggable;
    }
    updateIndex(index) {
        this.index = tuiClamp(index, 0, this.items.length - 1);
        this.indexChange.emit(this.index);
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiCarouselComponent, isStandalone: true, selector: "tui-carousel", inputs: { draggable: "draggable", itemsCount: "itemsCount", indexSetter: ["index", "indexSetter"] }, outputs: { indexChange: "indexChange" }, host: { listeners: { "touchstart": "onTransitioned(false)", "touchend": "onTransitioned(true)", "mousedown": "onTransitioned(false)", "document:mouseup.silent": "onTransitioned(true)" }, properties: { "class._transitioned": "transitioned", "class._draggable": "draggable" } }, providers: [{ provide: TUI_SWIPE_OPTIONS, useValue: { timeout: 200, threshold: 30 } }], queries: [{ propertyName: "items", predicate: TuiItem, read: TemplateRef }], hostDirectives: [{ directive: TuiCarouselDirective, inputs: ["duration", "duration"] }], ngImport: i0, template: "<ng-container *ngIf=\"items.changes | async\" />\n<div\n    class=\"t-scroller\"\n    (tuiCarouselScroll)=\"onScroll($event)\"\n>\n    <div\n        waIntersectionObserver\n        waIntersectionThreshold=\"0.5\"\n        class=\"t-wrapper\"\n    >\n        <div\n            class=\"t-items\"\n            [style.transform]=\"transform\"\n            (tuiCarouselAutoscroll)=\"onAutoscroll()\"\n            (tuiPan)=\"onPan($event[0])\"\n            (tuiSwipe)=\"onSwipe($event.direction)\"\n        >\n            <fieldset\n                *ngFor=\"let item of items; let i = index\"\n                class=\"t-item\"\n                [disabled]=\"isDisabled(i)\"\n                [style]=\"getStyle(itemsCount)\"\n                (waIntersectionObservee)=\"$event[0] && onIntersection($event[0], i)\"\n            >\n                <ng-container [ngTemplateOutlet]=\"item\" />\n            </fieldset>\n        </div>\n    </div>\n</div>\n", styles: [":host{position:relative;display:block;overflow:hidden}:host._draggable{-webkit-user-select:none;user-select:none}:host._draggable:hover{cursor:grab}:host._draggable:active{cursor:grabbing}.t-items{display:flex}:host._transitioned .t-items{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}::ng-deep [tuiCarouselButtons] [tuiIconButton]{border-radius:100%}.t-item{display:flex;flex-direction:column;justify-content:center;padding:var(--tui-carousel-padding, 0 1.25rem);flex:1;min-inline-size:100%;max-inline-size:100%;box-sizing:border-box;border:none;margin:0}.t-wrapper{position:sticky;left:0;right:0;min-inline-size:100%;overflow:hidden}.t-scroller{scrollbar-width:none;-ms-overflow-style:none;display:flex;overflow:auto;overscroll-behavior-x:none;touch-action:pan-y}.t-scroller::-webkit-scrollbar,.t-scroller::-webkit-scrollbar-thumb{display:none}.t-scroller:before,.t-scroller:after{content:\"\";display:block;min-inline-size:1rem}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: TuiCarouselAutoscroll, selector: "[tuiCarouselAutoscroll]", outputs: ["tuiCarouselAutoscroll"] }, { kind: "directive", type: TuiCarouselScroll, selector: "[tuiCarouselScroll]", outputs: ["tuiCarouselScroll"] }, { kind: "directive", type: TuiPan, selector: "[tuiPan]", outputs: ["tuiPan"] }, { kind: "directive", type: TuiSwipe, selector: "[tuiSwipe]", outputs: ["tuiSwipe"] }, { kind: "directive", type: i2.WaIntersectionObserverDirective, selector: "[waIntersectionObserver]", inputs: ["waIntersectionRootMargin", "waIntersectionThreshold"], exportAs: ["IntersectionObserver"] }, { kind: "directive", type: i2.WaIntersectionObservee, selector: "[waIntersectionObservee]", outputs: ["waIntersectionObservee"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiCarouselComponent.prototype, "getStyle", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-carousel', imports: [
                        AsyncPipe,
                        NgForOf,
                        NgIf,
                        NgTemplateOutlet,
                        TuiCarouselAutoscroll,
                        TuiCarouselScroll,
                        TuiPan,
                        TuiSwipe,
                        WaIntersectionObserver,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: TUI_SWIPE_OPTIONS, useValue: { timeout: 200, threshold: 30 } }], hostDirectives: [
                        {
                            directive: TuiCarouselDirective,
                            inputs: ['duration'],
                        },
                    ], host: {
                        '[class._transitioned]': 'transitioned',
                        '[class._draggable]': 'draggable',
                        '(touchstart)': 'onTransitioned(false)',
                        '(touchend)': 'onTransitioned(true)',
                        '(mousedown)': 'onTransitioned(false)',
                        '(document:mouseup.silent)': 'onTransitioned(true)',
                    }, template: "<ng-container *ngIf=\"items.changes | async\" />\n<div\n    class=\"t-scroller\"\n    (tuiCarouselScroll)=\"onScroll($event)\"\n>\n    <div\n        waIntersectionObserver\n        waIntersectionThreshold=\"0.5\"\n        class=\"t-wrapper\"\n    >\n        <div\n            class=\"t-items\"\n            [style.transform]=\"transform\"\n            (tuiCarouselAutoscroll)=\"onAutoscroll()\"\n            (tuiPan)=\"onPan($event[0])\"\n            (tuiSwipe)=\"onSwipe($event.direction)\"\n        >\n            <fieldset\n                *ngFor=\"let item of items; let i = index\"\n                class=\"t-item\"\n                [disabled]=\"isDisabled(i)\"\n                [style]=\"getStyle(itemsCount)\"\n                (waIntersectionObservee)=\"$event[0] && onIntersection($event[0], i)\"\n            >\n                <ng-container [ngTemplateOutlet]=\"item\" />\n            </fieldset>\n        </div>\n    </div>\n</div>\n", styles: [":host{position:relative;display:block;overflow:hidden}:host._draggable{-webkit-user-select:none;user-select:none}:host._draggable:hover{cursor:grab}:host._draggable:active{cursor:grabbing}.t-items{display:flex}:host._transitioned .t-items{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}::ng-deep [tuiCarouselButtons] [tuiIconButton]{border-radius:100%}.t-item{display:flex;flex-direction:column;justify-content:center;padding:var(--tui-carousel-padding, 0 1.25rem);flex:1;min-inline-size:100%;max-inline-size:100%;box-sizing:border-box;border:none;margin:0}.t-wrapper{position:sticky;left:0;right:0;min-inline-size:100%;overflow:hidden}.t-scroller{scrollbar-width:none;-ms-overflow-style:none;display:flex;overflow:auto;overscroll-behavior-x:none;touch-action:pan-y}.t-scroller::-webkit-scrollbar,.t-scroller::-webkit-scrollbar-thumb{display:none}.t-scroller:before,.t-scroller:after{content:\"\";display:block;min-inline-size:1rem}\n"] }]
        }], propDecorators: { items: [{
                type: ContentChildren,
                args: [TuiItem, { read: TemplateRef }]
            }], draggable: [{
                type: Input
            }], itemsCount: [{
                type: Input
            }], indexChange: [{
                type: Output
            }], indexSetter: [{
                type: Input,
                args: ['index']
            }], getStyle: [] } });

class TuiCarouselButtons {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselButtons, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiCarouselButtons, isStandalone: true, selector: "[tuiCarouselButtons]", providers: [
            tuiButtonOptionsProvider({
                appearance: 'secondary',
                size: 'm',
            }),
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCarouselButtons, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiCarouselButtons]',
                    providers: [
                        tuiButtonOptionsProvider({
                            appearance: 'secondary',
                            size: 'm',
                        }),
                    ],
                }]
        }] });

const TuiCarousel = [
    TuiItem,
    TuiCarouselComponent,
    TuiCarouselDirective,
    TuiCarouselAutoscroll,
    TuiCarouselButtons,
    TuiCarouselScroll,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiCarousel, TuiCarouselAutoscroll, TuiCarouselButtons, TuiCarouselComponent, TuiCarouselDirective, TuiCarouselScroll };
//# sourceMappingURL=taiga-ui-kit-components-carousel.mjs.map
