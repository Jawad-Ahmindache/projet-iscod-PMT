import * as i0 from '@angular/core';
import { inject, Injectable, LOCALE_ID, NgZone } from '@angular/core';
import { tuiZoneOptimized, tuiZonefree } from '@taiga-ui/cdk/observables';
import { TUI_WINDOW_SIZE, TUI_IS_WEBKIT } from '@taiga-ui/cdk/tokens';
import { TUI_MEDIA } from '@taiga-ui/core/tokens';
import { Observable, map, distinctUntilChanged, shareReplay, fromEvent, startWith, of, finalize } from 'rxjs';
import { WA_WINDOW, WA_ANIMATION_FRAME } from '@ng-web-apis/common';
import { EMPTY_CLIENT_RECT } from '@taiga-ui/cdk/constants';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { TuiPositionAccessor } from '@taiga-ui/core/classes';

/**
 * Service to provide the current breakpoint based on Taiga UI's media queries
 */
class TuiBreakpointService extends Observable {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.media = inject(TUI_MEDIA);
        this.sorted = Object.values(this.media).sort((a, b) => a - b);
        this.invert = Object.keys(this.media).reduce((ret, key) => ({
            ...ret,
            [this.media[key]]: key,
        }), {});
        this.stream$ = inject(TUI_WINDOW_SIZE).pipe(map(({ width }) => this.sorted.find((size) => size > width)), map((key) => this.invert[key || this.sorted[this.sorted.length - 1] || 0]), distinctUntilChanged(), tuiZoneOptimized(), shareReplay({ bufferSize: 1, refCount: true }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBreakpointService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBreakpointService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBreakpointService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

/**
 * @deprecated use {@link TUI_DARK_MODE} instead
 */
class TuiDarkThemeService extends Observable {
    constructor() {
        const media = inject(WA_WINDOW).matchMedia('(prefers-color-scheme: dark)');
        const media$ = fromEvent(media, 'change').pipe(startWith(null), map(() => media.matches), shareReplay({ bufferSize: 1, refCount: true }));
        super((subscriber) => media$.subscribe(subscriber));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDarkThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDarkThemeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDarkThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class TuiFormatDateService {
    constructor() {
        this.locale = inject(LOCALE_ID);
    }
    format(timestamp) {
        return of(new Date(timestamp).toLocaleTimeString(this.locale, {
            hour: 'numeric',
            minute: '2-digit',
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatDateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatDateService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFormatDateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class TuiPositionService extends Observable {
    constructor() {
        const animationFrame$ = inject(WA_ANIMATION_FRAME);
        const zone = inject(NgZone);
        super((subscriber) => animationFrame$
            .pipe(startWith(null), map(() => this.accessor.getPosition(this.el.getBoundingClientRect(), this.el)), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT)))
            .subscribe(subscriber));
        this.el = tuiInjectElement();
        this.accessor = inject(TuiPositionAccessor);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPositionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPositionService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPositionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class TuiVisualViewportService {
    constructor() {
        this.isWebkit = inject(TUI_IS_WEBKIT);
        this.win = inject(WA_WINDOW);
    }
    // https://bugs.webkit.org/show_bug.cgi?id=207089
    correct(point) {
        return this.isWebkit
            ? [
                point[0] + (this.win.visualViewport?.offsetTop ?? 0),
                point[1] + (this.win.visualViewport?.offsetLeft ?? 0),
            ]
            : point;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiVisualViewportService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiVisualViewportService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiVisualViewportService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiBreakpointService, TuiDarkThemeService, TuiFormatDateService, TuiPositionService, TuiVisualViewportService };
//# sourceMappingURL=taiga-ui-core-services.mjs.map
