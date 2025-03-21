import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Directive, inject, Input } from '@angular/core';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiWithStyles, tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { tuiZonefull, tuiWatch } from '@taiga-ui/cdk/observables';
import { BehaviorSubject, combineLatest, map, distinctUntilChanged, of, delay } from 'rxjs';

class TuiProgressFixedGradientStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressFixedGradientStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiProgressFixedGradientStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-fixed-gradient" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiProgressFixedGradient]::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-moz-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear;margin-right:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-webkit-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressFixedGradientStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-fixed-gradient',
                    }, styles: ["[tuiProgressFixedGradient]::-moz-progress-bar{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-moz-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear;margin-right:calc(-100% + var(--tui-progress-percent))}[tuiProgressFixedGradient]::-webkit-progress-value{inline-size:100%!important;clip-path:inset(0 calc(100% - var(--tui-progress-percent)) 0 0 round var(--tui-radius-m));-webkit-transition:clip-path var(--tui-duration) linear;transition:clip-path var(--tui-duration) linear}\n"] }]
        }] });
class TuiProgressFixedGradientDirective {
    constructor() {
        this.nativeProgress = tuiInjectElement();
        this.nothing = tuiWithStyles(TuiProgressFixedGradientStyles);
    }
    get progressPercent() {
        const value = this.nativeProgress.value;
        const max = this.nativeProgress.max ?? 1;
        return Math.min((value / max) * 100, 100);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressFixedGradientDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiProgressFixedGradientDirective, isStandalone: true, selector: "progress[tuiProgressBar][tuiProgressFixedGradient]", host: { properties: { "style.--tui-progress-percent.%": "progressPercent" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressFixedGradientDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'progress[tuiProgressBar][tuiProgressFixedGradient]',
                    host: {
                        '[style.--tui-progress-percent.%]': 'progressPercent',
                    },
                }]
        }] });

const TUI_PROGRESS_DEFAULT_OPTIONS = {
    color: null,
    size: 'm',
};
const TUI_PROGRESS_OPTIONS = tuiCreateToken(TUI_PROGRESS_DEFAULT_OPTIONS);
function tuiProgressOptionsProvider(options) {
    return tuiProvideOptions(TUI_PROGRESS_OPTIONS, options, TUI_PROGRESS_DEFAULT_OPTIONS);
}

class TuiProgressBar {
    constructor() {
        this.options = inject(TUI_PROGRESS_OPTIONS);
        this.color = this.options.color;
        this.size = this.options.size;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressBar, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiProgressBar, isStandalone: true, selector: "progress[tuiProgressBar]", inputs: { color: "color", size: "size" }, host: { properties: { "style.--tui-progress-color": "color", "attr.data-size": "size" } }, ngImport: i0, template: '', isInline: true, styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-1);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:width var(--tui-duration) linear;transition:width var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-1) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-1) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressBar, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'progress[tuiProgressBar]', template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[style.--tui-progress-color]': 'color',
                        '[attr.data-size]': 'size',
                    }, styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-1);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:width var(--tui-duration) linear;transition:width var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-1) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-1) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"] }]
        }], propDecorators: { color: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class TuiProgressColorSegments {
    constructor() {
        this.colors$ = new BehaviorSubject([]);
        this.el = tuiInjectElement();
        this.color = toSignal(combineLatest([
            this.colors$,
            inject(ResizeObserverService, { self: true }).pipe(map(() => this.el.offsetWidth), distinctUntilChanged()),
        ]).pipe(map(([colors, width]) => {
            const segmentWidth = Math.ceil(width / colors.length);
            const colorsString = colors.reduce((acc, color, i) => `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`, '');
            return `linear-gradient(to right ${colorsString})`;
        }), tuiZonefull(), tuiWatch()));
    }
    set colors(colors) {
        this.colors$.next(colors);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressColorSegments, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiProgressColorSegments, isStandalone: true, selector: "progress[tuiProgressBar][tuiProgressColorSegments]", inputs: { colors: ["tuiProgressColorSegments", "colors"] }, host: { properties: { "style.--tui-progress-color": "color()" } }, providers: [ResizeObserverService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressColorSegments, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'progress[tuiProgressBar][tuiProgressColorSegments]',
                    providers: [ResizeObserverService],
                    host: { '[style.--tui-progress-color]': 'color()' },
                }]
        }], propDecorators: { colors: [{
                type: Input,
                args: ['tuiProgressColorSegments']
            }] } });

