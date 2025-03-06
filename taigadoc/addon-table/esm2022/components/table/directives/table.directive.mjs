import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Directive, EventEmitter, inject, Input, Output, signal, ViewEncapsulation, } from '@angular/core';
import { WA_INTERSECTION_ROOT_MARGIN } from '@ng-web-apis/intersection-observer';
import { tuiProvide, tuiWithStyles } from '@taiga-ui/cdk/utils/miscellaneous';
import { tuiButtonOptionsProvider } from '@taiga-ui/core/components/button';
import { TUI_TEXTFIELD_OPTIONS } from '@taiga-ui/core/components/textfield';
import { tuiBadgeOptionsProvider } from '@taiga-ui/kit/components/badge';
import { tuiChipOptionsProvider } from '@taiga-ui/kit/components/chip';
import { tuiProgressOptionsProvider } from '@taiga-ui/kit/components/progress';
import { Subject } from 'rxjs';
import { TUI_TABLE_OPTIONS, TuiSortDirection } from '../table.options';
import { TuiStuck } from './stuck.directive';
import * as i0 from "@angular/core";
import * as i1 from "./stuck.directive";
class TuiTableStyles {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableStyles, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableStyles, isStandalone: true, selector: "ng-component", host: { classAttribute: "tui-table" }, ngImport: i0, template: '', isInline: true, styles: ["table[tuiTable]{border-collapse:separate}table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableStyles, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'tui-table',
                    }, styles: ["table[tuiTable]{border-collapse:separate}table[tuiTable] [tuiCell]{padding:0}table[tuiTable] [tuiTitle]{white-space:nowrap}table[tuiTable] [tuiTitle] tui-icon{font-size:1rem}table[tuiTable] [tuiSubtitle]{color:var(--tui-text-secondary)}table[tuiTable] [tuiTh] [tuiCell],table[tuiTable] [tuiTh] [tuiTitle]{font:inherit;color:inherit}\n"] }]
        }] });
