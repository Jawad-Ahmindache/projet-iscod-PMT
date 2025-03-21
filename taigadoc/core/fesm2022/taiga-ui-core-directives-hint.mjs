import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Injectable, Directive, Optional, Self, SkipSelf, inject, Input, EventEmitter, Output, signal, INJECTOR, Component, ChangeDetectionStrategy, TemplateRef, NgZone, DestroyRef, ChangeDetectorRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY_CLIENT_RECT } from '@taiga-ui/cdk/constants';
import { TuiHoveredService } from '@taiga-ui/cdk/directives/hovered';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiInjectElement, tuiPointToClientRect } from '@taiga-ui/cdk/utils/dom';
import { tuiClamp } from '@taiga-ui/cdk/utils/math';
import { tuiCreateTokenFromFactory, tuiCreateToken, tuiProvide, tuiPure, tuiPx, tuiIsPresent } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiParentAnimation, tuiFadeIn, tuiScaleIn } from '@taiga-ui/core/animations';
import { TuiDriverDirective, TuiDriver, tuiAsDriver, TuiPositionAccessor, tuiFallbackAccessor, TuiRectAccessor, tuiAsRectAccessor, tuiAsVehicle, tuiPositionAccessorFor, tuiRectAccessorFor } from '@taiga-ui/core/classes';
import { TuiPositionService, TuiVisualViewportService } from '@taiga-ui/core/services';
import { TUI_VIEWPORT, TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiOverrideOptions, tuiIsObscured, tuiToAnimationOptions } from '@taiga-ui/core/utils';
import { PolymorpheusComponent, injectContext, PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { BehaviorSubject, Subject, merge, switchMap, of, delay, takeUntil, repeat, filter, map, tap, takeWhile, distinctUntilChanged, fromEvent, debounce, timer, startWith, skip } from 'rxjs';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { DOCUMENT, NgForOf } from '@angular/common';
import { tuiIfMap, tuiTypedFromEvent, tuiZonefreeScheduler, tuiZoneOptimized } from '@taiga-ui/cdk/observables';
import { tuiIsNativeFocused } from '@taiga-ui/cdk/utils/focus';

/**
 * A component to display a hint
 */
const TUI_HINT_COMPONENT = tuiCreateTokenFromFactory(() => TuiHintComponent);

/**
 * Service for displaying hints/tooltips
 */
class TuiHintService extends BehaviorSubject {
    constructor() {
        super([]);
    }
    add(directive) {
        this.next(this.value.concat(directive));
    }
    remove(directive) {
        if (this.value.includes(directive)) {
            this.next(this.value.filter((hint) => hint !== directive));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class TuiHintDriver extends TuiDriverDirective {
    constructor() {
        super(...arguments);
        this.type = 'hint';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintDriver, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintDriver, isStandalone: true, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintDriver, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }] });

const TUI_HINT_DIRECTIONS = [
    'bottom-left',
    'bottom',
    'bottom-right',
    'top-left',
    'top',
    'top-right',
    'left-top',
    'left',
    'left-bottom',
    'right-top',
    'right',
    'right-bottom',
];
/** Default values for hint options */
const TUI_HINT_DEFAULT_OPTIONS = {
    direction: 'bottom-left',
    showDelay: 500,
    hideDelay: 200,
    appearance: '',
    /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
    icon: '@tui.circle-help',
};
/**
 * Default parameters for hint directive
 */
const TUI_HINT_OPTIONS = tuiCreateToken(TUI_HINT_DEFAULT_OPTIONS);
const tuiHintOptionsProvider = (override) => ({
    provide: TUI_HINT_OPTIONS,
    deps: [
        [new Optional(), new Self(), TuiHintOptionsDirective],
        [new Optional(), new SkipSelf(), TUI_HINT_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS),
});
/**
 * @deprecated: drop in 5.0
 */
class TuiHintOptionsDirective {
    constructor() {
        this.options = inject(TUI_HINT_OPTIONS, { skipSelf: true });
        this.direction = this.options.direction;
        this.appearance = this.options.appearance;
        this.showDelay = this.options.showDelay;
        this.hideDelay = this.options.hideDelay;
        this.icon = this.options.icon;
        this.change$ = new Subject();
    }
    ngOnChanges() {
        this.change$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintOptionsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintOptionsDirective, isStandalone: true, selector: "[tuiHintContent]", inputs: { content: ["tuiHintContent", "content"], direction: ["tuiHintDirection", "direction"], appearance: ["tuiHintAppearance", "appearance"], showDelay: ["tuiHintShowDelay", "showDelay"], hideDelay: ["tuiHintHideDelay", "hideDelay"] }, providers: [tuiProvide(TUI_HINT_OPTIONS, TuiHintOptionsDirective)], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintOptionsDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHintContent]',
                    providers: [tuiProvide(TUI_HINT_OPTIONS, TuiHintOptionsDirective)],
                }]
        }], propDecorators: { content: [{
                type: Input,
                args: ['tuiHintContent']
            }], direction: [{
                type: Input,
                args: ['tuiHintDirection']
            }], appearance: [{
                type: Input,
                args: ['tuiHintAppearance']
            }], showDelay: [{
                type: Input,
                args: ['tuiHintShowDelay']
            }], hideDelay: [{
                type: Input,
                args: ['tuiHintHideDelay']
            }] } });

