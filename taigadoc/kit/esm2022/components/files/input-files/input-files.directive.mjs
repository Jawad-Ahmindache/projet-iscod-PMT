import { coerceArray } from '@angular/cdk/coercion';
import { Directive, forwardRef, inject, Output } from '@angular/core';
import { tuiAsControl, TuiControl } from '@taiga-ui/cdk/classes';
import { EMPTY_ARRAY } from '@taiga-ui/cdk/constants';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiControlValue, tuiZonefreeScheduler } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiAppearanceOptionsProvider, TuiWithAppearance, } from '@taiga-ui/core/directives/appearance';
import { filter, map, switchMap, timer } from 'rxjs';
import { tuiFilesRejected } from '../files.utils';
import { TuiInputFiles } from './input-files.component';
import { TuiInputFilesValidator } from './input-files-validator.directive';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/native-validator";
import * as i2 from "@taiga-ui/core/directives/appearance";
import * as i3 from "./input-files-validator.directive";
class TuiInputFilesDirective extends TuiControl {
    constructor() {
        super(...arguments);
        this.host = inject(forwardRef(() => TuiInputFiles));
        this.reject = timer(0, tuiZonefreeScheduler()).pipe(switchMap(() => tuiControlValue(this.control.control)), map(() => tuiFilesRejected(this.control.control)), filter(({ length }) => !!length));
        this.appearance = 'file';
        this.input = tuiInjectElement();
    }
    process(files) {
        const fileOrFiles = this.input.multiple
            ? [...toArray(this.value()), ...Array.from(files)]
            : files[0];
        if (fileOrFiles) {
            this.onChange(fileOrFiles);
        }
    }
    onClick(event) {
        if (this.input.readOnly) {
            event.preventDefault();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiInputFilesDirective, isStandalone: true, selector: "input[tuiInputFiles]", outputs: { reject: "reject" }, host: { attributes: { "type": "file" }, listeners: { "blur": "onTouched()", "click": "onClick($event)" }, properties: { "disabled": "disabled()" } }, providers: [
            tuiAsControl(TuiInputFilesDirective),
            tuiAppearanceOptionsProvider(TuiInputFilesDirective),
        ], usesInheritance: true, hostDirectives: [{ directive: i1.TuiNativeValidator }, { directive: i2.TuiWithAppearance }, { directive: i3.TuiInputFilesValidator, inputs: ["accept", "accept", "maxFileSize", "maxFileSize"] }], ngImport: i0 }); }
}
export { TuiInputFilesDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiInputFilesDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[tuiInputFiles]',
                    providers: [
                        tuiAsControl(TuiInputFilesDirective),
                        tuiAppearanceOptionsProvider(TuiInputFilesDirective),
                    ],
                    hostDirectives: [
                        TuiNativeValidator,
                        TuiWithAppearance,
                        {
                            directive: TuiInputFilesValidator,
                            inputs: ['accept', 'maxFileSize'],
                        },
                    ],
                    host: {
                        type: 'file',
                        '[disabled]': 'disabled()',
                        '(blur)': 'onTouched()',
                        '(click)': 'onClick($event)',
                    },
                }]
        }], propDecorators: { reject: [{
                type: Output
            }] } });
