import { tuiToInt, tuiToRadians } from '@taiga-ui/cdk/utils/math';
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
export function tuiDescribeSector(startAngle = 0, endAngle = 0) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzY3JpYmUtc2VjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tY2hhcnRzL3V0aWxzL2Rlc2NyaWJlLXNlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRWhFLE1BQU0sS0FBSyxHQUFHLHFDQUFxQyxDQUFDO0FBRXBEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUM7SUFDMUQsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN4QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN4QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNwQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNwQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMzRCxNQUFNLE1BQU0sR0FBRztRQUNYLEdBQUc7UUFDSCxNQUFNO1FBQ04sTUFBTTtRQUNOLGFBQWE7UUFDYixZQUFZO1FBQ1osQ0FBQztRQUNELElBQUk7UUFDSixJQUFJO1FBQ0osT0FBTztLQUNWLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0dWlUb0ludCwgdHVpVG9SYWRpYW5zfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21hdGgnO1xuXG5jb25zdCBFTVBUWSA9ICdNIDEwMCAwIEEgMTAwIDEwMCAwIDEgMSAxMDAgMCBMIDAgMCc7XG5cbi8qKlxuICogRGVzY3JpYmVzIGEgbm9ybWFsaXplZCBzZWN0b3IgYnkgYW5nbGVzLiBOb3JtYWxpemVkIG1lYW5pbmcgaXQgc3VwcG9zZWQgdG8gd29yayB3aXRoXG4gKiBTVkcgd2l0aCB2aWV3Qm94PVwiLTEgLTEgMiAyXCIgc28gdGhhdCAwIGNvb3JkaW5hdGVzIGluIGNhcnRlc2lhbiBhbmQgcG9sYXIgbWF0Y2ggdGhlIHNhbWUgc3BvdC5cbiAqIEV2ZXJ5dGhpbmcgaXMgbXVsdGlwbGllZCBieSAxMDAgKGluY2x1ZGluZyB2aWV3Qm94IG9mIFNWRyB0byBob3N0IHRoaXMpIHNvIElFIHByb3Blcmx5XG4gKiBoYW5kbGVzIGhvdmVyIGV2ZW50cy5cbiAqXG4gKiBAcGFyYW0gc3RhcnRBbmdsZSBzdGFydGluZyBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcGFyYW0gZW5kQW5nbGUgZW5kaW5nIGFuZ2xlIGluIGRlZ3JlZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR1aURlc2NyaWJlU2VjdG9yKHN0YXJ0QW5nbGUgPSAwLCBlbmRBbmdsZSA9IDApOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0YXJ0UmFkID0gdHVpVG9SYWRpYW5zKHN0YXJ0QW5nbGUpO1xuICAgIGNvbnN0IGVuZFJhZCA9IHR1aVRvUmFkaWFucyhlbmRBbmdsZSk7XG4gICAgY29uc3Qgc3RhcnRYID0gTWF0aC5jb3Moc3RhcnRSYWQpICogMTAwO1xuICAgIGNvbnN0IHN0YXJ0WSA9IE1hdGguc2luKHN0YXJ0UmFkKSAqIDEwMDtcbiAgICBjb25zdCBlbmRYID0gTWF0aC5jb3MoZW5kUmFkKSAqIDEwMDtcbiAgICBjb25zdCBlbmRZID0gTWF0aC5zaW4oZW5kUmFkKSAqIDEwMDtcbiAgICBjb25zdCBsYXJnZUFyY0ZsYWcgPSB0dWlUb0ludChlbmRBbmdsZSAtIHN0YXJ0QW5nbGUgPiAxODApO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtcbiAgICAgICAgJ00nLFxuICAgICAgICBzdGFydFgsXG4gICAgICAgIHN0YXJ0WSxcbiAgICAgICAgJ0EgMTAwIDEwMCAwJyxcbiAgICAgICAgbGFyZ2VBcmNGbGFnLFxuICAgICAgICAxLFxuICAgICAgICBlbmRYLFxuICAgICAgICBlbmRZLFxuICAgICAgICAnTCAwIDAnLFxuICAgIF07XG5cbiAgICByZXR1cm4gTnVtYmVyLmlzTmFOKGVuZFgpID8gRU1QVFkgOiByZXN1bHQuam9pbignICcpO1xufVxuIl19