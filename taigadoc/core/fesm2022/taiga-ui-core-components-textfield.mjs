import { TuiLabel } from '@taiga-ui/core/components/label';
import * as i3$1 from '@angular/common';
import { NgIf, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { signal, Optional, SkipSelf, inject, Directive, Input, TemplateRef, ContentChild, computed, ElementRef, ViewContainerRef, Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, ViewChild } from '@angular/core';
import { WA_NAVIGATOR } from '@ng-web-apis/common';
import * as i1$1 from '@taiga-ui/cdk/directives/native-validator';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiCreateToken, tuiProvide, tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i2 from '@taiga-ui/core/directives/appearance';
import { tuiAppearance, tuiAppearanceState, tuiAppearanceMode, tuiAppearanceFocus, TuiAppearance } from '@taiga-ui/core/directives/appearance';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';
import { tuiControlValue } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { merge, fromEvent, timer, switchMap, map } from 'rxjs';
import { WaResizeObserver } from '@ng-web-apis/resize-observer';
import { tuiInjectId } from '@taiga-ui/cdk/services';
import { tuiFocusedIn } from '@taiga-ui/cdk/utils/focus';
import { tuiButtonOptionsProvider, TuiButton } from '@taiga-ui/core/components/button';
import { tuiAsDataListHost } from '@taiga-ui/core/components/data-list';
import * as i1 from '@taiga-ui/core/directives/dropdown';
import { tuiDropdown, tuiDropdownOpen, TuiDropdownFixed, TuiDropdownDirective, TuiWithDropdownOpen } from '@taiga-ui/core/directives/dropdown';
import * as i3 from '@taiga-ui/core/directives/icons';
import { TuiWithIcons } from '@taiga-ui/core/directives/icons';
import { TUI_COMMON_ICONS, TUI_CLEAR_WORD } from '@taiga-ui/core/tokens';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';

const DEFAULT = {
    appearance: 'textfield',
    size: 'l',
    cleaner: true,
};
const TUI_TEXTFIELD_OPTIONS = tuiCreateToken({
    appearance: signal(DEFAULT.appearance),
    size: signal(DEFAULT.size),
    cleaner: signal(DEFAULT.cleaner),
});
function tuiTextfieldOptionsProvider(options) {
    return {
        provide: TUI_TEXTFIELD_OPTIONS,
        deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
        useFactory: (parent) => ({
            appearance: signal(parent?.appearance() ?? DEFAULT.appearance),
            size: signal(parent?.size() ?? DEFAULT.size),
            cleaner: signal(parent?.cleaner() ?? DEFAULT.cleaner),
            ...options,
        }),
    };
}
class TuiTextfieldOptionsDirective {
    constructor() {
        this.options = inject(TUI_TEXTFIELD_OPTIONS, { skipSelf: true });
        // TODO: refactor to signal inputs after Angular update
        this.appearance = signal(this.options.appearance());
        this.size = signal(this.options.size());
        this.cleaner = signal(this.options.cleaner());
    }
    set tuiTextfieldAppearance(appearance) {
        this.appearance.set(appearance);
    }
    set tuiTextfieldSize(size) {
        this.size.set(size);
    }
    set tuiTextfieldCleaner(enabled) {
        this.cleaner.set(enabled);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldOptionsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldOptionsDirective, isStandalone: true, selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]", inputs: { tuiTextfieldAppearance: "tuiTextfieldAppearance", tuiTextfieldSize: "tuiTextfieldSize", tuiTextfieldCleaner: "tuiTextfieldCleaner" }, providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldOptionsDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]',
                    providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)],
                }]
        }], propDecorators: { tuiTextfieldAppearance: [{
                type: Input
            }], tuiTextfieldSize: [{
                type: Input
            }], tuiTextfieldCleaner: [{
                type: Input
            }] } });

class TuiTextfieldDropdownDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldDropdownDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldDropdownDirective, isStandalone: true, selector: "ng-template[tuiTextfieldDropdown]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldDropdownDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiTextfieldDropdown]',
                }]
        }] });
class TuiWithTextfieldDropdown {
    constructor() {
        this.dropdown = tuiDropdown(null);
    }
    set template(template) {
        this.dropdown.set(template);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithTextfieldDropdown, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiWithTextfieldDropdown, isStandalone: true, queries: [{ propertyName: "template", first: true, predicate: TuiTextfieldDropdownDirective, descendants: true, read: TemplateRef }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithTextfieldDropdown, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], propDecorators: { template: [{
                type: ContentChild,
                args: [TuiTextfieldDropdownDirective, { read: TemplateRef, descendants: true }]
            }] } });

