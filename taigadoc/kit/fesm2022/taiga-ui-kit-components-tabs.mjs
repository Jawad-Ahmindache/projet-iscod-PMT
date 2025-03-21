import * as i0 from '@angular/core';
import { inject, Directive, Component, ViewEncapsulation, ChangeDetectionStrategy, INJECTOR, EventEmitter, afterNextRender, Input, Output, ContentChildren, forwardRef, ElementRef, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLinkActive } from '@angular/router';
import { MutationObserverService, WA_MUTATION_OBSERVER_INIT } from '@ng-web-apis/mutation-observer';
import { tuiTypedFromEvent, tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiInjectElement, tuiIsElement } from '@taiga-ui/cdk/utils/dom';
import { tuiIsNativeFocused, tuiMoveFocus, tuiGetClosestFocusable } from '@taiga-ui/cdk/utils/focus';
import * as i1 from '@taiga-ui/core/directives/icons';
import { TuiWithIcons } from '@taiga-ui/core/directives/icons';
import { filter, merge, EMPTY, switchMap, take, tap, debounceTime, startWith, map } from 'rxjs';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { tuiCreateToken, tuiProvideOptions, tuiWithStyles, tuiPx, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { __decorate } from 'tslib';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import * as i1$1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import { tuiClamp, tuiToInt } from '@taiga-ui/cdk/utils/math';
import { TuiOption } from '@taiga-ui/core/components/data-list';
import * as i2 from '@taiga-ui/core/directives/dropdown';
import { tuiDropdownOptionsProvider, TuiDropdown } from '@taiga-ui/core/directives/dropdown';
import { TuiChevron } from '@taiga-ui/kit/directives';
import { TUI_MORE_WORD } from '@taiga-ui/kit/tokens';
import { PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';

const TUI_TAB_ACTIVATE = 'tui-tab-activate';
class TuiTab {
    constructor() {
        this.el = tuiInjectElement();
        this.rla = inject(RouterLinkActive, { optional: true });
        this.observer = this.rla &&
            inject(MutationObserverService, { optional: true })?.pipe(filter(() => !!this.rla?.isActive));
        this.sub = merge(this.observer || EMPTY, this.rla?.isActiveChange.pipe(filter(Boolean)) || EMPTY, this.el.matches('button')
            ? tuiTypedFromEvent(this.el, 'click').pipe(
            // Delaying execution until after all other click callbacks
            switchMap(() => tuiTypedFromEvent(this.el.parentElement, 'click').pipe(take(1))))
            : EMPTY)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.el.dispatchEvent(new CustomEvent(TUI_TAB_ACTIVATE, { bubbles: true })));
    }
    ngOnDestroy() {
        if (tuiIsNativeFocused(this.el)) {
            this.el.blur();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTab, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTab, isStandalone: true, selector: "a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]", host: { attributes: { "type": "button" } }, hostDirectives: [{ directive: i1.TuiWithIcons }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTab, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]',
                    hostDirectives: [TuiWithIcons],
                    host: {
                        type: 'button',
                    },
                }]
        }] });

const TUI_TABS_DEFAULT_OPTIONS = {
    underline: true,
    exposeActive: true,
    itemsLimit: Infinity,
    minMoreWidth: 0,
    size: 'l',
};
/**
 * Default parameters for Tabs component
 */
const TUI_TABS_OPTIONS = tuiCreateToken(TUI_TABS_DEFAULT_OPTIONS);
function tuiTabsOptionsProvider(options) {
    return tuiProvideOptions(TUI_TABS_OPTIONS, options, TUI_TABS_DEFAULT_OPTIONS);
}

class TuiTabsStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabsStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-tabs" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiTab]{transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;line-height:1.5rem;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-left:24px}tui-tabs[data-size=m]+[tuiTab],tui-tabs[data-size=m] [tuiTab],[tuiTabs][data-size=m] [tuiTab]{margin-left:16px;font:var(--tui-font-text-s)}[tuiTab]:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]._active{color:var(--tui-text-primary);box-shadow:none}[tuiTab]:focus-visible{outline:2px solid var(--tui-border-focus);outline-offset:-2px}tui-tabs._underline [tuiTab]:hover:not(._active),[tuiTabs]._underline [tuiTab]:hover:not(._active){box-shadow:inset 0 -2px var(--tui-border-normal)}tui-tabs>[tuiTab]:first-child,[tuiTabs]>[tuiTab]:first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:first-child{margin-left:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:first-child{margin-left:var(--tui-tab-margin, 1.5rem)}[tuiTab][tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab][tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:empty:after,[tuiTab]:empty:before{margin:.5rem}@media (hover: hover) and (pointer: fine){[tuiTab]:hover{color:var(--tui-text-primary)}}[tuiTabs],tui-tabs{scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;font:var(--tui-font-text-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate}[tuiTabs]::-webkit-scrollbar,tui-tabs::-webkit-scrollbar,[tuiTabs]::-webkit-scrollbar-thumb,tui-tabs::-webkit-scrollbar-thumb{display:none}[tuiTabs][data-size=l]:not([data-vertical]),tui-tabs[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}[tuiTabs][data-size=m]:not([data-vertical]),tui-tabs[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}[tuiTabs]:before,tui-tabs:before{transition-property:width,left;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:var(--t-left);bottom:0;block-size:2px;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms}[tuiTabs]._underline:before,tui-tabs._underline:before{content:\"\"}tui-tabs[data-vertical],[tuiTabs][data-vertical]{flex-direction:column;box-shadow:inset -1px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab],[tuiTabs][data-vertical] [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem .25rem 0}tui-tabs[data-vertical] [tuiTab]:after,[tuiTabs][data-vertical] [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;top:0;right:0;display:block;block-size:100%;inline-size:2px;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical] [tuiTab]:hover,[tuiTabs][data-vertical] [tuiTab]:hover{box-shadow:inset -2px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab]._active:after,[tuiTabs][data-vertical] [tuiTab]._active:after{transform:none}tui-tabs[data-vertical][data-size=m] [tuiTab],[tuiTabs][data-vertical][data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-font-text-s)}tui-tabs[data-vertical][data-vertical=right],[tuiTabs][data-vertical][data-vertical=right]{box-shadow:inset 1px 0 var(--tui-border-normal)}tui-tabs[data-vertical][data-vertical=right] [tuiTab],[tuiTabs][data-vertical][data-vertical=right] [tuiTab]{text-align:end;padding:.25rem 0 .25rem 1.25rem}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:after,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:after{right:auto;left:0;transform-origin:left}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:hover,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:hover{box-shadow:inset 2px 0 var(--tui-border-normal)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-tabs',
                    }, styles: ["[tuiTab]{transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;line-height:1.5rem;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-left:24px}tui-tabs[data-size=m]+[tuiTab],tui-tabs[data-size=m] [tuiTab],[tuiTabs][data-size=m] [tuiTab]{margin-left:16px;font:var(--tui-font-text-s)}[tuiTab]:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]._active{color:var(--tui-text-primary);box-shadow:none}[tuiTab]:focus-visible{outline:2px solid var(--tui-border-focus);outline-offset:-2px}tui-tabs._underline [tuiTab]:hover:not(._active),[tuiTabs]._underline [tuiTab]:hover:not(._active){box-shadow:inset 0 -2px var(--tui-border-normal)}tui-tabs>[tuiTab]:first-child,[tuiTabs]>[tuiTab]:first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:first-child{margin-left:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:first-child{margin-left:var(--tui-tab-margin, 1.5rem)}[tuiTab][tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab][tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:empty:after,[tuiTab]:empty:before{margin:.5rem}@media (hover: hover) and (pointer: fine){[tuiTab]:hover{color:var(--tui-text-primary)}}[tuiTabs],tui-tabs{scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;font:var(--tui-font-text-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate}[tuiTabs]::-webkit-scrollbar,tui-tabs::-webkit-scrollbar,[tuiTabs]::-webkit-scrollbar-thumb,tui-tabs::-webkit-scrollbar-thumb{display:none}[tuiTabs][data-size=l]:not([data-vertical]),tui-tabs[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}[tuiTabs][data-size=m]:not([data-vertical]),tui-tabs[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}[tuiTabs]:before,tui-tabs:before{transition-property:width,left;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:var(--t-left);bottom:0;block-size:2px;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms}[tuiTabs]._underline:before,tui-tabs._underline:before{content:\"\"}tui-tabs[data-vertical],[tuiTabs][data-vertical]{flex-direction:column;box-shadow:inset -1px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab],[tuiTabs][data-vertical] [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem .25rem 0}tui-tabs[data-vertical] [tuiTab]:after,[tuiTabs][data-vertical] [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;top:0;right:0;display:block;block-size:100%;inline-size:2px;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical] [tuiTab]:hover,[tuiTabs][data-vertical] [tuiTab]:hover{box-shadow:inset -2px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab]._active:after,[tuiTabs][data-vertical] [tuiTab]._active:after{transform:none}tui-tabs[data-vertical][data-size=m] [tuiTab],[tuiTabs][data-vertical][data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-font-text-s)}tui-tabs[data-vertical][data-vertical=right],[tuiTabs][data-vertical][data-vertical=right]{box-shadow:inset 1px 0 var(--tui-border-normal)}tui-tabs[data-vertical][data-vertical=right] [tuiTab],[tuiTabs][data-vertical][data-vertical=right] [tuiTab]{text-align:end;padding:.25rem 0 .25rem 1.25rem}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:after,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:after{right:auto;left:0;transform-origin:left}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:hover,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:hover{box-shadow:inset 2px 0 var(--tui-border-normal)}\n"] }]
        }] });
