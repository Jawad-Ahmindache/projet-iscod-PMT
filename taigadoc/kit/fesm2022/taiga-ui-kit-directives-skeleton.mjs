import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, Directive, Input } from '@angular/core';
import { CHAR_NO_BREAK_SPACE } from '@taiga-ui/cdk/constants';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiWithStyles, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';

const FADE = [{ opacity: 0.06 }, { opacity: 1 }];
class TuiSkeletonStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSkeletonStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSkeletonStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-skeleton-styles" }, ngImport: i0, template: '', isInline: true, styles: ["@keyframes tuiSkeleton{0%{opacity:.03}to{opacity:.06}}[tuiSkeleton]._skeleton{color:transparent;background:var(--tui-background-base)!important;box-shadow:none!important;filter:contrast(0) brightness(0);animation:tuiSkeleton ease-in-out 1s infinite alternate;-webkit-user-select:none;user-select:none;pointer-events:none}[tuiSkeleton]._skeleton[data-tui-skeleton]{background:transparent!important}[tuiSkeleton]._skeleton[data-tui-skeleton]:before{content:attr(data-tui-skeleton);background:var(--tui-background-base);font-size:smaller;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:.25rem}[tuiTheme=dark] [tuiSkeleton]._skeleton,[tuiTheme=dark][tuiSkeleton]._skeleton{filter:contrast(0) brightness(0) invert(1)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSkeletonStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-skeleton-styles',
                    }, styles: ["@keyframes tuiSkeleton{0%{opacity:.03}to{opacity:.06}}[tuiSkeleton]._skeleton{color:transparent;background:var(--tui-background-base)!important;box-shadow:none!important;filter:contrast(0) brightness(0);animation:tuiSkeleton ease-in-out 1s infinite alternate;-webkit-user-select:none;user-select:none;pointer-events:none}[tuiSkeleton]._skeleton[data-tui-skeleton]{background:transparent!important}[tuiSkeleton]._skeleton[data-tui-skeleton]:before{content:attr(data-tui-skeleton);background:var(--tui-background-base);font-size:smaller;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:.25rem}[tuiTheme=dark] [tuiSkeleton]._skeleton,[tuiTheme=dark][tuiSkeleton]._skeleton{filter:contrast(0) brightness(0) invert(1)}\n"] }]
        }] });
class TuiSkeleton {
    constructor() {
        this.el = tuiInjectElement();
        this.duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)) * 2;
        this.nothing = tuiWithStyles(TuiSkeletonStyles);
        this.tuiSkeleton = false;
    }
    ngOnChanges({ tuiSkeleton }) {
        this.animation?.cancel();
        if (!tuiSkeleton?.currentValue && !tuiSkeleton?.firstChange) {
            this.animation = this.el.animate(FADE, this.duration);
        }
    }
    getPlaceholder(value) {
        switch (typeof value) {
            case 'number':
                return Array.from({ length: value })
                    .map(() => CHAR_NO_BREAK_SPACE.repeat(getLength()))
                    .join(' ');
            case 'string':
                return value;
            default:
                return null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSkeleton, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiSkeleton, isStandalone: true, selector: "[tuiSkeleton]", inputs: { tuiSkeleton: "tuiSkeleton" }, host: { attributes: { "tuiSkeleton": "" }, properties: { "class._skeleton": "tuiSkeleton", "attr.data-tui-skeleton": "getPlaceholder(tuiSkeleton)" } }, usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiSkeleton.prototype, "getPlaceholder", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSkeleton, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiSkeleton]',
                    host: {
                        tuiSkeleton: '',
                        '[class._skeleton]': 'tuiSkeleton',
                        '[attr.data-tui-skeleton]': 'getPlaceholder(tuiSkeleton)',
                    },
                }]
        }], propDecorators: { tuiSkeleton: [{
                type: Input
            }], getPlaceholder: [] } });
function getLength() {
    return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}

/**
 * Generated bundle index. Do not edit.
 */

export { TuiSkeleton };
//# sourceMappingURL=taiga-ui-kit-directives-skeleton.mjs.map
