import { NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from '@angular/core';
import { Directive, inject, ChangeDetectorRef, DestroyRef, TemplateRef, Component, ChangeDetectionStrategy, ViewChild, ContentChild, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiParentAnimation } from '@taiga-ui/core/animations';
import { TuiLoader } from '@taiga-ui/core/components/loader';
import { timer } from 'rxjs';

class TuiExpandContent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiExpandContent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiExpandContent, isStandalone: true, selector: "[tuiExpandContent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiExpandContent, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiExpandContent]',
                }]
        }] });

const State = {
    Idle: 0,
    Loading: 1,
    Prepared: 2,
    Animated: 3,
};
const LOADER_HEIGHT = 48;
/**
 * An event indicating that async data for expand has finished loading.
 * Dispatch to finish loading states for {@link TuiExpandComponent}.
 */
const TUI_EXPAND_LOADED = 'tui-expand-loaded';
class TuiExpandComponent {
    constructor() {
        this.cdr = inject(ChangeDetectorRef);
        this.destroyRef = inject(DestroyRef);
        this.state = State.Idle;
        this.content = null;
        this.expanded = null;
        this.async = false;
    }
    set expandedSetter(expanded) {
        if (this.expanded === null) {
            this.expanded = expanded;
            return;
        }
        if (this.state !== State.Idle) {
            this.expanded = expanded;
            this.state = State.Animated;
            return;
        }
        this.expanded = expanded;
        this.retrigger(this.async && expanded ? State.Loading : State.Animated);
    }
    get contentVisible() {
        return this.expanded || this.state !== State.Idle;
    }
    get overflow() {
        return this.state !== State.Idle;
    }
    get loading() {
        return !!this.expanded && this.async && this.state === State.Loading;
    }
    get height() {
        const { expanded, state, contentWrapper } = this;
        if ((expanded && state === State.Prepared) ||
            (!expanded && state === State.Animated)) {
            return 0;
        }
        if (contentWrapper &&
            ((!expanded && state === State.Prepared) ||
                (expanded && state === State.Animated))) {
            return contentWrapper.nativeElement.offsetHeight;
        }
        if (contentWrapper && expanded && state === State.Loading) {
            return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
        }
        return null;
    }
    onTransitionEnd({ propertyName, pseudoElement }) {
        if (propertyName === 'opacity' &&
            !pseudoElement &&
            this.state === State.Animated) {
            this.state = State.Idle;
        }
    }
    onExpandLoaded(event) {
        event.stopPropagation();
        if (this.state === State.Loading) {
            this.retrigger(State.Animated);
        }
    }
    retrigger(state) {
        this.state = State.Prepared;
        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            // We need delay to re-trigger CSS height transition from the correct number
            if (this.state !== State.Prepared) {
                return;
            }
            this.state = state;
            this.cdr.markForCheck();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiExpandComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiExpandComponent, isStandalone: true, selector: "tui-expand", inputs: { async: "async", expandedSetter: ["expanded", "expandedSetter"] }, host: { listeners: { "transitionend.self": "onTransitionEnd($event)", "tui-expand-loaded": "onExpandLoaded($event)" }, properties: { "style.height.px": "height", "class._loading": "loading", "class._overflow": "overflow", "class._expanded": "expanded", "attr.aria-expanded": "expanded" } }, queries: [{ propertyName: "content", first: true, predicate: TuiExpandContent, descendants: true, read: TemplateRef }], viewQueries: [{ propertyName: "contentWrapper", first: true, predicate: ["wrapper"], descendants: true }], ngImport: i0, template: "<div\n    #wrapper\n    class=\"t-wrapper\"\n    @tuiParentAnimation\n    [@.disabled]=\"overflow\"\n>\n    <ng-container *ngIf=\"contentVisible\">\n        <ng-content />\n        <tui-loader\n            *ngIf=\"async; else content\"\n            size=\"l\"\n            [overlay]=\"true\"\n            [showLoader]=\"loading\"\n        >\n            <ng-container [ngTemplateOutlet]=\"content\" />\n        </tui-loader>\n    </ng-container>\n</div>\n", styles: [":host{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}:host._overflow{overflow:hidden}:host._expanded{opacity:1}:host._loading{opacity:.99}.t-wrapper:before,.t-wrapper:after{content:\"\";display:table}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TuiLoader, selector: "tui-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }], animations: [tuiParentAnimation], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiExpandComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-expand', imports: [NgIf, NgTemplateOutlet, TuiLoader], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiParentAnimation], host: {
                        '[style.height.px]': 'height',
                        '[class._loading]': 'loading',
                        '[class._overflow]': 'overflow',
                        '[class._expanded]': 'expanded',
                        '[attr.aria-expanded]': 'expanded',
                        '(transitionend.self)': 'onTransitionEnd($event)',
                        [`(${TUI_EXPAND_LOADED})`]: 'onExpandLoaded($event)',
                    }, template: "<div\n    #wrapper\n    class=\"t-wrapper\"\n    @tuiParentAnimation\n    [@.disabled]=\"overflow\"\n>\n    <ng-container *ngIf=\"contentVisible\">\n        <ng-content />\n        <tui-loader\n            *ngIf=\"async; else content\"\n            size=\"l\"\n            [overlay]=\"true\"\n            [showLoader]=\"loading\"\n        >\n            <ng-container [ngTemplateOutlet]=\"content\" />\n        </tui-loader>\n    </ng-container>\n</div>\n", styles: [":host{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}:host._overflow{overflow:hidden}:host._expanded{opacity:1}:host._loading{opacity:.99}.t-wrapper:before,.t-wrapper:after{content:\"\";display:table}\n"] }]
        }], propDecorators: { contentWrapper: [{
                type: ViewChild,
                args: ['wrapper']
            }], content: [{
                type: ContentChild,
                args: [TuiExpandContent, { read: TemplateRef }]
            }], async: [{
                type: Input
            }], expandedSetter: [{
                type: Input,
                args: ['expanded']
            }] } });

const TuiExpand = [TuiExpandComponent, TuiExpandContent];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_EXPAND_LOADED, TuiExpand, TuiExpandComponent, TuiExpandContent };
//# sourceMappingURL=taiga-ui-core-components-expand.mjs.map