class TuiTextfieldComponent {
    constructor() {
        // TODO: refactor to signal inputs after Angular update
        this.filler = signal('');
        this.autoId = tuiInjectId();
        this.el = tuiInjectElement();
        this.open = tuiDropdownOpen();
        this.focusedIn = tuiFocusedIn(tuiInjectElement());
        this.icons = inject(TUI_COMMON_ICONS);
        this.clear = toSignal(inject(TUI_CLEAR_WORD));
        this.computedFiller = computed(() => {
            const value = this.directive?.nativeValue() || '';
            const filledValue = value + this.filler().slice(value.length);
            return filledValue.length > value.length ? filledValue : '';
        });
        this.showFiller = computed(() => this.focused() &&
            !!this.computedFiller() &&
            (!!this.directive?.nativeValue() || !this.input?.nativeElement.placeholder));
        this.stringify = String;
        this.focused = computed(() => this.open() || this.focusedIn());
        this.options = inject(TUI_TEXTFIELD_OPTIONS);
    }
    set fillerSetter(filler) {
        this.filler.set(filler);
    }
    get id() {
        return this.input?.nativeElement.id || this.autoId;
    }
    get size() {
        return this.options.size();
    }
    handleOption(option) {
        this.directive?.setValue(option);
        this.open.set(false);
    }
    get hasLabel() {
        return Boolean(this.label?.nativeElement?.childNodes.length);
    }
    onResize({ contentRect }) {
        this.el.style.setProperty('--t-side', tuiPx(contentRect.width));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldComponent, isStandalone: true, selector: "tui-textfield", inputs: { stringify: "stringify", content: "content", fillerSetter: ["filler", "fillerSetter"] }, host: { properties: { "attr.data-size": "options.size()", "class._with-label": "hasLabel", "class._with-template": "content", "class._disabled": "input?.nativeElement.disabled" } }, providers: [
            tuiButtonOptionsProvider({ size: 'xs', appearance: 'icon' }),
            tuiAsDataListHost(TuiTextfieldComponent),
        ], queries: [{ propertyName: "directive", first: true, predicate: i0.forwardRef(function () { return TuiTextfieldDirective; }), descendants: true }, { propertyName: "label", first: true, predicate: i0.forwardRef(function () { return TuiLabel; }), descendants: true, read: ElementRef }, { propertyName: "control", first: true, predicate: NgControl, descendants: true }, { propertyName: "input", first: true, predicate: i0.forwardRef(function () { return TuiTextfieldDirective; }), descendants: true, read: ElementRef, static: true }], viewQueries: [{ propertyName: "vcr", first: true, predicate: ["vcr"], descendants: true, read: ViewContainerRef, static: true }], hostDirectives: [{ directive: i1.TuiDropdownFixed }, { directive: i1.TuiDropdownDirective }, { directive: i1.TuiWithDropdownOpen }, { directive: TuiWithTextfieldDropdown }, { directive: i3.TuiWithIcons }], ngImport: i0, template: "<ng-content select=\"input\" />\n<ng-content select=\"select\" />\n<ng-content select=\"label\" />\n<span\n    class=\"t-content\"\n    (mousedown.prevent)=\"input?.nativeElement?.focus()\"\n    (waResizeObserver)=\"$event[0] && onResize($event[0])\"\n>\n    <ng-content />\n    <button\n        *ngIf=\"options.cleaner()\"\n        appearance=\"icon\"\n        size=\"xs\"\n        tabindex=\"-1\"\n        tuiIconButton\n        type=\"button\"\n        class=\"t-clear\"\n        [iconStart]=\"icons.close\"\n        (click)=\"directive?.setValue(null)\"\n        (pointerdown.silent.prevent)=\"input?.nativeElement?.focus()\"\n    >\n        {{ clear() }}\n    </button>\n    <ng-container #vcr />\n    <ng-content select=\"tui-icon\" />\n</span>\n<span class=\"t-template\">\n    <ng-container *polymorpheusOutlet=\"content as text; context: {$implicit: control?.value}\">\n        {{ text }}\n    </ng-container>\n</span>\n<input\n    *ngIf=\"showFiller()\"\n    aria-hidden=\"true\"\n    disabled\n    class=\"t-filler\"\n    [value]=\"computedFiller()\"\n/>\n", styles: ["tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);--t-padding: var(--tui-padding-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box}tui-textfield[style*=\"--t-icon-start:\"]{--t-left: 2.25rem}tui-textfield[style*=\"--t-icon-end:\"]{--t-right: 2.25rem}tui-textfield:after{margin-inline-start:.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*=\"--t-icon-start:\"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*=\"--t-icon-end:\"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .575rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{gap:0;margin-inline-end:-.325rem}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);--t-padding: var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*=\"--t-icon-start:\"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*=\"--t-icon-end:\"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .375rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .5rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield[data-size=m] .t-content{margin-inline-end:-.125rem}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode~=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1;margin-inline-end:.75rem}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input:defined,tui-textfield:has(label:not(:empty)) select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input:defined::placeholder,tui-textfield:has(label:not(:empty)) select:defined::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input:defined._empty,tui-textfield:has(label:not(:empty)) select:defined._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input:defined,tui-textfield._with-label select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input:defined::placeholder,tui-textfield._with-label select:defined::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input:defined._empty,tui-textfield._with-label select:defined._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;border-radius:inherit;padding:inherit;border:none;text-indent:var(--t-left, 0);padding-inline-end:calc(var(--t-right, var(--t-0, 0rem)) + var(--t-side) + var(--t-padding))}tui-textfield .t-template{display:flex;align-items:center}tui-textfield._with-template select{color:transparent!important}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label>tui-icon,tui-textfield select:defined:disabled~label>tui-icon,tui-textfield input:defined:disabled~.t-content>tui-icon,tui-textfield select:defined:disabled~.t-content>tui-icon{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode~=readonly]){cursor:pointer}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield .t-content>tui-icon{pointer-events:auto}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "directive", type: WaResizeObserver, selector: "[waResizeObserver]", inputs: ["box"], outputs: ["waResizeObserver"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-textfield', imports: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        tuiButtonOptionsProvider({ size: 'xs', appearance: 'icon' }),
                        tuiAsDataListHost(TuiTextfieldComponent),
                    ], hostDirectives: [
                        TuiDropdownFixed,
                        TuiDropdownDirective,
                        TuiWithDropdownOpen,
                        TuiWithTextfieldDropdown,
                        TuiWithIcons,
                    ], host: {
                        '[attr.data-size]': 'options.size()',
                        '[class._with-label]': 'hasLabel',
                        '[class._with-template]': 'content',
                        '[class._disabled]': 'input?.nativeElement.disabled',
                    }, template: "<ng-content select=\"input\" />\n<ng-content select=\"select\" />\n<ng-content select=\"label\" />\n<span\n    class=\"t-content\"\n    (mousedown.prevent)=\"input?.nativeElement?.focus()\"\n    (waResizeObserver)=\"$event[0] && onResize($event[0])\"\n>\n    <ng-content />\n    <button\n        *ngIf=\"options.cleaner()\"\n        appearance=\"icon\"\n        size=\"xs\"\n        tabindex=\"-1\"\n        tuiIconButton\n        type=\"button\"\n        class=\"t-clear\"\n        [iconStart]=\"icons.close\"\n        (click)=\"directive?.setValue(null)\"\n        (pointerdown.silent.prevent)=\"input?.nativeElement?.focus()\"\n    >\n        {{ clear() }}\n    </button>\n    <ng-container #vcr />\n    <ng-content select=\"tui-icon\" />\n</span>\n<span class=\"t-template\">\n    <ng-container *polymorpheusOutlet=\"content as text; context: {$implicit: control?.value}\">\n        {{ text }}\n    </ng-container>\n</span>\n<input\n    *ngIf=\"showFiller()\"\n    aria-hidden=\"true\"\n    disabled\n    class=\"t-filler\"\n    [value]=\"computedFiller()\"\n/>\n", styles: ["tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);--t-padding: var(--tui-padding-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box}tui-textfield[style*=\"--t-icon-start:\"]{--t-left: 2.25rem}tui-textfield[style*=\"--t-icon-end:\"]{--t-right: 2.25rem}tui-textfield:after{margin-inline-start:.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*=\"--t-icon-start:\"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*=\"--t-icon-end:\"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .575rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{gap:0;margin-inline-end:-.325rem}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);--t-padding: var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*=\"--t-icon-start:\"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*=\"--t-icon-end:\"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .375rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .5rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield[data-size=m] .t-content{margin-inline-end:-.125rem}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode~=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1;margin-inline-end:.75rem}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input:defined,tui-textfield:has(label:not(:empty)) select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input:defined::placeholder,tui-textfield:has(label:not(:empty)) select:defined::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input:defined._empty,tui-textfield:has(label:not(:empty)) select:defined._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input:defined,tui-textfield._with-label select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input:defined::placeholder,tui-textfield._with-label select:defined::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input:defined._empty,tui-textfield._with-label select:defined._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;border-radius:inherit;padding:inherit;border:none;text-indent:var(--t-left, 0);padding-inline-end:calc(var(--t-right, var(--t-0, 0rem)) + var(--t-side) + var(--t-padding))}tui-textfield .t-template{display:flex;align-items:center}tui-textfield._with-template select{color:transparent!important}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label>tui-icon,tui-textfield select:defined:disabled~label>tui-icon,tui-textfield input:defined:disabled~.t-content>tui-icon,tui-textfield select:defined:disabled~.t-content>tui-icon{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode~=readonly]){cursor:pointer}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate;border-radius:inherit}tui-textfield .t-content>tui-icon{pointer-events:auto}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n"] }]
        }], propDecorators: { directive: [{
                type: ContentChild,
                args: [forwardRef(() => TuiTextfieldDirective)]
            }], label: [{
                type: ContentChild,
                args: [forwardRef(() => TuiLabel), { read: ElementRef }]
            }], control: [{
                type: ContentChild,
                args: [NgControl]
            }], vcr: [{
                type: ViewChild,
                args: ['vcr', { read: ViewContainerRef, static: true }]
            }], input: [{
                type: ContentChild,
                args: [forwardRef(() => TuiTextfieldDirective), {
                        read: ElementRef,
                        static: true,
                    }]
            }], stringify: [{
                type: Input
            }], content: [{
                type: Input
            }], fillerSetter: [{
                type: Input,
                args: ['filler']
            }] } });

