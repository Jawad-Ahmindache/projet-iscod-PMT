import { __decorate } from "tslib";
import { computed, ContentChild, Directive, ElementRef, EventEmitter, inject, Input, Output, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import { TuiObscured } from '@taiga-ui/cdk/directives/obscured';
import { tuiWatch } from '@taiga-ui/cdk/observables';
import { tuiGetActualTarget, tuiInjectElement, tuiIsElement, tuiIsElementEditable, tuiIsHTMLElement, } from '@taiga-ui/cdk/utils/dom';
import { tuiGetClosestFocusable, tuiIsNativeFocusedIn, tuiIsNativeKeyboardFocusable, } from '@taiga-ui/cdk/utils/focus';
import { tuiAsDriver } from '@taiga-ui/core/classes';
import { tuiIsEditingKey } from '@taiga-ui/core/utils/miscellaneous';
import { shouldCall } from '@taiga-ui/event-plugins';
import { filter, fromEvent, map, merge } from 'rxjs';
import { TuiDropdownDirective } from './dropdown.directive';
import { TuiDropdownDriver } from './dropdown.driver';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/obscured";
import * as i2 from "@taiga-ui/cdk/directives/active-zone";
function shouldClose(event) {
    return ('key' in event &&
        event.key.toLowerCase() === 'escape' &&
        this.tuiDropdownEnabled &&
        !!this.tuiDropdownOpen &&
        !this['dropdown']()?.nextElementSibling);
}
class TuiDropdownOpen {
    constructor() {
        this.directive = inject(TuiDropdownDirective);
        this.el = tuiInjectElement();
        this.obscured = inject(TuiObscured);
        this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
        this.sub = merge(this.obscured.tuiObscured.pipe(filter(Boolean)), inject(TuiActiveZone).tuiActiveZoneChange.pipe(filter((a) => !a)), fromEvent(this.el, 'focusin').pipe(map(tuiGetActualTarget), filter((target) => !this.host.contains(target) || !this.directive.ref())))
            .pipe(tuiWatch(), takeUntilDestroyed())
            .subscribe(() => this.toggle(false));
        this.tuiDropdownEnabled = true;
        this.tuiDropdownOpen = false;
        this.tuiDropdownOpenChange = new EventEmitter();
        // TODO: make it private when all legacy controls will be deleted from @taiga-ui/legacy (5.0)
        this.driver = inject(TuiDropdownDriver);
    }
    ngOnChanges() {
        this.update(!!this.tuiDropdownOpen);
    }
    toggle(open) {
        if (this.focused && !open) {
            this.host.focus({ preventScroll: true });
        }
        this.update(open);
    }
    onEsc(event) {
        event.preventDefault();
        this.toggle(false);
    }
    onClick(target) {
        if (!this.editable && this.host.contains(target)) {
            this.update(!this.tuiDropdownOpen);
        }
    }
    onArrow(event, up) {
        if (!tuiIsElement(event.target) ||
            !this.host.contains(event.target) ||
            !this.tuiDropdownEnabled) {
            return;
        }
        event.preventDefault();
        this.focusDropdown(up);
    }
    onKeydown({ key, target, defaultPrevented }) {
        if (!defaultPrevented &&
            tuiIsEditingKey(key) &&
            this.editable &&
            this.focused &&
            tuiIsHTMLElement(target) &&
            !tuiIsElementEditable(target)) {
            this.host.focus({ preventScroll: true });
        }
    }
    get host() {
        const initial = this.dropdownHost?.nativeElement || this.el;
        const focusable = tuiIsNativeKeyboardFocusable(initial)
            ? initial
            : tuiGetClosestFocusable({ initial, root: this.el });
        return this.dropdownHost?.nativeElement || focusable || this.el;
    }
    get editable() {
        return tuiIsElementEditable(this.host);
    }
    get focused() {
        return tuiIsNativeFocusedIn(this.host) || tuiIsNativeFocusedIn(this.dropdown());
    }
    update(open) {
        if (open && !this.tuiDropdownEnabled) {
            return this.drive();
        }
        this.tuiDropdownOpen = open;
        this.tuiDropdownOpenChange.emit(open);
        this.drive();
    }
    drive(open = !!this.tuiDropdownOpen && this.tuiDropdownEnabled) {
        this.obscured.tuiObscuredEnabled = open;
        this.driver.next(open);
    }
    focusDropdown(previous) {
        const root = this.dropdown();
        if (!root) {
            this.update(true);
            return;
        }
        const doc = this.el.ownerDocument;
        const child = root.appendChild(doc.createElement('div'));
        const initial = previous ? child : root;
        const focusable = tuiGetClosestFocusable({ initial, previous, root });
        child.remove();
        focusable?.focus();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOpen, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownOpen, isStandalone: true, selector: "[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]", inputs: { tuiDropdownEnabled: "tuiDropdownEnabled", tuiDropdownOpen: "tuiDropdownOpen" }, outputs: { tuiDropdownOpenChange: "tuiDropdownOpenChange" }, host: { listeners: { "click": "onClick($event.target)", "keydown.arrowDown": "onArrow($event, false)", "keydown.arrowUp": "onArrow($event, true)", "document:keydown.silent.capture": "onEsc($event)", "document:keydown.silent": "onKeydown($event)" } }, providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)], queries: [{ propertyName: "dropdownHost", first: true, predicate: ["tuiDropdownHost"], descendants: true, read: ElementRef }], usesOnChanges: true, hostDirectives: [{ directive: i1.TuiObscured }, { directive: i2.TuiActiveZone, inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"], outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"] }], ngImport: i0 }); }
}
__decorate([
    shouldCall(shouldClose)
], TuiDropdownOpen.prototype, "onEsc", null);
export { TuiDropdownOpen };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownOpen, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]',
                    providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
                    hostDirectives: [
                        TuiObscured,
                        {
                            directive: TuiActiveZone,
                            inputs: ['tuiActiveZoneParent'],
                            outputs: ['tuiActiveZoneChange'],
                        },
                    ],
                    host: {
                        '(click)': 'onClick($event.target)',
                        '(keydown.arrowDown)': 'onArrow($event, false)',
                        '(keydown.arrowUp)': 'onArrow($event, true)',
                        '(document:keydown.silent.capture)': 'onEsc($event)',
                        '(document:keydown.silent)': 'onKeydown($event)',
                    },
                }]
        }], propDecorators: { dropdownHost: [{
                type: ContentChild,
                args: ['tuiDropdownHost', { descendants: true, read: ElementRef }]
            }], tuiDropdownEnabled: [{
                type: Input
            }], tuiDropdownOpen: [{
                type: Input
            }], tuiDropdownOpenChange: [{
                type: Output
            }], onEsc: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tb3Blbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2RpcmVjdGl2ZXMvZHJvcGRvd24vZHJvcGRvd24tb3Blbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDSCxRQUFRLEVBQ1IsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDOUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sRUFDSCxrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsZ0JBQWdCLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUNILHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIsNEJBQTRCLEdBQy9CLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVB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dCB0eXBlIHtPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBjb21wdXRlZCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGluamVjdCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlVW50aWxEZXN0cm95ZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7VHVpQWN0aXZlWm9uZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay9kaXJlY3RpdmVzL2FjdGl2ZS16b25lJztcbmltcG9ydCB7VHVpT2JzY3VyZWR9IGZyb20gJ0B0YWlnYS11aS9jZGsvZGlyZWN0aXZlcy9vYnNjdXJlZCc7XG5pbXBvcnQge3R1aVdhdGNofSBmcm9tICdAdGFpZ2EtdWkvY2RrL29ic2VydmFibGVzJztcbmltcG9ydCB7XG4gICAgdHVpR2V0QWN0dWFsVGFyZ2V0LFxuICAgIHR1aUluamVjdEVsZW1lbnQsXG4gICAgdHVpSXNFbGVtZW50LFxuICAgIHR1aUlzRWxlbWVudEVkaXRhYmxlLFxuICAgIHR1aUlzSFRNTEVsZW1lbnQsXG59IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7XG4gICAgdHVpR2V0Q2xvc2VzdEZvY3VzYWJsZSxcbiAgICB0dWlJc05hdGl2ZUZvY3VzZWRJbixcbiAgICB0dWlJc05hdGl2ZUtleWJvYXJkRm9jdXNhYmxlLFxufSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2ZvY3VzJztcbmltcG9ydCB7dHVpQXNEcml2ZXJ9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHt0dWlJc0VkaXRpbmdLZXl9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtzaG91bGRDYWxsfSBmcm9tICdAdGFpZ2EtdWkvZXZlbnQtcGx1Z2lucyc7XG5pbXBvcnQge2ZpbHRlciwgZnJvbUV2ZW50LCBtYXAsIG1lcmdlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUdWlEcm9wZG93bkRpcmVjdGl2ZX0gZnJvbSAnLi9kcm9wZG93bi5kaXJlY3RpdmUnO1xuaW1wb3J0IHtUdWlEcm9wZG93bkRyaXZlcn0gZnJvbSAnLi9kcm9wZG93bi5kcml2ZXInO1xuXG5mdW5jdGlvbiBzaG91bGRDbG9zZSh0aGlzOiBUdWlEcm9wZG93bk9wZW4sIGV2ZW50OiBFdmVudCB8IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAna2V5JyBpbiBldmVudCAmJlxuICAgICAgICBldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2VzY2FwZScgJiZcbiAgICAgICAgdGhpcy50dWlEcm9wZG93bkVuYWJsZWQgJiZcbiAgICAgICAgISF0aGlzLnR1aURyb3Bkb3duT3BlbiAmJlxuICAgICAgICAhdGhpc1snZHJvcGRvd24nXSgpPy5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICApO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aURyb3Bkb3duXVt0dWlEcm9wZG93bk9wZW5dLFt0dWlEcm9wZG93bl1bdHVpRHJvcGRvd25PcGVuQ2hhbmdlXScsXG4gICAgcHJvdmlkZXJzOiBbVHVpRHJvcGRvd25Ecml2ZXIsIHR1aUFzRHJpdmVyKFR1aURyb3Bkb3duRHJpdmVyKV0sXG4gICAgaG9zdERpcmVjdGl2ZXM6IFtcbiAgICAgICAgVHVpT2JzY3VyZWQsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZTogVHVpQWN0aXZlWm9uZSxcbiAgICAgICAgICAgIGlucHV0czogWyd0dWlBY3RpdmVab25lUGFyZW50J10sXG4gICAgICAgICAgICBvdXRwdXRzOiBbJ3R1aUFjdGl2ZVpvbmVDaGFuZ2UnXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhjbGljayknOiAnb25DbGljaygkZXZlbnQudGFyZ2V0KScsXG4gICAgICAgICcoa2V5ZG93bi5hcnJvd0Rvd24pJzogJ29uQXJyb3coJGV2ZW50LCBmYWxzZSknLFxuICAgICAgICAnKGtleWRvd24uYXJyb3dVcCknOiAnb25BcnJvdygkZXZlbnQsIHRydWUpJyxcbiAgICAgICAgJyhkb2N1bWVudDprZXlkb3duLnNpbGVudC5jYXB0dXJlKSc6ICdvbkVzYygkZXZlbnQpJyxcbiAgICAgICAgJyhkb2N1bWVudDprZXlkb3duLnNpbGVudCknOiAnb25LZXlkb3duKCRldmVudCknLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aURyb3Bkb3duT3BlbiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQENvbnRlbnRDaGlsZCgndHVpRHJvcGRvd25Ib3N0Jywge2Rlc2NlbmRhbnRzOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRyb3Bkb3duSG9zdD86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXJlY3RpdmUgPSBpbmplY3QoVHVpRHJvcGRvd25EaXJlY3RpdmUpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvYnNjdXJlZCA9IGluamVjdChUdWlPYnNjdXJlZCk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRyb3Bkb3duID0gY29tcHV0ZWQoXG4gICAgICAgICgpID0+IHRoaXMuZGlyZWN0aXZlLnJlZigpPy5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LFxuICAgICk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3ViID0gbWVyZ2UoXG4gICAgICAgIHRoaXMub2JzY3VyZWQudHVpT2JzY3VyZWQucGlwZShmaWx0ZXIoQm9vbGVhbikpLFxuICAgICAgICBpbmplY3QoVHVpQWN0aXZlWm9uZSkudHVpQWN0aXZlWm9uZUNoYW5nZS5waXBlKGZpbHRlcigoYSkgPT4gIWEpKSxcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuZWwsICdmb2N1c2luJykucGlwZShcbiAgICAgICAgICAgIG1hcCh0dWlHZXRBY3R1YWxUYXJnZXQpLFxuICAgICAgICAgICAgZmlsdGVyKCh0YXJnZXQpID0+ICF0aGlzLmhvc3QuY29udGFpbnModGFyZ2V0KSB8fCAhdGhpcy5kaXJlY3RpdmUucmVmKCkpLFxuICAgICAgICApLFxuICAgIClcbiAgICAgICAgLnBpcGUodHVpV2F0Y2goKSwgdGFrZVVudGlsRGVzdHJveWVkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy50b2dnbGUoZmFsc2UpKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR1aURyb3Bkb3duRW5hYmxlZCA9IHRydWU7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0dWlEcm9wZG93bk9wZW46IGJvb2xlYW4gfCAnJyA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IHR1aURyb3Bkb3duT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgIC8vIFRPRE86IG1ha2UgaXQgcHJpdmF0ZSB3aGVuIGFsbCBsZWdhY3kgY29udHJvbHMgd2lsbCBiZSBkZWxldGVkIGZyb20gQHRhaWdhLXVpL2xlZ2FjeSAoNS4wKVxuICAgIHB1YmxpYyByZWFkb25seSBkcml2ZXIgPSBpbmplY3QoVHVpRHJvcGRvd25Ecml2ZXIpO1xuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZSghIXRoaXMudHVpRHJvcGRvd25PcGVuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiAhb3Blbikge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmZvY3VzKHtwcmV2ZW50U2Nyb2xsOiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZShvcGVuKTtcbiAgICB9XG5cbiAgICBAc2hvdWxkQ2FsbChzaG91bGRDbG9zZSlcbiAgICBwcm90ZWN0ZWQgb25Fc2MoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DbGljayh0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5lZGl0YWJsZSAmJiB0aGlzLmhvc3QuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoIXRoaXMudHVpRHJvcGRvd25PcGVuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkFycm93KGV2ZW50OiBLZXlib2FyZEV2ZW50LCB1cDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdHVpSXNFbGVtZW50KGV2ZW50LnRhcmdldCkgfHxcbiAgICAgICAgICAgICF0aGlzLmhvc3QuY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fFxuICAgICAgICAgICAgIXRoaXMudHVpRHJvcGRvd25FbmFibGVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c0Ryb3Bkb3duKHVwKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25LZXlkb3duKHtrZXksIHRhcmdldCwgZGVmYXVsdFByZXZlbnRlZH06IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWRlZmF1bHRQcmV2ZW50ZWQgJiZcbiAgICAgICAgICAgIHR1aUlzRWRpdGluZ0tleShrZXkpICYmXG4gICAgICAgICAgICB0aGlzLmVkaXRhYmxlICYmXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWQgJiZcbiAgICAgICAgICAgIHR1aUlzSFRNTEVsZW1lbnQodGFyZ2V0KSAmJlxuICAgICAgICAgICAgIXR1aUlzRWxlbWVudEVkaXRhYmxlKHRhcmdldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuZm9jdXMoe3ByZXZlbnRTY3JvbGw6IHRydWV9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGhvc3QoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBpbml0aWFsID0gdGhpcy5kcm9wZG93bkhvc3Q/Lm5hdGl2ZUVsZW1lbnQgfHwgdGhpcy5lbDtcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlID0gdHVpSXNOYXRpdmVLZXlib2FyZEZvY3VzYWJsZShpbml0aWFsKVxuICAgICAgICAgICAgPyBpbml0aWFsXG4gICAgICAgICAgICA6IHR1aUdldENsb3Nlc3RGb2N1c2FibGUoe2luaXRpYWwsIHJvb3Q6IHRoaXMuZWx9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93bkhvc3Q/Lm5hdGl2ZUVsZW1lbnQgfHwgZm9jdXNhYmxlIHx8IHRoaXMuZWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgZWRpdGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0dWlJc0VsZW1lbnRFZGl0YWJsZSh0aGlzLmhvc3QpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0dWlJc05hdGl2ZUZvY3VzZWRJbih0aGlzLmhvc3QpIHx8IHR1aUlzTmF0aXZlRm9jdXNlZEluKHRoaXMuZHJvcGRvd24oKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAob3BlbiAmJiAhdGhpcy50dWlEcm9wZG93bkVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyaXZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnR1aURyb3Bkb3duT3BlbiA9IG9wZW47XG4gICAgICAgIHRoaXMudHVpRHJvcGRvd25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XG4gICAgICAgIHRoaXMuZHJpdmUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyaXZlKG9wZW4gPSAhIXRoaXMudHVpRHJvcGRvd25PcGVuICYmIHRoaXMudHVpRHJvcGRvd25FbmFibGVkKTogdm9pZCB7XG4gICAgICAgIHRoaXMub2JzY3VyZWQudHVpT2JzY3VyZWRFbmFibGVkID0gb3BlbjtcbiAgICAgICAgdGhpcy5kcml2ZXIubmV4dChvcGVuKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzRHJvcGRvd24ocHJldmlvdXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuZHJvcGRvd24oKTtcblxuICAgICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRydWUpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gcm9vdC5hcHBlbmRDaGlsZChkb2MuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBjb25zdCBpbml0aWFsID0gcHJldmlvdXMgPyBjaGlsZCA6IHJvb3Q7XG4gICAgICAgIGNvbnN0IGZvY3VzYWJsZSA9IHR1aUdldENsb3Nlc3RGb2N1c2FibGUoe2luaXRpYWwsIHByZXZpb3VzLCByb290fSk7XG5cbiAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIGZvY3VzYWJsZT8uZm9jdXMoKTtcbiAgICB9XG59XG4iXX0=