import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, TemplateRef, Directive, Input, ChangeDetectorRef, EventEmitter, signal, Output, forwardRef, ContentChildren, Pipe, SkipSelf, ContentChild } from '@angular/core';
import { map, distinctUntilChanged, catchError, EMPTY, Subject, switchMap, takeUntil, delay, filter, ReplaySubject, startWith } from 'rxjs';
import { tuiCreateToken, tuiProvideOptions, tuiWithStyles, tuiProvide, tuiDefaultSort, tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { IntersectionObserverService, WA_INTERSECTION_THRESHOLD, WA_INTERSECTION_ROOT_MARGIN } from '@ng-web-apis/intersection-observer';
import { tuiButtonOptionsProvider } from '@taiga-ui/core/components/button';
import { TUI_TEXTFIELD_OPTIONS } from '@taiga-ui/core/components/textfield';
import { tuiBadgeOptionsProvider } from '@taiga-ui/kit/components/badge';
import { tuiChipOptionsProvider } from '@taiga-ui/kit/components/chip';
import { tuiProgressOptionsProvider } from '@taiga-ui/kit/components/progress';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiWatch, tuiTypedFromEvent, tuiPreventDefault, tuiQueryListChanges } from '@taiga-ui/cdk/observables';
import { DOCUMENT, AsyncPipe, NgIf, NgTemplateOutlet, NgForOf } from '@angular/common';
import { EMPTY_CLIENT_RECT, EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { __decorate } from 'tslib';
import { TuiMapperPipe } from '@taiga-ui/cdk/pipes/mapper';
import { TuiChevron } from '@taiga-ui/kit/directives/chevron';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { TuiControl } from '@taiga-ui/cdk/classes';

class TuiTableCaption {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableCaption, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableCaption, isStandalone: true, selector: "caption[tuiCaption]", ngImport: i0, template: '<ng-content/>', isInline: true, styles: ["caption[tuiCaption]{caption-side:bottom;text-align:start;padding:.75rem 0;color:var(--tui-text-secondary)}caption[tuiCaption]>*:not(:first-child){margin-inline-start:.5rem}caption[tuiCaption] tui-pagination:not(:first-child),caption[tuiCaption] tui-pager:not(:first-child){display:inline-flex;vertical-align:middle}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableCaption, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'caption[tuiCaption]', template: '<ng-content/>', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["caption[tuiCaption]{caption-side:bottom;text-align:start;padding:.75rem 0;color:var(--tui-text-secondary)}caption[tuiCaption]>*:not(:first-child){margin-inline-start:.5rem}caption[tuiCaption] tui-pagination:not(:first-child),caption[tuiCaption] tui-pager:not(:first-child){display:inline-flex;vertical-align:middle}\n"] }]
        }] });

class TuiTableCell {
    constructor() {
        this.tuiCell = '';
        this.template = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableCell, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableCell, isStandalone: true, selector: "ng-template[tuiCell]", inputs: { tuiCell: "tuiCell" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableCell, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiCell]',
                }]
        }], propDecorators: { tuiCell: [{
                type: Input
            }] } });

const TuiSortDirection = {
    Asc: 1,
    Desc: -1,
};
const TUI_TABLE_DEFAULT_OPTIONS = {
    sticky: false,
    resizable: false,
    open: true,
    size: 'm',
    direction: TuiSortDirection.Asc,
    requiredSort: false,
    sortIcons: {
        asc: '@tui.chevron-up',
        desc: '@tui.chevron-down',
        off: '@tui.chevrons-up-down',
    },
};
const TUI_TABLE_OPTIONS = tuiCreateToken(TUI_TABLE_DEFAULT_OPTIONS);
function tuiTableOptionsProvider(options) {
    return tuiProvideOptions(TUI_TABLE_OPTIONS, options, TUI_TABLE_DEFAULT_OPTIONS);
}

// TODO: Consider making universal and moving to CDK
class TuiStuck {
    constructor() {
        this.stuck = toSignal(inject(IntersectionObserverService).pipe(map((entries) => (entries[entries.length - 1]?.intersectionRatio ?? 0) < 1), distinctUntilChanged(), tuiWatch(), catchError(() => EMPTY)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStuck, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiStuck, isStandalone: true, selector: "tui-stuck:never", host: { properties: { "class._stuck": "stuck()" } }, providers: [
            IntersectionObserverService,
            {
                provide: WA_INTERSECTION_THRESHOLD,
                useValue: [0, 1],
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiStuck, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-stuck:never',
                    providers: [
                        IntersectionObserverService,
                        {
                            provide: WA_INTERSECTION_THRESHOLD,
                            useValue: [0, 1],
                        },
                    ],
                    host: { '[class._stuck]': 'stuck()' },
                }]
        }] });

class TuiTableStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-table" }, ngImport: i0, template: '', isInline: true, styles: ["table[tuiTable]{border-collapse:separate}table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-table',
                    }, styles: ["table[tuiTable]{border-collapse:separate}table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"] }]
        }] });
class TuiTableDirective {
    constructor() {
        this.options = inject(TUI_TABLE_OPTIONS);
        this.cdr = inject(ChangeDetectorRef);
        this.nothing = tuiWithStyles(TuiTableStyles);
        this.columns = [];
        this.direction = this.options.direction;
        this.directionChange = new EventEmitter();
        this.sorterChange = new EventEmitter();
        this.appearance = signal('table');
        this.size = signal(this.options.size);
        this.cleaner = signal(false);
        // TODO: refactor to signal inputs after Angular update
        this.change$ = new Subject();
        this.sorter = () => 0;
    }
    set sizeSetter(size) {
        this.size.set(size);
    }
    updateSorterAndDirection(sorter) {
        if (this.sorter === sorter) {
            this.updateDirection(this.direction === TuiSortDirection.Asc
                ? TuiSortDirection.Desc
                : TuiSortDirection.Asc);
        }
        else {
            this.updateSorter(sorter);
            this.updateDirection(1);
        }
    }
    ngOnChanges() {
        this.change$.next();
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    updateSorter(sorter) {
        this.sorter = sorter || (() => 0);
        this.sorterChange.emit(this.sorter);
        this.change$.next();
    }
    updateDirection(direction) {
        this.direction = direction;
        this.directionChange.emit(this.direction);
        this.change$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableDirective, isStandalone: true, selector: "table[tuiTable]", inputs: { columns: "columns", direction: "direction", sizeSetter: ["size", "sizeSetter"], sorter: "sorter" }, outputs: { directionChange: "directionChange", sorterChange: "sorterChange" }, host: { properties: { "attr.data-size": "size()" } }, providers: [
            {
                provide: WA_INTERSECTION_ROOT_MARGIN,
                useValue: '10000px 10000px 10000px 0px',
            },
            tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTableDirective),
            tuiButtonOptionsProvider({ size: 's' }),
            tuiBadgeOptionsProvider({ size: 'm', appearance: 'neutral' }),
            tuiChipOptionsProvider({ size: 'xxs', appearance: 'neutral' }),
            tuiProgressOptionsProvider({ size: 's', color: 'var(--tui-text-action)' }),
        ], usesOnChanges: true, hostDirectives: [{ directive: TuiStuck }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'table[tuiTable]',
                    providers: [
                        {
                            provide: WA_INTERSECTION_ROOT_MARGIN,
                            useValue: '10000px 10000px 10000px 0px',
                        },
                        tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTableDirective),
                        tuiButtonOptionsProvider({ size: 's' }),
                        tuiBadgeOptionsProvider({ size: 'm', appearance: 'neutral' }),
                        tuiChipOptionsProvider({ size: 'xxs', appearance: 'neutral' }),
                        tuiProgressOptionsProvider({ size: 's', color: 'var(--tui-text-action)' }),
                    ],
                    hostDirectives: [TuiStuck],
                    host: {
                        '[attr.data-size]': 'size()',
                    },
                }]
        }], propDecorators: { columns: [{
                type: Input
            }], direction: [{
                type: Input
            }], directionChange: [{
                type: Output
            }], sorterChange: [{
                type: Output
            }], sizeSetter: [{
                type: Input,
                args: ['size']
            }], sorter: [{
                type: Input
            }] } });

class TuiTableDirectionOrder {
    constructor() {
        this.table = inject((TuiTableDirective));
        this.directionOrderChange = this.table.directionChange.pipe(map((dir) => (dir === 1 ? 'asc' : 'desc')));
    }
    set directionOrder(order) {
        this.table.direction =
            order === 'asc' ? TuiSortDirection.Asc : TuiSortDirection.Desc;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableDirectionOrder, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableDirectionOrder, isStandalone: true, selector: "table[tuiTable][tuiDirectionOrder]", inputs: { directionOrder: "directionOrder" }, outputs: { directionOrderChange: "directionOrderChange" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableDirectionOrder, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'table[tuiTable][tuiDirectionOrder]',
                }]
        }], propDecorators: { directionOrderChange: [{
                type: Output
            }], directionOrder: [{
                type: Input
            }] } });

