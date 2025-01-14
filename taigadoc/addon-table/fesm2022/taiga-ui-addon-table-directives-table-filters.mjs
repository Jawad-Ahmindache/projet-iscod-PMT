import * as i0 from '@angular/core';
import { Directive, Input, inject, Pipe } from '@angular/core';
import { TUI_TRUE_HANDLER } from '@taiga-ui/cdk/constants';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { NgControl } from '@angular/forms';
import { TuiTableHead } from '@taiga-ui/addon-table/components';
import { ReplaySubject, switchMap, identity, startWith, map, merge, defer, EMPTY, distinctUntilChanged } from 'rxjs';

class AbstractTuiTableFilter {
}

class TuiGenericFilter extends AbstractTuiTableFilter {
    constructor() {
        super(...arguments);
        this.filter = TUI_TRUE_HANDLER;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGenericFilter, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiGenericFilter, isStandalone: true, selector: "[tuiGenericFilter]", inputs: { filter: ["tuiGenericFilter", "filter"] }, providers: [tuiProvide(AbstractTuiTableFilter, TuiGenericFilter)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGenericFilter, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiGenericFilter]',
                    providers: [tuiProvide(AbstractTuiTableFilter, TuiGenericFilter)],
                }]
        }], propDecorators: { filter: [{
                type: Input,
                args: ['tuiGenericFilter']
            }] } });

class TuiTableFiltersDirective {
    constructor() {
        this.refresh$ = new ReplaySubject(1);
        this.filters = [];
    }
    register(filter) {
        this.filters = this.filters.concat(filter);
        this.update();
    }
    unregister(filter) {
        this.filters = this.filters.filter((item) => item !== filter);
        this.update();
    }
    filter(items) {
        return this.refresh$.pipe(switchMap(identity), startWith(null), map(() => items.filter((item) => this.check(item))));
    }
    check(item) {
        return this.filters.every((filter) => filter.filter(item));
    }
    update() {
        this.refresh$.next(merge(...this.filters.map(({ refresh$ }) => refresh$)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableFiltersDirective, isStandalone: true, selector: "[tuiTableFilters]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTableFilters]',
                }]
        }] });

class TuiTableFilterDirective {
    constructor() {
        this.head = inject((TuiTableHead), { optional: true });
        this.delegate = inject((AbstractTuiTableFilter));
        this.control = inject(NgControl);
        this.filters = inject((TuiTableFiltersDirective));
        this.refresh$ = defer(() => merge(this.control.valueChanges || EMPTY, this.control.statusChanges?.pipe(distinctUntilChanged()) || EMPTY));
    }
    ngOnInit() {
        this.filters.register(this);
    }
    ngOnDestroy() {
        this.filters.unregister(this);
    }
    filter(item) {
        const { disabled, value } = this.control;
        return (!!disabled ||
            !this.key ||
            this.delegate.filter(item[this.key], value));
    }
    get key() {
        return this.tuiTableFilter || this.head?.tuiHead;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFilterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableFilterDirective, isStandalone: true, selector: "[tuiTableFilter]", inputs: { tuiTableFilter: "tuiTableFilter" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFilterDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiTableFilter]',
                }]
        }], propDecorators: { tuiTableFilter: [{
                type: Input
            }] } });

class TuiTableFiltersPipe {
    constructor() {
        this.filters = inject((TuiTableFiltersDirective));
    }
    transform(items) {
        return this.filters.filter(items);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersPipe, isStandalone: true, name: "tuiTableFilters" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableFiltersPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiTableFilters',
                }]
        }] });

const TuiTableFilters = [
    TuiTableFiltersDirective,
    TuiTableFilterDirective,
    TuiTableFiltersPipe,
    TuiGenericFilter,
];

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractTuiTableFilter, TuiGenericFilter, TuiTableFilterDirective, TuiTableFilters, TuiTableFiltersDirective, TuiTableFiltersPipe };
//# sourceMappingURL=taiga-ui-addon-table-directives-table-filters.mjs.map
