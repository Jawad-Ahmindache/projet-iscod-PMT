import { ChangeDetectionStrategy, Component, Input, Output, signal, ViewEncapsulation, } from '@angular/core';
import { MutationObserverService, WA_MUTATION_OBSERVER_INIT, } from '@ng-web-apis/mutation-observer';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { BehaviorSubject, debounce, filter, map, Subject, timer } from 'rxjs';
import * as i0 from "@angular/core";
class TuiTilesComponent {
    constructor() {
        this.el = tuiInjectElement();
        this.el$ = new Subject();
        this.debounce = 0;
        this.orderChange = this.el$.pipe(debounce(() => timer(this.debounce)), filter(this.filter.bind(this)), map((element) => this.reorder(element)));
        this.element = signal(null);
        this.order$ = new BehaviorSubject(new Map());
    }
    set order(map) {
        this.order$.next(map);
    }
    get order() {
        return this.order$.value;
    }
    rearrange(element) {
        this.el$.next(element);
    }
    filter(element) {
        return !!this.element() && !!element && this.element() !== element;
    }
    reorder(element) {
        const elements = Array.from(this.el.children);
        const currentIndex = elements.indexOf(this.element() || element);
        const newIndex = elements.indexOf(element);
        const order = this.order.size
            ? new Map(this.order)
            : new Map(elements.map((_, index) => [index, index]));
        const dragged = order.get(currentIndex) ?? currentIndex;
        const placement = order.get(newIndex) ?? newIndex;
        order.set(currentIndex, placement);
        order.set(newIndex, dragged);
        this.order$.next(order);
        return order;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTilesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTilesComponent, isStandalone: true, selector: "tui-tiles", inputs: { debounce: "debounce", order: "order" }, outputs: { orderChange: "orderChange" }, host: { listeners: { "pointerleave.silent": "rearrange()" }, properties: { "class._dragged": "element()" } }, providers: [
            ResizeObserverService,
            MutationObserverService,
            {
                provide: WA_MUTATION_OBSERVER_INIT,
                useValue: { childList: true },
            },
        ], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper{z-index:1;transition:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { TuiTilesComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTilesComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-tiles', template: '<ng-content></ng-content>', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ResizeObserverService,
                        MutationObserverService,
                        {
                            provide: WA_MUTATION_OBSERVER_INIT,
                            useValue: { childList: true },
                        },
                    ], host: {
                        '[class._dragged]': 'element()',
                        '(pointerleave.silent)': 'rearrange()',
                    }, styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper{z-index:1;transition:none}\n"] }]
        }], propDecorators: { debounce: [{
                type: Input
            }], orderChange: [{
                type: Output
            }], order: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvdGlsZXMvdGlsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLGlCQUFpQixHQUNwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLHlCQUF5QixHQUM1QixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFFNUUsTUFvQmEsaUJBQWlCO0lBcEI5QjtRQXFCcUIsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsUUFBRyxHQUFHLElBQUksT0FBTyxFQUF1QixDQUFDO1FBR25ELGFBQVEsR0FBRyxDQUFDLENBQUM7UUFHSixnQkFBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUN2QyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDOUIsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQzFDLENBQUM7UUFFSyxZQUFPLEdBQUcsTUFBTSxDQUFpQixJ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eSxcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIHNpZ25hbCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIE11dGF0aW9uT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgIFdBX01VVEFUSU9OX09CU0VSVkVSX0lOSVQsXG59IGZyb20gJ0BuZy13ZWItYXBpcy9tdXRhdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQge1Jlc2l6ZU9ic2VydmVyU2VydmljZX0gZnJvbSAnQG5nLXdlYi1hcGlzL3Jlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBkZWJvdW5jZSwgZmlsdGVyLCBtYXAsIFN1YmplY3QsIHRpbWVyfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ3R1aS10aWxlcycsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICBzdHlsZVVybHM6IFsnLi90aWxlcy5zdHlsZS5sZXNzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBNdXRhdGlvbk9ic2VydmVyU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogV0FfTVVUQVRJT05fT0JTRVJWRVJfSU5JVCxcbiAgICAgICAgICAgIHVzZVZhbHVlOiB7Y2hpbGRMaXN0OiB0cnVlfSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5fZHJhZ2dlZF0nOiAnZWxlbWVudCgpJyxcbiAgICAgICAgJyhwb2ludGVybGVhdmUuc2lsZW50KSc6ICdyZWFycmFuZ2UoKScsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpVGlsZXNDb21wb25lbnQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbCQgPSBuZXcgU3ViamVjdDxFbGVtZW50IHwgdW5kZWZpbmVkPigpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZGVib3VuY2UgPSAwO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IG9yZGVyQ2hhbmdlID0gdGhpcy5lbCQucGlwZShcbiAgICAgICAgZGVib3VuY2UoKCkgPT4gdGltZXIodGhpcy5kZWJvdW5jZSkpLFxuICAgICAgICBmaWx0ZXIodGhpcy5maWx0ZXIuYmluZCh0aGlzKSksXG4gICAgICAgIG1hcCgoZWxlbWVudCkgPT4gdGhpcy5yZW9yZGVyKGVsZW1lbnQpKSxcbiAgICApO1xuXG4gICAgcHVibGljIGVsZW1lbnQgPSBzaWduYWw8RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG9yZGVyJCA9IG5ldyBCZWhhdmlvclN1YmplY3QobmV3IE1hcDxudW1iZXIsIG51bWJlcj4oKSk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3JkZXIobWFwOiBNYXA8bnVtYmVyLCBudW1iZXI+KSB7XG4gICAgICAgIHRoaXMub3JkZXIkLm5leHQobWFwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG9yZGVyKCk6IE1hcDxudW1iZXIsIG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmRlciQudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHJlYXJyYW5nZShlbGVtZW50PzogRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsJC5uZXh0KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyKGVsZW1lbnQ/OiBFbGVtZW50KTogZWxlbWVudCBpcyBFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5lbGVtZW50KCkgJiYgISFlbGVtZW50ICYmIHRoaXMuZWxlbWVudCgpICE9PSBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVvcmRlcihlbGVtZW50OiBFbGVtZW50KTogTWFwPG51bWJlciwgbnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbSh0aGlzLmVsLmNoaWxkcmVuKTtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gZWxlbWVudHMuaW5kZXhPZih0aGlzLmVsZW1lbnQoKSB8fCBlbGVtZW50KTtcbiAgICAgICAgY29uc3QgbmV3SW5kZXggPSBlbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBvcmRlciA9IHRoaXMub3JkZXIuc2l6ZVxuICAgICAgICAgICAgPyBuZXcgTWFwKHRoaXMub3JkZXIpXG4gICAgICAgICAgICA6IG5ldyBNYXAoZWxlbWVudHMubWFwKChfLCBpbmRleCkgPT4gW2luZGV4LCBpbmRleF0pKTtcbiAgICAgICAgY29uc3QgZHJhZ2dlZCA9IG9yZGVyLmdldChjdXJyZW50SW5kZXgpID8/IGN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gb3JkZXIuZ2V0KG5ld0luZGV4KSA/PyBuZXdJbmRleDtcblxuICAgICAgICBvcmRlci5zZXQoY3VycmVudEluZGV4LCBwbGFjZW1lbnQpO1xuICAgICAgICBvcmRlci5zZXQobmV3SW5kZXgsIGRyYWdnZWQpO1xuXG4gICAgICAgIHRoaXMub3JkZXIkLm5leHQob3JkZXIpO1xuXG4gICAgICAgIHJldHVybiBvcmRlcjtcbiAgICB9XG59XG4iXX0=