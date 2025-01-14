import * as i0 from '@angular/core';
import { inject, Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { tuiFadeIn, tuiScaleIn } from '@taiga-ui/core/animations';
import { TUI_ANIMATIONS_SPEED } from '@taiga-ui/core/tokens';
import { tuiToAnimationOptions } from '@taiga-ui/core/utils/miscellaneous';

class TuiPulse {
    constructor() {
        this.animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
        this.playing = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPulse, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiPulse, isStandalone: true, selector: "tui-pulse", inputs: { playing: "playing" }, host: { properties: { "@tuiFadeIn": "animation", "@tuiScaleIn": "animation", "style.--t-animation-state": "playing ? 'running' : 'paused'" } }, ngImport: i0, template: '', isInline: true, styles: ["@keyframes tuiPulse{0%{opacity:.3;transform:scale(1)}20%{opacity:0;transform:scale(.5)}25%{opacity:.3;transform:scale(1)}45%{opacity:0;transform:scale(.5)}50%{opacity:.3;transform:scale(1)}70%{opacity:0;transform:scale(.5)}75%{opacity:.3;transform:scale(1)}95%{opacity:0;transform:scale(.5)}to{opacity:.3;transform:scale(1)}}:host{position:relative;color:var(--tui-background-accent-1)}:host:before{content:\"\";position:absolute;top:-.5rem;left:-.5rem;inline-size:1rem;block-size:1rem;border-radius:100%;background:currentColor;opacity:.3;animation:tuiPulse 3s ease-in-out infinite;animation-play-state:var(--t-animation-state)}:host:after{content:\"\";position:absolute;inline-size:.5rem;block-size:.5rem;border-radius:100%;transform:translate(-50%,-50%);background:currentColor}\n"], animations: [tuiFadeIn, tuiScaleIn], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiPulse, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-pulse', template: '', changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiFadeIn, tuiScaleIn], host: {
                        '[@tuiFadeIn]': 'animation',
                        '[@tuiScaleIn]': 'animation',
                        '[style.--t-animation-state]': "playing ? 'running' : 'paused'",
                    }, styles: ["@keyframes tuiPulse{0%{opacity:.3;transform:scale(1)}20%{opacity:0;transform:scale(.5)}25%{opacity:.3;transform:scale(1)}45%{opacity:0;transform:scale(.5)}50%{opacity:.3;transform:scale(1)}70%{opacity:0;transform:scale(.5)}75%{opacity:.3;transform:scale(1)}95%{opacity:0;transform:scale(.5)}to{opacity:.3;transform:scale(1)}}:host{position:relative;color:var(--tui-background-accent-1)}:host:before{content:\"\";position:absolute;top:-.5rem;left:-.5rem;inline-size:1rem;block-size:1rem;border-radius:100%;background:currentColor;opacity:.3;animation:tuiPulse 3s ease-in-out infinite;animation-play-state:var(--t-animation-state)}:host:after{content:\"\";position:absolute;inline-size:.5rem;block-size:.5rem;border-radius:100%;transform:translate(-50%,-50%);background:currentColor}\n"] }]
        }], propDecorators: { playing: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { TuiPulse };
//# sourceMappingURL=taiga-ui-kit-components-pulse.mjs.map
