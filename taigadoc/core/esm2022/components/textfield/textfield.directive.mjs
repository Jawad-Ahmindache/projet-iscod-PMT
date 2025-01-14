import { computed, Directive, inject, Input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiControlValue } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { TuiAppearance, tuiAppearance, tuiAppearanceFocus, tuiAppearanceMode, tuiAppearanceState, } from '@taiga-ui/core/directives/appearance';
import { fromEvent, map, merge, switchMap, timer } from 'rxjs';
import { TuiTextfieldComponent } from './textfield.component';
import { TUI_TEXTFIELD_OPTIONS } from './textfield.options';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/native-validator";
import * as i2 from "@taiga-ui/core/directives/appearance";
class TuiTextfieldBase {
    constructor() {
        // TODO: refactor to signal inputs after Angular update
        this.focused = signal(null);
        this.control = inject(NgControl, { optional: true });
        this.a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
        this.s = tuiAppearanceState(null);
        this.m = tuiAppearanceMode(this.mode);
        this.f = tuiAppearanceFocus(computed(() => this.focused() ?? this.textfield.focused()));
        this.el = tuiInjectElement();
        this.textfield = inject(TuiTextfieldComponent);
        this.readOnly = false;
        this.invalid = null;
        this.nativeValue = toSignal(merge(fromEvent(this.el, 'input'), timer(0) // https://github.com/angular/angular/issues/54418
            .pipe(switchMap(() => tuiControlValue(this.control)))).pipe(map(() => this.el.value)), { initialValue: this.el.value });
    }
    set focusedSetter(focused) {
        this.focused.set(focused);
    }
    set stateSetter(state) {
        this.s.set(state);
    }
    get mode() {
        if (this.readOnly) {
            return 'readonly';
        }
        if (this.invalid === false) {
            return 'valid';
        }
        if (this.invalid) {
            return 'invalid';
        }
        return null;
    }
    // TODO: refactor to signal inputs after Angular update
    ngOnChanges() {
        this.m.set(this.mode);
    }
    setValue(value) {
        this.el.focus();
        this.el.select();
        if (value == null) {
            this.el.ownerDocument.execCommand('delete');
        }
        else {
            this.el.ownerDocument.execCommand('insertText', false, this.textfield.stringify(value));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldBase, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldBase, inputs: { readOnly: "readOnly", invalid: "invalid", focusedSetter: ["focused", "focusedSetter"], stateSetter: ["state", "stateSetter"] }, usesOnChanges: true, ngImport: i0 }); }
}
export { TuiTextfieldBase };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldBase, decorators: [{
            type: Directive
        }], propDecorators: { readOnly: [{
                type: Input
            }], invalid: [{
                type: Input
            }], focusedSetter: [{
                type: Input,
                args: ['focused']
            }], stateSetter: [{
                type: Input,
                args: ['state']
            }] } });
class TuiTextfieldDirective extends TuiTextfieldBase {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTextfieldDirective, isStandalone: true, selector: "input[tuiTextfield]:not([tuiInputCard]):not([tuiInputExpire]):not([tuiInputCVC])", host: { listeners: { "input": "0", "focusin": "0", "focusout": "0" }, properties: { "id": "textfield.id", "readOnly": "readOnly", "class._empty": "el.value === \"\"" } }, usesInheritance: true, hostDirectives: [{ directive: i1.TuiNativeValidator }, { directive: i2.TuiAppearance }], ngImport: i0 }); }
}
export { TuiTextfieldDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTextfieldDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    // TODO: Remove :not in v.5
                    selector: 'input[tuiTextfield]:not([tuiInputCard]):not([tuiInputExpire]):not([tuiInputCVC])',
                    hostDirectives: [TuiNativeValidator, TuiAppearance],
                    host: {
                        '[id]': 'textfield.id',
                        '[readOnly]': 'readOnly',
                        '[class._empty]': 'el.value === ""',
                        '(input)': '0',
                        '(focusin)': '0',
                        '(focusout)': '0',
                    },
                }]
        }] });
