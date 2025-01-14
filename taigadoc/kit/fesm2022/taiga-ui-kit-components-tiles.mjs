import * as i0 from '@angular/core';
import { signal, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, inject, PLATFORM_ID, Injectable, ViewChild, Directive } from '@angular/core';
import { tuiInjectElement, tuiGetActualTarget, tuiIsElement } from '@taiga-ui/cdk/utils/dom';
import { isPlatformBrowser } from '@angular/common';
import { MutationObserverService, WA_MUTATION_OBSERVER_INIT } from '@ng-web-apis/mutation-observer';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { tuiZonefreeScheduler } from '@taiga-ui/cdk/observables';
import { tuiArrayShallowEquals, tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import { Subject, debounce, timer, filter, map, BehaviorSubject, Subscription, combineLatest, distinctUntilChanged, startWith, debounceTime } from 'rxjs';
import { __decorate } from 'tslib';
import { shouldCall } from '@taiga-ui/event-plugins';

class TuiTilesComponent {
    constructor() {
        this.el = tuiInjectElement();
        this.el$ = new Subject();
        this.debounce = 0;
        this.orderChange = this.el$.pipe(debounce(() => timer(this.debounce)), filter(this.filter.bind(this)), map((element) => this.reorder(element)));
        this.element = signal(null);
        this.order$ = new BehaviorSubject(new Map());
    }
    set order(map) {
        this.order$.next(map);
    }
    get order() {
        return this.order$.value;
    }
    rearrange(element) {
        this.el$.next(element);
    }
    filter(element) {
        return !!this.element() && !!element && this.element() !== element;
    }
    reorder(element) {
        const elements = Array.from(this.el.children);
        const currentIndex = elements.indexOf(this.element() || element);
        const newIndex = elements.indexOf(element);
        const order = this.order.size
            ? new Map(this.order)
            : new Map(elements.map((_, index) => [index, index]));
        const dragged = order.get(currentIndex) ?? currentIndex;
        const placement = order.get(newIndex) ?? newIndex;
        order.set(currentIndex, placement);
        order.set(newIndex, dragged);
        this.order$.next(order);
        return order;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTilesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTilesComponent, isStandalone: true, selector: "tui-tiles", inputs: { debounce: "debounce", order: "order" }, outputs: { orderChange: "orderChange" }, host: { listeners: { "pointerleave.silent": "rearrange()" }, properties: { "class._dragged": "element()" } }, providers: [
            ResizeObserverService,
            MutationObserverService,
            {
                provide: WA_MUTATION_OBSERVER_INIT,
                useValue: { childList: true },
            },
        ], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper{z-index:1;transition:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTilesComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-tiles', template: '<ng-content></ng-content>', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ResizeObserverService,
                        MutationObserverService,
                        {
                            provide: WA_MUTATION_OBSERVER_INIT,
                            useValue: { childList: true },
                        },
                    ], host: {
                        '[class._dragged]': 'element()',
                        '(pointerleave.silent)': 'rearrange()',
                    }, styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper{z-index:1;transition:none}\n"] }]
        }], propDecorators: { debounce: [{
                type: Input
            }], orderChange: [{
                type: Output
            }], order: [{
                type: Input
            }] } });

class TuiTileService {
    constructor() {
        this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
        this.el = tuiInjectElement();
        this.tiles = inject(TuiTilesComponent);
        this.sub = new Subscription();
        this.offset$ = new BehaviorSubject([NaN, NaN]);
        this.position$ = combineLatest([
            this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)),
            inject(ResizeObserverService).pipe(startWith(null)),
            inject(MutationObserverService).pipe(startWith(null)),
            this.tiles.order$.pipe(debounceTime(0, tuiZonefreeScheduler())),
        ]).pipe(map(([offset]) => offset));
    }
    init(element) {
        if (this.isBrowser) {
            this.sub.add(this.position$.subscribe((offset) => {
                this.setPosition(element, offset);
                this.setRect(element, offset);
            }));
        }
        else {
            this.el.style.setProperty('position', 'relative');
        }
    }
    setOffset(offset) {
        this.offset$.next(offset);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getRect([left, top]) {
        const elTop = Number.isNaN(top) ? this.el.offsetTop : top;
        const elLeft = Number.isNaN(left) ? this.el.offsetLeft : left;
        const rect = {
            top: elTop,
            left: elLeft,
            width: this.el.clientWidth,
            height: this.el.clientHeight,
            right: NaN,
            bottom: NaN,
            y: elTop,
            x: elLeft,
        };
        return {
            ...rect,
            toJSON: () => JSON.stringify(rect),
        };
    }
    setRect({ style }, offset) {
        const { top, left, width, height } = this.getRect(offset);
        style.top = tuiPx(top);
        style.left = tuiPx(left);
        style.width = tuiPx(width);
        style.height = tuiPx(height);
    }
    setPosition(element, [left]) {
        if (!Number.isNaN(left)) {
            element.style.setProperty('position', 'fixed');
            return;
        }
        const { style } = element;
        const rect = element.getBoundingClientRect();
        const host = this.el.getBoundingClientRect();
        style.removeProperty('position');
        style.top = tuiPx(rect.top - host.top + this.el.offsetTop);
        style.left = tuiPx(rect.left - host.left + this.el.offsetLeft);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTileService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTileService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTileService, decorators: [{
            type: Injectable
        }] });

