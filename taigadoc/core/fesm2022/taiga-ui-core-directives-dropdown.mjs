import * as i0 from '@angular/core';
import { Injectable, Directive, Optional, Self, SkipSelf, inject, Input, EventEmitter, Output, ChangeDetectorRef, INJECTOR, signal, TemplateRef, Component, ChangeDetectionStrategy, computed, ElementRef, ContentChild, ViewContainerRef } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { WA_WINDOW } from '@ng-web-apis/common';
import * as i1 from '@taiga-ui/cdk/directives/active-zone';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { tuiInjectElement, tuiGetActualTarget, tuiPointToClientRect, tuiIsElement, tuiIsHTMLElement, tuiIsElementEditable, tuiIsTextNode, tuiIsTextfield } from '@taiga-ui/cdk/utils/dom';
import { tuiClamp } from '@taiga-ui/cdk/utils/math';
import { tuiCreateTokenFromFactory, tuiCreateToken, tuiProvide, tuiPure, tuiPx, tuiProvideOptions, tuiIsString, tuiDirectiveBinding } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiDropdownAnimation } from '@taiga-ui/core/animations';
import { TuiDriverDirective, TuiPositionAccessor, tuiFallbackAccessor, TuiRectAccessor, tuiAsRectAccessor, tuiAsVehicle, tuiPositionAccessorFor, tuiRectAccessorFor, tuiAsDriver, TuiDriver, tuiAsPositionAccessor } from '@taiga-ui/core/classes';
import { TuiScrollbar } from '@taiga-ui/core/components/scrollbar';
import { TuiVisualViewportService, TuiPositionService } from '@taiga-ui/core/services';
import { TUI_VIEWPORT, TUI_ANIMATIONS_SPEED, TUI_SELECTION_STREAM } from '@taiga-ui/core/tokens';
import { tuiOverrideOptions, tuiCheckFixedPosition, tuiToAnimationOptions, tuiGetWordRange } from '@taiga-ui/core/utils';
import { PolymorpheusComponent, PolymorpheusTemplate, PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { BehaviorSubject, Subject, throttleTime, takeWhile, map, merge, filter, fromEvent, switchMap, delay, startWith, takeUntil, distinctUntilChanged, of, tap, share, combineLatest } from 'rxjs';
import { __decorate } from 'tslib';
import { tuiZonefreeScheduler, tuiWatch, tuiTypedFromEvent, tuiZoneOptimized } from '@taiga-ui/cdk/observables';
import { TuiPortalService, TuiPortals, tuiAsPortal } from '@taiga-ui/cdk/classes';
import { EMPTY_CLIENT_RECT, TUI_TRUE_HANDLER, CHAR_ZERO_WIDTH_SPACE, CHAR_NO_BREAK_SPACE } from '@taiga-ui/cdk/constants';
import { TUI_IS_TOUCH, TUI_RANGE } from '@taiga-ui/cdk/tokens';
import { shouldCall } from '@taiga-ui/event-plugins';
import { DOCUMENT } from '@angular/common';
import * as i1$1 from '@taiga-ui/cdk/directives/obscured';
import { TuiObscured } from '@taiga-ui/cdk/directives/obscured';
import { tuiIsNativeKeyboardFocusable, tuiGetClosestFocusable, tuiIsNativeFocusedIn, tuiGetNativeFocused } from '@taiga-ui/cdk/utils/focus';
import { tuiIsEditingKey, tuiOverrideOptions as tuiOverrideOptions$1 } from '@taiga-ui/core/utils/miscellaneous';

class TuiDropdownDriver extends BehaviorSubject {
    constructor() {
        super(false);
        this.type = 'dropdown';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriver, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriver }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriver, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
class TuiDropdownDriverDirective extends TuiDriverDirective {
    constructor() {
        super(...arguments);
        this.type = 'dropdown';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriverDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownDriverDirective, isStandalone: true, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDriverDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }] });

/**
 * A component to display a dropdown
 */
const TUI_DROPDOWN_COMPONENT = tuiCreateTokenFromFactory(() => TuiDropdownComponent);
const TUI_DROPDOWN_CONTEXT = tuiCreateToken();

class TuiDropdownService extends TuiPortalService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/** Default values for dropdown options */
const TUI_DROPDOWN_DEFAULT_OPTIONS = {
    align: 'left',
    direction: null,
    limitWidth: 'auto',
    maxHeight: 400,
    minHeight: 80,
    offset: 4,
    appearance: '',
};
/**
 * Default parameters for dropdown directive
 */
