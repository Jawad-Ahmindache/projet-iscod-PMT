import { __decorate } from "tslib";
import { AsyncPipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, inject, Input, Output, TemplateRef, } from '@angular/core';
import { WaIntersectionObserver } from '@ng-web-apis/intersection-observer';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { TuiPan } from '@taiga-ui/cdk/directives/pan';
import { TUI_SWIPE_OPTIONS, TuiSwipe } from '@taiga-ui/cdk/directives/swipe';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiClamp } from '@taiga-ui/cdk/utils/math';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiCarouselDirective } from './carousel.directive';
import { TuiCarouselAutoscroll } from './carousel-autoscroll.directive';
import { TuiCarouselScroll } from './carousel-scroll.directive';
import * as i0 from "@angular/core";
import * as i1 from "./carousel.directive";
import * as i2 from "@ng-web-apis/intersection-observer";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiCarouselComponent, isStandalone: true, selector: "tui-carousel", inputs: { draggable: "draggable", itemsCount: "itemsCount", indexSetter: ["index", "indexSetter"] }, outputs: { indexChange: "indexChange" }, host: { listeners: { "touchstart": "onTransitioned(false)", "touchend": "onTransitioned(true)", "mousedown": "onTransitioned(false)", "document:mouseup.silent": "onTransitioned(true)" }, properties: { "class._transitioned": "transitioned", "class._draggable": "draggable" } }, providers: [{ provide: TUI_SWIPE_OPTIONS, useValue: { timeout: 200, threshold: 30 } }], queries: [{ propertyName: "items", predicate: TuiItem, read: TemplateRef }], hostDirectives: [{ directive: i1.TuiCarouselDirective, inputs: ["duration", "duration"] }], ngImport: i0, template: "<ng-container *ngIf=\"items.changes | async\" />\n<div\n    class=\"t-scroller\"\n    (tuiCarouselScroll)=\"onScroll($event)\"\n>\n    <div\n        waIntersectionObserver\n        waIntersectionThreshold=\"0.5\"\n        class=\"t-wrapper\"\n    >\n        <div\n            class=\"t-items\"\n            [style.transform]=\"transform\"\n            (tuiCarouselAutoscroll)=\"onAutoscroll()\"\n            (tuiPan)=\"onPan($event[0])\"\n            (tuiSwipe)=\"onSwipe($event.direction)\"\n        >\n            <fieldset\n                *ngFor=\"let item of items; let i = index\"\n                class=\"t-item\"\n                [disabled]=\"isDisabled(i)\"\n                [style]=\"getStyle(itemsCount)\"\n                (waIntersectionObservee)=\"$event[0] && onIntersection($event[0], i)\"\n            >\n                <ng-container [ngTemplateOutlet]=\"item\" />\n            </fieldset>\n        </div>\n    </div>\n</div>\n", styles: [":host{position:relative;display:block;overflow:hidden}:host._draggable{-webkit-user-select:none;user-select:none}:host._draggable:hover{cursor:grab}:host._draggable:active{cursor:grabbing}.t-items{display:flex}:host._transitioned .t-items{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}::ng-deep [tuiCarouselButtons] [tuiIconButton]{border-radius:100%}.t-item{display:flex;flex-direction:column;justify-content:center;padding:var(--tui-carousel-padding, 0 1.25rem);flex:1;min-inline-size:100%;max-inline-size:100%;box-sizing:border-box;border:none;margin:0}.t-wrapper{position:sticky;left:0;right:0;min-inline-size:100%;overflow:hidden}.t-scroller{scrollbar-width:none;-ms-overflow-style:none;display:flex;overflow:auto;overscroll-behavior-x:none;touch-action:pan-y}.t-scroller::-webkit-scrollbar,.t-scroller::-webkit-scrollbar-thumb{display:none}.t-scroller:before,.t-scroller:after{content:\"\";display:block;min-inline-size:1rem}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: TuiCarouselAutoscroll, selector: "[tuiCarouselAutoscroll]", outputs: ["tuiCarouselAutoscroll"] }, { kind: "directive", type: TuiCarouselScroll, selector: "[tuiCarouselScroll]", outputs: ["tuiCarouselScroll"] }, { kind: "directive", type: TuiPan, selector: "[tuiPan]", outputs: ["tuiPan"] }, { kind: "directive", type: TuiSwipe, selector: "[tuiSwipe]", outputs: ["tuiSwipe"] }, { kind: "directive", type: i2.WaIntersectionObserverDirective, selector: "[waIntersectionObserver]", inputs: ["waIntersectionRootMargin", "waIntersectionThreshold"], exportAs: ["IntersectionObserver"] }, { kind: "directive", type: i2.WaIntersectionObservee, selector: "[waIntersectionObservee]", outputs: ["waIntersectionObservee"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiCarouselComponent.prototype, "getStyle", null);
export { TuiCarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwudGVtcGxhdGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFM0UsT0FBTyxFQUNILHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxHQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDdEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXBELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFP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eUJBQ3ZCO3FCQUNKLFFBQ0s7d0JBQ0YsdUJBQXVCLEVBQUUsY0FBYzt3QkFDdkMsb0JBQW9CLEVBQUUsV0FBVzt3QkFDakMsY0FBYyxFQUFFLHVCQUF1Qjt3QkFDdkMsWUFBWSxFQUFFLHNCQUFzQjt3QkFDcEMsYUFBYSxFQUFFLHVCQUF1Qjt3QkFDdEMsMkJBQTJCLEVBQUUsc0JBQXNCO3FCQUN0RDs4QkFVa0IsS0FBSztzQkFEdkIsZUFBZTt1QkFBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDO2dCQVN0QyxTQUFTO3NCQURmLEtBQUs7Z0JBSUMsVUFBVTtzQkFEaEIsS0FBSztnQkFJVSxXQUFXO3NCQUQxQixNQUFNO2dCQUlJLFdBQVc7c0JBRHJCLEtBQUs7dUJBQUMsT0FBTztnQkF5QkosUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNQaXBlLCBOZ0Zvck9mLCBOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge1F1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGluamVjdCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtXYUludGVyc2VjdGlvbk9ic2VydmVyfSBmcm9tICdAbmctd2ViLWFwaXMvaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcbmltcG9ydCB7RU1QVFlfUVVFUll9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB7VHVpSXRlbX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL2l0ZW0nO1xuaW1wb3J0IHtUdWlQYW59IGZyb20gJ0B0YWlnYS11aS9jZGsvZGlyZWN0aXZlcy9wYW4nO1xuaW1wb3J0IHR5cGUge1R1aVN3aXBlRGlyZWN0aW9ufSBmcm9tICdAdGFpZ2EtdWkvY2RrL2RpcmVjdGl2ZXMvc3dpcGUnO1xuaW1wb3J0IHtUVUlfU1dJUEVfT1BUSU9OUywgVHVpU3dpcGV9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGlyZWN0aXZlcy9zd2lwZSc7XG5pbXBvcnQge1RVSV9JU19NT0JJTEV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdG9rZW5zJztcbmltcG9ydCB7dHVpSW5qZWN0RWxlbWVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuaW1wb3J0IHt0dWlDbGFtcH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9tYXRoJztcbmltcG9ydCB7dHVpUHVyZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcblxuaW1wb3J0IHtUdWlDYXJvdXNlbERpcmVjdGl2ZX0gZnJvbSAnLi9jYXJvdXNlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtUdWlDYXJvdXNlbEF1dG9zY3JvbGx9IGZyb20gJy4vY2Fyb3VzZWwtYXV0b3Njcm9sbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtUdWlDYXJvdXNlbFNjcm9sbH0gZnJvbSAnLi9jYXJvdXNlbC1zY3JvbGwuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3R1aS1jYXJvdXNlbCcsXG4gICAgaW1wb3J0czogW1xuICAgICAgICBBc3luY1BpcGUsXG4gICAgICAgIE5nRm9yT2YsXG4gICAgICAgIE5nSWYsXG4gICAgICAgIE5nVGVtcGxhdGVPdXRsZXQsXG4gICAgICAgIFR1aUNhcm91c2VsQXV0b3Njcm9sbCxcbiAgICAgICAgVHVpQ2Fyb3VzZWxTY3JvbGwsXG4gICAgICAgIFR1aVBhbixcbiAgICAgICAgVHVpU3dpcGUsXG4gICAgICAgIFdhSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsXG4gICAgXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwudGVtcGxhdGUuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwuc3R5bGUubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBUVUlfU1dJUEVfT1BUSU9OUywgdXNlVmFsdWU6IHt0aW1lb3V0OiAyMDAsIHRocmVzaG9sZDogMzB9fV0sXG4gICAgaG9zdERpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlOiBUdWlDYXJvdXNlbERpcmVjdGl2ZSxcbiAgICAgICAgICAgIGlucHV0czogWydkdXJhdGlvbiddLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLl90cmFuc2l0aW9uZWRdJzogJ3RyYW5zaXRpb25lZCcsXG4gICAgICAgICdbY2xhc3MuX2RyYWdnYWJsZV0nOiAnZHJhZ2dhYmxlJyxcbiAgICAgICAgJyh0b3VjaHN0YXJ0KSc6ICdvblRyYW5zaXRpb25lZChmYWxzZSknLFxuICAgICAgICAnKHRvdWNoZW5kKSc6ICdvblRyYW5zaXRpb25lZCh0cnVlKScsXG4gICAgICAgICcobW91c2Vkb3duKSc6ICdvblRyYW5zaXRpb25lZChmYWxzZSknLFxuICAgICAgICAnKGRvY3VtZW50Om1vdXNldXAuc2lsZW50KSc6ICdvblRyYW5zaXRpb25lZCh0cnVlKScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpQ2Fyb3VzZWxDb21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNNb2JpbGUgPSBpbmplY3QoVFVJX0lTX01PQklMRSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXJlY3RpdmUgPSBpbmplY3QoVHVpQ2Fyb3VzZWxEaXJlY3RpdmUpO1xuICAgIHByaXZhdGUgdHJhbnNsYXRlID0gMDtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oVHVpSXRlbSwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaXRlbXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4+ID1cbiAgICAgICAgRU1QVFlfUVVFUlk7XG5cbiAgICBwcm90ZWN0ZWQgdHJhbnNpdGlvbmVkID0gdHJ1ZTtcblxuICAgIHByb3RlY3RlZCBpbmRleCA9IDA7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkcmFnZ2FibGUgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGl0ZW1zQ291bnQgPSAxO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IGluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBASW5wdXQoJ2luZGV4JylcbiAgICBwdWJsaWMgc2V0IGluZGV4U2V0dGVyKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZS5kdXJhdGlvbiA9IE5hTjtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmV4dCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMgJiYgdGhpcy5pbmRleCA9PT0gdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLml0ZW1zQ291bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlSW5kZXgodGhpcy5pbmRleCArIDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmV2KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUluZGV4KHRoaXMuaW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHRyYW5zZm9ybSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy50cmFuc2l0aW9uZWQgPyB0aGlzLmNvbXB1dGVkVHJhbnNsYXRlIDogdGhpcy50cmFuc2xhdGU7XG5cbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKCR7MTAwICogeH0lKWA7XG4gICAgfVxuXG4gICAgQHR1aVB1cmVcbiAgICBwcm90ZWN0ZWQgZ2V0U3R5bGUoaXRlbXNDb3VudDogbnVtYmVyKTogUGFydGlhbDxDU1NTdHlsZURlY2xhcmF0aW9uPiB7XG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSBgJHsxMDAgLyBpdGVtc0NvdW50fSVgO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmbGV4QmFzaXM6IHBlcmNlbnQsXG4gICAgICAgICAgICBtaW5XaWR0aDogcGVyY2VudCxcbiAgICAgICAgICAgIG1heFdpZHRoOiBwZXJjZW50LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblRyYW5zaXRpb25lZCh0cmFuc2l0aW9uZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uZWQgPSB0cmFuc2l0aW9uZWQ7XG5cbiAgICAgICAgaWYgKCF0cmFuc2l0aW9uZWQpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlID0gdGhpcy5jb21wdXRlZFRyYW5zbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc0Rpc2FibGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGluZGV4IDwgdGhpcy5pbmRleCB8fCBpbmRleCA+IHRoaXMuaW5kZXggKyB0aGlzLml0ZW1zQ291bnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSW50ZXJzZWN0aW9uKFxuICAgICAgICB7aW50ZXJzZWN0aW9uUmF0aW99OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAoaW50ZXJzZWN0aW9uUmF0aW8gJiYgaW50ZXJzZWN0aW9uUmF0aW8gPj0gMC41ICYmICF0aGlzLnRyYW5zaXRpb25lZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJbmRleCh0aGlzLmluZGV4IDwgaW5kZXggPyBpbmRleCAtIHRoaXMuaXRlbXNDb3VudCArIDEgOiBpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25TY3JvbGwoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25QYW4oeDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb21wdXRlZERyYWdnYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWluID0gMSAtIHRoaXMuaXRlbXMubGVuZ3RoIC8gdGhpcy5pdGVtc0NvdW50O1xuXG4gICAgICAgIHRoaXMudHJhbnNsYXRlID0gdHVpQ2xhbXAoeCAvIHRoaXMuZWwuY2xpZW50V2lkdGggKyB0aGlzLnRyYW5zbGF0ZSwgbWluLCAwKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Td2lwZShkaXJlY3Rpb246IFR1aVN3aXBlRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLnByZXYoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkF1dG9zY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5kZXgodGhpcy5pbmRleCA9PT0gdGhpcy5pdGVtcy5sZW5ndGggLSAxID8gMCA6IHRoaXMuaW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBjb21wdXRlZFRyYW5zbGF0ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gLXRoaXMuaW5kZXggLyB0aGlzLml0ZW1zQ291bnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgY29tcHV0ZWREcmFnZ2FibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTW9iaWxlIHx8IHRoaXMuZHJhZ2dhYmxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmluZGV4ID0gdHVpQ2xhbXAoaW5kZXgsIDAsIHRoaXMuaXRlbXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuaW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1zLmNoYW5nZXMgfCBhc3luY1wiIC8+XG48ZGl2XG4gICAgY2xhc3M9XCJ0LXNjcm9sbGVyXCJcbiAgICAodHVpQ2Fyb3VzZWxTY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiXG4+XG4gICAgPGRpdlxuICAgICAgICB3YUludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICAgIHdhSW50ZXJzZWN0aW9uVGhyZXNob2xkPVwiMC41XCJcbiAgICAgICAgY2xhc3M9XCJ0LXdyYXBwZXJcIlxuICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0LWl0ZW1zXCJcbiAgICAgICAgICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwidHJhbnNmb3JtXCJcbiAgICAgICAgICAgICh0dWlDYXJvdXNlbEF1dG9zY3JvbGwpPVwib25BdXRvc2Nyb2xsKClcIlxuICAgICAgICAgICAgKHR1aVBhbik9XCJvblBhbigkZXZlbnRbMF0pXCJcbiAgICAgICAgICAgICh0dWlTd2lwZSk9XCJvblN3aXBlKCRldmVudC5kaXJlY3Rpb24pXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGZpZWxkc2V0XG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidC1pdGVtXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZChpKVwiXG4gICAgICAgICAgICAgICAgW3N0eWxlXT1cImdldFN0eWxlKGl0ZW1zQ291bnQpXCJcbiAgICAgICAgICAgICAgICAod2FJbnRlcnNlY3Rpb25PYnNlcnZlZSk9XCIkZXZlbnRbMF0gJiYgb25JbnRlcnNlY3Rpb24oJGV2ZW50WzBdLCBpKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtXCIgLz5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=