class TuiTile {
    constructor() {
        this.service = inject(TuiTileService);
        this.tiles = inject(TuiTilesComponent);
        this.dragged = signal(false);
        this.width = 1;
        this.height = 1;
        this.element = tuiInjectElement();
    }
    onDrag(offset) {
        const dragged = !Number.isNaN(offset[0]);
        /**
         * TODO: should be this.dragged.set(this.dragged() || dragged);
         * but transitionend doesn't work like that for some unknown reason
         * due to a conflict with parent change detection
         */
        this.dragged.set(dragged);
        this.tiles.element.set(dragged ? this.element : null);
        this.service.setOffset(offset);
    }
    ngAfterViewInit() {
        if (this.wrapper) {
            this.service.init(this.wrapper.nativeElement);
        }
    }
    ngOnDestroy() {
        if (this.tiles.element() === this.element) {
            this.tiles.element.set(null);
        }
    }
    get column() {
        return `span var(--tui-width, ${this.width})`;
    }
    get row() {
        return `span var(--tui-height, ${this.height})`;
    }
    onEnter() {
        this.tiles.rearrange(this.element);
    }
    onTransitionEnd() {
        this.dragged.set(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTile, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTile, isStandalone: true, selector: "tui-tile", inputs: { width: "width", height: "height" }, host: { listeners: { "pointerenter": "onEnter()" }, properties: { "class._dragged": "dragged()", "style.gridColumn": "column", "style.gridRow": "row" } }, providers: [TuiTileService], viewQueries: [{ propertyName: "wrapper", first: true, predicate: ["wrapper"], descendants: true }], ngImport: i0, template: "<div\n    #wrapper\n    class=\"t-wrapper\"\n    (transitionend.self)=\"onTransitionEnd()\"\n>\n    <ng-content />\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTile, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-tile', changeDetection: ChangeDetectionStrategy.OnPush, providers: [TuiTileService], host: {
                        '[class._dragged]': 'dragged()',
                        '[style.gridColumn]': 'column',
                        '[style.gridRow]': 'row',
                        '(pointerenter)': 'onEnter()',
                    }, template: "<div\n    #wrapper\n    class=\"t-wrapper\"\n    (transitionend.self)=\"onTransitionEnd()\"\n>\n    <ng-content />\n</div>\n" }]
        }], propDecorators: { wrapper: [{
                type: ViewChild,
                args: ['wrapper']
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }] } });

function isInteracting(x = NaN) {
    return !Number.isNaN(x) || !Number.isNaN(this['x']);
}
function isDragging() {
    return !Number.isNaN(this['x']);
}
class TuiTileHandle {
    constructor() {
        this.tile = inject(TuiTile);
        this.x = NaN;
        this.y = NaN;
    }
    onPointer(x = NaN, y = NaN) {
        const { left, top } = this.tile.element.getBoundingClientRect();
        this.x = x - left;
        this.y = y - top;
        this.tile.onDrag([NaN, NaN]);
    }
    onMove(x, y) {
        this.tile.onDrag([x - this.x, y - this.y]);
    }
    onStart(event) {
        const target = tuiGetActualTarget(event);
        const { x, y, pointerId } = event;
        if (tuiIsElement(target)) {
            target.releasePointerCapture(pointerId);
        }
        this.onPointer(x, y);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTileHandle, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTileHandle, isStandalone: true, selector: "[tuiTileHandle]", host: { listeners: { "pointerdown.silent.prevent": "onStart($event)", "document:pointerup.silent": "onPointer()", "document:pointermove.silent": "onMove($event.x, $event.y)" }, properties: { "style.touchAction": "\"none\"", "style.userSelect": "\"none\"" } }, ngImport: i0 }); }
}
__decorate([
    shouldCall(isInteracting)
], TuiTileHandle.prototype, "onPointer", null);
__decorate([
    shouldCall(isDragging)
], TuiTileHandle.prototype, "onMove", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTileHandle, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTileHandle]',
                    host: {
                        '[style.touchAction]': '"none"',
                        '[style.userSelect]': '"none"',
                        '(pointerdown.silent.prevent)': 'onStart($event)',
                        '(document:pointerup.silent)': 'onPointer()',
                        '(document:pointermove.silent)': 'onMove($event.x, $event.y)',
                    },
                }]
        }], propDecorators: { onPointer: [], onMove: [] } });

const TuiTiles = [TuiTilesComponent, TuiTile, TuiTileHandle];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiTile, TuiTileHandle, TuiTileService, TuiTiles, TuiTilesComponent };
//# sourceMappingURL=taiga-ui-kit-components-tiles.mjs.map
