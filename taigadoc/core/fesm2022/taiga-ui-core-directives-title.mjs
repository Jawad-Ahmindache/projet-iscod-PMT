import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Directive, Input } from '@angular/core';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';

class TuiTitleStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTitleStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTitleStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-title" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTitleStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-title',
                    }, styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"] }]
        }] });
class TuiTitle {
    constructor() {
        this.nothing = tuiWithStyles(TuiTitleStyles);
        this.size = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTitle, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTitle, isStandalone: true, selector: "[tuiTitle]", inputs: { size: ["tuiTitle", "size"] }, host: { attributes: { "tuiTitle": "" }, properties: { "attr.data-size": "size || null" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTitle, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTitle]',
                    host: {
                        tuiTitle: '',
                        '[attr.data-size]': 'size || null',
                    },
                }]
        }], propDecorators: { size: [{
                type: Input,
                args: ['tuiTitle']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiTitle };
//# sourceMappingURL=taiga-ui-core-directives-title.mjs.map
