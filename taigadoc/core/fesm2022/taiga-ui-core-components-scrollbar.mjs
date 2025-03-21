import { AsyncPipe, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Injectable, Directive, Input, Component, ChangeDetectionStrategy, ElementRef, DestroyRef } from '@angular/core';
import { WA_ANIMATION_FRAME } from '@ng-web-apis/common';
import { tuiTypedFromEvent, tuiZonefree, tuiZonefreeScheduler, tuiScrollFrom, tuiZoneOptimized } from '@taiga-ui/cdk/observables';
import { tuiFadeIn } from '@taiga-ui/core/animations';
import { TUI_SCROLL_REF, TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils';
import { Observable, merge, filter, map, switchMap, takeUntil, throttleTime, startWith, distinctUntilChanged, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiInjectElement, tuiGetElementOffset } from '@taiga-ui/cdk/utils/dom';
import { tuiCreateOptions } from '@taiga-ui/cdk/utils/di';
import { TUI_IS_IOS } from '@taiga-ui/cdk/tokens';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';

class TuiScrollbarService extends Observable {
    constructor() {
        super((subscriber) => this.scroll$.subscribe(subscriber));
        this.el = tuiInjectElement();
        this.element = inject(TUI_SCROLL_REF).nativeElement;
        this.scroll$ = merge(tuiTypedFromEvent(this.el.parentElement, 'mousedown').pipe(filter(({ target }) => target !== this.el), map((event) => this.getScrolled(event, 0.5, 0.5))), tuiTypedFromEvent(this.el, 'mousedown').pipe(tuiZonefree(), switchMap((event) => {
            const { ownerDocument } = this.el;
            const rect = this.el.getBoundingClientRect();
            const vertical = getOffsetVertical(event, rect);
            const horizontal = getOffsetHorizontal(event, rect);
            return tuiTypedFromEvent(ownerDocument, 'mousemove').pipe(map((event) => this.getScrolled(event, vertical, horizontal)), takeUntil(tuiTypedFromEvent(ownerDocument, 'mouseup')));
        })));
    }
    getScrolled({ clientY, clientX }, offsetY, offsetX) {
        const { offsetHeight, offsetWidth } = this.el;
        const { top, left, width, height } = this.el.parentElement.getBoundingClientRect();
        const maxTop = this.element.scrollHeight - height;
        const maxLeft = this.element.scrollWidth - width;
        const scrolledTop = (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);
        const scrolledLeft = (clientX - left - offsetWidth * offsetX) / (width - offsetWidth);
        return [maxTop * scrolledTop, maxLeft * scrolledLeft];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbarService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbarService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
function getOffsetVertical({ clientY }, { top, height }) {
    return (clientY - top) / height;
}
function getOffsetHorizontal({ clientX }, { left, width }) {
    return (clientX - left) / width;
}

const MIN_WIDTH = 24;
class TuiScrollbarDirective {
    constructor() {
        this.el = inject(TUI_SCROLL_REF).nativeElement;
        this.style = tuiInjectElement().style;
        this.scrollSub = inject(TuiScrollbarService)
            .pipe(takeUntilDestroyed())
            .subscribe(([top, left]) => {
            this.el.style.scrollBehavior = 'auto';
            if (this.tuiScrollbar === 'horizontal') {
                this.el.scrollLeft = left;
            }
            else {
                this.el.scrollTop = top;
            }
            this.el.style.scrollBehavior = '';
        });
        this.styleSub = merge(inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())), tuiScrollFrom(this.el))
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => {
            const dimension = {
                scrollTop: this.el.scrollTop,
                scrollHeight: this.el.scrollHeight,
                clientHeight: this.el.clientHeight,
                scrollLeft: this.el.scrollLeft,
                scrollWidth: this.el.scrollWidth,
                clientWidth: this.el.clientWidth,
            };
            const thumb = `${this.getThumb(dimension) * 100}%`;
            const view = `${this.getView(dimension) * 100}%`;
            if (this.tuiScrollbar === 'vertical') {
                this.style.top = thumb;
                this.style.height = view;
            }
            else {
                this.style.left = thumb;
                this.style.width = view;
            }
        });
        this.tuiScrollbar = 'vertical';
    }
    getScrolled(dimension) {
        return this.tuiScrollbar === 'vertical'
            ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight)
            : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
    }
    getCompensation(dimension) {
        if (((dimension.clientHeight * dimension.clientHeight) / dimension.scrollHeight >
            MIN_WIDTH &&
            this.tuiScrollbar === 'vertical') ||
            ((dimension.clientWidth * dimension.clientWidth) / dimension.scrollWidth >
                MIN_WIDTH &&
                this.tuiScrollbar === 'horizontal')) {
            return 0;
        }
        return this.tuiScrollbar === 'vertical'
            ? MIN_WIDTH / dimension.clientHeight
            : MIN_WIDTH / dimension.clientWidth;
    }
    getThumb(dimension) {
        const compensation = this.getCompensation(dimension) || this.getView(dimension);
        return this.getScrolled(dimension) * (1 - compensation);
    }
    getView(dimension) {
        return this.tuiScrollbar === 'vertical'
            ? Math.ceil((dimension.clientHeight / dimension.scrollHeight) * 100) / 100
            : Math.ceil((dimension.clientWidth / dimension.scrollWidth) * 100) / 100;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbarDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiScrollbarDirective, isStandalone: true, selector: "[tuiScrollbar]", inputs: { tuiScrollbar: "tuiScrollbar" }, providers: [TuiScrollbarService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbarDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiScrollbar]',
                    providers: [TuiScrollbarService],
                }]
        }], propDecorators: { tuiScrollbar: [{
                type: Input
            }] } });

