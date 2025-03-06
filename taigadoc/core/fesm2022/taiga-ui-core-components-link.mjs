import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, Directive, Input } from '@angular/core';
import { tuiCreateToken, tuiProvideOptions, tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i1 from '@taiga-ui/core/directives/appearance';
import { tuiAppearanceOptionsProvider, TuiWithAppearance } from '@taiga-ui/core/directives/appearance';
import * as i2 from '@taiga-ui/core/directives/icons';
import { TuiWithIcons } from '@taiga-ui/core/directives/icons';

const TUI_LINK_DEFAULT_OPTIONS = {
    appearance: 'action',
    pseudo: false,
};
const TUI_LINK_OPTIONS = tuiCreateToken(TUI_LINK_DEFAULT_OPTIONS);
function tuiLinkOptionsProvider(options) {
    return tuiProvideOptions(TUI_LINK_OPTIONS, options, TUI_LINK_DEFAULT_OPTIONS);
}

class TuiLinkStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLinkStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiLinkStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-link" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:\"\\2060\";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible),[tuiLink][tuiWrapper]._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLinkStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-link',
                    }, styles: ["[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:\"\\2060\";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible),[tuiLink][tuiWrapper]._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}\n"] }]
        }] });
class TuiLink {
    constructor() {
        this.nothing = tuiWithStyles(TuiLinkStyles);
        this.pseudo = inject(TUI_LINK_OPTIONS).pseudo;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLink, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiLink, isStandalone: true, selector: "a[tuiLink], button[tuiLink]", inputs: { pseudo: "pseudo" }, host: { attributes: { "tuiLink": "" }, properties: { "style.text-decoration-line": "pseudo ? \"underline\" : null" } }, providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)], hostDirectives: [{ directive: i1.TuiWithAppearance }, { directive: i2.TuiWithIcons }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiLink, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'a[tuiLink], button[tuiLink]',
                    providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
                    hostDirectives: [TuiWithAppearance, TuiWithIcons],
                    host: {
                        tuiLink: '',
                        '[style.text-decoration-line]': 'pseudo ? "underline" : null',
                    },
                }]
        }], propDecorators: { pseudo: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_LINK_DEFAULT_OPTIONS, TUI_LINK_OPTIONS, TuiLink, tuiLinkOptionsProvider };
//# sourceMappingURL=taiga-ui-core-components-link.mjs.map
