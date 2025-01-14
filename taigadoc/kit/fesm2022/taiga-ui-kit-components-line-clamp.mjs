import { AsyncPipe } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, inject, Directive, ChangeDetectorRef, NgZone, signal, ElementRef, ViewChild, Input, Output } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { WaResizeObserver } from '@ng-web-apis/resize-observer';
import { tuiZonefree, tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { tuiInjectElement, tuiIsCurrentTarget } from '@taiga-ui/cdk/utils/dom';
import * as i1 from '@taiga-ui/core/directives/hint';
import { TuiHintComponent, TUI_HINT_PROVIDERS, TuiHintDirective, TUI_HINT_COMPONENT, TuiHint } from '@taiga-ui/core/directives/hint';
import { PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { BehaviorSubject, Subject, timer, startWith, pairwise, switchMap, of, filter, map, distinctUntilChanged } from 'rxjs';
import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiFadeIn } from '@taiga-ui/core/animations';
import { TuiPositionAccessor, tuiAsPositionAccessor } from '@taiga-ui/core/classes';

const TUI_LINE_CLAMP_DEFAULT_OPTIONS = {
    showHint: true,
};
/**
 * Default parameters for LineClamp component
 */
const TUI_LINE_CLAMP_OPTIONS = tuiCreateToken(TUI_LINE_CLAMP_DEFAULT_OPTIONS);
function tuiLineClampOptionsProvider(options) {
    return tuiProvideOptions(TUI_LINE_CLAMP_OPTIONS, options, TUI_LINE_CLAMP_DEFAULT_OPTIONS);
}

class TuiLineClampBox extends TuiHintComponent {
    get width() {
        return this.accessor.getClientRect().width;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClampBox, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineClampBox, isStandalone: true, selector: "ng-component", host: { properties: { "style.min-width.px": "width" } }, providers: TUI_HINT_PROVIDERS, usesInheritance: true, ngImport: i0, template: `
        <ng-container *polymorpheusOutlet="content() as text">{{ text }}</ng-container>
    `, isInline: true, styles: [":host{position:absolute;box-shadow:var(--tui-shadow-medium);inline-size:-webkit-min-content;inline-size:min-content;padding:.75rem 1rem;margin-left:calc(-1px - 1rem);margin-top:calc(-1px - .75rem);border-radius:var(--tui-radius-l);box-sizing:content-box;border:1px solid var(--tui-border-normal);background:var(--tui-background-base);color:var(--tui-text-primary);overflow-wrap:break-word}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], animations: [tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClampBox, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [PolymorpheusOutlet, PolymorpheusTemplate], template: `
        <ng-container *polymorpheusOutlet="content() as text">{{ text }}</ng-container>
    `, changeDetection: ChangeDetectionStrategy.OnPush, providers: TUI_HINT_PROVIDERS, animations: [tuiFadeIn], host: {
                        '[style.min-width.px]': 'width',
                    }, styles: [":host{position:absolute;box-shadow:var(--tui-shadow-medium);inline-size:-webkit-min-content;inline-size:min-content;padding:.75rem 1rem;margin-left:calc(-1px - 1rem);margin-top:calc(-1px - .75rem);border-radius:var(--tui-radius-l);box-sizing:content-box;border:1px solid var(--tui-border-normal);background:var(--tui-background-base);color:var(--tui-text-primary);overflow-wrap:break-word}\n"] }]
        }] });

class TuiLineClampPositionDirective extends TuiPositionAccessor {
    constructor() {
        super(...arguments);
        this.accessor = inject(TuiHintDirective);
        this.type = 'hint';
    }
    getPosition() {
        const { top, left } = this.accessor.getClientRect();
        return [top, left];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClampPositionDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineClampPositionDirective, isStandalone: true, selector: "[tuiLineClampPosition]", providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClampPositionDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiLineClampPosition]',
                    providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)],
                }]
        }] });

class TuiLineClamp {
    constructor() {
        this.options = inject(TUI_LINE_CLAMP_OPTIONS);
        this.el = tuiInjectElement();
        this.cd = inject(ChangeDetectorRef);
        this.zone = inject(NgZone);
        this.linesLimit$ = new BehaviorSubject(1);
        this.isOverflown$ = new Subject();
        this.initialized = signal(false);
        this.maxHeight = signal(0);
        this.height = signal(0);
        this.$ = timer(0)
            .pipe(tuiZonefree(this.zone), takeUntilDestroyed())
            .subscribe(() => this.initialized.set(true));
        this.lineClamp = toSignal(this.linesLimit$.pipe(startWith(1), pairwise(), switchMap(([prev, next]) => next >= prev
            ? of(next)
            : tuiTypedFromEvent(this.el, 'transitionend').pipe(filter(tuiIsCurrentTarget), map(() => next))), takeUntilDestroyed()), { initialValue: 0 });
        this.lineHeight = 24;
        this.overflownChange = this.isOverflown$.pipe(distinctUntilChanged());
    }
    set linesLimit(linesLimit) {
        this.linesLimit$.next(linesLimit);
    }
    ngDoCheck() {
        this.update();
        this.isOverflown$.next(this.overflown);
    }
    ngAfterViewInit() {
        this.initialized.set(true);
    }
    get overflown() {
        if (!this.outlet) {
            return false;
        }
        const { scrollHeight, scrollWidth } = this.outlet.nativeElement;
        const { clientHeight, clientWidth } = this.el;
        // 4px buffer for IE/Edge incorrectly rounding scrollHeight
        return scrollHeight - clientHeight > 4 || scrollWidth - clientWidth > 0;
    }
    get computedContent() {
        return this.options.showHint && this.overflown ? this.content : '';
    }
    updateView() {
        this.cd.detectChanges();
    }
    update() {
        if (this.outlet) {
            this.height.set(this.outlet.nativeElement.scrollHeight + 4);
        }
        if (this.initialized()) {
            this.maxHeight.set(this.lineHeight * this.linesLimit$.value);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClamp, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiLineClamp, isStandalone: true, selector: "tui-line-clamp", inputs: { lineHeight: "lineHeight", content: "content", linesLimit: "linesLimit" }, outputs: { overflownChange: "overflownChange" }, host: { listeners: { "transitionend": "updateView()", "mouseenter": "updateView()", "resize": "updateView()" }, properties: { "style.height.px": "height()", "style.max-height.px": "maxHeight()", "class._initialized": "initialized()" } }, providers: [
            {
                provide: TUI_HINT_COMPONENT,
                useValue: TuiLineClampBox,
            },
        ], viewQueries: [{ propertyName: "outlet", first: true, predicate: TuiHintDirective, descendants: true, read: ElementRef }], ngImport: i0, template: "<div\n    tuiLineClampPosition\n    class=\"t-wrapper\"\n    [style.-webkit-line-clamp]=\"lineClamp()\"\n    [style.word-break]=\"lineClamp() > 1 ? 'break-word' : 'break-all'\"\n    [tuiHint]=\"computedContent\"\n>\n    <ng-container *polymorpheusOutlet=\"content as text\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: [":host{position:relative;display:block;overflow:hidden}:host._initialized{transition-property:max-height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-wrapper{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: i1.TuiHintDirective, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: ["tuiHintContext", "tuiHintAppearance", "tuiHint"] }, { kind: "directive", type: TuiLineClampPositionDirective, selector: "[tuiLineClampPosition]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLineClamp, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-line-clamp', imports: [
                        AsyncPipe,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiHint,
                        TuiLineClampPositionDirective,
                        WaResizeObserver,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: TUI_HINT_COMPONENT,
                            useValue: TuiLineClampBox,
                        },
                    ], host: {
                        '[style.height.px]': 'height()',
                        '[style.max-height.px]': 'maxHeight()',
                        '[class._initialized]': 'initialized()',
                        '(transitionend)': 'updateView()',
                        '(mouseenter)': 'updateView()',
                        '(resize)': 'updateView()',
                    }, template: "<div\n    tuiLineClampPosition\n    class=\"t-wrapper\"\n    [style.-webkit-line-clamp]=\"lineClamp()\"\n    [style.word-break]=\"lineClamp() > 1 ? 'break-word' : 'break-all'\"\n    [tuiHint]=\"computedContent\"\n>\n    <ng-container *polymorpheusOutlet=\"content as text\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: [":host{position:relative;display:block;overflow:hidden}:host._initialized{transition-property:max-height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-wrapper{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}\n"] }]
        }], propDecorators: { outlet: [{
                type: ViewChild,
                args: [TuiHintDirective, { read: ElementRef }]
            }], lineHeight: [{
                type: Input
            }], content: [{
                type: Input
            }], overflownChange: [{
                type: Output
            }], linesLimit: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_LINE_CLAMP_DEFAULT_OPTIONS, TUI_LINE_CLAMP_OPTIONS, TuiLineClamp, TuiLineClampBox, tuiLineClampOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-line-clamp.mjs.map