const TUI_DROPDOWN_OPTIONS = tuiCreateToken(TUI_DROPDOWN_DEFAULT_OPTIONS);
const tuiDropdownOptionsProvider = (override) => ({
    provide: TUI_DROPDOWN_OPTIONS,
    deps: [
        [new Optional(), new Self(), TuiDropdownOptionsDirective],
        [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS),
});
class TuiDropdownOptionsDirective {
    constructor() {
        this.options = inject(TUI_DROPDOWN_OPTIONS, { skipSelf: true });
        this.align = this.options.align;
        this.appearance = this.options.appearance;
        this.direction = this.options.direction;
        this.limitWidth = this.options.limitWidth;
        this.minHeight = this.options.minHeight;
        this.maxHeight = this.options.maxHeight;
        this.offset = this.options.offset;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOptionsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownOptionsDirective, isStandalone: true, selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]", inputs: { align: ["tuiDropdownAlign", "align"], appearance: ["tuiDropdownAppearance", "appearance"], direction: ["tuiDropdownDirection", "direction"], limitWidth: ["tuiDropdownLimitWidth", "limitWidth"], minHeight: ["tuiDropdownMinHeight", "minHeight"], maxHeight: ["tuiDropdownMaxHeight", "maxHeight"], offset: ["tuiDropdownOffset", "offset"] }, providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOptionsDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]',
                    providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)],
                }]
        }], propDecorators: { align: [{
                type: Input,
                args: ['tuiDropdownAlign']
            }], appearance: [{
                type: Input,
                args: ['tuiDropdownAppearance']
            }], direction: [{
                type: Input,
                args: ['tuiDropdownDirection']
            }], limitWidth: [{
                type: Input,
                args: ['tuiDropdownLimitWidth']
            }], minHeight: [{
                type: Input,
                args: ['tuiDropdownMinHeight']
            }], maxHeight: [{
                type: Input,
                args: ['tuiDropdownMaxHeight']
            }], offset: [{
                type: Input,
                args: ['tuiDropdownOffset']
            }] } });

class TuiDropdownPosition extends TuiPositionAccessor {
    constructor() {
        super(...arguments);
        this.options = inject(TUI_DROPDOWN_OPTIONS);
        this.viewport = inject(TUI_VIEWPORT);
        this.directionChange = new EventEmitter();
        this.type = 'dropdown';
        this.accessor = tuiFallbackAccessor('dropdown')(inject(TuiRectAccessor), inject(TuiDropdownDirective, { optional: true }));
    }
    emitDirection(direction) {
        this.directionChange.emit(direction);
    }
    getPosition({ width, height }) {
        if (!width && !height) {
            this.previous = undefined;
        }
        const hostRect = this.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
        const viewportRect = this.viewport.getClientRect();
        const { minHeight, align, direction, offset, limitWidth } = this.options;
        const viewport = {
            top: viewportRect.top - offset,
            bottom: viewportRect.bottom + offset,
            right: viewportRect.right - offset,
            left: viewportRect.left + offset,
        };
        const previous = this.previous || direction || 'bottom';
        const available = {
            top: hostRect.top - 2 * offset - viewport.top,
            bottom: viewport.bottom - hostRect.bottom - 2 * offset,
        };
        const rectWidth = limitWidth === 'fixed' ? hostRect.width : width;
        const right = Math.max(hostRect.right - rectWidth, offset);
        const left = hostRect.left + width < viewport.right ? hostRect.left : right;
        const position = {
            top: hostRect.top - offset - height,
            bottom: hostRect.bottom + offset,
            right: Math.max(viewport.left, right),
            center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right
                ? hostRect.left + hostRect.width / 2 - width / 2
                : right,
            left: Math.max(viewport.left, left),
        };
        const better = available.top > available.bottom ? 'top' : 'bottom';
        if ((available[previous] > minHeight && direction) ||
            available[previous] > height) {
            this.emitDirection(previous);
            return [position[previous], position[align]];
        }
        this.previous = better;
        this.emitDirection(better);
        return [position[better], position[align]];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPosition, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownPosition, isStandalone: true, outputs: { directionChange: "tuiDropdownDirectionChange" }, usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiDropdownPosition.prototype, "emitDirection", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPosition, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], propDecorators: { directionChange: [{
                type: Output,
                args: ['tuiDropdownDirectionChange']
            }], emitDirection: [] } });

class TuiDropdownDirective {
    constructor() {
        this.refresh$ = new Subject();
        this.service = inject(TuiDropdownService);
        this.cdr = inject(ChangeDetectorRef);
        this.sub = this.refresh$
            .pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed())
            .subscribe(() => {
            this.ref()?.changeDetectorRef.detectChanges();
            this.ref()?.changeDetectorRef.markForCheck();
        });
        this.el = tuiInjectElement();
        this.type = 'dropdown';
        this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR));
        this.ref = signal(null);
    }
    set tuiDropdown(content) {
        this.content =
            content instanceof TemplateRef
                ? new PolymorpheusTemplate(content, this.cdr)
                : content;
    }
    get position() {
        return tuiCheckFixedPosition(this.el) ? 'fixed' : 'absolute';
    }
    ngAfterViewChecked() {
        this.refresh$.next();
    }
    ngOnChanges() {
        if (!this.content) {
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
        const ref = this.ref();
        if (show && this.content && !ref) {
            this.ref.set(this.service.add(this.component));
        }
        else if (!show && ref) {
            this.ref.set(null);
            this.service.remove(ref);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownDirective, isStandalone: true, selector: "[tuiDropdown]:not(ng-container):not(ng-template)", inputs: { tuiDropdown: "tuiDropdown" }, providers: [
            tuiAsRectAccessor(TuiDropdownDirective),
            tuiAsVehicle(TuiDropdownDirective),
        ], exportAs: ["tuiDropdown"], usesOnChanges: true, hostDirectives: [{ directive: TuiDropdownDriverDirective }, { directive: TuiDropdownPosition, outputs: ["tuiDropdownDirectionChange", "tuiDropdownDirectionChange"] }], ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiDropdownDirective.prototype, "position", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdown]:not(ng-container):not(ng-template)',
                    providers: [
                        tuiAsRectAccessor(TuiDropdownDirective),
                        tuiAsVehicle(TuiDropdownDirective),
                    ],
                    exportAs: 'tuiDropdown',
                    hostDirectives: [
                        TuiDropdownDriverDirective,
                        {
                            directive: TuiDropdownPosition,
                            outputs: ['tuiDropdownDirectionChange'],
                        },
                    ],
                }]
        }], propDecorators: { tuiDropdown: [{
                type: Input
            }], position: [] } });

