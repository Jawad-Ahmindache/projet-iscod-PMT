import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, Directive } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiTextfieldComponent } from '@taiga-ui/core/components/textfield';
import * as i1 from '@taiga-ui/core/directives/appearance';
import { tuiAppearanceState, tuiAppearanceOptionsProvider, TuiWithAppearance } from '@taiga-ui/core/directives/appearance';
import * as i2 from '@taiga-ui/core/directives/hint';
import { TuiHintDescribe, TuiHintHover, TUI_HINT_OPTIONS, TuiHintDirective } from '@taiga-ui/core/directives/hint';
import { TUI_ICON_START } from '@taiga-ui/core/tokens';
import { map } from 'rxjs';
import { tuiCreateOptions } from '@taiga-ui/cdk/utils/di';

const [TUI_TOOLTIP_OPTIONS, tuiTooltipOptionsProvider] = tuiCreateOptions({
    icon: '',
    appearance: 'icon',
});

class TuiTooltipStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTooltipStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTooltipStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-tooltip" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip]{border-width:.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover) and (pointer: fine){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTooltipStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-tooltip',
                    }, styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip]{border-width:.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover) and (pointer: fine){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"] }]
        }] });
class TuiTooltip {
    constructor() {
        this.textfield = inject(TuiTextfieldComponent, { optional: true });
        this.isMobile = inject(TUI_IS_MOBILE);
        this.describe = inject(TuiHintDescribe);
        this.driver = inject(TuiHintHover);
        this.nothing = tuiWithStyles(TuiTooltipStyles);
        this.state = tuiAppearanceState(toSignal(inject(TuiHintHover).pipe(map((hover) => (hover ? 'hover' : null)), tuiWatch()), { initialValue: null }));
    }
    ngDoCheck() {
        if (this.textfield?.id) {
            this.describe.tuiHintDescribe = this.textfield.id;
        }
    }
    onClick(event) {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            this.driver.toggle();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTooltip, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTooltip, isStandalone: true, selector: "tui-icon[tuiTooltip]", host: { attributes: { "tuiTooltip": "" }, listeners: { "click.prevent": "0", "mousedown": "onClick($event)" } }, providers: [
            tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS),
            {
                provide: TUI_ICON_START,
                useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon,
            },
        ], hostDirectives: [{ directive: i1.TuiWithAppearance }, { directive: i2.TuiHintDescribe, inputs: ["tuiHintDescribe", "tuiTooltipDescribe"] }, { directive: i2.TuiHintDirective, inputs: ["tuiHint", "tuiTooltip", "tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTooltip, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-icon[tuiTooltip]',
                    providers: [
                        tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS),
                        {
                            provide: TUI_ICON_START,
                            useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon,
                        },
                    ],
                    hostDirectives: [
                        TuiWithAppearance,
                        {
                            directive: TuiHintDescribe,
                            inputs: ['tuiHintDescribe: tuiTooltipDescribe'],
                        },
                        {
                            directive: TuiHintDirective,
                            inputs: ['tuiHint: tuiTooltip', 'tuiHintAppearance', 'tuiHintContext'],
                        },
                    ],
                    host: {
                        tuiTooltip: '',
                        '(click.prevent)': '0',
                        '(mousedown)': 'onClick($event)',
                    },
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_TOOLTIP_OPTIONS, TuiTooltip, tuiTooltipOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-directives-tooltip.mjs.map