class TuiHintHover extends TuiDriver {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.isMobile = inject(TUI_IS_MOBILE);
        this.el = tuiInjectElement();
        this.hovered$ = inject(TuiHoveredService);
        this.options = inject(TUI_HINT_OPTIONS);
        this.visible = false;
        this.toggle$ = new Subject();
        this.stream$ = merge(this.toggle$.pipe(switchMap((visible) => this.isMobile
            ? of(visible)
            : of(visible).pipe(delay(visible ? 0 : this.tuiHintHideDelay))), takeUntil(this.hovered$), repeat()), this.hovered$.pipe(switchMap((visible) => this.isMobile
            ? of(visible)
            : of(visible).pipe(delay(visible ? this.tuiHintShowDelay : this.tuiHintHideDelay))), takeUntil(this.toggle$), repeat())).pipe(filter(() => this.enabled), map((value) => value &&
            (this.el.hasAttribute('tuiHintPointer') || !tuiIsObscured(this.el))), tap((visible) => {
            this.visible = visible;
        }));
        this.parent = inject(TuiHintHover, {
            optional: true,
            skipSelf: true,
        });
        this.tuiHintShowDelay = this.options.showDelay;
        this.tuiHintHideDelay = this.options.hideDelay;
        this.type = 'hint';
        this.enabled = true;
    }
    toggle(visible = !this.visible) {
        this.toggle$.next(visible);
        this.parent?.toggle(visible);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintHover, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintHover, isStandalone: true, inputs: { tuiHintShowDelay: "tuiHintShowDelay", tuiHintHideDelay: "tuiHintHideDelay" }, providers: [tuiAsDriver(TuiHintHover), TuiHoveredService], exportAs: ["tuiHintHover"], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintHover, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
                    exportAs: 'tuiHintHover',
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiHintShowDelay: [{
                type: Input
            }], tuiHintHideDelay: [{
                type: Input
            }] } });

