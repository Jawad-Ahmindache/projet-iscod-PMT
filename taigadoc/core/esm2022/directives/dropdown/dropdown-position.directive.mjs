import { __decorate } from "tslib";
import { Directive, EventEmitter, inject, Output } from '@angular/core';
import { EMPTY_CLIENT_RECT } from '@taiga-ui/cdk/constants';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiFallbackAccessor, TuiPositionAccessor, TuiRectAccessor, } from '@taiga-ui/core/classes';
import { TUI_VIEWPORT } from '@taiga-ui/core/tokens';
import { TuiDropdownDirective } from './dropdown.directive';
import { TUI_DROPDOWN_OPTIONS } from './dropdown-options.directive';
import * as i0 from "@angular/core";
class TuiDropdownPosition extends TuiPositionAccessor {
    constructor() {
        super(...arguments);
        this.options = inject(TUI_DROPDOWN_OPTIONS);
        this.viewport = inject(TUI_VIEWPORT);
        this.directionChange = new EventEmitter();
        this.type = 'dropdown';
        this.accessor = tuiFallbackAccessor('dropdown')(inject(TuiRectAccessor), inject(TuiDropdownDirective, { optional: true }));
    }
    emitDirection(direction) {
        this.directionChange.emit(direction);
    }
    getPosition({ width, height }) {
        if (!width && !height) {
            this.previous = undefined;
        }
        const hostRect = this.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
        const viewportRect = this.viewport.getClientRect();
        const { minHeight, align, direction, offset, limitWidth } = this.options;
        const viewport = {
            top: viewportRect.top - offset,
            bottom: viewportRect.bottom + offset,
            right: viewportRect.right - offset,
            left: viewportRect.left + offset,
        };
        const previous = this.previous || direction || 'bottom';
        const available = {
            top: hostRect.top - 2 * offset - viewport.top,
            bottom: viewport.bottom - hostRect.bottom - 2 * offset,
        };
        const rectWidth = limitWidth === 'fixed' ? hostRect.width : width;
        const right = Math.max(hostRect.right - rectWidth, offset);
        const left = hostRect.left + width < viewport.right ? hostRect.left : right;
        const position = {
            top: hostRect.top - offset - height,
            bottom: hostRect.bottom + offset,
            right: Math.max(viewport.left, right),
            center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right
                ? hostRect.left + hostRect.width / 2 - width / 2
                : right,
            left: Math.max(viewport.left, left),
        };
        const better = available.top > available.bottom ? 'top' : 'bottom';
        if ((available[previous] > minHeight && direction) ||
            available[previous] > height) {
            this.emitDirection(previous);
            return [position[previous], position[align]];
        }
        this.previous = better;
        this.emitDirection(better);
        return [position[better], position[align]];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPosition, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownPosition, isStandalone: true, outputs: { directionChange: "tuiDropdownDirectionChange" }, usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiDropdownPosition.prototype, "emitDirection", null);
export { TuiDropdownPosition };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownPosition, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], propDecorators: { directionChange: [{
                type: Output,
                args: ['tuiDropdownDirectionChange']
            }], emitDirection: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tcG9zaXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9kaXJlY3RpdmVzL2Ryb3Bkb3duL2Ryb3Bkb3duLXBvc2l0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUNILG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsZUFBZSxHQUNsQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUduRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7QUFFbEUsTUFHYSxtQkFBb0IsU0FBUSxtQkFBbUI7SUFINUQ7O1FBSXFCLFlBQU8sR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBS2pDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFFM0QsU0FBSSxHQUFHLFVBQVUsQ0FBQztRQUNsQixhQUFRLEdBQ3BCLG1CQUFtQixDQUFrQixVQUFVLENBQUMsQ0FDNUMsTUFBTSxDQUFNLGVBQWUsQ0FBQyxFQUM1QixNQUFNLENBQUMsb0JBQW9CLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUUsQ0FDbEQsQ0FBQztLQXdEVDtJQXJEVSxhQUFhLENBQUMsU0FBK0I7UUFD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QWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUU3QixPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQixPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7K0dBckVRLG1CQUFtQjttR0FBbkIsbUJBQW1COztBQWlCckI7SUFETixPQUFPO3dEQUdQO1NBbkJRLG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUgvQixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO2lCQUNuQjs4QkFRbUIsZUFBZTtzQkFEOUIsTUFBTTt1QkFBQyw0QkFBNEI7Z0JBVzdCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBpbmplY3QsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VNUFRZX0NMSUVOVF9SRUNUfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge3R1aVB1cmV9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQge1xuICAgIHR1aUZhbGxiYWNrQWNjZXNzb3IsXG4gICAgVHVpUG9zaXRpb25BY2Nlc3NvcixcbiAgICBUdWlSZWN0QWNjZXNzb3IsXG59IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHtUVUlfVklFV1BPUlR9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5pbXBvcnQgdHlwZSB7VHVpUG9pbnQsIFR1aVZlcnRpY2FsRGlyZWN0aW9ufSBmcm9tICdAdGFpZ2EtdWkvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7VHVpRHJvcGRvd25EaXJlY3RpdmV9IGZyb20gJy4vZHJvcGRvd24uZGlyZWN0aXZlJztcbmltcG9ydCB7VFVJX0RST1BET1dOX09QVElPTlN9IGZyb20gJy4vZHJvcGRvd24tb3B0aW9ucy5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlEcm9wZG93blBvc2l0aW9uIGV4dGVuZHMgVHVpUG9zaXRpb25BY2Nlc3NvciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zID0gaW5qZWN0KFRVSV9EUk9QRE9XTl9PUFRJT05TKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXdwb3J0ID0gaW5qZWN0KFRVSV9WSUVXUE9SVCk7XG5cbiAgICBwcml2YXRlIHByZXZpb3VzPzogVHVpVmVydGljYWxEaXJlY3Rpb247XG5cbiAgICBAT3V0cHV0KCd0dWlEcm9wZG93bkRpcmVjdGlvbkNoYW5nZScpXG4gICAgcHVibGljIHJlYWRvbmx5IGRpcmVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHVpVmVydGljYWxEaXJlY3Rpb24+KCk7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZSA9ICdkcm9wZG93bic7XG4gICAgcHVibGljIHJlYWRvbmx5IGFjY2Vzc29yOiBUdWlSZWN0QWNjZXNzb3IgfCBudWxsID1cbiAgICAgICAgdHVpRmFsbGJhY2tBY2Nlc3NvcjxUdWlSZWN0QWNjZXNzb3I+KCdkcm9wZG93bicpKFxuICAgICAgICAgICAgaW5qZWN0PGFueT4oVHVpUmVjdEFjY2Vzc29yKSxcbiAgICAgICAgICAgIGluamVjdChUdWlEcm9wZG93bkRpcmVjdGl2ZSwge29wdGlvbmFsOiB0cnVlfSkhLFxuICAgICAgICApO1xuXG4gICAgQHR1aVB1cmVcbiAgICBwdWJsaWMgZW1pdERpcmVjdGlvbihkaXJlY3Rpb246IFR1aVZlcnRpY2FsRGlyZWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uQ2hhbmdlLmVtaXQoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oe3dpZHRoLCBoZWlnaHR9OiBET01SZWN0KTogVHVpUG9pbnQge1xuICAgICAgICBpZiAoIXdpZHRoICYmICFoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuYWNjZXNzb3I/LmdldENsaWVudFJlY3QoKSA/PyBFTVBUWV9DTElFTlRfUkVDVDtcbiAgICAgICAgY29uc3Qgdmlld3BvcnRSZWN0ID0gdGhpcy52aWV3cG9ydC5nZXRDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHttaW5IZWlnaHQsIGFsaWduLCBkaXJlY3Rpb24sIG9mZnNldCwgbGltaXRXaWR0aH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0ge1xuICAgICAgICAgICAgdG9wOiB2aWV3cG9ydFJlY3QudG9wIC0gb2Zmc2V0LFxuICAgICAgICAgICAgYm90dG9tOiB2aWV3cG9ydFJlY3QuYm90dG9tICsgb2Zmc2V0LFxuICAgICAgICAgICAgcmlnaHQ6IHZpZXdwb3J0UmVjdC5yaWdodCAtIG9mZnNldCxcbiAgICAgICAgICAgIGxlZnQ6IHZpZXdwb3J0UmVjdC5sZWZ0ICsgb2Zmc2V0LFxuICAgICAgICB9IGFzIGNvbnN0O1xuICAgICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMucHJldmlvdXMgfHwgZGlyZWN0aW9uIHx8ICdib3R0b20nO1xuICAgICAgICBjb25zdCBhdmFpbGFibGUgPSB7XG4gICAgICAgICAgICB0b3A6IGhvc3RSZWN0LnRvcCAtIDIgKiBvZmZzZXQgLSB2aWV3cG9ydC50b3AsXG4gICAgICAgICAgICBib3R0b206IHZpZXdwb3J0LmJvdHRvbSAtIGhvc3RSZWN0LmJvdHRvbSAtIDIgKiBvZmZzZXQsXG4gICAgICAgIH0gYXMgY29uc3Q7XG4gICAgICAgIGNvbnN0IHJlY3RXaWR0aCA9IGxpbWl0V2lkdGggPT09ICdmaXhlZCcgPyBob3N0UmVjdC53aWR0aCA6IHdpZHRoO1xuICAgICAgICBjb25zdCByaWdodCA9IE1hdGgubWF4KGhvc3RSZWN0LnJpZ2h0IC0gcmVjdFdpZHRoLCBvZmZzZXQpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gaG9zdFJlY3QubGVmdCArIHdpZHRoIDwgdmlld3BvcnQucmlnaHQgPyBob3N0UmVjdC5sZWZ0IDogcmlnaHQ7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBob3N0UmVjdC50b3AgLSBvZmZzZXQgLSBoZWlnaHQsXG4gICAgICAgICAgICBib3R0b206IGhvc3RSZWN0LmJvdHRvbSArIG9mZnNldCxcbiAgICAgICAgICAgIHJpZ2h0OiBNYXRoLm1heCh2aWV3cG9ydC5sZWZ0LCByaWdodCksXG4gICAgICAgICAgICBjZW50ZXI6XG4gICAgICAgICAgICAgICAgaG9zdFJlY3QubGVmdCArIGhvc3RSZWN0LndpZHRoIC8gMiArIHdpZHRoIC8gMiA8IHZpZXdwb3J0LnJpZ2h0XG4gICAgICAgICAgICAgICAgICAgID8gaG9zdFJlY3QubGVmdCArIGhvc3RSZWN0LndpZHRoIC8gMiAtIHdpZHRoIC8gMlxuICAgICAgICAgICAgICAgICAgICA6IHJpZ2h0LFxuICAgICAgICAgICAgbGVmdDogTWF0aC5tYXgodmlld3BvcnQubGVmdCwgbGVmdCksXG4gICAgICAgIH0gYXMgY29uc3Q7XG4gICAgICAgIGNvbnN0IGJldHRlcjogVHVpVmVydGljYWxEaXJlY3Rpb24gPVxuICAgICAgICAgICAgYXZhaWxhYmxlLnRvcCA+IGF2YWlsYWJsZS5ib3R0b20gPyAndG9wJyA6ICdib3R0b20nO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChhdmFpbGFibGVbcHJldmlvdXNdID4gbWluSGVpZ2h0ICYmIGRpcmVjdGlvbikgfHxcbiAgICAgICAgICAgIGF2YWlsYWJsZVtwcmV2aW91c10gPiBoZWlnaHRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXREaXJlY3Rpb24ocHJldmlvdXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gW3Bvc2l0aW9uW3ByZXZpb3VzXSwgcG9zaXRpb25bYWxpZ25dXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldmlvdXMgPSBiZXR0ZXI7XG4gICAgICAgIHRoaXMuZW1pdERpcmVjdGlvbihiZXR0ZXIpO1xuXG4gICAgICAgIHJldHVybiBbcG9zaXRpb25bYmV0dGVyXSwgcG9zaXRpb25bYWxpZ25dXTtcbiAgICB9XG59XG4iXX0=