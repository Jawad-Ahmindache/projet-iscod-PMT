import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { TuiAutoFocus } from '@taiga-ui/cdk/directives/auto-focus';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TUI_CONFIRM_WORDS } from '@taiga-ui/kit/tokens';
import { injectContext, PolymorpheusOutlet, PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { TuiDialogService } from '@taiga-ui/core/components/dialog';
import { defer, of } from 'rxjs';

class TuiConfirm {
    constructor() {
        this.isMobile = inject(TUI_IS_MOBILE);
        this.words$ = inject(TUI_CONFIRM_WORDS);
        this.context = injectContext();
    }
    get appearance() {
        return this.isMobile ? 'secondary' : 'flat';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConfirm, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiConfirm, isStandalone: true, selector: "tui-confirm", ngImport: i0, template: "<div\n    *polymorpheusOutlet=\"context.data?.content as text\"\n    class=\"t-content\"\n    [innerHTML]=\"text\"\n></div>\n<div\n    *ngIf=\"words$ | async as words\"\n    class=\"t-buttons\"\n>\n    <button\n        size=\"m\"\n        tuiButton\n        type=\"button\"\n        class=\"t-button\"\n        [appearance]=\"appearance\"\n        (click)=\"context.completeWith(false)\"\n    >\n        {{ context.data?.no || words.no }}\n    </button>\n    <button\n        size=\"m\"\n        tuiAutoFocus\n        tuiButton\n        type=\"button\"\n        class=\"t-button\"\n        [appearance]=\"context.data?.appearance || 'primary'\"\n        (click)=\"context.completeWith(true)\"\n    >\n        {{ context.data?.yes || words.yes }}\n    </button>\n</div>\n", styles: [".t-content:not(:empty){margin-bottom:.875rem}.t-buttons{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;margin:.375rem -.375rem -.375rem}.t-button{margin:.375rem;white-space:nowrap}:host-context(tui-root._mobile) .t-button{flex:1;overflow:visible}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiAutoFocus, selector: "[tuiAutoFocus]", inputs: ["tuiAutoFocus"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConfirm, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-confirm', imports: [CommonModule, PolymorpheusOutlet, TuiAutoFocus, TuiButton], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n    *polymorpheusOutlet=\"context.data?.content as text\"\n    class=\"t-content\"\n    [innerHTML]=\"text\"\n></div>\n<div\n    *ngIf=\"words$ | async as words\"\n    class=\"t-buttons\"\n>\n    <button\n        size=\"m\"\n        tuiButton\n        type=\"button\"\n        class=\"t-button\"\n        [appearance]=\"appearance\"\n        (click)=\"context.completeWith(false)\"\n    >\n        {{ context.data?.no || words.no }}\n    </button>\n    <button\n        size=\"m\"\n        tuiAutoFocus\n        tuiButton\n        type=\"button\"\n        class=\"t-button\"\n        [appearance]=\"context.data?.appearance || 'primary'\"\n        (click)=\"context.completeWith(true)\"\n    >\n        {{ context.data?.yes || words.yes }}\n    </button>\n</div>\n", styles: [".t-content:not(:empty){margin-bottom:.875rem}.t-buttons{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;margin:.375rem -.375rem -.375rem}.t-button{margin:.375rem;white-space:nowrap}:host-context(tui-root._mobile) .t-button{flex:1;overflow:visible}\n"] }]
        }] });
const TUI_CONFIRM = new PolymorpheusComponent(TuiConfirm);

class TuiConfirmService {
    constructor() {
        this.dialogs = inject(TuiDialogService);
        this.dirty = false;
    }
    markAsDirty() {
        this.dirty = true;
    }
    markAsPristine() {
        this.dirty = false;
    }
    withConfirm(options) {
        return defer(() => this.dirty
            ? this.dialogs.open(TUI_CONFIRM, {
                size: 's',
                ...options,
            })
            : of(true));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConfirmService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConfirmService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConfirmService, decorators: [{
            type: Injectable
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_CONFIRM, TuiConfirm, TuiConfirmService };
//# sourceMappingURL=taiga-ui-kit-components-confirm.mjs.map
