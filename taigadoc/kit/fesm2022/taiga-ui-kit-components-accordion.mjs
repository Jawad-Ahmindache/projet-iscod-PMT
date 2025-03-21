import * as i0 from '@angular/core';
import { Directive, inject, ChangeDetectorRef, EventEmitter, Component, ChangeDetectionStrategy, ContentChild, Input, Output, DestroyRef, ContentChildren } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiQueryListChanges } from '@taiga-ui/cdk/observables';
import { tuiIsPresent } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i1$1 from '@taiga-ui/core/directives/group';
import { TuiGroup } from '@taiga-ui/core/directives/group';
import { pairwise, map, filter, merge, switchMap, identity } from 'rxjs';
import { NgIf } from '@angular/common';
import * as i1 from '@taiga-ui/core/components/expand';
import { TuiExpand } from '@taiga-ui/core/components/expand';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TuiChevron } from '@taiga-ui/kit/directives';
import { PolymorpheusTemplate, PolymorpheusOutlet } from '@taiga-ui/polymorpheus';

class TuiAccordionItemContent extends PolymorpheusTemplate {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionItemContent, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiAccordionItemContent, isStandalone: true, selector: "ng-template[tuiAccordionItemContent]", usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionItemContent, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiAccordionItemContent]',
                }]
        }] });

class TuiAccordionItemEagerContent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionItemEagerContent, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiAccordionItemEagerContent, isStandalone: true, selector: "[tuiAccordionItemContent]:not(ng-template)", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionItemEagerContent, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiAccordionItemContent]:not(ng-template)',
                }]
        }] });