/**
 * @description:
 * This component is used to show template in a portal
 * using default style of white rounded box with a shadow
 */
class TuiDropdownComponent {
    constructor() {
        this.el = tuiInjectElement();
        this.accessor = inject(TuiRectAccessor);
        this.win = inject(WA_WINDOW);
        this.vvs = inject(TuiVisualViewportService);
        this.animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.options = inject(TUI_DROPDOWN_OPTIONS);
        this.directive = inject(TuiDropdownDirective);
        this.context = inject(TUI_DROPDOWN_CONTEXT, { optional: true });
        this.theme = this.directive.el
            .closest('[tuiTheme]')
            ?.getAttribute('tuiTheme');
        this.sub = inject(TuiPositionService)
            .pipe(takeWhile(() => this.directive.el.isConnected && !!this.directive.el.offsetParent), map((v) => (this.directive.position === 'fixed' ? this.vvs.correct(v) : v)), map(([top, left]) => this.getStyles(top, left)), takeUntilDestroyed())
            .subscribe({
            next: (styles) => Object.assign(this.el.style, styles),
            complete: () => this.close?.(),
        });
        this.close = () => this.directive.toggle(false);
    }
    getStyles(top, left) {
        const { right } = this.el.getBoundingClientRect();
        const { maxHeight, minHeight, offset, limitWidth } = this.options;
        const { innerHeight } = this.win;
        const clientRect = this.el.offsetParent?.getBoundingClientRect();
        const { position } = this.directive;
        const rect = this.accessor.getClientRect();
        const offsetX = position === 'fixed' ? 0 : -(clientRect?.left || 0);
        const offsetY = position === 'fixed' ? 0 : -(clientRect?.top || 0);
        top += offsetY;
        left += offsetX;
        const sided = right <= rect.left || left >= rect.right;
        const isIntersecting = left < rect.right && right > rect.left && top < offsetY + 2 * offset;
        const available = isIntersecting
            ? rect.top - 2 * offset
            : offsetY + innerHeight - top - offset;
        return {
            position,
            top: tuiPx(Math.round(Math.max(top, offsetY + offset))),
            left: tuiPx(Math.round(left)),
            maxHeight: sided
                ? tuiPx(maxHeight)
                : tuiPx(Math.round(tuiClamp(available, minHeight, maxHeight))),
            width: limitWidth === 'fixed' ? tuiPx(Math.round(rect.width)) : '',
            minWidth: limitWidth === 'min' ? tuiPx(Math.round(rect.width)) : '',
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownComponent, isStandalone: true, selector: "tui-dropdown", host: { properties: { "@tuiDropdownAnimation": "animation", "attr.data-appearance": "options.appearance", "attr.tuiTheme": "theme" } }, providers: [
            TuiPositionService,
            tuiPositionAccessorFor('dropdown', TuiDropdownPosition),
            tuiRectAccessorFor('dropdown', TuiDropdownDirective),
        ], hostDirectives: [{ directive: i1.TuiActiveZone }], ngImport: i0, template: "<tui-scrollbar class=\"t-scroll\">\n    <div\n        *polymorpheusOutlet=\"directive.content as text; context: {$implicit: close}\"\n        class=\"t-primitive\"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n", styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;max-inline-size:calc(100% - 8px);isolation:isolate;pointer-events:auto}:host.ng-animating{pointer-events:none}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:100%;inline-size:-webkit-max-content;inline-size:max-content;overscroll-behavior:none}.t-primitive{padding:1rem}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "component", type: TuiScrollbar, selector: "tui-scrollbar", inputs: ["hidden"] }], animations: [tuiDropdownAnimation], changeDetection: i0.ChangeDetectionStrategy.Default }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-dropdown', imports: [PolymorpheusOutlet, PolymorpheusTemplate, TuiScrollbar], changeDetection: ChangeDetectionStrategy.Default, providers: [
                        TuiPositionService,
                        tuiPositionAccessorFor('dropdown', TuiDropdownPosition),
                        tuiRectAccessorFor('dropdown', TuiDropdownDirective),
                    ], animations: [tuiDropdownAnimation], hostDirectives: [TuiActiveZone], host: {
                        '[@tuiDropdownAnimation]': 'animation',
                        '[attr.data-appearance]': 'options.appearance',
                        '[attr.tuiTheme]': 'theme',
                    }, template: "<tui-scrollbar class=\"t-scroll\">\n    <div\n        *polymorpheusOutlet=\"directive.content as text; context: {$implicit: close}\"\n        class=\"t-primitive\"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n", styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;max-inline-size:calc(100% - 8px);isolation:isolate;pointer-events:auto}:host.ng-animating{pointer-events:none}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:100%;inline-size:-webkit-max-content;inline-size:max-content;overscroll-behavior:none}.t-primitive{padding:1rem}\n"] }]
        }] });

