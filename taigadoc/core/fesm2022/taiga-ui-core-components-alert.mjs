import * as i1 from '@angular/common';
import { NgIf, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Injectable, Directive, INJECTOR, Injector, ViewEncapsulation } from '@angular/core';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiFadeIn, tuiSlideIn, tuiHeightCollapse, tuiParentAnimation } from '@taiga-ui/core/animations';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TUI_NOTIFICATION_OPTIONS, TuiNotification } from '@taiga-ui/core/components/notification';
import { TuiTitle } from '@taiga-ui/core/directives/title';
import { TUI_COMMON_ICONS, TUI_ANIMATIONS_SPEED, TUI_CLOSE_WORD } from '@taiga-ui/core/tokens';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils';
import { injectContext, PolymorpheusOutlet, POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';
import { BehaviorSubject, combineLatest, of, map, switchMap, timer, EMPTY, takeUntil, fromEvent, repeat, identity } from 'rxjs';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiCreateTokenFromFactory, tuiCreateToken } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiPopoverDirective } from '@taiga-ui/cdk/directives/popover';
import { TuiPopoverService, tuiAsPopover } from '@taiga-ui/cdk/services';
import { TuiMapperPipe } from '@taiga-ui/cdk/pipes/mapper';

const TUI_ALERT_DEFAULT_OPTIONS = {
    autoClose: 3000,
    label: '',
    closeable: true,
    data: undefined,
};
const TUI_ALERT_OPTIONS = tuiCreateTokenFromFactory(() => ({
    ...TUI_ALERT_DEFAULT_OPTIONS,
    ...inject(TUI_NOTIFICATION_OPTIONS),
}));
const TUI_ALERT_POSITION = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) ? '1rem 1rem 0 auto' : '2rem 3rem 0 auto');
const TUI_ALERTS = tuiCreateToken(new BehaviorSubject([]));
/**
 * Grouping alerts by their component
 */
const TUI_ALERTS_GROUPED = tuiCreateTokenFromFactory(() => combineLatest([
    of(new Map()),
    inject(TUI_ALERTS),
]).pipe(map(([map, alerts]) => {
    map.forEach((_, key) => map.set(key, []));
    alerts.forEach((alert) => {
        const key = alert.component.component;
        const value = map.get(key) || [];
        map.set(key, [...value, alert]);
    });
    return Array.from(map.values());
})));
function tuiAlertOptionsProvider(options) {
    return {
        provide: TUI_ALERT_OPTIONS,
        useFactory: () => ({
            ...TUI_ALERT_DEFAULT_OPTIONS,
            ...(inject(TUI_ALERT_OPTIONS, { optional: true, skipSelf: true }) ||
                inject(TUI_NOTIFICATION_OPTIONS)),
            ...options,
        }),
    };
}

class TuiAlertComponent {
    constructor() {
        this.el = tuiInjectElement();
        this.icons = inject(TUI_COMMON_ICONS);
        this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.close = toSignal(inject(TUI_CLOSE_WORD));
        this.position = inject(TUI_ALERT_POSITION);
        this.item = injectContext();
        this.animation = this.position.endsWith('auto')
            ? { ...this.options, value: 'right' }
            : { ...this.options, value: 'left' };
        this.sub = of(typeof this.item.autoClose === 'function'
            ? this.item.autoClose(this.item.appearance)
            : this.item.autoClose)
            .pipe(switchMap((autoClose) => (autoClose ? timer(autoClose) : EMPTY)), takeUntil(fromEvent(this.el, 'mouseenter')), repeat({ delay: () => fromEvent(this.el, 'mouseleave') }), takeUntilDestroyed())
            .subscribe(() => this.item.$implicit.complete());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiAlertComponent, isStandalone: true, selector: "tui-alert", host: { attributes: { "role": "alert" }, properties: { "style.margin": "position", "@tuiFadeIn": "options", "@tuiSlideIn": "animation", "@tuiHeightCollapse": "animation" } }, ngImport: i0, template: "<tui-notification\n    size=\"m\"\n    [appearance]=\"item.appearance\"\n    [class.t-closeable]=\"item.closeable\"\n    [icon]=\"item.icon\"\n>\n    <span tuiTitle>\n        <ng-container *polymorpheusOutlet=\"item.label as text; context: item\">\n            {{ text }}\n        </ng-container>\n        <span tuiSubtitle>\n            <span\n                *polymorpheusOutlet=\"item.content as text; context: item\"\n                [innerHTML]=\"text\"\n            ></span>\n        </span>\n    </span>\n    <button\n        *ngIf=\"item.closeable\"\n        tuiIconButton\n        type=\"button\"\n        [iconStart]=\"icons.close\"\n        (click)=\"item.$implicit.complete()\"\n    >\n        {{ close() }}\n    </button>\n</tui-notification>\n", styles: [":host{display:block;inline-size:18rem;flex-shrink:0;word-break:break-word;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}:host:not(:first-child){margin-top:.75rem!important}:host:not(:last-child){margin-bottom:0!important}.t-closeable{padding-inline-end:2.5rem}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "directive", type: TuiNotification, selector: "tui-notification,a[tuiNotification],button[tuiNotification]", inputs: ["appearance", "icon", "size"] }, { kind: "directive", type: TuiTitle, selector: "[tuiTitle]", inputs: ["tuiTitle"] }], animations: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAlertComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-alert', imports: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse], host: {
                        role: 'alert',
                        '[style.margin]': 'position',
                        '[@tuiFadeIn]': 'options',
                        '[@tuiSlideIn]': 'animation',
                        '[@tuiHeightCollapse]': 'animation',
                    }, template: "<tui-notification\n    size=\"m\"\n    [appearance]=\"item.appearance\"\n    [class.t-closeable]=\"item.closeable\"\n    [icon]=\"item.icon\"\n>\n    <span tuiTitle>\n        <ng-container *polymorpheusOutlet=\"item.label as text; context: item\">\n            {{ text }}\n        </ng-container>\n        <span tuiSubtitle>\n            <span\n                *polymorpheusOutlet=\"item.content as text; context: item\"\n                [innerHTML]=\"text\"\n            ></span>\n        </span>\n    </span>\n    <button\n        *ngIf=\"item.closeable\"\n        tuiIconButton\n        type=\"button\"\n        [iconStart]=\"icons.close\"\n        (click)=\"item.$implicit.complete()\"\n    >\n        {{ close() }}\n    </button>\n</tui-notification>\n", styles: [":host{display:block;inline-size:18rem;flex-shrink:0;word-break:break-word;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}:host:not(:first-child){margin-top:.75rem!important}:host:not(:last-child){margin-bottom:0!important}.t-closeable{padding-inline-end:2.5rem}\n"] }]
        }] });

