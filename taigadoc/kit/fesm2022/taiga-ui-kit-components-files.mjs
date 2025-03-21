import { __decorate } from 'tslib';
import * as i2 from '@angular/common';
import { CommonModule, AsyncPipe } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, TemplateRef, ViewEncapsulation, ContentChildren, Directive, forwardRef, ContentChild, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WA_WINDOW } from '@ng-web-apis/common';
import { tuiPure, tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TuiLoader } from '@taiga-ui/core/components/loader';
import * as i1 from '@taiga-ui/core/directives/appearance';
import { tuiAppearanceOptionsProvider, TuiAppearance, TuiWithAppearance } from '@taiga-ui/core/directives/appearance';
import { TuiHintOverflow } from '@taiga-ui/core/directives/hint';
import { TUI_COMMON_ICONS } from '@taiga-ui/core/tokens';
import { TUI_DIGITAL_INFORMATION_UNITS, TUI_FILE_TEXTS, TUI_HIDE_TEXT, TUI_SHOW_ALL_TEXT, TUI_INPUT_FILE_TEXTS } from '@taiga-ui/kit/tokens';
import { PolymorpheusOutlet, PolymorpheusTemplate, injectContext, PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { map, of, combineLatest, timer, switchMap, filter } from 'rxjs';
import { tuiCreateOptions } from '@taiga-ui/cdk/utils/di';
import { coerceArray } from '@angular/cdk/coercion';
import { tuiRound } from '@taiga-ui/cdk/utils/math';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { EMPTY_QUERY, EMPTY_ARRAY, CHAR_NO_BREAK_SPACE } from '@taiga-ui/cdk/constants';
import { TuiExpandComponent } from '@taiga-ui/core/components/expand';
import * as i1$1 from '@taiga-ui/core/directives/group';
import { tuiGroupOptionsProvider, TuiGroup } from '@taiga-ui/core/directives/group';
import { TuiLink } from '@taiga-ui/core/components/link';
import { TuiBreakpointService } from '@taiga-ui/core/services';
import { TuiControl, tuiAsControl } from '@taiga-ui/cdk/classes';
import * as i1$3 from '@taiga-ui/cdk/directives/native-validator';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiZonefreeScheduler, tuiControlValue } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { Validators, FormControl } from '@angular/forms';
import * as i1$2 from '@taiga-ui/cdk/directives/validator';
import { TuiValidator } from '@taiga-ui/cdk/directives/validator';

const TUI_SIZE_ERROR = 'tuiSize';
const TUI_FORMAT_ERROR = 'tuiFormat';
function tuiCreateFileSizeValidator(size) {
    return ({ value }) => {
        const files = value && coerceArray(value);
        const $implicit = value && files?.filter((file) => file.size > size);
        return $implicit?.length ? { [TUI_SIZE_ERROR]: { $implicit, size } } : null;
    };
}
function tuiCreateFileFormatValidator(accept) {
    return ({ value }) => {
        const files = value && coerceArray(value);
        const formats = toArray$1(accept);
        const $implicit = value && files?.filter((file) => !checkFormat(file, formats));
        return $implicit?.length && accept ? { [TUI_FORMAT_ERROR]: { $implicit } } : null;
    };
}
function checkFormat({ name, type }, formats) {
    const extension = `.${(name.split('.').pop() || '').toLowerCase()}`;
    return formats.some((format) => format === extension ||
        format === type ||
        (format.split('/')[1] === '*' &&
            type?.split('/')[0] === format.split('/')[0]));
}
function toArray$1(accept) {
    return accept
        .toLowerCase()
        .split(',')
        .map((format) => format.trim().toLowerCase());
}

const BYTES_PER_KIB = 1024;
const BYTES_PER_MIB = 1024 * BYTES_PER_KIB;
function tuiFilesRejected(control) {
    const format = control?.getError(TUI_FORMAT_ERROR)?.$implicit || [];
    const size = control?.getError(TUI_SIZE_ERROR)?.$implicit || [];
    return Array.from(new Set([...format, ...size]));
}
function tuiFilesAccepted(control) {
    const value = control?.value || [];
    const files = coerceArray(value);
    const size = control?.getError(TUI_SIZE_ERROR)?.$implicit || [];
    const format = control?.getError(TUI_FORMAT_ERROR)?.$implicit || [];
    return files.filter((file) => !size.includes(file) && !format.includes(file));
}
function tuiFormatSize(units, size) {
    if (size === undefined) {
        return null;
    }
    if (size < BYTES_PER_KIB) {
        return `${size} ${units[0]}`;
    }
    if (size < BYTES_PER_MIB) {
        return `${(size / BYTES_PER_KIB).toFixed(0)} ${units[1]}`;
    }
    return `${tuiRound(size / BYTES_PER_MIB, 2).toLocaleString('ru-RU')} ${units[2]}`;
}