class TuiTableHead {
    constructor() {
        this.tuiHead = '';
        this.template = inject((TemplateRef));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableHead, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableHead, isStandalone: true, selector: "[tuiHead]", inputs: { tuiHead: "tuiHead" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableHead, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHead]',
                }]
        }], propDecorators: { tuiHead: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class TuiTableResized {
    constructor() {
        this.doc = inject(DOCUMENT);
        this.el = tuiInjectElement();
        this.tuiResized = tuiTypedFromEvent(this.el, 'mousedown').pipe(tuiPreventDefault(), switchMap(() => {
            const { width, right } = this.el.closest('th')?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
            return tuiTypedFromEvent(this.doc, 'mousemove').pipe(distinctUntilChanged(), map(({ clientX }) => width + clientX - right), takeUntil(tuiTypedFromEvent(this.doc, 'mouseup')));
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableResized, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableResized, isStandalone: true, selector: "[tuiResized]", outputs: { tuiResized: "tuiResized" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableResized, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiResized]',
                }]
        }], propDecorators: { tuiResized: [{
                type: Output
            }] } });

/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
class TuiTableTh {
    constructor() {
        this.options = inject(TUI_TABLE_OPTIONS);
        this.head = inject(TuiTableHead, {
            optional: true,
        });
        this.width = null;
        this.table = inject(forwardRef(() => TuiTableDirective), { optional: true });
        this.sorter = this.head
            ? (a, b) => tuiDefaultSort(a[this.key], b[this.key])
            : null;
        this.resizable = this.options.resizable;
        this.sticky = this.options.sticky;
        this.requiredSort = this.options.requiredSort;
    }
    get key() {
        if (!this.head) {
            throw new TuiTableSortKeyException();
        }
        return this.head.tuiHead;
    }
    get isCurrent() {
        return !!this.sorter && !!this.table && this.sorter === this.table.sorter;
    }
    get icon() {
        if (this.isCurrent) {
            return this.table?.direction === TuiSortDirection.Asc
                ? this.options.sortIcons.asc
                : this.options.sortIcons.desc;
        }
        return this.options.sortIcons.off;
    }
    updateSorterAndDirection() {
        const sorter = this.requiredSort ? this.sorter : null;
        this.table?.updateSorterAndDirection(this.isCurrentAndDescDirection ? sorter : this.sorter);
    }
    onResized(width) {
        this.width = width;
    }
    get isCurrentAndDescDirection() {
        return (this.sorter === this.table?.sorter &&
            this.table?.direction === TuiSortDirection.Desc);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTh, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableTh, isStandalone: true, selector: "th[tuiTh]", inputs: { sorter: "sorter", resizable: "resizable", sticky: "sticky", requiredSort: "requiredSort" }, host: { properties: { "style.min-width.px": "width", "style.width.px": "width", "style.max-width.px": "width", "class._sticky": "sticky" } }, ngImport: i0, template: "<button\n    *ngIf=\"sorter && table; else content\"\n    type=\"button\"\n    class=\"t-sort\"\n    [class.t-sort_sorted]=\"isCurrent\"\n    (click)=\"updateSorterAndDirection()\"\n>\n    <ng-container [ngTemplateOutlet]=\"content\" />\n    {{ table && table.change$ | async }}\n    <tui-icon\n        class=\"t-icon\"\n        [icon]=\"icon\"\n    />\n</button>\n<ng-template #content>\n    <ng-content />\n</ng-template>\n<div\n    *ngIf=\"resizable\"\n    class=\"t-bar\"\n    (tuiResized)=\"onResized($event)\"\n></div>\n", styles: [":host{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;block-size:var(--tui-height-m);font:var(--tui-font-text-s);text-align:start;font-weight:700;color:var(--tui-text-secondary);background:var(--tui-background-base);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-border-normal);filter:opacity(1)}@supports (-webkit-hyphens: none){:host{transform:translateZ(0)}}:host:not(:first-child){border-inline-start:none}:host._sticky,:host-context(._stuck) :host._sticky{position:sticky;z-index:30}:host._sticky:first-child,:host-context(._stuck) :host._sticky:first-child{left:0}:host._sticky:after,:host-context(._stuck) :host._sticky:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;top:0;left:100%;bottom:0;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}:host-context(._stuck) :host{z-index:20}:host-context(tr:not(:first-child)){border-block-start:none}:host-context(table[data-size=\"l\"]){block-size:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}:host-context(table[data-size=\"s\"]){block-size:var(--tui-height-s);font:var(--tui-font-text-s);font-weight:700;padding:0 .5rem}:host-context(thead[tuiThead]){position:sticky}:host-context(table._stuck)._sticky:after{opacity:1}:host-context(thead[tuiThead]._stuck){box-shadow:0 .3125rem #edededb3}:host-context([tuiTheme=\"dark\"])._sticky:after{background:#3c3c3ce6}:host-context([tuiTheme=\"dark\"] thead[tuiThead]._stuck){box-shadow:0 .3125rem #3c3c3ce6}:host-context([tuiTheme=\"dark\"] thead[tuiThead]._stuck):first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}:host-context(table[data-size=\"l\"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-l)}:host-context(table[data-size=\"m\"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-m)}:host-context(table[data-size=\"s\"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-s)}.t-sort{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:700;cursor:pointer}.t-sort_sorted{color:var(--tui-text-primary)}.t-sort:focus-visible{background:var(--tui-service-selection-background)}.t-sort:hover{color:var(--tui-text-primary)}.t-bar{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;inline-size:3px;justify-self:flex-end;border-inline-start:2px solid transparent;background:var(--tui-status-warning);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar:hover,.t-bar:active{opacity:1}.t-icon{border-width:.25rem}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }, { kind: "directive", type: TuiTableResized, selector: "[tuiResized]", outputs: ["tuiResized"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTh, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'th[tuiTh]', imports: [AsyncPipe, NgIf, NgTemplateOutlet, TuiIcon, TuiTableResized], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[style.min-width.px]': 'width',
                        '[style.width.px]': 'width',
                        '[style.max-width.px]': 'width',
                        '[class._sticky]': 'sticky',
                    }, template: "<button\n    *ngIf=\"sorter && table; else content\"\n    type=\"button\"\n    class=\"t-sort\"\n    [class.t-sort_sorted]=\"isCurrent\"\n    (click)=\"updateSorterAndDirection()\"\n>\n    <ng-container [ngTemplateOutlet]=\"content\" />\n    {{ table && table.change$ | async }}\n    <tui-icon\n        class=\"t-icon\"\n        [icon]=\"icon\"\n    />\n</button>\n<ng-template #content>\n    <ng-content />\n</ng-template>\n<div\n    *ngIf=\"resizable\"\n    class=\"t-bar\"\n    (tuiResized)=\"onResized($event)\"\n></div>\n", styles: [":host{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;block-size:var(--tui-height-m);font:var(--tui-font-text-s);text-align:start;font-weight:700;color:var(--tui-text-secondary);background:var(--tui-background-base);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-border-normal);filter:opacity(1)}@supports (-webkit-hyphens: none){:host{transform:translateZ(0)}}:host:not(:first-child){border-inline-start:none}:host._sticky,:host-context(._stuck) :host._sticky{position:sticky;z-index:30}:host._sticky:first-child,:host-context(._stuck) :host._sticky:first-child{left:0}:host._sticky:after,:host-context(._stuck) :host._sticky:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;top:0;left:100%;bottom:0;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}:host-context(._stuck) :host{z-index:20}:host-context(tr:not(:first-child)){border-block-start:none}:host-context(table[data-size=\"l\"]){block-size:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}:host-context(table[data-size=\"s\"]){block-size:var(--tui-height-s);font:var(--tui-font-text-s);font-weight:700;padding:0 .5rem}:host-context(thead[tuiThead]){position:sticky}:host-context(table._stuck)._sticky:after{opacity:1}:host-context(thead[tuiThead]._stuck){box-shadow:0 .3125rem #edededb3}:host-context([tuiTheme=\"dark\"])._sticky:after{background:#3c3c3ce6}:host-context([tuiTheme=\"dark\"] thead[tuiThead]._stuck){box-shadow:0 .3125rem #3c3c3ce6}:host-context([tuiTheme=\"dark\"] thead[tuiThead]._stuck):first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}:host-context(table[data-size=\"l\"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-l)}:host-context(table[data-size=\"m\"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-m)}:host-context(table[data-size=\"s\"] thead[tuiThead] tr:nth-child(2)){top:var(--tui-height-s)}.t-sort{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:700;cursor:pointer}.t-sort_sorted{color:var(--tui-text-primary)}.t-sort:focus-visible{background:var(--tui-service-selection-background)}.t-sort:hover{color:var(--tui-text-primary)}.t-bar{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;inline-size:3px;justify-self:flex-end;border-inline-start:2px solid transparent;background:var(--tui-status-warning);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar:hover,.t-bar:active{opacity:1}.t-icon{border-width:.25rem}\n"] }]
        }], propDecorators: { sorter: [{
                type: Input
            }], resizable: [{
                type: Input
            }], sticky: [{
                type: Input
            }], requiredSort: [{
                type: Input
            }] } });
