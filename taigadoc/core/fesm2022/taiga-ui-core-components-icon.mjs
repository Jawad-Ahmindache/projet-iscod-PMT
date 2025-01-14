import * as i0 from '@angular/core';
import { signal, inject, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Pipe } from '@angular/core';
import { tuiInjectIconResolver, TUI_ICON_START, TUI_ICON_END } from '@taiga-ui/core/tokens';

class TuiIcon {
    constructor() {
        this.resolver = tuiInjectIconResolver();
        this.backgroundSrc = signal(null);
        this.iconSrc = signal(this.resolve(inject(TUI_ICON_START, { self: true, optional: true }) ||
            inject(TUI_ICON_END, { self: true, optional: true })));
    }
    set icon(icon) {
        this.iconSrc.set(this.resolve(icon));
    }
    set background(background) {
        this.backgroundSrc.set(this.resolve(background));
    }
    resolve(value) {
        return value ? `url(${this.resolver(value)})` : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIcon, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiIcon, isStandalone: true, selector: "tui-icon", inputs: { icon: "icon", background: "background" }, host: { properties: { "style.--t-icon": "iconSrc() || \"url()\"", "style.--t-icon-bg": "backgroundSrc()" } }, ngImport: i0, template: '', isInline: true, styles: ["tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIcon, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-icon', template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[style.--t-icon]': 'iconSrc() || "url()"',
                        '[style.--t-icon-bg]': 'backgroundSrc()',
                    }, styles: ["tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover) and (pointer: fine){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:\"\";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;background:currentColor}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }], background: [{
                type: Input
            }] } });

class TuiIconPipe {
    constructor() {
        this.transform = tuiInjectIconResolver();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIconPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiIconPipe, isStandalone: true, name: "tuiIcon" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiIconPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiIcon',
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiIcon, TuiIconPipe };
//# sourceMappingURL=taiga-ui-core-components-icon.mjs.map