const GAP$1 = 8;
const ARROW_OFFSET = 24;
const TOP = 0;
const LEFT = 1;
class TuiHintPosition extends TuiPositionAccessor {
    constructor() {
        super(...arguments);
        this.offset = inject(TUI_IS_MOBILE) ? 16 : 8;
        this.viewport = inject(TUI_VIEWPORT);
        this.accessor = tuiFallbackAccessor('hint')(inject(TuiRectAccessor), inject(TuiHintDirective));
        this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => ({ ...acc, [direction]: [0, 0] }), {});
        this.direction = inject(TUI_HINT_OPTIONS).direction;
        this.directionChange = new EventEmitter();
        this.type = 'hint';
    }
    emitDirection(direction) {
        this.directionChange.emit(direction);
    }
    getPosition(rect, el) {
        const width = el?.clientWidth ?? rect.width;
        const height = el?.clientHeight ?? rect.height;
        const hostRect = this.accessor.getClientRect() ?? EMPTY_CLIENT_RECT;
        const leftCenter = hostRect.left + hostRect.width / 2;
        const topCenter = hostRect.top + hostRect.height / 2;
        this.points['top-left'][TOP] = hostRect.top - height - this.offset;
        this.points['top-left'][LEFT] = leftCenter - width + ARROW_OFFSET;
        this.points.top[TOP] = this.points['top-left'][TOP];
        this.points.top[LEFT] = leftCenter - width / 2;
        this.points['top-right'][TOP] = this.points['top-left'][TOP];
        this.points['top-right'][LEFT] = leftCenter - ARROW_OFFSET;
        this.points['bottom-left'][TOP] = hostRect.bottom + this.offset;
        this.points['bottom-left'][LEFT] = this.points['top-left'][LEFT];
        this.points.bottom[TOP] = this.points['bottom-left'][TOP];
        this.points.bottom[LEFT] = this.points.top[LEFT];
        this.points['bottom-right'][TOP] = this.points['bottom-left'][TOP];
        this.points['bottom-right'][LEFT] = this.points['top-right'][LEFT];
        this.points['left-top'][TOP] = topCenter - height + ARROW_OFFSET;
        this.points['left-top'][LEFT] = hostRect.left - width - this.offset;
        this.points.left[TOP] = topCenter - height / 2;
        this.points.left[LEFT] = this.points['left-top'][LEFT];
        this.points['left-bottom'][TOP] = topCenter - ARROW_OFFSET;
        this.points['left-bottom'][LEFT] = this.points['left-top'][LEFT];
        this.points['right-top'][TOP] = this.points['left-top'][TOP];
        this.points['right-top'][LEFT] = hostRect.right + this.offset;
        this.points.right[TOP] = this.points.left[TOP];
        this.points.right[LEFT] = this.points['right-top'][LEFT];
        this.points['right-bottom'][TOP] = this.points['left-bottom'][TOP];
        this.points['right-bottom'][LEFT] = this.points['right-top'][LEFT];
        const priorityDirections = Array.isArray(this.direction)
            ? this.direction
            : [this.direction];
        const sortedDirections = priorityDirections.concat(TUI_HINT_DIRECTIONS);
        const direction = sortedDirections.find((direction) => this.checkPosition(this.points[direction], width, height));
        this.emitDirection(direction || this.fallback);
        return this.points[direction || this.fallback];
    }
    get fallback() {
        return this.points.top[TOP] >
            this.viewport.getClientRect().bottom - this.points.bottom[TOP]
            ? 'top'
            : 'bottom';
    }
    checkPosition([top, left], width, height) {
        const viewport = this.viewport.getClientRect();
        return (top > GAP$1 &&
            left > GAP$1 &&
            top + height < viewport.bottom - GAP$1 &&
            left + width < viewport.right - GAP$1);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintPosition, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintPosition, isStandalone: true, inputs: { direction: ["tuiHintDirection", "direction"] }, outputs: { directionChange: "tuiHintDirectionChange" }, usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiHintPosition.prototype, "emitDirection", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintPosition, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], propDecorators: { direction: [{
                type: Input,
                args: ['tuiHintDirection']
            }], directionChange: [{
                type: Output,
                args: ['tuiHintDirectionChange']
            }], emitDirection: [] } });