const TUI_DEFAULT_SCROLLBAR_OPTIONS = {
    mode: 'always',
};
const [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] = tuiCreateOptions(TUI_DEFAULT_SCROLLBAR_OPTIONS);

class TuiScrollControls {
    constructor() {
        this.scrollRef = inject(TUI_SCROLL_REF).nativeElement;
        this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';
        this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.refresh$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(300, tuiZonefreeScheduler()), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized());
    }
    get scrollbars() {
        const { clientHeight, scrollHeight, clientWidth, scrollWidth } = this.scrollRef;
        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollControls, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiScrollControls, isStandalone: true, selector: "tui-scroll-controls", ngImport: i0, template: "<ng-container *ngIf=\"nativeScrollbar; else custom\" />\n<ng-template #custom>\n    <ng-container *ngIf=\"refresh$ | async as bars\">\n        <div\n            *ngIf=\"bars[0]\"\n            class=\"t-bar t-bar_vertical\"\n            [@tuiFadeIn]=\"options\"\n            [class.t-bar_has-horizontal]=\"bars[1]\"\n            (mousedown.capture.prevent)=\"(0)\"\n        >\n            <div\n                tuiScrollbar=\"vertical\"\n                class=\"t-thumb\"\n            ></div>\n        </div>\n        <div\n            *ngIf=\"bars[1]\"\n            class=\"t-bar t-bar_horizontal\"\n            [@tuiFadeIn]=\"options\"\n            [class.t-bar_has-vertical]=\"bars[0]\"\n            (mousedown.capture.prevent)=\"(0)\"\n        >\n            <div\n                tuiScrollbar=\"horizontal\"\n                class=\"t-thumb\"\n            ></div>\n        </div>\n    </ng-container>\n</ng-template>\n", styles: [":host{position:sticky;top:0;left:0;z-index:1;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);float:inline-start;margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar_vertical{top:0;inline-size:.875rem}.t-bar_horizontal{left:0;block-size:.875rem}.t-bar_has-horizontal{bottom:.5rem}.t-bar_has-vertical{right:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{right:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiScrollbarDirective, selector: "[tuiScrollbar]", inputs: ["tuiScrollbar"] }], animations: [tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollControls, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-scroll-controls', imports: [AsyncPipe, NgIf, TuiScrollbarDirective], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiFadeIn], template: "<ng-container *ngIf=\"nativeScrollbar; else custom\" />\n<ng-template #custom>\n    <ng-container *ngIf=\"refresh$ | async as bars\">\n        <div\n            *ngIf=\"bars[0]\"\n            class=\"t-bar t-bar_vertical\"\n            [@tuiFadeIn]=\"options\"\n            [class.t-bar_has-horizontal]=\"bars[1]\"\n            (mousedown.capture.prevent)=\"(0)\"\n        >\n            <div\n                tuiScrollbar=\"vertical\"\n                class=\"t-thumb\"\n            ></div>\n        </div>\n        <div\n            *ngIf=\"bars[1]\"\n            class=\"t-bar t-bar_horizontal\"\n            [@tuiFadeIn]=\"options\"\n            [class.t-bar_has-vertical]=\"bars[0]\"\n            (mousedown.capture.prevent)=\"(0)\"\n        >\n            <div\n                tuiScrollbar=\"horizontal\"\n                class=\"t-thumb\"\n            ></div>\n        </div>\n    </ng-container>\n</ng-template>\n", styles: [":host{position:sticky;top:0;left:0;z-index:1;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);float:inline-start;margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar_vertical{top:0;inline-size:.875rem}.t-bar_horizontal{left:0;block-size:.875rem}.t-bar_has-horizontal{bottom:.5rem}.t-bar_has-vertical{right:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{right:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"] }]
        }] });

/**
 * An event for scrolling an element into view within {@link TuiScrollbar}.
 */
const TUI_SCROLL_INTO_VIEW = 'tui-scroll-into-view';
/**
 * An event to notify {@link TuiScrollbar} that
 * it should control a nested element.
 */
