import * as i0 from '@angular/core';
import { Injectable, inject, TemplateRef, Directive, Input } from '@angular/core';
import { TuiPortalService } from '@taiga-ui/cdk/classes';

class TuiPopupService extends TuiPortalService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPopupService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPopupService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPopupService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class TuiPopup {
    constructor() {
        this.template = inject(TemplateRef);
        this.service = inject(TuiPopupService);
    }
    set tuiPopup(show) {
        this.viewRef?.destroy();
        if (show) {
            this.viewRef = this.service.addTemplate(this.template);
        }
    }
    ngOnDestroy() {
        this.viewRef?.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPopup, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiPopup, isStandalone: true, selector: "ng-template[tuiPopup]", inputs: { tuiPopup: "tuiPopup" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPopup, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiPopup]',
                }]
        }], propDecorators: { tuiPopup: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiPopup, TuiPopupService };
//# sourceMappingURL=taiga-ui-core-directives-popup.mjs.map
