import { __decorate } from "tslib";
import { inject, Pipe } from '@angular/core';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk/constants';
import { tuiPure } from '@taiga-ui/cdk/utils/miscellaneous';
import { TUI_DATA_LIST_HOST } from '@taiga-ui/core/components/data-list';
import { TuiTextfieldComponent } from '@taiga-ui/core/components/textfield';
import { tuiIsFlat } from '@taiga-ui/kit/utils';
import * as i0 from "@angular/core";
// TODO: Consider replacing TuiTextfieldComponent with proper token once we refactor textfields
class TuiFilterByInputPipe {
    constructor() {
        // TODO: Remove optional after legacy controls are dropped
        this.textfield = inject(TuiTextfieldComponent, { optional: true });
        this.host = inject(TUI_DATA_LIST_HOST);
    }
    transform(items, matcher = TUI_DEFAULT_MATCHER) {
        return this.filter(items, matcher, this.host.stringify || String, this.textfield?.input?.nativeElement.value ||
            this.host.nativeFocusableElement?.value ||
            '');
    }
    filter(items, matcher, stringify, query) {
        if (!items) {
            return null;
        }
        return tuiIsFlat(items)
            ? this.filterFlat(items, matcher, stringify, query)
            : this.filter2d(items, matcher, stringify, query);
    }
    filterFlat(items, matcher, stringify, query) {
        const match = this.getMatch(items, stringify, query);
        return match != null
            ? items
            : items.filter((item) => matcher(item, query, stringify));
    }
    filter2d(items, matcher, stringify, query) {
        const match = items.find((item) => this.getMatch(item, stringify, query) != null);
        return match != null
            ? items
            : items.map((inner) => this.filterFlat(inner, matcher, stringify, query));
    }
    getMatch(items, stringify, query) {
        // TODO: Refactor when tui-textfield[multi] is ready
        if (this.host.tagValidator) {
            return undefined;
        }
        return items.find((item) => stringify(item).toLocaleLowerCase() === query.toLocaleLowerCase());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFilterByInputPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TuiFilterByInputPipe, isStandalone: true, name: "tuiFilterByInput", pure: false }); }
}
__decorate([
    tuiPure
], TuiFilterByInputPipe.prototype, "filter", null);
export { TuiFilterByInputPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiFilterByInputPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'tuiFilterByInput',
                    pure: false,
                }]
        }], propDecorators: { filter: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ5LWlucHV0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvcGlwZXMvZmlsdGVyLWJ5LWlucHV0L2ZpbHRlci1ieS1pbnB1dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUU1RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDOztBQUU5QywrRkFBK0Y7QUFDL0YsTUFLYSxvQkFBb0I7SUFMakM7UUFNSSwwREFBMEQ7UUFDekMsY0FBUyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzVELFNBQUksR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztLQXlFdEQ7SUF0RVUsU0FBUyxDQUNaLEtBQXdELEVBQ3hELFVBQStCLG1CQUFtQjtRQUVsRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQ2QsS0FBSyxFQUNMLE9BQU8sRUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFNLEVBQzdCLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLO1lBQ3JDLElBQUksQ0FBQyxJQUFZLENBQUMsc0JBQXNCLEVBQUUsS0FBSztZQUNoRCxFQUFFLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFHTyxNQUFNLENBQ1YsS0FBd0QsRUFDeEQsT0FBNEIsRUFDNUIsU0FBOEIsRUFDOUIsS0FBYTtRQUViLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU8sVUFBVSxDQUNkLEtBQW1CLEVBQ25CLE9BQTRCLEVBQzVCLFNBQThCLEVBQzlCLEtBQWE7UUFFYixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFckQsT0FBTyxLQUFLLElBQUksSUFBSTtZQUNoQixDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTyxRQUFRLENBQ1osS0FBa0MsRUFDbEMsT0FBNEIsRUFDNUIsU0FBOEIsRUFDOUIsS0FBYTtRQUViLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUVsRixPQUFPLEtBQUssSUFBSSxJQUFJO1lBQ2hCLENBQUMsQ0FBQyxLQUFLO1lBQ1AsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU8sUUFBUSxDQUNaLEtBQW1CLEVBQ25CLFNBQThCLEVBQzlCLEtBQWE7UUFFYixvREFBb0Q7UUFDcEQsSUFBSyxJQUFJLENBQUMsSUFBWSxDQUFDLFlBQVksRUFBRTtZQUNqQyxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FDYixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEtBQUssS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQzlFLENBQUM7SUFDTixDQUFDOytHQTNFUSxvQkFBb0I7NkdBQXBCLG9CQUFvQjs7QUFxQnJCO0lBRFAsT0FBTztrREFjUDtTQWxDUSxvQkFBb0I7NEZBQXBCLG9CQUFvQjtrQkFMaEMsSUFBSTttQkFBQztvQkFDRixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtvQkFDeEIsSUFBSSxFQUFFLEtBQUs7aUJBQ2Q7OEJBc0JXLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7UGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2luamVjdCwgUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RVSV9ERUZBVUxUX01BVENIRVJ9IGZyb20gJ0B0YWlnYS11aS9jZGsvY29uc3RhbnRzJztcbmltcG9ydCB0eXBlIHtUdWlTdHJpbmdIYW5kbGVyLCBUdWlTdHJpbmdNYXRjaGVyfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3R5cGVzJztcbmltcG9ydCB7dHVpUHVyZX0gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB7VFVJX0RBVEFfTElTVF9IT1NUfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL2RhdGEtbGlzdCc7XG5pbXBvcnQge1R1aVRleHRmaWVsZENvbXBvbmVudH0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy90ZXh0ZmllbGQnO1xuaW1wb3J0IHt0dWlJc0ZsYXR9IGZyb20gJ0B0YWlnYS11aS9raXQvdXRpbHMnO1xuXG4vLyBUT0RPOiBDb25zaWRlciByZXBsYWNpbmcgVHVpVGV4dGZpZWxkQ29tcG9uZW50IHdpdGggcHJvcGVyIHRva2VuIG9uY2Ugd2UgcmVmYWN0b3IgdGV4dGZpZWxkc1xuQFBpcGUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgbmFtZTogJ3R1aUZpbHRlckJ5SW5wdXQnLFxuICAgIHB1cmU6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBUdWlGaWx0ZXJCeUlucHV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBvcHRpb25hbCBhZnRlciBsZWdhY3kgY29udHJvbHMgYXJlIGRyb3BwZWRcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHRmaWVsZCA9IGluamVjdChUdWlUZXh0ZmllbGRDb21wb25lbnQsIHtvcHRpb25hbDogdHJ1ZX0pO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaG9zdCA9IGluamVjdChUVUlfREFUQV9MSVNUX0hPU1QpO1xuXG4gICAgcHVibGljIHRyYW5zZm9ybTxUPihpdGVtczogcmVhZG9ubHkgVFtdLCBtYXRjaGVyPzogVHVpU3RyaW5nTWF0Y2hlcjxUPik6IHJlYWRvbmx5IFRbXTtcbiAgICBwdWJsaWMgdHJhbnNmb3JtPFQ+KFxuICAgICAgICBpdGVtczogUmVhZG9ubHlBcnJheTxyZWFkb25seSBUW10+IHwgcmVhZG9ubHkgVFtdIHwgbnVsbCxcbiAgICAgICAgbWF0Y2hlcjogVHVpU3RyaW5nTWF0Y2hlcjxUPiA9IFRVSV9ERUZBVUxUX01BVENIRVIsXG4gICAgKTogUmVhZG9ubHlBcnJheTxyZWFkb25seSBUW10+IHwgcmVhZG9ubHkgVFtdIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcjxUPihcbiAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgICAgbWF0Y2hlcixcbiAgICAgICAgICAgIHRoaXMuaG9zdC5zdHJpbmdpZnkgfHwgU3RyaW5nLFxuICAgICAgICAgICAgdGhpcy50ZXh0ZmllbGQ/LmlucHV0Py5uYXRpdmVFbGVtZW50LnZhbHVlIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuaG9zdCBhcyBhbnkpLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQ/LnZhbHVlIHx8XG4gICAgICAgICAgICAgICAgJycsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgQHR1aVB1cmVcbiAgICBwcml2YXRlIGZpbHRlcjxUPihcbiAgICAgICAgaXRlbXM6IFJlYWRvbmx5QXJyYXk8cmVhZG9ubHkgVFtdPiB8IHJlYWRvbmx5IFRbXSB8IG51bGwsXG4gICAgICAgIG1hdGNoZXI6IFR1aVN0cmluZ01hdGNoZXI8VD4sXG4gICAgICAgIHN0cmluZ2lmeTogVHVpU3RyaW5nSGFuZGxlcjxUPixcbiAgICAgICAgcXVlcnk6IHN0cmluZyxcbiAgICApOiBSZWFkb25seUFycmF5PHJlYWRvbmx5IFRbXT4gfCByZWFkb25seSBUW10gfCBudWxsIHtcbiAgICAgICAgaWYgKCFpdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHVpSXNGbGF0KGl0ZW1zKVxuICAgICAgICAgICAgPyB0aGlzLmZpbHRlckZsYXQoaXRlbXMsIG1hdGNoZXIsIHN0cmluZ2lmeSwgcXVlcnkpXG4gICAgICAgICAgICA6IHRoaXMuZmlsdGVyMmQoaXRlbXMsIG1hdGNoZXIsIHN0cmluZ2lmeSwgcXVlcnkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyRmxhdDxUPihcbiAgICAgICAgaXRlbXM6IHJlYWRvbmx5IFRbXSxcbiAgICAgICAgbWF0Y2hlcjogVHVpU3RyaW5nTWF0Y2hlcjxUPixcbiAgICAgICAgc3RyaW5naWZ5OiBUdWlTdHJpbmdIYW5kbGVyPFQ+LFxuICAgICAgICBxdWVyeTogc3RyaW5nLFxuICAgICk6IHJlYWRvbmx5IFRbXSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5nZXRNYXRjaChpdGVtcywgc3RyaW5naWZ5LCBxdWVyeSk7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoICE9IG51bGxcbiAgICAgICAgICAgID8gaXRlbXNcbiAgICAgICAgICAgIDogaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBtYXRjaGVyKGl0ZW0sIHF1ZXJ5LCBzdHJpbmdpZnkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlcjJkPFQ+KFxuICAgICAgICBpdGVtczogUmVhZG9ubHlBcnJheTxyZWFkb25seSBUW10+LFxuICAgICAgICBtYXRjaGVyOiBUdWlTdHJpbmdNYXRjaGVyPFQ+LFxuICAgICAgICBzdHJpbmdpZnk6IFR1aVN0cmluZ0hhbmRsZXI8VD4sXG4gICAgICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgKTogUmVhZG9ubHlBcnJheTxyZWFkb25seSBUW10+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBpdGVtcy5maW5kKChpdGVtKSA9PiB0aGlzLmdldE1hdGNoKGl0ZW0sIHN0cmluZ2lmeSwgcXVlcnkpICE9IG51bGwpO1xuXG4gICAgICAgIHJldHVybiBtYXRjaCAhPSBudWxsXG4gICAgICAgICAgICA/IGl0ZW1zXG4gICAgICAgICAgICA6IGl0ZW1zLm1hcCgoaW5uZXIpID0+IHRoaXMuZmlsdGVyRmxhdChpbm5lciwgbWF0Y2hlciwgc3RyaW5naWZ5LCBxdWVyeSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TWF0Y2g8VD4oXG4gICAgICAgIGl0ZW1zOiByZWFkb25seSBUW10sXG4gICAgICAgIHN0cmluZ2lmeTogVHVpU3RyaW5nSGFuZGxlcjxUPixcbiAgICAgICAgcXVlcnk6IHN0cmluZyxcbiAgICApOiBUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3Igd2hlbiB0dWktdGV4dGZpZWxkW211bHRpXSBpcyByZWFkeVxuICAgICAgICBpZiAoKHRoaXMuaG9zdCBhcyBhbnkpLnRhZ1ZhbGlkYXRvcikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtcy5maW5kKFxuICAgICAgICAgICAgKGl0ZW0pID0+IHN0cmluZ2lmeShpdGVtKS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBxdWVyeS50b0xvY2FsZUxvd2VyQ2FzZSgpLFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==