class TuiTextfieldBase {
    constructor() {
        // TODO: refactor to signal inputs after Angular update
        this.focused = signal(null);
        this.control = inject(NgControl, { optional: true });
        this.a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
        this.s = tuiAppearanceState(null);
        this.m = tuiAppearanceMode(this.mode);
        this.f = tuiAppearanceFocus(computed(() => this.focused() ?? this.textfield.focused()));
        this.el = tuiInjectElement();
        this.textfield = inject(TuiTextfieldComponent);
        this.readOnly = false;
        this.invalid = null;
        this.nativeValue = toSignal(merge(fromEvent(this.el, 'input'), timer(0) // https://github.com/angular/angular/issues/54418
            .pipe(switchMap(() => tuiControlValue(this.control)))).pipe(map(() => this.el.value)), { initialValue: this.el.value });
    }
    set focusedSetter(focused) {
        this.focused.set(focused);
    }
    set stateSetter(state) {
        this.s.set(state);
    }
    get mode() {
        if (this.readOnly) {
            return 'readonly';
        }
        if (this.invalid === false) {
            return 'valid';
        }
        if (this.invalid) {
            return 'invalid';
        }
        return null;
    }
    // TODO: refactor to signal inputs after Angular update
    ngOnChanges() {
        this.m.set(this.mode);
    }
    setValue(value) {
        this.el.focus();
        this.el.select();
        if (value == null) {
            this.el.ownerDocument.execCommand('delete');
        }
        else {
            this.el.ownerDocument.execCommand('insertText', false, this.textfield.stringify(value));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldBase, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldBase, inputs: { readOnly: "readOnly", invalid: "invalid", focusedSetter: ["focused", "focusedSetter"], stateSetter: ["state", "stateSetter"] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldBase, decorators: [{
            type: Directive
        }], propDecorators: { readOnly: [{
                type: Input
            }], invalid: [{
                type: Input
            }], focusedSetter: [{
                type: Input,
                args: ['focused']
            }], stateSetter: [{
                type: Input,
                args: ['state']
            }] } });
class TuiTextfieldDirective extends TuiTextfieldBase {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldDirective, isStandalone: true, selector: "input[tuiTextfield]:not([tuiInputCard]):not([tuiInputExpire]):not([tuiInputCVC])", host: { listeners: { "input": "0", "focusin": "0", "focusout": "0" }, properties: { "id": "textfield.id", "readOnly": "readOnly", "class._empty": "el.value === \"\"" } }, usesInheritance: true, hostDirectives: [{ directive: i1$1.TuiNativeValidator }, { directive: i2.TuiAppearance }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    // TODO: Remove :not in v.5
                    selector: 'input[tuiTextfield]:not([tuiInputCard]):not([tuiInputExpire]):not([tuiInputCVC])',
                    hostDirectives: [TuiNativeValidator, TuiAppearance],
                    host: {
                        '[id]': 'textfield.id',
                        '[readOnly]': 'readOnly',
                        '[class._empty]': 'el.value === ""',
                        '(input)': '0',
                        '(focusin)': '0',
                        '(focusout)': '0',
                    },
                }]
        }] });