class TuiHintDirective {
    constructor() {
        this.service = inject(TuiHintService);
        this.appearance = inject(TUI_HINT_OPTIONS).appearance;
        this.content = signal(null);
        this.component = inject((PolymorpheusComponent));
        this.el = tuiInjectElement();
        this.activeZone = inject(TuiActiveZone, { optional: true });
        this.type = 'hint';
    }
    set tuiHint(content) {
        this.content.set(content);
        if (!content) {
            this.toggle(false);
        }
    }
    ngOnDestroy() {
        this.toggle(false);
    }
    getClientRect() {
        return this.el.getBoundingClientRect();
    }
    toggle(show) {
        if (show && this.content()) {
            this.service.add(this);
        }
        else {
            this.service.remove(this);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintDirective, isStandalone: true, selector: "[tuiHint]:not(ng-container):not(ng-template)", inputs: { context: ["tuiHintContext", "context"], appearance: ["tuiHintAppearance", "appearance"], tuiHint: "tuiHint" }, providers: [
            tuiAsRectAccessor(TuiHintDirective),
            tuiAsVehicle(TuiHintDirective),
            {
                provide: PolymorpheusComponent,
                deps: [TUI_HINT_COMPONENT, INJECTOR],
                useClass: PolymorpheusComponent,
            },
        ], hostDirectives: [{ directive: TuiHintDriver }, { directive: TuiHintHover, inputs: ["tuiHintHideDelay", "tuiHintHideDelay", "tuiHintShowDelay", "tuiHintShowDelay"] }, { directive: TuiHintPosition, inputs: ["tuiHintDirection", "tuiHintDirection"], outputs: ["tuiHintDirectionChange", "tuiHintDirectionChange"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHint]:not(ng-container):not(ng-template)',
                    providers: [
                        tuiAsRectAccessor(TuiHintDirective),
                        tuiAsVehicle(TuiHintDirective),
                        {
                            provide: PolymorpheusComponent,
                            deps: [TUI_HINT_COMPONENT, INJECTOR],
                            useClass: PolymorpheusComponent,
                        },
                    ],
                    hostDirectives: [
                        TuiHintDriver,
                        {
                            directive: TuiHintHover,
                            inputs: ['tuiHintHideDelay', 'tuiHintShowDelay'],
                        },
                        {
                            directive: TuiHintPosition,
                            inputs: ['tuiHintDirection'],
                            outputs: ['tuiHintDirectionChange'],
                        },
                    ],
                }]
        }], propDecorators: { context: [{
                type: Input,
                args: ['tuiHintContext']
            }], appearance: [{
                type: Input,
                args: ['tuiHintAppearance']
            }], tuiHint: [{
                type: Input
            }] } });

class TuiHintPointer extends TuiHintHover {
    constructor() {
        super(...arguments);
        this.currentRect = EMPTY_CLIENT_RECT;
    }
    getClientRect() {
        return this.currentRect;
    }
    onMove({ clientX, clientY }) {
        this.currentRect = tuiPointToClientRect(clientX, clientY);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintPointer, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintPointer, isStandalone: true, selector: "[tuiHint][tuiHintPointer]", host: { listeners: { "mousemove.silent": "onMove($event)" } }, providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintPointer, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHint][tuiHintPointer]',
                    providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
                    host: {
                        '(mousemove.silent)': 'onMove($event)',
                    },
                }]
        }] });

class TuiHintUnstyledComponent {
    constructor() {
        this.context = injectContext();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintUnstyledComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintUnstyledComponent, isStandalone: true, selector: "ng-component", host: { properties: { "@tuiParentAnimation": "" } }, ngImport: i0, template: '<ng-container *polymorpheusOutlet="context.$implicit.content()" />', isInline: true, dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], animations: [tuiParentAnimation], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintUnstyledComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    imports: [PolymorpheusOutlet],
                    template: '<ng-container *polymorpheusOutlet="context.$implicit.content()" />',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [tuiParentAnimation],
                    host: { '[@tuiParentAnimation]': '' },
                }]
        }] });
class TuiHintUnstyled {
    constructor() {
        const hint = inject((TuiHintDirective));
        hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent);
        hint.content.set(inject((TemplateRef)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintUnstyled, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintUnstyled, isStandalone: true, selector: "ng-template[tuiHint]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintUnstyled, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiHint]',
                }]
        }], ctorParameters: function () { return []; } });