class TuiTableSortKeyException extends Error {
    constructor() {
        super(ngDevMode ? 'Trying to sort with no key' : '');
    }
}

class TuiTableSortable {
    constructor() {
        this.table = inject((TuiTableDirective));
        this.th = inject((TuiTableTh));
        this.sortBy = inject(forwardRef(() => TuiTableSortBy));
        this.sorter = () => 0;
    }
    get key() {
        return this.th.key;
    }
    ngOnChanges() {
        if (this.sortable) {
            this.sorter = this.match ? this.table.sorter : this.sorter;
            this.th.sorter = this.sorter;
        }
        else {
            this.th.sorter = null;
        }
    }
    check() {
        if (this.match && this.table.sorter !== this.sorter) {
            this.table.updateSorter(this.sorter);
        }
    }
    get match() {
        return this.sortBy.tuiSortBy === this.key;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortable, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.12", type: TuiTableSortable, isStandalone: true, selector: "th[tuiTh][tuiSortable]", inputs: { sortable: ["tuiSortable", "sortable", coerceBooleanProperty] }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortable, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'th[tuiTh][tuiSortable]',
                }]
        }], propDecorators: { sortable: [{
                type: Input,
                args: [{
                        alias: 'tuiSortable',
                        transform: coerceBooleanProperty,
                    }]
            }] } });

