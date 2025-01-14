import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { tuiPop } from '@taiga-ui/core/animations';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils/miscellaneous';
import { tuiCreateToken, tuiProvideOptions } from '@taiga-ui/cdk/utils/miscellaneous';

const TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS = {
    size: 'm',
};
const TUI_BADGE_NOTIFICATION_OPTIONS = tuiCreateToken(TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
function tuiBadgeNotificationOptionsProvider(options) {
    return tuiProvideOptions(TUI_BADGE_NOTIFICATION_OPTIONS, options, TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
}

class TuiBadgeNotification {
    constructor() {
        this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.size = inject(TUI_BADGE_NOTIFICATION_OPTIONS).size;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBadgeNotification, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiBadgeNotification, isStandalone: true, selector: "tui-badge-notification", inputs: { size: "size" }, host: { properties: { "attr.data-size": "size", "@tuiPop": "options" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-font-text-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}:host[data-size=m]{--t-size: 1.25rem}:host[data-size=s]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-font-text-xs)}:host[data-size=xs]{--t-size: .375rem;padding:0;font-size:0}:host :host-context([tuiIconButton]){position:absolute;right:25%;top:25%}\n"], animations: [tuiPop], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiBadgeNotification, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-badge-notification', template: '<ng-content></ng-content>', changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiPop], host: {
                        '[attr.data-size]': 'size',
                        '[@tuiPop]': 'options',
                    }, styles: [":host{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-font-text-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}:host[data-size=m]{--t-size: 1.25rem}:host[data-size=s]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-font-text-xs)}:host[data-size=xs]{--t-size: .375rem;padding:0;font-size:0}:host :host-context([tuiIconButton]){position:absolute;right:25%;top:25%}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS, TUI_BADGE_NOTIFICATION_OPTIONS, TuiBadgeNotification, tuiBadgeNotificationOptionsProvider };
//# sourceMappingURL=taiga-ui-kit-components-badge-notification.mjs.map
