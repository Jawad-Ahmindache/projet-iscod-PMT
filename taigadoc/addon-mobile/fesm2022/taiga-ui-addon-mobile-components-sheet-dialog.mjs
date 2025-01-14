import { __decorate } from 'tslib';
import { NgForOf, NgIf } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, ViewChildren, Injectable, Directive } from '@angular/core';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiSlideInTop } from '@taiga-ui/core/animations';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiGetDuration } from '@taiga-ui/core/utils/miscellaneous';
import { shouldCall } from '@taiga-ui/event-plugins';
import { injectContext, PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { TuiPopoverDirective } from '@taiga-ui/cdk/directives/popover';
import { TuiPopoverService, TuiThemeColorService, tuiAsPopover } from '@taiga-ui/cdk/services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TUI_DIALOGS } from '@taiga-ui/core/components/dialog';
import { startWith, pairwise } from 'rxjs';
import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';

// So we re-enter ngZone and trigger change detection
function isCloseable() {
    return this.context.closeable === true;
}
class TuiSheetDialogComponent {
    constructor() {
        this.stops = EMPTY_QUERY;
        this.el = tuiInjectElement();
        this.pointers = 0;
        this.slideInTop = {
            value: '',
            params: {
                start: '100vh',
                duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
            },
        };
        this.context = injectContext();
    }
    ngAfterViewInit() {
        this.el.scrollTop =
            [
                ...this.stops.map((e) => e.nativeElement.offsetTop - this.context.offset),
                this.el.clientHeight ?? Infinity,
            ][this.context.initial] ?? 0;
    }
    close() {
        this.context.$implicit.complete();
    }
    onPointerChange(delta) {
        this.pointers += delta;
        if (!this.pointers && this.el.scrollTop <= 0) {
            this.close();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSheetDialogComponent, isStandalone: true, selector: "tui-sheet-dialog", host: { listeners: { "document:touchstart.passive.silent": "onPointerChange(1)", "document:touchend.silent": "onPointerChange(-1)", "document:touchcancel.silent": "onPointerChange(-1)", "scroll.silent": "onPointerChange(0)", "click.self": "close()" }, properties: { "@tuiSlideInTop": "slideInTop", "style.--tui-offset.px": "context.offset", "class._closeable": "context.closeable === true" } }, viewQueries: [{ propertyName: "stops", predicate: ["stops"], descendants: true }], ngImport: i0, template: "<div class=\"t-stops\">\n    <div\n        *ngFor=\"let stop of context.stops\"\n        #stops\n        class=\"t-stop\"\n        [style.margin-top]=\"stop\"\n    ></div>\n</div>\n<div class=\"t-sheet\">\n    <div\n        *ngIf=\"context.bar\"\n        class=\"t-top\"\n    ></div>\n    <h2\n        *ngIf=\"context.label\"\n        class=\"t-heading\"\n        [id]=\"context.id\"\n    >\n        <ng-container *polymorpheusOutlet=\"context.label as label; context: context\">\n            {{ label }}\n        </ng-container>\n    </h2>\n    <div class=\"t-content\">\n        <ng-container *polymorpheusOutlet=\"context.content as text; context: context\">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n", styles: [":host{scrollbar-width:none;-ms-overflow-style:none;display:flex;inline-size:100%;max-inline-size:40rem;block-size:calc(100% - var(--tui-offset));flex-direction:column;font:var(--tui-font-text-m);overflow-y:scroll;scroll-snap-type:y mandatory;margin:var(--tui-offset) auto 0;border-radius:.75rem .75rem 0 0}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";z-index:-1}:host._closeable{display:block}:host._closeable .t-stops{display:flex}.t-stops{display:none;block-size:100%;scroll-snap-stop:always;scroll-snap-align:start;pointer-events:none}.t-stop{position:relative;top:env(safe-area-inset-bottom);scroll-snap-stop:normal;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-sheet{scrollbar-width:none;-ms-overflow-style:none;inline-size:100%;box-shadow:var(--tui-shadow-small);border-radius:inherit;padding:0 1rem;margin-block-start:auto;background:var(--tui-background-elevation-1);box-sizing:border-box;scroll-snap-stop:always;scroll-snap-align:start}.t-sheet::-webkit-scrollbar,.t-sheet::-webkit-scrollbar-thumb{display:none}.t-top{position:sticky;top:0;z-index:1;block-size:1.5rem;margin:0 -1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-top:after{content:\"\";position:absolute;top:.5rem;left:50%;inline-size:2rem;block-size:.25rem;transform:translate(-50%);background:var(--tui-background-neutral-2);border-radius:1rem}.t-heading{position:sticky;top:1.5rem;z-index:1;margin:0 -1rem;padding:.75rem 1rem;font:var(--tui-font-heading-6);background:var(--tui-background-elevation-1)}.t-heading:first-child{top:0;border-radius:inherit}.t-heading:last-child{padding-block-end:1.5rem}.t-content{position:relative;isolation:isolate;padding-block-end:calc(1.5em + env(safe-area-inset-bottom))}.t-content:after{content:\"\";position:relative;top:calc(1.5em + env(safe-area-inset-bottom));z-index:-1;display:block;scroll-snap-stop:always;scroll-snap-align:end;border-image:conic-gradient(var(--tui-background-elevation-1) 0 0) fill 0/0/0 100vh 100vh}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }], animations: [tuiSlideInTop], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    shouldCall(isCloseable)
], TuiSheetDialogComponent.prototype, "close", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialogComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-sheet-dialog', imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiButton], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideInTop], host: {
                        '[@tuiSlideInTop]': 'slideInTop',
                        '[style.--tui-offset.px]': 'context.offset',
                        '[class._closeable]': 'context.closeable === true',
                        '(document:touchstart.passive.silent)': 'onPointerChange(1)',
                        '(document:touchend.silent)': 'onPointerChange(-1)',
                        '(document:touchcancel.silent)': 'onPointerChange(-1)',
                        '(scroll.silent)': 'onPointerChange(0)',
                        '(click.self)': 'close()',
                    }, template: "<div class=\"t-stops\">\n    <div\n        *ngFor=\"let stop of context.stops\"\n        #stops\n        class=\"t-stop\"\n        [style.margin-top]=\"stop\"\n    ></div>\n</div>\n<div class=\"t-sheet\">\n    <div\n        *ngIf=\"context.bar\"\n        class=\"t-top\"\n    ></div>\n    <h2\n        *ngIf=\"context.label\"\n        class=\"t-heading\"\n        [id]=\"context.id\"\n    >\n        <ng-container *polymorpheusOutlet=\"context.label as label; context: context\">\n            {{ label }}\n        </ng-container>\n    </h2>\n    <div class=\"t-content\">\n        <ng-container *polymorpheusOutlet=\"context.content as text; context: context\">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n", styles: [":host{scrollbar-width:none;-ms-overflow-style:none;display:flex;inline-size:100%;max-inline-size:40rem;block-size:calc(100% - var(--tui-offset));flex-direction:column;font:var(--tui-font-text-m);overflow-y:scroll;scroll-snap-type:y mandatory;margin:var(--tui-offset) auto 0;border-radius:.75rem .75rem 0 0}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";z-index:-1}:host._closeable{display:block}:host._closeable .t-stops{display:flex}.t-stops{display:none;block-size:100%;scroll-snap-stop:always;scroll-snap-align:start;pointer-events:none}.t-stop{position:relative;top:env(safe-area-inset-bottom);scroll-snap-stop:normal;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-sheet{scrollbar-width:none;-ms-overflow-style:none;inline-size:100%;box-shadow:var(--tui-shadow-small);border-radius:inherit;padding:0 1rem;margin-block-start:auto;background:var(--tui-background-elevation-1);box-sizing:border-box;scroll-snap-stop:always;scroll-snap-align:start}.t-sheet::-webkit-scrollbar,.t-sheet::-webkit-scrollbar-thumb{display:none}.t-top{position:sticky;top:0;z-index:1;block-size:1.5rem;margin:0 -1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-top:after{content:\"\";position:absolute;top:.5rem;left:50%;inline-size:2rem;block-size:.25rem;transform:translate(-50%);background:var(--tui-background-neutral-2);border-radius:1rem}.t-heading{position:sticky;top:1.5rem;z-index:1;margin:0 -1rem;padding:.75rem 1rem;font:var(--tui-font-heading-6);background:var(--tui-background-elevation-1)}.t-heading:first-child{top:0;border-radius:inherit}.t-heading:last-child{padding-block-end:1.5rem}.t-content{position:relative;isolation:isolate;padding-block-end:calc(1.5em + env(safe-area-inset-bottom))}.t-content:after{content:\"\";position:relative;top:calc(1.5em + env(safe-area-inset-bottom));z-index:-1;display:block;scroll-snap-stop:always;scroll-snap-align:end;border-image:conic-gradient(var(--tui-background-elevation-1) 0 0) fill 0/0/0 100vh 100vh}\n"] }]
        }], propDecorators: { stops: [{
                type: ViewChildren,
                args: ['stops']
            }], close: [] } });

const TUI_SHEET_DIALOG_DEFAULT_OPTIONS = {
    label: '',
    stops: [],
    initial: 0,
    offset: 16,
    closeable: true,
    data: undefined,
    bar: true,
};
/**
 * Default parameters for mobile dialog component
 */
const TUI_SHEET_DIALOG_OPTIONS = tuiCreateToken(TUI_SHEET_DIALOG_DEFAULT_OPTIONS);
function tuiSheetDialogOptionsProvider(options) {
    return tuiProvideOptions(TUI_SHEET_DIALOG_OPTIONS, options, TUI_SHEET_DIALOG_DEFAULT_OPTIONS);
}

const THEME = '#404040';
class TuiSheetDialogService extends TuiPopoverService {
    constructor() {
        super(...arguments);
        this.theme = inject(TuiThemeColorService);
        this.initial = this.theme.color;
        this.$ = this.items$
            .pipe(startWith([]), pairwise(), takeUntilDestroyed())
            .subscribe(([prev, next]) => {
            if (!prev.length && next.length) {
                this.initial = this.theme.color;
                this.theme.color = THEME;
            }
            if (!next.length && prev.length) {
                this.theme.color = this.initial;
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialogService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialogService, providedIn: 'root', useFactory: () => new TuiSheetDialogService(TUI_DIALOGS, TuiSheetDialogComponent, inject(TUI_SHEET_DIALOG_OPTIONS)) }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: () => new TuiSheetDialogService(TUI_DIALOGS, TuiSheetDialogComponent, inject(TUI_SHEET_DIALOG_OPTIONS)),
                }]
        }] });

class TuiSheetDialog extends TuiPopoverDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialog, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiSheetDialog, isStandalone: true, selector: "ng-template[tuiSheetDialog]", inputs: { options: ["tuiSheetDialogOptions", "options"], open: ["tuiSheetDialog", "open"] }, outputs: { openChange: "tuiSheetDialogChange" }, providers: [tuiAsPopover(TuiSheetDialogService)], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSheetDialog, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'ng-template[tuiSheetDialog]',
                    inputs: ['options: tuiSheetDialogOptions', 'open: tuiSheetDialog'],
                    outputs: ['openChange: tuiSheetDialogChange'],
                    providers: [tuiAsPopover(TuiSheetDialogService)],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_SHEET_DIALOG_DEFAULT_OPTIONS, TUI_SHEET_DIALOG_OPTIONS, TuiSheetDialog, TuiSheetDialogComponent, TuiSheetDialogService, tuiSheetDialogOptionsProvider };
//# sourceMappingURL=taiga-ui-addon-mobile-components-sheet-dialog.mjs.map