class TuiAccordionItem {
    constructor() {
        this.cdr = inject(ChangeDetectorRef);
        this.noPadding = false;
        this.showArrow = true;
        this.borders = 'all';
        this.size = 'm';
        this.disabled = false;
        this.disableHover = false;
        this.open = false;
        this.async = false;
        this.openChange = new EventEmitter();
    }
    close() {
        this.updateOpen(false);
        this.cdr.markForCheck();
    }
    onRowToggle() {
        if (!this.disabled) {
            this.updateOpen(!this.open);
        }
    }
    onItemKeyDownEsc(event) {
        if (!this.open) {
            return;
        }
        event.stopPropagation();
        this.updateOpen(false);
    }
    updateOpen(open) {
        if (this.open === open) {
            return;
        }
        this.open = open;
        this.openChange.emit(open);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionItem, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiAccordionItem, isStandalone: true, selector: "tui-accordion-item", inputs: { noPadding: "noPadding", showArrow: "showArrow", borders: "borders", size: "size", disabled: "disabled", disableHover: "disableHover", open: "open", async: "async" }, outputs: { openChange: "openChange" }, host: { properties: { "class._no-padding": "noPadding", "class._has-arrow": "showArrow", "attr.data-borders": "borders", "attr.data-size": "size", "class._disabled": "disabled" } }, queries: [{ propertyName: "eagerContent", first: true, predicate: TuiAccordionItemEagerContent, descendants: true }, { propertyName: "lazyContent", first: true, predicate: TuiAccordionItemContent, descendants: true }], ngImport: i0, template: "<div\n    automation-id=\"tui-accordion__item-wrapper\"\n    class=\"t-wrapper\"\n>\n    <button\n        automation-id=\"tui-accordion__item-header\"\n        type=\"button\"\n        class=\"t-header\"\n        [class.t-header_hoverable]=\"!disableHover\"\n        [class.t-header_open]=\"open\"\n        [disabled]=\"disabled\"\n        (click)=\"onRowToggle()\"\n        (keydown.esc)=\"onItemKeyDownEsc($event)\"\n    >\n        <span\n            automation-id=\"tui-accordion__item-title\"\n            class=\"t-title\"\n        >\n            <ng-content />\n        </span>\n        <ng-container *ngIf=\"showArrow\">\n            <tui-icon\n                class=\"t-icon\"\n                [tuiChevron]=\"open\"\n            />\n        </ng-container>\n    </button>\n    <tui-expand\n        [async]=\"async\"\n        [expanded]=\"open\"\n    >\n        <ng-template tuiExpandContent>\n            <div\n                *ngIf=\"lazyContent\"\n                automation-id=\"tui-accordion__item-content\"\n                class=\"t-content\"\n            >\n                <ng-container *polymorpheusOutlet=\"lazyContent as text\">\n                    {{ text }}\n                </ng-container>\n            </div>\n        </ng-template>\n        <div\n            *ngIf=\"eagerContent\"\n            class=\"t-content\"\n        >\n            <ng-content select=\"[tuiAccordionItemContent]:not(ng-template)\" />\n        </div>\n    </tui-expand>\n</div>\n", styles: [":host{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}:host[data-borders=top-bottom]{border-radius:0!important}::ng-deep tui-accordion{inline-size:100%}.t-wrapper{position:relative;border-radius:inherit}.t-wrapper:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-border-normal);pointer-events:none}:host:not([data-borders]) .t-wrapper:after{border-width:0}:host[data-borders=all] .t-wrapper:after{border-width:1px}:host[data-borders=top-bottom] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0}:host[data-borders=top] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0;border-block-end-width:0}:host[data-borders=bottom] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0;border-block-start-width:0}.t-header{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;inline-size:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-block-end:1px solid var(--tui-border-normal);min-block-size:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-primary);cursor:pointer;text-align:start;outline:none}.t-header:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}:host:not([data-borders]) .t-header{border-block-end-width:0}:host._has-arrow .t-header{padding-right:.75rem}:host-context([tuiTheme=\"dark\"]) .t-header_open{background:var(--tui-background-neutral-1)}:host[data-size=s] .t-header{font:var(--tui-font-text-m);min-block-size:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}:host._no-padding .t-header{padding-left:0;padding-right:0}:host._disabled .t-header{cursor:default}.t-wrapper:hover>.t-header_hoverable{background:var(--tui-background-base-alt)}.t-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:0;flex-grow:1}:host._has-arrow .t-title{margin-right:.5rem}.t-icon{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;border-width:.25rem;color:var(--tui-text-tertiary)}:host:hover .t-icon{color:var(--tui-text-secondary)}.t-content{font:var(--tui-font-text-m);padding:1.25rem;overflow-wrap:break-word}:host[data-size=s] .t-content{font:var(--tui-font-text-s);padding:1rem}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiChevron, selector: "[tuiChevron]", inputs: ["tuiChevron"] }, { kind: "component", type: i1.TuiExpandComponent, selector: "tui-expand", inputs: ["async", "expanded"] }, { kind: "directive", type: i1.TuiExpandContent, selector: "[tuiExpandContent]" }, { kind: "component", type: TuiIcon, selector: "tui-icon", inputs: ["icon", "background"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionItem, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-accordion-item', imports: [NgIf, PolymorpheusOutlet, TuiChevron, TuiExpand, TuiIcon], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class._no-padding]': 'noPadding',
                        '[class._has-arrow]': 'showArrow',
                        '[attr.data-borders]': 'borders',
                        '[attr.data-size]': 'size',
                        '[class._disabled]': 'disabled',
                    }, template: "<div\n    automation-id=\"tui-accordion__item-wrapper\"\n    class=\"t-wrapper\"\n>\n    <button\n        automation-id=\"tui-accordion__item-header\"\n        type=\"button\"\n        class=\"t-header\"\n        [class.t-header_hoverable]=\"!disableHover\"\n        [class.t-header_open]=\"open\"\n        [disabled]=\"disabled\"\n        (click)=\"onRowToggle()\"\n        (keydown.esc)=\"onItemKeyDownEsc($event)\"\n    >\n        <span\n            automation-id=\"tui-accordion__item-title\"\n            class=\"t-title\"\n        >\n            <ng-content />\n        </span>\n        <ng-container *ngIf=\"showArrow\">\n            <tui-icon\n                class=\"t-icon\"\n                [tuiChevron]=\"open\"\n            />\n        </ng-container>\n    </button>\n    <tui-expand\n        [async]=\"async\"\n        [expanded]=\"open\"\n    >\n        <ng-template tuiExpandContent>\n            <div\n                *ngIf=\"lazyContent\"\n                automation-id=\"tui-accordion__item-content\"\n                class=\"t-content\"\n            >\n                <ng-container *polymorpheusOutlet=\"lazyContent as text\">\n                    {{ text }}\n                </ng-container>\n            </div>\n        </ng-template>\n        <div\n            *ngIf=\"eagerContent\"\n            class=\"t-content\"\n        >\n            <ng-content select=\"[tuiAccordionItemContent]:not(ng-template)\" />\n        </div>\n    </tui-expand>\n</div>\n", styles: [":host{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}:host[data-borders=top-bottom]{border-radius:0!important}::ng-deep tui-accordion{inline-size:100%}.t-wrapper{position:relative;border-radius:inherit}.t-wrapper:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-border-normal);pointer-events:none}:host:not([data-borders]) .t-wrapper:after{border-width:0}:host[data-borders=all] .t-wrapper:after{border-width:1px}:host[data-borders=top-bottom] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0}:host[data-borders=top] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0;border-block-end-width:0}:host[data-borders=bottom] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0;border-block-start-width:0}.t-header{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;inline-size:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-block-end:1px solid var(--tui-border-normal);min-block-size:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-primary);cursor:pointer;text-align:start;outline:none}.t-header:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}:host:not([data-borders]) .t-header{border-block-end-width:0}:host._has-arrow .t-header{padding-right:.75rem}:host-context([tuiTheme=\"dark\"]) .t-header_open{background:var(--tui-background-neutral-1)}:host[data-size=s] .t-header{font:var(--tui-font-text-m);min-block-size:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}:host._no-padding .t-header{padding-left:0;padding-right:0}:host._disabled .t-header{cursor:default}.t-wrapper:hover>.t-header_hoverable{background:var(--tui-background-base-alt)}.t-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:0;flex-grow:1}:host._has-arrow .t-title{margin-right:.5rem}.t-icon{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;border-width:.25rem;color:var(--tui-text-tertiary)}:host:hover .t-icon{color:var(--tui-text-secondary)}.t-content{font:var(--tui-font-text-m);padding:1.25rem;overflow-wrap:break-word}:host[data-size=s] .t-content{font:var(--tui-font-text-s);padding:1rem}\n"] }]
        }], propDecorators: { eagerContent: [{
                type: ContentChild,
                args: [TuiAccordionItemEagerContent]
            }], lazyContent: [{
                type: ContentChild,
                args: [TuiAccordionItemContent]
            }], noPadding: [{
                type: Input
            }], showArrow: [{
                type: Input
            }], borders: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], disableHover: [{
                type: Input
            }], open: [{
                type: Input
            }], async: [{
                type: Input
            }], openChange: [{
                type: Output
            }] } });

