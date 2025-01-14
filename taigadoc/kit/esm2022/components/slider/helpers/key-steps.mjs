import { tuiRound } from '@taiga-ui/cdk/utils/math';
/**
 * Used as a limit for eliminating JS issues with floating point math
 */
export const TUI_FLOATING_PRECISION = 7;
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
    const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
    const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
    const upperStep = keySteps[keyStepUpperIndex] ||
        keySteps[keySteps.length - 1] || [0, 0];
    return [lowerStep, upperStep];
}
export function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
    const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
    const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
    const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
    return tuiRound(controlValue, TUI_FLOATING_PRECISION);
}
export function tuiKeyStepValueToPercentage(value, keySteps) {
    const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
    const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
    return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LXN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvc2xpZGVyL2hlbHBlcnMva2V5LXN0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLENBQUMsQ0FBQztBQXNCeEMsU0FBUyw2QkFBNkIsQ0FDbEMsUUFBcUIsRUFDckIsRUFBaUU7SUFFakUsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRS9FLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTVDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FDdkMsZUFBdUIsRUFDdkIsUUFBcUI7SUFFckIsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQyxHQUMxRSw2QkFBNkIsQ0FDekIsUUFBUSxFQUNSLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsZUFBZSxJQUFJLGlCQUFpQixDQUNuRSxDQUFDO0lBQ04sTUFBTSxLQUFLLEdBQ1AsQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLENBQUM7SUFDakYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLEdBQUcsS0FBSyxHQUFHLGNBQWMsQ0FBQztJQUVoRixPQUFPLFFBQVEsQ0FBQyxZQUFZLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsTUFBTSxVQUFVLDJCQUEyQixDQUN2QyxLQUFhLEVBQ2IsUUFBcUI7SUFFckIsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQyxHQUMxRSw2QkFBNkIsQ0FDekIsUUFBUSxFQUNSLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQy9DLENBQUM7SUFDTixNQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEYsT0FBTyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLEdBQUcsS0FBSyxHQUFHLGdCQUFnQixDQUFDO0FBQzVFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3R1aVJvdW5kfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21hdGgnO1xuXG4vKipcbiAqIFVzZWQgYXMgYSBsaW1pdCBmb3IgZWxpbWluYXRpbmcgSlMgaXNzdWVzIHdpdGggZmxvYXRpbmcgcG9pbnQgbWF0aFxuICovXG5leHBvcnQgY29uc3QgVFVJX0ZMT0FUSU5HX1BSRUNJU0lPTiA9IDc7XG5cbi8qKlxuICogU3RlcHMgZm9yIHNwbGl0dGluZyBzbGlkZXJzIGludG8gZGlmZmVyZW50IGxpbmVhciBkZXBlbmRlbmNpZXMuXG4gKiBFYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IGhhcyB0aGUgZm9ybSBbcGVyY2VudCwgdmFsdWVdXG4gKlxuICogVGh1cywgdG8gc2V0IGEgZmllbGQgZnJvbSA1MCwwMDAgdG8gMzAsMDAwLDAwMCBpbiBzdGVwczpcbiAqIDEpIEZyb20gNTAgMDAwIHRvIDIwMCAwMDAgYnkgNTAwMCBwZXIgc3RlcCAoMzAgc3RlcHMpXG4gKiAyKSBGcm9tIDIwMCAwMDAgdG8gMSAwMDAgMDAwIGJ5IDUwIDAwMCBwZXIgc3RlcCAoMTYgc3RlcHMpXG4gKiAzKSBGcm9tIDEgMDAwIDAwMCB0byAzMCAwMDAgMDAwIGJ5IDUwMCAwMDAgcGVyIHN0ZXAgKDU4IHN0ZXBzKVxuICpcbiAqIFlvdSBuZWVkIHRvIHBhc3MgdGhlIGZvbGxvd2luZyBrZXlTdGVwICh3aGVyZSAxMDQgPSAzMCArIDE2ICsgNTggaXMgdGhlIHRvdGFsIG51bWJlciBvZiBzdGVwcyk6XG4gKiAgW1xuICogICAgICBbMCwgNTBfMDAwXSxcbiAqICAgICAgWzEwMCAvIDEwNCAqIDMwLCAyMDBfMDAwXSxcbiAqICAgICAgWzEwMCAvIDEwNCAqICgzMCArIDE2KSwgMV8wMDBfMDAwXSxcbiAqICAgICAgWzEwMCwgMzBfMDAwXzAwMF0sXG4gKiAgXTtcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFR1aUtleVN0ZXBzID0gW1swLCBudW1iZXJdLCAuLi5BcnJheTxbbnVtYmVyLCBudW1iZXJdPiwgWzEwMCwgbnVtYmVyXV07XG5cbmZ1bmN0aW9uIHR1aUZpbmRLZXlTdGVwc0JvdW5kYXJpZXNCeUZuKFxuICAgIGtleVN0ZXBzOiBUdWlLZXlTdGVwcyxcbiAgICBmbjogKFtrZXlTdGVwUGVyY2VudCwga2V5U3RlcFZhbHVlXTogW251bWJlciwgbnVtYmVyXSkgPT4gYm9vbGVhbixcbik6IFtbbnVtYmVyLCBudW1iZXJdLCBbbnVtYmVyLCBudW1iZXJdXSB7XG4gICAgY29uc3Qga2V5U3RlcFVwcGVySW5kZXggPSBrZXlTdGVwcy5maW5kSW5kZXgoKGtleVN0ZXAsIGkpID0+IGkgJiYgZm4oa2V5U3RlcCkpO1xuXG4gICAgY29uc3QgbG93ZXJTdGVwID0ga2V5U3RlcHNba2V5U3RlcFVwcGVySW5kZXggLSAxXSB8fCBrZXlTdGVwc1swXTtcbiAgICBjb25zdCB1cHBlclN0ZXAgPSBrZXlTdGVwc1trZXlTdGVwVXBwZXJJbmRleF0gfHxcbiAgICAgICAga2V5U3RlcHNba2V5U3RlcHMubGVuZ3RoIC0gMV0gfHwgWzAsIDBdO1xuXG4gICAgcmV0dXJuIFtsb3dlclN0ZXAsIHVwcGVyU3RlcF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0dWlQZXJjZW50YWdlVG9LZXlTdGVwVmFsdWUoXG4gICAgdmFsdWVQZXJjZW50YWdlOiBudW1iZXIsXG4gICAga2V5U3RlcHM6IFR1aUtleVN0ZXBzLFxuKTogbnVtYmVyIHtcbiAgICBjb25zdCBbW2xvd2VyU3RlcFBlcmNlbnQsIGxvd2VyU3RlcFZhbHVlXSwgW3VwcGVyU3RlcFBlcmNlbnQsIHVwcGVyU3RlcFZhbHVlXV0gPVxuICAgICAgICB0dWlGaW5kS2V5U3RlcHNCb3VuZGFyaWVzQnlGbihcbiAgICAgICAgICAgIGtleVN0ZXBzLFxuICAgICAgICAgICAgKFtrZXlTdGVwUGVyY2VudGFnZSwgX10pID0+IHZhbHVlUGVyY2VudGFnZSA8PSBrZXlTdGVwUGVyY2VudGFnZSxcbiAgICAgICAgKTtcbiAgICBjb25zdCByYXRpbyA9XG4gICAgICAgICh2YWx1ZVBlcmNlbnRhZ2UgLSBsb3dlclN0ZXBQZXJjZW50KSAvICh1cHBlclN0ZXBQZXJjZW50IC0gbG93ZXJTdGVwUGVyY2VudCk7XG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gKHVwcGVyU3RlcFZhbHVlIC0gbG93ZXJTdGVwVmFsdWUpICogcmF0aW8gKyBsb3dlclN0ZXBWYWx1ZTtcblxuICAgIHJldHVybiB0dWlSb3VuZChjb250cm9sVmFsdWUsIFRVSV9GTE9BVElOR19QUkVDSVNJT04pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHVpS2V5U3RlcFZhbHVlVG9QZXJjZW50YWdlKFxuICAgIHZhbHVlOiBudW1iZXIsXG4gICAga2V5U3RlcHM6IFR1aUtleVN0ZXBzLFxuKTogbnVtYmVyIHtcbiAgICBjb25zdCBbW2xvd2VyU3RlcFBlcmNlbnQsIGxvd2VyU3RlcFZhbHVlXSwgW3VwcGVyU3RlcFBlcmNlbnQsIHVwcGVyU3RlcFZhbHVlXV0gPVxuICAgICAgICB0dWlGaW5kS2V5U3RlcHNCb3VuZGFyaWVzQnlGbihcbiAgICAgICAgICAgIGtleVN0ZXBzLFxuICAgICAgICAgICAgKFtfLCBrZXlTdGVwVmFsdWVdKSA9PiB2YWx1ZSA8PSBrZXlTdGVwVmFsdWUsXG4gICAgICAgICk7XG4gICAgY29uc3QgcmF0aW8gPSAodmFsdWUgLSBsb3dlclN0ZXBWYWx1ZSkgLyAodXBwZXJTdGVwVmFsdWUgLSBsb3dlclN0ZXBWYWx1ZSkgfHwgMDtcblxuICAgIHJldHVybiAodXBwZXJTdGVwUGVyY2VudCAtIGxvd2VyU3RlcFBlcmNlbnQpICogcmF0aW8gKyBsb3dlclN0ZXBQZXJjZW50O1xufVxuIl19