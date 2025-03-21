import * as i0 from '@angular/core';
import { inject, ElementRef, Directive, ContentChildren, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { tuiQueryListChanges, tuiControlValue, tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiCreateOptions } from '@taiga-ui/cdk/utils/di';
import { tuiInjectElement, tuiIsHTMLElement } from '@taiga-ui/cdk/utils/dom';
import { tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiBadgeNotificationOptionsProvider } from '@taiga-ui/kit/components/badge-notification';
import { NgControl, RadioControlValueAccessor } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { switchMap, map } from 'rxjs';

class TuiSegmentedDirective {
    constructor() {
        this.controls = EMPTY_QUERY;
        this.radios = EMPTY_QUERY;
        this.links = EMPTY_QUERY;
        this.elements = EMPTY_QUERY;
        this.component = inject(TuiSegmented);
        this.el = tuiInjectElement();
    }
    ngAfterContentInit() {
        tuiQueryListChanges(this.controls)
            .pipe(switchMap(() => tuiControlValue(this.controls.first)), map((value) => this.radios.toArray().findIndex((c) => c.value === value)))
            .subscribe((index) => {
            this.component.update(index);
        });
    }
    ngAfterContentChecked() {
        if (this.links.length) {
            this.update(this.elements.get(this.linkIndex)?.nativeElement || null);
        }
    }
    update(target) {
        this.component.update(this.getIndex(target));
    }
    get linkIndex() {
        return this.links.toArray().findIndex((link) => link.isActive);
    }
    getIndex(element) {
        return Array.from(this.el.children).findIndex((tab) => tab.contains(element));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSegmentedDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiSegmentedDirective, isStandalone: true, host: { listeners: { "click": "update($event.target)" } }, queries: [{ propertyName: "controls", predicate: NgControl, descendants: true }, { propertyName: "radios", predicate: RadioControlValueAccessor, descendants: true }, { propertyName: "links", predicate: RouterLinkActive }, { propertyName: "elements", predicate: RouterLinkActive, read: ElementRef }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSegmentedDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    host: {
                        '(click)': 'update($event.target)',
                    },
                }]
        }], propDecorators: { controls: [{
                type: ContentChildren,
                args: [NgControl, { descendants: true }]
            }], radios: [{
                type: ContentChildren,
                args: [RadioControlValueAccessor, { descendants: true }]
            }], links: [{
                type: ContentChildren,
                args: [RouterLinkActive]
            }], elements: [{
                type: ContentChildren,
                args: [RouterLinkActive, { read: ElementRef }]
            }] } });

