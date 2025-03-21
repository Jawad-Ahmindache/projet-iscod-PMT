import * as i0 from '@angular/core';
import { inject, ChangeDetectorRef, Component, ChangeDetectionStrategy, Directive, Input } from '@angular/core';
import { WaResizeObserver } from '@ng-web-apis/resize-observer';
import { tuiInjectElement, tuiGetActualTarget } from '@taiga-ui/cdk/utils/dom';

class TuiSwipeActions {
    constructor() {
        this.actionsWidth = 0;
        this.cdr = inject(ChangeDetectorRef);
    }
    onResize({ target }) {
        this.actionsWidth = target.clientWidth;
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSwipeActions, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSwipeActions, isStandalone: true, selector: "tui-swipe-actions", host: { properties: { "style.--t-actions-width": "actionsWidth" } }, ngImport: i0, template: "<div class=\"t-content\">\n    <ng-content />\n</div>\n\n<div\n    class=\"t-actions\"\n    (waResizeObserver)=\"$event[0] && onResize($event[0])\"\n>\n    <ng-content select=\"[tuiSwipeAction]\" />\n</div>\n", styles: [":host{scrollbar-width:none;-ms-overflow-style:none;--tui-action-gap: 24;--tui-actions-padding: .5rem;--tui-item-size: 44;display:flex;inline-size:-webkit-fill-available;inline-size:-moz-available;inline-size:stretch;align-items:center;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory;perspective:1px;perspective-origin:calc(100% + calc(1px * var(--tui-item-size) / 2) + var(--tui-actions-padding))}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}.t-content{scroll-snap-align:start;flex-shrink:0;inline-size:100%}.t-actions{display:flex;gap:calc(1px * var(--tui-action-gap));padding:0 1rem 0 var(--tui-actions-padding);scroll-snap-align:start;align-items:center;transform-style:preserve-3d}.t-actions:empty{display:none}::ng-deep .t-actions>*:nth-child(2){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 1 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (2 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(3){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 2 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (3 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(4){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 3 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (4 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(5){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 4 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (5 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(6){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 5 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (6 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}@media (hover: hover) and (pointer: fine){.t-actions{display:none}}\n"], dependencies: [{ kind: "directive", type: WaResizeObserver, selector: "[waResizeObserver]", inputs: ["box"], outputs: ["waResizeObserver"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSwipeActions, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-swipe-actions', imports: [WaResizeObserver], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[style.--t-actions-width]': 'actionsWidth',
                    }, template: "<div class=\"t-content\">\n    <ng-content />\n</div>\n\n<div\n    class=\"t-actions\"\n    (waResizeObserver)=\"$event[0] && onResize($event[0])\"\n>\n    <ng-content select=\"[tuiSwipeAction]\" />\n</div>\n", styles: [":host{scrollbar-width:none;-ms-overflow-style:none;--tui-action-gap: 24;--tui-actions-padding: .5rem;--tui-item-size: 44;display:flex;inline-size:-webkit-fill-available;inline-size:-moz-available;inline-size:stretch;align-items:center;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory;perspective:1px;perspective-origin:calc(100% + calc(1px * var(--tui-item-size) / 2) + var(--tui-actions-padding))}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}.t-content{scroll-snap-align:start;flex-shrink:0;inline-size:100%}.t-actions{display:flex;gap:calc(1px * var(--tui-action-gap));padding:0 1rem 0 var(--tui-actions-padding);scroll-snap-align:start;align-items:center;transform-style:preserve-3d}.t-actions:empty{display:none}::ng-deep .t-actions>*:nth-child(2){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 1 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (2 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(3){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 2 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (3 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(4){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 3 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (4 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(5){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 4 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (5 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}::ng-deep .t-actions>*:nth-child(6){--t-distance: calc(var(--tui-item-size) + var(--tui-action-gap)) * 5 ;--t-factor: calc((var(--t-actions-width) - var(--t-distance)) / var(--t-actions-width));--t-scale: calc(1 / var(--t-factor));--t-translate: calc(1px * (1 - 1 / var(--t-factor)));transform:translate3d(calc(calc((-100% - calc(1px * var(--tui-action-gap))) * (6 - 1)) / var(--t-scale)),0,var(--t-translate));scale:var(--t-scale)}@media (hover: hover) and (pointer: fine){.t-actions{display:none}}\n"] }]
        }] });

class TuiSwipeActionsAutoClose {
    constructor() {
        this.el = tuiInjectElement();
        this.autoClose = true;
    }
    handleEvent(event) {
        if (this.autoClose !== false && !this.el.contains(tuiGetActualTarget(event))) {
            this.el.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSwipeActionsAutoClose, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiSwipeActionsAutoClose, isStandalone: true, selector: "tui-swipe-actions[autoClose]", inputs: { autoClose: "autoClose" }, host: { listeners: { "document:pointerdown.silent": "handleEvent($event)", "document:focusin.silent": "handleEvent($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSwipeActionsAutoClose, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-swipe-actions[autoClose]',
                    host: {
                        '(document:pointerdown.silent)': 'handleEvent($event)',
                        '(document:focusin.silent)': 'handleEvent($event)',
                    },
                }]
        }], propDecorators: { autoClose: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiSwipeActions, TuiSwipeActionsAutoClose };
//# sourceMappingURL=taiga-ui-addon-mobile-components-swipe-action.mjs.map
