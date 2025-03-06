import { __decorate } from "tslib";
import { ContentChildren, Directive, forwardRef, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MutationObserverService, WA_MUTATION_OBSERVER_INIT, } from '@ng-web-apis/mutation-observer';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiZonefree } from '@taiga-ui/cdk/observables';
import { tuiInjectElement } from '@taiga-ui/cdk/utils/dom';
import { tuiPure, tuiPx } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiTab } from './tab.directive';
import { TuiTabsDirective } from './tabs.directive';
import { TUI_TABS_OPTIONS } from './tabs.options';
import * as i0 from "@angular/core";
import * as i1 from "./tabs.directive";
class TuiTabsHorizontal {
    constructor() {
        this.el = tuiInjectElement();
        this.options = inject(TUI_TABS_OPTIONS);
        this.tabs = inject(TuiTabsDirective);
        this.children = EMPTY_QUERY;
        this.sub = inject(MutationObserverService, { self: true })
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => this.refresh());
        this.underline = this.options.underline;
    }
    ngAfterViewChecked() {
        this.scrollTo(this.tabs.activeItemIndex);
        this.refresh();
    }
    onKeyDownArrow(current, step) {
        this.tabs.moveFocus(current, step);
    }
    refresh() {
        const { activeElement } = this.tabs;
        if (activeElement && !activeElement.isConnected) {
            return;
        }
        const { offsetLeft = 0, offsetWidth = 0 } = activeElement || {};
        this.el.style.setProperty('--t-left', tuiPx(offsetLeft));
        this.el.style.setProperty('--t-width', tuiPx(offsetWidth));
    }
    scrollTo(index) {
        const element = this.tabs.tabs[index];
        if (!element) {
            return;
        }
        const { offsetLeft, offsetWidth } = element;
        if (offsetLeft < this.el.scrollLeft) {
            this.el.scrollLeft = offsetLeft;
        }
        if (offsetLeft + offsetWidth > this.el.scrollLeft + this.el.offsetWidth) {
            this.el.scrollLeft = offsetLeft + offsetWidth - this.el.offsetWidth;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsHorizontal, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTabsHorizontal, isStandalone: true, selector: "tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])", inputs: { underline: "underline" }, host: { listeners: { "animationend": "refresh()", "keydown.arrowRight.prevent": "onKeyDownArrow($event.target, 1)", "keydown.arrowLeft.prevent": "onKeyDownArrow($event.target, -1)" }, properties: { "class._underline": "underline", "style.--t-color": "underline === true ? 'var(--tui-background-accent-1)' : underline" } }, providers: [
            MutationObserverService,
            {
                provide: WA_MUTATION_OBSERVER_INIT,
                useValue: {
                    childList: true,
                    characterData: true,
                    subtree: true,
                },
            },
        ], queries: [{ propertyName: "children", predicate: i0.forwardRef(function () { return TuiTab; }) }], hostDirectives: [{ directive: i1.TuiTabsDirective, inputs: ["activeItemIndex", "activeItemIndex", "size", "size"], outputs: ["activeItemIndexChange", "activeItemIndexChange"] }], ngImport: i0 }); }
}
__decorate([
    tuiPure
], TuiTabsHorizontal.prototype, "scrollTo", null);
export { TuiTabsHorizontal };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTabsHorizontal, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])',
                    providers: [
                        MutationObserverService,
                        {
                            provide: WA_MUTATION_OBSERVER_INIT,
                            useValue: {
                                childList: true,
                                characterData: true,
                                subtree: true,
                            },
                        },
                    ],
                    hostDirectives: [
                        {
                            directive: TuiTabsDirective,
                            inputs: ['activeItemIndex', 'size'],
                            outputs: ['activeItemIndexChange'],
                        },
                    ],
                    host: {
                        '[class._underline]': 'underline',
                        '[style.--t-color]': "underline === true ? 'var(--tui-background-accent-1)' : underline",
                        '(animationend)': 'refresh()',
                        '(keydown.arrowRight.prevent)': 'onKeyDownArrow($event.target, 1)',
                        '(keydown.arrowLeft.prevent)': 'onKeyDownArrow($event.target, -1)',
                    },
                }]
        }], propDecorators: { children: [{
                type: ContentChildren,
                args: [forwardRef(() => TuiTab)]
            }], underline: [{
                type: Input
            }], scrollTo: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1ob3Jpem9udGFsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL3RhYnMvdGFicy1ob3Jpem9udGFsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUNILHVCQUF1QixFQUN2Qix5QkFBeUIsR0FDNUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFakUsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7QUFFaEQsTUE4QmEsaUJBQWlCO0lBOUI5QjtRQStCcUIsT0FBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25DLFNBQUksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUc5QixhQUFRLEdBQXVCLFdBQVcsQ0FBQztRQUUzQyxRQUFHLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixFQUFFLEVBQUMsSUFB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RSxNQUFNLENBQUM7NEJBQ25DLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO3lCQUNyQztxQkFDSjtvQkFDRCxJQUFJLEVBQUU7d0JBQ0Ysb0JBQW9CLEVBQUUsV0FBVzt3QkFDakMsbUJBQW1CLEVBQ2YsbUVBQW1FO3dCQUN2RSxnQkFBZ0IsRUFBRSxXQUFXO3dCQUM3Qiw4QkFBOEIsRUFBRSxrQ0FBa0M7d0JBQ2xFLDZCQUE2QixFQUFFLG1DQUFtQztxQkFDckU7aUJBQ0o7OEJBT3NCLFFBQVE7c0JBRDFCLGVBQWU7dUJBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFRbEMsU0FBUztzQkFEZixLQUFLO2dCQTBCRSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FmdGVyVmlld0NoZWNrZWQsIFF1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBpbmplY3QsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge1xuICAgIE11dGF0aW9uT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgIFdBX01VVEFUSU9OX09CU0VSVkVSX0lOSVQsXG59IGZyb20gJ0BuZy13ZWItYXBpcy9tdXRhdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQge0VNUFRZX1FVRVJZfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge3R1aVpvbmVmcmVlfSBmcm9tICdAdGFpZ2EtdWkvY2RrL29ic2VydmFibGVzJztcbmltcG9ydCB7dHVpSW5qZWN0RWxlbWVudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9kb20nO1xuaW1wb3J0IHt0dWlQdXJlLCB0dWlQeH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcblxuaW1wb3J0IHtUdWlUYWJ9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1R1aVRhYnNEaXJlY3RpdmV9IGZyb20gJy4vdGFicy5kaXJlY3RpdmUnO1xuaW1wb3J0IHtUVUlfVEFCU19PUFRJT05TfSBmcm9tICcuL3RhYnMub3B0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktdGFiczpub3QoW3ZlcnRpY2FsXSksIG5hdlt0dWlUYWJzXTpub3QoW3ZlcnRpY2FsXSknLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNdXRhdGlvbk9ic2VydmVyU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogV0FfTVVUQVRJT05fT0JTRVJWRVJfSU5JVCxcbiAgICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0RGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3RpdmU6IFR1aVRhYnNEaXJlY3RpdmUsXG4gICAgICAgICAgICBpbnB1dHM6IFsnYWN0aXZlSXRlbUluZGV4JywgJ3NpemUnXSxcbiAgICAgICAgICAgIG91dHB1dHM6IFsnYWN0aXZlSXRlbUluZGV4Q2hhbmdlJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3MuX3VuZGVybGluZV0nOiAndW5kZXJsaW5lJyxcbiAgICAgICAgJ1tzdHlsZS4tLXQtY29sb3JdJzpcbiAgICAgICAgICAgIFwidW5kZXJsaW5lID09PSB0cnVlID8gJ3ZhcigtLXR1aS1iYWNrZ3JvdW5kLWFjY2VudC0xKScgOiB1bmRlcmxpbmVcIixcbiAgICAgICAgJyhhbmltYXRpb25lbmQpJzogJ3JlZnJlc2goKScsXG4gICAgICAgICcoa2V5ZG93bi5hcnJvd1JpZ2h0LnByZXZlbnQpJzogJ29uS2V5RG93bkFycm93KCRldmVudC50YXJnZXQsIDEpJyxcbiAgICAgICAgJyhrZXlkb3duLmFycm93TGVmdC5wcmV2ZW50KSc6ICdvbktleURvd25BcnJvdygkZXZlbnQudGFyZ2V0LCAtMSknLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aVRhYnNIb3Jpem9udGFsIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbCA9IHR1aUluamVjdEVsZW1lbnQoKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnMgPSBpbmplY3QoVFVJX1RBQlNfT1BUSU9OUyk7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0YWJzID0gaW5qZWN0KFR1aVRhYnNEaXJlY3RpdmUpO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFR1aVRhYikpXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNoaWxkcmVuOiBRdWVyeUxpc3Q8dW5rbm93bj4gPSBFTVBUWV9RVUVSWTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBzdWIgPSBpbmplY3QoTXV0YXRpb25PYnNlcnZlclNlcnZpY2UsIHtzZWxmOiB0cnVlfSlcbiAgICAgICAgLnBpcGUodHVpWm9uZWZyZWUoKSwgdGFrZVVudGlsRGVzdHJveWVkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdW5kZXJsaW5lID0gdGhpcy5vcHRpb25zLnVuZGVybGluZTtcblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy50YWJzLmFjdGl2ZUl0ZW1JbmRleCk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleURvd25BcnJvdyhjdXJyZW50OiBIVE1MRWxlbWVudCwgc3RlcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFicy5tb3ZlRm9jdXMoY3VycmVudCwgc3RlcCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHthY3RpdmVFbGVtZW50fSA9IHRoaXMudGFicztcblxuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCAmJiAhYWN0aXZlRWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge29mZnNldExlZnQgPSAwLCBvZmZzZXRXaWR0aCA9IDB9ID0gYWN0aXZlRWxlbWVudCB8fCB7fTtcblxuICAgICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCctLXQtbGVmdCcsIHR1aVB4KG9mZnNldExlZnQpKTtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10LXdpZHRoJywgdHVpUHgob2Zmc2V0V2lkdGgpKTtcbiAgICB9XG5cbiAgICBAdHVpUHVyZVxuICAgIHByaXZhdGUgc2Nyb2xsVG8oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50YWJzLnRhYnNbaW5kZXhdO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge29mZnNldExlZnQsIG9mZnNldFdpZHRofSA9IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKG9mZnNldExlZnQgPCB0aGlzLmVsLnNjcm9sbExlZnQpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2Nyb2xsTGVmdCA9IG9mZnNldExlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2Zmc2V0TGVmdCArIG9mZnNldFdpZHRoID4gdGhpcy5lbC5zY3JvbGxMZWZ0ICsgdGhpcy5lbC5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5lbC5zY3JvbGxMZWZ0ID0gb2Zmc2V0TGVmdCArIG9mZnNldFdpZHRoIC0gdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==