const TUI_FILE_DEFAULT_OPTIONS = {
    appearance: 'outline',
    formatSize: tuiFormatSize,
    icons: {
        normal: ({ $implicit }) => ($implicit === 'l' ? '@tui.file' : '@tui.circle-check'),
        error: '@tui.circle-alert',
        deleted: '@tui.trash',
    },
};
/**
 * Default parameters for file component
 */
const [TUI_FILE_OPTIONS, tuiFileOptionsProvider] = tuiCreateOptions(TUI_FILE_DEFAULT_OPTIONS);

class TuiFile {
    constructor() {
        this.sanitizer = inject(DomSanitizer);
        this.options = inject(TUI_FILE_OPTIONS);
        this.units$ = inject(TUI_DIGITAL_INFORMATION_UNITS);
        this.win = inject(WA_WINDOW);
        this.icons = inject(TUI_COMMON_ICONS);
        this.fileTexts$ = inject(TUI_FILE_TEXTS);
        this.file = { name: '' };
        this.state = 'normal';
        this.size = 'm';
        this.showDelete = true;
        this.showSize = true;
        this.remove = new EventEmitter();
    }
    get preview() {
        return this.isBig ? this.createPreview(this.file) : '';
    }
    get isBig() {
        return this.size === 'l';
    }
    get isLoading() {
        return this.state === 'loading';
    }
    get isError() {
        return this.state === 'error';
    }
    get isDeleted() {
        return this.state === 'deleted';
    }
    get allowDelete() {
        return this.showDelete && this.remove.observed;
    }
    get icon() {
        return this.state === 'loading' ? '' : this.options.icons[this.state];
    }
    get name() {
        return this.getName(this.file);
    }
    get type() {
        return this.getType(this.file);
    }
    get content$() {
        return this.calculateContent$(this.state, this.file, this.fileTexts$);
    }
    get fileSize$() {
        return this.calculateFileSize$(this.file, this.units$);
    }
    calculateContent$(state, file, fileTexts$) {
        return state === 'error' && !file.content
            ? fileTexts$.pipe(map((texts) => texts.loadingError))
            : of(this.file.content || '');
    }
    calculateFileSize$(file, units$) {
        return units$.pipe(map((units) => this.options.formatSize(units, file.size)));
    }
    createPreview(file) {
        if (file.src) {
            return file.src;
        }
        if (this.win.File &&
            file instanceof this.win.File &&
            file.type?.startsWith('image/')) {
            return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
        }
        return '';
    }
    getName(file) {
        return file.name.split('.').slice(0, -1).join('.');
    }
    getType(file) {
        return `.${file.name.split('.').pop()}` || '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFile, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiFile, isStandalone: true, selector: "tui-file,a[tuiFile],button[tuiFile]", inputs: { file: "file", state: "state", size: "size", showDelete: "showDelete", showSize: "showSize", leftContent: "leftContent" }, outputs: { remove: "remove" }, host: { properties: { "attr.data-delete": "showDelete" } }, providers: [tuiAppearanceOptionsProvider(TUI_FILE_OPTIONS)], hostDirectives: [{ directive: i1.TuiAppearance }], ngImport: i0, template: "<div\n    class=\"t-preview\"\n    [class.t-preview_big]=\"isBig\"\n>\n    <ng-container *polymorpheusOutlet=\"leftContent || defaultLeftContent as text\">\n        {{ text }}\n    </ng-container>\n</div>\n<div class=\"t-wrapper\">\n    <div class=\"t-text\">\n        <div\n            tuiHintOverflow\n            class=\"t-name\"\n        >\n            {{ name }}\n        </div>\n        <div class=\"t-type\">{{ type }}</div>\n        <div\n            *ngIf=\"showSize && (fileSize$ | async) as fileSize\"\n            class=\"t-size\"\n        >\n            {{ fileSize }}\n        </div>\n    </div>\n    <div\n        *ngIf=\"content$ | async as content\"\n        class=\"t-content\"\n    >\n        <ng-container *polymorpheusOutlet=\"content as text\">\n            {{ text }}\n        </ng-container>\n    </div>\n    <ng-content />\n</div>\n<ng-container *ngIf=\"allowDelete\">\n    <button\n        *ngIf=\"fileTexts$ | async as texts\"\n        appearance=\"icon\"\n        size=\"xs\"\n        tuiIconButton\n        type=\"button\"\n        class=\"t-remove\"\n        [iconStart]=\"icons.close\"\n        (click.prevent)=\"remove.emit()\"\n        (mousedown.prevent.silent)=\"(0)\"\n    >\n        {{ texts.remove }}\n    </button>\n</ng-container>\n\n<ng-template #defaultLeftContent>\n    <img\n        *ngIf=\"preview; else loader\"\n        alt=\"file preview\"\n        class=\"t-image\"\n        [src]=\"preview\"\n    />\n    <ng-template #loader>\n        <tui-loader\n            *ngIf=\"isLoading; else svg\"\n            class=\"t-loader\"\n            [inheritColor]=\"isBig\"\n        />\n    </ng-template>\n    <ng-template #svg>\n        <tui-icon\n            *polymorpheusOutlet=\"icon as src; context: {$implicit: size}\"\n            class=\"t-icon\"\n            [class.t-icon_blank]=\"isBig || isDeleted\"\n            [class.t-icon_error]=\"isError\"\n            [icon]=\"src.toString()\"\n        />\n    </ng-template>\n</ng-template>\n", styles: [":host{position:relative;display:flex;align-items:center;font:var(--tui-font-text-m);padding:.625rem 2.25rem .625rem .625rem;text-decoration:none;border-radius:var(--tui-radius-m)}:host:hover .t-remove,:host[data-delete=always] .t-remove{opacity:1}.t-preview{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;inline-size:1.5rem;block-size:1.5rem;margin-right:.75rem;border-radius:var(--tui-radius-m);overflow:hidden;color:var(--tui-text-tertiary)}.t-preview_big{inline-size:4rem;block-size:4rem;margin-right:1rem}.t-preview_big:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";background:var(--tui-background-neutral-1)}.t-image{max-inline-size:100%;max-block-size:100%}.t-loader{position:absolute;top:0;left:0;inline-size:100%;block-size:100%}.t-icon{position:absolute;top:0;left:0;bottom:0;right:0;color:var(--tui-status-positive);margin:auto}.t-icon_blank{color:var(--tui-text-tertiary)}.t-icon_error{color:var(--tui-text-negative)}.t-remove{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.625rem;right:.625rem}.t-remove:focus{opacity:1}.t-remove:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}@media (hover: hover) and (pointer: fine){.t-remove{opacity:0}}.t-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;overflow:hidden;color:var(--tui-text-primary)}.t-text{display:flex}.t-size{flex-shrink:0;opacity:var(--tui-disabled-opacity);margin-left:.5rem}.t-type{flex-shrink:0}.t-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-content{font:var(--tui-font-text-s);color:var(--tui-text-negative)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "directive", type: TuiHintOverflow, selector: "[tuiHintOverflow]" }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }, { kind: "component", type: TuiLoader, selector: "tui-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    tuiPure
], TuiFile.prototype, "calculateContent$", null);
__decorate([
    tuiPure
], TuiFile.prototype, "calculateFileSize$", null);
__decorate([
    tuiPure
], TuiFile.prototype, "createPreview", null);
__decorate([
    tuiPure
], TuiFile.prototype, "getName", null);
__decorate([
    tuiPure
], TuiFile.prototype, "getType", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFile, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-file,a[tuiFile],button[tuiFile]', imports: [
                        CommonModule,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiButton,
                        TuiHintOverflow,
                        TuiIcon,
                        TuiLoader,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [tuiAppearanceOptionsProvider(TUI_FILE_OPTIONS)], hostDirectives: [TuiAppearance], host: {
                        '[attr.data-delete]': 'showDelete',
                    }, template: "<div\n    class=\"t-preview\"\n    [class.t-preview_big]=\"isBig\"\n>\n    <ng-container *polymorpheusOutlet=\"leftContent || defaultLeftContent as text\">\n        {{ text }}\n    </ng-container>\n</div>\n<div class=\"t-wrapper\">\n    <div class=\"t-text\">\n        <div\n            tuiHintOverflow\n            class=\"t-name\"\n        >\n            {{ name }}\n        </div>\n        <div class=\"t-type\">{{ type }}</div>\n        <div\n            *ngIf=\"showSize && (fileSize$ | async) as fileSize\"\n            class=\"t-size\"\n        >\n            {{ fileSize }}\n        </div>\n    </div>\n    <div\n        *ngIf=\"content$ | async as content\"\n        class=\"t-content\"\n    >\n        <ng-container *polymorpheusOutlet=\"content as text\">\n            {{ text }}\n        </ng-container>\n    </div>\n    <ng-content />\n</div>\n<ng-container *ngIf=\"allowDelete\">\n    <button\n        *ngIf=\"fileTexts$ | async as texts\"\n        appearance=\"icon\"\n        size=\"xs\"\n        tuiIconButton\n        type=\"button\"\n        class=\"t-remove\"\n        [iconStart]=\"icons.close\"\n        (click.prevent)=\"remove.emit()\"\n        (mousedown.prevent.silent)=\"(0)\"\n    >\n        {{ texts.remove }}\n    </button>\n</ng-container>\n\n<ng-template #defaultLeftContent>\n    <img\n        *ngIf=\"preview; else loader\"\n        alt=\"file preview\"\n        class=\"t-image\"\n        [src]=\"preview\"\n    />\n    <ng-template #loader>\n        <tui-loader\n            *ngIf=\"isLoading; else svg\"\n            class=\"t-loader\"\n            [inheritColor]=\"isBig\"\n        />\n    </ng-template>\n    <ng-template #svg>\n        <tui-icon\n            *polymorpheusOutlet=\"icon as src; context: {$implicit: size}\"\n            class=\"t-icon\"\n            [class.t-icon_blank]=\"isBig || isDeleted\"\n            [class.t-icon_error]=\"isError\"\n            [icon]=\"src.toString()\"\n        />\n    </ng-template>\n</ng-template>\n", styles: [":host{position:relative;display:flex;align-items:center;font:var(--tui-font-text-m);padding:.625rem 2.25rem .625rem .625rem;text-decoration:none;border-radius:var(--tui-radius-m)}:host:hover .t-remove,:host[data-delete=always] .t-remove{opacity:1}.t-preview{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;inline-size:1.5rem;block-size:1.5rem;margin-right:.75rem;border-radius:var(--tui-radius-m);overflow:hidden;color:var(--tui-text-tertiary)}.t-preview_big{inline-size:4rem;block-size:4rem;margin-right:1rem}.t-preview_big:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";background:var(--tui-background-neutral-1)}.t-image{max-inline-size:100%;max-block-size:100%}.t-loader{position:absolute;top:0;left:0;inline-size:100%;block-size:100%}.t-icon{position:absolute;top:0;left:0;bottom:0;right:0;color:var(--tui-status-positive);margin:auto}.t-icon_blank{color:var(--tui-text-tertiary)}.t-icon_error{color:var(--tui-text-negative)}.t-remove{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.625rem;right:.625rem}.t-remove:focus{opacity:1}.t-remove:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}@media (hover: hover) and (pointer: fine){.t-remove{opacity:0}}.t-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;overflow:hidden;color:var(--tui-text-primary)}.t-text{display:flex}.t-size{flex-shrink:0;opacity:var(--tui-disabled-opacity);margin-left:.5rem}.t-type{flex-shrink:0}.t-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-content{font:var(--tui-font-text-s);color:var(--tui-text-negative)}\n"] }]
        }], propDecorators: { file: [{
                type: Input
            }], state: [{
                type: Input
            }], size: [{
                type: Input
            }], showDelete: [{
                type: Input
            }], showSize: [{
                type: Input
            }], leftContent: [{
                type: Input
            }], remove: [{
                type: Output
            }], calculateContent$: [], calculateFileSize$: [], createPreview: [], getName: [], getType: [] } });

