import { DOCUMENT, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Directive, Input, Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import * as i2 from '@ng-web-apis/intersection-observer';
import { WaIntersectionObserver } from '@ng-web-apis/intersection-observer';
import { TuiKeyboardService } from '@taiga-ui/addon-mobile/services';
import * as i1 from '@taiga-ui/cdk/directives/active-zone';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { TuiSwipe } from '@taiga-ui/cdk/directives/swipe';
import { tuiIsHTMLElement, tuiInjectElement, tuiIsElement } from '@taiga-ui/cdk/utils/dom';
import { tuiGetNativeFocused } from '@taiga-ui/cdk/utils/focus';
import { tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiSlideInTop, tuiFadeIn } from '@taiga-ui/core/animations';
import { TUI_DROPDOWN_COMPONENT, TuiDropdownDirective } from '@taiga-ui/core/directives/dropdown';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';

class TuiDropdownMobile {
    constructor() {
        this.isMobile = inject(TUI_IS_MOBILE);
        this.tuiDropdownMobile = '';
    }
    onMouseDown(event) {
        if (!this.isMobile ||
            !tuiIsHTMLElement(event.target) ||
            !event.target.matches('input,textarea') ||
            this.tuiDropdownMobile) {
            return;
        }
        event.preventDefault();
        event.target.focus({ preventScroll: true });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownMobile, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownMobile, isStandalone: true, selector: "[tuiDropdownMobile]", inputs: { tuiDropdownMobile: "tuiDropdownMobile" }, host: { listeners: { "mousedown": "onMouseDown($event)" }, properties: { "style.visibility": "\"visible\"" } }, providers: [
            {
                provide: TUI_DROPDOWN_COMPONENT,
                useFactory: () => inject(TUI_IS_MOBILE)
                    ? TuiDropdownMobileComponent
                    : inject(TUI_DROPDOWN_COMPONENT, { skipSelf: true }),
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownMobile, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownMobile]',
                    providers: [
                        {
                            provide: TUI_DROPDOWN_COMPONENT,
                            useFactory: () => inject(TUI_IS_MOBILE)
                                ? TuiDropdownMobileComponent
                                : inject(TUI_DROPDOWN_COMPONENT, { skipSelf: true }),
                        },
                    ],
                    host: {
                        '[style.visibility]': '"visible"',
                        '(mousedown)': 'onMouseDown($event)',
                    },
                }]
        }], propDecorators: { tuiDropdownMobile: [{
                type: Input
            }] } });

