import { DOCUMENT, AsyncPipe, NgIf, NgForOf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Injectable, computed, Component, ChangeDetectionStrategy, Directive, INJECTOR } from '@angular/core';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TUI_TRUE_HANDLER } from '@taiga-ui/cdk/constants';
import { TuiAutoFocus } from '@taiga-ui/cdk/directives/auto-focus';
import { tuiSlideInTop, tuiFadeIn, tuiHost } from '@taiga-ui/core/animations';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TuiBreakpointService } from '@taiga-ui/core/services';
import { TUI_ANIMATIONS_SPEED, TUI_CLOSE_WORD, TUI_COMMON_ICONS } from '@taiga-ui/core/tokens';
import { tuiGetViewportWidth, tuiGetDuration } from '@taiga-ui/core/utils';
import { injectContext, PolymorpheusOutlet, PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { BehaviorSubject, EMPTY, Observable, merge, filter, switchMap, take, map, isObservable, of, Subject } from 'rxjs';
import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';
import { WA_WINDOW } from '@ng-web-apis/common';
import { tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { tuiInjectElement, tuiGetActualTarget, tuiIsElement, tuiContainsOrAfter } from '@taiga-ui/cdk/utils/dom';
import { TuiPopoverDirective } from '@taiga-ui/cdk/directives/popover';
import { TuiPopoverService, tuiAsPopover } from '@taiga-ui/cdk/services';
import { TuiFocusTrap } from '@taiga-ui/cdk/directives/focus-trap';
import { TuiScrollControls, TuiScrollRef } from '@taiga-ui/core/components/scrollbar';

const TUI_DIALOGS = tuiCreateToken(new BehaviorSubject([]));
const TUI_DIALOG_DEFAULT_OPTIONS = {
    appearance: '',
    size: 'm',
    required: false,
    closeable: true,
    dismissible: true,
    label: '',
    header: '',
    data: undefined,
};
/**
 * A stream to close dialogs
 */
const TUI_DIALOGS_CLOSE = tuiCreateToken(EMPTY);
/**
 * Default parameters for dialog component
 */
const TUI_DIALOG_OPTIONS = tuiCreateToken(TUI_DIALOG_DEFAULT_OPTIONS);
function tuiDialogOptionsProvider(options) {
    return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}

const SCROLLBAR_PLACEHOLDER = 17;
class TuiDialogCloseService extends Observable {
    constructor() {
        super((subscriber) => merge(this.esc$, this.mousedown$).subscribe(subscriber));
        this.win = inject(WA_WINDOW);
        this.doc = inject(DOCUMENT);
        this.el = tuiInjectElement();
        this.esc$ = tuiTypedFromEvent(this.doc, 'keydown').pipe(filter((event) => {
            const target = tuiGetActualTarget(event);
            return (event.key === 'Escape' &&
                !event.defaultPrevented &&
                (this.el.contains(target) || this.isOutside(target)));
        }));
        this.mousedown$ = tuiTypedFromEvent(this.doc, 'mousedown').pipe(filter((event) => tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER &&
            this.isOutside(tuiGetActualTarget(event))), switchMap(() => tuiTypedFromEvent(this.doc, 'mouseup').pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
    }
    isOutside(target) {
        return (tuiIsElement(target) &&
            (!tuiContainsOrAfter(this.el, target) || target === this.el));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogCloseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogCloseService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogCloseService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

const REQUIRED_ERROR = new Error('Required dialog was dismissed');
function toObservable(valueOrStream) {
    return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
class TuiDialogComponent {
    constructor() {
        this.speed = inject(TUI_ANIMATIONS_SPEED);
        this.animation = {
            value: '',
            params: {
                start: '40px',
                duration: tuiGetDuration(this.speed),
            },
        };
        this.fullscreenAnimation = {
            value: '',
            params: {
                start: '100vh',
                duration: tuiGetDuration(this.speed),
            },
        };
        this.close$ = new Subject();
        this.context = injectContext();
        this.closeWord$ = inject(TUI_CLOSE_WORD);
        this.icons = inject(TUI_COMMON_ICONS);
        this.slideInTop = computed(() => this.size === 'fullscreen' || this.size === 'page' || this.isMobile()
            ? this.fullscreenAnimation
            : this.animation);
        this.isMobile = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === 'mobile')));
        merge(this.close$.pipe(switchMap(() => toObservable(this.context.closeable))), inject(TuiDialogCloseService).pipe(switchMap(() => toObservable(this.context.dismissible))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER)))
            .pipe(filter(Boolean), takeUntilDestroyed())
            .subscribe(() => {
            this.close();
        });
    }
    get size() {
        return this.context.size;
    }
    get header() {
        return this.context.header;
    }
    close() {
        if (this.context.required) {
            this.context.$implicit.error(REQUIRED_ERROR);
        }
        else {
            this.context.$implicit.complete();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiDialogComponent, isStandalone: true, selector: "tui-dialog", host: { properties: { "@tuiSlideInTop": "slideInTop()", "@tuiFadeIn": "slideInTop()", "attr.data-appearance": "context.appearance", "attr.data-size": "size", "class._centered": "header" } }, providers: [TuiDialogCloseService], ngImport: i0, template: "<header\n    *ngIf=\"header\"\n    class=\"t-header\"\n>\n    <ng-container *polymorpheusOutlet=\"header as text; context: context\">\n        {{ text }}\n    </ng-container>\n</header>\n<div class=\"t-content\">\n    <h2\n        class=\"t-heading\"\n        [class.t-heading_closable]=\"context.closeable\"\n        [id]=\"context.id\"\n        [textContent]=\"context.label\"\n    ></h2>\n    <section>\n        <ng-container *polymorpheusOutlet=\"context.content as text; context: context\">\n            <div [innerHTML]=\"text\"></div>\n            <div class=\"t-buttons\">\n                <button\n                    size=\"m\"\n                    tuiAutoFocus\n                    tuiButton\n                    type=\"button\"\n                    (click)=\"context.$implicit.complete()\"\n                >\n                    {{ context.data?.button || 'OK' }}\n                </button>\n            </div>\n        </ng-container>\n    </section>\n</div>\n<div class=\"t-filler\"></div>\n\n<!-- Close button is insensitive to `context.closeable === Observable<false>` by design -->\n<button\n    *ngIf=\"context.closeable\"\n    automation-id=\"tui-dialog__close\"\n    tuiIconButton\n    type=\"button\"\n    class=\"t-close\"\n    [appearance]=\"isMobile() ? 'icon' : 'neutral'\"\n    [iconStart]=\"icons.close\"\n    [size]=\"isMobile() ? 'xs' : 's'\"\n    [style.border-radius.%]=\"100\"\n    (click)=\"close$.next()\"\n    (mousedown.prevent.silent)=\"(0)\"\n>\n    {{ closeWord$ | async }}\n</button>\n", styles: [":host{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}:host[data-size=auto]{inline-size:auto}:host[data-size=s]{inline-size:30rem}:host[data-size=s] .t-content{padding:1.5rem}:host[data-size=s] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=m]{inline-size:42.5rem}:host[data-size=l]{inline-size:55rem}:host[data-size=fullscreen],:host[data-size=page]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}:host[data-size=fullscreen] .t-content,:host[data-size=page] .t-content{padding:3rem calc(50vw - 22.5rem)}:host[data-size=fullscreen] .t-heading,:host[data-size=page] .t-heading{font:var(--tui-font-heading-3)}:host._centered{text-align:center}:host :host-context(tui-root._mobile)[data-size]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}:host :host-context(tui-root._mobile)[data-size] .t-content{padding:1rem}:host :host-context(tui-root._mobile)[data-size] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=page] .t-content,:host-context(tui-root._mobile) :host[data-size=page] .t-content{padding:0}.t-heading{margin:0 0 .5rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading_closable{padding-inline-end:2rem}.t-heading:empty{display:none}.t-header{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}:host[data-size=fullscreen] :host-context(tui-root._mobile) .t-header{flex:1}.t-content{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-filler{flex-grow:1}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons{margin-top:1.25rem;text-align:end}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiAutoFocus, selector: "[tuiAutoFocus]", inputs: ["tuiAutoFocus"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }], animations: [tuiSlideInTop, tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.Default }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-dialog', imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton], changeDetection: ChangeDetectionStrategy.Default, providers: [TuiDialogCloseService], animations: [tuiSlideInTop, tuiFadeIn], host: {
                        '[@tuiSlideInTop]': 'slideInTop()',
                        '[@tuiFadeIn]': 'slideInTop()',
                        '[attr.data-appearance]': 'context.appearance',
                        '[attr.data-size]': 'size',
                        '[class._centered]': 'header',
                    }, template: "<header\n    *ngIf=\"header\"\n    class=\"t-header\"\n>\n    <ng-container *polymorpheusOutlet=\"header as text; context: context\">\n        {{ text }}\n    </ng-container>\n</header>\n<div class=\"t-content\">\n    <h2\n        class=\"t-heading\"\n        [class.t-heading_closable]=\"context.closeable\"\n        [id]=\"context.id\"\n        [textContent]=\"context.label\"\n    ></h2>\n    <section>\n        <ng-container *polymorpheusOutlet=\"context.content as text; context: context\">\n            <div [innerHTML]=\"text\"></div>\n            <div class=\"t-buttons\">\n                <button\n                    size=\"m\"\n                    tuiAutoFocus\n                    tuiButton\n                    type=\"button\"\n                    (click)=\"context.$implicit.complete()\"\n                >\n                    {{ context.data?.button || 'OK' }}\n                </button>\n            </div>\n        </ng-container>\n    </section>\n</div>\n<div class=\"t-filler\"></div>\n\n<!-- Close button is insensitive to `context.closeable === Observable<false>` by design -->\n<button\n    *ngIf=\"context.closeable\"\n    automation-id=\"tui-dialog__close\"\n    tuiIconButton\n    type=\"button\"\n    class=\"t-close\"\n    [appearance]=\"isMobile() ? 'icon' : 'neutral'\"\n    [iconStart]=\"icons.close\"\n    [size]=\"isMobile() ? 'xs' : 's'\"\n    [style.border-radius.%]=\"100\"\n    (click)=\"close$.next()\"\n    (mousedown.prevent.silent)=\"(0)\"\n>\n    {{ closeWord$ | async }}\n</button>\n", styles: [":host{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}:host[data-size=auto]{inline-size:auto}:host[data-size=s]{inline-size:30rem}:host[data-size=s] .t-content{padding:1.5rem}:host[data-size=s] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=m]{inline-size:42.5rem}:host[data-size=l]{inline-size:55rem}:host[data-size=fullscreen],:host[data-size=page]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}:host[data-size=fullscreen] .t-content,:host[data-size=page] .t-content{padding:3rem calc(50vw - 22.5rem)}:host[data-size=fullscreen] .t-heading,:host[data-size=page] .t-heading{font:var(--tui-font-heading-3)}:host._centered{text-align:center}:host :host-context(tui-root._mobile)[data-size]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}:host :host-context(tui-root._mobile)[data-size] .t-content{padding:1rem}:host :host-context(tui-root._mobile)[data-size] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=page] .t-content,:host-context(tui-root._mobile) :host[data-size=page] .t-content{padding:0}.t-heading{margin:0 0 .5rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading_closable{padding-inline-end:2rem}.t-heading:empty{display:none}.t-header{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}:host[data-size=fullscreen] :host-context(tui-root._mobile) .t-header{flex:1}.t-content{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-filler{flex-grow:1}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons{margin-top:1.25rem;text-align:end}\n"] }]
        }], ctorParameters: function () { return []; } });

