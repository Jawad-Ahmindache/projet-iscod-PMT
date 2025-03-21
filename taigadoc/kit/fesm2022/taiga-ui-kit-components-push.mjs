import { AsyncPipe, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, Injectable, TemplateRef, ChangeDetectorRef, forwardRef, Directive } from '@angular/core';
import { tuiIsString, tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiButtonOptionsProvider, TuiButton } from '@taiga-ui/core/components/button';
import { TuiFormatDatePipe } from '@taiga-ui/core/pipes/format-date';
import { TUI_CLOSE_WORD, TUI_COMMON_ICONS, TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiIfMap } from '@taiga-ui/cdk/observables';
import { injectContext, PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { Subject } from 'rxjs';
import { TuiPopoverService } from '@taiga-ui/cdk/services';
import { TUI_ALERTS } from '@taiga-ui/core/components/alert';
import { tuiFadeIn, tuiSlideInRight, tuiHeightCollapse } from '@taiga-ui/core/animations';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TuiLink } from '@taiga-ui/core/components/link';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils/miscellaneous';

class TuiPushComponent {
    constructor() {
        this.isString = tuiIsString;
        this.closeWord$ = inject(TUI_CLOSE_WORD);
        this.icons = inject(TUI_COMMON_ICONS);
        this.heading = '';
        this.type = '';
        this.timestamp = '';
        this.close = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPushComponent, isStandalone: true, selector: "tui-push", inputs: { heading: "heading", type: "type", timestamp: "timestamp" }, outputs: { close: "close" }, providers: [tuiButtonOptionsProvider({ size: 's', appearance: 'secondary' })], ngImport: i0, template: "<div class=\"t-image\">\n    <ng-content select=\"img\" />\n</div>\n<button\n    *ngIf=\"close.observed\"\n    appearance=\"\"\n    size=\"xs\"\n    tuiIconButton\n    type=\"button\"\n    class=\"t-close\"\n    [iconStart]=\"icons.close\"\n    [style.border-radius.%]=\"100\"\n    (click)=\"close.emit()\"\n>\n    {{ closeWord$ | async }}\n</button>\n<div class=\"t-top\">\n    <span class=\"t-icon\">\n        <ng-content select=\"tui-svg,tui-icon\" />\n    </span>\n    {{ type }}\n    <span\n        *ngIf=\"timestamp\"\n        class=\"t-time\"\n        [textContent]=\"isString(timestamp) ? timestamp : (timestamp | tuiFormatDate | async)\"\n    ></span>\n</div>\n<h3\n    automation-id=\"tui-push__heading\"\n    class=\"t-heading\"\n>\n    {{ heading }}\n</h3>\n<div class=\"t-content\">\n    <ng-content />\n</div>\n<div class=\"t-actions\">\n    <span class=\"t-button\">\n        <ng-content select=\"[tuiButton]\" />\n    </span>\n    <span class=\"t-link\">\n        <ng-content select=\"[tuiLink]\" />\n    </span>\n</div>\n", styles: [":host{position:relative;display:block;inline-size:22.5rem;max-inline-size:100%;box-sizing:border-box;padding:1.25rem 1.25rem .25rem;overflow:hidden;font:var(--tui-font-text-m);border-radius:var(--tui-radius-xl);background:var(--tui-background-elevation-3);box-shadow:var(--tui-shadow-small)}.t-image{display:flex;flex-direction:column;max-block-size:10.625rem;overflow:hidden;margin:-1.25rem -1.25rem 1.25rem}.t-close{position:absolute;top:.75rem;right:.75rem;color:#0000008a;background:#f2f2f252;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem)}.t-top{display:flex;align-items:center;font:var(--tui-font-text-s);color:var(--tui-text-secondary)}.t-icon{block-size:1.25rem;margin-right:.5rem;transform:scale(.833);transform-origin:top left;color:var(--tui-text-action)}.t-time:before{content:\"\\2022\";display:inline-block;inline-size:1rem;text-align:center}.t-heading{line-height:1.25rem;font-weight:700;margin:.75rem 0 .25rem}.t-heading,.t-content{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-word;overflow:hidden}.t-actions{display:flex;align-items:center;font:var(--tui-font-text-s)}.t-button:not(:empty){margin:.75rem .75rem .75rem 0}.t-link{margin:.75rem 0}.t-link:empty{margin:.5rem}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "pipe", type: TuiFormatDatePipe, name: "tuiFormatDate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-push', imports: [AsyncPipe, NgIf, TuiButton, TuiFormatDatePipe], changeDetection: ChangeDetectionStrategy.OnPush, providers: [tuiButtonOptionsProvider({ size: 's', appearance: 'secondary' })], template: "<div class=\"t-image\">\n    <ng-content select=\"img\" />\n</div>\n<button\n    *ngIf=\"close.observed\"\n    appearance=\"\"\n    size=\"xs\"\n    tuiIconButton\n    type=\"button\"\n    class=\"t-close\"\n    [iconStart]=\"icons.close\"\n    [style.border-radius.%]=\"100\"\n    (click)=\"close.emit()\"\n>\n    {{ closeWord$ | async }}\n</button>\n<div class=\"t-top\">\n    <span class=\"t-icon\">\n        <ng-content select=\"tui-svg,tui-icon\" />\n    </span>\n    {{ type }}\n    <span\n        *ngIf=\"timestamp\"\n        class=\"t-time\"\n        [textContent]=\"isString(timestamp) ? timestamp : (timestamp | tuiFormatDate | async)\"\n    ></span>\n</div>\n<h3\n    automation-id=\"tui-push__heading\"\n    class=\"t-heading\"\n>\n    {{ heading }}\n</h3>\n<div class=\"t-content\">\n    <ng-content />\n</div>\n<div class=\"t-actions\">\n    <span class=\"t-button\">\n        <ng-content select=\"[tuiButton]\" />\n    </span>\n    <span class=\"t-link\">\n        <ng-content select=\"[tuiLink]\" />\n    </span>\n</div>\n", styles: [":host{position:relative;display:block;inline-size:22.5rem;max-inline-size:100%;box-sizing:border-box;padding:1.25rem 1.25rem .25rem;overflow:hidden;font:var(--tui-font-text-m);border-radius:var(--tui-radius-xl);background:var(--tui-background-elevation-3);box-shadow:var(--tui-shadow-small)}.t-image{display:flex;flex-direction:column;max-block-size:10.625rem;overflow:hidden;margin:-1.25rem -1.25rem 1.25rem}.t-close{position:absolute;top:.75rem;right:.75rem;color:#0000008a;background:#f2f2f252;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem)}.t-top{display:flex;align-items:center;font:var(--tui-font-text-s);color:var(--tui-text-secondary)}.t-icon{block-size:1.25rem;margin-right:.5rem;transform:scale(.833);transform-origin:top left;color:var(--tui-text-action)}.t-time:before{content:\"\\2022\";display:inline-block;inline-size:1rem;text-align:center}.t-heading{line-height:1.25rem;font-weight:700;margin:.75rem 0 .25rem}.t-heading,.t-content{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-word;overflow:hidden}.t-actions{display:flex;align-items:center;font:var(--tui-font-text-s)}.t-button:not(:empty){margin:.75rem .75rem .75rem 0}.t-link{margin:.75rem 0}.t-link:empty{margin:.5rem}\n"] }]
        }], propDecorators: { heading: [{
                type: Input
            }], type: [{
                type: Input
            }], timestamp: [{
                type: Input
            }], close: [{
                type: Output
            }] } });