function activeZoneFilter(event) {
    return !event || !this.activeZone.contains(tuiGetActualTarget(event));
}
class TuiDropdownContext extends TuiRectAccessor {
    constructor() {
        super(...arguments);
        this.isTouch = inject(TUI_IS_TOUCH);
        this.driver = inject(TuiDropdownDriver);
        this.currentRect = EMPTY_CLIENT_RECT;
        this.userSelect = computed(() => (this.isTouch() ? 'none' : null));
        this.activeZone = inject(TuiActiveZone);
        this.type = 'dropdown';
    }
    getClientRect() {
        return this.currentRect;
    }
    closeDropdown(_event) {
        this.driver.next(false);
        this.currentRect = EMPTY_CLIENT_RECT;
    }
    onContextMenu(x, y) {
        this.currentRect = tuiPointToClientRect(x, y);
        this.driver.next(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownContext, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownContext, isStandalone: true, selector: "[tuiDropdownContext]", host: { listeners: { "document:pointerdown.silent": "closeDropdown($event)", "document:contextmenu.capture.silent": "closeDropdown($event)", "document:keydown.esc": "closeDropdown()", "longtap": "onContextMenu($event.detail.clientX, $event.detail.clientY)" }, properties: { "style.user-select": "userSelect()", "style.-webkit-user-select": "userSelect()", "style.-webkit-touch-callout": "userSelect()" } }, providers: [
            TuiActiveZone,
            TuiDropdownDriver,
            tuiAsDriver(TuiDropdownDriver),
            tuiAsRectAccessor(TuiDropdownContext),
        ], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    shouldCall(activeZoneFilter)
], TuiDropdownContext.prototype, "closeDropdown", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownContext, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownContext]',
                    providers: [
                        TuiActiveZone,
                        TuiDropdownDriver,
                        tuiAsDriver(TuiDropdownDriver),
                        tuiAsRectAccessor(TuiDropdownContext),
                    ],
                    host: {
                        '[style.user-select]': 'userSelect()',
                        '[style.-webkit-user-select]': 'userSelect()',
                        '[style.-webkit-touch-callout]': 'userSelect()',
                        '(document:pointerdown.silent)': 'closeDropdown($event)',
                        '(document:contextmenu.capture.silent)': 'closeDropdown($event)',
                        '(document:keydown.esc)': 'closeDropdown()',
                        '(longtap)': 'onContextMenu($event.detail.clientX, $event.detail.clientY)',
                    },
                }]
        }], propDecorators: { closeDropdown: [] } });

/** Default values for hint options */
const TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
    showDelay: 200,
    hideDelay: 500,
};
/**
 * Default parameters for dropdown hover directive
 */
