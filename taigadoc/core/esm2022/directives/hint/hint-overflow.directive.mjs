import { Directive, inject } from '@angular/core';
import { TuiHintDirective } from './hint.directive';
import * as i0 from "@angular/core";
import * as i1 from "./hint.directive";
class TuiHintOverflow {
    constructor() {
        this.hint = inject(TuiHintDirective);
    }
    onMouseEnter({ scrollWidth, clientWidth, textContent }) {
        this.hint.tuiHint = scrollWidth > clientWidth ? textContent : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintOverflow, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintOverflow, isStandalone: true, selector: "[tuiHintOverflow]", host: { listeners: { "mouseenter": "onMouseEnter($event.currentTarget)" } }, hostDirectives: [{ directive: i1.TuiHintDirective, inputs: ["tuiHintAppearance", "tuiHintAppearance"] }], ngImport: i0 }); }
}
export { TuiHintOverflow };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintOverflow, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHintOverflow]',
                    hostDirectives: [
                        {
                            directive: TuiHintDirective,
                            inputs: ['tuiHintAppearance'],
                        },
                    ],
                    host: {
                        '(mouseenter)': 'onMouseEnter($event.currentTarget)',
                    },
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC1vdmVyZmxvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2RpcmVjdGl2ZXMvaGludC9oaW50LW92ZXJmbG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRWxELE1BYWEsZUFBZTtJQWI1QjtRQWNxQixTQUFJLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FLcEQ7SUFIYSxZQUFZLENBQUMsRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBVTtRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRSxDQUFDOytHQUxRLGVBQWU7bUdBQWYsZUFBZTs7U0FBZixlQUFlOzRGQUFmLGVBQWU7a0JBYjNCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGNBQWMsRUFBRTt3QkFDWjs0QkFDSSxTQUFTLEVBQUUsZ0JBQWdCOzRCQUMzQixNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt5QkFDaEM7cUJBQ0o7b0JBQ0QsSUFBSSxFQUFFO3dCQUNGLGNBQWMsRUFBRSxvQ0FBb0M7cUJBQ3ZEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7VHVpSGludERpcmVjdGl2ZX0gZnJvbSAnLi9oaW50LmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdbdHVpSGludE92ZXJmbG93XScsXG4gICAgaG9zdERpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlOiBUdWlIaW50RGlyZWN0aXZlLFxuICAgICAgICAgICAgaW5wdXRzOiBbJ3R1aUhpbnRBcHBlYXJhbmNlJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0OiB7XG4gICAgICAgICcobW91c2VlbnRlciknOiAnb25Nb3VzZUVudGVyKCRldmVudC5jdXJyZW50VGFyZ2V0KScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSGludE92ZXJmbG93IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhpbnQgPSBpbmplY3QoVHVpSGludERpcmVjdGl2ZSk7XG5cbiAgICBwcm90ZWN0ZWQgb25Nb3VzZUVudGVyKHtzY3JvbGxXaWR0aCwgY2xpZW50V2lkdGgsIHRleHRDb250ZW50fTogRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpbnQudHVpSGludCA9IHNjcm9sbFdpZHRoID4gY2xpZW50V2lkdGggPyB0ZXh0Q29udGVudCA6ICcnO1xuICAgIH1cbn1cbiJdfQ==