class TuiFilesComponent {
    constructor() {
        this.items = EMPTY_QUERY;
        this.hideText$ = inject(TUI_HIDE_TEXT);
        this.showAllText$ = inject(TUI_SHOW_ALL_TEXT);
        this.max = 0;
        this.expanded = false;
        this.expandedChange = new EventEmitter();
    }
    get hasExtraItems() {
        return !!this.max && this.items.length > this.max;
    }
    toggle() {
        this.expanded = !this.expanded;
        this.expandedChange.emit(this.expanded);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFilesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiFilesComponent, isStandalone: true, selector: "tui-files", inputs: { max: "max", expanded: "expanded" }, outputs: { expandedChange: "expandedChange" }, providers: [
            tuiGroupOptionsProvider({ size: 'm', collapsed: true, orientation: 'vertical' }),
        ], queries: [{ propertyName: "items", predicate: TuiItem, read: TemplateRef }], hostDirectives: [{ directive: i1$1.TuiGroup }], ngImport: i0, template: "<ng-container *ngIf=\"items?.changes | async\" />\n<ng-content />\n<ng-container *ngFor=\"let item of items; let index = index\">\n    <ng-container\n        *ngIf=\"!max || index < max\"\n        [ngTemplateOutlet]=\"item\"\n    />\n</ng-container>\n<tui-expand\n    *ngIf=\"hasExtraItems\"\n    [expanded]=\"expanded\"\n>\n    <div class=\"t-extra-items\">\n        <ng-container *ngFor=\"let item of items; let index = index\">\n            <ng-container\n                *ngIf=\"max && index >= max\"\n                [ngTemplateOutlet]=\"item\"\n            />\n        </ng-container>\n    </div>\n</tui-expand>\n<div\n    *ngIf=\"hasExtraItems\"\n    class=\"t-bottom\"\n    [class.t-bottom_collapsed]=\"!expanded\"\n>\n    <button\n        appearance=\"outline\"\n        size=\"m\"\n        tuiButton\n        type=\"button\"\n        class=\"t-button\"\n        (click)=\"toggle()\"\n    >\n        {{ (expanded ? hideText$ : showAllText$) | async }}\n    </button>\n</div>\n", styles: ["tui-files{inline-size:100%;overflow:hidden;border-radius:var(--tui-radius-m)}tui-files .t-files{position:relative;display:block;inline-size:100%;block-size:100%;border-radius:var(--tui-radius-m);overflow:hidden}tui-files .t-button{inline-size:100%;border-radius:inherit}tui-files .t-bottom{z-index:3;inline-size:100%;background:var(--tui-background-base)}tui-files .t-bottom_collapsed{box-shadow:var(--tui-shadow-popup);margin-top:-1.5rem}tui-files .t-extra-items tui-file,tui-files .t-extra-items a[tuiFile]{border-radius:0;margin-top:0;margin-bottom:-.0625rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "component", type: TuiExpandComponent, selector: "tui-expand", inputs: ["async", "expanded"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFilesComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-files', imports: [CommonModule, TuiButton, TuiExpandComponent], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        tuiGroupOptionsProvider({ size: 'm', collapsed: true, orientation: 'vertical' }),
                    ], hostDirectives: [TuiGroup], template: "<ng-container *ngIf=\"items?.changes | async\" />\n<ng-content />\n<ng-container *ngFor=\"let item of items; let index = index\">\n    <ng-container\n        *ngIf=\"!max || index < max\"\n        [ngTemplateOutlet]=\"item\"\n    />\n</ng-container>\n<tui-expand\n    *ngIf=\"hasExtraItems\"\n    [expanded]=\"expanded\"\n>\n    <div class=\"t-extra-items\">\n        <ng-container *ngFor=\"let item of items; let index = index\">\n            <ng-container\n                *ngIf=\"max && index >= max\"\n                [ngTemplateOutlet]=\"item\"\n            />\n        </ng-container>\n    </div>\n</tui-expand>\n<div\n    *ngIf=\"hasExtraItems\"\n    class=\"t-bottom\"\n    [class.t-bottom_collapsed]=\"!expanded\"\n>\n    <button\n        appearance=\"outline\"\n        size=\"m\"\n        tuiButton\n        type=\"button\"\n        class=\"t-button\"\n        (click)=\"toggle()\"\n    >\n        {{ (expanded ? hideText$ : showAllText$) | async }}\n    </button>\n</div>\n", styles: ["tui-files{inline-size:100%;overflow:hidden;border-radius:var(--tui-radius-m)}tui-files .t-files{position:relative;display:block;inline-size:100%;block-size:100%;border-radius:var(--tui-radius-m);overflow:hidden}tui-files .t-button{inline-size:100%;border-radius:inherit}tui-files .t-bottom{z-index:3;inline-size:100%;background:var(--tui-background-base)}tui-files .t-bottom_collapsed{box-shadow:var(--tui-shadow-popup);margin-top:-1.5rem}tui-files .t-extra-items tui-file,tui-files .t-extra-items a[tuiFile]{border-radius:0;margin-top:0;margin-bottom:-.0625rem}\n"] }]
        }], propDecorators: { items: [{
                type: ContentChildren,
                args: [TuiItem, { read: TemplateRef }]
            }], max: [{
                type: Input
            }], expanded: [{
                type: Input
            }], expandedChange: [{
                type: Output
            }] } });

