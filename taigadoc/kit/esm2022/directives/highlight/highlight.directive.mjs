import { DOCUMENT } from '@angular/common';
import { Directive, inject, Input, Renderer2 } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { svgNodeFilter } from '@taiga-ui/cdk/constants';
import { tuiCreateOptions } from '@taiga-ui/cdk/utils/di';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import * as i0 from "@angular/core";
export const [TUI_HIGHLIGHT_OPTIONS, tuiHighlightOptionsProvider] = tuiCreateOptions({
    highlightColor: 'var(--tui-service-selection-background)',
});
class TuiHighlight {
    constructor() {
        this.el = tuiInjectElement();
        this.renderer = inject(Renderer2);
        this.doc = inject(DOCUMENT);
        this.highlight = this.setUpHighlight();
        this.treeWalker = this.doc.createTreeWalker(this.el, NodeFilter.SHOW_TEXT, svgNodeFilter);
        this.tuiHighlight = '';
        this.tuiHighlightColor = inject(TUI_HIGHLIGHT_OPTIONS).highlightColor;
        inject(ResizeObserverService, { self: true })
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.updateStyles());
    }
    ngOnChanges() {
        this.updateStyles();
    }
    get match() {
        return this.indexOf(this.el.textContent) !== -1;
    }
    updateStyles() {
        this.highlight.style.display = 'none';
        if (!this.match) {
            return;
        }
        this.treeWalker.currentNode = this.el;
        do {
            const index = this.indexOf(this.treeWalker.currentNode.nodeValue);
            if (index === -1) {
                continue;
            }
            const range = this.doc.createRange();
            range.setStart(this.treeWalker.currentNode, index);
            range.setEnd(this.treeWalker.currentNode, index + this.tuiHighlight.length);
            const hostRect = this.el.getBoundingClientRect();
            const { left, top, width, height } = range.getBoundingClientRect();
            const { style } = this.highlight;
            style.background = this.tuiHighlightColor;
            style.left = tuiPx(left - hostRect.left);
            style.top = tuiPx(top - hostRect.top);
            style.width = tuiPx(width);
            style.height = tuiPx(height);
            style.display = 'block';
            return;
        } while (this.treeWalker.nextNode());
    }
    indexOf(source) {
        return !source || !this.tuiHighlight
            ? -1
            : source.toLowerCase().indexOf(this.tuiHighlight.toLowerCase());
    }
    setUpHighlight() {
        const highlight = this.renderer.createElement('div');
        const { style } = highlight;
        style.background = this.tuiHighlightColor;
        style.zIndex = '-1';
        style.position = 'absolute';
        this.renderer.appendChild(this.el, highlight);
        return highlight;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHighlight, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiHighlight, isStandalone: true, selector: "[tuiHighlight]", inputs: { tuiHighlight: "tuiHighlight", tuiHighlightColor: "tuiHighlightColor" }, host: { properties: { "style.position": "\"relative\"", "style.zIndex": "0" } }, providers: [ResizeObserverService], usesOnChanges: true, ngImport: i0 }); }
}
export { TuiHighlight };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiHighlight, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiHighlight]',
                    providers: [ResizeObserverService],
                    host: {
                        '[style.position]': '"relative"',
                        '[style.zIndex]': '0',
                    },
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tuiHighlight: [{
                type: Input
            }], tuiHighlightColor: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9kaXJlY3RpdmVzL2hpZ2hsaWdodC9oaWdobGlnaHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7O0FBRXhELE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsMkJBQTJCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztJQUNqRixjQUFjLEVBQUUseUNBQXlDO0NBQzVELENBQUMsQ0FBQztBQUVILE1BU2EsWUFBWTtJQWtCckI7UUFqQmlCLE9BQUUsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsUUFBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QixjQUFTLEdBQWdCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQyxlQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FDbkQsSUFBSSxDQUFDLEVBQUUs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UyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBRyxTQUFTLENBQUM7UUFFMUIsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDMUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU5QyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDOytHQXBGUSxZQUFZO21HQUFaLFlBQVksZ09BTlYsQ0FBQyxxQkFBcUIsQ0FBQzs7U0FNekIsWUFBWTs0RkFBWixZQUFZO2tCQVR4QixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDbEMsSUFBSSxFQUFFO3dCQUNGLGtCQUFrQixFQUFFLFlBQVk7d0JBQ2hDLGdCQUFnQixFQUFFLEdBQUc7cUJBQ3hCO2lCQUNKOzBFQWNVLFlBQVk7c0JBRGxCLEtBQUs7Z0JBSUMsaUJBQWlCO3NCQUR2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB0eXBlIHtPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdCwgSW5wdXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2VVbnRpbERlc3Ryb3llZH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHtSZXNpemVPYnNlcnZlclNlcnZpY2V9IGZyb20gJ0BuZy13ZWItYXBpcy9yZXNpemUtb2JzZXJ2ZXInO1xuaW1wb3J0IHtzdmdOb2RlRmlsdGVyfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge3R1aUNyZWF0ZU9wdGlvbnN9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZGknO1xuaW1wb3J0IHt0dWlJbmplY3RFbGVtZW50fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL2RvbSc7XG5pbXBvcnQge3R1aVB4fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuXG5leHBvcnQgY29uc3QgW1RVSV9ISUdITElHSFRfT1BUSU9OUywgdHVpSGlnaGxpZ2h0T3B0aW9uc1Byb3ZpZGVyXSA9IHR1aUNyZWF0ZU9wdGlvbnMoe1xuICAgIGhpZ2hsaWdodENvbG9yOiAndmFyKC0tdHVpLXNlcnZpY2Utc2VsZWN0aW9uLWJhY2tncm91bmQpJyxcbn0pO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aUhpZ2hsaWdodF0nLFxuICAgIHByb3ZpZGVyczogW1Jlc2l6ZU9ic2VydmVyU2VydmljZV0sXG4gICAgaG9zdDoge1xuICAgICAgICAnW3N0eWxlLnBvc2l0aW9uXSc6ICdcInJlbGF0aXZlXCInLFxuICAgICAgICAnW3N0eWxlLnpJbmRleF0nOiAnMCcsXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSGlnaGxpZ2h0IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsID0gdHVpSW5qZWN0RWxlbWVudCgpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXIgPSBpbmplY3QoUmVuZGVyZXIyKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvYyA9IGluamVjdChET0NVTUVOVCk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGhpZ2hsaWdodDogSFRNTEVsZW1lbnQgPSB0aGlzLnNldFVwSGlnaGxpZ2h0KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmVlV2Fsa2VyID0gdGhpcy5kb2MuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgICAgdGhpcy5lbCxcbiAgICAgICAgTm9kZUZpbHRlci5TSE9XX1RFWFQsXG4gICAgICAgIHN2Z05vZGVGaWx0ZXIsXG4gICAgKTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR1aUhpZ2hsaWdodCA9ICcnO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHVpSGlnaGxpZ2h0Q29sb3IgPSBpbmplY3QoVFVJX0hJR0hMSUdIVF9PUFRJT05TKS5oaWdobGlnaHRDb2xvcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpbmplY3QoUmVzaXplT2JzZXJ2ZXJTZXJ2aWNlLCB7c2VsZjogdHJ1ZX0pXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVTdHlsZXMoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWF0Y2goKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4T2YodGhpcy5lbC50ZXh0Q29udGVudCkgIT09IC0xO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlU3R5bGVzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGlmICghdGhpcy5tYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmVlV2Fsa2VyLmN1cnJlbnROb2RlID0gdGhpcy5lbDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5kZXhPZih0aGlzLnRyZWVXYWxrZXIuY3VycmVudE5vZGUubm9kZVZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuZG9jLmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHRoaXMudHJlZVdhbGtlci5jdXJyZW50Tm9kZSwgaW5kZXgpO1xuICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kKHRoaXMudHJlZVdhbGtlci5jdXJyZW50Tm9kZSwgaW5kZXggKyB0aGlzLnR1aUhpZ2hsaWdodC5sZW5ndGgpO1xuXG4gICAgICAgICAgICBjb25zdCBob3N0UmVjdCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB7bGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0fSA9IHJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qge3N0eWxlfSA9IHRoaXMuaGlnaGxpZ2h0O1xuXG4gICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy50dWlIaWdobGlnaHRDb2xvcjtcbiAgICAgICAgICAgIHN0eWxlLmxlZnQgPSB0dWlQeChsZWZ0IC0gaG9zdFJlY3QubGVmdCk7XG4gICAgICAgICAgICBzdHlsZS50b3AgPSB0dWlQeCh0b3AgLSBob3N0UmVjdC50b3ApO1xuICAgICAgICAgICAgc3R5bGUud2lkdGggPSB0dWlQeCh3aWR0aCk7XG4gICAgICAgICAgICBzdHlsZS5oZWlnaHQgPSB0dWlQeChoZWlnaHQpO1xuICAgICAgICAgICAgc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSB3aGlsZSAodGhpcy50cmVlV2Fsa2VyLm5leHROb2RlKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5kZXhPZihzb3VyY2U6IHN0cmluZyB8IG51bGwpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gIXNvdXJjZSB8fCAhdGhpcy50dWlIaWdobGlnaHRcbiAgICAgICAgICAgID8gLTFcbiAgICAgICAgICAgIDogc291cmNlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnR1aUhpZ2hsaWdodC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFVwSGlnaGxpZ2h0KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qge3N0eWxlfSA9IGhpZ2hsaWdodDtcblxuICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy50dWlIaWdobGlnaHRDb2xvcjtcbiAgICAgICAgc3R5bGUuekluZGV4ID0gJy0xJztcbiAgICAgICAgc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwsIGhpZ2hsaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodDtcbiAgICB9XG59XG4iXX0=