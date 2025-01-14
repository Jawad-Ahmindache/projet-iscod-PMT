import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, } from '@angular/core';
import { TuiButton } from '@taiga-ui/core/components/button';
import { TUI_SPIN_ICONS, TUI_SPIN_TEXTS } from '@taiga-ui/core/tokens';
import * as i0 from "@angular/core";
class TuiSpinButton {
    constructor() {
        this.icons = inject(TUI_SPIN_ICONS);
        this.spinTexts$ = inject(TUI_SPIN_TEXTS);
        this.focusable = true;
        this.disabled = false;
        this.leftDisabled = false;
        this.rightDisabled = false;
        this.leftClick = new EventEmitter();
        this.rightClick = new EventEmitter();
    }
    onLeftClick() {
        if (!this.leftComputedDisabled) {
            this.leftClick.emit();
        }
    }
    onRightClick() {
        if (!this.rightComputedDisabled) {
            this.rightClick.emit();
        }
    }
    get leftComputedDisabled() {
        return this.disabled || this.leftDisabled;
    }
    get rightComputedDisabled() {
        return this.disabled || this.rightDisabled;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSpinButton, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiSpinButton, isStandalone: true, selector: "tui-spin-button", inputs: { focusable: "focusable", disabled: "disabled", leftDisabled: "leftDisabled", rightDisabled: "rightDisabled" }, outputs: { leftClick: "leftClick", rightClick: "rightClick" }, host: { listeners: { "mousedown.silent.prevent": "(0)", "keydown.arrowLeft.prevent": "onLeftClick()", "keydown.arrowRight.prevent": "onRightClick()" } }, ngImport: i0, template: "<ng-container *ngIf=\"spinTexts$ | async as texts\">\n    <button\n        appearance=\"flat\"\n        automation-id=\"tui-spin-button__left\"\n        size=\"xs\"\n        tuiIconButton\n        type=\"button\"\n        [class.t-hidden]=\"leftComputedDisabled\"\n        [iconStart]=\"icons.decrement\"\n        [tabIndex]=\"focusable ? 0 : -1\"\n        (click)=\"onLeftClick()\"\n    >\n        {{ texts[0] }}\n    </button>\n    <span class=\"t-content t-calendar-title\">\n        <ng-content />\n    </span>\n    <button\n        appearance=\"flat\"\n        automation-id=\"tui-spin-button__right\"\n        size=\"xs\"\n        tuiIconButton\n        type=\"button\"\n        [class.t-hidden]=\"rightComputedDisabled\"\n        [iconStart]=\"icons.increment\"\n        [tabIndex]=\"focusable ? 0 : -1\"\n        (click)=\"onRightClick()\"\n    >\n        {{ texts[1] }}\n    </button>\n</ng-container>\n", styles: [":host{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:700}.t-hidden{visibility:hidden}.t-content{padding:0 .5rem}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: TuiButton, selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]", inputs: ["size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiSpinButton };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiSpinButton, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-spin-button', imports: [AsyncPipe, NgIf, TuiButton], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '(mousedown.silent.prevent)': '(0)',
                        '(keydown.arrowLeft.prevent)': 'onLeftClick()',
                        '(keydown.arrowRight.prevent)': 'onRightClick()',
                    }, template: "<ng-container *ngIf=\"spinTexts$ | async as texts\">\n    <button\n        appearance=\"flat\"\n        automation-id=\"tui-spin-button__left\"\n        size=\"xs\"\n        tuiIconButton\n        type=\"button\"\n        [class.t-hidden]=\"leftComputedDisabled\"\n        [iconStart]=\"icons.decrement\"\n        [tabIndex]=\"focusable ? 0 : -1\"\n        (click)=\"onLeftClick()\"\n    >\n        {{ texts[0] }}\n    </button>\n    <span class=\"t-content t-calendar-title\">\n        <ng-content />\n    </span>\n    <button\n        appearance=\"flat\"\n        automation-id=\"tui-spin-button__right\"\n        size=\"xs\"\n        tuiIconButton\n        type=\"button\"\n        [class.t-hidden]=\"rightComputedDisabled\"\n        [iconStart]=\"icons.increment\"\n        [tabIndex]=\"focusable ? 0 : -1\"\n        (click)=\"onRightClick()\"\n    >\n        {{ texts[1] }}\n    </button>\n</ng-container>\n", styles: [":host{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:700}.t-hidden{visibility:hidden}.t-content{padding:0 .5rem}\n"] }]
        }], propDecorators: { focusable: [{
                type: Input
            }], disabled: [{
                type: Input
            }], leftDisabled: [{
                type: Input
            }], rightDisabled: [{
                type: Input
            }], leftClick: [{
                type: Output
            }], rightClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9jb21wb25lbnRzL3NwaW4tYnV0dG9uL3NwaW4tYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9zcGluLWJ1dHRvbi9zcGluLWJ1dHRvbi50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRCxPQUFPLEVBQUMsY0FBYyxFQUFFLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDOztBQUVyRSxNQWFhLGFBQWE7SUFiMUI7UUFjdUIsVUFBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQixlQUFVLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBR2hELGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUdyQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUdiLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBR3JDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0tBcUJ6RDtJQW5CVSxXQUFXO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVNLFlBQVk7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsSUFBYyxvQkFBb0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQWMscUJBQXFCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQy9DLENBQUM7K0dBeENRLGFBQWE7bUdBQWIsYUFBYSw0WkN6QjFCLGs1QkErQkEsZ1BEaEJjLFNBQVMsOENBQUUsSUFBSSw2RkFBRSxTQUFTOztTQVUzQixhQUFhOzRGQUFiLGFBQWE7a0JBYnpCLFNBQVM7aUNBQ00sSUFBSSxZQUNOLGlCQUFpQixXQUNsQixDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLG1CQUdwQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDO3dCQUNGLDRCQUE0QixFQUFFLEtBQUs7d0JBQ25DLDZCQUE2QixFQUFFLGVBQWU7d0JBQzlDLDhCQUE4QixFQUFFLGdCQUFnQjtxQkFDbkQ7OEJBT00sU0FBUztzQkFEZixLQUFLO2dCQUlDLFFBQVE7c0JBRGQsS0FBSztnQkFJQyxZQUFZO3NCQURsQixLQUFLO2dCQUlDLGFBQWE7c0JBRG5CLEtBQUs7Z0JBSVUsU0FBUztzQkFEeEIsTUFBTTtnQkFJUyxVQUFVO3NCQUR6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBc3luY1BpcGUsIE5nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgaW5qZWN0LFxuICAgIElucHV0LFxuICAgIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1R1aUJ1dHRvbn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IHtUVUlfU1BJTl9JQ09OUywgVFVJX1NQSU5fVEVYVFN9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktc3Bpbi1idXR0b24nLFxuICAgIGltcG9ydHM6IFtBc3luY1BpcGUsIE5nSWYsIFR1aUJ1dHRvbl0sXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NwaW4tYnV0dG9uLnRlbXBsYXRlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NwaW4tYnV0dG9uLnN0eWxlLmxlc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgICcobW91c2Vkb3duLnNpbGVudC5wcmV2ZW50KSc6ICcoMCknLFxuICAgICAgICAnKGtleWRvd24uYXJyb3dMZWZ0LnByZXZlbnQpJzogJ29uTGVmdENsaWNrKCknLFxuICAgICAgICAnKGtleWRvd24uYXJyb3dSaWdodC5wcmV2ZW50KSc6ICdvblJpZ2h0Q2xpY2soKScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpU3BpbkJ1dHRvbiB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGljb25zID0gaW5qZWN0KFRVSV9TUElOX0lDT05TKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3BpblRleHRzJCA9IGluamVjdChUVUlfU1BJTl9URVhUUyk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBmb2N1c2FibGUgPSB0cnVlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGxlZnREaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmlnaHREaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IGxlZnRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZWFkb25seSByaWdodENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgcHVibGljIG9uTGVmdENsaWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMubGVmdENvbXB1dGVkRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdENsaWNrLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJpZ2h0Q2xpY2soKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5yaWdodENvbXB1dGVkRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRDbGljay5lbWl0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGxlZnRDb21wdXRlZERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmxlZnREaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJpZ2h0Q29tcHV0ZWREaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yaWdodERpc2FibGVkO1xuICAgIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJzcGluVGV4dHMkIHwgYXN5bmMgYXMgdGV4dHNcIj5cbiAgICA8YnV0dG9uXG4gICAgICAgIGFwcGVhcmFuY2U9XCJmbGF0XCJcbiAgICAgICAgYXV0b21hdGlvbi1pZD1cInR1aS1zcGluLWJ1dHRvbl9fbGVmdFwiXG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIHR1aUljb25CdXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIFtjbGFzcy50LWhpZGRlbl09XCJsZWZ0Q29tcHV0ZWREaXNhYmxlZFwiXG4gICAgICAgIFtpY29uU3RhcnRdPVwiaWNvbnMuZGVjcmVtZW50XCJcbiAgICAgICAgW3RhYkluZGV4XT1cImZvY3VzYWJsZSA/IDAgOiAtMVwiXG4gICAgICAgIChjbGljayk9XCJvbkxlZnRDbGljaygpXCJcbiAgICA+XG4gICAgICAgIHt7IHRleHRzWzBdIH19XG4gICAgPC9idXR0b24+XG4gICAgPHNwYW4gY2xhc3M9XCJ0LWNvbnRlbnQgdC1jYWxlbmRhci10aXRsZVwiPlxuICAgICAgICA8bmctY29udGVudCAvPlxuICAgIDwvc3Bhbj5cbiAgICA8YnV0dG9uXG4gICAgICAgIGFwcGVhcmFuY2U9XCJmbGF0XCJcbiAgICAgICAgYXV0b21hdGlvbi1pZD1cInR1aS1zcGluLWJ1dHRvbl9fcmlnaHRcIlxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICB0dWlJY29uQnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBbY2xhc3MudC1oaWRkZW5dPVwicmlnaHRDb21wdXRlZERpc2FibGVkXCJcbiAgICAgICAgW2ljb25TdGFydF09XCJpY29ucy5pbmNyZW1lbnRcIlxuICAgICAgICBbdGFiSW5kZXhdPVwiZm9jdXNhYmxlID8gMCA6IC0xXCJcbiAgICAgICAgKGNsaWNrKT1cIm9uUmlnaHRDbGljaygpXCJcbiAgICA+XG4gICAgICAgIHt7IHRleHRzWzFdIH19XG4gICAgPC9idXR0b24+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==