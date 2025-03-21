import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, Directive, ContentChild, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i1 from '@taiga-ui/cdk/directives/native-validator';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiCreateToken, tuiProvideOptions, tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i2 from '@taiga-ui/core/directives/appearance';
import { tuiAppearanceOptionsProvider, TuiWithAppearance } from '@taiga-ui/core/directives/appearance';
import * as i3 from '@taiga-ui/core/directives/icons';
import { TuiWithIcons } from '@taiga-ui/core/directives/icons';
import { tuiAvatarOptionsProvider } from '@taiga-ui/kit/components/avatar';

const TUI_BLOCK_DEFAULT_OPTIONS = {
    appearance: 'outline-grayscale',
    size: 'l',
};
const TUI_BLOCK_OPTIONS = tuiCreateToken(TUI_BLOCK_DEFAULT_OPTIONS);
function tuiBlockOptionsProvider(options) {
    return tuiProvideOptions(TUI_BLOCK_OPTIONS, options, TUI_BLOCK_DEFAULT_OPTIONS);
}

class TuiBlockStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBlockStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiBlockStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-block" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiBlock]{--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-font-text-m);padding:var(--tui-padding-l)}[tuiBlock][data-size=s]{gap:.5rem;font:var(--tui-font-text-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiBlock][data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock][data-size=m]{gap:.625rem;font:var(--tui-font-text-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock][data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]._disabled :focus{visibility:hidden}[tuiBlock][data-appearance=\"\"]{justify-content:center}[tuiBlock] input[tuiBlock]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;min-block-size:0;pointer-events:none;border-radius:inherit}[tuiBlock] tui-avatar{margin:-.25rem}[tuiBlock] [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock] [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock] [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBlockStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-block',
                    }, styles: ["[tuiBlock]{--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-font-text-m);padding:var(--tui-padding-l)}[tuiBlock][data-size=s]{gap:.5rem;font:var(--tui-font-text-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiBlock][data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock][data-size=m]{gap:.625rem;font:var(--tui-font-text-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock][data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]._disabled :focus{visibility:hidden}[tuiBlock][data-appearance=\"\"]{justify-content:center}[tuiBlock] input[tuiBlock]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;min-block-size:0;pointer-events:none;border-radius:inherit}[tuiBlock] tui-avatar{margin:-.25rem}[tuiBlock] [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock] [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock] [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n"] }]
        }] });
class TuiBlock {
    constructor() {
        this.nothing = tuiWithStyles(TuiBlockStyles);
        this.size = inject(TUI_BLOCK_OPTIONS).size;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBlock, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiBlock, isStandalone: true, selector: "label[tuiBlock],input[tuiBlock]", inputs: { size: ["tuiBlock", "size"] }, host: { attributes: { "tuiBlock": "" }, properties: { "attr.data-size": "size || \"l\"", "class._disabled": "!!this.control?.disabled" } }, providers: [
            tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS),
            tuiAvatarOptionsProvider({ size: 's' }),
        ], queries: [{ propertyName: "control", first: true, predicate: NgControl, descendants: true }], hostDirectives: [{ directive: i1.TuiNativeValidator }, { directive: i2.TuiWithAppearance }, { directive: i3.TuiWithIcons }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBlock, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'label[tuiBlock],input[tuiBlock]',
                    providers: [
                        tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS),
                        tuiAvatarOptionsProvider({ size: 's' }),
                    ],
                    hostDirectives: [TuiNativeValidator, TuiWithAppearance, TuiWithIcons],
                    host: {
                        tuiBlock: '',
                        '[attr.data-size]': 'size || "l"',
                        '[class._disabled]': '!!this.control?.disabled',
                    },
                }]
        }], propDecorators: { control: [{
                type: ContentChild,
                args: [NgControl]
            }], size: [{
                type: Input,
                args: ['tuiBlock']
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_BLOCK_DEFAULT_OPTIONS, TUI_BLOCK_OPTIONS, TuiBlock, tuiBlockOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-block.mjs.map
