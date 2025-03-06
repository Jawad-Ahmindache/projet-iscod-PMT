import { tuiGetElementObscures } from '@taiga-ui/cdk/utils/dom';

const KEYS = [
    'Spacebar',
    'Backspace',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Left',
    'Right',
    'End',
    'Home',
];
/**
 * Check if pressed key is interactive in terms of input field
 */
function tuiIsEditingKey(key = '') {
    return key.length === 1 || KEYS.includes(key);
}

/**
 * @internal
 */
function tuiIsObscured(el, exceptSelector = 'tui-hints') {
    return !!tuiGetElementObscures(el)?.some((el) => !el.closest(exceptSelector));
}

function tuiOverrideOptions(override, fallback) {
    return (directive, options) => {
        const result = directive || { ...(options || fallback) };
        Object.keys(override).forEach((key) => {
            // Update directive props with new defaults before inputs are processed
            result[key] = override[key];
        });
        return result;
    };
}

const SIZES = {
    xxs: 0,
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
};
/**
 * Compares size constants to determine if first size is bigger than the second
 *
 * @param size size that we need to compare
 * @param biggerThanSize size to compare with, 's' by default
 */
function tuiSizeBigger(size, biggerThanSize = 's') {
    return SIZES[size] > SIZES[biggerThanSize];
}

const TUI_ANIMATIONS_DEFAULT_DURATION = 300;
function tuiToAnimationOptions(speed, easing) {
    return {
        value: '',
        params: {
            duration: tuiGetDuration(speed),
            easing,
        },
    };
}
function tuiGetDuration(speed) {
    return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}

/**
 * Generated bundle index. Do not edit.
 */

export { TUI_ANIMATIONS_DEFAULT_DURATION, tuiGetDuration, tuiIsEditingKey, tuiIsObscured, tuiOverrideOptions, tuiSizeBigger, tuiToAnimationOptions };
//# sourceMappingURL=taiga-ui-core-utils-miscellaneous.mjs.map