const TUI_PUSH_DEFAULT_OPTIONS = {
    heading: '',
    type: '',
    timestamp: '',
    image: '',
    icon: '',
    iconColor: '',
    buttons: [],
};
/**
 * Default parameters for Push component
 */
const TUI_PUSH_OPTIONS = tuiCreateToken(TUI_PUSH_DEFAULT_OPTIONS);
function tuiPushOptionsProvider(options) {
    return tuiProvideOptions(TUI_PUSH_OPTIONS, options, TUI_PUSH_DEFAULT_OPTIONS);
}

class TuiPushAlert {
    constructor() {
        this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.context = injectContext();
    }
    get isDirective() {
        return this.context.content instanceof TuiPushDirective;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushAlert, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPushAlert, isStandalone: true, selector: "ng-component", host: { attributes: { "role": "alert" }, properties: { "@tuiFadeIn": "options", "@tuiSlideInRight": "options", "@tuiHeightCollapse": "options" } }, ngImport: i0, template: "<tui-push\n    *ngIf=\"!isDirective; else directive\"\n    [heading]=\"context.heading\"\n    [timestamp]=\"context.timestamp\"\n    [type]=\"context.type\"\n    (close)=\"context.$implicit.complete()\"\n>\n    <img\n        *ngIf=\"context.image\"\n        alt=\"\"\n        [src]=\"context.image\"\n    />\n    <tui-icon\n        *ngIf=\"context.icon\"\n        [icon]=\"context.icon\"\n        [style.color]=\"context.iconColor\"\n    />\n    <div\n        *polymorpheusOutlet=\"context.content as text; context: context\"\n        [innerHTML]=\"text\"\n    ></div>\n    <button\n        *ngIf=\"context.buttons.length > 1\"\n        tuiButton\n        type=\"button\"\n        (click)=\"context.$implicit.next(context.buttons[0] || '')\"\n    >\n        {{ context.buttons[0] }}\n    </button>\n    <button\n        *ngIf=\"context.buttons.length\"\n        tuiLink\n        type=\"button\"\n        (click)=\"context.$implicit.next(context.buttons[context.buttons.length - 1] || '')\"\n    >\n        {{ context.buttons[context.buttons.length - 1] }}\n    </button>\n</tui-push>\n<ng-template #directive>\n    <ng-container *polymorpheusOutlet=\"context.content\" />\n</ng-template>\n", styles: [":host{max-inline-size:calc(100% - 2rem);margin:0 1rem 1rem auto}:host:first-child{margin-top:auto}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }, { kind: "directive", type: TuiLink, selector: "a[tuiLink], button[tuiLink]", inputs: ["pseudo"] }, { kind: "component", type: TuiPushComponent, selector: "tui-push", inputs: ["heading", "type", "timestamp"], outputs: ["close"] }], animations: [tuiFadeIn, tuiSlideInRight, tuiHeightCollapse], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushAlert, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [
                        NgIf,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiButton,
                        TuiIcon,
                        TuiLink,
                        TuiPushComponent,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiFadeIn, tuiSlideInRight, tuiHeightCollapse], host: {
                        role: 'alert',
                        '[@tuiFadeIn]': 'options',
                        '[@tuiSlideInRight]': 'options',
                        '[@tuiHeightCollapse]': 'options',
                    }, template: "<tui-push\n    *ngIf=\"!isDirective; else directive\"\n    [heading]=\"context.heading\"\n    [timestamp]=\"context.timestamp\"\n    [type]=\"context.type\"\n    (close)=\"context.$implicit.complete()\"\n>\n    <img\n        *ngIf=\"context.image\"\n        alt=\"\"\n        [src]=\"context.image\"\n    />\n    <tui-icon\n        *ngIf=\"context.icon\"\n        [icon]=\"context.icon\"\n        [style.color]=\"context.iconColor\"\n    />\n    <div\n        *polymorpheusOutlet=\"context.content as text; context: context\"\n        [innerHTML]=\"text\"\n    ></div>\n    <button\n        *ngIf=\"context.buttons.length > 1\"\n        tuiButton\n        type=\"button\"\n        (click)=\"context.$implicit.next(context.buttons[0] || '')\"\n    >\n        {{ context.buttons[0] }}\n    </button>\n    <button\n        *ngIf=\"context.buttons.length\"\n        tuiLink\n        type=\"button\"\n        (click)=\"context.$implicit.next(context.buttons[context.buttons.length - 1] || '')\"\n    >\n        {{ context.buttons[context.buttons.length - 1] }}\n    </button>\n</tui-push>\n<ng-template #directive>\n    <ng-container *polymorpheusOutlet=\"context.content\" />\n</ng-template>\n", styles: [":host{max-inline-size:calc(100% - 2rem);margin:0 1rem 1rem auto}:host:first-child{margin-top:auto}\n"] }]
        }] });

