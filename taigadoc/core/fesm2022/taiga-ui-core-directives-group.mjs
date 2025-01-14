import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, Directive, Input } from '@angular/core';
import { tuiCreateToken, tuiProvideOptions, tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';

const TUI_GROUP_DEFAULT_OPTIONS = {
    size: 'l',
    collapsed: false,
    rounded: true,
    orientation: 'horizontal',
};
const TUI_GROUP_OPTIONS = tuiCreateToken(TUI_GROUP_DEFAULT_OPTIONS);
function tuiGroupOptionsProvider(options) {
    return tuiProvideOptions(TUI_GROUP_OPTIONS, options, TUI_GROUP_DEFAULT_OPTIONS);
}

class TuiGroupStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGroupStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiGroupStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-group" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-clip: inset(-1rem 1px -1rem -1rem)}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0}[tuiGroup]>*:disabled,[tuiGroup]>*._disabled{z-index:0}[tuiGroup]>*:invalid:not([data-mode]),[tuiGroup]>*[data-mode~=invalid]{z-index:2;--t-group-clip: none}[tuiGroup]>*:has(:invalid:not([data-mode])),[tuiGroup]>*:has([data-mode~=invalid]){z-index:2;--t-group-clip: none}[tuiGroup]>*:focus-within{z-index:3;--t-group-clip: none}[tuiGroup]>*:has([data-focus=true]){z-index:3;--t-group-clip: none}[tuiGroup]>*:checked:not([data-mode]),[tuiGroup]>*[data-mode~=checked]{z-index:4;--t-group-clip: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:4;--t-group-clip: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin);clip-path:var(--t-group-clip)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}[tuiGroup]>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-clip: inset(-1rem -1rem 1px -1rem)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGroupStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-group',
                    }, styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-clip: inset(-1rem 1px -1rem -1rem)}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0}[tuiGroup]>*:disabled,[tuiGroup]>*._disabled{z-index:0}[tuiGroup]>*:invalid:not([data-mode]),[tuiGroup]>*[data-mode~=invalid]{z-index:2;--t-group-clip: none}[tuiGroup]>*:has(:invalid:not([data-mode])),[tuiGroup]>*:has([data-mode~=invalid]){z-index:2;--t-group-clip: none}[tuiGroup]>*:focus-within{z-index:3;--t-group-clip: none}[tuiGroup]>*:has([data-focus=true]){z-index:3;--t-group-clip: none}[tuiGroup]>*:checked:not([data-mode]),[tuiGroup]>*[data-mode~=checked]{z-index:4;--t-group-clip: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:4;--t-group-clip: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin);clip-path:var(--t-group-clip)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}[tuiGroup]>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-clip: inset(-1rem -1rem 1px -1rem)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"] }]
        }] });
class TuiGroup {
    constructor() {
        this.options = inject(TUI_GROUP_OPTIONS);
        this.nothing = tuiWithStyles(TuiGroupStyles);
        this.orientation = this.options.orientation;
        this.collapsed = this.options.collapsed;
        this.rounded = this.options.rounded;
        this.size = this.options.size;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGroup, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiGroup, isStandalone: true, selector: "[tuiGroup]:not(ng-container)", inputs: { orientation: "orientation", collapsed: "collapsed", rounded: "rounded", size: "size" }, host: { attributes: { "tuiGroup": "", "role": "group" }, properties: { "attr.data-orientation": "orientation", "attr.data-size": "size", "style.--t-group-radius": "rounded ? null : 0", "style.--t-group-margin.rem": "collapsed ? null : 0.125", "style.--t-group-clip": "collapsed ? null : 0" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiGroup, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiGroup]:not(ng-container)',
                    host: {
                        tuiGroup: '',
                        role: 'group',
                        '[attr.data-orientation]': 'orientation',
                        '[attr.data-size]': 'size',
                        '[style.--t-group-radius]': 'rounded ? null : 0',
                        '[style.--t-group-margin.rem]': 'collapsed ? null : 0.125',
                        '[style.--t-group-clip]': 'collapsed ? null : 0',
                    },
                }]
        }], propDecorators: { orientation: [{
                type: Input
            }], collapsed: [{
                type: Input
            }], rounded: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_GROUP_DEFAULT_OPTIONS, TUI_GROUP_OPTIONS, TuiGroup, tuiGroupOptionsProvider };
//# sourceMappingURL=taiga-ui-core-directives-group.mjs.map
