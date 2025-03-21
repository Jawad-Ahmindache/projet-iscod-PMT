import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { inject, Pipe } from '@angular/core';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk/constants';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_DATA_LIST_HOST } from '@taiga-ui/core/components/data-list';
import { TuiTextfieldComponent } from '@taiga-ui/core/components/textfield';
import { tuiIsFlat } from '@taiga-ui/kit/utils';

// TODO: Consider replacing TuiTextfieldComponent with proper token once we refactor textfields
class TuiFilterByInputPipe {
    constructor() {
        // TODO: Remove optional after legacy controls are dropped
        this.textfield = inject(TuiTextfieldComponent, { optional: true });
        this.host = inject(TUI_DATA_LIST_HOST);
    }
    transform(items, matcher = TUI_DEFAULT_MATCHER) {
        return this.filter(items, matcher, this.host.stringify || String, this.textfield?.input?.nativeElement.value ||
            this.host.nativeFocusableElement?.value ||
            '');
    }
    filter(items, matcher, stringify, query) {
        if (!items) {
            return null;
        }
        return tuiIsFlat(items)
            ? this.filterFlat(items, matcher, stringify, query)
            : this.filter2d(items, matcher, stringify, query);
    }
    filterFlat(items, matcher, stringify, query) {
        const match = this.getMatch(items, stringify, query);
        return match != null
            ? items
            : items.filter((item) => matcher(item, query, stringify));
    }
    filter2d(items, matcher, stringify, query) {
        const match = items.find((item) => this.getMatch(item, stringify, query) != null);
        return match != null
            ? items
            : items.map((inner) => this.filterFlat(inner, matcher, stringify, query));
    }
    getMatch(items, stringify, query) {
        // TODO: Refactor when tui-textfield[multi] is ready
        if (this.host.tagValidator) {
            return undefined;
        }
        return items.find((item) => stringify(item).toLocaleLowerCase() === query.toLocaleLowerCase());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFilterByInputPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiFilterByInputPipe, isStandalone: true, name: "tuiFilterByInput", pure: false }); }
}
__decorate([
    tuiPure
], TuiFilterByInputPipe.prototype, "filter", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFilterByInputPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiFilterByInput',
                    pure: false,
                }]
        }], propDecorators: { filter: [] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiFilterByInputPipe };
//# sourceMappingURL=taiga-ui-kit-pipes-filter-by-input.mjs.map