class TuiProgressCircle {
    constructor() {
        this.options = inject(TUI_PROGRESS_OPTIONS);
        this.animationDelay = toSignal(of(true).pipe(delay(0)));
        this.value = 0;
        this.max = 1;
        this.color = this.options.color;
        this.size = this.options.size;
    }
    get progressRatio() {
        const ratio = this.value / this.max;
        return Number.isFinite(ratio) ? ratio : 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressCircle, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiProgressCircle, isStandalone: true, selector: "tui-progress-circle", inputs: { value: "value", max: "max", color: "color", size: "size" }, host: { properties: { "attr.data-size": "size", "style.--tui-progress-color": "color", "style.--t-progress-ratio": "progressRatio" } }, ngImport: i0, template: "<progress\n    class=\"t-hidden-progress\"\n    [max]=\"max\"\n    [value]=\"value\"\n></progress>\n\n<svg\n    aria-hidden=\"true\"\n    height=\"100%\"\n    width=\"100%\"\n    class=\"t-svg\"\n>\n    <circle\n        cx=\"50%\"\n        cy=\"50%\"\n        class=\"t-track\"\n    />\n\n    <circle\n        cx=\"50%\"\n        cy=\"50%\"\n        class=\"t-progress\"\n        [class.t-progress_filled]=\"animationDelay()\"\n    />\n</svg>\n", styles: [":host{--t-track-stroke: var(--tui-thickness, .375em);--t-progress-stroke: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px))}:host[data-size=xxs]{--t-diameter: 2em}:host[data-size=xs]{--t-diameter: 2.5em}:host[data-size=s]{--t-diameter: 3.5em}:host[data-size=m]{--t-diameter: 4em}:host[data-size=l]{--t-diameter: 5em}:host[data-size=xl]{--t-diameter: 6em}:host[data-size=xxl]{--t-diameter: 8em}.t-track{fill:transparent;stroke:var(--tui-background-neutral-1);stroke-width:var(--t-track-stroke);r:calc((var(--t-diameter) - var(--t-track-stroke)) / 2)}.t-progress{fill:transparent;stroke:var(--tui-progress-color, currentColor);stroke-linecap:round;stroke-width:var(--t-progress-stroke);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));r:calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)}.t-progress_filled{transition:stroke-dashoffset var(--tui-duration) linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)))}.t-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg{overflow:unset}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressCircle, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-progress-circle', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[attr.data-size]': 'size',
                        '[style.--tui-progress-color]': 'color',
                        '[style.--t-progress-ratio]': 'progressRatio',
                    }, template: "<progress\n    class=\"t-hidden-progress\"\n    [max]=\"max\"\n    [value]=\"value\"\n></progress>\n\n<svg\n    aria-hidden=\"true\"\n    height=\"100%\"\n    width=\"100%\"\n    class=\"t-svg\"\n>\n    <circle\n        cx=\"50%\"\n        cy=\"50%\"\n        class=\"t-track\"\n    />\n\n    <circle\n        cx=\"50%\"\n        cy=\"50%\"\n        class=\"t-progress\"\n        [class.t-progress_filled]=\"animationDelay()\"\n    />\n</svg>\n", styles: [":host{--t-track-stroke: var(--tui-thickness, .375em);--t-progress-stroke: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px))}:host[data-size=xxs]{--t-diameter: 2em}:host[data-size=xs]{--t-diameter: 2.5em}:host[data-size=s]{--t-diameter: 3.5em}:host[data-size=m]{--t-diameter: 4em}:host[data-size=l]{--t-diameter: 5em}:host[data-size=xl]{--t-diameter: 6em}:host[data-size=xxl]{--t-diameter: 8em}.t-track{fill:transparent;stroke:var(--tui-background-neutral-1);stroke-width:var(--t-track-stroke);r:calc((var(--t-diameter) - var(--t-track-stroke)) / 2)}.t-progress{fill:transparent;stroke:var(--tui-progress-color, currentColor);stroke-linecap:round;stroke-width:var(--t-progress-stroke);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));r:calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)}.t-progress_filled{transition:stroke-dashoffset var(--tui-duration) linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)))}.t-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg{overflow:unset}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], max: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class TuiProgressLabel {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressLabel, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiProgressLabel, isStandalone: true, selector: "label[tuiProgressLabel]", ngImport: i0, template: "<ng-content select=\"progress\" />\n<ng-content select=\"tui-progress-circle\" />\n<span class=\"t-label\">\n    <ng-content />\n</span>\n", styles: [":host{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressLabel, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'label[tuiProgressLabel]', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content select=\"progress\" />\n<ng-content select=\"tui-progress-circle\" />\n<span class=\"t-label\">\n    <ng-content />\n</span>\n", styles: [":host{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}\n"] }]
        }] });

class TuiProgressSegmentedStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressSegmentedStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiProgressSegmentedStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-progress-segmented" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressSegmentedStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'tui-progress-segmented' }, styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"] }]
        }] });
class TuiProgressSegmented {
    constructor() {
        this.nothing = tuiWithStyles(TuiProgressSegmentedStyles);
        this.segments = 1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressSegmented, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiProgressSegmented, isStandalone: true, selector: "[tuiProgressBar][segments]", inputs: { segments: "segments" }, host: { properties: { "style.--t-segment-width": "1 / segments" }, classAttribute: "_segmented" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiProgressSegmented, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiProgressBar][segments]',
                    host: {
                        class: '_segmented',
                        '[style.--t-segment-width]': '1 / segments',
                    },
                }]
        }], propDecorators: { segments: [{
                type: Input
            }] } });

const TuiProgress = [
    TuiProgressBar,
    TuiProgressCircle,
    TuiProgressColorSegments,
    TuiProgressFixedGradientDirective,
    TuiProgressLabel,
    TuiProgressSegmented,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_PROGRESS_DEFAULT_OPTIONS, TUI_PROGRESS_OPTIONS, TuiProgress, TuiProgressBar, TuiProgressCircle, TuiProgressColorSegments, TuiProgressFixedGradientDirective, TuiProgressLabel, TuiProgressSegmented, tuiProgressOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-progress.mjs.map
