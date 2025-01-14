import { tuiToRadians, tuiToInt } from '@taiga-ui/cdk/utils/math';

function tuiLineAngle(a, b) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    return Math.atan2(y, x);
}

function tuiLineLength(a, b) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    return Math.sqrt(x ** 2 + y ** 2);
}

function tuiControlPoint(current, previous, next, reverse = false, smoothing = 0.2) {
    const fallback = current || [0, 0];
    const p = previous || current || [0, 0];
    const n = next || current || [0, 0];
    const angle = tuiLineAngle(p, n) + (reverse ? Math.PI : 0);
    const length = tuiLineLength(p, n) * smoothing;
    const x = fallback[0] + Math.cos(angle) * length;
    const y = fallback[1] + Math.sin(angle) * length;
    return [x, y];
}

const EMPTY = 'M 100 0 A 100 100 0 1 1 100 0 L 0 0';
/**
 * Describes a normalized sector by angles. Normalized meaning it supposed to work with
 * SVG with viewBox="-1 -1 2 2" so that 0 coordinates in cartesian and polar match the same spot.
 * Everything is multiplied by 100 (including viewBox of SVG to host this) so IE properly
 * handles hover events.
 *
 * @param startAngle starting angle in degrees
 * @param endAngle ending angle in degrees
 */
function tuiDescribeSector(startAngle = 0, endAngle = 0) {
    const startRad = tuiToRadians(startAngle);
    const endRad = tuiToRadians(endAngle);
    const startX = Math.cos(startRad) * 100;
    const startY = Math.sin(startRad) * 100;
    const endX = Math.cos(endRad) * 100;
    const endY = Math.sin(endRad) * 100;
    const largeArcFlag = tuiToInt(endAngle - startAngle > 180);
    const result = [
        'M',
        startX,
        startY,
        'A 100 100 0',
        largeArcFlag,
        1,
        endX,
        endY,
        'L 0 0',
    ];
    return Number.isNaN(endX) ? EMPTY : result.join(' ');
}

function tuiDrawCurve(array, index, smoothing) {
    const [cpsX, cpsY] = tuiControlPoint(array[index - 1], array[index - 2], array[index], false, smoothing);
    const [cpeX, cpeY] = tuiControlPoint(array[index], array[index - 1], array[index + 1], true, smoothing);
    const point = array[index] ?? [0, 0];
    return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
}

function tuiDrawLine(point) {
    return `L ${point}`;
}

const COEFFICIENT = 500;
function tuiDraw(array, index, smoothing) {
    const point = [...(array[index] ?? [0, 0])];
    return smoothing
        ? tuiDrawCurve(array, index, smoothing / COEFFICIENT)
        : tuiDrawLine([point[0], point[1]]);
}

/**
 * Generated bundle index. Do not edit.
 */

export { tuiControlPoint, tuiDescribeSector, tuiDraw, tuiDrawCurve, tuiDrawLine, tuiLineAngle, tuiLineLength };
//# sourceMappingURL=taiga-ui-addon-charts-utils.mjs.map
