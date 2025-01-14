import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, DestroyRef, inject, Input, TemplateRef, ViewChild, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tuiParentAnimation } from '@taiga-ui/core/animations';
import { TuiLoader } from '@taiga-ui/core/components/loader';
import { timer } from 'rxjs';
import { TuiExpandContent } from './expand-content.directive';
import * as i0 from "@angular/core";
const State = {
    Idle: 0,
    Loading: 1,
    Prepared: 2,
    Animated: 3,
};
const LOADER_HEIGHT = 48;
/**
 * An event indicating that async data for expand has finished loading.
 * Dispatch to finish loading states for {@link TuiExpandComponent}.
 */
export const TUI_EXPAND_LOADED = 'tui-expand-loaded';
class TuiExpandComponent {
    constructor() {
        this.cdr = inject(ChangeDetectorRef);
        this.destroyRef = inject(DestroyRef);
        this.state = State.Idle;
        this.content = null;
        this.expanded = null;
        this.async = false;
    }
    set expandedSetter(expanded) {
        if (this.expanded === null) {
            this.expanded = expanded;
            return;
        }
        if (this.state !== State.Idle) {
            this.expanded = expanded;
            this.state = State.Animated;
            return;
        }
        this.expanded = expanded;
        this.retrigger(this.async && expanded ? State.Loading : State.Animated);
    }
    get contentVisible() {
        return this.expanded || this.state !== State.Idle;
    }
    get overflow() {
        return this.state !== State.Idle;
    }
    get loading() {
        return !!this.expanded && this.async && this.state === State.Loading;
    }
    get height() {
        const { expanded, state, contentWrapper } = this;
        if ((expanded && state === State.Prepared) ||
            (!expanded && state === State.Animated)) {
            return 0;
        }
        if (contentWrapper &&
            ((!expanded && state === State.Prepared) ||
                (expanded && state === State.Animated))) {
            return contentWrapper.nativeElement.offsetHeight;
        }
        if (contentWrapper && expanded && state === State.Loading) {
            return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
        }
        return null;
    }
    onTransitionEnd({ propertyName, pseudoElement }) {
        if (propertyName === 'opacity' &&
            !pseudoElement &&
            this.state === State.Animated) {
            this.state = State.Idle;
        }
    }
    onExpandLoaded(event) {
        event.stopPropagation();
        if (this.state === State.Loading) {
            this.retrigger(State.Animated);
        }
    }
    retrigger(state) {
        this.state = State.Prepared;
        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
            // We need delay to re-trigger CSS height transition from the correct number
            if (this.state !== State.Prepared) {
                return;
            }
            this.state = state;
            this.cdr.markForCheck();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiExpandComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiExpandComponent, isStandalone: true, selector: "tui-expand", inputs: { async: "async", expandedSetter: ["expanded", "expandedSetter"] }, host: { listeners: { "transitionend.self": "onTransitionEnd($event)", "tui-expand-loaded": "onExpandLoaded($event)" }, properties: { "style.height.px": "height", "class._loading": "loading", "class._overflow": "overflow", "class._expanded": "expanded", "attr.aria-expanded": "expanded" } }, queries: [{ propertyName: "content", first: true, predicate: TuiExpandContent, descendants: true, read: TemplateRef }], viewQueries: [{ propertyName: "contentWrapper", first: true, predicate: ["wrapper"], descendants: true }], ngImport: i0, template: "<div\n    #wrapper\n    class=\"t-wrapper\"\n    @tuiParentAnimation\n    [@.disabled]=\"overflow\"\n>\n    <ng-container *ngIf=\"contentVisible\">\n        <ng-content />\n        <tui-loader\n            *ngIf=\"async; else content\"\n            size=\"l\"\n            [overlay]=\"true\"\n            [showLoader]=\"loading\"\n        >\n            <ng-container [ngTemplateOutlet]=\"content\" />\n        </tui-loader>\n    </ng-container>\n</div>\n", styles: [":host{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}:host._overflow{overflow:hidden}:host._expanded{opacity:1}:host._loading{opacity:.99}.t-wrapper:before,.t-wrapper:after{content:\"\";display:table}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TuiLoader, selector: "tui-loader", inputs: ["size", "inheritColor", "overlay", "textContent", "showLoader"] }], animations: [tuiParentAnimation], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiExpandComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiExpandComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-expand', imports: [NgIf, NgTemplateOutlet, TuiLoader], changeDetection: ChangeDetectionStrategy.OnPush, animations: [tuiParentAnimation], host: {
                        '[style.height.px]': 'height',
                        '[class._loading]': 'loading',
                        '[class._overflow]': 'overflow',
                        '[class._expanded]': 'expanded',
                        '[attr.aria-expanded]': 'expanded',
                        '(transitionend.self)': 'onTransitionEnd($event)',
                        [`(${TUI_EXPAND_LOADED})`]: 'onExpandLoaded($event)',
                    }, template: "<div\n    #wrapper\n    class=\"t-wrapper\"\n    @tuiParentAnimation\n    [@.disabled]=\"overflow\"\n>\n    <ng-container *ngIf=\"contentVisible\">\n        <ng-content />\n        <tui-loader\n            *ngIf=\"async; else content\"\n            size=\"l\"\n            [overlay]=\"true\"\n            [showLoader]=\"loading\"\n        >\n            <ng-container [ngTemplateOutlet]=\"content\" />\n        </tui-loader>\n    </ng-container>\n</div>\n", styles: [":host{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}:host._overflow{overflow:hidden}:host._expanded{opacity:1}:host._loading{opacity:.99}.t-wrapper:before,.t-wrapper:after{content:\"\";display:table}\n"] }]
        }], propDecorators: { contentWrapper: [{
                type: ViewChild,
                args: ['wrapper']
            }], content: [{
                type: ContentChild,
                args: [TuiExpandContent, { read: TemplateRef }]
            }], async: [{
                type: Input
            }], expandedSetter: [{
                type: Input,
                args: ['expanded']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9leHBhbmQvZXhwYW5kLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9leHBhbmQvZXhwYW5kLnRlbXBsYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUU5RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUUzQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFNUQsTUFBTSxLQUFLLEdBQUc7SUFDVixJQUFJLEVBQUUsQ0FBQztJQUNQLE9BQU8sRUFBRSxDQUFDO0lBQ1YsUUFBUSxFQUFFLENBQUM7SUFDWCxRQUFRLEVBQUUsQ0FBQztDQUNMLENBQUM7QUFFWCxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFFekI7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsbUJBQW1CLENBQUM7QUFFckQsTUFrQmEsa0JBQWtCO0lBbEIvQjtRQXNCcUIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFD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O3VCQUFDLFNBQVM7Z0JBUVYsT0FBTztzQkFEaEIsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7Z0JBTTVDLEtBQUs7c0JBRFgsS0FBSztnQkFJSyxjQUFjO3NCQUR4QixLQUFLO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7TmdJZkNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nSWYsIE5nVGVtcGxhdGVPdXRsZXR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7RWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgRGVzdHJveVJlZixcbiAgICBpbmplY3QsXG4gICAgSW5wdXQsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgdHlwZSB7VHVpVmFsdWVzT2Z9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHt0dWlQYXJlbnRBbmltYXRpb259IGZyb20gJ0B0YWlnYS11aS9jb3JlL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtUdWlMb2FkZXJ9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvbG9hZGVyJztcbmltcG9ydCB7dGltZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1R1aUV4cGFuZENvbnRlbnR9IGZyb20gJy4vZXhwYW5kLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuY29uc3QgU3RhdGUgPSB7XG4gICAgSWRsZTogMCxcbiAgICBMb2FkaW5nOiAxLFxuICAgIFByZXBhcmVkOiAyLFxuICAgIEFuaW1hdGVkOiAzLFxufSBhcyBjb25zdDtcblxuY29uc3QgTE9BREVSX0hFSUdIVCA9IDQ4O1xuXG4vKipcbiAqIEFuIGV2ZW50IGluZGljYXRpbmcgdGhhdCBhc3luYyBkYXRhIGZvciBleHBhbmQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gKiBEaXNwYXRjaCB0byBmaW5pc2ggbG9hZGluZyBzdGF0ZXMgZm9yIHtAbGluayBUdWlFeHBhbmRDb21wb25lbnR9LlxuICovXG5leHBvcnQgY29uc3QgVFVJX0VYUEFORF9MT0FERUQgPSAndHVpLWV4cGFuZC1sb2FkZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAndHVpLWV4cGFuZCcsXG4gICAgaW1wb3J0czogW05nSWYsIE5nVGVtcGxhdGVPdXRsZXQsIFR1aUxvYWRlcl0sXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuZC50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9leHBhbmQuc3R5bGUubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGFuaW1hdGlvbnM6IFt0dWlQYXJlbnRBbmltYXRpb25dLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tzdHlsZS5oZWlnaHQucHhdJzogJ2hlaWdodCcsXG4gICAgICAgICdbY2xhc3MuX2xvYWRpbmddJzogJ2xvYWRpbmcnLFxuICAgICAgICAnW2NsYXNzLl9vdmVyZmxvd10nOiAnb3ZlcmZsb3cnLFxuICAgICAgICAnW2NsYXNzLl9leHBhbmRlZF0nOiAnZXhwYW5kZWQnLFxuICAgICAgICAnW2F0dHIuYXJpYS1leHBhbmRlZF0nOiAnZXhwYW5kZWQnLFxuICAgICAgICAnKHRyYW5zaXRpb25lbmQuc2VsZiknOiAnb25UcmFuc2l0aW9uRW5kKCRldmVudCknLFxuICAgICAgICBbYCgke1RVSV9FWFBBTkRfTE9BREVEfSlgXTogJ29uRXhwYW5kTG9hZGVkKCRldmVudCknLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aUV4cGFuZENvbXBvbmVudCB7XG4gICAgQFZpZXdDaGlsZCgnd3JhcHBlcicpXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZW50V3JhcHBlcj86IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveVJlZiA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgICBwcml2YXRlIHN0YXRlOiBUdWlWYWx1ZXNPZjx0eXBlb2YgU3RhdGU+ID0gU3RhdGUuSWRsZTtcblxuICAgIEBDb250ZW50Q2hpbGQoVHVpRXhwYW5kQ29udGVudCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgICBwcm90ZWN0ZWQgY29udGVudDogVGVtcGxhdGVSZWY8TmdJZkNvbnRleHQ8Ym9vbGVhbj4+IHwgbnVsbCA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgZXhwYW5kZWQ6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFzeW5jID0gZmFsc2U7XG5cbiAgICBASW5wdXQoJ2V4cGFuZGVkJylcbiAgICBwdWJsaWMgc2V0IGV4cGFuZGVkU2V0dGVyKGV4cGFuZGVkOiBib29sZWFuIHwgbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5leHBhbmRlZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IGV4cGFuZGVkO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGUuSWRsZSkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IGV4cGFuZGVkO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkFuaW1hdGVkO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV4cGFuZGVkID0gZXhwYW5kZWQ7XG4gICAgICAgIHRoaXMucmV0cmlnZ2VyKHRoaXMuYXN5bmMgJiYgZXhwYW5kZWQgPyBTdGF0ZS5Mb2FkaW5nIDogU3RhdGUuQW5pbWF0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY29udGVudFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cGFuZGVkIHx8IHRoaXMuc3RhdGUgIT09IFN0YXRlLklkbGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBvdmVyZmxvdygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgIT09IFN0YXRlLklkbGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmV4cGFuZGVkICYmIHRoaXMuYXN5bmMgJiYgdGhpcy5zdGF0ZSA9PT0gU3RhdGUuTG9hZGluZztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGhlaWdodCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgY29uc3Qge2V4cGFuZGVkLCBzdGF0ZSwgY29udGVudFdyYXBwZXJ9ID0gdGhpcztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoZXhwYW5kZWQgJiYgc3RhdGUgPT09IFN0YXRlLlByZXBhcmVkKSB8fFxuICAgICAgICAgICAgKCFleHBhbmRlZCAmJiBzdGF0ZSA9PT0gU3RhdGUuQW5pbWF0ZWQpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb250ZW50V3JhcHBlciAmJlxuICAgICAgICAgICAgKCghZXhwYW5kZWQgJiYgc3RhdGUgPT09IFN0YXRlLlByZXBhcmVkKSB8fFxuICAgICAgICAgICAgICAgIChleHBhbmRlZCAmJiBzdGF0ZSA9PT0gU3RhdGUuQW5pbWF0ZWQpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50V3JhcHBlci5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZW50V3JhcHBlciAmJiBleHBhbmRlZCAmJiBzdGF0ZSA9PT0gU3RhdGUuTG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGNvbnRlbnRXcmFwcGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0LCBMT0FERVJfSEVJR0hUKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblRyYW5zaXRpb25FbmQoe3Byb3BlcnR5TmFtZSwgcHNldWRvRWxlbWVudH06IFRyYW5zaXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPT09ICdvcGFjaXR5JyAmJlxuICAgICAgICAgICAgIXBzZXVkb0VsZW1lbnQgJiZcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPT09IFN0YXRlLkFuaW1hdGVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLklkbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FeHBhbmRMb2FkZWQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnJldHJpZ2dlcihTdGF0ZS5BbmltYXRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJldHJpZ2dlcihzdGF0ZTogVHVpVmFsdWVzT2Y8dHlwZW9mIFN0YXRlPik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuUHJlcGFyZWQ7XG5cbiAgICAgICAgdGltZXIoMClcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3lSZWYpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gV2UgbmVlZCBkZWxheSB0byByZS10cmlnZ2VyIENTUyBoZWlnaHQgdHJhbnNpdGlvbiBmcm9tIHRoZSBjb3JyZWN0IG51bWJlclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZS5QcmVwYXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiPGRpdlxuICAgICN3cmFwcGVyXG4gICAgY2xhc3M9XCJ0LXdyYXBwZXJcIlxuICAgIEB0dWlQYXJlbnRBbmltYXRpb25cbiAgICBbQC5kaXNhYmxlZF09XCJvdmVyZmxvd1wiXG4+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRlbnRWaXNpYmxlXCI+XG4gICAgICAgIDxuZy1jb250ZW50IC8+XG4gICAgICAgIDx0dWktbG9hZGVyXG4gICAgICAgICAgICAqbmdJZj1cImFzeW5jOyBlbHNlIGNvbnRlbnRcIlxuICAgICAgICAgICAgc2l6ZT1cImxcIlxuICAgICAgICAgICAgW292ZXJsYXldPVwidHJ1ZVwiXG4gICAgICAgICAgICBbc2hvd0xvYWRlcl09XCJsb2FkaW5nXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCIgLz5cbiAgICAgICAgPC90dWktbG9hZGVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=