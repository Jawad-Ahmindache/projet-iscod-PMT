import { AsyncPipe, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, ChangeDetectorRef, DestroyRef, EventEmitter, ElementRef, Component, ChangeDetectionStrategy, ContentChildren, forwardRef, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLinkActive } from '@angular/router';
import { tuiInjectElement, tuiIsElement } from '@taiga-ui/cdk/utils/dom';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TUI_ANIMATIONS_SPEED, TUI_COMMON_ICONS } from '@taiga-ui/core/tokens';
import { delay, EMPTY, filter } from 'rxjs';
import { __decorate } from 'tslib';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiQueryListChanges } from '@taiga-ui/cdk/observables';
import { TuiScrollService } from '@taiga-ui/cdk/services';
import { tuiMoveFocus } from '@taiga-ui/cdk/utils/focus';
import { tuiGetOriginalArrayFromQueryList, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';

class TuiStepperComponent {
    constructor() {
        this.steps = EMPTY_QUERY;
        this.cdr = inject(ChangeDetectorRef);
        this.el = tuiInjectElement();
        this.scrollService = inject(TuiScrollService);
        this.speed = inject(TUI_ANIMATIONS_SPEED);
        this.destroyRef = inject(DestroyRef);
        this.activeItemIndex = 0;
        this.$ = inject(ResizeObserverService, { self: true })
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.scrollIntoView(this.activeItemIndex));
        this.orientation = 'horizontal';
        this.activeItemIndexChange = new EventEmitter();
    }
    set activeIndex(index) {
        if (this.steps.get(index)?.nativeElement) {
            this.activeItemIndex = index;
            this.scrollIntoView(index);
        }
    }
    indexOf(step) {
        const index = tuiGetOriginalArrayFromQueryList(this.steps).findIndex(({ nativeElement }) => nativeElement === step);
        return index < 0 ? NaN : index;
    }
    isActive(index) {
        return index === this.activeItemIndex;
    }
    activate(index) {
        if (this.activeItemIndex === index) {
            return;
        }
        this.activeItemIndex = index;
        this.activeItemIndexChange.emit(index);
        this.cdr.markForCheck();
        this.scrollIntoView(index);
    }
    get changes$() {
        // Delay is required to trigger change detection after steps are rendered,
        // so they can update their "active" status
        return tuiQueryListChanges(this.steps).pipe(delay(0));
    }
    onHorizontal(event, step) {
        if (this.orientation !== 'horizontal' || !event.target) {
            return;
        }
        event.preventDefault();
        this.moveFocus(event.target, step);
    }
    onVertical(event, step) {
        if (this.orientation !== 'vertical' || !event.target) {
            return;
        }
        event.preventDefault();
        this.moveFocus(event.target, step);
    }
    moveFocus(current, step) {
        if (!tuiIsElement(current)) {
            return;
        }
        const stepElements = this.steps.toArray().map(({ nativeElement }) => nativeElement);
        const index = stepElements.findIndex((element) => element === current);
        tuiMoveFocus(index, stepElements, step);
    }
    scrollIntoView(index) {
        const step = this.steps.get(index)?.nativeElement;
        if (!step) {
            return;
        }
        const { clientHeight, clientWidth, offsetTop, offsetLeft } = this.el;
        const { offsetHeight, offsetWidth, offsetTop: stepOffsetTop, offsetLeft: stepOffsetLeft, } = step;
        const top = stepOffsetTop - offsetTop - clientHeight / 2 + offsetHeight / 2;
        const left = stepOffsetLeft - offsetLeft - clientWidth / 2 + offsetWidth / 2;
        this.scrollService
            .scroll$(this.el, Math.max(0, top), Math.max(0, left), tuiGetDuration(this.speed) / 3)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStepperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiStepperComponent, isStandalone: true, selector: "tui-stepper, nav[tuiStepper]", inputs: { orientation: "orientation", activeIndex: ["activeItemIndex", "activeIndex"] }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, host: { listeners: { "keydown.arrowRight": "onHorizontal($event, 1)", "keydown.arrowLeft": "onHorizontal($event, -1)", "keydown.arrowDown": "onVertical($event, 1)", "keydown.arrowUp": "onVertical($event, -1)" }, properties: { "attr.data-orientation": "orientation" } }, providers: [ResizeObserverService], queries: [{ propertyName: "steps", predicate: i0.forwardRef(function () { return TuiStep; }), read: ElementRef }], ngImport: i0, template: "<ng-container *ngIf=\"changes$ | async\" />\n<ng-content />\n", styles: [":host{scrollbar-width:none;-ms-overflow-style:none;display:flex;scroll-behavior:var(--tui-scroll-behavior);overflow:auto;counter-reset:steps}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host[data-orientation=vertical]{flex-direction:column}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiStepperComponent.prototype, "changes$", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStepperComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-stepper, nav[tuiStepper]', imports: [AsyncPipe, NgIf], changeDetection: ChangeDetectionStrategy.OnPush, providers: [ResizeObserverService], host: {
                        '[attr.data-orientation]': 'orientation',
                        '(keydown.arrowRight)': 'onHorizontal($event, 1)',
                        '(keydown.arrowLeft)': 'onHorizontal($event, -1)',
                        '(keydown.arrowDown)': 'onVertical($event, 1)',
                        '(keydown.arrowUp)': 'onVertical($event, -1)',
                    }, template: "<ng-container *ngIf=\"changes$ | async\" />\n<ng-content />\n", styles: [":host{scrollbar-width:none;-ms-overflow-style:none;display:flex;scroll-behavior:var(--tui-scroll-behavior);overflow:auto;counter-reset:steps}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host[data-orientation=vertical]{flex-direction:column}\n"] }]
        }], propDecorators: { steps: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiStep), { read: ElementRef }]
            }], orientation: [{
                type: Input
            }], activeItemIndexChange: [{
                type: Output
            }], activeIndex: [{
                type: Input,
                args: ['activeItemIndex']
            }], changes$: [] } });