class TuiTableDirective {
    constructor() {
        this.options = inject(TUI_TABLE_OPTIONS);
        this.cdr = inject(ChangeDetectorRef);
        this.nothing = tuiWithStyles(TuiTableStyles);
        this.columns = [];
        this.direction = this.options.direction;
        this.directionChange = new EventEmitter();
        this.sorterChange = new EventEmitter();
        this.appearance = signal('table');
        this.size = signal(this.options.size);
        this.cleaner = signal(false);
        // TODO: refactor to signal inputs after Angular update
        this.change$ = new Subject();
        this.sorter = () => 0;
    }
    set sizeSetter(size) {
        this.size.set(size);
    }
    updateSorterAndDirection(sorter) {
        if (this.sorter === sorter) {
            this.updateDirection(this.direction === TuiSortDirection.Asc
                ? TuiSortDirection.Desc
                : TuiSortDirection.Asc);
        }
        else {
            this.updateSorter(sorter);
            this.updateDirection(1);
        }
    }
    ngOnChanges() {
        this.change$.next();
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    updateSorter(sorter) {
        this.sorter = sorter || (() => 0);
        this.sorterChange.emit(this.sorter);
        this.change$.next();
    }
    updateDirection(direction) {
        this.direction = direction;
        this.directionChange.emit(this.direction);
        this.change$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiTableDirective, isStandalone: true, selector: "table[tuiTable]", inputs: { columns: "columns", direction: "direction", sizeSetter: ["size", "sizeSetter"], sorter: "sorter" }, outputs: { directionChange: "directionChange", sorterChange: "sorterChange" }, host: { properties: { "attr.data-size": "size()" } }, providers: [
            {
                provide: WA_INTERSECTION_ROOT_MARGIN,
                useValue: '10000px 10000px 10000px 0px',
            },
            tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTableDirective),
            tuiButtonOptionsProvider({ size: 's' }),
            tuiBadgeOptionsProvider({ size: 'm', appearance: 'neutral' }),
            tuiChipOptionsProvider({ size: 'xxs', appearance: 'neutral' }),
            tuiProgressOptionsProvider({ size: 's', color: 'var(--tui-text-action)' }),
        ], usesOnChanges: true, hostDirectives: [{ directive: i1.TuiStuck }], ngImport: i0 }); }
}
export { TuiTableDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiTableDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'table[tuiTable]',
                    providers: [
                        {
                            provide: WA_INTERSECTION_ROOT_MARGIN,
                            useValue: '10000px 10000px 10000px 0px',
                        },
                        tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTableDirective),
                        tuiButtonOptionsProvider({ size: 's' }),
                        tuiBadgeOptionsProvider({ size: 'm', appearance: 'neutral' }),
                        tuiChipOptionsProvider({ size: 'xxs', appearance: 'neutral' }),
                        tuiProgressOptionsProvider({ size: 's', color: 'var(--tui-text-action)' }),
                    ],
                    hostDirectives: [TuiStuck],
                    host: {
                        '[attr.data-size]': 'size()',
                    },
                }]
        }], propDecorators: { columns: [{
                type: Input
            }], direction: [{
                type: Input
            }], directionChange: [{
                type: Output
            }], sorterChange: [{
                type: Output
            }], sizeSetter: [{
                type: Input,
                args: ['size']
            }], sorter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYWRkb24tdGFibGUvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3RhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixNQUFNLEVBQ04saUJBQWlCLEdBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBRS9FLE9BQU8sRUFBQyxVQUFVLEVBQUUsYUFBYSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFFMUUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFFMUUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDN0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUU3QixPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7OztBQUUzQyxNQVVNLGNBQWM7K0dBQWQsY0FBYzttR0FBZCxjQUFjLCtHQVJOLEVBQUU7OzRGQVFWLGNBQWM7a0JBVm5CLFNBQVM7aUNBQ00sSUFBSSxZQUNOLEVBQUUsaUJBRUcsaUJBQWlCLENBQUMsSUFB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LEVBQUUsU0FBUyxFQUFDLENBQUM7WUFDNUQsMEJBQTBCLENBQUMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBQyxDQUFDO1NBQzNFOztTQU1RLGlCQUFpQjs0RkFBakIsaUJBQWlCO2tCQW5CN0IsU0FBUzttQkFBQztvQkFDUCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFO3dCQUNQOzRCQUNJLE9BQU8sRUFBRSwyQkFBMkI7NEJBQ3BDLFFBQVEsRUFBRSw2QkFBNkI7eUJBQzFDO3dCQUNELFVBQVUsQ0FBQyxxQkFBcUIsb0JBQW9CO3dCQUNwRCx3QkFBd0IsQ0FBQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQzt3QkFDckMsdUJBQXVCLENBQUMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsQ0FBQzt3QkFDM0Qsc0JBQXNCLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsQ0FBQzt3QkFDNUQsMEJBQTBCLENBQUMsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBQyxDQUFDO3FCQUMzRTtvQkFDRCxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQzFCLElBQUksRUFBRTt3QkFDRixrQkFBa0IsRUFBRSxRQUFRO3FCQUMvQjtpQkFDSjs4QkFVVSxPQUFPO3NCQURiLEtBQUs7Z0JBSUMsU0FBUztzQkFEZixLQUFLO2dCQUlVLGVBQWU7c0JBRDlCLE1BQU07Z0JBSVMsWUFBWTtzQkFEM0IsTUFBTTtnQkFXSSxVQUFVO3NCQURwQixLQUFLO3VCQUFDLE1BQU07Z0JBTU4sTUFBTTtzQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FmdGVyVmlld0luaXQsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIGluamVjdCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgc2lnbmFsLFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7V0FfSU5URVJTRUNUSU9OX1JPT1RfTUFSR0lOfSBmcm9tICdAbmctd2ViLWFwaXMvaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcbmltcG9ydCB0eXBlIHtUdWlDb21wYXJhdG9yfSBmcm9tICdAdGFpZ2EtdWkvYWRkb24tdGFibGUvdHlwZXMnO1xuaW1wb3J0IHt0dWlQcm92aWRlLCB0dWlXaXRoU3R5bGVzfSBmcm9tICdAdGFpZ2EtdWkvY2RrL3V0aWxzL21pc2NlbGxhbmVvdXMnO1xuaW1wb3J0IHt0dWlCdXR0b25PcHRpb25zUHJvdmlkZXJ9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB0eXBlIHtUdWlUZXh0ZmllbGRPcHRpb25zfSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL3RleHRmaWVsZCc7XG5pbXBvcnQge1RVSV9URVhURklFTERfT1BUSU9OU30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy90ZXh0ZmllbGQnO1xuaW1wb3J0IHR5cGUge1R1aVNpemVMLCBUdWlTaXplU30gZnJvbSAnQHRhaWdhLXVpL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHt0dWlCYWRnZU9wdGlvbnNQcm92aWRlcn0gZnJvbSAnQHRhaWdhLXVpL2tpdC9jb21wb25lbnRzL2JhZGdlJztcbmltcG9ydCB7dHVpQ2hpcE9wdGlvbnNQcm92aWRlcn0gZnJvbSAnQHRhaWdhLXVpL2tpdC9jb21wb25lbnRzL2NoaXAnO1xuaW1wb3J0IHt0dWlQcm9ncmVzc09wdGlvbnNQcm92aWRlcn0gZnJvbSAnQHRhaWdhLXVpL2tpdC9jb21wb25lbnRzL3Byb2dyZXNzJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7VFVJX1RBQkxFX09QVElPTlMsIFR1aVNvcnREaXJlY3Rpb259IGZyb20gJy4uL3RhYmxlLm9wdGlvbnMnO1xuaW1wb3J0IHtUdWlTdHVja30gZnJvbSAnLi9zdHVjay5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBzdHlsZVVybHM6IFsnLi90YWJsZS5zdHlsZS5sZXNzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAndHVpLXRhYmxlJyxcbiAgICB9LFxufSlcbmNsYXNzIFR1aVRhYmxlU3R5bGVzIHt9XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0YWJsZVt0dWlUYWJsZV0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBXQV9JTlRFUlNFQ1RJT05fUk9PVF9NQVJHSU4sXG4gICAgICAgICAgICB1c2VWYWx1ZTogJzEwMDAwcHggMTAwMDBweCAxMDAwMHB4IDBweCcsXG4gICAgICAgIH0sXG4gICAgICAgIHR1aVByb3ZpZGUoVFVJX1RFWFRGSUVMRF9PUFRJT05TLCBUdWlUYWJsZURpcmVjdGl2ZSksXG4gICAgICAgIHR1aUJ1dHRvbk9wdGlvbnNQcm92aWRlcih7c2l6ZTogJ3MnfSksXG4gICAgICAgIHR1aUJhZGdlT3B0aW9uc1Byb3ZpZGVyKHtzaXplOiAnbScsIGFwcGVhcmFuY2U6ICduZXV0cmFsJ30pLFxuICAgICAgICB0dWlDaGlwT3B0aW9uc1Byb3ZpZGVyKHtzaXplOiAneHhzJywgYXBwZWFyYW5jZTogJ25ldXRyYWwnfSksXG4gICAgICAgIHR1aVByb2dyZXNzT3B0aW9uc1Byb3ZpZGVyKHtzaXplOiAncycsIGNvbG9yOiAndmFyKC0tdHVpLXRleHQtYWN0aW9uKSd9KSxcbiAgICBdLFxuICAgIGhvc3REaXJlY3RpdmVzOiBbVHVpU3R1Y2tdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1thdHRyLmRhdGEtc2l6ZV0nOiAnc2l6ZSgpJyxcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUdWlUYWJsZURpcmVjdGl2ZTxUIGV4dGVuZHMgUGFydGlhbDxSZWNvcmQ8a2V5b2YgVCwgYW55Pj4+XG4gICAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBUdWlUZXh0ZmllbGRPcHRpb25zLCBPbkNoYW5nZXNcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnMgPSBpbmplY3QoVFVJX1RBQkxFX09QVElPTlMpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBub3RoaW5nID0gdHVpV2l0aFN0eWxlcyhUdWlUYWJsZVN0eWxlcyk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjb2x1bW5zOiBSZWFkb25seUFycmF5PHN0cmluZyB8IGtleW9mIFQ+ID0gW107XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBkaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHJlYWRvbmx5IGRpcmVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VHVpU29ydERpcmVjdGlvbj4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyByZWFkb25seSBzb3J0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFR1aUNvbXBhcmF0b3I8VD4gfCBudWxsPigpO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGFwcGVhcmFuY2UgPSBzaWduYWwoJ3RhYmxlJyk7XG4gICAgcHVibGljIHJlYWRvbmx5IHNpemUgPSBzaWduYWwodGhpcy5vcHRpb25zLnNpemUpO1xuICAgIHB1YmxpYyByZWFkb25seSBjbGVhbmVyID0gc2lnbmFsKGZhbHNlKTtcblxuICAgIC8vIFRPRE86IHJlZmFjdG9yIHRvIHNpZ25hbCBpbnB1dHMgYWZ0ZXIgQW5ndWxhciB1cGRhdGVcbiAgICBwdWJsaWMgcmVhZG9ubHkgY2hhbmdlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICBASW5wdXQoJ3NpemUnKVxuICAgIHB1YmxpYyBzZXQgc2l6ZVNldHRlcihzaXplOiBUdWlTaXplTCB8IFR1aVNpemVTKSB7XG4gICAgICAgIHRoaXMuc2l6ZS5zZXQoc2l6ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc29ydGVyOiBUdWlDb21wYXJhdG9yPFQ+ID0gKCkgPT4gMDtcblxuICAgIHB1YmxpYyB1cGRhdGVTb3J0ZXJBbmREaXJlY3Rpb24oc29ydGVyOiBUdWlDb21wYXJhdG9yPFQ+IHwgbnVsbCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zb3J0ZXIgPT09IHNvcnRlcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXJlY3Rpb24oXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IFR1aVNvcnREaXJlY3Rpb24uQXNjXG4gICAgICAgICAgICAgICAgICAgID8gVHVpU29ydERpcmVjdGlvbi5EZXNjXG4gICAgICAgICAgICAgICAgICAgIDogVHVpU29ydERpcmVjdGlvbi5Bc2MsXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTb3J0ZXIoc29ydGVyKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGlyZWN0aW9uKDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5nZSQubmV4dCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlU29ydGVyKHNvcnRlcjogVHVpQ29tcGFyYXRvcjxUPiB8IG51bGwpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zb3J0ZXIgPSBzb3J0ZXIgfHwgKCgpID0+IDApO1xuICAgICAgICB0aGlzLnNvcnRlckNoYW5nZS5lbWl0KHRoaXMuc29ydGVyKTtcbiAgICAgICAgdGhpcy5jaGFuZ2UkLm5leHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZURpcmVjdGlvbihkaXJlY3Rpb246IFR1aVNvcnREaXJlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmNoYW5nZSQubmV4dCgpO1xuICAgIH1cbn1cbiJdfQ==