class TuiTableSortBy {
    constructor() {
        this.sortables = EMPTY_QUERY;
        this.table = inject((TuiTableDirective));
        this.tuiSortByChange = this.table.sorterChange.pipe(
        // delay is for getting actual ContentChildren (sortables) https://github.com/angular/angular/issues/38976
        delay(0), filter(() => !!this.sortables.length), map((sorter) => this.getKey(sorter)));
        this.tuiSortBy = null;
    }
    set sortBy(sortBy) {
        this.tuiSortBy = sortBy;
        this.checkSortables();
    }
    checkSortables() {
        this.sortables.forEach((s) => s.check());
    }
    getKey(sorter) {
        return this.sortables.find((s) => s.sorter === sorter)?.key || null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortBy, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableSortBy, isStandalone: true, selector: "table[tuiTable][tuiSortBy]", inputs: { sortBy: ["tuiSortBy", "sortBy"] }, outputs: { tuiSortByChange: "tuiSortByChange" }, queries: [{ propertyName: "sortables", predicate: TuiTableSortable, descendants: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortBy, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'table[tuiTable][tuiSortBy]',
                }]
        }], propDecorators: { sortables: [{
                type: ContentChildren,
                args: [TuiTableSortable, { descendants: true }]
            }], tuiSortByChange: [{
                type: Output
            }], sortBy: [{
                type: Input,
                args: ['tuiSortBy']
            }] } });

class TuiTableThead {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableThead, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableThead, isStandalone: true, selector: "thead[tuiThead]", providers: [
            {
                provide: WA_INTERSECTION_ROOT_MARGIN,
                useValue: '0px 10000px 10000px 10000px',
            },
        ], hostDirectives: [{ directive: TuiStuck }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableThead, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'thead[tuiThead]',
                    providers: [
                        {
                            provide: WA_INTERSECTION_ROOT_MARGIN,
                            useValue: '0px 10000px 10000px 10000px',
                        },
                    ],
                    hostDirectives: [TuiStuck],
                }]
        }] });

class TuiTableSortPipe {
    constructor() {
        this.table = inject((TuiTableDirective));
    }
    transform(data) {
        return this.sort(data ?? [], this.table.sorter, this.table.direction);
    }
    sort(data, sorter, direction) {
        return [...data].sort((a, b) => direction * sorter(a, b));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortPipe, isStandalone: true, name: "tuiTableSort", pure: false }); }
}
__decorate([
    tuiPure
], TuiTableSortPipe.prototype, "sort", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableSortPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiTableSort',
                    pure: false,
                }]
        }], propDecorators: { sort: [] } });

/**
 * @deprecated TODO: drop after Angular update and signal inputs
 */
const TUI_TABLE_PROVIDER = [
    {
        provide: TuiTableDirective,
        deps: [[new SkipSelf(), TuiTableDirective]],
        useFactory: (controller) => {
            controller.change$.pipe(tuiWatch(), takeUntilDestroyed()).subscribe();
            return controller;
        },
    },
];

