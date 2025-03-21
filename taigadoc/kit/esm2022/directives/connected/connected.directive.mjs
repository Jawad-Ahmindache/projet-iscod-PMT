import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation, } from '@angular/core';
import { tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i0 from "@angular/core";
class TuiConnectedStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConnectedStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiConnectedStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-connected-styles" }, ngImport: i0, template: '', isInline: true, styles: ["[tuiConnected]{--t-image-size: 2.5rem;--t-connected-height: calc(100% - var(--t-image-size) - .5rem)}[tuiConnected][tuiCardLarge]{--t-connected-height: calc(100% - var(--t-image-size) - .25rem)}[tuiConnected] [tuiCell]:not(:last-of-type):after,[tuiConnected] [tuiStep]:not(:last-of-type):after{content:\"\";position:absolute;top:calc(var(--t-image-size) + .25rem);left:calc(var(--t-image-size) / 2);block-size:var(--t-connected-height);inline-size:1px;background-color:var(--tui-border-normal);background-clip:content-box;padding:inherit}[tuiConnected] [tuiStep]{--t-image-size: 2rem;--t-connected-height: calc(100% - var(--t-image-size) + .75rem)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConnectedStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-connected-styles',
                    }, styles: ["[tuiConnected]{--t-image-size: 2.5rem;--t-connected-height: calc(100% - var(--t-image-size) - .5rem)}[tuiConnected][tuiCardLarge]{--t-connected-height: calc(100% - var(--t-image-size) - .25rem)}[tuiConnected] [tuiCell]:not(:last-of-type):after,[tuiConnected] [tuiStep]:not(:last-of-type):after{content:\"\";position:absolute;top:calc(var(--t-image-size) + .25rem);left:calc(var(--t-image-size) / 2);block-size:var(--t-connected-height);inline-size:1px;background-color:var(--tui-border-normal);background-clip:content-box;padding:inherit}[tuiConnected] [tuiStep]{--t-image-size: 2rem;--t-connected-height: calc(100% - var(--t-image-size) + .75rem)}\n"] }]
        }] });
class TuiConnected {
    constructor() {
        this.nothing = tuiWithStyles(TuiConnectedStyles);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConnected, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiConnected, isStandalone: true, selector: "[tuiConnected]", host: { attributes: { "tuiConnected": "" } }, ngImport: i0 }); }
}
export { TuiConnected };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiConnected, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiConnected]',
                    host: {
                        tuiConnected: '',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGVkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9kaXJlY3RpdmVzL2Nvbm5lY3RlZC9jb25uZWN0ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsR0FDcEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1DQUFtQyxDQUFDOztBQUVoRSxNQVVNLGtCQUFrQjsrR0FBbEIsa0JBQWtCO21HQUFsQixrQkFBa0IsMEhBUlYsRUFBRTs7NEZBUVYsa0JBQWtCO2tCQVZ2QixTQUFTO2lDQUNNLElBQUksWUFDTixFQUFFLGlCQUVHLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7d0JBQ0YsS0FBSyxFQUFFLHNCQUFzQjtxQkFDaEM7O0FBSUwsTUFPYSxZQUFZO0lBUHpCO1FBUXVCLFlBQU8sR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQUNsRTsrR0FGWSxZQUFZO21HQUFaLFlBQVk7O1NBQVosWUFBWTs0RkFBWixZQUFZO2tCQVB4QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixJQUFJLEVBQUU7d0JBQ0YsWUFBWSxFQUFFLEVBQUU7cUJBQ25CO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHVpV2l0aFN0eWxlc30gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgc3R5bGVVcmxzOiBbJy4vY29ubmVjdGVkLnN0eWxlLmxlc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICd0dWktY29ubmVjdGVkLXN0eWxlcycsXG4gICAgfSxcbn0pXG5jbGFzcyBUdWlDb25uZWN0ZWRTdHlsZXMge31cblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlDb25uZWN0ZWRdJyxcbiAgICBob3N0OiB7XG4gICAgICAgIHR1aUNvbm5lY3RlZDogJycsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpQ29ubmVjdGVkIHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbm90aGluZyA9IHR1aVdpdGhTdHlsZXMoVHVpQ29ubmVjdGVkU3R5bGVzKTtcbn1cbiJdfQ==