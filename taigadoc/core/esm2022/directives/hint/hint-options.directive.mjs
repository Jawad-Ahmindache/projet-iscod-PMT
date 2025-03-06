import { Directive, inject, Input, Optional, Self, SkipSelf } from '@angular/core';
import { tuiCreateToken, tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiOverrideOptions } from '@taiga-ui/core/utils';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export const TUI_HINT_DIRECTIONS = [
    'bottom-left',
    'bottom',
    'bottom-right',
    'top-left',
    'top',
    'top-right',
    'left-top',
    'left',
    'left-bottom',
    'right-top',
    'right',
    'right-bottom',
];
/** Default values for hint options */
export const TUI_HINT_DEFAULT_OPTIONS = {
    direction: 'bottom-left',
    showDelay: 500,
    hideDelay: 200,
    appearance: '',
    /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
    icon: '@tui.circle-help',
};
/**
 * Default parameters for hint directive
 */
export const TUI_HINT_OPTIONS = tuiCreateToken(TUI_HINT_DEFAULT_OPTIONS);
export const tuiHintOptionsProvider = (override) => ({
    provide: TUI_HINT_OPTIONS,
    deps: [
        [new Optional(), new Self(), TuiHintOptionsDirective],
        [new Optional(), new SkipSelf(), TUI_HINT_OPTIONS],
    ],
    useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS),
});
/**
 * @deprecated: drop in 5.0
 */
