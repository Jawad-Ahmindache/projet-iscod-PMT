import { Directive, forwardRef, inject, Input } from '@angular/core';
import { TuiControl } from '@taiga-ui/cdk/classes';
import { tuiFallbackValueProvider } from '@taiga-ui/cdk/tokens';
import { tuiClamp } from '@taiga-ui/cdk/utils/math';
import { TuiSliderComponent } from '../slider.component';
import { tuiKeyStepValueToPercentage, tuiPercentageToKeyStepValue } from './key-steps';
import * as i0 from "@angular/core";
class TuiSliderKeySteps extends TuiControl {
    constructor() {
        super(...arguments);
        this.slider = inject(forwardRef(() => TuiSliderComponent));
    }
    writeValue(controlValue) {
        if (controlValue === null) {
            return;
        }
        const clampedControlValue = tuiClamp(controlValue, this.min, this.max);
        ngDevMode &&
            console.assert(controlValue === clampedControlValue, '\n[SliderKeySteps]: You cannot programmatically set value which is less/more than min/max');
        this.slider.value = this.transformToNativeValue(clampedControlValue);
    }
    get min() {
        return this.keySteps[0][1];
    }
    get max() {
        return this.keySteps[this.keySteps.length - 1]?.[1] ?? 0;
    }
    updateControlValue() {
        this.onChange(tuiPercentageToKeyStepValue(this.slider.valueRatio * 100, this.keySteps));
    }
    transformToNativeValue(controlValue) {
        const { min, max } = this.slider;
        const newValuePercentage = tuiKeyStepValueToPercentage(controlValue, this.keySteps);
        return (newValuePercentage * (max - min)) / 100 + min;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderKeySteps, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiSliderKeySteps, isStandalone: true, selector: "input[tuiSlider][keySteps]", inputs: { keySteps: "keySteps" }, host: { listeners: { "blur": "onTouched()", "input": "updateControlValue()", "change": "updateControlValue()" }, properties: { "attr.aria-valuenow": "value()", "attr.aria-valuemin": "min", "attr.aria-valuemax": "max", "disabled": "disabled()" } }, providers: [tuiFallbackValueProvider(0)], usesInheritance: true, ngImport: i0 }); }
}
export { TuiSliderKeySteps };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSliderKeySteps, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[tuiSlider][keySteps]',
                    providers: [tuiFallbackValueProvider(0)],
                    host: {
                        '[attr.aria-valuenow]': 'value()',
                        '[attr.aria-valuemin]': 'min',
                        '[attr.aria-valuemax]': 'max',
                        '[disabled]': 'disabled()',
                        '(blur)': 'onTouched()',
                        '(input)': 'updateControlValue()',
                        '(change)': 'updateControlValue()',
                    },
                }]
        }], propDecorators: { keySteps: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWtleS1zdGVwcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvY29tcG9uZW50cy9zbGlkZXIvaGVscGVycy9zbGlkZXIta2V5LXN0ZXBzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFbEQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFDLDJCQUEyQixFQUFFLDJCQUEyQixFQUFDLE1BQU0sYUFBYSxDQUFDOztBQUVyRixNQWNhLGlCQUFrQixTQUFRLFVBQWtCO0lBZHpEOztRQWVxQixXQUFNLEdBQUcsTUFBTSxDQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FDdkMsQ0FBQztLQTRDTDtJQXZDbUIsVUFBVSxDQUFDLFlBQTJCO1FBQ2xELElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtZQUN2QixPQUFPO1NBQ1Y7UUFFRCxNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkUsU0FBUztZQUNMLE9BQU8sQ0FBQyxNQUFNLENBQ1YsWUFBWSxLQUFLLG1CQUFtQixFQUNwQywyRkFBMkYsQ0FDOUYsQ0FBQztRQUVOLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFjLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQWMsR0FBRztRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRVMsa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQ1QsMkJBQTJCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDM0UsQ0FBQztJQUNOLENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxZQUFvQjtRQUMvQyxNQUFNLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsTUFBTSxrQkFBa0IsR0FBRywyQkFBMkIsQ0FDbEQsWUFBWSxFQUNaLElBQUksQ0FBQyxRQUFRLENBQ2hCLENBQUM7UUFFRixPQUFPLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzFELENBQUM7K0dBOUNRLGlCQUFpQjttR0FBakIsaUJBQWlCLG1XQVhmLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUM7O1NBVy9CLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQWQ3QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxFQUFFO3dCQUNGLHNCQUFzQixFQUFFLFNBQVM7d0JBQ2pDLHNCQUFzQixFQUFFLEtBQUs7d0JBQzdCLHNCQUFzQixFQUFFLEtBQUs7d0JBQzdCLFlBQVksRUFBRSxZQUFZO3dCQUMxQixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsU0FBUyxFQUFFLHNCQUFzQjt3QkFDakMsVUFBVSxFQUFFLHNCQUFzQjtxQkFDckM7aUJBQ0o7OEJBT1UsUUFBUTtzQkFEZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWYsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUdWlDb250cm9sfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NsYXNzZXMnO1xuaW1wb3J0IHt0dWlGYWxsYmFja1ZhbHVlUHJvdmlkZXJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvdG9rZW5zJztcbmltcG9ydCB7dHVpQ2xhbXB9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWF0aCc7XG5cbmltcG9ydCB7VHVpU2xpZGVyQ29tcG9uZW50fSBmcm9tICcuLi9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB0eXBlIHtUdWlLZXlTdGVwc30gZnJvbSAnLi9rZXktc3RlcHMnO1xuaW1wb3J0IHt0dWlLZXlTdGVwVmFsdWVUb1BlcmNlbnRhZ2UsIHR1aVBlcmNlbnRhZ2VUb0tleVN0ZXBWYWx1ZX0gZnJvbSAnLi9rZXktc3RlcHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaW5wdXRbdHVpU2xpZGVyXVtrZXlTdGVwc10nLFxuICAgIHByb3ZpZGVyczogW3R1aUZhbGxiYWNrVmFsdWVQcm92aWRlcigwKV0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW2F0dHIuYXJpYS12YWx1ZW5vd10nOiAndmFsdWUoKScsXG4gICAgICAgICdbYXR0ci5hcmlhLXZhbHVlbWluXSc6ICdtaW4nLFxuICAgICAgICAnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnbWF4JyxcbiAgICAgICAgJ1tkaXNhYmxlZF0nOiAnZGlzYWJsZWQoKScsXG4gICAgICAgICcoYmx1ciknOiAnb25Ub3VjaGVkKCknLFxuICAgICAgICAnKGlucHV0KSc6ICd1cGRhdGVDb250cm9sVmFsdWUoKScsXG4gICAgICAgICcoY2hhbmdlKSc6ICd1cGRhdGVDb250cm9sVmFsdWUoKScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpU2xpZGVyS2V5U3RlcHMgZXh0ZW5kcyBUdWlDb250cm9sPG51bWJlcj4ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2xpZGVyID0gaW5qZWN0PFR1aVNsaWRlckNvbXBvbmVudD4oXG4gICAgICAgIGZvcndhcmRSZWYoKCkgPT4gVHVpU2xpZGVyQ29tcG9uZW50KSxcbiAgICApO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMga2V5U3RlcHMhOiBUdWlLZXlTdGVwcztcblxuICAgIHB1YmxpYyBvdmVycmlkZSB3cml0ZVZhbHVlKGNvbnRyb2xWYWx1ZTogbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xuICAgICAgICBpZiAoY29udHJvbFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGFtcGVkQ29udHJvbFZhbHVlID0gdHVpQ2xhbXAoY29udHJvbFZhbHVlLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuXG4gICAgICAgIG5nRGV2TW9kZSAmJlxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoXG4gICAgICAgICAgICAgICAgY29udHJvbFZhbHVlID09PSBjbGFtcGVkQ29udHJvbFZhbHVlLFxuICAgICAgICAgICAgICAgICdcXG5bU2xpZGVyS2V5U3RlcHNdOiBZb3UgY2Fubm90IHByb2dyYW1tYXRpY2FsbHkgc2V0IHZhbHVlIHdoaWNoIGlzIGxlc3MvbW9yZSB0aGFuIG1pbi9tYXgnLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNsaWRlci52YWx1ZSA9IHRoaXMudHJhbnNmb3JtVG9OYXRpdmVWYWx1ZShjbGFtcGVkQ29udHJvbFZhbHVlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IG1pbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5rZXlTdGVwc1swXVsxXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5rZXlTdGVwc1t0aGlzLmtleVN0ZXBzLmxlbmd0aCAtIDFdPy5bMV0gPz8gMDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlQ29udHJvbFZhbHVlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKFxuICAgICAgICAgICAgdHVpUGVyY2VudGFnZVRvS2V5U3RlcFZhbHVlKHRoaXMuc2xpZGVyLnZhbHVlUmF0aW8gKiAxMDAsIHRoaXMua2V5U3RlcHMpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJhbnNmb3JtVG9OYXRpdmVWYWx1ZShjb250cm9sVmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHttaW4sIG1heH0gPSB0aGlzLnNsaWRlcjtcbiAgICAgICAgY29uc3QgbmV3VmFsdWVQZXJjZW50YWdlID0gdHVpS2V5U3RlcFZhbHVlVG9QZXJjZW50YWdlKFxuICAgICAgICAgICAgY29udHJvbFZhbHVlLFxuICAgICAgICAgICAgdGhpcy5rZXlTdGVwcyxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKG5ld1ZhbHVlUGVyY2VudGFnZSAqIChtYXggLSBtaW4pKSAvIDEwMCArIG1pbjtcbiAgICB9XG59XG4iXX0=