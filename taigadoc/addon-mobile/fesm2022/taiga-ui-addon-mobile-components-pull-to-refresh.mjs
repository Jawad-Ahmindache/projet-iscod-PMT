import { NgIf, AsyncPipe } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Injectable, Input, Output } from '@angular/core';
import { TuiLoader } from '@taiga-ui/core/components/loader';
import { injectContext, PolymorpheusComponent, PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { TUI_IS_IOS } from '@taiga-ui/cdk/tokens';
import { tuiCreateToken, tuiCreateTokenFromFactory, tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import { EMPTY, Observable, startWith, switchMap, filter, map, tap, takeUntil, endWith, scan, takeWhile, debounceTime, distinctUntilChanged, share } from 'rxjs';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { tuiTypedFromEvent, tuiScrollFrom, tuiZonefreeScheduler, tuiZoneOptimized, tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { TUI_SCROLL_REF } from '@taiga-ui/core/tokens';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const LOADED_STEP = 8;
const ROTATE_X_STEP = 30;
class TuiMobileLoaderIOS {
    constructor() {
        this.context = injectContext();
        this.threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);
        this.steps = 12;
    }
    get finished() {
        return this.percent >= 100;
    }
    get percent() {
        return (this.context.$implicit * 100) / this.threshold;
    }
    isShown(index) {
        return this.percent > (index + 1) * LOADED_STEP;
    }
    calculateTransform(index) {
        return `rotate(${index * ROTATE_X_STEP} 50 50)`;
    }
    calculateAnimationBegin(index) {
        return `${(index * LOADED_STEP) / 100}s`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileLoaderIOS, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiMobileLoaderIOS, isStandalone: true, selector: "tui-mobile-ios-loader", ngImport: i0, template: "<svg\n    height=\"36\"\n    preserveAspectRatio=\"xMidYMid\"\n    viewBox=\"0 0 100 100\"\n    width=\"36\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n>\n    <ng-container *tuiRepeatTimes=\"let index of steps\">\n        <g\n            *ngIf=\"isShown(index)\"\n            [attr.transform]=\"calculateTransform(index)\"\n        >\n            <rect\n                fill=\"#c7c9cc\"\n                height=\"16\"\n                rx=\"7.05\"\n                ry=\"3.3\"\n                width=\"6\"\n                x=\"47\"\n                y=\"22\"\n            >\n                <animate\n                    *ngIf=\"finished\"\n                    attributeName=\"opacity\"\n                    dur=\"1s\"\n                    keyTimes=\"0;1\"\n                    repeatCount=\"indefinite\"\n                    values=\"1;0\"\n                    [attr.begin]=\"calculateAnimationBegin(index)\"\n                />\n            </rect>\n        </g>\n    </ng-container>\n</svg>\n", styles: [":host{position:absolute;top:-.5rem;left:50%;margin-left:-1.125rem}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileLoaderIOS, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-mobile-ios-loader', imports: [NgIf, TuiRepeatTimes], changeDetection: ChangeDetectionStrategy.OnPush, template: "<svg\n    height=\"36\"\n    preserveAspectRatio=\"xMidYMid\"\n    viewBox=\"0 0 100 100\"\n    width=\"36\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n>\n    <ng-container *tuiRepeatTimes=\"let index of steps\">\n        <g\n            *ngIf=\"isShown(index)\"\n            [attr.transform]=\"calculateTransform(index)\"\n        >\n            <rect\n                fill=\"#c7c9cc\"\n                height=\"16\"\n                rx=\"7.05\"\n                ry=\"3.3\"\n                width=\"6\"\n                x=\"47\"\n                y=\"22\"\n            >\n                <animate\n                    *ngIf=\"finished\"\n                    attributeName=\"opacity\"\n                    dur=\"1s\"\n                    keyTimes=\"0;1\"\n                    repeatCount=\"indefinite\"\n                    values=\"1;0\"\n                    [attr.begin]=\"calculateAnimationBegin(index)\"\n                />\n            </rect>\n        </g>\n    </ng-container>\n</svg>\n", styles: [":host{position:absolute;top:-.5rem;left:50%;margin-left:-1.125rem}\n"] }]
        }] });
