import * as i0 from '@angular/core';
import { inject, Component, ViewEncapsulation, ChangeDetectionStrategy, Injectable, Directive } from '@angular/core';
import { tuiSlideInTop, tuiFadeIn } from '@taiga-ui/core/animations';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { injectContext, PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { TuiPopoverDirective } from '@taiga-ui/cdk/directives/popover';
import { TuiPopoverService, tuiAsPopover } from '@taiga-ui/cdk/services';
import { TUI_DIALOGS } from '@taiga-ui/core/components/dialog';

class TuiPreviewDialog {
    constructor() {
        this.context = injectContext();
        this.animation = {
            value: '',
            params: {
                start: '100vh',
                duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
            },
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewDialog, isStandalone: true, selector: "tui-preview-dialog", host: { listeners: { "document:keydown.esc": "context.$implicit.complete()" }, properties: { "@tuiSlideInTop": "animation", "@tuiFadeIn": "animation" } }, ngImport: i0, template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `, isInline: true, styles: ["tui-preview-dialog{inline-size:100%;block-size:100%}[tuiAppearance][data-appearance=preview-action]{background:#686868f5;color:#fff}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action][data-state=hover]{background:#9f9f9fdb}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=hover]{background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][data-state=active]{background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active]:hover{background:#9f9f9fbf}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], animations: [tuiSlideInTop, tuiFadeIn], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialog, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-preview-dialog', imports: [PolymorpheusOutlet, PolymorpheusTemplate], template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideInTop, tuiFadeIn], host: {
                        '(document:keydown.esc)': 'context.$implicit.complete()',
                        '[@tuiSlideInTop]': 'animation',
                        '[@tuiFadeIn]': 'animation',
                    }, styles: ["tui-preview-dialog{inline-size:100%;block-size:100%}[tuiAppearance][data-appearance=preview-action]{background:#686868f5;color:#fff}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action][data-state=hover]{background:#9f9f9fdb}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=preview-action][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=hover]{background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][data-state=active]{background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active]:hover{background:#9f9f9fbf}\n"] }]
        }] });

class TuiPreviewDialogService extends TuiPopoverService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogService, providedIn: 'root', useFactory: () => new TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialog) }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialog),
                }]
        }] });

class TuiPreviewDialogDirective extends TuiPopoverDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPreviewDialogDirective, isStandalone: true, selector: "ng-template[tuiPreviewDialog]", inputs: { open: ["tuiPreviewDialog", "open"] }, outputs: { openChange: "tuiPreviewDialogChange" }, providers: [tuiAsPopover(TuiPreviewDialogService)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPreviewDialogDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiPreviewDialog]',
                    inputs: ['open: tuiPreviewDialog'],
                    outputs: ['openChange: tuiPreviewDialogChange'],
                    providers: [tuiAsPopover(TuiPreviewDialogService)],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiPreviewDialog, TuiPreviewDialogDirective, TuiPreviewDialogService };
//# sourceMappingURL=taiga-ui-kit-components-preview-preview-dialog.mjs.map