class TuiInputFilesContent {
    constructor() {
        this.breakpoint$ = inject(TuiBreakpointService);
        this.text$ = inject(TUI_INPUT_FILE_TEXTS);
        this.context = injectContext();
        this.component = inject(TuiInputFiles);
    }
    get link$() {
        return this.computeLink$(this.context.$implicit, !!this.component.input?.input.multiple);
    }
    get label$() {
        return this.computeLabel$(this.context.$implicit, !!this.component.input?.input.multiple);
    }
    computeLink$(fileDragged, multiple) {
        return fileDragged
            ? of('')
            : this.text$.pipe(map((t) => (multiple ? t.defaultLinkMultiple : t.defaultLinkSingle)));
    }
    computeLabel$(fileDragged, multiple) {
        return fileDragged
            ? combineLatest([this.breakpoint$, this.text$]).pipe(map(([breakpoint, text]) => {
                if (breakpoint === 'mobile') {
                    return '';
                }
                return multiple ? text.dropMultiple : text.drop;
            }))
            : combineLatest([this.breakpoint$, this.text$]).pipe(map(([breakpoint, text]) => {
                if (breakpoint === 'mobile') {
                    return '';
                }
                return multiple
                    ? text.defaultLabelMultiple
                    : text.defaultLabelSingle;
            }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesContent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputFilesContent, isStandalone: true, selector: "ng-component", ngImport: i0, template: `
        <a tuiLink>{{ link$ | async }}</a>
        {{ label$ | async }}
    `, isInline: true, dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: TuiLink, selector: "a[tuiLink], button[tuiLink]", inputs: ["pseudo"] }], changeDetection: i0.ChangeDetectionStrategy.Default }); }
}
__decorate([
    tuiPure
], TuiInputFilesContent.prototype, "computeLink$", null);
__decorate([
    tuiPure
], TuiInputFilesContent.prototype, "computeLabel$", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesContent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    imports: [AsyncPipe, TuiLink],
                    template: `
        <a tuiLink>{{ link$ | async }}</a>
        {{ label$ | async }}
    `,
                    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
                    changeDetection: ChangeDetectionStrategy.Default,
                }]
        }], propDecorators: { computeLink$: [], computeLabel$: [] } });

