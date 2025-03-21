import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Input, EventEmitter, ElementRef, ContentChildren, forwardRef, Output, Directive } from '@angular/core';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { TuiRepeatTimes } from '@taiga-ui/cdk/directives/repeat-times';
import { tuiIsElement, tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { NgIf } from '@angular/common';
import { tuiScaleIn } from '@taiga-ui/core/animations';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils/miscellaneous';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLinkActive } from '@angular/router';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { EMPTY, filter } from 'rxjs';

class TuiTabBarItem {
    constructor() {
        this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.icon = '';
        this.badge = null;
    }
    format(value) {
        return value > 999 ? '999+' : String(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabBarItem, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabBarItem, isStandalone: true, selector: "button[tuiTabBarItem], a[tuiTabBarItem]", inputs: { icon: "icon", badge: "badge" }, ngImport: i0, template: "<tui-icon\n    class=\"t-icon\"\n    [icon]=\"icon\"\n/>\n<span class=\"t-wrapper\">\n    <span\n        *ngIf=\"badge as value\"\n        class=\"t-badge\"\n        [@tuiScaleIn]=\"options\"\n    >\n        {{ format(value) }}\n    </span>\n</span>\n<span class=\"t-text\">\n    <ng-content />\n</span>\n", styles: [":host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;flex:1 0;font:inherit;flex-direction:column;align-items:center;overflow:hidden}:host:nth-child(1){color:var(--tui-tab-1, inherit)}:host:nth-child(2){color:var(--tui-tab-2, inherit)}:host:nth-child(3){color:var(--tui-tab-3, inherit)}:host:nth-child(4){color:var(--tui-tab-4, inherit)}:host:nth-child(5){color:var(--tui-tab-5, inherit)}:host:nth-child(6){color:var(--tui-tab-6, inherit)}:host:nth-child(7){color:var(--tui-tab-7, inherit)}:host:nth-child(8){color:var(--tui-tab-8, inherit)}:host:nth-child(9){color:var(--tui-tab-9, inherit)}:host:nth-child(10){color:var(--tui-tab-10, inherit)}.t-icon{inline-size:1.75rem;block-size:1.75rem;margin:.375rem 0 .125rem;pointer-events:none;border:.125rem solid transparent}.t-wrapper{position:absolute;top:.125rem;left:1rem;display:flex;inline-size:100%;justify-content:center;pointer-events:none}.t-badge{display:flex;block-size:1.125rem;min-inline-size:1.125rem;align-items:center;justify-content:center;padding:0 .25rem;border-radius:1rem;font-size:.8125rem;box-sizing:border-box;color:var(--tui-background-base);background:var(--tui-status-negative)}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-inline-size:100%;pointer-events:none}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }], animations: [tuiScaleIn], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabBarItem, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'button[tuiTabBarItem], a[tuiTabBarItem]', imports: [NgIf, TuiIcon], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiScaleIn], template: "<tui-icon\n    class=\"t-icon\"\n    [icon]=\"icon\"\n/>\n<span class=\"t-wrapper\">\n    <span\n        *ngIf=\"badge as value\"\n        class=\"t-badge\"\n        [@tuiScaleIn]=\"options\"\n    >\n        {{ format(value) }}\n    </span>\n</span>\n<span class=\"t-text\">\n    <ng-content />\n</span>\n", styles: [":host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;flex:1 0;font:inherit;flex-direction:column;align-items:center;overflow:hidden}:host:nth-child(1){color:var(--tui-tab-1, inherit)}:host:nth-child(2){color:var(--tui-tab-2, inherit)}:host:nth-child(3){color:var(--tui-tab-3, inherit)}:host:nth-child(4){color:var(--tui-tab-4, inherit)}:host:nth-child(5){color:var(--tui-tab-5, inherit)}:host:nth-child(6){color:var(--tui-tab-6, inherit)}:host:nth-child(7){color:var(--tui-tab-7, inherit)}:host:nth-child(8){color:var(--tui-tab-8, inherit)}:host:nth-child(9){color:var(--tui-tab-9, inherit)}:host:nth-child(10){color:var(--tui-tab-10, inherit)}.t-icon{inline-size:1.75rem;block-size:1.75rem;margin:.375rem 0 .125rem;pointer-events:none;border:.125rem solid transparent}.t-wrapper{position:absolute;top:.125rem;left:1rem;display:flex;inline-size:100%;justify-content:center;pointer-events:none}.t-badge{display:flex;block-size:1.125rem;min-inline-size:1.125rem;align-items:center;justify-content:center;padding:0 .25rem;border-radius:1rem;font-size:.8125rem;box-sizing:border-box;color:var(--tui-background-base);background:var(--tui-status-negative)}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-inline-size:100%;pointer-events:none}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], badge: [{
                type: Input
            }] } });

class TuiTabBarComponent {
    constructor() {
        this.tabs = EMPTY_QUERY;
        this.quantity = 4;
        this.activeItemIndex = NaN;
        this.activeItemIndexChange = new EventEmitter();
    }
    setActive(tab) {
        if (tuiIsElement(tab)) {
            this.updateIndex(this.tabs.toArray().findIndex(({ nativeElement }) => nativeElement === tab));
        }
    }
    get style() {
        return `--tui-tab-${this.activeItemIndex + 1}: var(--tui-active-color)`;
    }
    updateIndex(index) {
        this.activeItemIndex = index;
        this.activeItemIndexChange.emit(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabBarComponent, isStandalone: true, selector: "nav[tuiTabBar]", inputs: { quantity: "quantity", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, host: { listeners: { "click": "setActive($event.target)" }, properties: { "style": "style" } }, queries: [{ propertyName: "tabs", predicate: i0.forwardRef(function () { return TuiTabBarItem; }), read: ElementRef }], ngImport: i0, template: "<ng-content />\n<div class=\"t-skeletons\">\n    <div\n        *tuiRepeatTimes=\"let index of quantity\"\n        class=\"t-skeleton\"\n    ></div>\n</div>\n", styles: [":host{--tui-active-color: var(--tui-text-action);position:relative;display:flex;font: .625rem/.75rem -apple-system,BlinkMacSystemFont,system-ui,Roboto,Segoe UI,sans-serif;block-size:var(--tui-height-l);color:var(--tui-text-secondary);-webkit-backdrop-filter:blur(.3125rem);backdrop-filter:blur(.3125rem)}:host:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";background:var(--tui-background-base-alt);box-shadow:inset 0 1px var(--tui-border-normal);opacity:.8}[tuiTheme=dark] :host:before{opacity:.7}.t-skeletons{display:none;block-size:100%;inline-size:100%;justify-content:space-around}.t-skeletons:first-child{display:flex}.t-skeleton{display:flex;flex-direction:column;align-items:center;justify-content:center;animation:tuiSkeletonVibe ease-in-out 1s infinite alternate}.t-skeleton:before{content:\"\";inline-size:1.375rem;block-size:1.375rem;margin-bottom:.5rem;border-radius:100%;background:var(--tui-background-neutral-2)}.t-skeleton:after{content:\"\";inline-size:2.5rem;block-size:.375rem;border-radius:1rem;background:var(--tui-background-neutral-2)}\n"], dependencies: [{ kind: "directive", type: TuiRepeatTimes, selector: "[tuiRepeatTimes][tuiRepeatTimesOf]", inputs: ["tuiRepeatTimesOf"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabBarComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'nav[tuiTabBar]', imports: [TuiRepeatTimes], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[style]': 'style',
                        '(click)': 'setActive($event.target)',
                    }, template: "<ng-content />\n<div class=\"t-skeletons\">\n    <div\n        *tuiRepeatTimes=\"let index of quantity\"\n        class=\"t-skeleton\"\n    ></div>\n</div>\n", styles: [":host{--tui-active-color: var(--tui-text-action);position:relative;display:flex;font: .625rem/.75rem -apple-system,BlinkMacSystemFont,system-ui,Roboto,Segoe UI,sans-serif;block-size:var(--tui-height-l);color:var(--tui-text-secondary);-webkit-backdrop-filter:blur(.3125rem);backdrop-filter:blur(.3125rem)}:host:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";background:var(--tui-background-base-alt);box-shadow:inset 0 1px var(--tui-border-normal);opacity:.8}[tuiTheme=dark] :host:before{opacity:.7}.t-skeletons{display:none;block-size:100%;inline-size:100%;justify-content:space-around}.t-skeletons:first-child{display:flex}.t-skeleton{display:flex;flex-direction:column;align-items:center;justify-content:center;animation:tuiSkeletonVibe ease-in-out 1s infinite alternate}.t-skeleton:before{content:\"\";inline-size:1.375rem;block-size:1.375rem;margin-bottom:.5rem;border-radius:100%;background:var(--tui-background-neutral-2)}.t-skeleton:after{content:\"\";inline-size:2.5rem;block-size:.375rem;border-radius:1rem;background:var(--tui-background-neutral-2)}\n"] }]
        }], propDecorators: { tabs: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiTabBarItem), { read: ElementRef }]
            }], quantity: [{
                type: Input
            }], activeItemIndex: [{
                type: Input
            }], activeItemIndexChange: [{
                type: Output
            }] } });

class TuiTabBarItemDirective {
    constructor() {
        const tabs = inject(TuiTabBarComponent);
        const el = tuiInjectElement();
        const link = inject(RouterLinkActive, { optional: true })?.isActiveChange || EMPTY;
        link.pipe(filter(Boolean), tuiWatch(), takeUntilDestroyed()).subscribe(() => tabs.setActive(el));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabBarItemDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabBarItemDirective, isStandalone: true, selector: "[tuiTabBarItem][routerLinkActive]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabBarItemDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTabBarItem][routerLinkActive]',
                }]
        }], ctorParameters: function () { return []; } });

const TuiTabBar = [
    TuiTabBarComponent,
    TuiTabBarItem,
    TuiTabBarItemDirective,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiTabBar, TuiTabBarComponent, TuiTabBarItem, TuiTabBarItemDirective };
//# sourceMappingURL=taiga-ui-addon-mobile-components-tab-bar.mjs.map
