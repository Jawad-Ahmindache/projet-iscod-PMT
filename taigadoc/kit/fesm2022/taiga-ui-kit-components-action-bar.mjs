import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Input, Directive } from '@angular/core';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiFadeIn, tuiSlideInTop } from '@taiga-ui/core/animations';
import { TUI_BUTTON_OPTIONS } from '@taiga-ui/core/components/button';
import { TuiExpandComponent } from '@taiga-ui/core/components/expand';
import { tuiLinkOptionsProvider } from '@taiga-ui/core/components/link';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils/miscellaneous';
import { TuiDropdownPortal } from '@taiga-ui/core/directives/dropdown';

class TuiActionBarComponent {
    constructor() {
        this.animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.expanded = false;
        this.size = 'm';
        this.appearance = 'glass';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiActionBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiActionBarComponent, isStandalone: true, selector: "tui-action-bar", inputs: { expanded: "expanded", size: "size" }, host: { attributes: { "tuiTheme": "dark" }, properties: { "attr.data-size": "size", "@tuiFadeIn": "animation", "@tuiSlideInTop": "animation" } }, providers: [
            tuiProvide(TUI_BUTTON_OPTIONS, TuiActionBarComponent),
            tuiLinkOptionsProvider({ appearance: 'action-grayscale', pseudo: true }),
        ], ngImport: i0, template: "<tui-expand [expanded]=\"expanded\">\n    <ng-content select=\"tui-data-list,[tuiMenu]\" />\n</tui-expand>\n\n<div class=\"t-content\">\n    <ng-content />\n\n    <div class=\"t-actions\">\n        <ng-content select=\"a,button,[tuiAction]\" />\n    </div>\n</div>\n", styles: [":host{position:fixed;left:max(calc(50% - 37rem),1.5rem);bottom:1rem;display:flex;inline-size:100%;max-inline-size:min(calc(100vw - 3rem),74rem);box-sizing:border-box;border-radius:1rem;background:var(--tui-service-backdrop);color:var(--tui-text-primary);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem);flex-direction:column;justify-content:center;padding:.75rem;text-indent:.75rem;font:var(--tui-font-text-m);white-space:nowrap}:host[data-size=s]{border-radius:var(--tui-radius-l);font:var(--tui-font-text-s);padding:.5rem}:host-context(tui-root._mobile) :host{padding:1rem;border-radius:1.25rem;text-indent:0}:host ::ng-deep tui-data-list[data-size]{padding:0;margin:-.625rem -.625rem 1rem}:host ::ng-deep tui-items-with-more{text-indent:.5rem}:host-context(tui-root._mobile) :host ::ng-deep tui-items-with-more{display:none}.t-content{display:flex;align-items:center;gap:.7rem 2.5rem}:host-context(tui-root._mobile) .t-content{flex-wrap:wrap}.t-actions{display:flex;justify-content:flex-end;gap:.5rem;margin-inline-start:auto;text-indent:0}:host-context(tui-root._mobile) .t-actions{flex:1}:host-context(tui-root._mobile) .t-actions ::ng-deep [tuiButton]{flex:1}\n"], dependencies: [{ kind: "component", type: TuiExpandComponent, selector: "tui-expand", inputs: ["async", "expanded"] }], animations: [tuiFadeIn, tuiSlideInTop], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiActionBarComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-action-bar', imports: [TuiExpandComponent], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        tuiProvide(TUI_BUTTON_OPTIONS, TuiActionBarComponent),
                        tuiLinkOptionsProvider({ appearance: 'action-grayscale', pseudo: true }),
                    ], animations: [tuiFadeIn, tuiSlideInTop], host: {
                        tuiTheme: 'dark',
                        '[attr.data-size]': 'size',
                        '[@tuiFadeIn]': 'animation',
                        '[@tuiSlideInTop]': 'animation',
                    }, template: "<tui-expand [expanded]=\"expanded\">\n    <ng-content select=\"tui-data-list,[tuiMenu]\" />\n</tui-expand>\n\n<div class=\"t-content\">\n    <ng-content />\n\n    <div class=\"t-actions\">\n        <ng-content select=\"a,button,[tuiAction]\" />\n    </div>\n</div>\n", styles: [":host{position:fixed;left:max(calc(50% - 37rem),1.5rem);bottom:1rem;display:flex;inline-size:100%;max-inline-size:min(calc(100vw - 3rem),74rem);box-sizing:border-box;border-radius:1rem;background:var(--tui-service-backdrop);color:var(--tui-text-primary);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem);flex-direction:column;justify-content:center;padding:.75rem;text-indent:.75rem;font:var(--tui-font-text-m);white-space:nowrap}:host[data-size=s]{border-radius:var(--tui-radius-l);font:var(--tui-font-text-s);padding:.5rem}:host-context(tui-root._mobile) :host{padding:1rem;border-radius:1.25rem;text-indent:0}:host ::ng-deep tui-data-list[data-size]{padding:0;margin:-.625rem -.625rem 1rem}:host ::ng-deep tui-items-with-more{text-indent:.5rem}:host-context(tui-root._mobile) :host ::ng-deep tui-items-with-more{display:none}.t-content{display:flex;align-items:center;gap:.7rem 2.5rem}:host-context(tui-root._mobile) .t-content{flex-wrap:wrap}.t-actions{display:flex;justify-content:flex-end;gap:.5rem;margin-inline-start:auto;text-indent:0}:host-context(tui-root._mobile) .t-actions{flex:1}:host-context(tui-root._mobile) .t-actions ::ng-deep [tuiButton]{flex:1}\n"] }]
        }], propDecorators: { expanded: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class TuiActionBarDirective extends TuiDropdownPortal {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiActionBarDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiActionBarDirective, isStandalone: true, selector: "ng-template[tuiActionBar]", inputs: { tuiDropdown: ["tuiActionBar", "tuiDropdown"] }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiActionBarDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiActionBar]',
                    inputs: ['tuiDropdown: tuiActionBar'],
                }]
        }] });

const TuiActionBar = [TuiActionBarComponent, TuiActionBarDirective];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiActionBar, TuiActionBarComponent, TuiActionBarDirective };
//# sourceMappingURL=taiga-ui-kit-components-action-bar.mjs.map
