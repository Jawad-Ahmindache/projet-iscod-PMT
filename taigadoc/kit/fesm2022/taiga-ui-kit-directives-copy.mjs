import { DOCUMENT } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, computed, Directive, Input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tuiDirectiveBinding, tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TuiTextfieldComponent } from '@taiga-ui/core/components/textfield';
import * as i1 from '@taiga-ui/core/directives/appearance';
import { TUI_APPEARANCE_OPTIONS, TuiWithAppearance } from '@taiga-ui/core/directives/appearance';
import * as i2 from '@taiga-ui/core/directives/hint';
import { TuiHintDirective } from '@taiga-ui/core/directives/hint';
import { TUI_COPY_TEXTS } from '@taiga-ui/kit/tokens';
import { Subject, switchMap, timer, map, startWith } from 'rxjs';
import { tuiCreateOptions } from '@taiga-ui/cdk/utils/di';

const [TUI_COPY_OPTIONS, tuiCopyOptionsProvider] = tuiCreateOptions({
    icon: '@tui.copy',
});

class TuiCopy {
    constructor() {
        this.options = inject(TUI_COPY_OPTIONS);
        this.copied$ = new Subject();
        this.doc = inject(DOCUMENT);
        this.textfield = inject(TuiTextfieldComponent);
        this.hint = tuiDirectiveBinding(TuiHintDirective, 'tuiHint', toSignal(inject(TUI_COPY_TEXTS).pipe(switchMap(([copy, copied]) => this.copied$.pipe(switchMap(() => timer(3000).pipe(map(() => copy), startWith(copied))), startWith(copy)))), { initialValue: '' }));
        this.icons = tuiDirectiveBinding(TuiIcon, 'icon', computed((size = this.textfield.options.size()) => tuiIsString(this.options.icon) ? this.options.icon : this.options.icon(size)));
        this.tuiCopy = '';
    }
    get disabled() {
        return !this.textfield.input?.nativeElement.value;
    }
    copy() {
        this.textfield.input?.nativeElement.select();
        this.doc.execCommand('copy');
        this.copied$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCopy, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiCopy, isStandalone: true, selector: "tui-icon[tuiCopy]", inputs: { tuiCopy: "tuiCopy" }, host: { listeners: { "click": "copy()" }, properties: { "style.pointer-events": "disabled ? \"none\" : null", "style.opacity": "disabled ? \"var(--tui-disabled-opacity)\" : null", "style.border": "textfield.options.size() === \"s\" ? \"0.25rem solid transparent\" : null" }, styleAttribute: "cursor: pointer" }, providers: [
            {
                provide: TUI_APPEARANCE_OPTIONS,
                useValue: { appearance: 'icon' },
            },
        ], hostDirectives: [{ directive: i1.TuiWithAppearance }, { directive: i2.TuiHintDirective, inputs: ["tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCopy, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-icon[tuiCopy]',
                    providers: [
                        {
                            provide: TUI_APPEARANCE_OPTIONS,
                            useValue: { appearance: 'icon' },
                        },
                    ],
                    hostDirectives: [
                        TuiWithAppearance,
                        {
                            directive: TuiHintDirective,
                            inputs: ['tuiHintAppearance', 'tuiHintContext'],
                        },
                    ],
                    host: {
                        style: 'cursor: pointer',
                        '(click)': 'copy()',
                        '[style.pointer-events]': 'disabled ? "none" : null',
                        '[style.opacity]': 'disabled ? "var(--tui-disabled-opacity)" : null',
                        '[style.border]': 'textfield.options.size() === "s" ? "0.25rem solid transparent" : null',
                    },
                }]
        }], propDecorators: { tuiCopy: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_COPY_OPTIONS, TuiCopy, tuiCopyOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-directives-copy.mjs.map