class TuiAccordionDirective {
    constructor() {
        this.destroyRef = inject(DestroyRef);
        this.accordionItems = EMPTY_QUERY;
        this.closeOthers = true;
        // Not using DI options to avoid changed defaults spilling to content
        const group = inject(TuiGroup);
        group.orientation = 'vertical';
        group.collapsed = true;
    }
    ngAfterContentInit() {
        const { accordionItems } = this;
        const rows$ = tuiQueryListChanges(accordionItems);
        const newOpenRow$ = rows$.pipe(pairwise(), map(([previous, current]) => current.find((item) => !previous.includes(item) && item.open)), filter(tuiIsPresent));
        const rowsOpen$ = merge(rows$.pipe(switchMap((rows) => merge(...rows.map((row) => row.openChange.pipe(filter(identity), map(() => row)))))), newOpenRow$).pipe(filter(() => this.closeOthers), takeUntilDestroyed(this.destroyRef));
        rowsOpen$.subscribe((currentRow) => {
            accordionItems.forEach((row) => {
                if (currentRow !== row) {
                    row.close();
                }
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiAccordionDirective, isStandalone: true, selector: "tui-accordion", inputs: { closeOthers: "closeOthers" }, queries: [{ propertyName: "accordionItems", predicate: TuiAccordionItem }], hostDirectives: [{ directive: i1$1.TuiGroup, inputs: ["rounded", "rounded"] }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-accordion',
                    hostDirectives: [
                        {
                            directive: TuiGroup,
                            inputs: ['rounded'],
                        },
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { accordionItems: [{
                type: ContentChildren,
                args: [TuiAccordionItem]
            }], closeOthers: [{
                type: Input
            }] } });

const TuiAccordion = [
    TuiAccordionItem,
    TuiAccordionDirective,
    TuiAccordionItemContent,
    TuiAccordionItemEagerContent,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiAccordion, TuiAccordionDirective, TuiAccordionItem, TuiAccordionItemContent, TuiAccordionItemEagerContent };
//# sourceMappingURL=taiga-ui-kit-components-accordion.mjs.map