class TuiTabsDirective {
    constructor() {
        this.el = tuiInjectElement();
        this.injector = inject(INJECTOR);
        this.nothing = tuiWithStyles(TuiTabsStyles);
        this.size = inject(TUI_TABS_OPTIONS).size;
        this.activeItemIndex = 0;
        this.activeItemIndexChange = new EventEmitter();
    }
    get tabs() {
        return Array.from(this.el.querySelectorAll('[tuiTab]'));
    }
    get activeElement() {
        return this.tabs[this.activeItemIndex] || null;
    }
    moveFocus(current, step) {
        const { tabs } = this;
        tuiMoveFocus(tabs.indexOf(current), tabs, step);
    }
    ngAfterViewChecked() {
        afterNextRender(() => {
            this.markTabAsActive();
        }, { injector: this.injector });
    }
    onActivate(event, element) {
        const index = this.tabs.findIndex((tab) => tab === element);
        event.stopPropagation();
        if (index === this.activeItemIndex) {
            return;
        }
        this.activeItemIndexChange.emit(index);
        this.activeItemIndex = index;
    }
    markTabAsActive() {
        const { tabs, activeElement } = this;
        tabs.forEach((nativeElement) => {
            const active = nativeElement === activeElement;
            nativeElement.classList.toggle('_active', active);
            nativeElement.setAttribute('tabIndex', active ? '0' : '-1');
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabsDirective, isStandalone: true, inputs: { size: "size", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, host: { listeners: { "tui-tab-activate": "onActivate($event, $event.target)" }, properties: { "attr.data-size": "size" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    host: {
                        '[attr.data-size]': 'size',
                        [`(${TUI_TAB_ACTIVATE})`]: 'onActivate($event, $event.target)',
                    },
                }]
        }], propDecorators: { size: [{
                type: Input
            }], activeItemIndex: [{
                type: Input
            }], activeItemIndexChange: [{
                type: Output
            }] } });

class TuiTabsHorizontal {
    constructor() {
        this.el = tuiInjectElement();
        this.options = inject(TUI_TABS_OPTIONS);
        this.tabs = inject(TuiTabsDirective);
        this.children = EMPTY_QUERY;
        this.sub = inject(MutationObserverService, { self: true })
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => this.refresh());
        this.underline = this.options.underline;
    }
    ngAfterViewChecked() {
        this.scrollTo(this.tabs.activeItemIndex);
        this.refresh();
    }
    onKeyDownArrow(current, step) {
        this.tabs.moveFocus(current, step);
    }
    refresh() {
        const { activeElement } = this.tabs;
        if (activeElement && !activeElement.isConnected) {
            return;
        }
        const { offsetLeft = 0, offsetWidth = 0 } = activeElement || {};
        this.el.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.el.style.setProperty('--t-width', tuiPx(offsetWidth));
    }
    scrollTo(index) {
        const element = this.tabs.tabs[index];
        if (!element) {
            return;
        }
        const { offsetLeft, offsetWidth } = element;
        if (offsetLeft < this.el.scrollLeft) {
            this.el.scrollLeft = offsetLeft;
        }
        if (offsetLeft + offsetWidth > this.el.scrollLeft + this.el.offsetWidth) {
            this.el.scrollLeft = offsetLeft + offsetWidth - this.el.offsetWidth;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsHorizontal, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabsHorizontal, isStandalone: true, selector: "tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])", inputs: { underline: "underline" }, host: { listeners: { "animationend": "refresh()", "keydown.arrowRight.prevent": "onKeyDownArrow($event.target, 1)", "keydown.arrowLeft.prevent": "onKeyDownArrow($event.target, -1)" }, properties: { "class._underline": "underline", "style.--t-color": "underline === true ? 'var(--tui-background-accent-1)' : underline" } }, providers: [
            MutationObserverService,
            {
                provide: WA_MUTATION_OBSERVER_INIT,
                useValue: {
                    childList: true,
                    characterData: true,
                    subtree: true,
                },
            },
        ], queries: [{ propertyName: "children", predicate: i0.forwardRef(function () { return TuiTab; }) }], hostDirectives: [{ directive: TuiTabsDirective, inputs: ["activeItemIndex", "activeItemIndex", "size", "size"], outputs: ["activeItemIndexChange", "activeItemIndexChange"] }], ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiTabsHorizontal.prototype, "scrollTo", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsHorizontal, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])',
                    providers: [
                        MutationObserverService,
                        {
                            provide: WA_MUTATION_OBSERVER_INIT,
                            useValue: {
                                childList: true,
                                characterData: true,
                                subtree: true,
                            },
                        },
                    ],
                    hostDirectives: [
                        {
                            directive: TuiTabsDirective,
                            inputs: ['activeItemIndex', 'size'],
                            outputs: ['activeItemIndexChange'],
                        },
                    ],
                    host: {
                        '[class._underline]': 'underline',
                        '[style.--t-color]': "underline === true ? 'var(--tui-background-accent-1)' : underline",
                        '(animationend)': 'refresh()',
                        '(keydown.arrowRight.prevent)': 'onKeyDownArrow($event.target, 1)',
                        '(keydown.arrowLeft.prevent)': 'onKeyDownArrow($event.target, -1)',
                    },
                }]
        }], propDecorators: { children: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiTab)]
            }], underline: [{
                type: Input
            }], scrollTo: [] } });

