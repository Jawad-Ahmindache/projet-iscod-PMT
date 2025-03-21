import type { AnimationOptions } from '@angular/animations';
export declare const TUI_ANIMATIONS_DEFAULT_DURATION = 300;
export declare function tuiToAnimationOptions(speed: number, easing?: string): AnimationOptions;
export declare function tuiGetDuration(speed: number): number;
