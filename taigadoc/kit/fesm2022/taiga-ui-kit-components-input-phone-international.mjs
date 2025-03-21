import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, signal, computed, ElementRef, TemplateRef, Component, ChangeDetectionStrategy, ViewChild, ViewChildren, Input, Output, forwardRef } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import * as i4 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { maskitoTransform, maskitoInitialCalibrationPlugin } from '@maskito/core';
import { maskitoRemoveOnBlurPlugin } from '@maskito/kit';
import { maskitoGetCountryFromNumber, maskitoPhoneOptionsGenerator } from '@maskito/phone';
import { TuiControl, tuiAsControl } from '@taiga-ui/cdk/classes';
import { TUI_DEFAULT_MATCHER, CHAR_PLUS } from '@taiga-ui/cdk/constants';
import { tuiAutoFocusOptionsProvider, TuiAutoFocus } from '@taiga-ui/cdk/directives/auto-focus';
import { TUI_IS_IOS, tuiFallbackValueProvider } from '@taiga-ui/cdk/tokens';
import { tuiIsInputEvent } from '@taiga-ui/cdk/utils/dom';
import { tuiCreateToken, tuiProvideOptions, tuiDirectiveBinding } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i5 from '@taiga-ui/core/components/data-list';
import { TuiOption, TuiDataList } from '@taiga-ui/core/components/data-list';
import * as i7 from '@taiga-ui/core/components/textfield';
import { TUI_TEXTFIELD_OPTIONS, tuiTextfieldOptionsProvider, TuiTextfieldDropdownDirective, TuiTextfield } from '@taiga-ui/core/components/textfield';
import * as i2 from '@taiga-ui/core/directives/dropdown';
import { tuiDropdown, tuiDropdownOpen, TuiDropdownOpen, tuiDropdownOptionsProvider, TuiDropdownDirective, TuiWithDropdownOpen } from '@taiga-ui/core/directives/dropdown';
import * as i1 from '@taiga-ui/core/directives/group';
import { TuiGroup } from '@taiga-ui/core/directives/group';
import { TuiFlagPipe } from '@taiga-ui/core/pipes/flag';
import { TUI_COMMON_ICONS } from '@taiga-ui/core/tokens';
import { tuiIsEditingKey } from '@taiga-ui/core/utils/miscellaneous';
import { TuiChevron } from '@taiga-ui/kit/directives';
import { TUI_COUNTRIES, TUI_INTERNATIONAL_SEARCH } from '@taiga-ui/kit/tokens';
import { tuiGetCallingCode } from '@taiga-ui/kit/utils';
import { validatePhoneNumberLength } from 'libphonenumber-js';
import { getCountryCallingCode } from 'libphonenumber-js/core';
import { of, from, skip } from 'rxjs';
import * as i6 from '@taiga-ui/core/components/label';

const TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS = {
    countries: [],
    countryIsoCode: 'RU',
    metadata: of({ countries: {}, country_calling_codes: {} }),
    separator: '-',
};
/**
 * Default parameters for input phone international component
 */
const TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS = tuiCreateToken(TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS);
function tuiInputPhoneInternationalOptionsProvider(options) {
    return tuiProvideOptions(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS, options, TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS);
}