const GAP = 8;
const TUI_HINT_PROVIDERS = [
    TuiPositionService,
    TuiHoveredService,
    tuiPositionAccessorFor('hint', TuiHintPosition),
    tuiRectAccessorFor('hint', TuiHintDirective),
];
class TuiHintComponent {
    constructor() {
        this.el = tuiInjectElement();
        this.hover = inject(TuiHintHover);
        this.vvs = inject(TuiVisualViewportService);
        this.viewport = inject(TUI_VIEWPORT);
        this.desktop = { value: '', params: { end: 1, start: 1 } };
        this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED), 'cubic-bezier(0.35, 1.3, 0.25, 1)');
        this.pointer = inject(TuiHintPointer, { optional: true });
        this.accessor = inject(TuiRectAccessor);
        this.hint = injectContext().$implicit;
        this.isMobile = inject(TUI_IS_MOBILE);
        this.content = this.hint.component.component === TuiHintUnstyledComponent
            ? signal('')
            : this.hint.content;
        this.appearance = this.hint.appearance ||
            this.hint.el.closest('[tuiTheme]')?.getAttribute('tuiTheme');
        inject(TuiPositionService)
            .pipe(takeWhile(() => this.hint.el.isConnected), map((point) => this.vvs.correct(point)), takeUntilDestroyed())
            .subscribe({
            next: ([top, left]) => this.update(top, left),
            complete: () => this.hover.toggle(false),
        });
        inject(TuiHoveredService)
            .pipe(takeUntilDestroyed())
            .subscribe((hover) => this.hover.toggle(hover));
    }
    onClick(target) {
        if ((!target.closest('tui-hint') && !this.hint.el.contains(target)) ||
            tuiIsObscured(this.hint.el)) {
            this.hover.toggle(false);
        }
    }
    apply(top, left, beakTop, beakLeft) {
        this.el.style.top = top;
        this.el.style.left = left;
        this.el.style.setProperty('--top', `${beakTop}%`);
        this.el.style.setProperty('--left', `${beakLeft}%`);
        this.el.style.setProperty('--rotate', !beakLeft || Math.ceil(beakLeft) === 100 ? '90deg' : '0deg');
    }
    update(top, left) {
        const { clientHeight, clientWidth } = this.el;
        const rect = this.accessor.getClientRect();
        const viewport = this.viewport.getClientRect();
        if (rect === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) {
            return;
        }
        const safeLeft = tuiClamp(left, GAP, viewport.width - clientWidth - GAP);
        const [beakTop, beakLeft] = this.vvs.correct([
            rect.top + rect.height / 2 - top,
            rect.left + rect.width / 2 - safeLeft,
        ]);
        this.apply(tuiPx(Math.round(top)), tuiPx(Math.round(safeLeft)), Math.round((tuiClamp(beakTop, 0, clientHeight) / clientHeight) * 100), Math.round((tuiClamp(beakLeft, 0, clientWidth) / clientWidth) * 100));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintComponent, isStandalone: true, selector: "tui-hint", host: { listeners: { "document:click": "onClick($event.target)" }, properties: { "@tuiScaleIn": "isMobile ? options : desktop", "@tuiFadeIn": "options", "class._untouchable": "pointer", "class._mobile": "isMobile", "attr.data-appearance": "appearance", "attr.tuiTheme": "appearance" } }, providers: TUI_HINT_PROVIDERS, ngImport: i0, template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context"
            [innerHTML]="text"
        ></span>
    `, isInline: true, styles: [":host{position:absolute;max-inline-size:18rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}:host:before{content:\"\";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox=\"0 0 12 8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z\" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox=\"0 0 12 8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z\" /></svg>');transform:translate(-50%,-50%) rotate(var(--rotate))}:host._mobile{font:var(--tui-font-text-m)}:host._mobile:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 18\"><path d=\"M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z\" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 18\"><path d=\"M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z\" /></svg>')}:host[data-appearance=error]{background:var(--tui-status-negative)}:host[data-appearance=dark]{background:var(--tui-background-accent-opposite-hover);color:var(--tui-background-base);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}:host:not([style*=top]){visibility:hidden}:host._untouchable{pointer-events:none}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], animations: [tuiFadeIn, tuiScaleIn], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiHintComponent.prototype, "apply", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-hint', imports: [PolymorpheusOutlet], template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context"
            [innerHTML]="text"
        ></span>
    `, changeDetection: ChangeDetectionStrategy.OnPush, providers: TUI_HINT_PROVIDERS, animations: [tuiFadeIn, tuiScaleIn], host: {
                        '[@tuiScaleIn]': 'isMobile ? options : desktop',
                        '[@tuiFadeIn]': 'options',
                        '[class._untouchable]': 'pointer',
                        '[class._mobile]': 'isMobile',
                        '[attr.data-appearance]': 'appearance',
                        '[attr.tuiTheme]': 'appearance',
                        '(document:click)': 'onClick($event.target)',
                    }, styles: [":host{position:absolute;max-inline-size:18rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}:host:before{content:\"\";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox=\"0 0 12 8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z\" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox=\"0 0 12 8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z\" /></svg>');transform:translate(-50%,-50%) rotate(var(--rotate))}:host._mobile{font:var(--tui-font-text-m)}:host._mobile:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 18\"><path d=\"M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z\" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 18\"><path d=\"M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z\" /></svg>')}:host[data-appearance=error]{background:var(--tui-status-negative)}:host[data-appearance=dark]{background:var(--tui-background-accent-opposite-hover);color:var(--tui-background-base);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}:host:not([style*=top]){visibility:hidden}:host._untouchable{pointer-events:none}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { apply: [] } });

class TuiHintDescribe extends TuiDriver {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.doc = inject(DOCUMENT);
        this.el = tuiInjectElement();
        this.zone = inject(NgZone);
        this.id$ = new BehaviorSubject('');
        this.stream$ = this.id$.pipe(distinctUntilChanged(), tuiIfMap(() => fromEvent(this.doc, 'keydown', { capture: true }), tuiIsPresent), switchMap(() => this.focused
            ? of(false)
            : merge(tuiTypedFromEvent(this.doc, 'keyup'), tuiTypedFromEvent(this.element, 'blur')).pipe(map(() => this.focused))), debounce((visible) => visible ? timer(1000, tuiZonefreeScheduler(this.zone)) : of(null)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized());
        this.type = 'hint';
    }
    set tuiHintDescribe(id) {
        this.id$.next(id || '');
    }
    get element() {
        return this.doc.getElementById(this.id$.value || '') || this.el;
    }
    get focused() {
        return tuiIsNativeFocused(this.element);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintDescribe, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintDescribe, isStandalone: true, selector: "[tuiHintDescribe]", inputs: { tuiHintDescribe: "tuiHintDescribe" }, providers: [tuiAsDriver(TuiHintDescribe)], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiHintDescribe.prototype, "element", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintDescribe, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHintDescribe]',
                    providers: [tuiAsDriver(TuiHintDescribe)],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiHintDescribe: [{
                type: Input
            }], element: [] } });