class TuiDialogService extends TuiPopoverService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogService, providedIn: 'root', useFactory: () => new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)) }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)),
                }]
        }] });

class TuiDialog extends TuiPopoverDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialog, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDialog, isStandalone: true, selector: "ng-template[tuiDialog]", inputs: { options: ["tuiDialogOptions", "options"], open: ["tuiDialog", "open"] }, outputs: { openChange: "tuiDialogChange" }, providers: [tuiAsPopover(TuiDialogService)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialog, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiDialog]',
                    inputs: ['options: tuiDialogOptions', 'open: tuiDialog'],
                    outputs: ['openChange: tuiDialogChange'],
                    providers: [tuiAsPopover(TuiDialogService)],
                }]
        }] });

function tuiDialog(component, options) {
    const dialogService = inject(TuiDialogService);
    const injector = inject(INJECTOR);
    return (data) => dialogService.open(new PolymorpheusComponent(component, injector), {
        ...options,
        data,
    });
}

class TuiDialogs {
    constructor() {
        this.el = tuiInjectElement();
        this.dialogs = toSignal(inject(TUI_DIALOGS), { initialValue: [] });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogs, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiDialogs, isStandalone: true, selector: "tui-dialogs", host: { listeners: { "keydown.silent": "el.scrollTop = el.scrollHeight / 2" } }, ngImport: i0, template: "<div\n    class=\"t-overlay\"\n    [class.t-overlay_visible]=\"dialogs().length\"\n></div>\n<section\n    *ngFor=\"let item of dialogs()\"\n    aria-modal=\"true\"\n    role=\"dialog\"\n    tuiFocusTrap\n    tuiScrollRef\n    class=\"t-dialog\"\n    @tuiHost\n    [attr.aria-labelledby]=\"item.id\"\n>\n    <ng-container *polymorpheusOutlet=\"item.component; context: item\" />\n    <tui-scroll-controls class=\"t-scrollbars\" />\n</section>\n", styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:has(section){pointer-events:auto;overflow:auto}:host:before{content:\"\";display:block;block-size:1000%}.t-overlay,.t-dialog{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay::-webkit-scrollbar,.t-dialog::-webkit-scrollbar,.t-overlay::-webkit-scrollbar-thumb,.t-dialog::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating,.t-dialog.ng-animating{overflow:clip}.t-dialog{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible{opacity:1;transition-timing-function:ease-out}.t-dialog:last-child{pointer-events:auto;filter:none}.t-scrollbars{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiFocusTrap, selector: "[tuiFocusTrap]" }, { kind: "component", type: TuiScrollControls, selector: "tui-scroll-controls" }, { kind: "directive", type: TuiScrollRef, selector: "[tuiScrollRef]" }], animations: [tuiHost], changeDetection: i0.ChangeDetectionStrategy.Default }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDialogs, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-dialogs', imports: [NgForOf, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef], changeDetection: ChangeDetectionStrategy.Default, animations: [tuiHost], host: {
                        '(keydown.silent)': 'el.scrollTop = el.scrollHeight / 2',
                    }, template: "<div\n    class=\"t-overlay\"\n    [class.t-overlay_visible]=\"dialogs().length\"\n></div>\n<section\n    *ngFor=\"let item of dialogs()\"\n    aria-modal=\"true\"\n    role=\"dialog\"\n    tuiFocusTrap\n    tuiScrollRef\n    class=\"t-dialog\"\n    @tuiHost\n    [attr.aria-labelledby]=\"item.id\"\n>\n    <ng-container *polymorpheusOutlet=\"item.component; context: item\" />\n    <tui-scroll-controls class=\"t-scrollbars\" />\n</section>\n", styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:has(section){pointer-events:auto;overflow:auto}:host:before{content:\"\";display:block;block-size:1000%}.t-overlay,.t-dialog{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay::-webkit-scrollbar,.t-dialog::-webkit-scrollbar,.t-overlay::-webkit-scrollbar-thumb,.t-dialog::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating,.t-dialog.ng-animating{overflow:clip}.t-dialog{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible{opacity:1;transition-timing-function:ease-out}.t-dialog:last-child{pointer-events:auto;filter:none}.t-scrollbars{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_DIALOGS, TUI_DIALOGS_CLOSE, TUI_DIALOG_DEFAULT_OPTIONS, TUI_DIALOG_OPTIONS, TuiDialog, TuiDialogCloseService, TuiDialogComponent, TuiDialogService, TuiDialogs, tuiDialog, tuiDialogOptionsProvider };
//# sourceMappingURL=taiga-ui-core-components-dialog.mjs.map