const TUI_INPUT_FILES_DEFAULT_OPTIONS = {
    accept: '',
    multiple: false,
    size: 'm',
    maxFileSize: 30 * 1024 * 1024, // 30 MiB
};
/**
 * Default parameters for input files component
 */
const TUI_INPUT_FILES_OPTIONS = tuiCreateToken(TUI_INPUT_FILES_DEFAULT_OPTIONS);
function tuiInputFilesOptionsProvider(options) {
    return tuiProvideOptions(TUI_INPUT_FILES_OPTIONS, options, TUI_INPUT_FILES_DEFAULT_OPTIONS);
}

class TuiInputFilesValidator {
    constructor() {
        this.options = inject(TUI_INPUT_FILES_OPTIONS);
        this.validator = inject(TuiValidator);
        this.accept = this.options.accept;
        this.maxFileSize = this.options.maxFileSize;
    }
    ngOnChanges() {
        this.validate();
    }
    ngOnInit() {
        this.validate();
    }
    validate() {
        this.validator.tuiValidator =
            Validators.compose([
                tuiCreateFileFormatValidator(this.accept),
                tuiCreateFileSizeValidator(this.maxFileSize),
            ]) || Validators.nullValidator;
        this.validator.ngOnChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputFilesValidator, isStandalone: true, inputs: { accept: "accept", maxFileSize: "maxFileSize" }, host: { properties: { "accept": "accept" } }, exportAs: ["tuiInputFilesValidator"], usesOnChanges: true, hostDirectives: [{ directive: i1$2.TuiValidator }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesValidator, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    exportAs: 'tuiInputFilesValidator',
                    hostDirectives: [TuiValidator],
                    host: {
                        '[accept]': 'accept',
                    },
                }]
        }], propDecorators: { accept: [{
                type: Input
            }], maxFileSize: [{
                type: Input
            }] } });