class TuiHintHost extends TuiRectAccessor {
    constructor() {
        super(...arguments);
        this.type = 'hint';
    }
    getClientRect() {
        return this.tuiHintHost?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintHost, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintHost, isStandalone: true, selector: "[tuiHint][tuiHintHost]", inputs: { tuiHintHost: "tuiHintHost" }, providers: [tuiAsRectAccessor(TuiHintHost)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintHost, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHint][tuiHintHost]',
                    providers: [tuiAsRectAccessor(TuiHintHost)],
                }]
        }], propDecorators: { tuiHintHost: [{
                type: Input
            }] } });

class TuiHintManual extends TuiDriver {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.hover = inject(TuiHintHover);
        this.stream$ = new BehaviorSubject(false);
        this.tuiHintManual = false;
        this.type = 'hint';
        this.hover.enabled = false;
    }
    ngOnChanges() {
        this.stream$.next(this.tuiHintManual);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintManual, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintManual, isStandalone: true, selector: "[tuiHint][tuiHintManual]", inputs: { tuiHintManual: "tuiHintManual" }, providers: [tuiAsDriver(TuiHintManual)], usesInheritance: true, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintManual, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHint][tuiHintManual]',
                    providers: [tuiAsDriver(TuiHintManual)],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiHintManual: [{
                type: Input
            }] } });

