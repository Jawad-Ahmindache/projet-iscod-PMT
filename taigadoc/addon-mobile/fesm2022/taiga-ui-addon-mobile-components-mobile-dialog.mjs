import { NgForOf, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { TuiRipple } from '@taiga-ui/addon-mobile/directives';
import { TUI_IS_IOS } from '@taiga-ui/cdk/tokens';
import { TuiButton } from '@taiga-ui/core/components/button';
import { injectContext, PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiPopoverService } from '@taiga-ui/cdk/services';
import { TUI_DIALOGS } from '@taiga-ui/core/components/dialog';

class TuiMobileDialog {
    constructor() {
        this.isIOS = inject(TUI_IS_IOS);
        this.context = injectContext();
    }
    onAction(index) {
        this.context.completeWith(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiMobileDialog, isStandalone: true, selector: "tui-mobile-dialog", host: { properties: { "class._ios": "isIOS" } }, ngImport: i0, template: "<h2\n    *ngIf=\"!!context.label\"\n    automation-id=\"tui-mobile-dialog__label\"\n    class=\"t-heading\"\n    [id]=\"context.id\"\n>\n    {{ context.label }}\n</h2>\n<div class=\"t-content\">\n    <ng-container *polymorpheusOutlet=\"context.content as text; context: context\">\n        {{ text }}\n    </ng-container>\n</div>\n<button\n    *ngFor=\"let action of context.actions; let index = index\"\n    appearance=\"flat\"\n    size=\"s\"\n    tuiButton\n    tuiRipple\n    type=\"button\"\n    class=\"t-button\"\n    [class.t-button_column]=\"context.actions.length > 2\"\n    (click)=\"onAction(index)\"\n>\n    {{ action }}\n</button>\n", styles: [":host{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;background:var(--tui-background-base);word-break:break-word;overflow:hidden;padding:1.25rem .75rem 0 1.5rem}:host:not(._ios){max-inline-size:17.5rem;border-radius:.125rem;text-align:start;box-shadow:0 1.5rem 1.5rem #00000052}:host._ios{max-inline-size:16.875rem;padding:1.5rem 0 0;border-radius:.75rem;text-align:center}.t-heading{font-size:1rem}:host._ios .t-heading{font-weight:700;font-size:1.125rem}.t-content{margin-top:.75rem;font-size:.875rem;line-height:1.25rem;padding-right:.75rem}:host._ios .t-content{margin-top:.25rem;padding-left:1.5rem;padding-right:1.5rem}.t-button{border-radius:0}:host._ios .t-button{border-block-start:#b8b8b8 1px solid;block-size:2.625rem;inline-size:100%}:host._ios .t-button:first-of-type{margin-top:1.125rem}:host:not(._ios) .t-button{margin:.5rem 0 .5rem .5rem;float:inline-end}:host:not(._ios) .t-button_column{display:block;float:none;margin-left:auto}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "directive", type: TuiRipple, selector: "[tuiRipple]", inputs: ["tuiRipple"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileDialog, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-mobile-dialog', imports: [
                        NgForOf,
                        NgIf,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiButton,
                        TuiRipple,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._ios]': 'isIOS',
                    }, template: "<h2\n    *ngIf=\"!!context.label\"\n    automation-id=\"tui-mobile-dialog__label\"\n    class=\"t-heading\"\n    [id]=\"context.id\"\n>\n    {{ context.label }}\n</h2>\n<div class=\"t-content\">\n    <ng-container *polymorpheusOutlet=\"context.content as text; context: context\">\n        {{ text }}\n    </ng-container>\n</div>\n<button\n    *ngFor=\"let action of context.actions; let index = index\"\n    appearance=\"flat\"\n    size=\"s\"\n    tuiButton\n    tuiRipple\n    type=\"button\"\n    class=\"t-button\"\n    [class.t-button_column]=\"context.actions.length > 2\"\n    (click)=\"onAction(index)\"\n>\n    {{ action }}\n</button>\n", styles: [":host{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:block;background:var(--tui-background-base);word-break:break-word;overflow:hidden;padding:1.25rem .75rem 0 1.5rem}:host:not(._ios){max-inline-size:17.5rem;border-radius:.125rem;text-align:start;box-shadow:0 1.5rem 1.5rem #00000052}:host._ios{max-inline-size:16.875rem;padding:1.5rem 0 0;border-radius:.75rem;text-align:center}.t-heading{font-size:1rem}:host._ios .t-heading{font-weight:700;font-size:1.125rem}.t-content{margin-top:.75rem;font-size:.875rem;line-height:1.25rem;padding-right:.75rem}:host._ios .t-content{margin-top:.25rem;padding-left:1.5rem;padding-right:1.5rem}.t-button{border-radius:0}:host._ios .t-button{border-block-start:#b8b8b8 1px solid;block-size:2.625rem;inline-size:100%}:host._ios .t-button:first-of-type{margin-top:1.125rem}:host:not(._ios) .t-button{margin:.5rem 0 .5rem .5rem;float:inline-end}:host:not(._ios) .t-button_column{display:block;float:none;margin-left:auto}\n"] }]
        }] });

const TUI_MOBILE_DIALOG_DEFAULT_OPTIONS = {
    label: '',
    actions: ['OK'],
    data: undefined,
};
/**
 * Default parameters for mobile dialog component
 */
const TUI_MOBILE_DIALOG_OPTIONS = tuiCreateToken(TUI_MOBILE_DIALOG_DEFAULT_OPTIONS);
function tuiMobileDialogOptionsProvider(options) {
    return tuiProvideOptions(TUI_MOBILE_DIALOG_OPTIONS, options, TUI_MOBILE_DIALOG_DEFAULT_OPTIONS);
}

class TuiMobileDialogService extends TuiPopoverService {
    open(content, options = {}) {
        return super.open(content, options);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileDialogService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileDialogService, providedIn: 'root', useFactory: () => new TuiMobileDialogService(TUI_DIALOGS, TuiMobileDialog, inject(TUI_MOBILE_DIALOG_OPTIONS)) }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiMobileDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiMobileDialogService(TUI_DIALOGS, TuiMobileDialog, inject(TUI_MOBILE_DIALOG_OPTIONS)),
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_MOBILE_DIALOG_DEFAULT_OPTIONS, TUI_MOBILE_DIALOG_OPTIONS, TuiMobileDialog, TuiMobileDialogService, tuiMobileDialogOptionsProvider };
//# sourceMappingURL=taiga-ui-addon-mobile-components-mobile-dialog.mjs.map