class TuiStep {
    constructor() {
        this.stepper = inject(TuiStepperComponent);
        this.el = tuiInjectElement();
        this.$ = (inject(RouterLinkActive, { optional: true })?.isActiveChange.asObservable() ?? EMPTY)
            .pipe(filter(Boolean), takeUntilDestroyed())
            .subscribe(() => this.activate());
        this.focusVisible = false;
        this.icons = inject(TUI_COMMON_ICONS);
        this.stepState = 'normal';
        this.icon = '';
    }
    get isActive() {
        return this.stepper.isActive(this.index);
    }
    get isVertical() {
        return this.stepper.orientation === 'vertical';
    }
    get tabIndex() {
        return this.isActive ? 0 : -1;
    }
    get index() {
        return this.stepper.indexOf(this.el);
    }
    activate() {
        this.stepper.activate(this.index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStep, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiStep, isStandalone: true, selector: "button[tuiStep], a[tuiStep]:not([routerLink]), a[tuiStep][routerLink][routerLinkActive]", inputs: { stepState: "stepState", icon: "icon" }, host: { listeners: { "click": "activate()" }, properties: { "attr.data-state": "stepState", "class._vertical": "isVertical", "class._focus-visible": "focusVisible", "class._active": "isActive", "tabIndex": "tabIndex" } }, ngImport: i0, template: "<tui-icon\n    *ngIf=\"icon\"\n    class=\"t-marker t-marker_custom\"\n    [icon]=\"icon\"\n/>\n<tui-icon\n    class=\"t-marker t-marker_error\"\n    [icon]=\"icons.error\"\n/>\n<tui-icon\n    class=\"t-marker t-marker_pass\"\n    [icon]=\"icons.check\"\n/>\n<div class=\"t-marker t-marker_index\"></div>\n<ng-content />\n", styles: [":host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;flex-shrink:0;color:var(--tui-text-action);margin-right:1.5rem;outline:none;cursor:pointer;counter-increment:steps;text-align:start}:host:disabled{pointer-events:none;color:var(--tui-text-secondary)}:host:hover{color:var(--tui-text-action-hover)}:host:not(:last-of-type)._vertical{margin-bottom:1.25rem}:host._active,:host._active:hover{color:var(--tui-text-primary);cursor:default}:host:focus-visible:before{content:\"\";position:absolute;left:2.75rem;right:0;top:50%;block-size:1.5rem;margin-top:-.75rem;background:var(--tui-service-selection-background)}.t-marker{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;inline-size:2rem;block-size:2rem;border-radius:100%;margin-right:.75rem;flex-shrink:0;align-items:center;align-self:flex-start;justify-content:center;background:var(--tui-background-neutral-1);color:var(--tui-text-action);border:.5rem solid transparent;box-sizing:border-box}:host:disabled .t-marker{background:var(--tui-background-neutral-1);color:var(--tui-text-secondary)}.t-marker_index:before{content:counter(steps)}:host:hover .t-marker_index{color:var(--tui-text-action-hover);background:var(--tui-background-neutral-1-hover)}:host._active .t-marker_index{color:var(--tui-text-primary-on-accent-1);background:var(--tui-background-accent-1)}:host:not([data-state=normal]):not(._active) .t-marker_index,:host:not(._active) .t-marker_custom~.t-marker_index{display:none}.t-marker_error{background:var(--tui-status-negative-pale);color:var(--tui-status-negative)}:host:hover .t-marker_error{background:var(--tui-status-negative-pale-hover);color:var(--tui-status-negative)}:host:not([data-state=error]) .t-marker_error,:host._active .t-marker_error{display:none}:host:not([data-state=pass]) .t-marker_pass,:host._active .t-marker_pass{display:none}:host:not([data-state=normal]) .t-marker_custom,:host._active .t-marker_custom{display:none}:host:hover .t-marker_custom{color:var(--tui-text-action-hover);background:var(--tui-background-neutral-1-hover)}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStep, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'button[tuiStep], a[tuiStep]:not([routerLink]), a[tuiStep][routerLink][routerLinkActive]', imports: [NgIf, TuiIcon], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[attr.data-state]': 'stepState',
                        '[class._vertical]': 'isVertical',
                        '[class._focus-visible]': 'focusVisible',
                        '[class._active]': 'isActive',
                        '[tabIndex]': 'tabIndex',
                        '(click)': 'activate()',
                    }, template: "<tui-icon\n    *ngIf=\"icon\"\n    class=\"t-marker t-marker_custom\"\n    [icon]=\"icon\"\n/>\n<tui-icon\n    class=\"t-marker t-marker_error\"\n    [icon]=\"icons.error\"\n/>\n<tui-icon\n    class=\"t-marker t-marker_pass\"\n    [icon]=\"icons.check\"\n/>\n<div class=\"t-marker t-marker_index\"></div>\n<ng-content />\n", styles: [":host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;flex-shrink:0;color:var(--tui-text-action);margin-right:1.5rem;outline:none;cursor:pointer;counter-increment:steps;text-align:start}:host:disabled{pointer-events:none;color:var(--tui-text-secondary)}:host:hover{color:var(--tui-text-action-hover)}:host:not(:last-of-type)._vertical{margin-bottom:1.25rem}:host._active,:host._active:hover{color:var(--tui-text-primary);cursor:default}:host:focus-visible:before{content:\"\";position:absolute;left:2.75rem;right:0;top:50%;block-size:1.5rem;margin-top:-.75rem;background:var(--tui-service-selection-background)}.t-marker{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;inline-size:2rem;block-size:2rem;border-radius:100%;margin-right:.75rem;flex-shrink:0;align-items:center;align-self:flex-start;justify-content:center;background:var(--tui-background-neutral-1);color:var(--tui-text-action);border:.5rem solid transparent;box-sizing:border-box}:host:disabled .t-marker{background:var(--tui-background-neutral-1);color:var(--tui-text-secondary)}.t-marker_index:before{content:counter(steps)}:host:hover .t-marker_index{color:var(--tui-text-action-hover);background:var(--tui-background-neutral-1-hover)}:host._active .t-marker_index{color:var(--tui-text-primary-on-accent-1);background:var(--tui-background-accent-1)}:host:not([data-state=normal]):not(._active) .t-marker_index,:host:not(._active) .t-marker_custom~.t-marker_index{display:none}.t-marker_error{background:var(--tui-status-negative-pale);color:var(--tui-status-negative)}:host:hover .t-marker_error{background:var(--tui-status-negative-pale-hover);color:var(--tui-status-negative)}:host:not([data-state=error]) .t-marker_error,:host._active .t-marker_error{display:none}:host:not([data-state=pass]) .t-marker_pass,:host._active .t-marker_pass{display:none}:host:not([data-state=normal]) .t-marker_custom,:host._active .t-marker_custom{display:none}:host:hover .t-marker_custom{color:var(--tui-text-action-hover);background:var(--tui-background-neutral-1-hover)}\n"] }]
        }], propDecorators: { stepState: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

const TuiStepper = [TuiStepperComponent, TuiStep];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiStep, TuiStepper, TuiStepperComponent };
//# sourceMappingURL=taiga-ui-kit-components-stepper.mjs.map
