import * as i0 from '@angular/core';
import { Directive, Input, inject, ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { WaResizeObserver } from '@ng-web-apis/resize-observer';

class TuiBadgedContentDirective {
    constructor() {
        this.tuiSlot = 'top';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBadgedContentDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiBadgedContentDirective, isStandalone: true, selector: "[tuiSlot]", inputs: { tuiSlot: "tuiSlot" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBadgedContentDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiSlot]',
                }]
        }], propDecorators: { tuiSlot: [{
                type: Input
            }] } });

class TuiBadgedContentComponent {
    constructor() {
        this.cdr = inject(ChangeDetectorRef);
    }
    onResize() {
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBadgedContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiBadgedContentComponent, isStandalone: true, selector: "tui-badged-content", ngImport: i0, template: "<ng-content />\n\n<div\n    #badgeTop\n    class=\"t-badge t-badge_top\"\n    [style.--t-badge-height.px]=\"badgeTop.offsetHeight\"\n    (waResizeObserver)=\"onResize()\"\n>\n    <ng-content select=\"tui-badge-notification[tuiSlot='top']\" />\n    <div class=\"t-border\">\n        <ng-content select=\"[tuiSlot='top']\" />\n    </div>\n</div>\n\n<div\n    #badgeBottom\n    class=\"t-badge t-badge_bottom\"\n    [style.--t-badge-height.px]=\"badgeBottom.offsetHeight\"\n    (waResizeObserver)=\"onResize()\"\n>\n    <ng-content select=\"tui-badge-notification[tuiSlot='bottom']\" />\n    <div class=\"t-border\">\n        <ng-content select=\"[tuiSlot='bottom']\" />\n    </div>\n</div>\n", styles: [":host{--tui-radius: var(--tui-radius-l);--t-badge-height: 0;--t-corner-offset: calc((var(--tui-radius) * 1.4142 - var(--tui-radius)) * 1 / 1.4142);position:relative;display:inline-block;block-size:-webkit-fit-content;block-size:-moz-fit-content;block-size:fit-content;inline-size:-webkit-max-content;inline-size:max-content;color:var(--tui-background-base)}.t-badge{--t-offset: calc(var(--t-badge-height) * -.5 + var(--t-corner-offset));position:absolute;display:flex}.t-badge_top{top:var(--t-offset);right:var(--t-offset)}.t-badge_bottom{bottom:var(--t-offset);right:var(--t-offset)}.t-border:not(:empty){display:flex;border-radius:6rem;box-shadow:0 0 0 1px currentColor;background:currentColor}\n"], dependencies: [{ kind: "directive", type: WaResizeObserver, selector: "[waResizeObserver]", inputs: ["box"], outputs: ["waResizeObserver"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBadgedContentComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-badged-content', imports: [TuiBadgedContentDirective, WaResizeObserver], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content />\n\n<div\n    #badgeTop\n    class=\"t-badge t-badge_top\"\n    [style.--t-badge-height.px]=\"badgeTop.offsetHeight\"\n    (waResizeObserver)=\"onResize()\"\n>\n    <ng-content select=\"tui-badge-notification[tuiSlot='top']\" />\n    <div class=\"t-border\">\n        <ng-content select=\"[tuiSlot='top']\" />\n    </div>\n</div>\n\n<div\n    #badgeBottom\n    class=\"t-badge t-badge_bottom\"\n    [style.--t-badge-height.px]=\"badgeBottom.offsetHeight\"\n    (waResizeObserver)=\"onResize()\"\n>\n    <ng-content select=\"tui-badge-notification[tuiSlot='bottom']\" />\n    <div class=\"t-border\">\n        <ng-content select=\"[tuiSlot='bottom']\" />\n    </div>\n</div>\n", styles: [":host{--tui-radius: var(--tui-radius-l);--t-badge-height: 0;--t-corner-offset: calc((var(--tui-radius) * 1.4142 - var(--tui-radius)) * 1 / 1.4142);position:relative;display:inline-block;block-size:-webkit-fit-content;block-size:-moz-fit-content;block-size:fit-content;inline-size:-webkit-max-content;inline-size:max-content;color:var(--tui-background-base)}.t-badge{--t-offset: calc(var(--t-badge-height) * -.5 + var(--t-corner-offset));position:absolute;display:flex}.t-badge_top{top:var(--t-offset);right:var(--t-offset)}.t-badge_bottom{bottom:var(--t-offset);right:var(--t-offset)}.t-border:not(:empty){display:flex;border-radius:6rem;box-shadow:0 0 0 1px currentColor;background:currentColor}\n"] }]
        }] });

const TuiBadgedContent = [
    TuiBadgedContentDirective,
    TuiBadgedContentComponent,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiBadgedContent, TuiBadgedContentComponent, TuiBadgedContentDirective };
//# sourceMappingURL=taiga-ui-kit-components-badged-content.mjs.map
