import { tuiDrawCurve } from './draw-curve';
import { tuiDrawLine } from './draw-line';
const COEFFICIENT = 500;
export function tuiDraw(array, index, smoothing) {
    const point = [...(array[index] ?? [0, 0])];
    return smoothing
        ? tuiDrawCurve(array, index, smoothing / COEFFICIENT)
        : tuiDrawLine([point[0], point[1]]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy91dGlscy9kcmF3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUV4QyxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFFeEIsTUFBTSxVQUFVLE9BQU8sQ0FDbkIsS0FBMEIsRUFDMUIsS0FBYSxFQUNiLFNBQWlCO0lBRWpCLE1BQU0sS0FBSyxHQUE4QixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZFLE9BQU8sU0FBUztRQUNaLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1R1aVBvaW50fSBmcm9tICdAdGFpZ2EtdWkvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7dHVpRHJhd0N1cnZlfSBmcm9tICcuL2RyYXctY3VydmUnO1xuaW1wb3J0IHt0dWlEcmF3TGluZX0gZnJvbSAnLi9kcmF3LWxpbmUnO1xuXG5jb25zdCBDT0VGRklDSUVOVCA9IDUwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHR1aURyYXcoXG4gICAgYXJyYXk6IHJlYWRvbmx5IFR1aVBvaW50W10sXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBzbW9vdGhpbmc6IG51bWJlcixcbik6IHN0cmluZyB7XG4gICAgY29uc3QgcG9pbnQ6IHJlYWRvbmx5IFtudW1iZXIsIG51bWJlcl0gPSBbLi4uKGFycmF5W2luZGV4XSA/PyBbMCwgMF0pXTtcblxuICAgIHJldHVybiBzbW9vdGhpbmdcbiAgICAgICAgPyB0dWlEcmF3Q3VydmUoYXJyYXksIGluZGV4LCBzbW9vdGhpbmcgLyBDT0VGRklDSUVOVClcbiAgICAgICAgOiB0dWlEcmF3TGluZShbcG9pbnRbMF0sIHBvaW50WzFdXSk7XG59XG4iXX0=