class TuiTabsVertical {
    constructor() {
        this.tabs = inject(TuiTabsDirective);
        this.vertical = 'left';
    }
    onKeyDownArrow(current, step) {
        this.tabs.moveFocus(current, step);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsVertical, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabsVertical, isStandalone: true, selector: "tui-tabs[vertical], nav[tuiTabs][vertical]", inputs: { vertical: "vertical" }, host: { listeners: { "keydown.arrowDown.prevent": "onKeyDownArrow($event.target, 1)", "keydown.arrowUp.prevent": "onKeyDownArrow($event.target, -1)" }, properties: { "attr.data-vertical": "vertical" } }, hostDirectives: [{ directive: TuiTabsDirective, inputs: ["activeItemIndex", "activeItemIndex", "size", "size"], outputs: ["activeItemIndexChange", "activeItemIndexChange"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsVertical, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-tabs[vertical], nav[tuiTabs][vertical]',
                    hostDirectives: [
                        {
                            directive: TuiTabsDirective,
                            inputs: ['activeItemIndex', 'size'],
                            outputs: ['activeItemIndexChange'],
                        },
                    ],
                    host: {
                        '[attr.data-vertical]': 'vertical',
                        '(keydown.arrowDown.prevent)': 'onKeyDownArrow($event.target, 1)',
                        '(keydown.arrowUp.prevent)': 'onKeyDownArrow($event.target, -1)',
                    },
                }]
        }], propDecorators: { vertical: [{
                type: Input
            }] } });

const TUI_TABS_REFRESH = tuiCreateToken();
const TUI_TABS_PROVIDERS = [
    ResizeObserverService,
    MutationObserverService,
    tuiDropdownOptionsProvider({ align: 'right' }),
    {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
            childList: true,
            subtree: true,
            characterData: true,
        },
    },
    {
        provide: TUI_TABS_REFRESH,
        deps: [
            ResizeObserverService,
            MutationObserverService,
            DOCUMENT,
            ElementRef,
            ChangeDetectorRef,
        ],
        useFactory: (resize$, mutations$, { body }, { nativeElement }, cdr) => merge(resize$, mutations$.pipe(tap(() => cdr.detectChanges()))).pipe(
        // Ignoring cases when host is detached from DOM
        filter(() => body.contains(nativeElement)), debounceTime(0), startWith(null), takeUntilDestroyed()),
    },
];