const TUI_SCROLLABLE = 'tui-scrollable';
class TuiScrollbar {
    constructor() {
        this.el = tuiInjectElement();
        this.options = inject(TUI_SCROLLBAR_OPTIONS);
        this.isIOS = inject(TUI_IS_IOS);
        this.browserScrollRef = new ElementRef(this.el);
        /**
         * @deprecated: use tuiScrollbarOptionsProvider({ mode: 'hidden' })
         */
        this.hidden = this.options.mode === 'hidden';
    }
    get delegated() {
        return this.scrollRef !== this.el || this.options.mode === 'native';
    }
    get scrollRef() {
        return this.browserScrollRef.nativeElement;
    }
    set scrollRef(element) {
        this.browserScrollRef.nativeElement = element;
    }
    scrollIntoView(detail) {
        if (this.delegated) {
            return;
        }
        const { offsetHeight, offsetWidth } = detail;
        const { offsetTop, offsetLeft } = tuiGetElementOffset(this.scrollRef, detail);
        const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
        const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;
        this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbar, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiScrollbar, isStandalone: true, selector: "tui-scrollbar", inputs: { hidden: "hidden" }, host: { listeners: { "tui-scrollable.stop": "scrollRef = $event.detail", "tui-scroll-into-view.stop": "scrollIntoView($event.detail)" }, properties: { "class._native-hidden": "options.mode !== \"native\" && (!isIOS || hidden)" } }, providers: [
            {
                provide: TUI_SCROLL_REF,
                useFactory: () => inject(TuiScrollbar).browserScrollRef,
            },
        ], ngImport: i0, template: "<tui-scroll-controls\n    *ngIf=\"!hidden && !isIOS && options.mode !== 'native'\"\n    class=\"t-bars\"\n    [class.t-hover-mode]=\"options.mode === 'hover'\"\n/>\n<div\n    class=\"t-content\"\n    [class.t-content_delegated]=\"delegated\"\n>\n    <ng-content />\n</div>\n", styles: [":host{position:relative;display:flex;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover .t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TuiScrollControls, selector: "tui-scroll-controls" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbar, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-scrollbar', imports: [NgIf, TuiScrollControls], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: TUI_SCROLL_REF,
                            useFactory: () => inject(TuiScrollbar).browserScrollRef,
                        },
                    ], host: {
                        '[class._native-hidden]': 'options.mode !== "native" && (!isIOS || hidden)',
                        [`(${TUI_SCROLLABLE}.stop)`]: 'scrollRef = $event.detail',
                        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: 'scrollIntoView($event.detail)',
                    }, template: "<tui-scroll-controls\n    *ngIf=\"!hidden && !isIOS && options.mode !== 'native'\"\n    class=\"t-bars\"\n    [class.t-hover-mode]=\"options.mode === 'hover'\"\n/>\n<div\n    class=\"t-content\"\n    [class.t-content_delegated]=\"delegated\"\n>\n    <ng-content />\n</div>\n", styles: [":host{position:relative;display:flex;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover .t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"] }]
        }], propDecorators: { hidden: [{
                type: Input
            }] } });

/**
 * Directive scrolls element into view inside tui-scrollbar
 */
class TuiScrollIntoView {
    constructor() {
        this.el = tuiInjectElement();
        this.destroyRef = inject(DestroyRef);
    }
    set tuiScrollIntoView(scroll) {
        if (!scroll) {
            return;
        }
        // Timeout is necessary in order to give element render cycle to get into its final spot
        // (for example if it is inside dropdown box which has to be positioned first)
        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            this.el.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
                bubbles: true,
                detail: this.el,
            }));
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollIntoView, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiScrollIntoView, isStandalone: true, selector: "[tuiScrollIntoView]", inputs: { tuiScrollIntoView: "tuiScrollIntoView" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollIntoView, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiScrollIntoView]',
                }]
        }], propDecorators: { tuiScrollIntoView: [{
                type: Input
            }] } });

const SCROLL_REF_SELECTOR = '[tuiScrollRef]';
class TuiScrollRef {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollRef, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiScrollRef, isStandalone: true, selector: "[tuiScrollRef]", providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollRef, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: SCROLL_REF_SELECTOR,
                    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
                }]
        }] });

class TuiScrollable {
    constructor() {
        this.el = tuiInjectElement();
    }
    ngOnInit() {
        this.el.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
            bubbles: true,
            detail: this.el,
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollable, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiScrollable, isStandalone: true, selector: "[tuiScrollable]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollable, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiScrollable]',
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SCROLL_REF_SELECTOR, TUI_DEFAULT_SCROLLBAR_OPTIONS, TUI_SCROLLABLE, TUI_SCROLLBAR_OPTIONS, TUI_SCROLL_INTO_VIEW, TuiScrollControls, TuiScrollIntoView, TuiScrollRef, TuiScrollable, TuiScrollbar, TuiScrollbarDirective, TuiScrollbarService, tuiScrollbarOptionsProvider };
//# sourceMappingURL=taiga-ui-core-components-scrollbar.mjs.map
