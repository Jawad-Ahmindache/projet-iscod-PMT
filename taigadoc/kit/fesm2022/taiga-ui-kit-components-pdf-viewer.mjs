import { AsyncPipe } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Injectable, Directive } from '@angular/core';
import { tuiSlideInTop, tuiFadeIn } from '@taiga-ui/core/animations';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TUI_ANIMATIONS_SPEED, TUI_CLOSE_WORD, TUI_COMMON_ICONS } from '@taiga-ui/core/tokens';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils/miscellaneous';
import { injectContext, PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { TuiPopoverDirective } from '@taiga-ui/cdk/directives/popover';
import { TuiPopoverService, tuiAsPopover } from '@taiga-ui/cdk/services';
import { TUI_DIALOGS } from '@taiga-ui/core/components/dialog';
import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';

class TuiPdfViewerComponent {
    constructor() {
        this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.closeWord$ = inject(TUI_CLOSE_WORD);
        this.icons = inject(TUI_COMMON_ICONS);
        this.context = injectContext();
    }
    onKeyDownEsc() {
        this.context.$implicit.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPdfViewerComponent, isStandalone: true, selector: "tui-pdf-viewer", host: { listeners: { "document:keydown.esc": "onKeyDownEsc()" }, properties: { "@tuiFadeIn": "options", "@tuiSlideInTop": "options" } }, ngImport: i0, template: "<header class=\"t-header\">\n    <h2\n        automation-id=\"tui-pdf-viewer__label\"\n        class=\"t-title\"\n    >\n        {{ context.label }}\n    </h2>\n    <div class=\"t-actions\">\n        <ng-container *polymorpheusOutlet=\"context.actions as text; context: context\">\n            {{ text }}\n        </ng-container>\n    </div>\n    <button\n        appearance=\"\"\n        size=\"s\"\n        tuiIconButton\n        type=\"button\"\n        class=\"t-close\"\n        [iconStart]=\"icons.close\"\n        [style.border-radius.%]=\"100\"\n        (click)=\"context.$implicit.complete()\"\n    >\n        {{ closeWord$ | async }}\n    </button>\n</header>\n<section class=\"t-content\">\n    <iframe\n        *polymorpheusOutlet=\"context.content as content; context: context\"\n        title=\"pdf\"\n        class=\"t-iframe\"\n        [src]=\"content\"\n    ></iframe>\n</section>\n", styles: [":host{display:block;inline-size:100%;block-size:100%;box-sizing:border-box;color:#fff;background:#333639}.t-header{display:flex;align-items:center;block-size:4rem;padding:0 1rem 0 1.5625rem;box-shadow:inset 0 -1px #535659}.t-title{margin:0;font:var(--tui-font-text-m);white-space:nowrap;text-overflow:ellipsis;padding-right:.3125rem;overflow:hidden}.t-actions{display:flex;margin-left:auto}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:.75rem;color:#fff;background:#ffffff52}.t-close:hover{background:#fff6}.t-content{block-size:calc(100% - 4rem);overflow:hidden}.t-iframe{inline-size:100%;block-size:100%}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }], animations: [tuiSlideInTop, tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-pdf-viewer', imports: [AsyncPipe, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideInTop, tuiFadeIn], host: {
                        '[@tuiFadeIn]': 'options',
                        '[@tuiSlideInTop]': 'options',
                        '(document:keydown.esc)': 'onKeyDownEsc()',
                    }, template: "<header class=\"t-header\">\n    <h2\n        automation-id=\"tui-pdf-viewer__label\"\n        class=\"t-title\"\n    >\n        {{ context.label }}\n    </h2>\n    <div class=\"t-actions\">\n        <ng-container *polymorpheusOutlet=\"context.actions as text; context: context\">\n            {{ text }}\n        </ng-container>\n    </div>\n    <button\n        appearance=\"\"\n        size=\"s\"\n        tuiIconButton\n        type=\"button\"\n        class=\"t-close\"\n        [iconStart]=\"icons.close\"\n        [style.border-radius.%]=\"100\"\n        (click)=\"context.$implicit.complete()\"\n    >\n        {{ closeWord$ | async }}\n    </button>\n</header>\n<section class=\"t-content\">\n    <iframe\n        *polymorpheusOutlet=\"context.content as content; context: context\"\n        title=\"pdf\"\n        class=\"t-iframe\"\n        [src]=\"content\"\n    ></iframe>\n</section>\n", styles: [":host{display:block;inline-size:100%;block-size:100%;box-sizing:border-box;color:#fff;background:#333639}.t-header{display:flex;align-items:center;block-size:4rem;padding:0 1rem 0 1.5625rem;box-shadow:inset 0 -1px #535659}.t-title{margin:0;font:var(--tui-font-text-m);white-space:nowrap;text-overflow:ellipsis;padding-right:.3125rem;overflow:hidden}.t-actions{display:flex;margin-left:auto}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:.75rem;color:#fff;background:#ffffff52}.t-close:hover{background:#fff6}.t-content{block-size:calc(100% - 4rem);overflow:hidden}.t-iframe{inline-size:100%;block-size:100%}\n"] }]
        }] });

const TUI_PDF_VIEWER_DEFAULT_OPTIONS = {
    label: '',
    actions: '',
    data: undefined,
};
/**
 * Default parameters for PdfViewer component
 */
const TUI_PDF_VIEWER_OPTIONS = tuiCreateToken(TUI_PDF_VIEWER_DEFAULT_OPTIONS);
function tuiPdfViewerOptionsProvider(options) {
    return tuiProvideOptions(TUI_PDF_VIEWER_OPTIONS, options, TUI_PDF_VIEWER_DEFAULT_OPTIONS);
}

class TuiPdfViewerService extends TuiPopoverService {
    open(content, options = {}) {
        return super.open(content, options);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerService, providedIn: 'root', useFactory: () => new TuiPdfViewerService(TUI_DIALOGS, TuiPdfViewerComponent, inject(TUI_PDF_VIEWER_OPTIONS)) }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiPdfViewerService(TUI_DIALOGS, TuiPdfViewerComponent, inject(TUI_PDF_VIEWER_OPTIONS)),
                }]
        }] });

class TuiPdfViewerDirective extends TuiPopoverDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPdfViewerDirective, isStandalone: true, selector: "ng-template[tuiPdfViewer]", inputs: { options: ["tuiPdfViewerOptions", "options"], open: ["tuiPdfViewer", "open"] }, outputs: { openChange: "tuiPdfViewerChange" }, providers: [tuiAsPopover(TuiPdfViewerService)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPdfViewerDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiPdfViewer]',
                    inputs: ['options: tuiPdfViewerOptions', 'open: tuiPdfViewer'],
                    outputs: ['openChange: tuiPdfViewerChange'],
                    providers: [tuiAsPopover(TuiPdfViewerService)],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_PDF_VIEWER_DEFAULT_OPTIONS, TUI_PDF_VIEWER_OPTIONS, TuiPdfViewerComponent, TuiPdfViewerDirective, TuiPdfViewerService, tuiPdfViewerOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-pdf-viewer.mjs.map
