import * as i0 from '@angular/core';
import { afterNextRender, inject, INJECTOR, DestroyRef, NgZone, Injectable, Directive, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiScrollFrom, tuiZoneOptimized } from '@taiga-ui/cdk/observables';
import { tuiGetElementOffset, tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { SCROLL_REF_SELECTOR } from '@taiga-ui/core/components/scrollbar';
import { TUI_SCROLL_REF } from '@taiga-ui/core/tokens';
import { Observable, Subscription, map, distinctUntilChanged } from 'rxjs';

class TuiElasticStickyService extends Observable {
    constructor() {
        super((subscriber) => {
            const subscription = new Subscription();
            afterNextRender(() => {
                const host = this.el.closest(SCROLL_REF_SELECTOR) || this.scrollRef;
                const { offsetTop } = tuiGetElementOffset(host, this.el);
                const { offsetHeight } = this.el;
                const teardown = tuiScrollFrom(host)
                    .pipe(map(() => Math.max(1 -
                    Math.max(Math.round(host.scrollTop) - offsetTop, 0) /
                        offsetHeight, 0)), distinctUntilChanged(), tuiZoneOptimized(this.zone), takeUntilDestroyed(this.destroyRef))
                    .subscribe(subscriber);
                if (!subscription.closed) {
                    subscription.add(teardown);
                }
                else {
                    teardown.unsubscribe();
                }
            }, { injector: this.injector });
            return subscription;
        });
        this.injector = inject(INJECTOR);
        this.el = tuiInjectElement();
        this.scrollRef = inject(TUI_SCROLL_REF).nativeElement;
        this.destroyRef = inject(DestroyRef);
        this.zone = inject(NgZone);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiElasticStickyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiElasticStickyService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiElasticStickyService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class TuiElasticSticky {
    constructor() {
        this.tuiElasticSticky = inject(TuiElasticStickyService);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiElasticSticky, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiElasticSticky, isStandalone: true, selector: "[tuiElasticSticky]", outputs: { tuiElasticSticky: "tuiElasticSticky" }, providers: [TuiElasticStickyService], exportAs: ["tuiElasticSticky"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiElasticSticky, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiElasticSticky]',
                    providers: [TuiElasticStickyService],
                    exportAs: 'tuiElasticSticky',
                }]
        }], propDecorators: { tuiElasticSticky: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiElasticSticky, TuiElasticStickyService };
//# sourceMappingURL=taiga-ui-addon-mobile-directives-elastic-sticky.mjs.map