class TuiTabsWithMore {
    constructor() {
        this.options = inject(TUI_TABS_OPTIONS);
        this.refresh$ = inject(TUI_TABS_REFRESH);
        this.el = tuiInjectElement();
        this.cdr = inject(ChangeDetectorRef);
        this.maxIndex = Infinity;
        this.items = EMPTY_QUERY;
        this.moreWord$ = inject(TUI_MORE_WORD);
        this.open = false;
        this.size = this.options.size;
        this.underline = this.options.underline;
        this.itemsLimit = this.options.itemsLimit;
        this.activeItemIndexChange = new EventEmitter();
        this.activeItemIndex = 0;
    }
    set itemIndex(activeItemIndex) {
        this.activeItemIndex = activeItemIndex;
        this.maxIndex = this.getMaxIndex();
    }
    get lastVisibleIndex() {
        if (this.itemsLimit + 1 >= this.items.length) {
            return this.maxIndex;
        }
        const offset = this.itemsLimit - 1 > this.activeItemIndex || !this.options.exposeActive
            ? 1
            : 2;
        return Math.min(this.itemsLimit - offset, this.maxIndex);
    }
    ngAfterViewInit() {
        this.refresh$
            .pipe(map(() => this.getMaxIndex()), tap(() => this.refresh()), filter((maxIndex) => this.maxIndex !== maxIndex))
            .subscribe((maxIndex) => {
            this.maxIndex = maxIndex;
            this.cdr.detectChanges();
        });
    }
    ngAfterViewChecked() {
        this.refresh();
    }
    // TODO: Improve performance
    get tabs() {
        return Array.from(this.el.querySelectorAll('[tuiTab]'));
    }
    get activeElement() {
        const { tabs } = this;
        const safeActiveIndex = tuiClamp(this.activeItemIndex || 0, 0, tabs.length - 2);
        return this.options.exposeActive || this.lastVisibleIndex >= safeActiveIndex
            ? tabs[safeActiveIndex] || null
            : this.moreButton?.nativeElement || null;
    }
    get isMoreAlone() {
        return this.lastVisibleIndex < 0 && !this.options.exposeActive;
    }
    get isMoreVisible() {
        return this.lastVisibleIndex < this.items.length - 1;
    }
    get isMoreFocusable() {
        return !!this.moreButton && tuiIsNativeFocused(this.moreButton.nativeElement);
    }
    get isMoreActive() {
        return (this.open ||
            (!this.options.exposeActive && this.lastVisibleIndex < this.activeItemIndex));
    }
    onActiveItemIndexChange(activeItemIndex) {
        this.updateActiveItemIndex(activeItemIndex);
    }
    onClick(index) {
        this.open = false;
        this.focusMore();
        this.updateActiveItemIndex(index);
    }
    onArrowRight(event) {
        if (tuiIsElement(event.target) && tuiIsNativeFocused(event.target)) {
            this.focusMore();
        }
    }
    onArrowLeft() {
        const { tabs } = this;
        let index = tabs.length - 2;
        while (index >= 0) {
            tabs[index]?.focus();
            if (tuiIsNativeFocused(tabs[index])) {
                return;
            }
            index--;
        }
    }
    onWrapperArrow(event, wrapper, previous) {
        const button = event.target;
        const target = tuiGetClosestFocusable({ initial: button, root: wrapper, previous });
        if (target) {
            target.focus();
        }
    }
    isOverflown(index) {
        return index !== this.activeItemIndex || !this.options.exposeActive;
    }
    shouldShow(index) {
        return index > this.lastVisibleIndex && this.isOverflown(index);
    }
    get margin() {
        return this.size === 'l' ? 24 : 16;
    }
    focusMore() {
        if (this.moreButton) {
            this.moreButton.nativeElement.focus();
        }
    }
    getMaxIndex() {
        const { tabs, activeItemIndex, margin } = this;
        if (tabs.length < 2) {
            return 0;
        }
        const { exposeActive, minMoreWidth } = this.options;
        const { clientWidth } = this.el;
        const active = tabs[activeItemIndex];
        const activeWidth = active?.scrollWidth ?? 0;
        const moreWidth = Math.max(tabs[tabs.length - 1]?.scrollWidth ?? 0, minMoreWidth);
        let maxIndex = tabs.length - 2;
        let total = tabs.reduce((acc, { scrollWidth }) => acc + scrollWidth, 0) +
            maxIndex * margin -
            (tabs[tabs.length - 1]?.scrollWidth ?? 0);
        if (Number.isNaN(total) || total <= clientWidth) {
            return Infinity;
        }
        while (maxIndex) {
            total -= (tabs[maxIndex]?.scrollWidth ?? 0) + margin;
            maxIndex--;
            const activeDisplaced = exposeActive && activeItemIndex > maxIndex;
            const activeOffset = activeDisplaced ? activeWidth + margin : 0;
            const currentWidth = total + activeOffset + moreWidth + margin;
            // Needed for different rounding of visible and hidden elements scrollWidth
            const safetyOffset = tuiToInt(this.maxIndex === maxIndex - 1);
            if (currentWidth + safetyOffset < clientWidth) {
                return maxIndex;
            }
        }
        return -1;
    }
    updateActiveItemIndex(activeItemIndex) {
        this.itemIndex = activeItemIndex;
        this.activeItemIndexChange.emit(activeItemIndex);
    }
    refresh() {
        const { offsetLeft = 0, offsetWidth = 0 } = this.activeElement || {};
        this.dir?.nativeElement.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.dir?.nativeElement.style.setProperty('--t-width', tuiPx(offsetWidth));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsWithMore, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabsWithMore, isStandalone: true, selector: "tui-tabs-with-more, nav[tuiTabsWithMore]", inputs: { size: "size", moreContent: "moreContent", dropdownContent: "dropdownContent", underline: "underline", itemsLimit: "itemsLimit", itemIndex: ["activeItemIndex", "itemIndex"] }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, providers: TUI_TABS_PROVIDERS, queries: [{ propertyName: "items", predicate: TuiItem, read: TemplateRef }], viewQueries: [{ propertyName: "moreButton", first: true, predicate: TuiTab, descendants: true, read: ElementRef }, { propertyName: "dir", first: true, predicate: TuiTabsHorizontal, descendants: true, read: ElementRef }], ngImport: i0, template: "<ng-container *ngIf=\"items.changes | async\" />\n<tui-tabs\n    class=\"t-tabs\"\n    [activeItemIndex]=\"activeItemIndex\"\n    [size]=\"size\"\n    [underline]=\"underline\"\n    (activeItemIndexChange)=\"onActiveItemIndexChange($event)\"\n    (keydown.arrowRight)=\"onArrowRight($event)\"\n>\n    <ng-container *ngFor=\"let item of items; let index = index\">\n        <ng-container\n            *ngIf=\"index <= lastVisibleIndex; else hidden\"\n            [ngTemplateOutlet]=\"item\"\n        />\n        <ng-template #hidden>\n            <div\n                class=\"t-flex\"\n                [class.t-overflown]=\"isOverflown(index)\"\n            >\n                <ng-container [ngTemplateOutlet]=\"item\" />\n            </div>\n        </ng-template>\n    </ng-container>\n</tui-tabs>\n\n<button\n    *ngIf=\"moreContent; else chevron\"\n    tuiTab\n    type=\"button\"\n    class=\"t-more\"\n    [class._active]=\"isMoreActive\"\n    [class.t-no-margin]=\"isMoreAlone\"\n    [class.t-overflown]=\"!isMoreVisible\"\n    [tabIndex]=\"isMoreFocusable ? 0 : -1\"\n    [tuiDropdown]=\"dropdownContent || dropdown\"\n    [(tuiDropdownOpen)]=\"open\"\n    (keydown.arrowLeft.prevent)=\"onArrowLeft()\"\n>\n    <ng-container *polymorpheusOutlet=\"moreContent as text\">\n        {{ text }}\n    </ng-container>\n</button>\n<ng-template #chevron>\n    <button\n        tuiChevron\n        tuiTab\n        type=\"button\"\n        class=\"t-more\"\n        [class._active]=\"isMoreActive\"\n        [class.t-no-margin]=\"isMoreAlone\"\n        [class.t-overflown]=\"!isMoreVisible\"\n        [tabIndex]=\"isMoreFocusable ? 0 : -1\"\n        [tuiDropdown]=\"dropdownContent || dropdown\"\n        [(tuiDropdownOpen)]=\"open\"\n        (keydown.arrowLeft.prevent)=\"onArrowLeft()\"\n    >\n        {{ moreWord$ | async }}\n    </button>\n</ng-template>\n<ng-template #dropdown>\n    <div\n        #element\n        class=\"t-dropdown\"\n        [attr.data-size]=\"size\"\n        (keydown.arrowDown.prevent)=\"onWrapperArrow($event, element, false)\"\n        (keydown.arrowUp.prevent)=\"onWrapperArrow($event, element, true)\"\n    >\n        <div\n            *ngFor=\"let item of items; let index = index\"\n            class=\"t-dropdown-item\"\n            (tui-tab-activate)=\"onClick(index)\"\n        >\n            <ng-container *ngIf=\"shouldShow(index)\">\n                <ng-container *polymorpheusOutlet=\"item\" />\n            </ng-container>\n        </div>\n    </div>\n</ng-template>\n", styles: [":host{position:relative;display:flex;font:var(--tui-font-text-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}.t-tabs{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex{display:flex}.t-overflown{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:-.25rem;vertical-align:bottom}.t-icon_rotated{transform:rotate(180deg)}.t-dropdown{padding:.25rem 0}.t-dropdown ::ng-deep *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;line-height:1.5rem;border-radius:var(--tui-radius-s);font:var(--tui-font-text-m);color:var(--tui-text-primary)}.t-dropdown ::ng-deep *[tuiTab]:before{display:none}.t-dropdown ::ng-deep *[tuiTab]:hover,.t-dropdown ::ng-deep *[tuiTab]:focus,.t-dropdown ::ng-deep *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m] ::ng-deep *[tuiTab]{block-size:2.25rem;font:var(--tui-font-text-s)}.t-dropdown-item{display:flex;flex-direction:column}.t-no-margin{margin-left:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1$1.AsyncPipe, name: "async" }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiChevron, selector: "[tuiChevron]", inputs: ["tuiChevron"] }, { kind: "directive", type: i2.TuiDropdownDirective, selector: "[tuiDropdown]:not(ng-container):not(ng-template)", inputs: ["tuiDropdown"], exportAs: ["tuiDropdown"] }, { kind: "directive", type: i2.TuiDropdownOpen, selector: "[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]", inputs: ["tuiDropdownEnabled", "tuiDropdownOpen"], outputs: ["tuiDropdownOpenChange"] }, { kind: "directive", type: TuiTab, selector: "a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]" }, { kind: "directive", type: TuiTabsHorizontal, selector: "tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])", inputs: ["underline"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsWithMore, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-tabs-with-more, nav[tuiTabsWithMore]', imports: [
                        CommonModule,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiChevron,
                        TuiDropdown,
                        TuiOption,
                        TuiTab,
                        TuiTabsHorizontal,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: TUI_TABS_PROVIDERS, template: "<ng-container *ngIf=\"items.changes | async\" />\n<tui-tabs\n    class=\"t-tabs\"\n    [activeItemIndex]=\"activeItemIndex\"\n    [size]=\"size\"\n    [underline]=\"underline\"\n    (activeItemIndexChange)=\"onActiveItemIndexChange($event)\"\n    (keydown.arrowRight)=\"onArrowRight($event)\"\n>\n    <ng-container *ngFor=\"let item of items; let index = index\">\n        <ng-container\n            *ngIf=\"index <= lastVisibleIndex; else hidden\"\n            [ngTemplateOutlet]=\"item\"\n        />\n        <ng-template #hidden>\n            <div\n                class=\"t-flex\"\n                [class.t-overflown]=\"isOverflown(index)\"\n            >\n                <ng-container [ngTemplateOutlet]=\"item\" />\n            </div>\n        </ng-template>\n    </ng-container>\n</tui-tabs>\n\n<button\n    *ngIf=\"moreContent; else chevron\"\n    tuiTab\n    type=\"button\"\n    class=\"t-more\"\n    [class._active]=\"isMoreActive\"\n    [class.t-no-margin]=\"isMoreAlone\"\n    [class.t-overflown]=\"!isMoreVisible\"\n    [tabIndex]=\"isMoreFocusable ? 0 : -1\"\n    [tuiDropdown]=\"dropdownContent || dropdown\"\n    [(tuiDropdownOpen)]=\"open\"\n    (keydown.arrowLeft.prevent)=\"onArrowLeft()\"\n>\n    <ng-container *polymorpheusOutlet=\"moreContent as text\">\n        {{ text }}\n    </ng-container>\n</button>\n<ng-template #chevron>\n    <button\n        tuiChevron\n        tuiTab\n        type=\"button\"\n        class=\"t-more\"\n        [class._active]=\"isMoreActive\"\n        [class.t-no-margin]=\"isMoreAlone\"\n        [class.t-overflown]=\"!isMoreVisible\"\n        [tabIndex]=\"isMoreFocusable ? 0 : -1\"\n        [tuiDropdown]=\"dropdownContent || dropdown\"\n        [(tuiDropdownOpen)]=\"open\"\n        (keydown.arrowLeft.prevent)=\"onArrowLeft()\"\n    >\n        {{ moreWord$ | async }}\n    </button>\n</ng-template>\n<ng-template #dropdown>\n    <div\n        #element\n        class=\"t-dropdown\"\n        [attr.data-size]=\"size\"\n        (keydown.arrowDown.prevent)=\"onWrapperArrow($event, element, false)\"\n        (keydown.arrowUp.prevent)=\"onWrapperArrow($event, element, true)\"\n    >\n        <div\n            *ngFor=\"let item of items; let index = index\"\n            class=\"t-dropdown-item\"\n            (tui-tab-activate)=\"onClick(index)\"\n        >\n            <ng-container *ngIf=\"shouldShow(index)\">\n                <ng-container *polymorpheusOutlet=\"item\" />\n            </ng-container>\n        </div>\n    </div>\n</ng-template>\n", styles: [":host{position:relative;display:flex;font:var(--tui-font-text-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}.t-tabs{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex{display:flex}.t-overflown{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:-.25rem;vertical-align:bottom}.t-icon_rotated{transform:rotate(180deg)}.t-dropdown{padding:.25rem 0}.t-dropdown ::ng-deep *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;line-height:1.5rem;border-radius:var(--tui-radius-s);font:var(--tui-font-text-m);color:var(--tui-text-primary)}.t-dropdown ::ng-deep *[tuiTab]:before{display:none}.t-dropdown ::ng-deep *[tuiTab]:hover,.t-dropdown ::ng-deep *[tuiTab]:focus,.t-dropdown ::ng-deep *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m] ::ng-deep *[tuiTab]{block-size:2.25rem;font:var(--tui-font-text-s)}.t-dropdown-item{display:flex;flex-direction:column}.t-no-margin{margin-left:0}\n"] }]
        }], propDecorators: { moreButton: [{
                type: ViewChild,
                args: [TuiTab, { read: ElementRef }]
            }], dir: [{
                type: ViewChild,
                args: [TuiTabsHorizontal, { read: ElementRef }]
            }], items: [{
                type: ContentChildren,
                args: [TuiItem, { read: TemplateRef }]
            }], size: [{
                type: Input
            }], moreContent: [{
                type: Input
            }], dropdownContent: [{
                type: Input
            }], underline: [{
                type: Input
            }], itemsLimit: [{
                type: Input
            }], activeItemIndexChange: [{
                type: Output
            }], itemIndex: [{
                type: Input,
                args: ['activeItemIndex']
            }] } });

const TuiTabs = [
    TuiItem,
    TuiTab,
    TuiTabsDirective,
    TuiTabsHorizontal,
    TuiTabsVertical,
    TuiTabsWithMore,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_TABS_DEFAULT_OPTIONS, TUI_TABS_OPTIONS, TUI_TABS_PROVIDERS, TUI_TABS_REFRESH, TUI_TAB_ACTIVATE, TuiTab, TuiTabs, TuiTabsDirective, TuiTabsHorizontal, TuiTabsVertical, TuiTabsWithMore, tuiTabsOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-tabs.mjs.map
