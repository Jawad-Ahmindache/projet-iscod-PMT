import { AsyncPipe, NgForOf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, EventEmitter, Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { TUI_TABLE_SHOW_HIDE_MESSAGE } from '@taiga-ui/addon-table/tokens';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import * as i1 from '@taiga-ui/kit/components/tiles';
import { TuiTiles } from '@taiga-ui/kit/components/tiles';
import { PolymorpheusOutlet, PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';

const TUI_REORDER_DEFAULT_OPTIONS = {
    icons: {
        hide: '@tui.eye-off',
        show: '@tui.eye',
        drag: '@tui.grip-vertical',
    },
};
const TUI_REORDER_OPTIONS = tuiCreateToken(TUI_REORDER_DEFAULT_OPTIONS);
function tuiReorderOptionsProvider(options) {
    return tuiProvideOptions(TUI_REORDER_OPTIONS, options, TUI_REORDER_DEFAULT_OPTIONS);
}

class TuiReorder {
    constructor() {
        this.dragging = false;
        this.order = new Map();
        this.unsortedItems = [];
        this.options = inject(TUI_REORDER_OPTIONS);
        this.showHideText$ = inject(TUI_TABLE_SHOW_HIDE_MESSAGE);
        this.enabled = [];
        this.itemsChange = new EventEmitter();
        this.enabledChange = new EventEmitter();
        this.content = ({ $implicit, }) => String($implicit);
    }
    set items(items) {
        if (items.length !== this.unsortedItems.length ||
            !items.every((item) => this.unsortedItems.includes(item))) {
            this.unsortedItems = items;
        }
    }
    onDrag() {
        this.dragging = true;
    }
    onDrop() {
        if (!this.dragging) {
            return;
        }
        this.dragging = false;
        this.updateItems();
    }
    isEnabled(item) {
        return this.enabled.includes(item);
    }
    getIcon(item) {
        return this.isEnabled(item) ? this.options.icons.hide : this.options.icons.show;
    }
    toggle(toggled) {
        this.enabled = this.isEnabled(toggled)
            ? this.enabled.filter((item) => item !== toggled)
            : this.enabled.concat(toggled);
        this.updateEnabled();
    }
    move(index, direction) {
        const oldIndex = this.order.get(index) ?? index;
        if ((!oldIndex && direction < 0) ||
            (oldIndex === this.unsortedItems.length - 1 && direction > 0)) {
            return;
        }
        const newIndex = oldIndex + direction;
        const oldItem = Array.from(this.order.values()).findIndex((item) => item === newIndex);
        this.order.set(index, newIndex);
        this.order.set(oldItem, oldIndex);
        this.order = new Map(this.order);
        this.updateItems();
    }
    getSortedItems() {
        const items = new Array(this.unsortedItems.length);
        this.unsortedItems.forEach((item, index) => {
            items[this.order.get(index) ?? index] = item;
        });
        return items;
    }
    updateItems() {
        this.itemsChange.emit(this.getSortedItems());
        this.updateEnabled();
    }
    updateEnabled() {
        const enabled = this.getSortedItems().filter((item) => this.isEnabled(item));
        this.enabled = enabled;
        this.enabledChange.emit(enabled);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiReorder, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiReorder, isStandalone: true, selector: "tui-reorder", inputs: { enabled: "enabled", items: "items", content: "content" }, outputs: { itemsChange: "itemsChange", enabledChange: "enabledChange" }, host: { listeners: { "focusout.stop": "(0)", "pointerdown.silent": "onDrag()", "document:pointerup.silent": "onDrop()" } }, ngImport: i0, template: "<tui-tiles\n    class=\"t-wrapper\"\n    [(order)]=\"order\"\n>\n    <tui-tile\n        *ngFor=\"let item of unsortedItems; let index = index\"\n        [style.order]=\"order.get(index)\"\n    >\n        <div\n            class=\"t-item\"\n            [class.t-item_disabled]=\"!isEnabled(item)\"\n        >\n            <div\n                tuiTileHandle\n                class=\"t-draggable\"\n            >\n                <tui-icon\n                    class=\"t-icon\"\n                    [icon]=\"options.icons.drag\"\n                />\n                <ng-container *polymorpheusOutlet=\"content as template; context: {$implicit: item, index: index}\">\n                    {{ template }}\n                </ng-container>\n            </div>\n            <button\n                appearance=\"icon\"\n                size=\"xs\"\n                tuiIconButton\n                type=\"button\"\n                class=\"t-button\"\n                [iconStart]=\"getIcon(item)\"\n                (click)=\"toggle(item)\"\n                (keydown.arrowDown.prevent)=\"move(index, 1)\"\n                (keydown.arrowUp.prevent)=\"move(index, -1)\"\n            >\n                {{ showHideText$ | async }}\n            </button>\n        </div>\n    </tui-tile>\n</tui-tiles>\n", styles: [":host{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper{grid-auto-rows:2rem}.t-draggable{cursor:ns-resize;flex:1 1 auto}.t-item{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;block-size:2rem;align-items:center;padding:0 .75rem;background:var(--tui-background-base)}.t-item_disabled{opacity:var(--tui-disabled-opacity)}.t-item_disabled .t-button{color:var(--tui-text-primary);opacity:1}.t-item:hover{background:var(--tui-background-base-alt)}.t-item:hover .t-button{opacity:1}.t-icon{margin-right:.5rem;color:var(--tui-text-tertiary);border-width:.25rem}.t-button{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button:focus{opacity:1}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }, { kind: "component", type: i1.TuiTilesComponent, selector: "tui-tiles", inputs: ["debounce", "order"], outputs: ["orderChange"] }, { kind: "component", type: i1.TuiTile, selector: "tui-tile", inputs: ["width", "height"] }, { kind: "directive", type: i1.TuiTileHandle, selector: "[tuiTileHandle]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiReorder, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-reorder', imports: [
                        AsyncPipe,
                        NgForOf,
                        PolymorpheusOutlet,
                        PolymorpheusTemplate,
                        TuiButton,
                        TuiIcon,
                        TuiTiles,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '(focusout.stop)': '(0)',
                        '(pointerdown.silent)': 'onDrag()',
                        '(document:pointerup.silent)': 'onDrop()',
                    }, template: "<tui-tiles\n    class=\"t-wrapper\"\n    [(order)]=\"order\"\n>\n    <tui-tile\n        *ngFor=\"let item of unsortedItems; let index = index\"\n        [style.order]=\"order.get(index)\"\n    >\n        <div\n            class=\"t-item\"\n            [class.t-item_disabled]=\"!isEnabled(item)\"\n        >\n            <div\n                tuiTileHandle\n                class=\"t-draggable\"\n            >\n                <tui-icon\n                    class=\"t-icon\"\n                    [icon]=\"options.icons.drag\"\n                />\n                <ng-container *polymorpheusOutlet=\"content as template; context: {$implicit: item, index: index}\">\n                    {{ template }}\n                </ng-container>\n            </div>\n            <button\n                appearance=\"icon\"\n                size=\"xs\"\n                tuiIconButton\n                type=\"button\"\n                class=\"t-button\"\n                [iconStart]=\"getIcon(item)\"\n                (click)=\"toggle(item)\"\n                (keydown.arrowDown.prevent)=\"move(index, 1)\"\n                (keydown.arrowUp.prevent)=\"move(index, -1)\"\n            >\n                {{ showHideText$ | async }}\n            </button>\n        </div>\n    </tui-tile>\n</tui-tiles>\n", styles: [":host{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;user-select:none}.t-wrapper{grid-auto-rows:2rem}.t-draggable{cursor:ns-resize;flex:1 1 auto}.t-item{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;block-size:2rem;align-items:center;padding:0 .75rem;background:var(--tui-background-base)}.t-item_disabled{opacity:var(--tui-disabled-opacity)}.t-item_disabled .t-button{color:var(--tui-text-primary);opacity:1}.t-item:hover{background:var(--tui-background-base-alt)}.t-item:hover .t-button{opacity:1}.t-icon{margin-right:.5rem;color:var(--tui-text-tertiary);border-width:.25rem}.t-button{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button:focus{opacity:1}\n"] }]
        }], propDecorators: { enabled: [{
                type: Input
            }], itemsChange: [{
                type: Output
            }], enabledChange: [{
                type: Output
            }], items: [{
                type: Input
            }], content: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_REORDER_DEFAULT_OPTIONS, TUI_REORDER_OPTIONS, TuiReorder, tuiReorderOptionsProvider };
//# sourceMappingURL=taiga-ui-addon-table-components-reorder.mjs.map
