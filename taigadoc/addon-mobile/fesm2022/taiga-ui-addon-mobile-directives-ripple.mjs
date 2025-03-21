import { DOCUMENT } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, DestroyRef, Directive, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiTypedFromEvent } from '@taiga-ui/cdk/observables';
import { tuiIsHTMLElement } from '@taiga-ui/cdk/utils/dom';
import { tuiWithStyles, tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { merge, race, switchMap, first, tap } from 'rxjs';

const TO_KEYFRAMES = [
    {
        transform: 'scale(0)',
        opacity: '0.12',
    },
    {
        opacity: '0.12',
    },
];
const FROM_KEYFRAMES = [
    {
        opacity: '0.12',
    },
    {
        opacity: '0',
    },
];
class TuiRippleStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRippleStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiRippleStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-ripple-styles" }, ngImport: i0, template: '', isInline: true, styles: [".tui-ripple{position:absolute;z-index:100;opacity:.12;border-radius:100%;background:var(--tui-ripple-background, currentColor);animation-fill-mode:forwards;pointer-events:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRippleStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-ripple-styles',
                    }, styles: [".tui-ripple{position:absolute;z-index:100;opacity:.12;border-radius:100%;background:var(--tui-ripple-background, currentColor);animation-fill-mode:forwards;pointer-events:none}\n"] }]
        }] });
class TuiRipple {
    constructor() {
        this.document = inject(DOCUMENT);
        this.destroyRef = inject(DestroyRef);
        this.animationOptions = {
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        };
        this.nothing = tuiWithStyles(TuiRippleStyles);
        this.tuiRipple = '';
    }
    start(x, y, target, el) {
        const element = this.tuiRipple ? target.closest(this.tuiRipple) : el;
        if (!tuiIsHTMLElement(element)) {
            return;
        }
        const ripple = this.createRipple(x, y, element.getBoundingClientRect());
        const touchEnd$ = merge(tuiTypedFromEvent(element, 'pointerup'), tuiTypedFromEvent(element, 'pointercancel'), tuiTypedFromEvent(element, 'pointermove'));
        element.appendChild(ripple);
        const animationEndOn$ = tuiTypedFromEvent(ripple.animate(TO_KEYFRAMES, this.animationOptions), 'finish');
        race(touchEnd$.pipe(switchMap(() => animationEndOn$)), animationEndOn$.pipe(switchMap(() => touchEnd$)))
            .pipe(first(), switchMap(() => tuiTypedFromEvent(ripple.animate(FROM_KEYFRAMES, this.animationOptions), 'finish')), first(), tap(() => element.removeChild(ripple)), takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
    createRipple(clientX, clientY, { width, height, top, left }) {
        const ripple = this.document.createElement('div');
        const radius = Math.sqrt(width * width + height * height);
        const dimension = radius * 2;
        const x = clientX - left - radius;
        const y = clientY - top - radius;
        Object.assign(ripple.style, {
            position: 'absolute',
            top: tuiPx(y),
            left: tuiPx(x),
            width: tuiPx(dimension),
            height: tuiPx(dimension),
            zIndex: 100,
            opacity: 0.12,
            borderRadius: '100%',
            background: 'var(--tui-ripple-background, currentColor)',
            animationFillMode: 'forwards',
            pointerEvents: 'none',
        });
        return ripple;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRipple, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiRipple, isStandalone: true, selector: "[tuiRipple]", inputs: { tuiRipple: "tuiRipple" }, host: { listeners: { "pointerdown.silent": "start($event.clientX, $event.clientY, $event.target, $event.currentTarget)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiRipple, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiRipple]',
                    host: {
                        '(pointerdown.silent)': 'start($event.clientX, $event.clientY, $event.target, $event.currentTarget)',
                    },
                }]
        }], propDecorators: { tuiRipple: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiRipple };
//# sourceMappingURL=taiga-ui-addon-mobile-directives-ripple.mjs.map