const TUI_DROPDOWN_HOVER_OPTIONS = tuiCreateToken(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
function tuiDropdownHoverOptionsProvider(options) {
    return tuiProvideOptions(TUI_DROPDOWN_HOVER_OPTIONS, options, TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
}

function shouldClose(event) {
    return ('key' in event &&
        event.key.toLowerCase() === 'escape' &&
        this.tuiDropdownEnabled &&
        !!this.tuiDropdownOpen &&
        !this['dropdown']()?.nextElementSibling);
}
class TuiDropdownOpen {
    constructor() {
        this.directive = inject(TuiDropdownDirective);
        this.el = tuiInjectElement();
        this.obscured = inject(TuiObscured);
        this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
        this.sub = merge(this.obscured.tuiObscured.pipe(filter(Boolean)), inject(TuiActiveZone).tuiActiveZoneChange.pipe(filter((a) => !a)), fromEvent(this.el, 'focusin').pipe(map(tuiGetActualTarget), filter((target) => !this.host.contains(target) || !this.directive.ref())))
            .pipe(tuiWatch(), takeUntilDestroyed())
            .subscribe(() => this.toggle(false));
        this.tuiDropdownEnabled = true;
        this.tuiDropdownOpen = false;
        this.tuiDropdownOpenChange = new EventEmitter();
        // TODO: make it private when all legacy controls will be deleted from @taiga-ui/legacy (5.0)
        this.driver = inject(TuiDropdownDriver);
    }
    ngOnChanges() {
        this.update(!!this.tuiDropdownOpen);
    }
    toggle(open) {
        if (this.focused && !open) {
            this.host.focus({ preventScroll: true });
        }
        this.update(open);
    }
    onEsc(event) {
        event.preventDefault();
        this.toggle(false);
    }
    onClick(target) {
        if (!this.editable && this.host.contains(target)) {
            this.update(!this.tuiDropdownOpen);
        }
    }
    onArrow(event, up) {
        if (!tuiIsElement(event.target) ||
            !this.host.contains(event.target) ||
            !this.tuiDropdownEnabled) {
            return;
        }
        event.preventDefault();
        this.focusDropdown(up);
    }
    onKeydown({ key, target, defaultPrevented }) {
        if (!defaultPrevented &&
            tuiIsEditingKey(key) &&
            this.editable &&
            this.focused &&
            tuiIsHTMLElement(target) &&
            !tuiIsElementEditable(target)) {
            this.host.focus({ preventScroll: true });
        }
    }
    get host() {
        const initial = this.dropdownHost?.nativeElement || this.el;
        const focusable = tuiIsNativeKeyboardFocusable(initial)
            ? initial
            : tuiGetClosestFocusable({ initial, root: this.el });
        return this.dropdownHost?.nativeElement || focusable || this.el;
    }
    get editable() {
        return tuiIsElementEditable(this.host);
    }
    get focused() {
        return tuiIsNativeFocusedIn(this.host) || tuiIsNativeFocusedIn(this.dropdown());
    }
    update(open) {
        if (open && !this.tuiDropdownEnabled) {
            return this.drive();
        }
        this.tuiDropdownOpen = open;
        this.tuiDropdownOpenChange.emit(open);
        this.drive();
    }
    drive(open = !!this.tuiDropdownOpen && this.tuiDropdownEnabled) {
        this.obscured.tuiObscuredEnabled = open;
        this.driver.next(open);
    }
    focusDropdown(previous) {
        const root = this.dropdown();
        if (!root) {
            this.update(true);
            return;
        }
        const doc = this.el.ownerDocument;
        const child = root.appendChild(doc.createElement('div'));
        const initial = previous ? child : root;
        const focusable = tuiGetClosestFocusable({ initial, previous, root });
        child.remove();
        focusable?.focus();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOpen, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownOpen, isStandalone: true, selector: "[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]", inputs: { tuiDropdownEnabled: "tuiDropdownEnabled", tuiDropdownOpen: "tuiDropdownOpen" }, outputs: { tuiDropdownOpenChange: "tuiDropdownOpenChange" }, host: { listeners: { "click": "onClick($event.target)", "keydown.arrowDown": "onArrow($event, false)", "keydown.arrowUp": "onArrow($event, true)", "document:keydown.silent.capture": "onEsc($event)", "document:keydown.silent": "onKeydown($event)" } }, providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)], queries: [{ propertyName: "dropdownHost", first: true, predicate: ["tuiDropdownHost"], descendants: true, read: ElementRef }], usesOnChanges: true, hostDirectives: [{ directive: i1$1.TuiObscured }, { directive: i1.TuiActiveZone, inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"], outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"] }], ngImport: i0 }); }
}
__decorate([
    shouldCall(shouldClose)
], TuiDropdownOpen.prototype, "onEsc", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOpen, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]',
                    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
                    hostDirectives: [
                        TuiObscured,
                        {
                            directive: TuiActiveZone,
                            inputs: ['tuiActiveZoneParent'],
                            outputs: ['tuiActiveZoneChange'],
                        },
                    ],
                    host: {
                        '(click)': 'onClick($event.target)',
                        '(keydown.arrowDown)': 'onArrow($event, false)',
                        '(keydown.arrowUp)': 'onArrow($event, true)',
                        '(document:keydown.silent.capture)': 'onEsc($event)',
                        '(document:keydown.silent)': 'onKeydown($event)',
                    },
                }]
        }], propDecorators: { dropdownHost: [{
                type: ContentChild,
                args: ['tuiDropdownHost', { descendants: true, read: ElementRef }]
            }], tuiDropdownEnabled: [{
                type: Input
            }], tuiDropdownOpen: [{
                type: Input
            }], tuiDropdownOpenChange: [{
                type: Output
            }], onEsc: [] } });

