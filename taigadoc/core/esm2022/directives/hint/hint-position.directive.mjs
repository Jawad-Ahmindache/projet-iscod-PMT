import { __decorate } from "tslib";
import { Directive, EventEmitter, inject, Input, Output } from '@angular/core';
import { EMPTY_CLIENT_RECT } from '@taiga-ui/cdk/constants';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk/tokens';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiFallbackAccessor, TuiPositionAccessor, TuiRectAccessor, } from '@taiga-ui/core/classes';
import { TUI_VIEWPORT } from '@taiga-ui/core/tokens';
import { TuiHintDirective } from './hint.directive';
import { TUI_HINT_DIRECTIONS, TUI_HINT_OPTIONS } from './hint-options.directive';
import * as i0 from "@angular/core";
const GAP = 8;
const ARROW_OFFSET = 24;
const TOP = 0;
const LEFT = 1;
class TuiHintPosition extends TuiPositionAccessor {
    constructor() {
        super(...arguments);
        this.offset = inject(TUI_IS_MOBILE) ? 16 : 8;
        this.viewport = inject(TUI_VIEWPORT);
        this.accessor = tuiFallbackAccessor('hint')(inject(TuiRectAccessor), inject(TuiHintDirective));
        this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => ({ ...acc, [direction]: [0, 0] }), {});
        this.direction = inject(TUI_HINT_OPTIONS).direction;
        this.directionChange = new EventEmitter();
        this.type = 'hint';
    }
    emitDirection(direction) {
        this.directionChange.emit(direction);
    }
    getPosition(rect, el) {
        const width = el?.clientWidth ?? rect.width;
        const height = el?.clientHeight ?? rect.height;
        const hostRect = this.accessor.getClientRect() ?? EMPTY_CLIENT_RECT;
        const leftCenter = hostRect.left + hostRect.width / 2;
        const topCenter = hostRect.top + hostRect.height / 2;
        this.points['top-left'][TOP] = hostRect.top - height - this.offset;
        this.points['top-left'][LEFT] = leftCenter - width + ARROW_OFFSET;
        this.points.top[TOP] = this.points['top-left'][TOP];
        this.points.top[LEFT] = leftCenter - width / 2;
        this.points['top-right'][TOP] = this.points['top-left'][TOP];
        this.points['top-right'][LEFT] = leftCenter - ARROW_OFFSET;
        this.points['bottom-left'][TOP] = hostRect.bottom + this.offset;
        this.points['bottom-left'][LEFT] = this.points['top-left'][LEFT];
        this.points.bottom[TOP] = this.points['bottom-left'][TOP];
        this.points.bottom[LEFT] = this.points.top[LEFT];
        this.points['bottom-right'][TOP] = this.points['bottom-left'][TOP];
        this.points['bottom-right'][LEFT] = this.points['top-right'][LEFT];
        this.points['left-top'][TOP] = topCenter - height + ARROW_OFFSET;
        this.points['left-top'][LEFT] = hostRect.left - width - this.offset;
        this.points.left[TOP] = topCenter - height / 2;
        this.points.left[LEFT] = this.points['left-top'][LEFT];
        this.points['left-bottom'][TOP] = topCenter - ARROW_OFFSET;
        this.points['left-bottom'][LEFT] = this.points['left-top'][LEFT];
        this.points['right-top'][TOP] = this.points['left-top'][TOP];
        this.points['right-top'][LEFT] = hostRect.right + this.offset;
        this.points.right[TOP] = this.points.left[TOP];
        this.points.right[LEFT] = this.points['right-top'][LEFT];
        this.points['right-bottom'][TOP] = this.points['left-bottom'][TOP];
        this.points['right-bottom'][LEFT] = this.points['right-top'][LEFT];
        const priorityDirections = Array.isArray(this.direction)
            ? this.direction
            : [this.direction];
        const sortedDirections = priorityDirections.concat(TUI_HINT_DIRECTIONS);
        const direction = sortedDirections.find((direction) => this.checkPosition(this.points[direction], width, height));
        this.emitDirection(direction || this.fallback);
        return this.points[direction || this.fallback];
    }
    get fallback() {
        return this.points.top[TOP] >
            this.viewport.getClientRect().bottom - this.points.bottom[TOP]
            ? 'top'
            : 'bottom';
    }
    checkPosition([top, left], width, height) {
        const viewport = this.viewport.getClientRect();
        return (top > GAP &&
            left > GAP &&
            top + height < viewport.bottom - GAP &&
            left + width < viewport.right - GAP);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintPosition, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHintPosition, isStandalone: true, inputs: { direction: ["tuiHintDirection", "direction"] }, outputs: { directionChange: "tuiHintDirectionChange" }, usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiHintPosition.prototype, "emitDirection", null);