const GAP = 16;
class TuiDropdownMobileComponent {
    constructor() {
        this.el = tuiInjectElement();
        this.keyboard = inject(TuiKeyboardService);
        this.doc = inject(DOCUMENT);
        this.scrollTop = this.doc.documentElement.scrollTop;
        this.observer = new ResizeObserver(() => this.refresh(this.doc.defaultView.visualViewport));
        this.directive = inject(TuiDropdownMobile);
        this.dropdown = inject(TuiDropdownDirective);
        this.animation = {
            value: '',
            params: {
                start: '100vh',
                duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
            },
        };
        this.observer.observe(this.dropdown.el);
        this.doc.documentElement.style.setProperty('scroll-behavior', 'initial');
    }
    ngAfterViewInit() {
        this.el.scrollTop = this.directive.tuiDropdownMobile ? this.el.clientHeight : 0;
    }
    ngOnDestroy() {
        this.observer.disconnect();
        this.doc.body.classList.remove('t-dropdown-mobile');
        this.doc.body.style.removeProperty('--t-root-top');
        this.doc.documentElement.scrollTop = this.scrollTop;
        this.doc.documentElement.style.removeProperty('scroll-behavior');
        if (this.focused) {
            this.keyboard.hide();
        }
    }
    onClick(event) {
        if (tuiIsElement(event.target) &&
            !this.el.contains(event.target) &&
            (!this.dropdown.el.contains(event.target) ||
                event.target.matches('input,textarea'))) {
            event.stopPropagation();
        }
    }
    onSwipe({ direction }, el) {
        if (direction === 'bottom' &&
            el.getBoundingClientRect().bottom > Number(this.doc.defaultView?.innerHeight)) {
            this.close();
        }
    }
    onIntersection({ isIntersecting }) {
        if (isIntersecting) {
            this.close();
        }
    }
    close() {
        this.dropdown.toggle(false);
    }
    refresh({ offsetTop, height }) {
        this.doc.body.style.removeProperty('--t-root-top');
        if (!this.focused ||
            this.directive.tuiDropdownMobile ||
            !this.doc.documentElement.style.getPropertyValue('scroll-behavior')) {
            return;
        }
        this.doc.documentElement.scrollTop = 0;
        const rect = this.dropdown.el.getBoundingClientRect();
        const top = offsetTop + GAP - rect.top;
        const offset = rect.height + GAP * 2;
        this.el.style.setProperty('top', tuiPx(offsetTop + offset));
        this.el.style.setProperty('height', tuiPx(height - offset));
        this.doc.body.classList.add('t-dropdown-mobile');
        this.doc.body.style.setProperty('--t-root-top', tuiPx(top));
    }
    get focused() {
        return this.dropdown.el.contains(tuiGetNativeFocused(this.doc));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownMobileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownMobileComponent, isStandalone: true, selector: "tui-dropdown-mobile", host: { listeners: { "document:click.silent.capture": "onClick($event)", "window>scroll.silent.capture": "refresh($event.currentTarget.visualViewport)", "visualViewport>resize.silent": "refresh($event.target)", "visualViewport>scroll.silent": "refresh($event.target)" }, properties: { "@tuiFadeIn": "animation", "@tuiSlideInTop": "animation", "class._sheet": "directive.tuiDropdownMobile" } }, hostDirectives: [{ directive: i1.TuiActiveZone }], ngImport: i0, template: "<div\n    *ngIf=\"directive.tuiDropdownMobile\"\n    waIntersectionObserver\n    waIntersectionThreshold=\"1\"\n    class=\"t-filler\"\n    (touchstart.prevent)=\"close()\"\n    (waIntersectionObservee)=\"$event[0] && onIntersection($event[0])\"\n></div>\n<div\n    #container\n    class=\"t-container\"\n    (tuiSwipe)=\"onSwipe($event, container)\"\n>\n    <h2\n        *ngIf=\"directive.tuiDropdownMobile\"\n        class=\"t-heading\"\n    >\n        {{ directive.tuiDropdownMobile }}\n    </h2>\n    <div class=\"t-content\">\n        <ng-container *polymorpheusOutlet=\"dropdown.content as text\">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n", styles: ["tui-dropdown-mobile:not(._sheet){scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;visibility:visible!important;transform:translateZ(0);background:var(--tui-background-base);overscroll-behavior:contain;overflow:auto;box-shadow:0 -.5rem .5rem var(--tui-background-base),0 10rem var(--tui-background-base),0 20rem var(--tui-background-base),0 30rem var(--tui-background-base)}tui-dropdown-mobile:not(._sheet)::-webkit-scrollbar,tui-dropdown-mobile:not(._sheet)::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile:not(._sheet):after{content:\"\";display:block;block-size:1px}tui-dropdown-mobile:not(._sheet)>.t-container{scrollbar-width:none;-ms-overflow-style:none;position:sticky;top:0;block-size:100%;overflow:auto;margin:0 .75rem;touch-action:pan-y!important}tui-dropdown-mobile:not(._sheet)>.t-container::-webkit-scrollbar,tui-dropdown-mobile:not(._sheet)>.t-container::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile:not(._sheet) [tuiDropdownButton][tuiDropdownButton]{position:fixed;right:1rem;bottom:1rem;display:inline-flex}tui-dropdown-mobile._sheet{position:fixed;top:0;left:0;bottom:0;right:0;scrollbar-width:none;-ms-overflow-style:none;overflow:auto;background:var(--tui-service-backdrop);box-shadow:0 -80vh 0 5rem var(--tui-service-backdrop);overflow-y:scroll;scroll-snap-type:y mandatory;overscroll-behavior:none}tui-dropdown-mobile._sheet::-webkit-scrollbar,tui-dropdown-mobile._sheet::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile._sheet>.t-filler{block-size:100%;scroll-snap-stop:always;scroll-snap-align:start}tui-dropdown-mobile._sheet>.t-container{display:flex;max-block-size:calc(100% - 1rem);flex-direction:column;border-top-left-radius:1rem;border-top-right-radius:1rem;padding:0 .5rem;scroll-snap-stop:always;scroll-snap-align:start;background:var(--tui-background-elevation-1)}tui-dropdown-mobile._sheet>.t-container>.t-heading{position:relative;margin:0;padding:2rem .5rem .75rem;font:var(--tui-font-heading-6)}tui-dropdown-mobile._sheet>.t-container>.t-heading:before{content:\"\";position:absolute;left:50%;top:.75rem;inline-size:2rem;block-size:.25rem;border-radius:1rem;background:var(--tui-background-neutral-2);transform:translate(-50%,-50%)}tui-dropdown-mobile._sheet>.t-container>.t-content{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}tui-dropdown-mobile._sheet>.t-container>.t-content::-webkit-scrollbar,tui-dropdown-mobile._sheet>.t-container>.t-content::-webkit-scrollbar-thumb{display:none}.t-dropdown-mobile{touch-action:none;visibility:hidden}.t-dropdown-mobile *{touch-action:inherit;visibility:inherit}.t-dropdown-mobile tui-root{visibility:visible}.t-dropdown-mobile tui-root .t-root-content{visibility:hidden}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiSwipe, selector: "[tuiSwipe]", outputs: ["tuiSwipe"] }, { kind: "directive", type: i2.WaIntersectionObserverDirective, selector: "[waIntersectionObserver]", inputs: ["waIntersectionRootMargin", "waIntersectionThreshold"], exportAs: ["IntersectionObserver"] }, { kind: "directive", type: i2.WaIntersectionObservee, selector: "[waIntersectionObservee]", outputs: ["waIntersectionObservee"] }], animations: [tuiSlideInTop, tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownMobileComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-dropdown-mobile', imports: [
                        NgIf,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiSwipe,
                        WaIntersectionObserver,
                    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideInTop, tuiFadeIn], hostDirectives: [TuiActiveZone], host: {
                        '[@tuiFadeIn]': 'animation',
                        '[@tuiSlideInTop]': 'animation',
                        '[class._sheet]': 'directive.tuiDropdownMobile',
                        '(document:click.silent.capture)': 'onClick($event)',
                        '(window>scroll.silent.capture)': 'refresh($event.currentTarget.visualViewport)',
                        '(visualViewport>resize.silent)': 'refresh($event.target)',
                        '(visualViewport>scroll.silent)': 'refresh($event.target)',
                    }, template: "<div\n    *ngIf=\"directive.tuiDropdownMobile\"\n    waIntersectionObserver\n    waIntersectionThreshold=\"1\"\n    class=\"t-filler\"\n    (touchstart.prevent)=\"close()\"\n    (waIntersectionObservee)=\"$event[0] && onIntersection($event[0])\"\n></div>\n<div\n    #container\n    class=\"t-container\"\n    (tuiSwipe)=\"onSwipe($event, container)\"\n>\n    <h2\n        *ngIf=\"directive.tuiDropdownMobile\"\n        class=\"t-heading\"\n    >\n        {{ directive.tuiDropdownMobile }}\n    </h2>\n    <div class=\"t-content\">\n        <ng-container *polymorpheusOutlet=\"dropdown.content as text\">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n", styles: ["tui-dropdown-mobile:not(._sheet){scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;visibility:visible!important;transform:translateZ(0);background:var(--tui-background-base);overscroll-behavior:contain;overflow:auto;box-shadow:0 -.5rem .5rem var(--tui-background-base),0 10rem var(--tui-background-base),0 20rem var(--tui-background-base),0 30rem var(--tui-background-base)}tui-dropdown-mobile:not(._sheet)::-webkit-scrollbar,tui-dropdown-mobile:not(._sheet)::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile:not(._sheet):after{content:\"\";display:block;block-size:1px}tui-dropdown-mobile:not(._sheet)>.t-container{scrollbar-width:none;-ms-overflow-style:none;position:sticky;top:0;block-size:100%;overflow:auto;margin:0 .75rem;touch-action:pan-y!important}tui-dropdown-mobile:not(._sheet)>.t-container::-webkit-scrollbar,tui-dropdown-mobile:not(._sheet)>.t-container::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile:not(._sheet) [tuiDropdownButton][tuiDropdownButton]{position:fixed;right:1rem;bottom:1rem;display:inline-flex}tui-dropdown-mobile._sheet{position:fixed;top:0;left:0;bottom:0;right:0;scrollbar-width:none;-ms-overflow-style:none;overflow:auto;background:var(--tui-service-backdrop);box-shadow:0 -80vh 0 5rem var(--tui-service-backdrop);overflow-y:scroll;scroll-snap-type:y mandatory;overscroll-behavior:none}tui-dropdown-mobile._sheet::-webkit-scrollbar,tui-dropdown-mobile._sheet::-webkit-scrollbar-thumb{display:none}tui-dropdown-mobile._sheet>.t-filler{block-size:100%;scroll-snap-stop:always;scroll-snap-align:start}tui-dropdown-mobile._sheet>.t-container{display:flex;max-block-size:calc(100% - 1rem);flex-direction:column;border-top-left-radius:1rem;border-top-right-radius:1rem;padding:0 .5rem;scroll-snap-stop:always;scroll-snap-align:start;background:var(--tui-background-elevation-1)}tui-dropdown-mobile._sheet>.t-container>.t-heading{position:relative;margin:0;padding:2rem .5rem .75rem;font:var(--tui-font-heading-6)}tui-dropdown-mobile._sheet>.t-container>.t-heading:before{content:\"\";position:absolute;left:50%;top:.75rem;inline-size:2rem;block-size:.25rem;border-radius:1rem;background:var(--tui-background-neutral-2);transform:translate(-50%,-50%)}tui-dropdown-mobile._sheet>.t-container>.t-content{scrollbar-width:none;-ms-overflow-style:none;overflow:auto}tui-dropdown-mobile._sheet>.t-container>.t-content::-webkit-scrollbar,tui-dropdown-mobile._sheet>.t-container>.t-content::-webkit-scrollbar-thumb{display:none}.t-dropdown-mobile{touch-action:none;visibility:hidden}.t-dropdown-mobile *{touch-action:inherit;visibility:inherit}.t-dropdown-mobile tui-root{visibility:visible}.t-dropdown-mobile tui-root .t-root-content{visibility:hidden}\n"] }]
        }], ctorParameters: function () { return []; } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiDropdownMobile, TuiDropdownMobileComponent };
//# sourceMappingURL=taiga-ui-addon-mobile-directives-dropdown-mobile.mjs.map
