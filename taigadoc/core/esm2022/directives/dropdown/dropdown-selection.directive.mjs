import { DOCUMENT } from '@angular/common';
import { Directive, inject, Input, ViewContainerRef } from '@angular/core';
import { CHAR_NO_BREAK_SPACE, CHAR_ZERO_WIDTH_SPACE, EMPTY_CLIENT_RECT, TUI_TRUE_HANDLER, } from '@taiga-ui/cdk/constants';
import { TUI_RANGE } from '@taiga-ui/cdk/tokens';
import { tuiInjectElement, tuiIsElement, tuiIsTextfield, tuiIsTextNode, } from '@taiga-ui/cdk/utils/dom';
import { tuiGetNativeFocused } from '@taiga-ui/cdk/utils/focus';
import { tuiIsString, tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiAsDriver, tuiAsRectAccessor, TuiDriver } from '@taiga-ui/core/classes';
import { TUI_SELECTION_STREAM } from '@taiga-ui/core/tokens';
import { tuiGetWordRange } from '@taiga-ui/core/utils';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map } from 'rxjs';
import { TuiDropdownDirective } from './dropdown.directive';
import * as i0 from "@angular/core";
class TuiDropdownSelection extends TuiDriver {
    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
        this.doc = inject(DOCUMENT);
        this.vcr = inject(ViewContainerRef);
        this.dropdown = inject(TuiDropdownDirective);
        this.el = tuiInjectElement();
        this.handler$ = new BehaviorSubject(TUI_TRUE_HANDLER);
        this.stream$ = combineLatest([
            this.handler$,
            inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), distinctUntilChanged((x, y) => x.startOffset === y.startOffset &&
                x.endOffset === y.endOffset &&
                x.commonAncestorContainer === y.commonAncestorContainer)),
        ]).pipe(map(([handler, range]) => {
            const contained = this.el.contains(range.commonAncestorContainer);
            this.range =
                contained && tuiIsTextNode(range.commonAncestorContainer)
                    ? range
                    : this.range;
            return (contained && handler(this.range)) || this.inDropdown(range);
        }));
        this.range = inject(TUI_RANGE);
        this.position = 'selection';
        this.type = 'dropdown';
    }
    set tuiDropdownSelection(visible) {
        if (!tuiIsString(visible)) {
            this.handler$.next(visible);
        }
    }
    getClientRect() {
        switch (this.position) {
            case 'tag': {
                const { commonAncestorContainer } = this.range;
                const element = tuiIsElement(commonAncestorContainer)
                    ? commonAncestorContainer
                    : commonAncestorContainer.parentNode;
                return element && tuiIsElement(element)
                    ? element.getBoundingClientRect()
                    : EMPTY_CLIENT_RECT;
            }
            case 'word':
                return tuiGetWordRange(this.range).getBoundingClientRect();
            default:
                return this.range.getBoundingClientRect();
        }
    }
    ngOnDestroy() {
        if (this.ghost) {
            this.vcr.element.nativeElement.removeChild(this.ghost);
        }
    }
    getRange() {
        const active = tuiGetNativeFocused(this.doc);
        const selection = this.doc.getSelection();
        const range = active && tuiIsTextfield(active) && this.el.contains(active)
            ? this.veryVerySadInputFix(active)
            : (selection?.rangeCount && selection.getRangeAt(0)) || this.range;
        return range.cloneRange();
    }
    /**
     * Check if given range is at least partially inside dropdown
     */
    inDropdown(range) {
        const { startContainer, endContainer } = range;
        const inDropdown = this.boxContains(range.commonAncestorContainer);
        const hostToDropdown = this.boxContains(endContainer) && this.el.contains(startContainer);
        const dropdownToHost = this.boxContains(startContainer) && this.el.contains(endContainer);
        return inDropdown || hostToDropdown || dropdownToHost;
    }
    /**
     * Check if Node is inside dropdown
     */
    boxContains(node) {
        return !!this.dropdown.ref()?.location.nativeElement.contains(node);
    }
    veryVerySadInputFix(element) {
        const { ghost = this.initGhost(element) } = this;
        const { top, left, width, height } = element.getBoundingClientRect();
        const { selectionStart, selectionEnd, value } = element;
        const range = this.doc.createRange();
        const hostRect = this.el.getBoundingClientRect();
        ghost.style.top = tuiPx(top - hostRect.top);
        ghost.style.left = tuiPx(left - hostRect.left);
        ghost.style.width = tuiPx(width);
        ghost.style.height = tuiPx(height);
        ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;
        range.setStart(ghost.firstChild, selectionStart || 0);
        range.setEnd(ghost.firstChild, selectionEnd || 0);
        return range;
    }
    /**
     * Create an invisible DIV styled exactly like input/textarea element inside directive
     */
    initGhost(element) {
        const ghost = this.doc.createElement('div');
        const { font, letterSpacing, textTransform, padding } = getComputedStyle(element);
        ghost.style.position = 'absolute';
        ghost.style.pointerEvents = 'none';
        ghost.style.opacity = '0';
        ghost.style.whiteSpace = 'pre-wrap';
        ghost.style.font = font;
        ghost.style.letterSpacing = letterSpacing;
        ghost.style.textTransform = textTransform;
        ghost.style.padding = padding;
        this.vcr.element.nativeElement.appendChild(ghost);
        this.ghost = ghost;
        return ghost;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownSelection, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiDropdownSelection, isStandalone: true, selector: "[tuiDropdownSelection]", inputs: { position: ["tuiDropdownSelectionPosition", "position"], tuiDropdownSelection: "tuiDropdownSelection" }, providers: [
            tuiAsDriver(TuiDropdownSelection),
            tuiAsRectAccessor(TuiDropdownSelection),
        ], usesInheritance: true, ngImport: i0 }); }
}
export { TuiDropdownSelection };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiDropdownSelection, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiDropdownSelection]',
                    providers: [
                        tuiAsDriver(TuiDropdownSelection),
                        tuiAsRectAccessor(TuiDropdownSelection),
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { position: [{
                type: Input,
                args: ['tuiDropdownSelectionPosition']
            }], tuiDropdownSelection: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tc2VsZWN0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvZGlyZWN0aXZlcy9kcm9wZG93bi9kcm9wZG93bi1zZWxlY3Rpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUNILG1CQUFtQixFQUNuQixxQkFBcUIsRUFDckIsaUJBQWlCLEVBQ2pCLGdCQUFnQixHQUNuQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixjQUFjLEVBQ2QsYUFBYSxHQUNoQixNQUFNLHlCQUF5QixDQUFDO0FBQ2pDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFckUsT0FBTyxFQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRS9FLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQUUxRCxNQVFhLG9CQUNULFNBQVEs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QUFDLG9CQUFvQixDQUFDO1lBQ2pDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDO1NBQzFDOztTQUVRLG9CQUFvQjs0RkFBcEIsb0JBQW9CO2tCQVJoQyxTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxTQUFTLEVBQUU7d0JBQ1AsV0FBVyxzQkFBc0I7d0JBQ2pDLGlCQUFpQixzQkFBc0I7cUJBQzFDO2lCQUNKOzBFQTBDVSxRQUFRO3NCQURkLEtBQUs7dUJBQUMsOEJBQThCO2dCQVUxQixvQkFBb0I7c0JBRDlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge09uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgaW5qZWN0LCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENIQVJfTk9fQlJFQUtfU1BBQ0UsXG4gICAgQ0hBUl9aRVJPX1dJRFRIX1NQQUNFLFxuICAgIEVNUFRZX0NMSUVOVF9SRUNULFxuICAgIFRVSV9UUlVFX0hBTkRMRVIsXG59IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB7VFVJX1JBTkdFfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3Rva2Vucyc7XG5pbXBvcnQgdHlwZSB7VHVpQm9vbGVhbkhhbmRsZXJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvdHlwZXMnO1xuaW1wb3J0IHtcbiAgICB0dWlJbmplY3RFbGVtZW50LFxuICAgIHR1aUlzRWxlbWVudCxcbiAgICB0dWlJc1RleHRmaWVsZCxcbiAgICB0dWlJc1RleHROb2RlLFxufSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge3R1aUdldE5hdGl2ZUZvY3VzZWR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZm9jdXMnO1xuaW1wb3J0IHt0dWlJc1N0cmluZywgdHVpUHh9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvbWlzY2VsbGFuZW91cyc7XG5pbXBvcnQgdHlwZSB7VHVpUmVjdEFjY2Vzc29yfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jbGFzc2VzJztcbmltcG9ydCB7dHVpQXNEcml2ZXIsIHR1aUFzUmVjdEFjY2Vzc29yLCBUdWlEcml2ZXJ9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NsYXNzZXMnO1xuaW1wb3J0IHtUVUlfU0VMRUNUSU9OX1NUUkVBTX0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdG9rZW5zJztcbmltcG9ydCB7dHVpR2V0V29yZFJhbmdlfSBmcm9tICdAdGFpZ2EtdWkvY29yZS91dGlscyc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7VHVpRHJvcGRvd25EaXJlY3RpdmV9IGZyb20gJy4vZHJvcGRvd24uZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ1t0dWlEcm9wZG93blNlbGVjdGlvbl0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB0dWlBc0RyaXZlcihUdWlEcm9wZG93blNlbGVjdGlvbiksXG4gICAgICAgIHR1aUFzUmVjdEFjY2Vzc29yKFR1aURyb3Bkb3duU2VsZWN0aW9uKSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlEcm9wZG93blNlbGVjdGlvblxuICAgIGV4dGVuZHMgVHVpRHJpdmVyXG4gICAgaW1wbGVtZW50cyBUdWlSZWN0QWNjZXNzb3IsIE9uRGVzdHJveVxue1xuICAgIHByaXZhdGUgZ2hvc3Q/OiBIVE1MRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBkb2MgPSBpbmplY3QoRE9DVU1FTlQpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSB2Y3IgPSBpbmplY3QoVmlld0NvbnRhaW5lclJlZik7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGRyb3Bkb3duID0gaW5qZWN0KFR1aURyb3Bkb3duRGlyZWN0aXZlKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZWwgPSB0dWlJbmplY3RFbGVtZW50KCk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGhhbmRsZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUdWlCb29sZWFuSGFuZGxlcjxSYW5nZT4+KFxuICAgICAgICBUVUlfVFJVRV9IQU5ETEVSLFxuICAgICk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RyZWFtJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICB0aGlzLmhhbmRsZXIkLFxuICAgICAgICBpbmplY3QoVFVJX1NFTEVDVElPTl9TVFJFQU0pLnBpcGUoXG4gICAgICAgICAgICBtYXAoKCkgPT4gdGhpcy5nZXRSYW5nZSgpKSxcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKFxuICAgICAgICAgICAgICAgICh4LCB5KSA9PlxuICAgICAgICAgICAgICAgICAgICB4LnN0YXJ0T2Zmc2V0ID09PSB5LnN0YXJ0T2Zmc2V0ICYmXG4gICAgICAgICAgICAgICAgICAgIHguZW5kT2Zmc2V0ID09PSB5LmVuZE9mZnNldCAmJlxuICAgICAgICAgICAgICAgICAgICB4LmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID09PSB5LmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgKSxcbiAgICBdKS5waXBlKFxuICAgICAgICBtYXAoKFtoYW5kbGVyLCByYW5nZV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lZCA9IHRoaXMuZWwuY29udGFpbnMocmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuXG4gICAgICAgICAgICB0aGlzLnJhbmdlID1cbiAgICAgICAgICAgICAgICBjb250YWluZWQgJiYgdHVpSXNUZXh0Tm9kZShyYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcilcbiAgICAgICAgICAgICAgICAgICAgPyByYW5nZVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMucmFuZ2U7XG5cbiAgICAgICAgICAgIHJldHVybiAoY29udGFpbmVkICYmIGhhbmRsZXIodGhpcy5yYW5nZSkpIHx8IHRoaXMuaW5Ecm9wZG93bihyYW5nZSk7XG4gICAgICAgIH0pLFxuICAgICk7XG5cbiAgICBwcm90ZWN0ZWQgcmFuZ2UgPSBpbmplY3QoVFVJX1JBTkdFKTtcblxuICAgIEBJbnB1dCgndHVpRHJvcGRvd25TZWxlY3Rpb25Qb3NpdGlvbicpXG4gICAgcHVibGljIHBvc2l0aW9uOiAnc2VsZWN0aW9uJyB8ICd0YWcnIHwgJ3dvcmQnID0gJ3NlbGVjdGlvbic7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZSA9ICdkcm9wZG93bic7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKHN1YnNjcmliZXIpID0+IHRoaXMuc3RyZWFtJC5zdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0dWlEcm9wZG93blNlbGVjdGlvbih2aXNpYmxlOiBUdWlCb29sZWFuSGFuZGxlcjxSYW5nZT4gfCBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0dWlJc1N0cmluZyh2aXNpYmxlKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyJC5uZXh0KHZpc2libGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsaWVudFJlY3QoKTogRE9NUmVjdCB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAndGFnJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtjb21tb25BbmNlc3RvckNvbnRhaW5lcn0gPSB0aGlzLnJhbmdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0dWlJc0VsZW1lbnQoY29tbW9uQW5jZXN0b3JDb250YWluZXIpXG4gICAgICAgICAgICAgICAgICAgID8gY29tbW9uQW5jZXN0b3JDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgOiBjb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgdHVpSXNFbGVtZW50KGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgID8gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgICAgICAgICA6IEVNUFRZX0NMSUVOVF9SRUNUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnd29yZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR1aUdldFdvcmRSYW5nZSh0aGlzLnJhbmdlKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmdob3N0KSB7XG4gICAgICAgICAgICB0aGlzLnZjci5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5naG9zdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UmFuZ2UoKTogUmFuZ2Uge1xuICAgICAgICBjb25zdCBhY3RpdmUgPSB0dWlHZXROYXRpdmVGb2N1c2VkKHRoaXMuZG9jKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5kb2MuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHJhbmdlID1cbiAgICAgICAgICAgIGFjdGl2ZSAmJiB0dWlJc1RleHRmaWVsZChhY3RpdmUpICYmIHRoaXMuZWwuY29udGFpbnMoYWN0aXZlKVxuICAgICAgICAgICAgICAgID8gdGhpcy52ZXJ5VmVyeVNhZElucHV0Rml4KGFjdGl2ZSlcbiAgICAgICAgICAgICAgICA6IChzZWxlY3Rpb24/LnJhbmdlQ291bnQgJiYgc2VsZWN0aW9uLmdldFJhbmdlQXQoMCkpIHx8IHRoaXMucmFuZ2U7XG5cbiAgICAgICAgcmV0dXJuIHJhbmdlLmNsb25lUmFuZ2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBnaXZlbiByYW5nZSBpcyBhdCBsZWFzdCBwYXJ0aWFsbHkgaW5zaWRlIGRyb3Bkb3duXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluRHJvcGRvd24ocmFuZ2U6IFJhbmdlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHtzdGFydENvbnRhaW5lciwgZW5kQ29udGFpbmVyfSA9IHJhbmdlO1xuICAgICAgICBjb25zdCBpbkRyb3Bkb3duID0gdGhpcy5ib3hDb250YWlucyhyYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGhvc3RUb0Ryb3Bkb3duID1cbiAgICAgICAgICAgIHRoaXMuYm94Q29udGFpbnMoZW5kQ29udGFpbmVyKSAmJiB0aGlzLmVsLmNvbnRhaW5zKHN0YXJ0Q29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgZHJvcGRvd25Ub0hvc3QgPVxuICAgICAgICAgICAgdGhpcy5ib3hDb250YWlucyhzdGFydENvbnRhaW5lcikgJiYgdGhpcy5lbC5jb250YWlucyhlbmRDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBpbkRyb3Bkb3duIHx8IGhvc3RUb0Ryb3Bkb3duIHx8IGRyb3Bkb3duVG9Ib3N0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIE5vZGUgaXMgaW5zaWRlIGRyb3Bkb3duXG4gICAgICovXG4gICAgcHJpdmF0ZSBib3hDb250YWlucyhub2RlOiBOb2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZHJvcGRvd24ucmVmKCk/LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMobm9kZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2ZXJ5VmVyeVNhZElucHV0Rml4KGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50KTogUmFuZ2Uge1xuICAgICAgICBjb25zdCB7Z2hvc3QgPSB0aGlzLmluaXRHaG9zdChlbGVtZW50KX0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7dG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0fSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHtzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kLCB2YWx1ZX0gPSBlbGVtZW50O1xuICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuZG9jLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIGNvbnN0IGhvc3RSZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBnaG9zdC5zdHlsZS50b3AgPSB0dWlQeCh0b3AgLSBob3N0UmVjdC50b3ApO1xuICAgICAgICBnaG9zdC5zdHlsZS5sZWZ0ID0gdHVpUHgobGVmdCAtIGhvc3RSZWN0LmxlZnQpO1xuICAgICAgICBnaG9zdC5zdHlsZS53aWR0aCA9IHR1aVB4KHdpZHRoKTtcbiAgICAgICAgZ2hvc3Quc3R5bGUuaGVpZ2h0ID0gdHVpUHgoaGVpZ2h0KTtcbiAgICAgICAgZ2hvc3QudGV4dENvbnRlbnQgPSBDSEFSX1pFUk9fV0lEVEhfU1BBQ0UgKyB2YWx1ZSArIENIQVJfTk9fQlJFQUtfU1BBQ0U7XG5cbiAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoZ2hvc3QuZmlyc3RDaGlsZCBhcyBOb2RlLCBzZWxlY3Rpb25TdGFydCB8fCAwKTtcbiAgICAgICAgcmFuZ2Uuc2V0RW5kKGdob3N0LmZpcnN0Q2hpbGQgYXMgTm9kZSwgc2VsZWN0aW9uRW5kIHx8IDApO1xuXG4gICAgICAgIHJldHVybiByYW5nZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gaW52aXNpYmxlIERJViBzdHlsZWQgZXhhY3RseSBsaWtlIGlucHV0L3RleHRhcmVhIGVsZW1lbnQgaW5zaWRlIGRpcmVjdGl2ZVxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdEdob3N0KGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBnaG9zdCA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB7Zm9udCwgbGV0dGVyU3BhY2luZywgdGV4dFRyYW5zZm9ybSwgcGFkZGluZ30gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgICAgIGdob3N0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgZ2hvc3Quc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgZ2hvc3Quc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgZ2hvc3Quc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtd3JhcCc7XG4gICAgICAgIGdob3N0LnN0eWxlLmZvbnQgPSBmb250O1xuICAgICAgICBnaG9zdC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gbGV0dGVyU3BhY2luZztcbiAgICAgICAgZ2hvc3Quc3R5bGUudGV4dFRyYW5zZm9ybSA9IHRleHRUcmFuc2Zvcm07XG4gICAgICAgIGdob3N0LnN0eWxlLnBhZGRpbmcgPSBwYWRkaW5nO1xuXG4gICAgICAgIHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hcHBlbmRDaGlsZChnaG9zdCk7XG4gICAgICAgIHRoaXMuZ2hvc3QgPSBnaG9zdDtcblxuICAgICAgICByZXR1cm4gZ2hvc3Q7XG4gICAgfVxufVxuIl19