class TuiTableTd {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTd, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableTd, isStandalone: true, selector: "th[tuiTd], td[tuiTd]", host: { properties: { "class._editable": "control" } }, queries: [{ propertyName: "control", first: true, predicate: TuiControl, descendants: true }], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{position:relative;text-align:start;background:var(--tui-background-base);border:1px solid var(--tui-border-normal);border-block-start:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){:host{transform:translateZ(0)}}:host:first-child{left:0}:host:not(:first-child){border-inline-start:none}:host._editable:focus-within{z-index:1}:host._editable{padding:0!important;vertical-align:top}:host(th){position:sticky;z-index:1}:host(th):after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;top:0;bottom:0;left:100%;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}:host(th):focus-within:not(:disabled){z-index:11}:host-context([tuiTheme=\"dark\"]):after{background:#3c3c3ce6}:host-context(table._stuck){z-index:10}:host-context(table._stuck):last-of-type:after{opacity:1}:host-context(table[data-size=\"l\"]){block-size:var(--tui-height-l);font:var(--tui-font-text-m);padding:1rem}:host-context(table[data-size=\"m\"]){block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:.75rem}:host-context(table[data-size=\"s\"]){block-size:var(--tui-height-s);font:var(--tui-font-text-s);padding:.25rem .5rem}:host(td):focus-within{z-index:1}:host(td):not(:focus-within){z-index:0}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTd, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'th[tuiTd], td[tuiTd]', template: '<ng-content></ng-content>', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._editable]': 'control',
                    }, styles: [":host{position:relative;text-align:start;background:var(--tui-background-base);border:1px solid var(--tui-border-normal);border-block-start:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){:host{transform:translateZ(0)}}:host:first-child{left:0}:host:not(:first-child){border-inline-start:none}:host._editable:focus-within{z-index:1}:host._editable{padding:0!important;vertical-align:top}:host(th){position:sticky;z-index:1}:host(th):after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;top:0;bottom:0;left:100%;inline-size:.3125rem;pointer-events:none;background:#edededb3;opacity:0}:host(th):focus-within:not(:disabled){z-index:11}:host-context([tuiTheme=\"dark\"]):after{background:#3c3c3ce6}:host-context(table._stuck){z-index:10}:host-context(table._stuck):last-of-type:after{opacity:1}:host-context(table[data-size=\"l\"]){block-size:var(--tui-height-l);font:var(--tui-font-text-m);padding:1rem}:host-context(table[data-size=\"m\"]){block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:.75rem}:host-context(table[data-size=\"s\"]){block-size:var(--tui-height-s);font:var(--tui-font-text-s);padding:.25rem .5rem}:host(td):focus-within{z-index:1}:host(td):not(:focus-within){z-index:0}\n"] }]
        }], propDecorators: { control: [{
                type: ContentChild,
                args: [TuiControl]
            }] } });

class TuiTableTr {
    constructor() {
        this.cells = EMPTY_QUERY;
        this.body = inject(forwardRef(() => TuiTableTbody));
        this.contentReady$ = new ReplaySubject(1);
        this.table = inject(forwardRef(() => TuiTableDirective));
        this.cells$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.cells)), map((cells) => cells.reduce((record, item) => ({ ...record, [item.tuiCell]: item }), {})));
        this.item$ = this.contentReady$.pipe(switchMap(() => tuiQueryListChanges(this.body.rows)), map((rows) => this.body.data[rows.findIndex((row) => row === this)]));
    }
    async ngAfterContentInit() {
        await Promise.resolve();
        this.contentReady$.next(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTr, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableTr, isStandalone: true, selector: "tr[tuiTr]", providers: [TUI_TABLE_PROVIDER], queries: [{ propertyName: "cells", predicate: i0.forwardRef(function () { return TuiTableCell; }) }], ngImport: i0, template: "<ng-container *ngIf=\"cells$ | async as items; else dummy\">\n    <ng-container\n        *ngFor=\"let key of table.columns\"\n        [ngTemplateOutlet]=\"(items[key] && items[key].template) || plain\"\n    >\n        <ng-template #plain>\n            <td\n                *ngIf=\"item$ | async as item\"\n                tuiTd\n            >\n                {{ item[key] }}\n            </td>\n        </ng-template>\n    </ng-container>\n</ng-container>\n<ng-template #dummy><td></td></ng-template>\n", dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TuiTableTd, selector: "th[tuiTd], td[tuiTd]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTr, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tr[tuiTr]', imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTd], changeDetection: ChangeDetectionStrategy.OnPush, providers: [TUI_TABLE_PROVIDER], template: "<ng-container *ngIf=\"cells$ | async as items; else dummy\">\n    <ng-container\n        *ngFor=\"let key of table.columns\"\n        [ngTemplateOutlet]=\"(items[key] && items[key].template) || plain\"\n    >\n        <ng-template #plain>\n            <td\n                *ngIf=\"item$ | async as item\"\n                tuiTd\n            >\n                {{ item[key] }}\n            </td>\n        </ng-template>\n    </ng-container>\n</ng-container>\n<ng-template #dummy><td></td></ng-template>\n" }]
        }], propDecorators: { cells: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiTableCell)]
            }] } });

