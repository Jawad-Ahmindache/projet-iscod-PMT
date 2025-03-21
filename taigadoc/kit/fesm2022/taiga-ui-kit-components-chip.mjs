import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, Directive, Input } from '@angular/core';
import { tuiCreateToken, tuiProvideOptions, tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiButtonOptionsProvider } from '@taiga-ui/core/components/button';
import * as i1 from '@taiga-ui/core/directives/appearance';
import { tuiAppearanceOptionsProvider, TuiWithAppearance } from '@taiga-ui/core/directives/appearance';
import * as i2 from '@taiga-ui/core/directives/icons';
import { TuiWithIcons } from '@taiga-ui/core/directives/icons';
import { tuiAvatarOptionsProvider } from '@taiga-ui/kit/components/avatar';
import { tuiCheckboxOptionsProvider } from '@taiga-ui/kit/components/checkbox';
import { tuiSwitchOptionsProvider } from '@taiga-ui/kit/components/switch';

const TUI_CHIP_DEFAULT_OPTIONS = {
    appearance: 'neutral',
    size: 's',
};
const TUI_CHIP_OPTIONS = tuiCreateToken(TUI_CHIP_DEFAULT_OPTIONS);
function tuiChipOptionsProvider(options) {
    return tuiProvideOptions(TUI_CHIP_OPTIONS, options, TUI_CHIP_DEFAULT_OPTIONS);
}

class TuiChipStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChipStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiChipStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-chip" }, ngImport: i0, template: '', isInline: true, styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:-webkit-any(a,button,select,textarea,input,label),[tuiChip]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip:-moz-any(a,button,select,textarea,input,label),[tuiChip]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: var(--t-0, 0rem);--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:-1;margin:0}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChipStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-chip',
                    }, styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:-webkit-any(a,button,select,textarea,input,label),[tuiChip]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip:-moz-any(a,button,select,textarea,input,label),[tuiChip]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: var(--t-0, 0rem);--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:-1;margin:0}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}\n"] }]
        }] });
class TuiChip {
    constructor() {
        this.options = inject(TUI_CHIP_OPTIONS);
        this.nothing = tuiWithStyles(TuiChipStyles);
        this.size = this.options.size;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChip, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiChip, isStandalone: true, selector: "tui-chip,[tuiChip]", inputs: { size: "size" }, host: { properties: { "attr.data-size": "size" } }, providers: [
            tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS),
            tuiSwitchOptionsProvider({ size: 's' }),
            tuiCheckboxOptionsProvider({ size: 's' }),
            tuiAvatarOptionsProvider({ size: 'xs' }),
            tuiButtonOptionsProvider({
                size: 'xs',
                appearance: 'icon',
            }),
        ], hostDirectives: [{ directive: i1.TuiWithAppearance }, { directive: i2.TuiWithIcons }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiChip, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-chip,[tuiChip]',
                    providers: [
                        tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS),
                        tuiSwitchOptionsProvider({ size: 's' }),
                        tuiCheckboxOptionsProvider({ size: 's' }),
                        tuiAvatarOptionsProvider({ size: 'xs' }),
                        tuiButtonOptionsProvider({
                            size: 'xs',
                            appearance: 'icon',
                        }),
                    ],
                    hostDirectives: [TuiWithAppearance, TuiWithIcons],
                    host: { '[attr.data-size]': 'size' },
                }]
        }], propDecorators: { size: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_CHIP_DEFAULT_OPTIONS, TUI_CHIP_OPTIONS, TuiChip, tuiChipOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-chip.mjs.map
