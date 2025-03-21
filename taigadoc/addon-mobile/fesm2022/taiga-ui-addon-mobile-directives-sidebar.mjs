import * as i0 from '@angular/core';
import { inject, INJECTOR, TemplateRef, Directive, Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { tuiSlideIn } from '@taiga-ui/core/animations';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils/miscellaneous';
import { PolymorpheusTemplate, PolymorpheusComponent, PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { TuiPopupService } from '@taiga-ui/core/directives/popup';

/**
 * @deprecated use {@link TuiDrawer} instead
 */
class TuiSidebarDirective extends PolymorpheusTemplate {
    constructor() {
        super(...arguments);
        this.injector = inject(INJECTOR);
        this.service = inject(TuiPopupService);
        this.component = new PolymorpheusComponent(TuiSidebarComponent, this.injector);
        this.sidebarRef = null;
        this.direction = 'left';
        this.autoWidth = false;
        this.content = inject((TemplateRef));
    }
    set tuiSidebar(open) {
        if (open) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    ngOnDestroy() {
        this.hide();
    }
    show() {
        if (this.sidebarRef !== null) {
            return;
        }
        this.sidebarRef = this.service.add(this.component);
        this.sidebarRef.changeDetectorRef.detectChanges();
    }
    hide() {
        if (this.sidebarRef === null) {
            return;
        }
        this.service.remove(this.sidebarRef);
        this.sidebarRef = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSidebarDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiSidebarDirective, isStandalone: true, selector: "[tuiSidebar]", inputs: { direction: ["tuiSidebarDirection", "direction"], autoWidth: ["tuiSidebarAutoWidth", "autoWidth"], tuiSidebar: "tuiSidebar" }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSidebarDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiSidebar]',
                }]
        }], propDecorators: { direction: [{
                type: Input,
                args: ['tuiSidebarDirection']
            }], autoWidth: [{
                type: Input,
                args: ['tuiSidebarAutoWidth']
            }], tuiSidebar: [{
                type: Input
            }] } });

/**
 * @deprecated use {@link TuiDrawer} instead
 */
class TuiSidebarComponent {
    constructor() {
        this.directive = inject(TuiSidebarDirective);
        this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.left = { ...this.options, value: 'left' };
        this.right = { ...this.options, value: 'right' };
    }
    ngDoCheck() {
        this.directive.check();
    }
    get animation() {
        return this.direction === 'left' ? this.left : this.right;
    }
    get direction() {
        return this.directive.direction;
    }
    get content() {
        return this.directive.content;
    }
    get autoWidth() {
        return this.directive.autoWidth;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSidebarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSidebarComponent, isStandalone: true, selector: "aside[tuiSidebar]", host: { properties: { "class": "\"t-\" + direction", "@tuiSlideIn": "animation" } }, ngImport: i0, template: "<div\n    tuiActiveZone\n    class=\"t-wrapper\"\n    [class.t-wrapper_auto-width]=\"autoWidth\"\n>\n    <ng-container *polymorpheusOutlet=\"content as text\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex}:host:before,:host:after{position:absolute;top:0;left:0;inline-size:100%;content:\"\";block-size:100%;background:#00000061;animation:tuiFadeIn var(--tui-duration)}:host:before{left:-100%;inline-size:200%}:host:after{left:100%}:host.ng-animating:before,:host.ng-animating:after{opacity:0;transition:opacity var(--tui-duration)}:host.t-right{justify-content:flex-end}:host.t-left{justify-content:flex-start}.t-wrapper{position:relative;display:flex;flex-direction:column;background:var(--tui-background-base);box-shadow:0 10rem var(--tui-background-base);inline-size:17.25rem}.t-wrapper_auto-width{inline-size:auto}\n"], dependencies: [{ kind: "directive", type: PolymorpheusOutlet, selector: "[polymorpheusOutlet]", inputs: ["polymorpheusOutlet", "polymorpheusOutletContext"] }, { kind: "directive", type: TuiActiveZone, selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)", inputs: ["tuiActiveZoneParent"], outputs: ["tuiActiveZoneChange"], exportAs: ["tuiActiveZone"] }], animations: [tuiSlideIn], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSidebarComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'aside[tuiSidebar]', imports: [PolymorpheusOutlet, TuiActiveZone], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiSlideIn], host: {
                        '[class]': '"t-" + direction',
                        '[@tuiSlideIn]': 'animation',
                    }, template: "<div\n    tuiActiveZone\n    class=\"t-wrapper\"\n    [class.t-wrapper_auto-width]=\"autoWidth\"\n>\n    <ng-container *polymorpheusOutlet=\"content as text\">\n        {{ text }}\n    </ng-container>\n</div>\n", styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex}:host:before,:host:after{position:absolute;top:0;left:0;inline-size:100%;content:\"\";block-size:100%;background:#00000061;animation:tuiFadeIn var(--tui-duration)}:host:before{left:-100%;inline-size:200%}:host:after{left:100%}:host.ng-animating:before,:host.ng-animating:after{opacity:0;transition:opacity var(--tui-duration)}:host.t-right{justify-content:flex-end}:host.t-left{justify-content:flex-start}.t-wrapper{position:relative;display:flex;flex-direction:column;background:var(--tui-background-base);box-shadow:0 10rem var(--tui-background-base);inline-size:17.25rem}.t-wrapper_auto-width{inline-size:auto}\n"] }]
        }] });

const TuiSidebar = [TuiSidebarComponent, TuiSidebarDirective];

/**
 * Generated bundle index. Do not edit.
 */

export { TuiSidebar, TuiSidebarComponent, TuiSidebarDirective };
//# sourceMappingURL=taiga-ui-addon-mobile-directives-sidebar.mjs.map