class TuiDropdownHover extends TuiDriver {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.el = tuiInjectElement();
        this.doc = inject(DOCUMENT);
        this.options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
        this.activeZone = inject(TuiActiveZone);
        this.open = inject(TuiDropdownOpen, { optional: true });
        /**
         * Dropdown can be removed not only via click/touch –
         * swipe on mobile devices removes dropdown sheet without triggering new mouseover / mouseout events.
         */
        this.dropdownExternalRemoval$ = toObservable(inject(TuiDropdownDirective).ref).pipe(filter((x) => !x && this.hovered));
        this.stream$ = merge(this.dropdownExternalRemoval$.pipe(switchMap(() => tuiTypedFromEvent(this.doc, 'pointerdown').pipe(map(tuiGetActualTarget), delay(this.hideDelay), startWith(null), takeUntil(fromEvent(this.doc, 'mouseover'))))), tuiTypedFromEvent(this.doc, 'mouseover').pipe(map(tuiGetActualTarget)), tuiTypedFromEvent(this.doc, 'mouseout').pipe(map((e) => e.relatedTarget))).pipe(map((element) => tuiIsElement(element) && this.isHovered(element)), distinctUntilChanged(), switchMap((v) => of(v).pipe(delay(v ? this.showDelay : this.hideDelay))), tuiZoneOptimized(), tap((hovered) => {
            this.hovered = hovered;
            this.open?.toggle(hovered);
        }), share());
        this.showDelay = this.options.showDelay;
        this.hideDelay = this.options.hideDelay;
        this.hovered = false;
        this.type = 'dropdown';
    }
    onClick(event) {
        if (this.hovered && this.open) {
            event.preventDefault();
        }
    }
    isHovered(element) {
        const host = this.dropdownHost?.nativeElement || this.el;
        const hovered = host.contains(element);
        const child = !this.el.contains(element) && this.activeZone.contains(element);
        return hovered || child;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownHover, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownHover, isStandalone: true, selector: "[tuiDropdownHover]", inputs: { showDelay: ["tuiDropdownShowDelay", "showDelay"], hideDelay: ["tuiDropdownHideDelay", "hideDelay"] }, host: { listeners: { "click.capture": "onClick($event)" } }, providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)], queries: [{ propertyName: "dropdownHost", first: true, predicate: ["tuiDropdownHost"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownHover, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownHover]',
                    providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
                    host: {
                        '(click.capture)': 'onClick($event)',
                    },
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { dropdownHost: [{
                type: ContentChild,
                args: ['tuiDropdownHost', { descendants: true, read: ElementRef }]
            }], showDelay: [{
                type: Input,
                args: ['tuiDropdownShowDelay']
            }], hideDelay: [{
                type: Input,
                args: ['tuiDropdownHideDelay']
            }] } });

class TuiDropdownManual {
    constructor() {
        this.driver = inject(TuiDropdownDriver);
        this.tuiDropdownManual = false;
    }
    ngOnChanges() {
        this.driver.next(!!this.tuiDropdownManual);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownManual, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownManual, isStandalone: true, selector: "[tuiDropdownManual]", inputs: { tuiDropdownManual: "tuiDropdownManual" }, providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownManual, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownManual]',
                    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
                }]
        }], propDecorators: { tuiDropdownManual: [{
                type: Input
            }] } });

/**
 * @deprecated TODO: remove in v.5 when legacy controls are dropped
 */
class TuiDropdownOpenLegacy {
    constructor() {
        this.openStateSub = new Subject();
        this.tuiDropdownOpenChange = this.openStateSub.pipe(distinctUntilChanged());
    }
    set tuiDropdownOpen(open) {
        this.emitOpenChange(open);
    }
    emitOpenChange(open) {
        this.openStateSub.next(open);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOpenLegacy, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownOpenLegacy, isStandalone: true, selector: "[tuiDropdownOpen]:not([tuiDropdown]),[tuiDropdownOpenChange]:not([tuiDropdown])", inputs: { tuiDropdownOpen: "tuiDropdownOpen" }, outputs: { tuiDropdownOpenChange: "tuiDropdownOpenChange" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOpenLegacy, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownOpen]:not([tuiDropdown]),[tuiDropdownOpenChange]:not([tuiDropdown])',
                }]
        }], propDecorators: { tuiDropdownOpenChange: [{
                type: Output
            }], tuiDropdownOpen: [{
                type: Input
            }] } });

/**
 * @deprecated use {@link TuiPopup} directive instead
 */
class TuiDropdownPortal {
    constructor() {
        this.template = inject(TemplateRef);
        this.service = inject(TuiDropdownService);
    }
    set tuiDropdown(show) {
        this.viewRef?.destroy();
        if (show) {
            this.viewRef = this.service.addTemplate(this.template);
        }
    }
    ngOnDestroy() {
        this.viewRef?.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPortal, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownPortal, isStandalone: true, selector: "ng-template[tuiDropdown]", inputs: { tuiDropdown: "tuiDropdown" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPortal, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiDropdown]',
                }]
        }], propDecorators: { tuiDropdown: [{
                type: Input
            }] } });