function toArray(value) {
    return value ? coerceArray(value) : EMPTY_ARRAY;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvZmlsZXMvaW5wdXQtZmlsZXMvaW5wdXQtZmlsZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxZQUFZLEVBQUUsVUFBVSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQUUsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQ0gsNEJBQTRCLEVBQzVCLGlCQUFpQixHQUNwQixNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHbkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDOzs7OztBQUV6RSxNQXNCYSxzQkFDVCxTQUFRLFVBQWdEO0lBdkI1RDs7UUEwQnVCLFNBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFHbEQsV0FBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ3RELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ2pELE1BQU0sQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FDakMsQ0FBQztRQUVjLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDcEIsVUFBSyxHQUFHLGdCQUFnQixFQUFvQixDQUFDO0tBaUJoRTtJQWZVLE9BQU8sQ0FBQyxLQUFlO1FBQzFCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUNuQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVmLElBQUksV0FBVyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFUyxPQUFPLENBQUMsS0FBaUI7UUFDL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDOytHQTlCUSxzQkFBc0I7bUdBQXRCLHNCQUFzQix3UEFuQnBCO1lBQ1AsWUFBWSxDQUFDLHNCQUFzQixDQUFDO1lBQ3BDLDRCQUE0QixDQUFDLHNCQUFzQixDQUFDO1NBQ3ZEOztTQWdCUSxzQkFBc0I7NEZBQXRCLHNCQUFzQjtrQkF0QmxDLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFNBQVMsRUFBRTt3QkFDUCxZQUFZLHdCQUF3Qjt3QkFDcEMsNEJBQTRCLHdCQUF3QjtxQkFDdkQ7b0JBQ0QsY0FBYyxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3dCQUNqQjs0QkFDSSxTQUFTLEVBQUUsc0JBQXNCOzRCQUNqQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO3lCQUNwQztxQkFDSjtvQkFDRCxJQUFJLEVBQUU7d0JBQ0YsSUFBSSxFQUFFLE1BQU07d0JBQ1osWUFBWSxFQUFFLFlBQVk7d0JBQzFCLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixTQUFTLEVBQUUsaUJBQWlCO3FCQUMvQjtpQkFDSjs4QkFRbUIsTUFBTTtzQkFEckIsTUFBTTs7QUEyQlgsU0FBUyxPQUFPLENBQ1osS0FBa0Q7SUFFbEQsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0FBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvZXJjZUFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWYsIGluamVjdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpQXNDb250cm9sLCBUdWlDb250cm9sfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NsYXNzZXMnO1xuaW1wb3J0IHtFTVBUWV9BUlJBWX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9jb25zdGFudHMnO1xuaW1wb3J0IHtUdWlOYXRpdmVWYWxpZGF0b3J9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGlyZWN0aXZlcy9uYXRpdmUtdmFsaWRhdG9yJztcbmltcG9ydCB7dHVpQ29udHJvbFZhbHVlLCB0dWlab25lZnJlZVNjaGVkdWxlcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9vYnNlcnZhYmxlcyc7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB0eXBlIHtUdWlBcHBlYXJhbmNlT3B0aW9uc30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvZGlyZWN0aXZlcy9hcHBlYXJhbmNlJztcbmltcG9ydCB7XG4gICAgdHVpQXBwZWFyYW5jZU9wdGlvbnNQcm92aWRlcixcbiAgICBUdWlXaXRoQXBwZWFyYW5jZSxcbn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvZGlyZWN0aXZlcy9hcHBlYXJhbmNlJztcbmltcG9ydCB7ZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGltZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgdHlwZSB7VHVpRmlsZUxpa2V9IGZyb20gJy4uL2ZpbGVzLnR5cGVzJztcbmltcG9ydCB7dHVpRmlsZXNSZWplY3RlZH0gZnJvbSAnLi4vZmlsZXMudXRpbHMnO1xuaW1wb3J0IHtUdWlJbnB1dEZpbGVzfSBmcm9tICcuL2lucHV0LWZpbGVzLmNvbXBvbmVudCc7XG5pbXBvcnQge1R1aUlucHV0RmlsZXNWYWxpZGF0b3J9IGZyb20gJy4vaW5wdXQtZmlsZXMtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdpbnB1dFt0dWlJbnB1dEZpbGVzXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHR1aUFzQ29udHJvbChUdWlJbnB1dEZpbGVzRGlyZWN0aXZlKSxcbiAgICAgICAgdHVpQXBwZWFyYW5jZU9wdGlvbnNQcm92aWRlcihUdWlJbnB1dEZpbGVzRGlyZWN0aXZlKSxcbiAgICBdLFxuICAgIGhvc3REaXJlY3RpdmVzOiBbXG4gICAgICAgIFR1aU5hdGl2ZVZhbGlkYXRvcixcbiAgICAgICAgVHVpV2l0aEFwcGVhcmFuY2UsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZTogVHVpSW5wdXRGaWxlc1ZhbGlkYXRvcixcbiAgICAgICAgICAgIGlucHV0czogWydhY2NlcHQnLCAnbWF4RmlsZVNpemUnXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCgpJyxcbiAgICAgICAgJyhibHVyKSc6ICdvblRvdWNoZWQoKScsXG4gICAgICAgICcoY2xpY2spJzogJ29uQ2xpY2soJGV2ZW50KScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSW5wdXRGaWxlc0RpcmVjdGl2ZVxuICAgIGV4dGVuZHMgVHVpQ29udHJvbDxUdWlGaWxlTGlrZSB8IHJlYWRvbmx5IFR1aUZpbGVMaWtlW10+XG4gICAgaW1wbGVtZW50cyBUdWlBcHBlYXJhbmNlT3B0aW9uc1xue1xuICAgIHByb3RlY3RlZCByZWFkb25seSBob3N0ID0gaW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gVHVpSW5wdXRGaWxlcykpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IHJlamVjdCA9IHRpbWVyKDAsIHR1aVpvbmVmcmVlU2NoZWR1bGVyKCkpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0dWlDb250cm9sVmFsdWUodGhpcy5jb250cm9sLmNvbnRyb2wpKSxcbiAgICAgICAgbWFwKCgpID0+IHR1aUZpbGVzUmVqZWN0ZWQodGhpcy5jb250cm9sLmNvbnRyb2wpKSxcbiAgICAgICAgZmlsdGVyKCh7bGVuZ3RofSkgPT4gISFsZW5ndGgpLFxuICAgICk7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXBwZWFyYW5jZSA9ICdmaWxlJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5wdXQgPSB0dWlJbmplY3RFbGVtZW50PEhUTUxJbnB1dEVsZW1lbnQ+KCk7XG5cbiAgICBwdWJsaWMgcHJvY2VzcyhmaWxlczogRmlsZUxpc3QpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlsZU9yRmlsZXMgPSB0aGlzLmlucHV0Lm11bHRpcGxlXG4gICAgICAgICAgICA/IFsuLi50b0FycmF5KHRoaXMudmFsdWUoKSksIC4uLkFycmF5LmZyb20oZmlsZXMpXVxuICAgICAgICAgICAgOiBmaWxlc1swXTtcblxuICAgICAgICBpZiAoZmlsZU9yRmlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZmlsZU9yRmlsZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQucmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkoXG4gICAgdmFsdWU6IFR1aUZpbGVMaWtlIHwgcmVhZG9ubHkgVHVpRmlsZUxpa2VbXSB8IG51bGwsXG4pOiByZWFkb25seSBUdWlGaWxlTGlrZVtdIHtcbiAgICByZXR1cm4gdmFsdWUgPyBjb2VyY2VBcnJheSh2YWx1ZSkgOiBFTVBUWV9BUlJBWTtcbn1cbiJdfQ==