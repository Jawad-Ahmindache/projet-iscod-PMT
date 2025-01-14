import { TuiControl } from '@taiga-ui/cdk/classes';
import type { TuiKeySteps } from './key-steps';
import * as i0 from "@angular/core";
export declare class TuiSliderKeySteps extends TuiControl<number> {
    private readonly slider;
    keySteps: TuiKeySteps;
    writeValue(controlValue: number | null): void;
    protected get min(): number;
    protected get max(): number;
    protected updateControlValue(): void;
    private transformToNativeValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiSliderKeySteps, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiSliderKeySteps, "input[tuiSlider][keySteps]", never, { "keySteps": { "alias": "keySteps"; "required": false; }; }, {}, never, never, true, never>;
}
