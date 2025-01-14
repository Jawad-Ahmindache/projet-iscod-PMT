import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { TUI_TABLE_PAGINATION_TEXTS } from '@taiga-ui/addon-table/tokens';
import { TuiButton } from '@taiga-ui/core/components/button';
import * as i1 from '@taiga-ui/core/components/data-list';
import { TuiDataList } from '@taiga-ui/core/components/data-list';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TuiLink } from '@taiga-ui/core/components/link';
import { TuiDropdownDirective, TuiDropdownOpen } from '@taiga-ui/core/directives/dropdown';
import { TUI_SPIN_ICONS, TUI_SPIN_TEXTS, TUI_COMMON_ICONS } from '@taiga-ui/core/tokens';
import { PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';

function defaultSizeOptionContent({ $implicit }) {
    return `${$implicit}`;
}
const TUI_TABLE_PAGINATION_DEFAULT_OPTIONS = {
    sizeOptionContent: defaultSizeOptionContent,
    showPages: true,
    items: [10, 20, 50, 100],
    size: 10,
};
/**
 * Default parameters for TablePagination component
 */
const TUI_TABLE_PAGINATION_OPTIONS = tuiCreateToken(TUI_TABLE_PAGINATION_DEFAULT_OPTIONS);
function tuiTablePaginationOptionsProvider(options) {
    return tuiProvideOptions(TUI_TABLE_PAGINATION_OPTIONS, options, TUI_TABLE_PAGINATION_DEFAULT_OPTIONS);
}

class TuiTablePagination {
    constructor() {
        this.options = inject(TUI_TABLE_PAGINATION_OPTIONS);
        this.open = false;
        this.icons = inject(TUI_SPIN_ICONS);
        this.spinTexts$ = inject(TUI_SPIN_TEXTS);
        this.texts$ = inject(TUI_TABLE_PAGINATION_TEXTS);
        this.commonIcons = inject(TUI_COMMON_ICONS);
        this.items = this.options.items;
        this.total = 0;
        this.page = 0;
        this.size = this.options.size;
        this.paginationChange = new EventEmitter();
    }
    onItem(size) {
        const { start } = this;
        this.size = size;
        this.open = false;
        this.page = Math.floor(start / this.size);
        this.paginationChange.emit(this.pagination);
    }
    get pages() {
        return Math.ceil(this.total / this.size);
    }
    get showPages() {
        return this.options.showPages;
    }
    get sizeOptionContent() {
        return this.options.sizeOptionContent;
    }
    get start() {
        return Math.min(this.page * this.size, Math.max(this.total - this.size, 0));
    }
    get end() {
        return Math.min(this.start + this.size, this.total);
    }
    get leftDisabled() {
        return !this.start;
    }
    get rightDisabled() {
        return this.end === this.total;
    }
    get pagination() {
        return {
            page: this.page,
            size: this.size,
        };
    }
    back() {
        this.page--;
        this.paginationChange.emit(this.pagination);
    }
    forth() {
        this.page++;
        this.paginationChange.emit(this.pagination);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTablePagination, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTablePagination, isStandalone: true, selector: "tui-table-pagination", inputs: { items: "items", total: "total", page: "page", size: "size" }, outputs: { paginationChange: "paginationChange" }, ngImport: i0, template: "<ng-container *ngIf=\"texts$ | async as texts\">\n    <span class=\"t-pages\">\n        <ng-container *ngIf=\"showPages\">\n            {{ texts.pages }}\n            <strong class=\"t-strong\">{{ pages }}</strong>\n        </ng-container>\n    </span>\n    <span automation-id=\"tui-table-pagination__lines-per-page-wrapper\">\n        {{ texts.linesPerPage }}\n\n        <button\n            *ngIf=\"total !== 0; else zeroTotal\"\n            tuiLink\n            type=\"button\"\n            [tuiDropdown]=\"content\"\n            [(tuiDropdownOpen)]=\"open\"\n        >\n            <strong>{{ start + 1 }}\u2013{{ end }}</strong>\n        </button>\n        <ng-template #zeroTotal>\n            <strong>0 - 0</strong>\n        </ng-template>\n        <ng-template #content>\n            <tui-data-list size=\"s\">\n                <ng-container *ngFor=\"let item of items\">\n                    <button\n                        tuiOption\n                        type=\"button\"\n                        class=\"t-item\"\n                        (click)=\"onItem(item)\"\n                    >\n                        <ng-container\n                            *polymorpheusOutlet=\"sizeOptionContent as text; context: {$implicit: item, total: total}\"\n                        >\n                            {{ text }}\n                        </ng-container>\n                        <tui-icon\n                            *ngIf=\"item === size; else fakeIcon\"\n                            class=\"t-checkmark\"\n                            [icon]=\"commonIcons.check\"\n                        />\n\n                        <ng-template #fakeIcon>\n                            <span class=\"t-checkmark\"></span>\n                        </ng-template>\n                    </button>\n                </ng-container>\n            </tui-data-list>\n        </ng-template>\n        {{ texts.of }}\n        <strong class=\"t-strong\">{{ total }}</strong>\n    </span>\n    <ng-container *ngIf=\"spinTexts$ | async as spinTexts\">\n        <button\n            appearance=\"icon\"\n            size=\"xs\"\n            tuiIconButton\n            type=\"button\"\n            class=\"t-back\"\n            [disabled]=\"leftDisabled\"\n            [iconStart]=\"icons.decrement\"\n            (click)=\"back()\"\n        >\n            {{ spinTexts[0] }}\n        </button>\n        <button\n            appearance=\"icon\"\n            size=\"xs\"\n            tuiIconButton\n            type=\"button\"\n            [disabled]=\"rightDisabled\"\n            [iconStart]=\"icons.increment\"\n            (click)=\"forth()\"\n        >\n            {{ spinTexts[1] }}\n        </button>\n    </ng-container>\n</ng-container>\n", styles: [":host{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-tertiary)}.t-strong{color:var(--tui-text-primary)}.t-pages{margin-right:auto}.t-item{min-inline-size:5.5rem;box-sizing:border-box}.t-checkmark{min-inline-size:1rem;font-size:1rem;margin-inline-start:.25rem}.t-back{margin:0 .25rem 0 1.5rem}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "component", type: i1.TuiDataListComponent, selector: "tui-data-list", inputs: ["emptyContent", "size"] }, { kind: "component", type: i1.TuiOption, selector: "button[tuiOption], a[tuiOption], label[tuiOption]", inputs: ["disabled", "value"] }, { kind: "directive", type: TuiDropdownDirective, selector: "[tuiDropdown]:not(ng-container):not(ng-template)", inputs: ["tuiDropdown"], exportAs: ["tuiDropdown"] }, { kind: "directive", type: TuiDropdownOpen, selector: "[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]", inputs: ["tuiDropdownEnabled", "tuiDropdownOpen"], outputs: ["tuiDropdownOpenChange"] }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }, { kind: "directive", type: TuiLink, selector: "a[tuiLink], button[tuiLink]", inputs: ["pseudo"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTablePagination, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-table-pagination', imports: [
                        AsyncPipe,
                        NgForOf,
                        NgIf,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiButton,
                        TuiDataList,
                        TuiDropdownDirective,
                        TuiDropdownOpen,
                        TuiIcon,
                        TuiLink,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"texts$ | async as texts\">\n    <span class=\"t-pages\">\n        <ng-container *ngIf=\"showPages\">\n            {{ texts.pages }}\n            <strong class=\"t-strong\">{{ pages }}</strong>\n        </ng-container>\n    </span>\n    <span automation-id=\"tui-table-pagination__lines-per-page-wrapper\">\n        {{ texts.linesPerPage }}\n\n        <button\n            *ngIf=\"total !== 0; else zeroTotal\"\n            tuiLink\n            type=\"button\"\n            [tuiDropdown]=\"content\"\n            [(tuiDropdownOpen)]=\"open\"\n        >\n            <strong>{{ start + 1 }}\u2013{{ end }}</strong>\n        </button>\n        <ng-template #zeroTotal>\n            <strong>0 - 0</strong>\n        </ng-template>\n        <ng-template #content>\n            <tui-data-list size=\"s\">\n                <ng-container *ngFor=\"let item of items\">\n                    <button\n                        tuiOption\n                        type=\"button\"\n                        class=\"t-item\"\n                        (click)=\"onItem(item)\"\n                    >\n                        <ng-container\n                            *polymorpheusOutlet=\"sizeOptionContent as text; context: {$implicit: item, total: total}\"\n                        >\n                            {{ text }}\n                        </ng-container>\n                        <tui-icon\n                            *ngIf=\"item === size; else fakeIcon\"\n                            class=\"t-checkmark\"\n                            [icon]=\"commonIcons.check\"\n                        />\n\n                        <ng-template #fakeIcon>\n                            <span class=\"t-checkmark\"></span>\n                        </ng-template>\n                    </button>\n                </ng-container>\n            </tui-data-list>\n        </ng-template>\n        {{ texts.of }}\n        <strong class=\"t-strong\">{{ total }}</strong>\n    </span>\n    <ng-container *ngIf=\"spinTexts$ | async as spinTexts\">\n        <button\n            appearance=\"icon\"\n            size=\"xs\"\n            tuiIconButton\n            type=\"button\"\n            class=\"t-back\"\n            [disabled]=\"leftDisabled\"\n            [iconStart]=\"icons.decrement\"\n            (click)=\"back()\"\n        >\n            {{ spinTexts[0] }}\n        </button>\n        <button\n            appearance=\"icon\"\n            size=\"xs\"\n            tuiIconButton\n            type=\"button\"\n            [disabled]=\"rightDisabled\"\n            [iconStart]=\"icons.increment\"\n            (click)=\"forth()\"\n        >\n            {{ spinTexts[1] }}\n        </button>\n    </ng-container>\n</ng-container>\n", styles: [":host{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-tertiary)}.t-strong{color:var(--tui-text-primary)}.t-pages{margin-right:auto}.t-item{min-inline-size:5.5rem;box-sizing:border-box}.t-checkmark{min-inline-size:1rem;font-size:1rem;margin-inline-start:.25rem}.t-back{margin:0 .25rem 0 1.5rem}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }], total: [{
                type: Input
            }], page: [{
                type: Input
            }], size: [{
                type: Input
            }], paginationChange: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_TABLE_PAGINATION_DEFAULT_OPTIONS, TUI_TABLE_PAGINATION_OPTIONS, TuiTablePagination, tuiTablePaginationOptionsProvider };
//# sourceMappingURL=taiga-ui-addon-table-components-table-pagination.mjs.map