class TuiHintOptionsDirective {
    constructor() {
        this.options = inject(TUI_HINT_OPTIONS, { skipSelf: true });
        this.direction = this.options.direction;
        this.appearance = this.options.appearance;
        this.showDelay = this.options.showDelay;
        this.hideDelay = this.options.hideDelay;
        this.icon = this.options.icon;
        this.change$ = new Subject();
    }
    ngOnChanges() {
        this.change$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintOptionsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintOptionsDirective, isStandalone: true, selector: "[tuiHintContent]", inputs: { content: ["tuiHintContent", "content"], direction: ["tuiHintDirection", "direction"], appearance: ["tuiHintAppearance", "appearance"], showDelay: ["tuiHintShowDelay", "showDelay"], hideDelay: ["tuiHintHideDelay", "hideDelay"] }, providers: [tuiProvide(TUI_HINT_OPTIONS, TuiHintOptionsDirective)], usesOnChanges: true, ngImport: i0 }); }
}
export { TuiHintOptionsDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintOptionsDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHintContent]',
                    providers: [tuiProvide(TUI_HINT_OPTIONS, TuiHintOptionsDirective)],
                }]
        }], propDecorators: { content: [{
                type: Input,
                args: ['tuiHintContent']
            }], direction: [{
                type: Input,
                args: ['tuiHintDirection']
            }], appearance: [{
                type: Input,
                args: ['tuiHintAppearance']
            }], showDelay: [{
                type: Input,
                args: ['tuiHintShowDelay']
            }], hideDelay: [{
                type: Input,
                args: ['tuiHintHideDelay']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC1vcHRpb25zLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvZGlyZWN0aXZlcy9oaW50L2hpbnQtb3B0aW9ucy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxjQUFjLEVBQUUsVUFBVSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDN0UsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFnQjdCLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFnQztJQUM1RCxhQUFhO0lBQ2IsUUFBUTtJQUNSLGNBQWM7SUFDZCxVQUFVO0lBQ1YsS0FBSztJQUNMLFdBQVc7SUFDWCxVQUFVO0lBQ1YsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0lBQ1gsT0FBTztJQUNQLGNBQWM7Q0FDakIsQ0FBQztBQVVGLHNDQUFzQztBQUN0QyxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBbUI7SUFDcEQsU0FBUyxFQUFFLGFBQWE7SUFDeEIsU0FBUyxFQUFFLEdBQUc7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsZ0VBQWdFO0lBQ2hFLElBQUksRUFBRSxrQkFBa0I7Q0FDM0IsQ0FBQztBQUVGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFFekUsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBRVosQ0FBQyxRQUFpQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNELE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsSUFBSSxFQUFFO1FBQ0YsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsdUJBQXVCLENBQUM7UUFDckQsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsZ0JBQWdCLENBQUM7S0FDckQ7SUFDRCxVQUFVLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDO0NBQ3JFLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsTUFLYSx1QkFBdUI7SUFMcEM7UUFNcUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBTS9ELGNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUduQyxlQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFHckMsY0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBR25DLGNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUVuQyxTQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFaEIsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7S0FLakQ7SUFIVSxXQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOytHQXhCUSx1QkFBdUI7bUdBQXZCLHVCQUF1Qiw4U0FGckIsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQzs7U0FFekQsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBTG5DLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsMEJBQTBCLENBQUM7aUJBQ3JFOzhCQUtVLE9BQU87c0JBRGIsS0FBSzt1QkFBQyxnQkFBZ0I7Z0JBSWhCLFNBQVM7c0JBRGYsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBSWxCLFVBQVU7c0JBRGhCLEtBQUs7dUJBQUMsbUJBQW1CO2dCQUluQixTQUFTO3NCQURmLEtBQUs7dUJBQUMsa0JBQWtCO2dCQUlsQixTQUFTO3NCQURmLEtBQUs7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0ZhY3RvcnlQcm92aWRlciwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBpbmplY3QsIElucHV0LCBPcHRpb25hbCwgU2VsZiwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0dWlDcmVhdGVUb2tlbiwgdHVpUHJvdmlkZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB7dHVpT3ZlcnJpZGVPcHRpb25zfSBmcm9tICdAdGFpZ2EtdWkvY29yZS91dGlscyc7XG5pbXBvcnQgdHlwZSB7UG9seW1vcnBoZXVzQ29udGVudH0gZnJvbSAnQHRhaWdhLXVpL3BvbHltb3JwaGV1cyc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgdHlwZSBUdWlIaW50RGlyZWN0aW9uID1cbiAgICB8ICdib3R0b20tbGVmdCdcbiAgICB8ICdib3R0b20tcmlnaHQnXG4gICAgfCAnYm90dG9tJ1xuICAgIHwgJ2xlZnQtYm90dG9tJ1xuICAgIHwgJ2xlZnQtdG9wJ1xuICAgIHwgJ2xlZnQnXG4gICAgfCAncmlnaHQtYm90dG9tJ1xuICAgIHwgJ3JpZ2h0LXRvcCdcbiAgICB8ICdyaWdodCdcbiAgICB8ICd0b3AtbGVmdCdcbiAgICB8ICd0b3AtcmlnaHQnXG4gICAgfCAndG9wJztcblxuZXhwb3J0IGNvbnN0IFRVSV9ISU5UX0RJUkVDVElPTlM6IHJlYWRvbmx5IFR1aUhpbnREaXJlY3Rpb25bXSA9IFtcbiAgICAnYm90dG9tLWxlZnQnLFxuICAgICdib3R0b20nLFxuICAgICdib3R0b20tcmlnaHQnLFxuICAgICd0b3AtbGVmdCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvcC1yaWdodCcsXG4gICAgJ2xlZnQtdG9wJyxcbiAgICAnbGVmdCcsXG4gICAgJ2xlZnQtYm90dG9tJyxcbiAgICAncmlnaHQtdG9wJyxcbiAgICAncmlnaHQnLFxuICAgICdyaWdodC1ib3R0b20nLFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBUdWlIaW50T3B0aW9ucyB7XG4gICAgcmVhZG9ubHkgYXBwZWFyYW5jZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGRpcmVjdGlvbjogVHVpSGludERpcmVjdGlvbiB8IFR1aUhpbnREaXJlY3Rpb25bXTtcbiAgICByZWFkb25seSBoaWRlRGVsYXk6IG51bWJlcjtcbiAgICByZWFkb25seSBpY29uOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc2hvd0RlbGF5OiBudW1iZXI7XG59XG5cbi8qKiBEZWZhdWx0IHZhbHVlcyBmb3IgaGludCBvcHRpb25zICovXG5leHBvcnQgY29uc3QgVFVJX0hJTlRfREVGQVVMVF9PUFRJT05TOiBUdWlIaW50T3B0aW9ucyA9IHtcbiAgICBkaXJlY3Rpb246ICdib3R0b20tbGVmdCcsXG4gICAgc2hvd0RlbGF5OiA1MDAsXG4gICAgaGlkZURlbGF5OiAyMDAsXG4gICAgYXBwZWFyYW5jZTogJycsXG4gICAgLyoqIFRPRE8gQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBUVUlfVE9PTFRJUF9PUFRJT05TfSBpbnN0ZWFkICoqL1xuICAgIGljb246ICdAdHVpLmNpcmNsZS1oZWxwJyxcbn07XG5cbi8qKlxuICogRGVmYXVsdCBwYXJhbWV0ZXJzIGZvciBoaW50IGRpcmVjdGl2ZVxuICovXG5leHBvcnQgY29uc3QgVFVJX0hJTlRfT1BUSU9OUyA9IHR1aUNyZWF0ZVRva2VuKFRVSV9ISU5UX0RFRkFVTFRfT1BUSU9OUyk7XG5cbmV4cG9ydCBjb25zdCB0dWlIaW50T3B0aW9uc1Byb3ZpZGVyOiAoXG4gICAgb3B0aW9uczogUGFydGlhbDxUdWlIaW50T3B0aW9ucz4sXG4pID0+IEZhY3RvcnlQcm92aWRlciA9IChvdmVycmlkZTogUGFydGlhbDxUdWlIaW50T3B0aW9ucz4pID0+ICh7XG4gICAgcHJvdmlkZTogVFVJX0hJTlRfT1BUSU9OUyxcbiAgICBkZXBzOiBbXG4gICAgICAgIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNlbGYoKSwgVHVpSGludE9wdGlvbnNEaXJlY3RpdmVdLFxuICAgICAgICBbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUVUlfSElOVF9PUFRJT05TXSxcbiAgICBdLFxuICAgIHVzZUZhY3Rvcnk6IHR1aU92ZXJyaWRlT3B0aW9ucyhvdmVycmlkZSwgVFVJX0hJTlRfREVGQVVMVF9PUFRJT05TKSxcbn0pO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkOiBkcm9wIGluIDUuMFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aUhpbnRDb250ZW50XScsXG4gICAgcHJvdmlkZXJzOiBbdHVpUHJvdmlkZShUVUlfSElOVF9PUFRJT05TLCBUdWlIaW50T3B0aW9uc0RpcmVjdGl2ZSldLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlIaW50T3B0aW9uc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIFR1aUhpbnRPcHRpb25zLCBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9ucyA9IGluamVjdChUVUlfSElOVF9PUFRJT05TLCB7c2tpcFNlbGY6IHRydWV9KTtcblxuICAgIEBJbnB1dCgndHVpSGludENvbnRlbnQnKVxuICAgIHB1YmxpYyBjb250ZW50OiBQb2x5bW9ycGhldXNDb250ZW50O1xuXG4gICAgQElucHV0KCd0dWlIaW50RGlyZWN0aW9uJylcbiAgICBwdWJsaWMgZGlyZWN0aW9uID0gdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcblxuICAgIEBJbnB1dCgndHVpSGludEFwcGVhcmFuY2UnKVxuICAgIHB1YmxpYyBhcHBlYXJhbmNlID0gdGhpcy5vcHRpb25zLmFwcGVhcmFuY2U7XG5cbiAgICBASW5wdXQoJ3R1aUhpbnRTaG93RGVsYXknKVxuICAgIHB1YmxpYyBzaG93RGVsYXkgPSB0aGlzLm9wdGlvbnMuc2hvd0RlbGF5O1xuXG4gICAgQElucHV0KCd0dWlIaW50SGlkZURlbGF5JylcbiAgICBwdWJsaWMgaGlkZURlbGF5ID0gdGhpcy5vcHRpb25zLmhpZGVEZWxheTtcblxuICAgIHB1YmxpYyBpY29uID0gdGhpcy5vcHRpb25zLmljb247XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgY2hhbmdlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbmdlJC5uZXh0KCk7XG4gICAgfVxufVxuIl19