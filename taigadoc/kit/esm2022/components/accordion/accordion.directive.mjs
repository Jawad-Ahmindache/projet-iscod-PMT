import { ContentChildren, DestroyRef, Directive, inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY_QUERY } from '@taiga-ui/cdk/constants';
import { tuiQueryListChanges } from '@taiga-ui/cdk/observables';
import { tuiIsPresent } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiGroup } from '@taiga-ui/core/directives/group';
import { filter, identity, map, merge, pairwise, switchMap } from 'rxjs';
import { TuiAccordionItem } from './accordion-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/group";
class TuiAccordionDirective {
    constructor() {
        this.destroyRef = inject(DestroyRef);
        this.accordionItems = EMPTY_QUERY;
        this.closeOthers = true;
        // Not using DI options to avoid changed defaults spilling to content
        const group = inject(TuiGroup);
        group.orientation = 'vertical';
        group.collapsed = true;
    }
    ngAfterContentInit() {
        const { accordionItems } = this;
        const rows$ = tuiQueryListChanges(accordionItems);
        const newOpenRow$ = rows$.pipe(pairwise(), map(([previous, current]) => current.find((item) => !previous.includes(item) && item.open)), filter(tuiIsPresent));
        const rowsOpen$ = merge(rows$.pipe(switchMap((rows) => merge(...rows.map((row) => row.openChange.pipe(filter(identity), map(() => row)))))), newOpenRow$).pipe(filter(() => this.closeOthers), takeUntilDestroyed(this.destroyRef));
        rowsOpen$.subscribe((currentRow) => {
            accordionItems.forEach((row) => {
                if (currentRow !== row) {
                    row.close();
                }
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiAccordionDirective, isStandalone: true, selector: "tui-accordion", inputs: { closeOthers: "closeOthers" }, queries: [{ propertyName: "accordionItems", predicate: TuiAccordionItem }], hostDirectives: [{ directive: i1.TuiGroup, inputs: ["rounded", "rounded"] }], ngImport: i0 }); }
}
export { TuiAccordionDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiAccordionDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-accordion',
                    hostDirectives: [
                        {
                            directive: TuiGroup,
                            inputs: ['rounded'],
                        },
                    ],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { accordionItems: [{
                type: ContentChildren,
                args: [TuiAccordionItem]
            }], closeOthers: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2tpdC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxlQUFlLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDL0QsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pELE9BQU8sRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV2RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRTVELE1BVWEscUJBQXFCO0lBUzlCO1FBUmlCLGVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFHOUIsbUJBQWMsR0FBZ0MsV0FBVyxDQUFDO1FBR3RFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR3RCLHFFQUFxRTtRQUNyRSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0IsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDL0IsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVNLGtCQUFrQjtRQUNyQixNQUFNLEVBQUMsY0FBYyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzlCLE1BQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQzFCLFFBQVEsRUFBRSxFQUNWLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDaEUsRUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQ3ZCLENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQ25CLEtBQUssQ0FBQyxJQUFJLENBQ04sU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDZixLQUFLLENBQ0QsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDaEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUNoQixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQ2pCLENBQ0osQ0FDSixDQUNKLENBQ0osRUFDRCxXQUFXLENBQ2QsQ0FBQyxJQUFJLENBQ0YsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDOUIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUN0QyxDQUFDO1FBRUYsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQy9CLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDM0IsSUFBSSxVQUFVLEtBQUssR0FBRyxFQUFFO29CQUNwQixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2Y7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzsrR0FyRFEscUJBQXFCO21HQUFyQixxQkFBcUIsZ0pBR2IsZ0JBQWdCOztTQUh4QixxQkFBcUI7NEZBQXJCLHFCQUFxQjtrQkFWakMsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGNBQWMsRUFBRTt3QkFDWjs0QkFDSSxTQUFTLEVBQUUsUUFBUTs0QkFDbkIsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3lCQUN0QjtxQkFDSjtpQkFDSjswRUFLc0IsY0FBYztzQkFEaEMsZUFBZTt1QkFBQyxnQkFBZ0I7Z0JBSTFCLFdBQVc7c0JBRGpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50SW5pdCwgUXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udGVudENoaWxkcmVuLCBEZXN0cm95UmVmLCBEaXJlY3RpdmUsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlVW50aWxEZXN0cm95ZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7RU1QVFlfUVVFUll9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB7dHVpUXVlcnlMaXN0Q2hhbmdlc30gZnJvbSAnQHRhaWdhLXVpL2Nkay9vYnNlcnZhYmxlcyc7XG5pbXBvcnQge3R1aUlzUHJlc2VudH0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB7VHVpR3JvdXB9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2RpcmVjdGl2ZXMvZ3JvdXAnO1xuaW1wb3J0IHtmaWx0ZXIsIGlkZW50aXR5LCBtYXAsIG1lcmdlLCBwYWlyd2lzZSwgc3dpdGNoTWFwfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUdWlBY2NvcmRpb25JdGVtfSBmcm9tICcuL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktYWNjb3JkaW9uJyxcbiAgICBob3N0RGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3RpdmU6IFR1aUdyb3VwLFxuICAgICAgICAgICAgaW5wdXRzOiBbJ3JvdW5kZWQnXSxcbiAgICAgICAgfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlBY2NvcmRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3lSZWYgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFR1aUFjY29yZGlvbkl0ZW0pXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGFjY29yZGlvbkl0ZW1zOiBRdWVyeUxpc3Q8VHVpQWNjb3JkaW9uSXRlbT4gPSBFTVBUWV9RVUVSWTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGNsb3NlT3RoZXJzID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBOb3QgdXNpbmcgREkgb3B0aW9ucyB0byBhdm9pZCBjaGFuZ2VkIGRlZmF1bHRzIHNwaWxsaW5nIHRvIGNvbnRlbnRcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBpbmplY3QoVHVpR3JvdXApO1xuXG4gICAgICAgIGdyb3VwLm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgZ3JvdXAuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCB7YWNjb3JkaW9uSXRlbXN9ID0gdGhpcztcbiAgICAgICAgY29uc3Qgcm93cyQgPSB0dWlRdWVyeUxpc3RDaGFuZ2VzKGFjY29yZGlvbkl0ZW1zKTtcbiAgICAgICAgY29uc3QgbmV3T3BlblJvdyQgPSByb3dzJC5waXBlKFxuICAgICAgICAgICAgcGFpcndpc2UoKSxcbiAgICAgICAgICAgIG1hcCgoW3ByZXZpb3VzLCBjdXJyZW50XSkgPT5cbiAgICAgICAgICAgICAgICBjdXJyZW50LmZpbmQoKGl0ZW0pID0+ICFwcmV2aW91cy5pbmNsdWRlcyhpdGVtKSAmJiBpdGVtLm9wZW4pLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGZpbHRlcih0dWlJc1ByZXNlbnQpLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCByb3dzT3BlbiQgPSBtZXJnZShcbiAgICAgICAgICAgIHJvd3MkLnBpcGUoXG4gICAgICAgICAgICAgICAgc3dpdGNoTWFwKChyb3dzKSA9PlxuICAgICAgICAgICAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJvd3MubWFwKChyb3cpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Lm9wZW5DaGFuZ2UucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyKGlkZW50aXR5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwKCgpID0+IHJvdyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBuZXdPcGVuUm93JCxcbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuY2xvc2VPdGhlcnMpLFxuICAgICAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveVJlZiksXG4gICAgICAgICk7XG5cbiAgICAgICAgcm93c09wZW4kLnN1YnNjcmliZSgoY3VycmVudFJvdykgPT4ge1xuICAgICAgICAgICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSb3cgIT09IHJvdykge1xuICAgICAgICAgICAgICAgICAgICByb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19