class TuiWithTextfield {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithTextfield, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiWithTextfield, isStandalone: true, hostDirectives: [{ directive: TuiTextfieldDirective, inputs: ["invalid", "invalid", "focused", "focused", "readOnly", "readOnly", "state", "state"] }], ngImport: i0 }); }
}
export { TuiWithTextfield };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiWithTextfield, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    hostDirectives: [
                        {
                            directive: TuiTextfieldDirective,
                            inputs: ['invalid', 'focused', 'readOnly', 'state'],
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpZWxkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy90ZXh0ZmllbGQvdGV4dGZpZWxkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQ0gsYUFBYSxFQUNiLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGtCQUFrQixHQUNyQixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRTFELE1BQ2EsZ0JBQWdCO0lBRDdCO1FBRUksdURBQXVEO1FBQ3RDLFlBQU8sR0FBRyxNQUFNLENBQWlCLElBQUksQ0FBQyxDQUFDO1FBRXJDLFlBQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDOUMsTUFBQyxHQUFH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cEQscUJBQXFCO21HQUFyQixxQkFBcUI7O1NBQXJCLHFCQUFxQjs0RkFBckIscUJBQXFCO2tCQWZqQyxTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQiwyQkFBMkI7b0JBQzNCLFFBQVEsRUFDSixrRkFBa0Y7b0JBQ3RGLGNBQWMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztvQkFDbkQsSUFBSSxFQUFFO3dCQUNGLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixZQUFZLEVBQUUsVUFBVTt3QkFDeEIsZ0JBQWdCLEVBQUUsaUJBQWlCO3dCQUNuQyxTQUFTLEVBQUUsR0FBRzt3QkFDZCxXQUFXLEVBQUUsR0FBRzt3QkFDaEIsWUFBWSxFQUFFLEdBQUc7cUJBQ3BCO2lCQUNKOztBQUdELE1BU2EsZ0JBQWdCOytHQUFoQixnQkFBZ0I7bUdBQWhCLGdCQUFnQixvREFYaEIscUJBQXFCOztTQVdyQixnQkFBZ0I7NEZBQWhCLGdCQUFnQjtrQkFUNUIsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsY0FBYyxFQUFFO3dCQUNaOzRCQUNJLFNBQVMsRUFBRSxxQkFBcUI7NEJBQ2hDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQzt5QkFDdEQ7cUJBQ0o7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7T25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tcHV0ZWQsIERpcmVjdGl2ZSwgaW5qZWN0LCBJbnB1dCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7TmdDb250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1R1aU5hdGl2ZVZhbGlkYXRvcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL25hdGl2ZS12YWxpZGF0b3InO1xuaW1wb3J0IHt0dWlDb250cm9sVmFsdWV9IGZyb20gJ0B0YWlnYS11aS9jZGsvb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge1xuICAgIFR1aUFwcGVhcmFuY2UsXG4gICAgdHVpQXBwZWFyYW5jZSxcbiAgICB0dWlBcHBlYXJhbmNlRm9jdXMsXG4gICAgdHVpQXBwZWFyYW5jZU1vZGUsXG4gICAgdHVpQXBwZWFyYW5jZVN0YXRlLFxufSBmcm9tICdAdGFpZ2EtdWkvY29yZS9kaXJlY3RpdmVzL2FwcGVhcmFuY2UnO1xuaW1wb3J0IHR5cGUge1R1aUludGVyYWN0aXZlU3RhdGV9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3R5cGVzJztcbmltcG9ydCB7ZnJvbUV2ZW50LCBtYXAsIG1lcmdlLCBzd2l0Y2hNYXAsIHRpbWVyfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUdWlUZXh0ZmllbGRDb21wb25lbnR9IGZyb20gJy4vdGV4dGZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQge1RVSV9URVhURklFTERfT1BUSU9OU30gZnJvbSAnLi90ZXh0ZmllbGQub3B0aW9ucyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIFR1aVRleHRmaWVsZEJhc2U8VD4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIC8vIFRPRE86IHJlZmFjdG9yIHRvIHNpZ25hbCBpbnB1dHMgYWZ0ZXIgQW5ndWxhciB1cGRhdGVcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvY3VzZWQgPSBzaWduYWw8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRyb2wgPSBpbmplY3QoTmdDb250cm9sLCB7b3B0aW9uYWw6IHRydWV9KTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYSA9IHR1aUFwcGVhcmFuY2UoaW5qZWN0KFRVSV9URVhURklFTERfT1BUSU9OUykuYXBwZWFyYW5jZSk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHMgPSB0dWlBcHBlYXJhbmNlU3RhdGUobnVsbCk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG0gPSB0dWlBcHBlYXJhbmNlTW9kZSh0aGlzLm1vZGUpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBmID0gdHVpQXBwZWFyYW5jZUZvY3VzKFxuICAgICAgICBjb21wdXRlZCgoKSA9PiB0aGlzLmZvY3VzZWQoKSA/PyB0aGlzLnRleHRmaWVsZC5mb2N1c2VkKCkpLFxuICAgICk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50PEhUTUxJbnB1dEVsZW1lbnQ+KCk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHRleHRmaWVsZDogVHVpVGV4dGZpZWxkQ29tcG9uZW50PFQ+ID1cbiAgICAgICAgaW5qZWN0KFR1aVRleHRmaWVsZENvbXBvbmVudCk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZWFkT25seSA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW52YWxpZDogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gICAgcHVibGljIG5hdGl2ZVZhbHVlID0gdG9TaWduYWwoXG4gICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWwsICdpbnB1dCcpLFxuICAgICAgICAgICAgdGltZXIoMCkgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNTQ0MThcbiAgICAgICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKCkgPT4gdHVpQ29udHJvbFZhbHVlKHRoaXMuY29udHJvbCkpKSxcbiAgICAgICAgKS5waXBlKG1hcCgoKSA9PiB0aGlzLmVsLnZhbHVlKSksXG4gICAgICAgIHtpbml0aWFsVmFsdWU6IHRoaXMuZWwudmFsdWV9LFxuICAgICk7XG5cbiAgICBASW5wdXQoJ2ZvY3VzZWQnKVxuICAgIHB1YmxpYyBzZXQgZm9jdXNlZFNldHRlcihmb2N1c2VkOiBib29sZWFuIHwgbnVsbCkge1xuICAgICAgICB0aGlzLmZvY3VzZWQuc2V0KGZvY3VzZWQpO1xuICAgIH1cblxuICAgIEBJbnB1dCgnc3RhdGUnKVxuICAgIHB1YmxpYyBzZXQgc3RhdGVTZXR0ZXIoc3RhdGU6IFR1aUludGVyYWN0aXZlU3RhdGUgfCBudWxsKSB7XG4gICAgICAgIHRoaXMucy5zZXQoc3RhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbW9kZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcbiAgICAgICAgICAgIHJldHVybiAncmVhZG9ubHknO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW52YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAndmFsaWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuICdpbnZhbGlkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHJlZmFjdG9yIHRvIHNpZ25hbCBpbnB1dHMgYWZ0ZXIgQW5ndWxhciB1cGRhdGVcbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubS5zZXQodGhpcy5tb2RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IFQgfCBudWxsKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5lbC5zZWxlY3QoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbC5vd25lckRvY3VtZW50LmV4ZWNDb21tYW5kKCdkZWxldGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwub3duZXJEb2N1bWVudC5leGVjQ29tbWFuZChcbiAgICAgICAgICAgICAgICAnaW5zZXJ0VGV4dCcsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ZmllbGQuc3RyaW5naWZ5KHZhbHVlKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgLy8gVE9ETzogUmVtb3ZlIDpub3QgaW4gdi41XG4gICAgc2VsZWN0b3I6XG4gICAgICAgICdpbnB1dFt0dWlUZXh0ZmllbGRdOm5vdChbdHVpSW5wdXRDYXJkXSk6bm90KFt0dWlJbnB1dEV4cGlyZV0pOm5vdChbdHVpSW5wdXRDVkNdKScsXG4gICAgaG9zdERpcmVjdGl2ZXM6IFtUdWlOYXRpdmVWYWxpZGF0b3IsIFR1aUFwcGVhcmFuY2VdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tpZF0nOiAndGV4dGZpZWxkLmlkJyxcbiAgICAgICAgJ1tyZWFkT25seV0nOiAncmVhZE9ubHknLFxuICAgICAgICAnW2NsYXNzLl9lbXB0eV0nOiAnZWwudmFsdWUgPT09IFwiXCInLFxuICAgICAgICAnKGlucHV0KSc6ICcwJyxcbiAgICAgICAgJyhmb2N1c2luKSc6ICcwJyxcbiAgICAgICAgJyhmb2N1c291dCknOiAnMCcsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGV4dGZpZWxkRGlyZWN0aXZlPFQ+IGV4dGVuZHMgVHVpVGV4dGZpZWxkQmFzZTxUPiB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIGhvc3REaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZTogVHVpVGV4dGZpZWxkRGlyZWN0aXZlLFxuICAgICAgICAgICAgaW5wdXRzOiBbJ2ludmFsaWQnLCAnZm9jdXNlZCcsICdyZWFkT25seScsICdzdGF0ZSddLFxuICAgICAgICB9LFxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aVdpdGhUZXh0ZmllbGQge31cbiJdfQ==