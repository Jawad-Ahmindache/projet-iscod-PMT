import { NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, forwardRef, Component, ChangeDetectionStrategy, Input, NgZone, DestroyRef, ChangeDetectorRef, signal, ViewEncapsulation, ContentChildren, Directive } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiZonefree, tuiTakeUntilDestroyed } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiIsNativeFocused, tuiMoveFocus, tuiIsNativeFocusedIn } from '@taiga-ui/cdk/utils/focus';
import { tuiCreateToken, tuiProvide, tuiIsPresent } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_NOTHING_FOUND_MESSAGE } from '@taiga-ui/core/tokens';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { timer } from 'rxjs';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { TuiDropdownDirective } from '@taiga-ui/core/directives/dropdown';
import * as i1 from '@taiga-ui/core/directives/icons';
import { TuiWithIcons } from '@taiga-ui/core/directives/icons';

/**
 * Content for tuiOption component
 */
const TUI_OPTION_CONTENT = tuiCreateToken();
function tuiAsOptionContent(useValue) {
    return {
        provide: TUI_OPTION_CONTENT,
        useValue,
    };
}
/**
 * Accessor for data-list options
 */
const TUI_DATA_LIST_ACCESSOR = tuiCreateToken();
function tuiAsDataListAccessor(accessor) {
    return tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor);
}
/**
 * DataList controller
 */
const TUI_DATA_LIST_HOST = tuiCreateToken();
function tuiAsDataListHost(host) {
    return tuiProvide(TUI_DATA_LIST_HOST, host);
}