class TuiInputFilesDirective extends TuiControl {
    constructor() {
        super(...arguments);
        this.host = inject(forwardRef(() => TuiInputFiles));
        this.reject = timer(0, tuiZonefreeScheduler()).pipe(switchMap(() => tuiControlValue(this.control.control)), map(() => tuiFilesRejected(this.control.control)), filter(({ length }) => !!length));
        this.appearance = 'file';
        this.input = tuiInjectElement();
    }
    process(files) {
        const fileOrFiles = this.input.multiple
            ? [...toArray(this.value()), ...Array.from(files)]
            : files[0];
        if (fileOrFiles) {
            this.onChange(fileOrFiles);
        }
    }
    onClick(event) {
        if (this.input.readOnly) {
            event.preventDefault();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputFilesDirective, isStandalone: true, selector: "input[tuiInputFiles]", outputs: { reject: "reject" }, host: { attributes: { "type": "file" }, listeners: { "blur": "onTouched()", "click": "onClick($event)" }, properties: { "disabled": "disabled()" } }, providers: [
            tuiAsControl(TuiInputFilesDirective),
            tuiAppearanceOptionsProvider(TuiInputFilesDirective),
        ], usesInheritance: true, hostDirectives: [{ directive: i1$3.TuiNativeValidator }, { directive: i1.TuiWithAppearance }, { directive: TuiInputFilesValidator, inputs: ["accept", "accept", "maxFileSize", "maxFileSize"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[tuiInputFiles]',
                    providers: [
                        tuiAsControl(TuiInputFilesDirective),
                        tuiAppearanceOptionsProvider(TuiInputFilesDirective),
                    ],
                    hostDirectives: [
                        TuiNativeValidator,
                        TuiWithAppearance,
                        {
                            directive: TuiInputFilesValidator,
                            inputs: ['accept', 'maxFileSize'],
                        },
                    ],
                    host: {
                        type: 'file',
                        '[disabled]': 'disabled()',
                        '(blur)': 'onTouched()',
                        '(click)': 'onClick($event)',
                    },
                }]
        }], propDecorators: { reject: [{
                type: Output
            }] } });
