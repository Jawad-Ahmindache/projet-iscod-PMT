import { AsyncPipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, inject, TemplateRef, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MutationObserverService, WA_MUTATION_OBSERVER_INIT, } from '@ng-web-apis/mutation-observer';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { TuiItemsWithMoreDirective } from './items-with-more.directive';
import { TuiItemsWithMoreService } from './items-with-more.service';
import { TuiMore } from './more.directive';
import * as i0 from "@angular/core";
import * as i1 from "./items-with-more.directive";
class TuiItemsWithMoreComponent {
    constructor() {
        this.items = EMPTY_QUERY;
        this.directive = inject(TuiItemsWithMoreDirective);
        this.lastIndex = toSignal(inject(TuiItemsWithMoreService), {
            initialValue: 0,
        });
    }
    get isMoreHidden() {
        const { side } = this.directive;
        return ((this.lastIndex() >= this.items.length - 1 && side === 'end') ||
            (!this.lastIndex() && side === 'start'));
    }
    isHidden(index) {
        const { side, required } = this.directive;
        return ((index > this.lastIndex() && index !== required && side === 'end') ||
            (index < this.lastIndex() && index !== required && side === 'start'));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiItemsWithMoreComponent, isStandalone: true, selector: "tui-items-with-more", providers: [
            MutationObserverService,
            ResizeObserverService,
            TuiItemsWithMoreService,
            {
                provide: WA_MUTATION_OBSERVER_INIT,
                useValue: {
                    childList: true,
                    characterData: true,
                    subtree: true,
                },
            },
        ], queries: [{ propertyName: "more", first: true, predicate: TuiMore, descendants: true, read: TemplateRef }, { propertyName: "items", predicate: TuiItem, descendants: true, read: TemplateRef }], hostDirectives: [{ directive: i1.TuiItemsWithMoreDirective, inputs: ["itemsLimit", "itemsLimit", "required", "required", "side", "side"] }], ngImport: i0, template: "<ng-container *ngIf=\"items.changes | async\" />\n<ng-container\n    *ngIf=\"directive.side === 'start'\"\n    [ngTemplateOutlet]=\"template\"\n/>\n<div\n    *ngFor=\"let item of items; let index = index\"\n    class=\"t-item\"\n    [class.t-item_hidden]=\"isHidden(index)\"\n>\n    <ng-container *ngTemplateOutlet=\"item\" />\n</div>\n<ng-container\n    *ngIf=\"directive.side === 'end'\"\n    [ngTemplateOutlet]=\"template\"\n/>\n<ng-template #template>\n    <span\n        *ngIf=\"!isMoreHidden\"\n        class=\"t-item\"\n    >\n        <ng-container\n            [ngTemplateOutlet]=\"more || null\"\n            [ngTemplateOutletContext]=\"{$implicit: lastIndex()}\"\n        />\n    </span>\n</ng-template>\n", styles: [":host{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap}.t-item{flex:0 0 auto}.t-item_hidden{position:absolute;visibility:hidden}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { TuiItemsWithMoreComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiItemsWithMoreComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'tui-items-with-more', imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet], changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        MutationObserverService,
                        ResizeObserverService,
                        TuiItemsWithMoreService,
                        {
                            provide: WA_MUTATION_OBSERVER_INIT,
                            useValue: {
                                childList: true,
                                characterData: true,
                                subtree: true,
                            },
                        },
                    ], hostDirectives: [
                        {
                            directive: TuiItemsWithMoreDirective,
                            inputs: ['itemsLimit', 'required', 'side'],
                        },
                    ], template: "<ng-container *ngIf=\"items.changes | async\" />\n<ng-container\n    *ngIf=\"directive.side === 'start'\"\n    [ngTemplateOutlet]=\"template\"\n/>\n<div\n    *ngFor=\"let item of items; let index = index\"\n    class=\"t-item\"\n    [class.t-item_hidden]=\"isHidden(index)\"\n>\n    <ng-container *ngTemplateOutlet=\"item\" />\n</div>\n<ng-container\n    *ngIf=\"directive.side === 'end'\"\n    [ngTemplateOutlet]=\"template\"\n/>\n<ng-template #template>\n    <span\n        *ngIf=\"!isMoreHidden\"\n        class=\"t-item\"\n    >\n        <ng-container\n            [ngTemplateOutlet]=\"more || null\"\n            [ngTemplateOutletContext]=\"{$implicit: lastIndex()}\"\n        />\n    </span>\n</ng-template>\n", styles: [":host{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap}.t-item{flex:0 0 auto}.t-item_hidden{position:absolute;visibility:hidden}\n"] }]
        }], propDecorators: { items: [{
                type: ContentChildren,
                args: [TuiItem, { read: TemplateRef, descendants: true }]
            }], more: [{
                type: ContentChild,
                args: [TuiMore, { read: TemplateRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtd2l0aC1tb3JlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL2l0ZW1zLXdpdGgtbW9yZS9pdGVtcy13aXRoLW1vcmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva2l0L2NvbXBvbmVudHMvaXRlbXMtd2l0aC1tb3JlL2l0ZW1zLXdpdGgtbW9yZS50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTNFLE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixlQUFlLEVBQ2YsTUFBTSxFQUNOLFdBQVcsR0FDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDcEQsT0FBTyxFQUNILHVCQUF1QixFQUN2Qix5QkFBeUIsR0FDNUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBR3RELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRXpDLE1BMkJhLHlCQUF5QjtJQTNCdEM7UUE2QnVCLFVBQUssR0FBb0MsV0FBVyxDQUFDO1FBS3JELGNBQVMsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM5QyxjQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQ3JFLFlBQVksRUFBRSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztLQW1CTjtJQWpCRyxJQUFjLFlBQVk7UUFDdEIsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFOUIsT0FBTyxDQUNILENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDO1lBQzdELENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUMxQyxDQUFDO0lBQ04sQ0FBQztJQUVTLFFBQVEsQ0FBQyxLQUFhO1FBQzVCLE1BQU0sRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUV4QyxPQUFPLENBQ0gsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQztZQUNsRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksS0FBSyxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLENBQ3ZFLENBQUM7SUFDTixDQUFDOytHQTVCUSx5QkFBeUI7bUdBQXpCLHlCQUF5QixrRUFwQnZCO1lBQ1AsdUJBQXVCO1lBQ3ZCLHFCQUFxQjtZQUNyQix1QkFBdUI7WUFDdkI7Z0JBQ0ksT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsUUFBUSxFQUFFO29CQUNOLFNBQVMsRUFBRSxJQUFJO29CQUNmLGFBQWEsRUFBRSxJQUFJO29CQUNuQixPQUFPLEVBQUUsSUFBSTtpQkFDaEI7YUFDSjtTQUNKLDREQVlhLE9BQU8sMkJBQVMsV0FBVyx3Q0FIeEIsT0FBTywyQkFBUyxXQUFXLDBLQ3BEaEQsNnNCQTJCQSxvT0RBYyxTQUFTLDhDQUFFLE9BQU8sbUhBQUUsSUFBSSw2RkFBRSxnQkFBZ0I7O1NBd0IzQyx5QkFBeUI7NEZBQXpCLHlCQUF5QjtrQkEzQnJDLFNBQVM7aUNBQ00sSUFBSSxZQUNOLHFCQUFxQixXQUN0QixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLG1CQUdwQyx1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO3dCQUNQLHVCQUF1Qjt3QkFDdkIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCOzRCQUNJLE9BQU8sRUFBRSx5QkFBeUI7NEJBQ2xDLFFBQVEsRUFBRTtnQ0FDTixTQUFTLEVBQUUsSUFBSTtnQ0FDZixhQUFhLEVBQUUsSUFBSTtnQ0FDbkIsT0FBTyxFQUFFLElBQUk7NkJBQ2hCO3lCQUNKO3FCQUNKLGtCQUNlO3dCQUNaOzRCQUNJLFNBQVMsRUFBRSx5QkFBeUI7NEJBQ3BDLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDO3lCQUM3QztxQkFDSjs4QkFJa0IsS0FBSztzQkFEdkIsZUFBZTt1QkFBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUM7Z0JBSTdDLElBQUk7c0JBRHRCLFlBQVk7dUJBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNQaXBlLCBOZ0Zvck9mLCBOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge1F1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIGluamVjdCxcbiAgICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RvU2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge1xuICAgIE11dGF0aW9uT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgIFdBX01VVEFUSU9OX09CU0VSVkVSX0lOSVQsXG59IGZyb20gJ0BuZy13ZWItYXBpcy9tdXRhdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQge1Jlc2l6ZU9ic2VydmVyU2VydmljZX0gZnJvbSAnQG5nLXdlYi1hcGlzL3Jlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQge0VNUFRZX1FVRVJZfSBmcm9tICdAdGFpZ2EtdWkvY2RrL2NvbnN0YW50cyc7XG5pbXBvcnQge1R1aUl0ZW19IGZyb20gJ0B0YWlnYS11aS9jZGsvZGlyZWN0aXZlcy9pdGVtJztcbmltcG9ydCB0eXBlIHtUdWlDb250ZXh0fSBmcm9tICdAdGFpZ2EtdWkvY2RrL3R5cGVzJztcblxuaW1wb3J0IHtUdWlJdGVtc1dpdGhNb3JlRGlyZWN0aXZlfSBmcm9tICcuL2l0ZW1zLXdpdGgtbW9yZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtUdWlJdGVtc1dpdGhNb3JlU2VydmljZX0gZnJvbSAnLi9pdGVtcy13aXRoLW1vcmUuc2VydmljZSc7XG5pbXBvcnQge1R1aU1vcmV9IGZyb20gJy4vbW9yZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAndHVpLWl0ZW1zLXdpdGgtbW9yZScsXG4gICAgaW1wb3J0czogW0FzeW5jUGlwZSwgTmdGb3JPZiwgTmdJZiwgTmdUZW1wbGF0ZU91dGxldF0sXG4gICAgdGVtcGxhdGVVcmw6ICcuL2l0ZW1zLXdpdGgtbW9yZS50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pdGVtcy13aXRoLW1vcmUuc3R5bGUubGVzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBNdXRhdGlvbk9ic2VydmVyU2VydmljZSxcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBUdWlJdGVtc1dpdGhNb3JlU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogV0FfTVVUQVRJT05fT0JTRVJWRVJfSU5JVCxcbiAgICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0RGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3RpdmU6IFR1aUl0ZW1zV2l0aE1vcmVEaXJlY3RpdmUsXG4gICAgICAgICAgICBpbnB1dHM6IFsnaXRlbXNMaW1pdCcsICdyZXF1aXJlZCcsICdzaWRlJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVHVpSXRlbXNXaXRoTW9yZUNvbXBvbmVudCB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihUdWlJdGVtLCB7cmVhZDogVGVtcGxhdGVSZWYsIGRlc2NlbmRhbnRzOiB0cnVlfSlcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaXRlbXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjx1bmtub3duPj4gPSBFTVBUWV9RVUVSWTtcblxuICAgIEBDb250ZW50Q2hpbGQoVHVpTW9yZSwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbW9yZT86IFRlbXBsYXRlUmVmPFR1aUNvbnRleHQ8bnVtYmVyPj47XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGlyZWN0aXZlID0gaW5qZWN0KFR1aUl0ZW1zV2l0aE1vcmVEaXJlY3RpdmUpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBsYXN0SW5kZXggPSB0b1NpZ25hbChpbmplY3QoVHVpSXRlbXNXaXRoTW9yZVNlcnZpY2UpLCB7XG4gICAgICAgIGluaXRpYWxWYWx1ZTogMCxcbiAgICB9KTtcblxuICAgIHByb3RlY3RlZCBnZXQgaXNNb3JlSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7c2lkZX0gPSB0aGlzLmRpcmVjdGl2ZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKHRoaXMubGFzdEluZGV4KCkgPj0gdGhpcy5pdGVtcy5sZW5ndGggLSAxICYmIHNpZGUgPT09ICdlbmQnKSB8fFxuICAgICAgICAgICAgKCF0aGlzLmxhc3RJbmRleCgpICYmIHNpZGUgPT09ICdzdGFydCcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzSGlkZGVuKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qge3NpZGUsIHJlcXVpcmVkfSA9IHRoaXMuZGlyZWN0aXZlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaW5kZXggPiB0aGlzLmxhc3RJbmRleCgpICYmIGluZGV4ICE9PSByZXF1aXJlZCAmJiBzaWRlID09PSAnZW5kJykgfHxcbiAgICAgICAgICAgIChpbmRleCA8IHRoaXMubGFzdEluZGV4KCkgJiYgaW5kZXggIT09IHJlcXVpcmVkICYmIHNpZGUgPT09ICdzdGFydCcpXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1zLmNoYW5nZXMgfCBhc3luY1wiIC8+XG48bmctY29udGFpbmVyXG4gICAgKm5nSWY9XCJkaXJlY3RpdmUuc2lkZSA9PT0gJ3N0YXJ0J1wiXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIlxuLz5cbjxkaXZcbiAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGluZGV4ID0gaW5kZXhcIlxuICAgIGNsYXNzPVwidC1pdGVtXCJcbiAgICBbY2xhc3MudC1pdGVtX2hpZGRlbl09XCJpc0hpZGRlbihpbmRleClcIlxuPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtXCIgLz5cbjwvZGl2PlxuPG5nLWNvbnRhaW5lclxuICAgICpuZ0lmPVwiZGlyZWN0aXZlLnNpZGUgPT09ICdlbmQnXCJcbiAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiXG4vPlxuPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cbiAgICA8c3BhblxuICAgICAgICAqbmdJZj1cIiFpc01vcmVIaWRkZW5cIlxuICAgICAgICBjbGFzcz1cInQtaXRlbVwiXG4gICAgPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJtb3JlIHx8IG51bGxcIlxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IGxhc3RJbmRleCgpfVwiXG4gICAgICAgIC8+XG4gICAgPC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==