// TODO: Consider all use cases for aria roles
class TuiOption {
    constructor() {
        this.isMobile = inject(TUI_IS_MOBILE);
        this.el = tuiInjectElement();
        this.dataList = inject(forwardRef(() => TuiDataListComponent), { optional: true });
        this.host = inject(TUI_DATA_LIST_HOST, {
            optional: true,
        });
        this.content = inject(TUI_OPTION_CONTENT, { optional: true });
        this.dropdown = inject(TuiDropdownDirective, {
            self: true,
            optional: true,
        })?.ref;
        this.disabled = false;
    }
    // Preventing focus loss upon focused option removal
    ngOnDestroy() {
        this.dataList?.handleFocusLossIfNecessary(this.el);
    }
    onClick() {
        if (this.host?.handleOption && this.value !== undefined) {
            this.host.handleOption(this.value);
        }
    }
    onMouseMove() {
        if (!this.isMobile && !tuiIsNativeFocused(this.el) && this.dataList) {
            this.el.focus({ preventScroll: true });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiOption, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiOption, isStandalone: true, selector: "button[tuiOption], a[tuiOption], label[tuiOption]", inputs: { disabled: "disabled", value: "value" }, host: { attributes: { "type": "button", "role": "option" }, listeners: { "click": "onClick()", "mousemove.silent": "onMouseMove()" }, properties: { "attr.disabled": "disabled || null", "class._with-dropdown": "dropdown?.()" } }, hostDirectives: [{ directive: i1.TuiWithIcons }], ngImport: i0, template: `
        <ng-container *polymorpheusOutlet="content || t as text; context: {$implicit: t}">
            {{ text }}
        </ng-container>
        <ng-template #t>
            <ng-content />
        </ng-template>
    `, isInline: true, dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiOption, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'button[tuiOption], a[tuiOption], label[tuiOption]',
                    imports: [PolymorpheusOutlet],
                    template: `
        <ng-container *polymorpheusOutlet="content || t as text; context: {$implicit: t}">
            {{ text }}
        </ng-container>
        <ng-template #t>
            <ng-content />
        </ng-template>
    `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    hostDirectives: [TuiWithIcons],
                    host: {
                        type: 'button',
                        role: 'option',
                        '[attr.disabled]': 'disabled || null',
                        '[class._with-dropdown]': 'dropdown?.()',
                        '(click)': 'onClick()',
                        '(mousemove.silent)': 'onMouseMove()',
                    },
                }]
        }], propDecorators: { disabled: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

function tuiInjectDataListSize() {
    const sizes = ['s', 'm', 'l'];
    const size = inject(TUI_DATA_LIST_HOST, { optional: true })?.size;
    return size && sizes.includes(size) ? size : 'l';
}
// TODO: Consider aria-activedescendant for proper accessibility implementation
class TuiDataListComponent {
    constructor() {
        this.options = EMPTY_QUERY;
        this.ngZone = inject(NgZone);
        this.destroyRef = inject(DestroyRef);
        this.el = tuiInjectElement();
        this.cdr = inject(ChangeDetectorRef);
        this.fallback = toSignal(inject(TUI_NOTHING_FOUND_MESSAGE));
        this.empty = signal(false);
        this.size = tuiInjectDataListSize();
    }
    onKeyDownArrow(current, step) {
        const { elements } = this;
        tuiMoveFocus(elements.indexOf(current), elements, step);
    }
    handleFocusLossIfNecessary(element = this.el) {
        if (tuiIsNativeFocusedIn(element)) {
            this.origin?.focus({ preventScroll: true });
        }
    }
    // TODO: Refactor to :has after Safari support bumped to 15
    ngAfterContentChecked() {
        timer(0)
            .pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            this.empty.set(!this.elements.length);
            this.cdr.detectChanges();
        });
    }
    getOptions(includeDisabled = false) {
        return this.options
            .filter(({ disabled }) => includeDisabled || !disabled)
            .map(({ value }) => value)
            .filter(tuiIsPresent);
    }
    onFocusIn(relatedTarget, currentTarget) {
        if (!currentTarget.contains(relatedTarget) && !this.origin) {
            this.origin = relatedTarget;
        }
    }
    get elements() {
        return Array.from(this.el.querySelectorAll('a,button,input'));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiDataListComponent, isStandalone: true, selector: "tui-data-list", inputs: { emptyContent: "emptyContent", size: "size" }, host: { attributes: { "role": "listbox" }, listeners: { "focusin": "onFocusIn($event.relatedTarget, $event.currentTarget)", "mousedown.prevent": "(0)", "wheel.silent.passive": "handleFocusLossIfNecessary()", "mouseleave": "handleFocusLossIfNecessary($event.target)", "keydown.tab": "handleFocusLossIfNecessary()", "keydown.shift.tab": "handleFocusLossIfNecessary()", "keydown.arrowDown.prevent": "onKeyDownArrow($event.target, 1)", "keydown.arrowUp.prevent": "onKeyDownArrow($event.target, -1)" }, properties: { "attr.data-size": "size" } }, providers: [tuiAsDataListAccessor(TuiDataListComponent)], queries: [{ propertyName: "options", predicate: i0.forwardRef(function () { return TuiOption; }), descendants: true }], ngImport: i0, template: "<ng-content />\n<div\n    *ngIf=\"empty()\"\n    class=\"t-empty\"\n>\n    <ng-container *polymorpheusOutlet=\"emptyContent || fallback() as text\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: ["tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: var(--t-0, 0rem)}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2rem;padding:.3125rem .5rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2.5rem;padding:.375rem .5rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{font:var(--tui-font-text-m);min-block-size:2.75rem;padding:.375rem .625rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;justify-content:space-between;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}tui-data-list [tuiOption]:hover,tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.75rem 0 auto;border-left:.5rem solid;border-right:.5rem solid}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-secondary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=\"\"]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:\"\"}tui-opt-group[data-label=\"\"]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-data-list', imports: [NgIf, PolymorpheusOutlet], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [tuiAsDataListAccessor(TuiDataListComponent)], host: {
                        role: 'listbox',
                        '[attr.data-size]': 'size',
                        '(focusin)': 'onFocusIn($event.relatedTarget, $event.currentTarget)',
                        '(mousedown.prevent)': '(0)',
                        '(wheel.silent.passive)': 'handleFocusLossIfNecessary()',
                        '(mouseleave)': 'handleFocusLossIfNecessary($event.target)',
                        '(keydown.tab)': 'handleFocusLossIfNecessary()',
                        '(keydown.shift.tab)': 'handleFocusLossIfNecessary()',
                        '(keydown.arrowDown.prevent)': 'onKeyDownArrow($event.target, 1)',
                        '(keydown.arrowUp.prevent)': 'onKeyDownArrow($event.target, -1)',
                    }, template: "<ng-content />\n<div\n    *ngIf=\"empty()\"\n    class=\"t-empty\"\n>\n    <ng-container *polymorpheusOutlet=\"emptyContent || fallback() as text\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: ["tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: var(--t-0, 0rem)}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2rem;padding:.3125rem .5rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2.5rem;padding:.375rem .5rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{font:var(--tui-font-text-m);min-block-size:2.75rem;padding:.375rem .625rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;justify-content:space-between;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}tui-data-list [tuiOption]:hover,tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.75rem 0 auto;border-left:.5rem solid;border-right:.5rem solid}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-secondary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=\"\"]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:\"\"}tui-opt-group[data-label=\"\"]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}\n"] }]
        }], propDecorators: { options: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiOption), { descendants: true }]
            }], emptyContent: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class TuiDataListDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDataListDirective, isStandalone: true, selector: "ng-template[tuiDataList]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDataListDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiDataList]',
                }]
        }] });
function tuiAsDataList(list) {
    return tuiProvide(TuiDataListDirective, list);
}

class TuiOptGroup {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiOptGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiOptGroup, isStandalone: true, selector: "tui-opt-group", inputs: { label: "label" }, host: { attributes: { "role": "group" }, properties: { "attr.data-label": "label" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiOptGroup, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-opt-group',
                    host: {
                        role: 'group',
                        '[attr.data-label]': 'label',
                    },
                }]
        }], propDecorators: { label: [{
                type: Input
            }] } });

const TuiDataList = [
    TuiDataListComponent,
    TuiDataListDirective,
    TuiOption,
    TuiOptGroup,
];

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_DATA_LIST_ACCESSOR, TUI_DATA_LIST_HOST, TUI_OPTION_CONTENT, TuiDataList, TuiDataListComponent, TuiDataListDirective, TuiOptGroup, TuiOption, tuiAsDataList, tuiAsDataListAccessor, tuiAsDataListHost, tuiAsOptionContent, tuiInjectDataListSize };
//# sourceMappingURL=taiga-ui-core-components-data-list.mjs.map