const TUI_IOS_LOADER = new PolymorpheusComponent(TuiMobileLoaderIOS);

/**
 * Stream that emits when loading is over
 */
const TUI_PULL_TO_REFRESH_LOADED = tuiCreateToken(EMPTY);
/**
 * Pull threshold in pixels until loading starts
 */
const TUI_PULL_TO_REFRESH_THRESHOLD = tuiCreateToken(50);
/**
 * Loading indicator component that gets current pull distance in pixels as context
 */
const TUI_PULL_TO_REFRESH_COMPONENT = tuiCreateTokenFromFactory(() => (inject(TUI_IS_IOS) ? TUI_IOS_LOADER : TUI_ANDROID_LOADER));

const MICRO_OFFSET = 10 ** -6;
const EXCLUSION_SELECTORS = 'tui-dialog, tui-dropdown, tui-dropdown-mobile';
class TuiPullToRefreshService extends Observable {
    constructor() {
        const component = inject(TUI_PULL_TO_REFRESH_COMPONENT);
        super((subscriber) => (component ? this.pulling$ : EMPTY).subscribe(subscriber));
        this.el = tuiInjectElement();
        this.scrollRef = inject(TUI_SCROLL_REF);
        this.loaded$ = inject(TUI_PULL_TO_REFRESH_LOADED);
        this.threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);
        // Hack for iOS to determine if pulling stopped due to scroll
        // because Safari does not support `touch-action: pan-down`
        this.touched = false;
        this.pulling$ = this.loaded$.pipe(startWith(null), switchMap(() => tuiTypedFromEvent(this.el, 'touchstart', { passive: true }).pipe(filter(() => !this.scrollRef.nativeElement.scrollTop &&
            !this.el.querySelector(EXCLUSION_SELECTORS)), map(({ touches }) => touches[0]?.clientY ?? 0), switchMap((start) => tuiTypedFromEvent(this.el, 'touchmove').pipe(tap(() => {
            this.touched = true;
        }), map(({ touches }) => (touches[0]?.clientY ?? 0) - start), filter((distance) => distance > 0), takeUntil(tuiTypedFromEvent(this.el, 'touchend').pipe(tap(() => {
            this.touched = false;
        }))), takeUntil(tuiScrollFrom(this.scrollRef.nativeElement)), endWith(0))), scan((prev, current) => !current && !this.touched && prev > this.threshold
            ? this.threshold
            : current + current * MICRO_OFFSET, 0), takeWhile((distance) => distance !== this.threshold, true), startWith(0))), debounceTime(0, tuiZonefreeScheduler()), distinctUntilChanged(), tuiZoneOptimized(), share());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPullToRefreshService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPullToRefreshService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPullToRefreshService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

const ROTATE_X_DEFAULT = 180;
const ROTATE_X_MAX = 500;
const ROTATE_X_MULTIPLIER = 2.3;
class TuiMobileLoaderAndroid {
    constructor() {
        this.context = injectContext();
        this.threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);
    }
    get percent() {
        return (this.context.$implicit * 100) / this.threshold;
    }
    get dropped() {
        return (this.context.$implicit <= MICRO_OFFSET ||
            this.context.$implicit === this.threshold);
    }
    get hostTransform() {
        return `translateY(${Math.min(this.context.$implicit, this.threshold * 1.5)}px)`;
    }
    get opacity() {
        return this.context.$implicit / (this.threshold * 1.5);
    }
    get transform() {
        const rotateX = Math.min(ROTATE_X_DEFAULT + this.percent * ROTATE_X_MULTIPLIER, ROTATE_X_MAX);
        return `rotate(${rotateX} 0 0)`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileLoaderAndroid, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiMobileLoaderAndroid, isStandalone: true, selector: "tui-mobile-android-loader", host: { properties: { "class._visible": "percent", "class._dropped": "dropped", "style.transform": "hostTransform" } }, ngImport: i0, template: "<div class=\"t-wrapper\">\n    <svg\n        *ngIf=\"percent !== 100; else loading\"\n        fill=\"none\"\n        height=\"24\"\n        viewBox=\"0 0 24 24\"\n        width=\"24\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        [attr.transform]=\"transform\"\n        [style.opacity]=\"opacity\"\n    >\n        <defs>\n            <mask id=\"mask-1\">\n                <path\n                    clip-rule=\"evenodd\"\n                    d=\"M21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.06 21 15.96 20.3 17.48 19.14L16.06 17.7C14.91 18.51 13.51 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H16L20 16L24 12H21Z\"\n                    fill=\"white\"\n                    fill-rule=\"evenodd\"\n                />\n            </mask>\n        </defs>\n        <g mask=\"url(#mask-1)\">\n            <path\n                clip-rule=\"evenodd\"\n                d=\"M21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.06 21 15.96 20.3 17.48 19.14L16.06 17.7C14.91 18.51 13.51 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H16L20 16L24 12H21Z\"\n                fill=\"black\"\n                fill-rule=\"evenodd\"\n            />\n        </g>\n    </svg>\n</div>\n<ng-template #loading>\n    <tui-loader\n        size=\"s\"\n        class=\"t-loader\"\n        [inheritColor]=\"true\"\n    />\n</ng-template>\n", styles: [":host{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:0;z-index:1;display:block;block-size:0;opacity:0}:host._visible{opacity:1}:host._dropped{transition:transform var(--tui-duration) cubic-bezier(.4,0,.2,1),opacity var(--tui-duration) var(--tui-duration)}.t-wrapper{position:absolute;top:-2.5rem;left:50%;display:flex;box-shadow:var(--tui-shadow-medium);block-size:2.25rem;inline-size:2.25rem;background-color:var(--tui-background-neutral-1);border-radius:6.25rem;align-items:center;justify-content:center;margin-left:-1.125rem}.t-loader{color:var(--tui-text-primary)}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TuiLoader, selector: "tui-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileLoaderAndroid, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-mobile-android-loader', imports: [NgIf, TuiLoader], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._visible]': 'percent',
                        '[class._dropped]': 'dropped',
                        '[style.transform]': 'hostTransform',
                    }, template: "<div class=\"t-wrapper\">\n    <svg\n        *ngIf=\"percent !== 100; else loading\"\n        fill=\"none\"\n        height=\"24\"\n        viewBox=\"0 0 24 24\"\n        width=\"24\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        [attr.transform]=\"transform\"\n        [style.opacity]=\"opacity\"\n    >\n        <defs>\n            <mask id=\"mask-1\">\n                <path\n                    clip-rule=\"evenodd\"\n                    d=\"M21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.06 21 15.96 20.3 17.48 19.14L16.06 17.7C14.91 18.51 13.51 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H16L20 16L24 12H21Z\"\n                    fill=\"white\"\n                    fill-rule=\"evenodd\"\n                />\n            </mask>\n        </defs>\n        <g mask=\"url(#mask-1)\">\n            <path\n                clip-rule=\"evenodd\"\n                d=\"M21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C14.06 21 15.96 20.3 17.48 19.14L16.06 17.7C14.91 18.51 13.51 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12H16L20 16L24 12H21Z\"\n                fill=\"black\"\n                fill-rule=\"evenodd\"\n            />\n        </g>\n    </svg>\n</div>\n<ng-template #loading>\n    <tui-loader\n        size=\"s\"\n        class=\"t-loader\"\n        [inheritColor]=\"true\"\n    />\n</ng-template>\n", styles: [":host{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:0;z-index:1;display:block;block-size:0;opacity:0}:host._visible{opacity:1}:host._dropped{transition:transform var(--tui-duration) cubic-bezier(.4,0,.2,1),opacity var(--tui-duration) var(--tui-duration)}.t-wrapper{position:absolute;top:-2.5rem;left:50%;display:flex;box-shadow:var(--tui-shadow-medium);block-size:2.25rem;inline-size:2.25rem;background-color:var(--tui-background-neutral-1);border-radius:6.25rem;align-items:center;justify-content:center;margin-left:-1.125rem}.t-loader{color:var(--tui-text-primary)}\n"] }]
        }] });