class TuiPushService extends TuiPopoverService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushService, providedIn: 'root', useFactory: () => new TuiPushService(TUI_ALERTS, TuiPushAlert, inject(TUI_PUSH_OPTIONS)) }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiPushService(TUI_ALERTS, TuiPushAlert, inject(TUI_PUSH_OPTIONS)),
                }]
        }] });

class TuiPushDirective extends PolymorpheusTemplate {
    constructor() {
        super(inject(TemplateRef), inject(ChangeDetectorRef));
        this.push = inject(forwardRef(() => TuiPushService));
        this.show$ = new Subject();
        this.show$
            .pipe(tuiIfMap(() => this.push.open(this)), takeUntilDestroyed())
            .subscribe();
    }
    set tuiPush(show) {
        this.show$.next(show);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPushDirective, isStandalone: true, selector: "ng-template[tuiPush]", inputs: { tuiPush: "tuiPush" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPushDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiPush]',
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiPush: [{
                type: Input
            }] } });

const TuiPush = [TuiPushComponent, TuiPushAlert, TuiPushDirective];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_PUSH_DEFAULT_OPTIONS, TUI_PUSH_OPTIONS, TuiPush, TuiPushAlert, TuiPushComponent, TuiPushDirective, TuiPushService, tuiPushOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-push.mjs.map