class TuiHintOverflow {
    constructor() {
        this.hint = inject(TuiHintDirective);
    }
    onMouseEnter({ scrollWidth, clientWidth, textContent }) {
        this.hint.tuiHint = scrollWidth > clientWidth ? textContent : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintOverflow, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintOverflow, isStandalone: true, selector: "[tuiHintOverflow]", host: { listeners: { "mouseenter": "onMouseEnter($event.currentTarget)" } }, hostDirectives: [{ directive: TuiHintDirective, inputs: ["tuiHintAppearance", "tuiHintAppearance"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintOverflow, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHintOverflow]',
                    hostDirectives: [
                        {
                            directive: TuiHintDirective,
                            inputs: ['tuiHintAppearance'],
                        },
                    ],
                    host: {
                        '(mouseenter)': 'onMouseEnter($event.currentTarget)',
                    },
                }]
        }] });

const TuiHint = [
    TuiHintComponent,
    TuiHintDirective,
    TuiHintOptionsDirective,
    TuiHintUnstyled,
    TuiHintDriver,
    TuiHintPosition,
    TuiHintHover,
    TuiHintOverflow,
    TuiHintDescribe,
    TuiHintHost,
    TuiHintManual,
    TuiHintPointer,
];

class TuiHints {
    constructor() {
        this.hints$ = inject(TuiHintService);
        this.destroyRef = inject(DestroyRef);
        this.cdr = inject(ChangeDetectorRef);
        this.hints = [];
    }
    ngOnInit() {
        // Due to this view being parallel to app content, `markForCheck` from `async` pipe
        // can happen after view was checked, so calling `detectChanges` instead
        this.hints$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((hints) => {
            this.hints = hints;
            this.cdr.detectChanges();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHints, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiHints, isStandalone: true, selector: "tui-hints", host: { attributes: { "aria-live": "polite" } }, ngImport: i0, template: "<div\n    *ngFor=\"let hint of hints\"\n    role=\"tooltip\"\n    @tuiParentAnimation\n    [tuiActiveZoneParent]=\"hint.activeZone || null\"\n>\n    <ng-container *polymorpheusOutlet=\"hint.component; context: {$implicit: hint}\" />\n</div>\n", styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiActiveZone, selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)", inputs: ["tuiActiveZoneParent"], outputs: ["tuiActiveZoneChange"], exportAs: ["tuiActiveZone"] }], animations: [tuiParentAnimation], changeDetection: i0.ChangeDetectionStrategy.Default }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHints, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-hints', imports: [NgForOf, PolymorpheusOutlet, PolymorpheusTemplate, TuiActiveZone], changeDetection: ChangeDetectionStrategy.Default, animations: [tuiParentAnimation], host: {
                        'aria-live': 'polite',
                    }, template: "<div\n    *ngFor=\"let hint of hints\"\n    role=\"tooltip\"\n    @tuiParentAnimation\n    [tuiActiveZoneParent]=\"hint.activeZone || null\"\n>\n    <ng-container *polymorpheusOutlet=\"hint.component; context: {$implicit: hint}\" />\n</div>\n", styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_HINT_COMPONENT, TUI_HINT_DEFAULT_OPTIONS, TUI_HINT_DIRECTIONS, TUI_HINT_OPTIONS, TUI_HINT_PROVIDERS, TuiHint, TuiHintComponent, TuiHintDescribe, TuiHintDirective, TuiHintDriver, TuiHintHost, TuiHintHover, TuiHintManual, TuiHintOptionsDirective, TuiHintOverflow, TuiHintPointer, TuiHintPosition, TuiHintService, TuiHintUnstyled, TuiHintUnstyledComponent, TuiHints, tuiHintOptionsProvider };
//# sourceMappingURL=taiga-ui-core-directives-hint.mjs.map
