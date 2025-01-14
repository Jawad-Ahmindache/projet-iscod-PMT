import { DOCUMENT, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { TuiPortals, tuiAsPortal } from '@taiga-ui/cdk/classes';
import { TUI_VERSION } from '@taiga-ui/cdk/constants';
import * as i1 from '@taiga-ui/cdk/directives/platform';
import { TuiPlatform } from '@taiga-ui/cdk/directives/platform';
import * as i2 from '@taiga-ui/cdk/directives/visual-viewport';
import { TuiVisualViewport } from '@taiga-ui/cdk/directives/visual-viewport';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { TuiAlerts } from '@taiga-ui/core/components/alert';
import { TuiDialogs } from '@taiga-ui/core/components/dialog';
import { TUI_SCROLLBAR_OPTIONS, TuiScrollControls } from '@taiga-ui/core/components/scrollbar';
import { TuiDropdowns } from '@taiga-ui/core/directives/dropdown';
import { TuiHints } from '@taiga-ui/core/directives/hint';
import { TuiPopupService } from '@taiga-ui/core/directives/popup';
import { TuiBreakpointService } from '@taiga-ui/core/services';
import { TUI_REDUCED_MOTION, TUI_ANIMATIONS_SPEED, TUI_THEME } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils';
import { PreventEventPlugin } from '@taiga-ui/event-plugins';
import { map } from 'rxjs';

/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
class TuiRoot extends TuiPortals {
    constructor() {
        super();
        this.reducedMotion = inject(TUI_REDUCED_MOTION);
        this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));
        this.isMobileRes = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === 'mobile'), tuiWatch()), { initialValue: false });
        this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === 'native';
        this.scrollbars = !(this.nativeScrollbar || inject(TUI_IS_MOBILE));
        inject(DOCUMENT).documentElement.setAttribute('data-tui-theme', inject(TUI_THEME).toLowerCase());
        if (!this.nativeScrollbar) {
            inject(DOCUMENT).defaultView?.document.documentElement.classList.add('tui-zero-scrollbar');
        }
        ngDevMode &&
            console.assert(!!inject(EVENT_MANAGER_PLUGINS).find((plugin) => plugin instanceof PreventEventPlugin), 'NG_EVENT_PLUGINS is missing from global providers');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRoot, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiRoot, isStandalone: true, selector: "tui-root", host: { attributes: { "data-tui-version": "4.19.0" }, listeners: { "touchstart.passive.silent": "0" }, properties: { "style.--tui-duration.ms": "duration", "style.--tui-scroll-behavior": "reducedMotion ? \"auto\" : \"smooth\"", "class._mobile": "isMobileRes()" } }, usesInheritance: true, hostDirectives: [{ directive: i1.TuiPlatform }, { directive: i2.TuiVisualViewport }], ngImport: i0, template: "<div class=\"t-root-content\"><ng-content /></div>\n<tui-scroll-controls\n    *ngIf=\"scrollbars\"\n    class=\"t-root-scrollbar\"\n/>\n<ng-container #viewContainer />\n<ng-content select=\"tuiOverContent\" />\n<tui-dialogs />\n<ng-content select=\"tuiOverDialogs\" />\n<tui-alerts />\n<ng-content select=\"tuiOverAlerts\" />\n<tui-dropdowns />\n<ng-content select=\"tuiOverDropdowns\" />\n<tui-hints />\n<ng-content select=\"tuiOverHints\" />\n", styles: ["@keyframes tuiPresent{to{content:\"\"}}@keyframes tuiSkeletonVibe{to{opacity:.5}}.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: TuiAlerts, selector: "tui-alerts" }, { kind: "component", type: TuiDialogs, selector: "tui-dialogs" }, { kind: "component", type: TuiDropdowns, selector: "tui-dropdowns" }, { kind: "component", type: TuiHints, selector: "tui-hints" }, { kind: "component", type: TuiScrollControls, selector: "tui-scroll-controls" }], viewProviders: [tuiAsPortal(TuiPopupService)], changeDetection: i0.ChangeDetectionStrategy.Default, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRoot, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-root', imports: [NgIf, TuiAlerts, TuiDialogs, TuiDropdowns, TuiHints, TuiScrollControls], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.Default, viewProviders: [tuiAsPortal(TuiPopupService)], hostDirectives: [TuiPlatform, TuiVisualViewport], host: {
                        'data-tui-version': TUI_VERSION,
                        '[style.--tui-duration.ms]': 'duration',
                        '[style.--tui-scroll-behavior]': 'reducedMotion ? "auto" : "smooth"',
                        '[class._mobile]': 'isMobileRes()',
                        // Required for the :active state to work in Safari. https://stackoverflow.com/a/33681490
                        '(touchstart.passive.silent)': '0',
                    }, template: "<div class=\"t-root-content\"><ng-content /></div>\n<tui-scroll-controls\n    *ngIf=\"scrollbars\"\n    class=\"t-root-scrollbar\"\n/>\n<ng-container #viewContainer />\n<ng-content select=\"tuiOverContent\" />\n<tui-dialogs />\n<ng-content select=\"tuiOverDialogs\" />\n<tui-alerts />\n<ng-content select=\"tuiOverAlerts\" />\n<tui-dropdowns />\n<ng-content select=\"tuiOverDropdowns\" />\n<tui-hints />\n<ng-content select=\"tuiOverHints\" />\n", styles: ["@keyframes tuiPresent{to{content:\"\"}}@keyframes tuiSkeletonVibe{to{opacity:.5}}.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}.tui-zero-scrollbar::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar-thumb{display:none}body,input{margin:0}tui-root{position:relative;display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);flex:1;border-image:conic-gradient(var(--tui-background-base) 0 0) fill 0/0/0 0 100vh 0;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;z-index:0;display:none;margin:0}[data-tui-theme] tui-root>.t-root-scrollbar{display:block}.t-root-content{position:relative;top:var(--t-root-top);block-size:100%;isolation:isolate}.t-root-content>*{--t-root-top: 0}[tuiDropdownButton][tuiDropdownButton]{display:none}\n"] }]
        }], ctorParameters: function () { return []; } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiRoot };
//# sourceMappingURL=taiga-ui-core-components-root.mjs.map