function toArray(value) {
    return value ? coerceArray(value) : EMPTY_ARRAY;
}

class TuiInputFiles {
    constructor() {
        this.content = new PolymorpheusComponent(TuiInputFilesContent);
    }
    get fileDragged() {
        return !!this.files && !this.input?.disabled();
    }
    onFilesSelected(input) {
        if (!input?.files) {
            return;
        }
        this.input?.process(input.files);
        input.value = '';
    }
    onDropped({ dataTransfer }) {
        this.files = null;
        if (dataTransfer?.files && !this.input?.disabled()) {
            this.input?.process(dataTransfer.files);
        }
    }
    onDrag(dataTransfer) {
        this.files = dataTransfer?.files;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFiles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputFiles, isStandalone: true, selector: "label[tuiInputFiles]", host: { listeners: { "dragover.prevent.silent": "0", "drop.prevent": "onDropped($event)", "dragenter": "onDrag($event.dataTransfer)", "dragleave": "onDrag(null)", "change": "onFilesSelected($event.target)" }, properties: { "class._dragged": "fileDragged" } }, queries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true }, { propertyName: "input", first: true, predicate: TuiInputFilesDirective, descendants: true }], ngImport: i0, template: `
        <ng-content></ng-content>
        <span
            *polymorpheusOutlet="
                template || content as text;
                context: {$implicit: fileDragged}
            "
        >
            {{ text }}
        </span>
    `, isInline: true, styles: ["label[tuiInputFiles]{position:relative;display:flex;min-block-size:var(--tui-height-l);justify-content:center;align-items:center;text-align:center;border-radius:var(--tui-radius-m);font:var(--tui-font-text-m);overflow-wrap:break-word;padding:0 .5rem}label[tuiInputFiles]>:not(input){position:relative;pointer-events:none}label[tuiInputFiles] input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;color:transparent;cursor:pointer}label[tuiInputFiles] input:disabled~*{opacity:var(--tui-disabled-opacity)}label[tuiInputFiles] input::-webkit-file-upload-button{display:none}label[tuiInputFiles] input::file-selector-button{display:none}*:disabled label[tuiInputFiles]{pointer-events:none}[tuiAppearance][data-appearance=file]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;border-radius:inherit;box-sizing:border-box;border:1px dashed var(--tui-text-action);outline:none}tui-root._mobile [tuiAppearance][data-appearance=file]{border-style:solid}[tuiInputFiles]._dragged [tuiAppearance][data-appearance=file]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=file]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=file]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}[tuiAppearance][data-appearance=file][data-state=hover]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=file][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=hover]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}[tuiAppearance][data-appearance=file]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file][data-state=active]{background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=file][tuiWrapper][data-state=active]:hover{background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file]:disabled:not([data-state]),[tuiAppearance][data-appearance=file][data-state=disabled]{background:transparent;border-color:var(--tui-text-tertiary)}[tuiAppearance][data-appearance=file][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=disabled]{background:transparent;border-color:var(--tui-text-tertiary)}[tuiAppearance][data-appearance=file]:focus-visible:not([data-focus=false]){border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file][data-focus=true]{border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][data-appearance=file][tuiWrapper]._focused{border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file]:invalid{border-color:var(--tui-status-negative)!important}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFiles, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'label[tuiInputFiles]', imports: [PolymorpheusOutlet, PolymorpheusTemplate], template: `
        <ng-content></ng-content>
        <span
            *polymorpheusOutlet="
                template || content as text;
                context: {$implicit: fileDragged}
            "
        >
            {{ text }}
        </span>
    `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '(dragover.prevent.silent)': '0',
                        '(drop.prevent)': 'onDropped($event)',
                        '(dragenter)': 'onDrag($event.dataTransfer)',
                        '(dragleave)': 'onDrag(null)',
                        '[class._dragged]': 'fileDragged',
                        '(change)': 'onFilesSelected($event.target)',
                    }, styles: ["label[tuiInputFiles]{position:relative;display:flex;min-block-size:var(--tui-height-l);justify-content:center;align-items:center;text-align:center;border-radius:var(--tui-radius-m);font:var(--tui-font-text-m);overflow-wrap:break-word;padding:0 .5rem}label[tuiInputFiles]>:not(input){position:relative;pointer-events:none}label[tuiInputFiles] input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;color:transparent;cursor:pointer}label[tuiInputFiles] input:disabled~*{opacity:var(--tui-disabled-opacity)}label[tuiInputFiles] input::-webkit-file-upload-button{display:none}label[tuiInputFiles] input::file-selector-button{display:none}*:disabled label[tuiInputFiles]{pointer-events:none}[tuiAppearance][data-appearance=file]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;border-radius:inherit;box-sizing:border-box;border:1px dashed var(--tui-text-action);outline:none}tui-root._mobile [tuiAppearance][data-appearance=file]{border-style:solid}[tuiInputFiles]._dragged [tuiAppearance][data-appearance=file]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=file]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=file]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}[tuiAppearance][data-appearance=file][data-state=hover]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}@media (hover: hover) and (pointer: fine){[tuiAppearance][data-appearance=file][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=hover]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}[tuiAppearance][data-appearance=file]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file][data-state=active]{background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=file][tuiWrapper][data-state=active]:hover{background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file]:disabled:not([data-state]),[tuiAppearance][data-appearance=file][data-state=disabled]{background:transparent;border-color:var(--tui-text-tertiary)}[tuiAppearance][data-appearance=file][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=disabled]{background:transparent;border-color:var(--tui-text-tertiary)}[tuiAppearance][data-appearance=file]:focus-visible:not([data-focus=false]){border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file][data-focus=true]{border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][data-appearance=file][tuiWrapper]._focused{border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file]:invalid{border-color:var(--tui-status-negative)!important}\n"] }]
        }], propDecorators: { template: [{
                type: ContentChild,
                args: [TemplateRef]
            }], input: [{
                type: ContentChild,
                args: [TuiInputFilesDirective]
            }] } });

class TuiFileRejectedPipe {
    constructor() {
        this.options = inject(TUI_INPUT_FILES_OPTIONS);
        this.formatSize = inject(TUI_FILE_OPTIONS).formatSize;
        this.text$ = inject(TUI_INPUT_FILE_TEXTS);
        this.unit$ = inject(TUI_DIGITAL_INFORMATION_UNITS);
    }
    transform(file, { accept = this.options.accept, maxFileSize = this.options.maxFileSize, } = this.options) {
        const sizeValidator = tuiCreateFileSizeValidator(maxFileSize);
        const formatValidator = tuiCreateFileFormatValidator(accept);
        const control = new FormControl(file);
        return combineLatest([this.text$, this.unit$]).pipe(map(([{ maxSizeRejectionReason, formatRejectionReason }, units]) => {
            if (file && formatValidator(control)) {
                return {
                    name: file.name,
                    size: file.size,
                    content: formatRejectionReason,
                };
            }
            if (file && sizeValidator(control)) {
                return {
                    name: file.name,
                    size: file.size,
                    content: `${maxSizeRejectionReason}${CHAR_NO_BREAK_SPACE}${this.formatSize(units, maxFileSize)}`,
                };
            }
            return null;
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFileRejectedPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiFileRejectedPipe, isStandalone: true, name: "tuiFileRejected" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFileRejectedPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiFileRejected',
                }]
        }] });

const TuiFiles = [
    TuiItem,
    TuiFile,
    TuiInputFiles,
    TuiFilesComponent,
    TuiFileRejectedPipe,
    TuiInputFilesDirective,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_FILE_DEFAULT_OPTIONS, TUI_FILE_OPTIONS, TUI_FORMAT_ERROR, TUI_INPUT_FILES_DEFAULT_OPTIONS, TUI_INPUT_FILES_OPTIONS, TUI_SIZE_ERROR, TuiFile, TuiFileRejectedPipe, TuiFiles, TuiFilesComponent, TuiInputFiles, TuiInputFilesContent, TuiInputFilesDirective, TuiInputFilesValidator, tuiCreateFileFormatValidator, tuiCreateFileSizeValidator, tuiFileOptionsProvider, tuiFilesAccepted, tuiFilesRejected, tuiFormatSize, tuiInputFilesOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-files.mjs.map