export { TuiHintPosition };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHintPosition, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }], propDecorators: { direction: [{
                type: Input,
                args: ['tuiHintDirection']
            }], directionChange: [{
                type: Output,
                args: ['tuiHintDirectionChange']
            }], emitDirection: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC1wb3NpdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL2RpcmVjdGl2ZXMvaGludC9oaW50LXBvc2l0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRCxPQUFPLEVBQ0gsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixlQUFlLEdBQ2xCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR25ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDOztBQUUvRSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDZCxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDeEIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBRWYsTUFHYSxlQUFnQixTQUFRLG1CQUFtQjtJQUh4RDs7UUFJcUIsV0FBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoQyxhQUFRLEdBQUcsbUJBQW1CLENBQWtCLE1BQU0sQ0FBQyxDQUNwRSxNQUFNLENBQU0sZUFBZSxDQUFDLEVBQzVCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUMzQixDQUFDO1FBRWUsV0FBTSxHQUNuQixtQkFBbUIsQ0FBQyxNQUFNLENBQ3RCLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUNuRCxFQUFnRCxDQUNuRCxDQUFDO1FBR0MsY0FBUyxHQUFnQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFHbkUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUV2RCxTQUFJLEdBQUcsTUFBTSxDQUFDO0tBeUVqQztJQXRFVSxhQUFhLENBQUMsU0FBMkI7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLFdBQVcsQ0FBQyxJQUFhLEVBQUUsRUFBZ0I7UUFDOUMsTUFBTSxLQUFLLEdBQUcsRUFBRSxFQUFFLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVDLE1BQU0sTUFBTSxHQUFHLEVBQUUsRUFBRSxZQUFZLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLGlCQUFpQixDQUFDO1FBQ3BFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDdEQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLEdBQUcsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFFM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxD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Q0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsSUFBWSxRQUFRO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUM5RCxDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDbkIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQVcsRUFBRSxLQUFhLEVBQUUsTUFBYztRQUN0RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRS9DLE9BQU8sQ0FDSCxHQUFHLEdBQUcsR0FBRztZQUNULElBQUksR0FBRyxHQUFHO1lBQ1YsR0FBRyxHQUFHLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUc7WUFDcEMsSUFBSSxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FDdEMsQ0FBQztJQUNOLENBQUM7K0dBNUZRLGVBQWU7bUdBQWYsZUFBZTs7QUF1QmpCO0lBRE4sT0FBTztvREFHUDtTQXpCUSxlQUFlOzRGQUFmLGVBQWU7a0JBSDNCLFNBQVM7bUJBQUM7b0JBQ1AsVUFBVSxFQUFFLElBQUk7aUJBQ25COzhCQWdCVSxTQUFTO3NCQURmLEtBQUs7dUJBQUMsa0JBQWtCO2dCQUlULGVBQWU7c0JBRDlCLE1BQU07dUJBQUMsd0JBQXdCO2dCQU16QixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgaW5qZWN0LCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RU1QVFlfQ0xJRU5UX1JFQ1R9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB7VFVJX0lTX01PQklMRX0gZnJvbSAnQHRhaWdhLXVpL2Nkay90b2tlbnMnO1xuaW1wb3J0IHt0dWlQdXJlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHtcbiAgICB0dWlGYWxsYmFja0FjY2Vzc29yLFxuICAgIFR1aVBvc2l0aW9uQWNjZXNzb3IsXG4gICAgVHVpUmVjdEFjY2Vzc29yLFxufSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jbGFzc2VzJztcbmltcG9ydCB7VFVJX1ZJRVdQT1JUfSBmcm9tICdAdGFpZ2EtdWkvY29yZS90b2tlbnMnO1xuaW1wb3J0IHR5cGUge1R1aVBvaW50fSBmcm9tICdAdGFpZ2EtdWkvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7VHVpSGludERpcmVjdGl2ZX0gZnJvbSAnLi9oaW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgdHlwZSB7VHVpSGludERpcmVjdGlvbiwgVHVpSGludE9wdGlvbnN9IGZyb20gJy4vaGludC1vcHRpb25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1RVSV9ISU5UX0RJUkVDVElPTlMsIFRVSV9ISU5UX09QVElPTlN9IGZyb20gJy4vaGludC1vcHRpb25zLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IEdBUCA9IDg7XG5jb25zdCBBUlJPV19PRkZTRVQgPSAyNDtcbmNvbnN0IFRPUCA9IDA7XG5jb25zdCBMRUZUID0gMTtcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSGludFBvc2l0aW9uIGV4dGVuZHMgVHVpUG9zaXRpb25BY2Nlc3NvciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvZmZzZXQgPSBpbmplY3QoVFVJX0lTX01PQklMRSkgPyAxNiA6IDg7XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3cG9ydCA9IGluamVjdChUVUlfVklFV1BPUlQpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYWNjZXNzb3IgPSB0dWlGYWxsYmFja0FjY2Vzc29yPFR1aVJlY3RBY2Nlc3Nvcj4oJ2hpbnQnKShcbiAgICAgICAgaW5qZWN0PGFueT4oVHVpUmVjdEFjY2Vzc29yKSxcbiAgICAgICAgaW5qZWN0KFR1aUhpbnREaXJlY3RpdmUpLFxuICAgICk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvaW50czogUmVjb3JkPFR1aUhpbnREaXJlY3Rpb24sIFtudW1iZXIsIG51bWJlcl0+ID1cbiAgICAgICAgVFVJX0hJTlRfRElSRUNUSU9OUy5yZWR1Y2UoXG4gICAgICAgICAgICAoYWNjLCBkaXJlY3Rpb24pID0+ICh7Li4uYWNjLCBbZGlyZWN0aW9uXTogWzAsIDBdfSksXG4gICAgICAgICAgICB7fSBhcyBSZWNvcmQ8VHVpSGludERpcmVjdGlvbiwgW251bWJlciwgbnVtYmVyXT4sXG4gICAgICAgICk7XG5cbiAgICBASW5wdXQoJ3R1aUhpbnREaXJlY3Rpb24nKVxuICAgIHB1YmxpYyBkaXJlY3Rpb246IFR1aUhpbnRPcHRpb25zWydkaXJlY3Rpb24nXSA9IGluamVjdChUVUlfSElOVF9PUFRJT05TKS5kaXJlY3Rpb247XG5cbiAgICBAT3V0cHV0KCd0dWlIaW50RGlyZWN0aW9uQ2hhbmdlJylcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGlyZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUdWlIaW50RGlyZWN0aW9uPigpO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSAnaGludCc7XG5cbiAgICBAdHVpUHVyZVxuICAgIHB1YmxpYyBlbWl0RGlyZWN0aW9uKGRpcmVjdGlvbjogVHVpSGludERpcmVjdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkNoYW5nZS5lbWl0KGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uKHJlY3Q6IERPTVJlY3QsIGVsPzogSFRNTEVsZW1lbnQpOiBUdWlQb2ludCB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gZWw/LmNsaWVudFdpZHRoID8/IHJlY3Qud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGVsPy5jbGllbnRIZWlnaHQgPz8gcmVjdC5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5hY2Nlc3Nvci5nZXRDbGllbnRSZWN0KCkgPz8gRU1QVFlfQ0xJRU5UX1JFQ1Q7XG4gICAgICAgIGNvbnN0IGxlZnRDZW50ZXIgPSBob3N0UmVjdC5sZWZ0ICsgaG9zdFJlY3Qud2lkdGggLyAyO1xuICAgICAgICBjb25zdCB0b3BDZW50ZXIgPSBob3N0UmVjdC50b3AgKyBob3N0UmVjdC5oZWlnaHQgLyAyO1xuXG4gICAgICAgIHRoaXMucG9pbnRzWyd0b3AtbGVmdCddW1RPUF0gPSBob3N0UmVjdC50b3AgLSBoZWlnaHQgLSB0aGlzLm9mZnNldDtcbiAgICAgICAgdGhpcy5wb2ludHNbJ3RvcC1sZWZ0J11bTEVGVF0gPSBsZWZ0Q2VudGVyIC0gd2lkdGggKyBBUlJPV19PRkZTRVQ7XG4gICAgICAgIHRoaXMucG9pbnRzLnRvcFtUT1BdID0gdGhpcy5wb2ludHNbJ3RvcC1sZWZ0J11bVE9QXTtcbiAgICAgICAgdGhpcy5wb2ludHMudG9wW0xFRlRdID0gbGVmdENlbnRlciAtIHdpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5wb2ludHNbJ3RvcC1yaWdodCddW1RPUF0gPSB0aGlzLnBvaW50c1sndG9wLWxlZnQnXVtUT1BdO1xuICAgICAgICB0aGlzLnBvaW50c1sndG9wLXJpZ2h0J11bTEVGVF0gPSBsZWZ0Q2VudGVyIC0gQVJST1dfT0ZGU0VUO1xuXG4gICAgICAgIHRoaXMucG9pbnRzWydib3R0b20tbGVmdCddW1RPUF0gPSBob3N0UmVjdC5ib3R0b20gKyB0aGlzLm9mZnNldDtcbiAgICAgICAgdGhpcy5wb2ludHNbJ2JvdHRvbS1sZWZ0J11bTEVGVF0gPSB0aGlzLnBvaW50c1sndG9wLWxlZnQnXVtMRUZUXTtcbiAgICAgICAgdGhpcy5wb2ludHMuYm90dG9tW1RPUF0gPSB0aGlzLnBvaW50c1snYm90dG9tLWxlZnQnXVtUT1BdO1xuICAgICAgICB0aGlzLnBvaW50cy5ib3R0b21bTEVGVF0gPSB0aGlzLnBvaW50cy50b3BbTEVGVF07XG4gICAgICAgIHRoaXMucG9pbnRzWydib3R0b20tcmlnaHQnXVtUT1BdID0gdGhpcy5wb2ludHNbJ2JvdHRvbS1sZWZ0J11bVE9QXTtcbiAgICAgICAgdGhpcy5wb2ludHNbJ2JvdHRvbS1yaWdodCddW0xFRlRdID0gdGhpcy5wb2ludHNbJ3RvcC1yaWdodCddW0xFRlRdO1xuXG4gICAgICAgIHRoaXMucG9pbnRzWydsZWZ0LXRvcCddW1RPUF0gPSB0b3BDZW50ZXIgLSBoZWlnaHQgKyBBUlJPV19PRkZTRVQ7XG4gICAgICAgIHRoaXMucG9pbnRzWydsZWZ0LXRvcCddW0xFRlRdID0gaG9zdFJlY3QubGVmdCAtIHdpZHRoIC0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIHRoaXMucG9pbnRzLmxlZnRbVE9QXSA9IHRvcENlbnRlciAtIGhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMucG9pbnRzLmxlZnRbTEVGVF0gPSB0aGlzLnBvaW50c1snbGVmdC10b3AnXVtMRUZUXTtcbiAgICAgICAgdGhpcy5wb2ludHNbJ2xlZnQtYm90dG9tJ11bVE9QXSA9IHRvcENlbnRlciAtIEFSUk9XX09GRlNFVDtcbiAgICAgICAgdGhpcy5wb2ludHNbJ2xlZnQtYm90dG9tJ11bTEVGVF0gPSB0aGlzLnBvaW50c1snbGVmdC10b3AnXVtMRUZUXTtcblxuICAgICAgICB0aGlzLnBvaW50c1sncmlnaHQtdG9wJ11bVE9QXSA9IHRoaXMucG9pbnRzWydsZWZ0LXRvcCddW1RPUF07XG4gICAgICAgIHRoaXMucG9pbnRzWydyaWdodC10b3AnXVtMRUZUXSA9IGhvc3RSZWN0LnJpZ2h0ICsgdGhpcy5vZmZzZXQ7XG4gICAgICAgIHRoaXMucG9pbnRzLnJpZ2h0W1RPUF0gPSB0aGlzLnBvaW50cy5sZWZ0W1RPUF07XG4gICAgICAgIHRoaXMucG9pbnRzLnJpZ2h0W0xFRlRdID0gdGhpcy5wb2ludHNbJ3JpZ2h0LXRvcCddW0xFRlRdO1xuICAgICAgICB0aGlzLnBvaW50c1sncmlnaHQtYm90dG9tJ11bVE9QXSA9IHRoaXMucG9pbnRzWydsZWZ0LWJvdHRvbSddW1RPUF07XG4gICAgICAgIHRoaXMucG9pbnRzWydyaWdodC1ib3R0b20nXVtMRUZUXSA9IHRoaXMucG9pbnRzWydyaWdodC10b3AnXVtMRUZUXTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eURpcmVjdGlvbnMgPSBBcnJheS5pc0FycmF5KHRoaXMuZGlyZWN0aW9uKVxuICAgICAgICAgICAgPyB0aGlzLmRpcmVjdGlvblxuICAgICAgICAgICAgOiBbdGhpcy5kaXJlY3Rpb25dO1xuICAgICAgICBjb25zdCBzb3J0ZWREaXJlY3Rpb25zID0gcHJpb3JpdHlEaXJlY3Rpb25zLmNvbmNhdChUVUlfSElOVF9ESVJFQ1RJT05TKTtcblxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBzb3J0ZWREaXJlY3Rpb25zLmZpbmQoKGRpcmVjdGlvbikgPT5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tQb3NpdGlvbih0aGlzLnBvaW50c1tkaXJlY3Rpb25dLCB3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmVtaXREaXJlY3Rpb24oZGlyZWN0aW9uIHx8IHRoaXMuZmFsbGJhY2spO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50c1tkaXJlY3Rpb24gfHwgdGhpcy5mYWxsYmFja107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgZmFsbGJhY2soKTogVHVpSGludERpcmVjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50cy50b3BbVE9QXSA+XG4gICAgICAgICAgICB0aGlzLnZpZXdwb3J0LmdldENsaWVudFJlY3QoKS5ib3R0b20gLSB0aGlzLnBvaW50cy5ib3R0b21bVE9QXVxuICAgICAgICAgICAgPyAndG9wJ1xuICAgICAgICAgICAgOiAnYm90dG9tJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrUG9zaXRpb24oW3RvcCwgbGVmdF06IFR1aVBvaW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMudmlld3BvcnQuZ2V0Q2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0b3AgPiBHQVAgJiZcbiAgICAgICAgICAgIGxlZnQgPiBHQVAgJiZcbiAgICAgICAgICAgIHRvcCArIGhlaWdodCA8IHZpZXdwb3J0LmJvdHRvbSAtIEdBUCAmJlxuICAgICAgICAgICAgbGVmdCArIHdpZHRoIDwgdmlld3BvcnQucmlnaHQgLSBHQVBcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=