class TuiDropdownPositionSided extends TuiPositionAccessor {
    constructor() {
        super(...arguments);
        this.options = inject(TUI_DROPDOWN_OPTIONS);
        this.viewport = inject(TUI_VIEWPORT);
        this.vertical = inject(TuiDropdownPosition);
        this.previous = this.options.direction || 'bottom';
        this.tuiDropdownSided = '';
        this.tuiDropdownSidedOffset = 4;
        this.type = 'dropdown';
    }
    getPosition(rect) {
        if (this.tuiDropdownSided === false) {
            return this.vertical.getPosition(rect);
        }
        const { height, width } = rect;
        const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
        const viewport = this.viewport.getClientRect();
        const { direction, minHeight, offset } = this.options;
        const align = this.options.align === 'center' ? 'left' : this.options.align;
        const available = {
            top: hostRect.bottom - viewport.top,
            left: hostRect.left - offset - viewport.left,
            right: viewport.right - hostRect.right - offset,
            bottom: viewport.bottom - hostRect.top,
        };
        const position = {
            top: hostRect.bottom - height + this.tuiDropdownSidedOffset + 1,
            left: hostRect.left - width - offset,
            right: hostRect.right + offset,
            bottom: hostRect.top - this.tuiDropdownSidedOffset - 1, // 1 for border
        };
        const better = available.top > available.bottom ? 'top' : 'bottom';
        const maxLeft = available.left > available.right ? position.left : position.right;
        const left = available[align] > width ? position[align] : maxLeft;
        if ((available[this.previous] > minHeight && direction) ||
            this.previous === better) {
            this.vertical.emitDirection(this.previous);
            return [position[this.previous], left];
        }
        this.previous = better;
        this.vertical.emitDirection(better);
        return [position[better], left];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPositionSided, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownPositionSided, isStandalone: true, selector: "[tuiDropdownSided]", inputs: { tuiDropdownSided: "tuiDropdownSided", tuiDropdownSidedOffset: "tuiDropdownSidedOffset" }, providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPositionSided, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownSided]',
                    providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)],
                }]
        }], propDecorators: { tuiDropdownSided: [{
                type: Input
            }], tuiDropdownSidedOffset: [{
                type: Input
            }] } });

class TuiDropdownSelection extends TuiDriver {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.doc = inject(DOCUMENT);
        this.vcr = inject(ViewContainerRef);
        this.dropdown = inject(TuiDropdownDirective);
        this.el = tuiInjectElement();
        this.handler$ = new BehaviorSubject(TUI_TRUE_HANDLER);
        this.stream$ = combineLatest([
            this.handler$,
            inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), distinctUntilChanged((x, y) => x.startOffset === y.startOffset &&
                x.endOffset === y.endOffset &&
                x.commonAncestorContainer === y.commonAncestorContainer)),
        ]).pipe(map(([handler, range]) => {
            const contained = this.el.contains(range.commonAncestorContainer);
            this.range =
                contained && tuiIsTextNode(range.commonAncestorContainer)
                    ? range
                    : this.range;
            return (contained && handler(this.range)) || this.inDropdown(range);
        }));
        this.range = inject(TUI_RANGE);
        this.position = 'selection';
        this.type = 'dropdown';
    }
    set tuiDropdownSelection(visible) {
        if (!tuiIsString(visible)) {
            this.handler$.next(visible);
        }
    }
    getClientRect() {
        switch (this.position) {
            case 'tag': {
                const { commonAncestorContainer } = this.range;
                const element = tuiIsElement(commonAncestorContainer)
                    ? commonAncestorContainer
                    : commonAncestorContainer.parentNode;
                return element && tuiIsElement(element)
                    ? element.getBoundingClientRect()
                    : EMPTY_CLIENT_RECT;
            }
            case 'word':
                return tuiGetWordRange(this.range).getBoundingClientRect();
            default:
                return this.range.getBoundingClientRect();
        }
    }
    ngOnDestroy() {
        if (this.ghost) {
            this.vcr.element.nativeElement.removeChild(this.ghost);
        }
    }
    getRange() {
        const active = tuiGetNativeFocused(this.doc);
        const selection = this.doc.getSelection();
        const range = active && tuiIsTextfield(active) && this.el.contains(active)
            ? this.veryVerySadInputFix(active)
            : (selection?.rangeCount && selection.getRangeAt(0)) || this.range;
        return range.cloneRange();
    }
    /**
     * Check if given range is at least partially inside dropdown
     */
    inDropdown(range) {
        const { startContainer, endContainer } = range;
        const inDropdown = this.boxContains(range.commonAncestorContainer);
        const hostToDropdown = this.boxContains(endContainer) && this.el.contains(startContainer);
        const dropdownToHost = this.boxContains(startContainer) && this.el.contains(endContainer);
        return inDropdown || hostToDropdown || dropdownToHost;
    }
    /**
     * Check if Node is inside dropdown
     */
    boxContains(node) {
        return !!this.dropdown.ref()?.location.nativeElement.contains(node);
    }
    veryVerySadInputFix(element) {
        const { ghost = this.initGhost(element) } = this;
        const { top, left, width, height } = element.getBoundingClientRect();
        const { selectionStart, selectionEnd, value } = element;
        const range = this.doc.createRange();
        const hostRect = this.el.getBoundingClientRect();
        ghost.style.top = tuiPx(top - hostRect.top);
        ghost.style.left = tuiPx(left - hostRect.left);
        ghost.style.width = tuiPx(width);
        ghost.style.height = tuiPx(height);
        ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;
        range.setStart(ghost.firstChild, selectionStart || 0);
        range.setEnd(ghost.firstChild, selectionEnd || 0);
        return range;
    }
    /**
     * Create an invisible DIV styled exactly like input/textarea element inside directive
     */
    initGhost(element) {
        const ghost = this.doc.createElement('div');
        const { font, letterSpacing, textTransform, padding } = getComputedStyle(element);
        ghost.style.position = 'absolute';
        ghost.style.pointerEvents = 'none';
        ghost.style.opacity = '0';
        ghost.style.whiteSpace = 'pre-wrap';
        ghost.style.font = font;
        ghost.style.letterSpacing = letterSpacing;
        ghost.style.textTransform = textTransform;
        ghost.style.padding = padding;
        this.vcr.element.nativeElement.appendChild(ghost);
        this.ghost = ghost;
        return ghost;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownSelection, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownSelection, isStandalone: true, selector: "[tuiDropdownSelection]", inputs: { position: ["tuiDropdownSelectionPosition", "position"], tuiDropdownSelection: "tuiDropdownSelection" }, providers: [
            tuiAsDriver(TuiDropdownSelection),
            tuiAsRectAccessor(TuiDropdownSelection),
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownSelection, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownSelection]',
                    providers: [
                        tuiAsDriver(TuiDropdownSelection),
                        tuiAsRectAccessor(TuiDropdownSelection),
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { position: [{
                type: Input,
                args: ['tuiDropdownSelectionPosition']
            }], tuiDropdownSelection: [{
                type: Input
            }] } });