class TuiTableTbody {
    constructor() {
        this.options = inject(TUI_TABLE_OPTIONS);
        this.table = inject(forwardRef(() => TuiTableDirective));
        this.rows = EMPTY_QUERY;
        this.data = [];
        this.open = this.options.open;
        this.openChange = new EventEmitter();
    }
    onClick() {
        this.open = !this.open;
        this.openChange.emit(this.open);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTbody, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableTbody, isStandalone: true, selector: "tbody[tuiTbody]", inputs: { data: "data", heading: "heading", open: "open" }, outputs: { openChange: "openChange" }, providers: TUI_TABLE_PROVIDER, queries: [{ propertyName: "rows", predicate: i0.forwardRef(function () { return TuiTableTr; }) }], ngImport: i0, template: "<tr *ngIf=\"heading\">\n    <th\n        class=\"t-heading\"\n        [colSpan]=\"table.columns.length\"\n    >\n        <button\n            type=\"button\"\n            class=\"t-expand\"\n            (click)=\"onClick()\"\n        >\n            <span class=\"t-name\">\n                <ng-container *polymorpheusOutlet=\"heading as text\">\n                    {{ text }}\n                </ng-container>\n            </span>\n            <tui-icon\n                class=\"t-chevron\"\n                [tuiChevron]=\"open\"\n            />\n        </button>\n    </th>\n</tr>\n<ng-container *ngIf=\"open\">\n    <ng-content />\n</ng-container>\n", styles: [":host{border-color:var(--tui-border-normal)}:host tr{border-color:inherit}.t-expand{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;inline-size:100%;block-size:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand:focus-visible .t-name{background:var(--tui-service-selection-background)}.t-expand:before,.t-expand:after{content:\"\";position:sticky;block-size:100%;border-inline-start:1px solid;border-color:inherit}.t-expand:before{left:0}.t-expand:after{right:0}.t-heading{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-background-neutral-1);border-block-end:1px solid var(--tui-border-normal);border-color:inherit}.t-heading:hover{background:var(--tui-background-neutral-1-hover)}:host-context(table[data-size=\"l\"]) .t-heading{font:var(--tui-font-text-m);block-size:var(--tui-height-l)}.t-name{position:sticky;left:.75rem;display:inline-block}:host-context(table[data-size=\"l\"]) .t-name{left:1rem}.t-chevron{position:sticky;right:.75rem;margin:0 .6875rem 0 auto}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiChevron, selector: "[tuiChevron]", inputs: ["tuiChevron"] }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableTbody, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tbody[tuiTbody]', imports: [NgIf, PolymorpheusOutlet, TuiChevron, TuiIcon, TuiMapperPipe], changeDetection: ChangeDetectionStrategy.OnPush, providers: TUI_TABLE_PROVIDER, template: "<tr *ngIf=\"heading\">\n    <th\n        class=\"t-heading\"\n        [colSpan]=\"table.columns.length\"\n    >\n        <button\n            type=\"button\"\n            class=\"t-expand\"\n            (click)=\"onClick()\"\n        >\n            <span class=\"t-name\">\n                <ng-container *polymorpheusOutlet=\"heading as text\">\n                    {{ text }}\n                </ng-container>\n            </span>\n            <tui-icon\n                class=\"t-chevron\"\n                [tuiChevron]=\"open\"\n            />\n        </button>\n    </th>\n</tr>\n<ng-container *ngIf=\"open\">\n    <ng-content />\n</ng-container>\n", styles: [":host{border-color:var(--tui-border-normal)}:host tr{border-color:inherit}.t-expand{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;inline-size:100%;block-size:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand:focus-visible .t-name{background:var(--tui-service-selection-background)}.t-expand:before,.t-expand:after{content:\"\";position:sticky;block-size:100%;border-inline-start:1px solid;border-color:inherit}.t-expand:before{left:0}.t-expand:after{right:0}.t-heading{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;block-size:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-background-neutral-1);border-block-end:1px solid var(--tui-border-normal);border-color:inherit}.t-heading:hover{background:var(--tui-background-neutral-1-hover)}:host-context(table[data-size=\"l\"]) .t-heading{font:var(--tui-font-text-m);block-size:var(--tui-height-l)}.t-name{position:sticky;left:.75rem;display:inline-block}:host-context(table[data-size=\"l\"]) .t-name{left:1rem}.t-chevron{position:sticky;right:.75rem;margin:0 .6875rem 0 auto}\n"] }]
        }], propDecorators: { rows: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiTableTr)]
            }], data: [{
                type: Input
            }], heading: [{
                type: Input
            }], open: [{
                type: Input
            }], openChange: [{
                type: Output
            }] } });