class TuiWithTextfield {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithTextfield, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiWithTextfield, isStandalone: true, hostDirectives: [{ directive: TuiTextfieldDirective, inputs: ["invalid", "invalid", "focused", "focused", "readOnly", "readOnly", "state", "state"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithTextfield, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    hostDirectives: [
                        {
                            directive: TuiTextfieldDirective,
                            inputs: ['invalid', 'focused', 'readOnly', 'state'],
                        },
                    ],
                }]
        }] });

class TuiSelect extends TuiTextfieldBase {
    constructor() {
        super(...arguments);
        this.nav = inject(WA_NAVIGATOR);
        this.placeholder = '';
    }
    setValue(value) {
        this.control?.control?.setValue(value);
        this.el.dispatchEvent(new Event('input', { bubbles: true }));
    }
    focus() {
        this.el.classList.add('_ios-fix');
        this.el.focus();
        this.el.classList.remove('_ios-fix');
    }
    get value() {
        return this.textfield.stringify(this.control?.value ?? '');
    }
    async onCopy() {
        await this.nav.clipboard.writeText(this.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSelect, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSelect, isStandalone: true, selector: "select[tuiTextfield]", inputs: { placeholder: "placeholder" }, host: { listeners: { "input": "0", "focusin": "0", "focusout": "0", "keydown.space.prevent": "0", "keydown.enter.prevent": "0", "keydown.backspace": "setValue(\"\")", "mousedown.prevent": "focus()", "keydown.control.c": "onCopy()", "keydown.meta.c": "onCopy()" }, properties: { "id": "textfield.id", "class._empty": "value === \"\"" } }, providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)], usesInheritance: true, hostDirectives: [{ directive: i1$1.TuiNativeValidator }, { directive: i2.TuiAppearance }], ngImport: i0, template: "<option\n    *ngIf=\"placeholder && !value; else selected\"\n    disabled\n    selected\n    value=\"\"\n>\n    {{ placeholder }}\n</option>\n<ng-template #selected>\n    <option\n        *ngFor=\"let item of [value]\"\n        selected\n        [value]=\"item\"\n    >\n        {{ item }}\n    </option>\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.Default }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSelect, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'select[tuiTextfield]', imports: [CommonModule], changeDetection: ChangeDetectionStrategy.Default, providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)], hostDirectives: [TuiNativeValidator, TuiAppearance], host: {
                        '[id]': 'textfield.id',
                        '[class._empty]': 'value === ""',
                        '(input)': '0',
                        '(focusin)': '0',
                        '(focusout)': '0',
                        '(keydown.space.prevent)': '0',
                        '(keydown.enter.prevent)': '0',
                        '(keydown.backspace)': 'setValue("")',
                        '(mousedown.prevent)': 'focus()',
                        '(keydown.control.c)': 'onCopy()',
                        '(keydown.meta.c)': 'onCopy()',
                    }, template: "<option\n    *ngIf=\"placeholder && !value; else selected\"\n    disabled\n    selected\n    value=\"\"\n>\n    {{ placeholder }}\n</option>\n<ng-template #selected>\n    <option\n        *ngFor=\"let item of [value]\"\n        selected\n        [value]=\"item\"\n    >\n        {{ item }}\n    </option>\n</ng-template>\n" }]
        }], propDecorators: { placeholder: [{
                type: Input
            }] } });

const TuiTextfield = [
    TuiLabel,
    TuiSelect,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    TuiTextfieldOptionsDirective,
    TuiTextfieldDropdownDirective,
];

class TuiTextfieldContent {
    constructor() {
        inject(TuiTextfieldComponent).vcr?.createEmbeddedView(inject(TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldContent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldContent, isStandalone: true, selector: "ng-template[tuiTextfieldContent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldContent, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiTextfieldContent]',
                }]
        }], ctorParameters: function () { return []; } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_TEXTFIELD_OPTIONS, TuiSelect, TuiTextfield, TuiTextfieldBase, TuiTextfieldComponent, TuiTextfieldContent, TuiTextfieldDirective, TuiTextfieldDropdownDirective, TuiTextfieldOptionsDirective, TuiWithTextfield, TuiWithTextfieldDropdown, tuiTextfieldOptionsProvider };
//# sourceMappingURL=taiga-ui-core-components-textfield.mjs.map