const TuiDropdown = [
    TuiDropdownOptionsDirective,
    TuiDropdownDriverDirective,
    TuiDropdownDirective,
    TuiDropdownComponent,
    TuiDropdownOpen,
    TuiDropdownOpenLegacy,
    TuiDropdownPortal,
    TuiDropdownManual,
    TuiDropdownHover,
    TuiDropdownContext,
    TuiDropdownPosition,
    TuiDropdownPositionSided,
    TuiDropdownSelection,
];

function tuiDropdown(value) {
    return tuiDirectiveBinding(TuiDropdownDirective, 'tuiDropdown', value, {});
}
function tuiDropdownOpen() {
    const open = tuiDirectiveBinding(TuiDropdownOpen, 'tuiDropdownOpen', false, {});
    inject(TuiDropdownOpen)
        .tuiDropdownOpenChange.pipe(takeUntilDestroyed())
        .subscribe((value) => open.set(value));
    return open;
}

class TuiDropdownFixed {
    constructor() {
        const override = tuiOverrideOptions$1({ limitWidth: 'fixed' }, TUI_DROPDOWN_DEFAULT_OPTIONS);
        override(inject(TUI_DROPDOWN_OPTIONS, { self: true, optional: true }), null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownFixed, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownFixed, isStandalone: true, providers: [tuiDropdownOptionsProvider({})], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownFixed, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    providers: [tuiDropdownOptionsProvider({})],
                }]
        }], ctorParameters: function () { return []; } });

/**
 * Host element for dynamically created portals, for example using {@link TuiDropdownDirective}.
 */
class TuiDropdowns extends TuiPortals {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdowns, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdowns, isStandalone: true, selector: "tui-dropdowns", providers: [tuiAsPortal(TuiDropdownService)], usesInheritance: true, ngImport: i0, template: '<ng-container #viewContainer />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdowns, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'tui-dropdowns',
                    template: '<ng-container #viewContainer />',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [tuiAsPortal(TuiDropdownService)],
                }]
        }] });

class TuiWithDropdownOpen {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithDropdownOpen, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiWithDropdownOpen, isStandalone: true, hostDirectives: [{ directive: TuiDropdownOpen, inputs: ["tuiDropdownOpen", "open"], outputs: ["tuiDropdownOpenChange", "openChange"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithDropdownOpen, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    hostDirectives: [
                        {
                            directive: TuiDropdownOpen,
                            inputs: ['tuiDropdownOpen: open'],
                            outputs: ['tuiDropdownOpenChange: openChange'],
                        },
                    ],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_DROPDOWN_COMPONENT, TUI_DROPDOWN_CONTEXT, TUI_DROPDOWN_DEFAULT_OPTIONS, TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS, TUI_DROPDOWN_HOVER_OPTIONS, TUI_DROPDOWN_OPTIONS, TuiDropdown, TuiDropdownComponent, TuiDropdownContext, TuiDropdownDirective, TuiDropdownDriver, TuiDropdownDriverDirective, TuiDropdownFixed, TuiDropdownHover, TuiDropdownManual, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownOptionsDirective, TuiDropdownPortal, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDropdownService, TuiDropdowns, TuiWithDropdownOpen, tuiDropdown, tuiDropdownHoverOptionsProvider, tuiDropdownOpen, tuiDropdownOptionsProvider };
//# sourceMappingURL=taiga-ui-core-directives-dropdown.mjs.map