class TuiTableThGroup {
    constructor() {
        this.heads = EMPTY_QUERY;
        this.heads$ = null;
        this.table = inject(forwardRef(() => TuiTableDirective));
    }
    ngAfterContentInit() {
        this.heads$ = this.heads.changes.pipe(startWith(null), map(() => this.heads.reduce((record, item) => ({ ...record, [item.tuiHead]: item }), {})));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableThGroup, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableThGroup, isStandalone: true, selector: "tr[tuiThGroup]", providers: [TUI_TABLE_PROVIDER], queries: [{ propertyName: "th", first: true, predicate: i0.forwardRef(function () { return TuiTableTh; }), descendants: true }, { propertyName: "heads", predicate: i0.forwardRef(function () { return TuiTableHead; }) }], ngImport: i0, template: "<ng-content />\n<ng-container *ngIf=\"heads$ | async as headings\">\n    <ng-container\n        *ngFor=\"let key of table.columns\"\n        [ngTemplateOutlet]=\"(headings[key] && headings[key].template) || plain\"\n        [ngTemplateOutletContext]=\"{$implicit: key}\"\n    />\n    <ng-template\n        #plain\n        let-key\n    >\n        <th\n            *ngIf=\"!th && !heads.length\"\n            tuiTh\n        >\n            {{ key.toString() }}\n        </th>\n    </ng-template>\n</ng-container>\n", dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TuiTableTh, selector: "th[tuiTh]", inputs: ["sorter", "resizable", "sticky", "requiredSort"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableThGroup, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tr[tuiThGroup]', imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiTableTh], changeDetection: ChangeDetectionStrategy.OnPush, providers: [TUI_TABLE_PROVIDER], template: "<ng-content />\n<ng-container *ngIf=\"heads$ | async as headings\">\n    <ng-container\n        *ngFor=\"let key of table.columns\"\n        [ngTemplateOutlet]=\"(headings[key] && headings[key].template) || plain\"\n        [ngTemplateOutletContext]=\"{$implicit: key}\"\n    />\n    <ng-template\n        #plain\n        let-key\n    >\n        <th\n            *ngIf=\"!th && !heads.length\"\n            tuiTh\n        >\n            {{ key.toString() }}\n        </th>\n    </ng-template>\n</ng-container>\n" }]
        }], propDecorators: { th: [{
                type: ContentChild,
                args: [forwardRef(() => TuiTableTh)]
            }], heads: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiTableHead)]
            }] } });

const TuiTable = [
    TuiTableDirective,
    TuiTableCaption,
    TuiTableTbody,
    TuiTableThGroup,
    TuiTableTh,
    TuiTableTd,
    TuiTableTr,
    TuiTableCell,
    TuiTableHead,
    TuiTableSortBy,
    TuiTableSortable,
    TuiTableThead,
    TuiTableResized,
    TuiTableSortPipe,
    TuiTableDirectionOrder,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_TABLE_DEFAULT_OPTIONS, TUI_TABLE_OPTIONS, TUI_TABLE_PROVIDER, TuiSortDirection, TuiStuck, TuiTable, TuiTableCaption, TuiTableCell, TuiTableDirectionOrder, TuiTableDirective, TuiTableHead, TuiTableResized, TuiTableSortBy, TuiTableSortKeyException, TuiTableSortPipe, TuiTableSortable, TuiTableTbody, TuiTableTd, TuiTableTh, TuiTableThGroup, TuiTableThead, TuiTableTr, tuiTableOptionsProvider };
//# sourceMappingURL=taiga-ui-addon-table-components-table.mjs.map
