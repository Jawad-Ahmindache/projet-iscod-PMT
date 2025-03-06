import { Directive, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WA_ANIMATION_FRAME } from '@ng-web-apis/common';
import { tuiScrollFrom, tuiZonefree, tuiZonefreeScheduler, } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { TUI_SCROLL_REF } from '@taiga-ui/core/tokens';
import { merge, throttleTime } from 'rxjs';
import { TuiScrollbarService } from './scrollbar.service';
import * as i0 from "@angular/core";
const MIN_WIDTH = 24;
class TuiScrollbarDirective {
    constructor() {
        this.el = inject(TUI_SCROLL_REF).nativeElement;
        this.style = tuiInjectElement().style;
        this.scrollSub = inject(TuiScrollbarService)
            .pipe(takeUntilDestroyed())
            .subscribe(([top, left]) => {
            this.el.style.scrollBehavior = 'auto';
            if (this.tuiScrollbar === 'horizontal') {
                this.el.scrollLeft = left;
            }
            else {
                this.el.scrollTop = top;
            }
            this.el.style.scrollBehavior = '';
        });
        this.styleSub = merge(inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())), tuiScrollFrom(this.el))
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => {
            const dimension = {
                scrollTop: this.el.scrollTop,
                scrollHeight: this.el.scrollHeight,
                clientHeight: this.el.clientHeight,
                scrollLeft: this.el.scrollLeft,
                scrollWidth: this.el.scrollWidth,
                clientWidth: this.el.clientWidth,
            };
            const thumb = `${this.getThumb(dimension) * 100}%`;
            const view = `${this.getView(dimension) * 100}%`;
            if (this.tuiScrollbar === 'vertical') {
                this.style.top = thumb;
                this.style.height = view;
            }
            else {
                this.style.left = thumb;
                this.style.width = view;
            }
        });
        this.tuiScrollbar = 'vertical';
    }
    getScrolled(dimension) {
        return this.tuiScrollbar === 'vertical'
            ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight)
            : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
    }
    getCompensation(dimension) {
        if (((dimension.clientHeight * dimension.clientHeight) / dimension.scrollHeight >
            MIN_WIDTH &&
            this.tuiScrollbar === 'vertical') ||
            ((dimension.clientWidth * dimension.clientWidth) / dimension.scrollWidth >
                MIN_WIDTH &&
                this.tuiScrollbar === 'horizontal')) {
            return 0;
        }
        return this.tuiScrollbar === 'vertical'
            ? MIN_WIDTH / dimension.clientHeight
            : MIN_WIDTH / dimension.clientWidth;
    }
    getThumb(dimension) {
        const compensation = this.getCompensation(dimension) || this.getView(dimension);
        return this.getScrolled(dimension) * (1 - compensation);
    }
    getView(dimension) {
        return this.tuiScrollbar === 'vertical'
            ? Math.ceil((dimension.clientHeight / dimension.scrollHeight) * 100) / 100
            : Math.ceil((dimension.clientWidth / dimension.scrollWidth) * 100) / 100;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbarDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiScrollbarDirective, isStandalone: true, selector: "[tuiScrollbar]", inputs: { tuiScrollbar: "tuiScrollbar" }, providers: [TuiScrollbarService], ngImport: i0 }); }
}
export { TuiScrollbarDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiScrollbarDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[tuiScrollbar]',
                    providers: [TuiScrollbarService],
                }]
        }], propDecorators: { tuiScrollbar: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUNILGFBQWEsRUFDYixXQUFXLEVBQ1gsb0JBQW9CLEdBQ3ZCLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQUV4RCxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFXckIsTUFLYSxxQkFBcUI7SUFMbEM7UUFNcUIsT0FBRSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDMUMsVUFBSyxHQUFHLGdCQUFnQixFQUFFLENBQUMsS0FBSyxDQUFDO1FBRS9CLGNBQVMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7YUFDckQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDMUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsTUFBTSxD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WTtZQUNwQyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDNUMsQ0FBQztJQUVPLFFBQVEsQ0FBQyxTQUE0QjtRQUN6QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEYsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTyxPQUFPLENBQUMsU0FBNEI7UUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFVBQVU7WUFDbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQzFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2pGLENBQUM7K0dBakZRLHFCQUFxQjttR0FBckIscUJBQXFCLHVHQUZuQixDQUFDLG1CQUFtQixDQUFDOztTQUV2QixxQkFBcUI7NEZBQXJCLHFCQUFxQjtrQkFMakMsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ25DOzhCQStDVSxZQUFZO3NCQURsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlVW50aWxEZXN0cm95ZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7V0FfQU5JTUFUSU9OX0ZSQU1FfSBmcm9tICdAbmctd2ViLWFwaXMvY29tbW9uJztcbmltcG9ydCB7XG4gICAgdHVpU2Nyb2xsRnJvbSxcbiAgICB0dWlab25lZnJlZSxcbiAgICB0dWlab25lZnJlZVNjaGVkdWxlcixcbn0gZnJvbSAnQHRhaWdhLXVpL2Nkay9vYnNlcnZhYmxlcyc7XG5pbXBvcnQge3R1aUluamVjdEVsZW1lbnR9IGZyb20gJ0B0YWlnYS11aS9jZGsvdXRpbHMvZG9tJztcbmltcG9ydCB7VFVJX1NDUk9MTF9SRUZ9IGZyb20gJ0B0YWlnYS11aS9jb3JlL3Rva2Vucyc7XG5pbXBvcnQge21lcmdlLCB0aHJvdHRsZVRpbWV9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1R1aVNjcm9sbGJhclNlcnZpY2V9IGZyb20gJy4vc2Nyb2xsYmFyLnNlcnZpY2UnO1xuXG5jb25zdCBNSU5fV0lEVEggPSAyNDtcblxuaW50ZXJmYWNlIENvbXB1dGVkRGltZW5zaW9uIHtcbiAgICBzY3JvbGxUb3A6IG51bWJlcjtcbiAgICBzY3JvbGxIZWlnaHQ6IG51bWJlcjtcbiAgICBjbGllbnRIZWlnaHQ6IG51bWJlcjtcbiAgICBzY3JvbGxMZWZ0OiBudW1iZXI7XG4gICAgc2Nyb2xsV2lkdGg6IG51bWJlcjtcbiAgICBjbGllbnRXaWR0aDogbnVtYmVyO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnW3R1aVNjcm9sbGJhcl0nLFxuICAgIHByb3ZpZGVyczogW1R1aVNjcm9sbGJhclNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlTY3JvbGxiYXJEaXJlY3RpdmUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZWwgPSBpbmplY3QoVFVJX1NDUk9MTF9SRUYpLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzdHlsZSA9IHR1aUluamVjdEVsZW1lbnQoKS5zdHlsZTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBzY3JvbGxTdWIgPSBpbmplY3QoVHVpU2Nyb2xsYmFyU2VydmljZSlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKFt0b3AsIGxlZnRdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ2F1dG8nO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50dWlTY3JvbGxiYXIgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0eWxlU3ViID0gbWVyZ2UoXG4gICAgICAgIGluamVjdChXQV9BTklNQVRJT05fRlJBTUUpLnBpcGUodGhyb3R0bGVUaW1lKDEwMCwgdHVpWm9uZWZyZWVTY2hlZHVsZXIoKSkpLFxuICAgICAgICB0dWlTY3JvbGxGcm9tKHRoaXMuZWwpLFxuICAgIClcbiAgICAgICAgLnBpcGUodHVpWm9uZWZyZWUoKSwgdGFrZVVudGlsRGVzdHJveWVkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9uOiBDb21wdXRlZERpbWVuc2lvbiA9IHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRoaXMuZWwuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodDogdGhpcy5lbC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgICAgY2xpZW50SGVpZ2h0OiB0aGlzLmVsLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiB0aGlzLmVsLnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsV2lkdGg6IHRoaXMuZWwuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICAgICAgY2xpZW50V2lkdGg6IHRoaXMuZWwuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB0aHVtYiA9IGAke3RoaXMuZ2V0VGh1bWIoZGltZW5zaW9uKSAqIDEwMH0lYDtcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBgJHt0aGlzLmdldFZpZXcoZGltZW5zaW9uKSAqIDEwMH0lYDtcblxuICAgICAgICAgICAgaWYgKHRoaXMudHVpU2Nyb2xsYmFyID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZS50b3AgPSB0aHVtYjtcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IHZpZXc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUubGVmdCA9IHRodW1iO1xuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSB2aWV3O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHR1aVNjcm9sbGJhcjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XG5cbiAgICBwcml2YXRlIGdldFNjcm9sbGVkKGRpbWVuc2lvbjogQ29tcHV0ZWREaW1lbnNpb24pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50dWlTY3JvbGxiYXIgPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgID8gZGltZW5zaW9uLnNjcm9sbFRvcCAvIChkaW1lbnNpb24uc2Nyb2xsSGVpZ2h0IC0gZGltZW5zaW9uLmNsaWVudEhlaWdodClcbiAgICAgICAgICAgIDogZGltZW5zaW9uLnNjcm9sbExlZnQgLyAoZGltZW5zaW9uLnNjcm9sbFdpZHRoIC0gZGltZW5zaW9uLmNsaWVudFdpZHRoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvbXBlbnNhdGlvbihkaW1lbnNpb246IENvbXB1dGVkRGltZW5zaW9uKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKChkaW1lbnNpb24uY2xpZW50SGVpZ2h0ICogZGltZW5zaW9uLmNsaWVudEhlaWdodCkgLyBkaW1lbnNpb24uc2Nyb2xsSGVpZ2h0ID5cbiAgICAgICAgICAgICAgICBNSU5fV0lEVEggJiZcbiAgICAgICAgICAgICAgICB0aGlzLnR1aVNjcm9sbGJhciA9PT0gJ3ZlcnRpY2FsJykgfHxcbiAgICAgICAgICAgICgoZGltZW5zaW9uLmNsaWVudFdpZHRoICogZGltZW5zaW9uLmNsaWVudFdpZHRoKSAvIGRpbWVuc2lvbi5zY3JvbGxXaWR0aCA+XG4gICAgICAgICAgICAgICAgTUlOX1dJRFRIICYmXG4gICAgICAgICAgICAgICAgdGhpcy50dWlTY3JvbGxiYXIgPT09ICdob3Jpem9udGFsJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnR1aVNjcm9sbGJhciA9PT0gJ3ZlcnRpY2FsJ1xuICAgICAgICAgICAgPyBNSU5fV0lEVEggLyBkaW1lbnNpb24uY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICA6IE1JTl9XSURUSCAvIGRpbWVuc2lvbi5jbGllbnRXaWR0aDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRodW1iKGRpbWVuc2lvbjogQ29tcHV0ZWREaW1lbnNpb24pOiBudW1iZXIge1xuICAgICAgICBjb25zdCBjb21wZW5zYXRpb24gPSB0aGlzLmdldENvbXBlbnNhdGlvbihkaW1lbnNpb24pIHx8IHRoaXMuZ2V0VmlldyhkaW1lbnNpb24pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNjcm9sbGVkKGRpbWVuc2lvbikgKiAoMSAtIGNvbXBlbnNhdGlvbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRWaWV3KGRpbWVuc2lvbjogQ29tcHV0ZWREaW1lbnNpb24pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50dWlTY3JvbGxiYXIgPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgICAgID8gTWF0aC5jZWlsKChkaW1lbnNpb24uY2xpZW50SGVpZ2h0IC8gZGltZW5zaW9uLnNjcm9sbEhlaWdodCkgKiAxMDApIC8gMTAwXG4gICAgICAgICAgICA6IE1hdGguY2VpbCgoZGltZW5zaW9uLmNsaWVudFdpZHRoIC8gZGltZW5zaW9uLnNjcm9sbFdpZHRoKSAqIDEwMCkgLyAxMDA7XG4gICAgfVxufVxuIl19