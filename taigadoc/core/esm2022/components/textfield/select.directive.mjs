import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { WA_NAVIGATOR } from '@ng-web-apis/common';
import { TuiNativeValidator } from '@taiga-ui/cdk/directives/native-validator';
import { tuiProvide } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiAppearance } from '@taiga-ui/core/directives/appearance';
import { TuiTextfieldBase, TuiTextfieldDirective } from './textfield.directive';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/native-validator";
import * as i2 from "@taiga-ui/core/directives/appearance";
import * as i3 from "@angular/common";
class TuiSelect extends TuiTextfieldBase {
    constructor() {
        super(...arguments);
        this.nav = inject(WA_NAVIGATOR);
        this.placeholder = '';
    }
    setValue(value) {
        this.control?.control?.setValue(value);
        this.el.dispatchEvent(new Event('input', { bubbles: true }));
    }
    focus() {
        this.el.classList.add('_ios-fix');
        this.el.focus();
        this.el.classList.remove('_ios-fix');
    }
    get value() {
        return this.textfield.stringify(this.control?.value ?? '');
    }
    async onCopy() {
        await this.nav.clipboard.writeText(this.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSelect, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSelect, isStandalone: true, selector: "select[tuiTextfield]", inputs: { placeholder: "placeholder" }, host: { listeners: { "input": "0", "focusin": "0", "focusout": "0", "keydown.space.prevent": "0", "keydown.enter.prevent": "0", "keydown.backspace": "setValue(\"\")", "mousedown.prevent": "focus()", "keydown.control.c": "onCopy()", "keydown.meta.c": "onCopy()" }, properties: { "id": "textfield.id", "class._empty": "value === \"\"" } }, providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)], usesInheritance: true, hostDirectives: [{ directive: i1.TuiNativeValidator }, { directive: i2.TuiAppearance }], ngImport: i0, template: "<option\n    *ngIf=\"placeholder && !value; else selected\"\n    disabled\n    selected\n    value=\"\"\n>\n    {{ placeholder }}\n</option>\n<ng-template #selected>\n    <option\n        *ngFor=\"let item of [value]\"\n        selected\n        [value]=\"item\"\n    >\n        {{ item }}\n    </option>\n</ng-template>\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.Default }); }
}
export { TuiSelect };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSelect, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'select[tuiTextfield]', imports: [CommonModule], changeDetection: ChangeDetectionStrategy.Default, providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)], hostDirectives: [TuiNativeValidator, TuiAppearance], host: {
                        '[id]': 'textfield.id',
                        '[class._empty]': 'value === ""',
                        '(input)': '0',
                        '(focusin)': '0',
                        '(focusout)': '0',
                        '(keydown.space.prevent)': '0',
                        '(keydown.enter.prevent)': '0',
                        '(keydown.backspace)': 'setValue("")',
                        '(mousedown.prevent)': 'focus()',
                        '(keydown.control.c)': 'onCopy()',
                        '(keydown.meta.c)': 'onCopy()',
                    }, template: "<option\n    *ngIf=\"placeholder && !value; else selected\"\n    disabled\n    selected\n    value=\"\"\n>\n    {{ placeholder }}\n</option>\n<ng-template #selected>\n    <option\n        *ngFor=\"let item of [value]\"\n        selected\n        [value]=\"item\"\n    >\n        {{ item }}\n    </option>\n</ng-template>\n" }]
        }], propDecorators: { placeholder: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy90ZXh0ZmllbGQvc2VsZWN0LmRpcmVjdGl2ZS50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy90ZXh0ZmllbGQvc2VsZWN0LnRlbXBsYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDN0UsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUVuRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFFOUUsTUF3QmEsU0FBYSxTQUFRLGdCQUFtQjtJQXhCckQ7O1FBeUJxQixRQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBR3JDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0tBb0IzQjtJQWxCbUIsUUFBUSxDQUFDLEtBQVE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLEtBQUs7UUFDUixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELElBQWMsS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVTLEtBQUssQ0FBQyxNQUFNO1FBQ2xCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDOytHQXZCUSxTQUFTO21HQUFULFNBQVMsNmJBaEJQLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDLDBJQ2pCN0Qsb1VBaUJBLDJDRExjLFlBQVk7O1NBcUJiLFNBQVM7NEZBQVQsU0FBUztrQkF4QnJCLFNBQVM7aUNBQ00sSUFBSSxZQUNOLHNCQUFzQixXQUN2QixDQUFDLFlBQVksQ0FBQyxtQkFJTix1QkFBdUIsQ0FBQyxPQUFPLGFBQ3JDLENBQUMsVUFBVSxDQUFDLHFCQUFxQixZQUFZLENBQUMsa0JBQ3pDLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLFFBQzdDO3dCQUNGLE1BQU0sRUFBRSxjQUFjO3dCQUN0QixnQkFBZ0IsRUFBRSxjQUFjO3dCQUNoQyxTQUFTLEVBQUUsR0FBRzt3QkFDZCxXQUFXLEVBQUUsR0FBRzt3QkFDaEIsWUFBWSxFQUFFLEdBQUc7d0JBQ2pCLHlCQUF5QixFQUFFLEdBQUc7d0JBQzlCLHlCQUF5QixFQUFFLEdBQUc7d0JBQzlCLHFCQUFxQixFQUFFLGNBQWM7d0JBQ3JDLHFCQUFxQixFQUFFLFNBQVM7d0JBQ2hDLHFCQUFxQixFQUFFLFVBQVU7d0JBQ2pDLGtCQUFrQixFQUFFLFVBQVU7cUJBQ2pDOzhCQU1NLFdBQVc7c0JBRGpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgaW5qZWN0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1dBX05BVklHQVRPUn0gZnJvbSAnQG5nLXdlYi1hcGlzL2NvbW1vbic7XG5pbXBvcnQge1R1aU5hdGl2ZVZhbGlkYXRvcn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL25hdGl2ZS12YWxpZGF0b3InO1xuaW1wb3J0IHt0dWlQcm92aWRlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtUdWlBcHBlYXJhbmNlfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9kaXJlY3RpdmVzL2FwcGVhcmFuY2UnO1xuXG5pbXBvcnQge1R1aVRleHRmaWVsZEJhc2UsIFR1aVRleHRmaWVsZERpcmVjdGl2ZX0gZnJvbSAnLi90ZXh0ZmllbGQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3NlbGVjdFt0dWlUZXh0ZmllbGRdJyxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LnRlbXBsYXRlLmh0bWwnLFxuICAgIC8vIFdlIHdhbnQgdGhpcyB0ZW1wbGF0ZSB0byBmb2xsb3cgY2hhbmdlIGRldGVjdGlvbiB0byBwYXJlbnQgdGV4dGZpZWxkLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvcHJlZmVyLW9uLXB1c2gtY29tcG9uZW50LWNoYW5nZS1kZXRlY3Rpb25cbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gICAgcHJvdmlkZXJzOiBbdHVpUHJvdmlkZShUdWlUZXh0ZmllbGREaXJlY3RpdmUsIFR1aVNlbGVjdCldLFxuICAgIGhvc3REaXJlY3RpdmVzOiBbVHVpTmF0aXZlVmFsaWRhdG9yLCBUdWlBcHBlYXJhbmNlXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbaWRdJzogJ3RleHRmaWVsZC5pZCcsXG4gICAgICAgICdbY2xhc3MuX2VtcHR5XSc6ICd2YWx1ZSA9PT0gXCJcIicsXG4gICAgICAgICcoaW5wdXQpJzogJzAnLFxuICAgICAgICAnKGZvY3VzaW4pJzogJzAnLFxuICAgICAgICAnKGZvY3Vzb3V0KSc6ICcwJyxcbiAgICAgICAgJyhrZXlkb3duLnNwYWNlLnByZXZlbnQpJzogJzAnLFxuICAgICAgICAnKGtleWRvd24uZW50ZXIucHJldmVudCknOiAnMCcsXG4gICAgICAgICcoa2V5ZG93bi5iYWNrc3BhY2UpJzogJ3NldFZhbHVlKFwiXCIpJyxcbiAgICAgICAgJyhtb3VzZWRvd24ucHJldmVudCknOiAnZm9jdXMoKScsXG4gICAgICAgICcoa2V5ZG93bi5jb250cm9sLmMpJzogJ29uQ29weSgpJyxcbiAgICAgICAgJyhrZXlkb3duLm1ldGEuYyknOiAnb25Db3B5KCknLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aVNlbGVjdDxUPiBleHRlbmRzIFR1aVRleHRmaWVsZEJhc2U8VD4ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbmF2ID0gaW5qZWN0KFdBX05BVklHQVRPUik7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcnO1xuXG4gICAgcHVibGljIG92ZXJyaWRlIHNldFZhbHVlKHZhbHVlOiBUKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udHJvbD8uY29udHJvbD8uc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHtidWJibGVzOiB0cnVlfSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdfaW9zLWZpeCcpO1xuICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnX2lvcy1maXgnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRmaWVsZC5zdHJpbmdpZnkodGhpcy5jb250cm9sPy52YWx1ZSA/PyAnJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIG9uQ29weSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5uYXYuY2xpcGJvYXJkLndyaXRlVGV4dCh0aGlzLnZhbHVlKTtcbiAgICB9XG59XG4iLCI8b3B0aW9uXG4gICAgKm5nSWY9XCJwbGFjZWhvbGRlciAmJiAhdmFsdWU7IGVsc2Ugc2VsZWN0ZWRcIlxuICAgIGRpc2FibGVkXG4gICAgc2VsZWN0ZWRcbiAgICB2YWx1ZT1cIlwiXG4+XG4gICAge3sgcGxhY2Vob2xkZXIgfX1cbjwvb3B0aW9uPlxuPG5nLXRlbXBsYXRlICNzZWxlY3RlZD5cbiAgICA8b3B0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIFt2YWx1ZV1cIlxuICAgICAgICBzZWxlY3RlZFxuICAgICAgICBbdmFsdWVdPVwiaXRlbVwiXG4gICAgPlxuICAgICAgICB7eyBpdGVtIH19XG4gICAgPC9vcHRpb24+XG48L25nLXRlbXBsYXRlPlxuIl19