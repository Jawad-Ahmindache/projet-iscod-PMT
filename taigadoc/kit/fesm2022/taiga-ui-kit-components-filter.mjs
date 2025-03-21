import { NgForOf, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TuiControl } from '@taiga-ui/cdk/classes';
import { TUI_DEFAULT_IDENTITY_MATCHER, TUI_FALSE_HANDLER } from '@taiga-ui/cdk/constants';
import { tuiFallbackValueProvider } from '@taiga-ui/cdk/tokens';
import { TuiHintOverflow } from '@taiga-ui/core/directives/hint';
import { TuiBadge } from '@taiga-ui/kit/components/badge';
import { TUI_BLOCK_OPTIONS, TuiBlock } from '@taiga-ui/kit/components/block';
import { PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';

class TuiFilter extends TuiControl {
    constructor() {
        super(...arguments);
        this.identityMatcher = TUI_DEFAULT_IDENTITY_MATCHER;
        this.items = [];
        this.size = inject(TUI_BLOCK_OPTIONS).size;
        this.disabledItemHandler = TUI_FALSE_HANDLER;
        this.toggledItem = new EventEmitter();
        this.content = ({ $implicit }) => String($implicit);
        this.badgeHandler = (item) => Number(item);
    }
    onCheckbox(value, item) {
        this.toggledItem.emit(item);
        this.onChange(value
            ? [...this.value(), item]
            : this.value().filter((arrItem) => !this.identityMatcher(arrItem, item)));
    }
    isCheckboxEnabled(item) {
        return this.value().some((arrItem) => this.identityMatcher(arrItem, item));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFilter, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiFilter, isStandalone: true, selector: "tui-filter", inputs: { identityMatcher: "identityMatcher", items: "items", size: "size", disabledItemHandler: "disabledItemHandler", content: "content", badgeHandler: "badgeHandler" }, outputs: { toggledItem: "toggledItem" }, host: { properties: { "attr.data-size": "size" } }, providers: [tuiFallbackValueProvider([])], usesInheritance: true, ngImport: i0, template: "<label\n    *ngFor=\"let item of items\"\n    appearance=\"\"\n    class=\"t-item\"\n    [tuiBlock]=\"size\"\n>\n    <span\n        *polymorpheusOutlet=\"content as text; context: {$implicit: item}\"\n        tuiHintOverflow\n        class=\"t-text\"\n    >\n        {{ text }}\n    </span>\n    <tui-badge\n        *ngIf=\"badgeHandler(item) as badgeValue\"\n        appearance=\"neutral\"\n        [size]=\"size\"\n    >\n        {{ badgeValue }}\n    </tui-badge>\n    <input\n        tuiBlock\n        type=\"checkbox\"\n        [disabled]=\"disabledItemHandler(item)\"\n        [ngModel]=\"isCheckboxEnabled(item)\"\n        [ngModelOptions]=\"{standalone: true}\"\n        (ngModelChange)=\"onCheckbox($event, item)\"\n    />\n</label>\n", styles: [":host{display:block;margin-bottom:calc(-1 * var(--t-gap));--t-gap: .25rem}:host[data-size=l]{--t-gap: .5rem}.t-item{max-inline-size:11rem;margin:0 var(--t-gap) var(--t-gap) 0}.t-item:last-child{margin-right:0}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiBadge, selector: "tui-badge,[tuiBadge]", inputs: ["size"] }, { kind: "directive", type: TuiBlock, selector: "label[tuiBlock],input[tuiBlock]", inputs: ["tuiBlock"] }, { kind: "directive", type: TuiHintOverflow, selector: "[tuiHintOverflow]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFilter, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-filter', imports: [
                        FormsModule,
                        NgForOf,
                        NgIf,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiBadge,
                        TuiBlock,
                        TuiHintOverflow,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [tuiFallbackValueProvider([])], host: {
                        '[attr.data-size]': 'size',
                    }, template: "<label\n    *ngFor=\"let item of items\"\n    appearance=\"\"\n    class=\"t-item\"\n    [tuiBlock]=\"size\"\n>\n    <span\n        *polymorpheusOutlet=\"content as text; context: {$implicit: item}\"\n        tuiHintOverflow\n        class=\"t-text\"\n    >\n        {{ text }}\n    </span>\n    <tui-badge\n        *ngIf=\"badgeHandler(item) as badgeValue\"\n        appearance=\"neutral\"\n        [size]=\"size\"\n    >\n        {{ badgeValue }}\n    </tui-badge>\n    <input\n        tuiBlock\n        type=\"checkbox\"\n        [disabled]=\"disabledItemHandler(item)\"\n        [ngModel]=\"isCheckboxEnabled(item)\"\n        [ngModelOptions]=\"{standalone: true}\"\n        (ngModelChange)=\"onCheckbox($event, item)\"\n    />\n</label>\n", styles: [":host{display:block;margin-bottom:calc(-1 * var(--t-gap));--t-gap: .25rem}:host[data-size=l]{--t-gap: .5rem}.t-item{max-inline-size:11rem;margin:0 var(--t-gap) var(--t-gap) 0}.t-item:last-child{margin-right:0}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"] }]
        }], propDecorators: { identityMatcher: [{
                type: Input
            }], items: [{
                type: Input
            }], size: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], toggledItem: [{
                type: Output
            }], content: [{
                type: Input
            }], badgeHandler: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiFilter };
//# sourceMappingURL=taiga-ui-kit-components-filter.mjs.map
