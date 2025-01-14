import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, Directive, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MutationObserverService, WA_MUTATION_OBSERVER_INIT } from '@ng-web-apis/mutation-observer';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { merge, fromEvent } from 'rxjs';

const BUFFER = 1; // buffer for rounding issues
class TuiFadeStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFadeStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiFadeStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-fade-styles" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%));mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));-webkit-mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset));mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom;mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFadeStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-fade-styles',
                    }, styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%));mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));-webkit-mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset));mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom;mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"] }]
        }] });
class TuiFade {
    constructor() {
        // TODO: Remove when lh CSS units are supported: https://caniuse.com/mdn-css_types_length_lh
        this.lineHeight = null;
        this.size = '1.5em';
        this.offset = '0em';
        this.orientation = 'horizontal';
        const el = tuiInjectElement();
        tuiWithStyles(TuiFadeStyles);
        merge(inject(ResizeObserverService, { self: true }), inject(MutationObserverService, { self: true }), fromEvent(el, 'scroll'))
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => {
            el.classList.toggle('_start', !!el.scrollLeft || !!el.scrollTop);
            el.classList.toggle('_end', this.isEnd(el));
        });
    }
    isEnd(el) {
        if (this.orientation === 'vertical') {
            return Math.round(el.scrollTop) < el.scrollHeight - el.clientHeight - BUFFER;
        }
        return (Math.round(el.scrollLeft) < el.scrollWidth - el.clientWidth - BUFFER ||
            // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
            el.scrollHeight > el.clientHeight + 4 * BUFFER);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFade, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiFade, isStandalone: true, selector: "[tuiFade]", inputs: { lineHeight: ["tuiFadeHeight", "lineHeight"], size: ["tuiFadeSize", "size"], offset: ["tuiFadeOffset", "offset"], orientation: ["tuiFade", "orientation"] }, host: { properties: { "style.line-height": "lineHeight", "style.--line-height": "lineHeight", "style.--fade-size": "size", "style.--fade-offset": "offset", "attr.data-orientation": "orientation" } }, providers: [
            ResizeObserverService,
            MutationObserverService,
            {
                provide: WA_MUTATION_OBSERVER_INIT,
                useValue: { characterData: true, subtree: true },
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFade, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiFade]',
                    providers: [
                        ResizeObserverService,
                        MutationObserverService,
                        {
                            provide: WA_MUTATION_OBSERVER_INIT,
                            useValue: { characterData: true, subtree: true },
                        },
                    ],
                    host: {
                        '[style.line-height]': 'lineHeight',
                        '[style.--line-height]': 'lineHeight',
                        '[style.--fade-size]': 'size',
                        '[style.--fade-offset]': 'offset',
                        '[attr.data-orientation]': 'orientation',
                    },
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { lineHeight: [{
                type: Input,
                args: ['tuiFadeHeight']
            }], size: [{
                type: Input,
                args: ['tuiFadeSize']
            }], offset: [{
                type: Input,
                args: ['tuiFadeOffset']
            }], orientation: [{
                type: Input,
                args: ['tuiFade']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiFade };
//# sourceMappingURL=taiga-ui-kit-directives-fade.mjs.map
