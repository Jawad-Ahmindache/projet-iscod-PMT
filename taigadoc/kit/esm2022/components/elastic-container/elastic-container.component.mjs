import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { shouldCall } from '@taiga-ui/event-plugins';
import { TuiElasticContainerDirective } from './elastic-container.directive';
import * as i0 from "@angular/core";
class TuiElasticContainer {
    constructor() {
        this.height = NaN;
        this.transitions = 0;
    }
    onAnimation(_name, count) {
        this.transitions += count;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiElasticContainer, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiElasticContainer, isStandalone: true, selector: "tui-elastic-container", host: { properties: { "style.height.px": "height", "class._transitioning": "transitions" } }, ngImport: i0, template: "<div\n    class=\"t-wrapper\"\n    (transitioncancel.silent)=\"onAnimation($any($event).propertyName, -1)\"\n    (transitionend.silent)=\"onAnimation($any($event).propertyName, -1)\"\n    (transitionstart.silent)=\"onAnimation($any($event).propertyName, 1)\"\n    (tuiElasticContainer)=\"height = $event\"\n>\n    <ng-content />\n</div>\n", styles: [":host{transition-property:height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;overflow:hidden}:host._transitioning{block-size:auto!important}.t-wrapper{padding-top:1px;margin-top:-1px}\n"], dependencies: [{ kind: "directive", type: TuiElasticContainerDirective, selector: "[tuiElasticContainer]", outputs: ["tuiElasticContainer"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    shouldCall((name) => name === 'height')
], TuiElasticContainer.prototype, "onAnimation", null);
export { TuiElasticContainer };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiElasticContainer, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-elastic-container', imports: [TuiElasticContainerDirective], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[style.height.px]': 'height',
                        '[class._transitioning]': 'transitions',
                    }, template: "<div\n    class=\"t-wrapper\"\n    (transitioncancel.silent)=\"onAnimation($any($event).propertyName, -1)\"\n    (transitionend.silent)=\"onAnimation($any($event).propertyName, -1)\"\n    (transitionstart.silent)=\"onAnimation($any($event).propertyName, 1)\"\n    (tuiElasticContainer)=\"height = $event\"\n>\n    <ng-content />\n</div>\n", styles: [":host{transition-property:height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;overflow:hidden}:host._transitioning{block-size:auto!important}.t-wrapper{padding-top:1px;margin-top:-1px}\n"] }]
        }], propDecorators: { onAnimation: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpYy1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvZWxhc3RpYy1jb250YWluZXIvZWxhc3RpYy1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvZWxhc3RpYy1jb250YWluZXIvZWxhc3RpYy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRW5ELE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLCtCQUErQixDQUFDOztBQUUzRSxNQVlhLG1CQUFtQjtJQVpoQztRQWFjLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDYixnQkFBVyxHQUFHLENBQUMsQ0FBQztLQU03QjtJQUhhLFdBQVcsQ0FBQyxLQUFhLEVBQUUsS0FBYTtRQUM5QyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztJQUM5QixDQUFDOytHQVBRLG1CQUFtQjttR0FBbkIsbUJBQW1CLCtLQ2pCaEMsb1ZBU0EseVNERGMsNEJBQTRCOztBQWM1QjtJQURULFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztzREFHdkM7U0FQUSxtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFaL0IsU0FBUztpQ0FDTSxJQUFJLFlBQ04sdUJBQXVCLFdBQ3hCLENBQUMsNEJBQTRCLENBQUMsbUJBR3RCLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0YsbUJBQW1CLEVBQUUsUUFBUTt3QkFDN0Isd0JBQXdCLEVBQUUsYUFBYTtxQkFDMUM7OEJBT1MsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Nob3VsZENhbGx9IGZyb20gJ0B0YWlnYS11aS9ldmVudC1wbHVnaW5zJztcblxuaW1wb3J0IHtUdWlFbGFzdGljQ29udGFpbmVyRGlyZWN0aXZlfSBmcm9tICcuL2VsYXN0aWMtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktZWxhc3RpYy1jb250YWluZXInLFxuICAgIGltcG9ydHM6IFtUdWlFbGFzdGljQ29udGFpbmVyRGlyZWN0aXZlXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZWxhc3RpYy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2VsYXN0aWMtY29udGFpbmVyLmNvbXBvbmVudC5sZXNzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgaG9zdDoge1xuICAgICAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnaGVpZ2h0JyxcbiAgICAgICAgJ1tjbGFzcy5fdHJhbnNpdGlvbmluZ10nOiAndHJhbnNpdGlvbnMnLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aUVsYXN0aWNDb250YWluZXIge1xuICAgIHByb3RlY3RlZCBoZWlnaHQgPSBOYU47XG4gICAgcHJvdGVjdGVkIHRyYW5zaXRpb25zID0gMDtcblxuICAgIEBzaG91bGRDYWxsKChuYW1lKSA9PiBuYW1lID09PSAnaGVpZ2h0JylcbiAgICBwcm90ZWN0ZWQgb25BbmltYXRpb24oX25hbWU6IHN0cmluZywgY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25zICs9IGNvdW50O1xuICAgIH1cbn1cbiIsIjxkaXZcbiAgICBjbGFzcz1cInQtd3JhcHBlclwiXG4gICAgKHRyYW5zaXRpb25jYW5jZWwuc2lsZW50KT1cIm9uQW5pbWF0aW9uKCRhbnkoJGV2ZW50KS5wcm9wZXJ0eU5hbWUsIC0xKVwiXG4gICAgKHRyYW5zaXRpb25lbmQuc2lsZW50KT1cIm9uQW5pbWF0aW9uKCRhbnkoJGV2ZW50KS5wcm9wZXJ0eU5hbWUsIC0xKVwiXG4gICAgKHRyYW5zaXRpb25zdGFydC5zaWxlbnQpPVwib25BbmltYXRpb24oJGFueSgkZXZlbnQpLnByb3BlcnR5TmFtZSwgMSlcIlxuICAgICh0dWlFbGFzdGljQ29udGFpbmVyKT1cImhlaWdodCA9ICRldmVudFwiXG4+XG4gICAgPG5nLWNvbnRlbnQgLz5cbjwvZGl2PlxuIl19