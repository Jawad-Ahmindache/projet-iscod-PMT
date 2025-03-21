import * as i0 from '@angular/core';
import { inject, signal, computed, Component, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tuiFallbackValueProvider } from '@taiga-ui/cdk/tokens';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiCreateToken, tuiProvideOptions, tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import * as i1 from '@taiga-ui/core/components/textfield';
import { TUI_TEXTFIELD_OPTIONS, TuiTextfieldContent, TuiWithTextfield } from '@taiga-ui/core/components/textfield';
import { TuiTooltip } from '@taiga-ui/kit/directives';
import { TUI_PASSWORD_TEXTS } from '@taiga-ui/kit/tokens';

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
const TUI_INPUT_PASSWORD_DEFAULT_OPTIONS = {
    icons: {
        hide: '@tui.eye-off',
        show: '@tui.eye',
    },
};
/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
const TUI_INPUT_PASSWORD_OPTIONS = tuiCreateToken(TUI_INPUT_PASSWORD_DEFAULT_OPTIONS);
/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
function tuiInputPasswordOptionsProvider(options) {
    return tuiProvideOptions(TUI_INPUT_PASSWORD_OPTIONS, options, TUI_INPUT_PASSWORD_DEFAULT_OPTIONS);
}

/**
 * @deprecated use {@link TuiPassword} with {@link TuiTextfield}
 */
class TuiInputPassword {
    constructor() {
        this.options = inject(TUI_INPUT_PASSWORD_OPTIONS);
        this.texts = toSignal(inject(TUI_PASSWORD_TEXTS), {
            initialValue: ['', ''],
        });
        this.el = tuiInjectElement();
        this.size = inject(TUI_TEXTFIELD_OPTIONS).size;
        this.hidden = signal(true);
        this.text = computed(() => this.hidden() ? this.texts()[0] : this.texts()[1]);
        this.icon = computed((size = this.size()) => {
            const icon = this.hidden() ? this.options.icons.show : this.options.icons.hide;
            return tuiIsString(icon) ? icon : icon(size);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputPassword, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputPassword, isStandalone: true, selector: "input[tuiInputPassword]", host: { properties: { "type": "hidden() ? \"password\" : \"text\"" } }, providers: [tuiFallbackValueProvider('')], hostDirectives: [{ directive: i1.TuiWithTextfield }], ngImport: i0, template: `
        <tui-icon
            *tuiTextfieldContent
            [icon]="icon()"
            [style.border]="size() === 's' ? null : 'none'"
            [tuiTooltip]="text()"
            (click)="hidden.set(!hidden())"
            (mousedown.capture.prevent.stop)="el.focus()"
        />
    `, isInline: true, dependencies: [{ kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }, { kind: "directive", type: TuiTextfieldContent, selector: "ng-template[tuiTextfieldContent]" }, { kind: "directive", type: TuiTooltip, selector: "tui-icon[tuiTooltip]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputPassword, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'input[tuiInputPassword]',
                    imports: [TuiIcon, TuiTextfieldContent, TuiTooltip],
                    template: `
        <tui-icon
            *tuiTextfieldContent
            [icon]="icon()"
            [style.border]="size() === 's' ? null : 'none'"
            [tuiTooltip]="text()"
            (click)="hidden.set(!hidden())"
            (mousedown.capture.prevent.stop)="el.focus()"
        />
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [tuiFallbackValueProvider('')],
                    hostDirectives: [TuiWithTextfield],
                    host: {
                        '[type]': 'hidden() ? "password" : "text"',
                    },
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_INPUT_PASSWORD_DEFAULT_OPTIONS, TUI_INPUT_PASSWORD_OPTIONS, TuiInputPassword, tuiInputPasswordOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-input-password.mjs.map
