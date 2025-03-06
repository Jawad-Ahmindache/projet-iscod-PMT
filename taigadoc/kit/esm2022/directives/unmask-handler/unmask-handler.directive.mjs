import { Directive, Input } from '@angular/core';
import { MASKITO_DEFAULT_OPTIONS, maskitoTransform } from '@maskito/core';
import { TuiValueTransformer } from '@taiga-ui/cdk/classes';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { identity } from 'rxjs';
import * as i0 from "@angular/core";
class TuiUnmaskHandler extends TuiValueTransformer {
    constructor() {
        super(...arguments);
        this.tuiUnmaskHandler = identity;
        this.maskito = null;
    }
    fromControlValue(controlValue) {
        return maskitoTransform(String(controlValue ?? ''), this.maskito || MASKITO_DEFAULT_OPTIONS);
    }
    toControlValue(value) {
        return this.tuiUnmaskHandler(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiUnmaskHandler, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiUnmaskHandler, isStandalone: true, selector: "[maskito][tuiUnmaskHandler]", inputs: { tuiUnmaskHandler: "tuiUnmaskHandler", maskito: "maskito" }, providers: [tuiProvide(TuiValueTransformer, TuiUnmaskHandler)], usesInheritance: true, ngImport: i0 }); }
}
export { TuiUnmaskHandler };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiUnmaskHandler, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[maskito][tuiUnmaskHandler]',
                    providers: [tuiProvide(TuiValueTransformer, TuiUnmaskHandler)],
                }]
        }], propDecorators: { tuiUnmaskHandler: [{
                type: Input
            }], maskito: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tYXNrLWhhbmRsZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2RpcmVjdGl2ZXMvdW5tYXNrLWhhbmRsZXIvdW5tYXNrLWhhbmRsZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDN0QsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFOUIsTUFLYSxnQkFBaUIsU0FBUSxtQkFBMkI7SUFMakU7O1FBT1cscUJBQWdCLEdBQWdDLFFBQVEsQ0FBQztRQUd6RCxZQUFPLEdBQTBCLElBQUksQ0FBQztLQVloRDtJQVZtQixnQkFBZ0IsQ0FBQyxZQUFxQjtRQUNsRCxPQUFPLGdCQUFnQixDQUNuQixNQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxFQUMxQixJQUFJLENBQUMsT0FBTyxJQUFJLHVCQUF1QixDQUMxQyxDQUFDO0lBQ04sQ0FBQztJQUVlLGNBQWMsQ0FBQyxLQUFhO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7K0dBaEJRLGdCQUFnQjttR0FBaEIsZ0JBQWdCLGdKQUZkLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLENBQUM7O1NBRXJELGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUw1QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLG1CQUFtQixDQUFDO2lCQUNqRTs4QkFHVSxnQkFBZ0I7c0JBRHRCLEtBQUs7Z0JBSUMsT0FBTztzQkFEYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtNYXNraXRvT3B0aW9uc30gZnJvbSAnQG1hc2tpdG8vY29yZSc7XG5pbXBvcnQge01BU0tJVE9fREVGQVVMVF9PUFRJT05TLCBtYXNraXRvVHJhbnNmb3JtfSBmcm9tICdAbWFza2l0by9jb3JlJztcbmltcG9ydCB7VHVpVmFsdWVUcmFuc2Zvcm1lcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9jbGFzc2VzJztcbmltcG9ydCB0eXBlIHtUdWlNYXBwZXJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHt0dWlQcm92aWRlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtpZGVudGl0eX0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbbWFza2l0b11bdHVpVW5tYXNrSGFuZGxlcl0nLFxuICAgIHByb3ZpZGVyczogW3R1aVByb3ZpZGUoVHVpVmFsdWVUcmFuc2Zvcm1lciwgVHVpVW5tYXNrSGFuZGxlcildLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlVbm1hc2tIYW5kbGVyIGV4dGVuZHMgVHVpVmFsdWVUcmFuc2Zvcm1lcjxzdHJpbmc+IHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0dWlVbm1hc2tIYW5kbGVyOiBUdWlNYXBwZXI8W3N0cmluZ10sIHN0cmluZz4gPSBpZGVudGl0eTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1hc2tpdG86IE1hc2tpdG9PcHRpb25zIHwgbnVsbCA9IG51bGw7XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZnJvbUNvbnRyb2xWYWx1ZShjb250cm9sVmFsdWU6IHVua25vd24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbWFza2l0b1RyYW5zZm9ybShcbiAgICAgICAgICAgIFN0cmluZyhjb250cm9sVmFsdWUgPz8gJycpLFxuICAgICAgICAgICAgdGhpcy5tYXNraXRvIHx8IE1BU0tJVE9fREVGQVVMVF9PUFRJT05TLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSB0b0NvbnRyb2xWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHVpVW5tYXNrSGFuZGxlcih2YWx1ZSk7XG4gICAgfVxufVxuIl19