const TUI_ANDROID_LOADER = new PolymorpheusComponent(TuiMobileLoaderAndroid);

class TuiPullToRefresh {
    constructor() {
        this.isIOS = inject(TUI_IS_IOS);
        this.threshold = inject(TUI_PULL_TO_REFRESH_THRESHOLD);
        this.pulling$ = inject(TuiPullToRefreshService);
        this.component = inject(TUI_PULL_TO_REFRESH_COMPONENT);
        this.dropped$ = this.pulling$.pipe(map((distance) => distance <= MICRO_OFFSET || distance === this.threshold), distinctUntilChanged());
        this.styleHandler = this.isIOS
            ? (distance) => ({ top: tuiPx(distance / 2) })
            : () => null;
        this.pulled = inject(TuiPullToRefreshService).pipe(filter((distance) => distance === this.threshold));
        if (!this.component) {
            return; // Ensure scrolling down is impossible while pulling
        }
        const el = inject(TUI_SCROLL_REF).nativeElement;
        tuiScrollFrom(el)
            .pipe(startWith(null), tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => {
            if (el.scrollTop) {
                el.style.touchAction = '';
            }
            else {
                el.style.touchAction = 'pan-down';
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPullToRefresh, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPullToRefresh, isStandalone: true, selector: "tui-pull-to-refresh", inputs: { styleHandler: "styleHandler" }, outputs: { pulled: "pulled" }, providers: [TuiPullToRefreshService], ngImport: i0, template: "<ng-container *polymorpheusOutlet=\"component; context: {$implicit: (pulling$ | async) || 0}\" />\n\n<div\n    [class.t-drop]=\"dropped$ | async\"\n    [style.position]=\"'relative'\"\n    [style]=\"styleHandler((pulling$ | async) || 0)\"\n>\n    <ng-content />\n</div>\n", styles: [".t-drop{transition:all var(--tui-duration) cubic-bezier(.4,0,.2,1)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPullToRefresh, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-pull-to-refresh', imports: [AsyncPipe, PolymorpheusOutlet], changeDetection: ChangeDetectionStrategy.OnPush, providers: [TuiPullToRefreshService], template: "<ng-container *polymorpheusOutlet=\"component; context: {$implicit: (pulling$ | async) || 0}\" />\n\n<div\n    [class.t-drop]=\"dropped$ | async\"\n    [style.position]=\"'relative'\"\n    [style]=\"styleHandler((pulling$ | async) || 0)\"\n>\n    <ng-content />\n</div>\n", styles: [".t-drop{transition:all var(--tui-duration) cubic-bezier(.4,0,.2,1)}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { styleHandler: [{
                type: Input
            }], pulled: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { MICRO_OFFSET, TUI_ANDROID_LOADER, TUI_IOS_LOADER, TUI_PULL_TO_REFRESH_COMPONENT, TUI_PULL_TO_REFRESH_LOADED, TUI_PULL_TO_REFRESH_THRESHOLD, TuiMobileLoaderAndroid, TuiMobileLoaderIOS, TuiPullToRefresh, TuiPullToRefreshService };
//# sourceMappingURL=taiga-ui-addon-mobile-components-pull-to-refresh.mjs.map