const NOT_FORM_CONTROL_SYMBOLS = /[^+\d]/g;
class TuiInputPhoneInternational extends TuiControl {
    constructor() {
        super(...arguments);
        this.isIos = inject(TUI_IS_IOS);
        this.dropdown = tuiDropdown(null);
        this.options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
        this.size = inject(TUI_TEXTFIELD_OPTIONS).size;
        this.open = tuiDropdownOpen();
        this.names = toSignal(inject(TUI_COUNTRIES));
        this.metadata = toSignal(from(this.options.metadata));
        this.countries = signal(this.options.countries);
        this.countryIsoCode = signal(this.options.countryIsoCode);
        this.icons = inject(TUI_COMMON_ICONS);
        this.label = toSignal(inject(TUI_INTERNATIONAL_SEARCH));
        this.search = signal('');
        this.separator = signal(this.options.separator);
        this.filtered = computed(() => this.countries()
            .map((iso) => ({
            iso,
            name: this.names()?.[iso] || '',
            code: tuiGetCallingCode(iso, this.metadata()),
        }))
            .filter(({ name, code }) => TUI_DEFAULT_MATCHER(name + code, this.search())));
        this.mask = computed(() => this.computeMask(this.countryIsoCode(), this.metadata(), this.separator()));
        this.$ = tuiDirectiveBinding(TuiDropdownOpen, 'tuiDropdownEnabled', this.interactive);
        this.textfieldValue = '';
        this.countrySearch = false;
        this.countryIsoCodeChange = toObservable(this.countryIsoCode).pipe(skip(1));
    }
    set countriesValue(value) {
        this.countries.set(value);
    }
    set isoCode(code) {
        this.countryIsoCode.set(code);
    }
    focusFirstItem() {
        this.listOptions?.get(0)?.nativeElement.focus();
    }
    onPaste(event) {
        const phonesMetadata = this.metadata();
        if (!tuiIsInputEvent(event) ||
            !phonesMetadata ||
            (!event.inputType.includes('Drop') && !event.inputType.includes('Paste'))) {
            return;
        }
        const newValue = event.data || '';
        const prefixedValue = newValue.startsWith(CHAR_PLUS)
            ? newValue
            : CHAR_PLUS + newValue;
        if (validatePhoneNumberLength(prefixedValue) === 'TOO_SHORT') {
            return;
        }
        const countryIsoCode = maskitoGetCountryFromNumber(prefixedValue, phonesMetadata);
        if (countryIsoCode) {
            this.countryIsoCode.set(countryIsoCode);
        }
    }
    onItemClick(isoCode) {
        this.open.set(false);
        this.countryIsoCode.set(isoCode);
        this.input?.nativeElement.focus();
    }
    writeValue(unmaskedValue) {
        super.writeValue(unmaskedValue);
        const maskOptions = this.mask();
        this.textfieldValue = maskOptions
            ? maskitoTransform(unmaskedValue, maskOptions)
            : unmaskedValue; // it will be calibrated later when mask is ready (by maskitoInitialCalibrationPlugin)
        this.cdr.detectChanges();
    }
    set template(template) {
        this.dropdown.set(template);
    }
    onFocus() {
        const phoneMetadata = this.metadata();
        if (!this.textfieldValue && phoneMetadata) {
            this.textfieldValue = `${CHAR_PLUS + getCountryCallingCode(this.countryIsoCode(), phoneMetadata)} `;
        }
    }
    onValueChange(maskedValue) {
        const unmaskedValue = maskedValue.replaceAll(NOT_FORM_CONTROL_SYMBOLS, '');
        const phonesMetadata = this.metadata();
        const countryCallingCode = phonesMetadata
            ? CHAR_PLUS + getCountryCallingCode(this.countryIsoCode(), phonesMetadata)
            : '';
        this.onChange(unmaskedValue === countryCallingCode ? '' : unmaskedValue);
    }
    onKeyDown({ key }) {
        if (tuiIsEditingKey(key)) {
            this.filter?.nativeElement.focus({ preventScroll: true });
        }
    }
    computeMask(countryIsoCode, metadata, separator) {
        if (!metadata) {
            return null;
        }
        const { plugins, ...restOptions } = maskitoPhoneOptionsGenerator({
            countryIsoCode,
            metadata,
            separator,
        });
        return {
            ...restOptions,
            plugins: [
                ...plugins,
                maskitoRemoveOnBlurPlugin(`${CHAR_PLUS}${getCountryCallingCode(countryIsoCode, metadata)} `),
                maskitoInitialCalibrationPlugin(),
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputPhoneInternational, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputPhoneInternational, isStandalone: true, selector: "tui-input-phone-international", inputs: { countrySearch: "countrySearch", countriesValue: ["countries", "countriesValue"], isoCode: ["countryIsoCode", "isoCode"] }, outputs: { countryIsoCodeChange: "countryIsoCodeChange" }, host: { properties: { "attr.data-size": "size()" } }, providers: [
            tuiAsControl(TuiInputPhoneInternational),
            tuiFallbackValueProvider(''),
            tuiAutoFocusOptionsProvider({ preventScroll: true }),
            tuiTextfieldOptionsProvider({ cleaner: signal(false) }),
            tuiDropdownOptionsProvider({
                limitWidth: 'fixed',
                align: 'right',
            }),
        ], viewQueries: [{ propertyName: "input", first: true, predicate: MaskitoDirective, descendants: true, read: ElementRef }, { propertyName: "filter", first: true, predicate: TuiAutoFocus, descendants: true, read: ElementRef }, { propertyName: "template", first: true, predicate: i0.forwardRef(function () { return TuiTextfieldDropdownDirective; }), descendants: true, read: TemplateRef }, { propertyName: "listOptions", predicate: TuiOption, descendants: true, read: ElementRef }], usesInheritance: true, hostDirectives: [{ directive: i1.TuiGroup }, { directive: i2.TuiDropdownDirective }, { directive: i2.TuiWithDropdownOpen }], ngImport: i0, template: "<tui-textfield\n    class=\"t-select\"\n    [content]=\"flag\"\n    [tuiChevron]=\"open()\"\n>\n    <select\n        ngModel=\"\"\n        tuiTextfield\n        [attr.data-mode]=\"mode()\"\n        [disabled]=\"disabled()\"\n        [focused]=\"open()\"\n        [ngModelOptions]=\"{standalone: true}\"\n    ></select>\n\n    <ng-template #flag>\n        <img\n            class=\"t-flag\"\n            [alt]=\"names()?.[countryIsoCode()]\"\n            [src]=\"countryIsoCode() | tuiFlag\"\n        />\n    </ng-template>\n</tui-textfield>\n\n<tui-textfield>\n    <!--TODO: Replace attribute bindings with inputs after Angular updated and signal bindings properly update-->\n    <input\n        autocomplete=\"new-password\"\n        tuiTextfield\n        [attr.data-mode]=\"mode()\"\n        [attr.readonly]=\"readOnly() || null\"\n        [disabled]=\"disabled()\"\n        [maskito]=\"mask()\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [(ngModel)]=\"textfieldValue\"\n        (beforeinput.capture)=\"onPaste($event)\"\n        (blur)=\"onTouched()\"\n        (focus)=\"!readOnly() && onFocus()\"\n        (ngModelChange)=\"onValueChange($event)\"\n    />\n\n    <!--\n    TODO: get rid of built-in input and label and just externalize everything in 5.0\n    <tui-input-phone-international>\n      <label tuiLabel>My label</label>\n      <input tuiTextfield placeholder=\"My placeholder\" [(ngModel)]=\"value\" />\n      <tui-icon icon=\"@tui.phone\" />\n    </tui-input-phone-international>\n    -->\n    <ng-content select=\"tui-icon, img\" />\n\n    <label tuiLabel>\n        <ng-content />\n    </label>\n</tui-textfield>\n\n<ng-container *tuiTextfieldDropdown>\n    <tui-textfield\n        *ngIf=\"countrySearch\"\n        tuiTextfieldSize=\"m\"\n        class=\"t-search\"\n        [iconStart]=\"icons.search\"\n    >\n        <input\n            tuiTextfield\n            [focused]=\"true\"\n            [ngModel]=\"search()\"\n            [placeholder]=\"label()\"\n            [tuiAutoFocus]=\"!isIos\"\n            (keydown.arrowDown)=\"focusFirstItem()\"\n            (ngModelChange)=\"search.set($event)\"\n        />\n    </tui-textfield>\n\n    <tui-data-list (keydown)=\"onKeyDown($event)\">\n        <button\n            *ngFor=\"let item of filtered()\"\n            tuiOption\n            type=\"button\"\n            (click)=\"onItemClick(item.iso)\"\n        >\n            <img\n                alt=\"\"\n                class=\"t-flag\"\n                [src]=\"item.iso | tuiFlag\"\n            />\n            <span class=\"t-name\">{{ item.name }}</span>\n            <span class=\"t-code\">{{ item.code }}</span>\n        </button>\n    </tui-data-list>\n</ng-container>\n", styles: [".t-select{inline-size:5.625rem;flex:none}.t-select[data-size=m]{inline-size:5rem}.t-select[data-size=s]{inline-size:4rem}.t-flag{inline-size:1.75rem;block-size:1.75rem;border-radius:100%}.t-name{margin:0 auto 0 .75rem}.t-code{color:var(--tui-text-secondary);margin-inline-end:.25rem}.t-search{position:sticky;top:.375rem;background:var(--tui-background-elevation-3);box-shadow:0 -1rem var(--tui-background-elevation-3);margin:.375rem .375rem 0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: MaskitoDirective, selector: "[maskito]", inputs: ["maskito", "maskitoElement"] }, { kind: "directive", type: TuiAutoFocus, selector: "[tuiAutoFocus]", inputs: ["tuiAutoFocus"] }, { kind: "directive", type: TuiChevron, selector: "[tuiChevron]", inputs: ["tuiChevron"] }, { kind: "component", type: i5.TuiDataListComponent, selector: "tui-data-list", inputs: ["emptyContent", "size"] }, { kind: "component", type: i5.TuiOption, selector: "button[tuiOption], a[tuiOption], label[tuiOption]", inputs: ["disabled", "value"] }, { kind: "pipe", type: TuiFlagPipe, name: "tuiFlag" }, { kind: "directive", type: i6.TuiLabel, selector: "label[tuiLabel]" }, { kind: "component", type: i7.TuiSelect, selector: "select[tuiTextfield]", inputs: ["placeholder"] }, { kind: "component", type: i7.TuiTextfieldComponent, selector: "tui-textfield", inputs: ["stringify", "content", "filler"] }, { kind: "directive", type: i7.TuiTextfieldDirective, selector: "input[tuiTextfield]:not([tuiInputCard]):not([tuiInputExpire]):not([tuiInputCVC])" }, { kind: "directive", type: i7.TuiTextfieldOptionsDirective, selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]", inputs: ["tuiTextfieldAppearance", "tuiTextfieldSize", "tuiTextfieldCleaner"] }, { kind: "directive", type: i7.TuiTextfieldDropdownDirective, selector: "ng-template[tuiTextfieldDropdown]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputPhoneInternational, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-input-phone-international', imports: [
                        CommonModule,
                        FormsModule,
                        MaskitoDirective,
                        TuiAutoFocus,
                        TuiChevron,
                        TuiDataList,
                        TuiFlagPipe,
                        TuiTextfield,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        tuiAsControl(TuiInputPhoneInternational),
                        tuiFallbackValueProvider(''),
                        tuiAutoFocusOptionsProvider({ preventScroll: true }),
                        tuiTextfieldOptionsProvider({ cleaner: signal(false) }),
                        tuiDropdownOptionsProvider({
                            limitWidth: 'fixed',
                            align: 'right',
                        }),
                    ], hostDirectives: [TuiGroup, TuiDropdownDirective, TuiWithDropdownOpen], host: {
                        '[attr.data-size]': 'size()',
                    }, template: "<tui-textfield\n    class=\"t-select\"\n    [content]=\"flag\"\n    [tuiChevron]=\"open()\"\n>\n    <select\n        ngModel=\"\"\n        tuiTextfield\n        [attr.data-mode]=\"mode()\"\n        [disabled]=\"disabled()\"\n        [focused]=\"open()\"\n        [ngModelOptions]=\"{standalone: true}\"\n    ></select>\n\n    <ng-template #flag>\n        <img\n            class=\"t-flag\"\n            [alt]=\"names()?.[countryIsoCode()]\"\n            [src]=\"countryIsoCode() | tuiFlag\"\n        />\n    </ng-template>\n</tui-textfield>\n\n<tui-textfield>\n    <!--TODO: Replace attribute bindings with inputs after Angular updated and signal bindings properly update-->\n    <input\n        autocomplete=\"new-password\"\n        tuiTextfield\n        [attr.data-mode]=\"mode()\"\n        [attr.readonly]=\"readOnly() || null\"\n        [disabled]=\"disabled()\"\n        [maskito]=\"mask()\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [(ngModel)]=\"textfieldValue\"\n        (beforeinput.capture)=\"onPaste($event)\"\n        (blur)=\"onTouched()\"\n        (focus)=\"!readOnly() && onFocus()\"\n        (ngModelChange)=\"onValueChange($event)\"\n    />\n\n    <!--\n    TODO: get rid of built-in input and label and just externalize everything in 5.0\n    <tui-input-phone-international>\n      <label tuiLabel>My label</label>\n      <input tuiTextfield placeholder=\"My placeholder\" [(ngModel)]=\"value\" />\n      <tui-icon icon=\"@tui.phone\" />\n    </tui-input-phone-international>\n    -->\n    <ng-content select=\"tui-icon, img\" />\n\n    <label tuiLabel>\n        <ng-content />\n    </label>\n</tui-textfield>\n\n<ng-container *tuiTextfieldDropdown>\n    <tui-textfield\n        *ngIf=\"countrySearch\"\n        tuiTextfieldSize=\"m\"\n        class=\"t-search\"\n        [iconStart]=\"icons.search\"\n    >\n        <input\n            tuiTextfield\n            [focused]=\"true\"\n            [ngModel]=\"search()\"\n            [placeholder]=\"label()\"\n            [tuiAutoFocus]=\"!isIos\"\n            (keydown.arrowDown)=\"focusFirstItem()\"\n            (ngModelChange)=\"search.set($event)\"\n        />\n    </tui-textfield>\n\n    <tui-data-list (keydown)=\"onKeyDown($event)\">\n        <button\n            *ngFor=\"let item of filtered()\"\n            tuiOption\n            type=\"button\"\n            (click)=\"onItemClick(item.iso)\"\n        >\n            <img\n                alt=\"\"\n                class=\"t-flag\"\n                [src]=\"item.iso | tuiFlag\"\n            />\n            <span class=\"t-name\">{{ item.name }}</span>\n            <span class=\"t-code\">{{ item.code }}</span>\n        </button>\n    </tui-data-list>\n</ng-container>\n", styles: [".t-select{inline-size:5.625rem;flex:none}.t-select[data-size=m]{inline-size:5rem}.t-select[data-size=s]{inline-size:4rem}.t-flag{inline-size:1.75rem;block-size:1.75rem;border-radius:100%}.t-name{margin:0 auto 0 .75rem}.t-code{color:var(--tui-text-secondary);margin-inline-end:.25rem}.t-search{position:sticky;top:.375rem;background:var(--tui-background-elevation-3);box-shadow:0 -1rem var(--tui-background-elevation-3);margin:.375rem .375rem 0}\n"] }]
        }], propDecorators: { input: [{
                type: ViewChild,
                args: [MaskitoDirective, { read: ElementRef }]
            }], filter: [{
                type: ViewChild,
                args: [TuiAutoFocus, { read: ElementRef }]
            }], listOptions: [{
                type: ViewChildren,
                args: [TuiOption, { read: ElementRef }]
            }], countrySearch: [{
                type: Input
            }], countryIsoCodeChange: [{
                type: Output
            }], countriesValue: [{
                type: Input,
                args: ['countries']
            }], isoCode: [{
                type: Input,
                args: ['countryIsoCode']
            }], template: [{
                type: ViewChild,
                args: [forwardRef(() => TuiTextfieldDropdownDirective), { read: TemplateRef }]
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS, TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS, TuiInputPhoneInternational, tuiInputPhoneInternationalOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-input-phone-international.mjs.map