const [TUI_SEGMENTED_OPTIONS, tuiSegmentedOptionsProvider] = tuiCreateOptions({
    size: 's',
});
class TuiSegmented {
    constructor() {
        this.el = tuiInjectElement();
        this.sub = inject(ResizeObserverService, { self: true })
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => this.refresh());
        this.size = inject(TUI_SEGMENTED_OPTIONS).size;
        this.activeItemIndex = 0;
        this.activeItemIndexChange = new EventEmitter();
    }
    ngOnChanges() {
        this.refresh();
    }
    update(activeItemIndex) {
        if (activeItemIndex === this.activeItemIndex || activeItemIndex < 0) {
            return;
        }
        this.activeItemIndex = activeItemIndex;
        this.activeItemIndexChange.emit(activeItemIndex);
        this.refresh();
    }
    get activeElement() {
        return this.el.children.item(this.activeItemIndex);
    }
    refresh() {
        const el = this.activeElement;
        if (!tuiIsHTMLElement(el)) {
            return;
        }
        Array.from(this.el.children).forEach((e) => e.classList.remove('tui-segmented_active'));
        el.classList.add('tui-segmented_active');
        const { offsetWidth = 0, offsetLeft = 0, offsetTop = 0 } = el;
        this.el.style.setProperty('--t-top', tuiPx(offsetTop));
        this.el.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.el.style.setProperty('--t-width', tuiPx(offsetWidth));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSegmented, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSegmented, isStandalone: true, selector: "tui-segmented", inputs: { size: "size", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, host: { properties: { "attr.data-size": "size" } }, providers: [ResizeObserverService, tuiBadgeNotificationOptionsProvider({ size: 's' })], usesOnChanges: true, hostDirectives: [{ directive: TuiSegmentedDirective }], ngImport: i0, template: '<ng-content />', isInline: true, styles: ["tui-segmented{position:relative;display:flex;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(black,black);mask-image:linear-gradient(#000,#000)}tui-segmented[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-segmented[data-size=s] tui-icon{font-size:1rem}tui-segmented[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-font-text-m);border-radius:var(--tui-radius-m)}tui-segmented[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-font-text-l);border-radius:var(--tui-radius-l)}tui-segmented[data-size=l]>*:before{block-size:1.25rem}tui-segmented>a,tui-segmented>button,tui-segmented>label,tui-segmented>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;block-size:var(--t-height);white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented>a>*,tui-segmented>button>*,tui-segmented>label>*,tui-segmented>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented>a:focus-visible,tui-segmented>button:focus-visible,tui-segmented>label:focus-visible,tui-segmented>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media (hover: hover) and (pointer: fine){tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>a.tui-segmented_active:hover,tui-segmented>button.tui-segmented_active:hover,tui-segmented>label.tui-segmented_active:hover,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active:hover{opacity:var(--tui-disabled-opacity)}}tui-segmented>a:active,tui-segmented>button:active,tui-segmented>label:active,tui-segmented>label>input:not([tuiRadio]):active,tui-segmented>a:active+*,tui-segmented>button:active+*,tui-segmented>label:active+*,tui-segmented>label>input:not([tuiRadio]):active+*,tui-segmented>a.tui-segmented_active,tui-segmented>button.tui-segmented_active,tui-segmented>label.tui-segmented_active,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented>a.tui-segmented_active+*,tui-segmented>button.tui-segmented_active+*,tui-segmented>label.tui-segmented_active+*,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>label>input:not([tuiRadio]){position:absolute;top:-.125rem;left:-.125rem;right:-.125rem;bottom:-.125rem;background:transparent!important}tui-segmented:before{transition-property:top,left,width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;left:var(--t-left);top:var(--t-top);block-size:var(--t-height);inline-size:var(--t-width);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}[tuiTheme=dark] tui-segmented,tui-segmented[tuiTheme=dark]{--tui-background-base: var(--tui-background-neutral-1-hover)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSegmented, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-segmented', template: '<ng-content />', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [ResizeObserverService, tuiBadgeNotificationOptionsProvider({ size: 's' })], hostDirectives: [TuiSegmentedDirective], host: {
                        '[attr.data-size]': 'size',
                    }, styles: ["tui-segmented{position:relative;display:flex;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden;-webkit-mask-image:linear-gradient(black,black);mask-image:linear-gradient(#000,#000)}tui-segmented[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-segmented[data-size=s] tui-icon{font-size:1rem}tui-segmented[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-font-text-m);border-radius:var(--tui-radius-m)}tui-segmented[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-font-text-l);border-radius:var(--tui-radius-l)}tui-segmented[data-size=l]>*:before{block-size:1.25rem}tui-segmented>a,tui-segmented>button,tui-segmented>label,tui-segmented>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;block-size:var(--t-height);white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented>a>*,tui-segmented>button>*,tui-segmented>label>*,tui-segmented>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented>a:focus-visible,tui-segmented>button:focus-visible,tui-segmented>label:focus-visible,tui-segmented>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media (hover: hover) and (pointer: fine){tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>a.tui-segmented_active:hover,tui-segmented>button.tui-segmented_active:hover,tui-segmented>label.tui-segmented_active:hover,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active:hover{opacity:var(--tui-disabled-opacity)}}tui-segmented>a:active,tui-segmented>button:active,tui-segmented>label:active,tui-segmented>label>input:not([tuiRadio]):active,tui-segmented>a:active+*,tui-segmented>button:active+*,tui-segmented>label:active+*,tui-segmented>label>input:not([tuiRadio]):active+*,tui-segmented>a.tui-segmented_active,tui-segmented>button.tui-segmented_active,tui-segmented>label.tui-segmented_active,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented>a.tui-segmented_active+*,tui-segmented>button.tui-segmented_active+*,tui-segmented>label.tui-segmented_active+*,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>label>input:not([tuiRadio]){position:absolute;top:-.125rem;left:-.125rem;right:-.125rem;bottom:-.125rem;background:transparent!important}tui-segmented:before{transition-property:top,left,width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:\"\";position:absolute;left:var(--t-left);top:var(--t-top);block-size:var(--t-height);inline-size:var(--t-width);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}[tuiTheme=dark] tui-segmented,tui-segmented[tuiTheme=dark]{--tui-background-base: var(--tui-background-neutral-1-hover)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], activeItemIndex: [{
                type: Input
            }], activeItemIndexChange: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_SEGMENTED_OPTIONS, TuiSegmented, TuiSegmentedDirective, tuiSegmentedOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-segmented.mjs.map