class TuiAlertService extends TuiPopoverService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAlertService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAlertService, providedIn: 'root', useFactory: () => new TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS)) }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS)),
                }]
        }] });

class TuiAlert extends TuiPopoverDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAlert, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiAlert, isStandalone: true, selector: "ng-template[tuiAlert]", inputs: { options: ["tuiAlertOptions", "options"], open: ["tuiAlert", "open"] }, outputs: { openChange: "tuiAlertChange" }, providers: [tuiAsPopover(TuiAlertService)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAlert, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiAlert]',
                    inputs: ['options: tuiAlertOptions', 'open: tuiAlert'],
                    outputs: ['openChange: tuiAlertChange'],
                    providers: [tuiAsPopover(TuiAlertService)],
                }]
        }] });

class TuiAlerts {
    constructor() {
        this.injector = inject(INJECTOR);
        this.alerts$ = inject(TUI_ALERTS_GROUPED);
        this.trackBy = identity;
        this.mapper = (useValue) => Injector.create({
            providers: [
                {
                    provide: POLYMORPHEUS_CONTEXT,
                    useValue,
                },
            ],
            parent: this.injector,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAlerts, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiAlerts, isStandalone: true, selector: "tui-alerts", ngImport: i0, template: "<div\n    *ngFor=\"let group of alerts$ | async; trackBy: trackBy\"\n    class=\"t-wrapper\"\n    @tuiParentAnimation\n>\n    <ng-container\n        *ngFor=\"let item of group\"\n        [ngComponentOutlet]=\"item.component.component\"\n        [ngComponentOutletInjector]=\"item | tuiMapper: mapper\"\n    />\n</div>\n", styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;pointer-events:none}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModule", "ngComponentOutletNgModuleFactory"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: TuiMapperPipe, name: "tuiMapper" }], animations: [tuiParentAnimation], changeDetection: i0.ChangeDetectionStrategy.Default, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAlerts, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-alerts', imports: [CommonModule, TuiMapperPipe], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, animations: [tuiParentAnimation], template: "<div\n    *ngFor=\"let group of alerts$ | async; trackBy: trackBy\"\n    class=\"t-wrapper\"\n    @tuiParentAnimation\n>\n    <ng-container\n        *ngFor=\"let item of group\"\n        [ngComponentOutlet]=\"item.component.component\"\n        [ngComponentOutletInjector]=\"item | tuiMapper: mapper\"\n    />\n</div>\n", styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;pointer-events:none}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_ALERTS, TUI_ALERTS_GROUPED, TUI_ALERT_DEFAULT_OPTIONS, TUI_ALERT_OPTIONS, TUI_ALERT_POSITION, TuiAlert, TuiAlertComponent, TuiAlertService, TuiAlerts, tuiAlertOptionsProvider };
//# sourceMappingURL=taiga-ui-core-components-alert.mjs.map
