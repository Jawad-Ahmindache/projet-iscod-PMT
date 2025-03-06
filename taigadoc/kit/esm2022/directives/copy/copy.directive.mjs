import { DOCUMENT } from '@angular/common';
import { computed, Directive, inject, Input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tuiDirectiveBinding, tuiIsString } from '@taiga-ui/cdk/utils/miscellaneous';
import { TuiIcon } from '@taiga-ui/core/components/icon';
import { TuiTextfieldComponent } from '@taiga-ui/core/components/textfield';
import { TUI_APPEARANCE_OPTIONS, TuiWithAppearance, } from '@taiga-ui/core/directives/appearance';
import { TuiHintDirective } from '@taiga-ui/core/directives/hint';
import { TUI_COPY_TEXTS } from '@taiga-ui/kit/tokens';
import { map, startWith, Subject, switchMap, timer } from 'rxjs';
import { TUI_COPY_OPTIONS } from './copy.options';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/appearance";
import * as i2 from "@taiga-ui/core/directives/hint";
class TuiCopy {
    constructor() {
        this.options = inject(TUI_COPY_OPTIONS);
        this.copied$ = new Subject();
        this.doc = inject(DOCUMENT);
        this.textfield = inject(TuiTextfieldComponent);
        this.hint = tuiDirectiveBinding(TuiHintDirective, 'tuiHint', toSignal(inject(TUI_COPY_TEXTS).pipe(switchMap(([copy, copied]) => this.copied$.pipe(switchMap(() => timer(3000).pipe(map(() => copy), startWith(copied))), startWith(copy)))), { initialValue: '' }));
        this.icons = tuiDirectiveBinding(TuiIcon, 'icon', computed((size = this.textfield.options.size()) => tuiIsString(this.options.icon) ? this.options.icon : this.options.icon(size)));
        this.tuiCopy = '';
    }
    get disabled() {
        return !this.textfield.input?.nativeElement.value;
    }
    copy() {
        this.textfield.input?.nativeElement.select();
        this.doc.execCommand('copy');
        this.copied$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCopy, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: TuiCopy, isStandalone: true, selector: "tui-icon[tuiCopy]", inputs: { tuiCopy: "tuiCopy" }, host: { listeners: { "click": "copy()" }, properties: { "style.pointer-events": "disabled ? \"none\" : null", "style.opacity": "disabled ? \"var(--tui-disabled-opacity)\" : null", "style.border": "textfield.options.size() === \"s\" ? \"0.25rem solid transparent\" : null" }, styleAttribute: "cursor: pointer" }, providers: [
            {
                provide: TUI_APPEARANCE_OPTIONS,
                useValue: { appearance: 'icon' },
            },
        ], hostDirectives: [{ directive: i1.TuiWithAppearance }, { directive: i2.TuiHintDirective, inputs: ["tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"] }], ngImport: i0 }); }
}
export { TuiCopy };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TuiCopy, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'tui-icon[tuiCopy]',
                    providers: [
                        {
                            provide: TUI_APPEARANCE_OPTIONS,
                            useValue: { appearance: 'icon' },
                        },
                    ],
                    hostDirectives: [
                        TuiWithAppearance,
                        {
                            directive: TuiHintDirective,
                            inputs: ['tuiHintAppearance', 'tuiHintContext'],
                        },
                    ],
                    host: {
                        style: 'cursor: pointer',
                        '(click)': 'copy()',
                        '[style.pointer-events]': 'disabled ? "none" : null',
                        '[style.opacity]': 'disabled ? "var(--tui-disabled-opacity)" : null',
                        '[style.border]': 'textfield.options.size() === "s" ? "0.25rem solid transparent" : null',
                    },
                }]
        }], propDecorators: { tuiCopy: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9raXQvZGlyZWN0aXZlcy9jb3B5L2NvcHkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDbkYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFDSCxzQkFBc0IsRUFDdEIsaUJBQWlCLEdBQ3BCLE1BQU0sc0NBQXNDLENBQUM7QUFDOUMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRS9ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRWhELE1BeUJhLE9BQU87SUF6QnBCO1FBMEJxQixZQUFPLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkMsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDOUIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyQixjQUFTLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUMsU0FBSSxHQUFHLG1CQUFtQixDQUN6QyxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFFBQVEsQ0FDSixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUN2QixTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNiLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FDWCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUNaLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFDZixTQUFTLENBQUMsTUFBTSxDQUFDLENBQ3BCLENBQ0osRUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQ2xCLENBQ0osQ0FDSixFQUNELEVBQUMsWUFBWSxFQUFFLEVBQUUsRUFBQyxDQUNyQixDQUNKLENBQUM7UUFFaUIsVUFBSyxHQUFHLG1CQUFtQixDQUMxQyxPQUFPLEVBQ1AsTUFBTSxFQUNOLFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQzlDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQy9FLENBQ0osQ0FBQztRQUdLLFlBQU8sR0FBRyxFQUFFLENBQUM7S0FXdkI7SUFURyxJQUFjLFFBQVE7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQUVTLElBQUk7UUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOytHQTlDUSxPQUFPO21HQUFQLE9BQU8sd1pBdEJMO1lBQ1A7Z0JBQ0ksT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsUUFBUSxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzthQUNqQztTQUNKOztTQWlCUSxPQUFPOzRGQUFQLE9BQU87a0JBekJuQixTQUFTO21CQUFDO29CQUNQLFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLHNCQUFzQjs0QkFDL0IsUUFBUSxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzt5QkFDakM7cUJBQ0o7b0JBQ0QsY0FBYyxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakI7NEJBQ0ksU0FBUyxFQUFFLGdCQUFnQjs0QkFDM0IsTUFBTSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7eUJBQ2xEO3FCQUNKO29CQUNELElBQUksRUFBRTt3QkFDRixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixTQUFTLEVBQUUsUUFBUTt3QkFDbkIsd0JBQXdCLEVBQUUsMEJBQTBCO3dCQUNwRCxpQkFBaUIsRUFBRSxpREFBaUQ7d0JBQ3BFLGdCQUFnQixFQUNaLHVFQUF1RTtxQkFDOUU7aUJBQ0o7OEJBcUNVLE9BQU87c0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge2NvbXB1dGVkLCBEaXJlY3RpdmUsIGluamVjdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0b1NpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHt0dWlEaXJlY3RpdmVCaW5kaW5nLCB0dWlJc1N0cmluZ30gZnJvbSAnQHRhaWdhLXVpL2Nkay91dGlscy9taXNjZWxsYW5lb3VzJztcbmltcG9ydCB7VHVpSWNvbn0gZnJvbSAnQHRhaWdhLXVpL2NvcmUvY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7VHVpVGV4dGZpZWxkQ29tcG9uZW50fSBmcm9tICdAdGFpZ2EtdWkvY29yZS9jb21wb25lbnRzL3RleHRmaWVsZCc7XG5pbXBvcnQge1xuICAgIFRVSV9BUFBFQVJBTkNFX09QVElPTlMsXG4gICAgVHVpV2l0aEFwcGVhcmFuY2UsXG59IGZyb20gJ0B0YWlnYS11aS9jb3JlL2RpcmVjdGl2ZXMvYXBwZWFyYW5jZSc7XG5pbXBvcnQge1R1aUhpbnREaXJlY3RpdmV9IGZyb20gJ0B0YWlnYS11aS9jb3JlL2RpcmVjdGl2ZXMvaGludCc7XG5pbXBvcnQge1RVSV9DT1BZX1RFWFRTfSBmcm9tICdAdGFpZ2EtdWkva2l0L3Rva2Vucyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRoLCBTdWJqZWN0LCBzd2l0Y2hNYXAsIHRpbWVyfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtUVUlfQ09QWV9PUFRJT05TfSBmcm9tICcuL2NvcHkub3B0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgc2VsZWN0b3I6ICd0dWktaWNvblt0dWlDb3B5XScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IFRVSV9BUFBFQVJBTkNFX09QVElPTlMsXG4gICAgICAgICAgICB1c2VWYWx1ZToge2FwcGVhcmFuY2U6ICdpY29uJ30sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0RGlyZWN0aXZlczogW1xuICAgICAgICBUdWlXaXRoQXBwZWFyYW5jZSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlOiBUdWlIaW50RGlyZWN0aXZlLFxuICAgICAgICAgICAgaW5wdXRzOiBbJ3R1aUhpbnRBcHBlYXJhbmNlJywgJ3R1aUhpbnRDb250ZXh0J10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBob3N0OiB7XG4gICAgICAgIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyJyxcbiAgICAgICAgJyhjbGljayknOiAnY29weSgpJyxcbiAgICAgICAgJ1tzdHlsZS5wb2ludGVyLWV2ZW50c10nOiAnZGlzYWJsZWQgPyBcIm5vbmVcIiA6IG51bGwnLFxuICAgICAgICAnW3N0eWxlLm9wYWNpdHldJzogJ2Rpc2FibGVkID8gXCJ2YXIoLS10dWktZGlzYWJsZWQtb3BhY2l0eSlcIiA6IG51bGwnLFxuICAgICAgICAnW3N0eWxlLmJvcmRlcl0nOlxuICAgICAgICAgICAgJ3RleHRmaWVsZC5vcHRpb25zLnNpemUoKSA9PT0gXCJzXCIgPyBcIjAuMjVyZW0gc29saWQgdHJhbnNwYXJlbnRcIiA6IG51bGwnLFxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFR1aUNvcHkge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9ucyA9IGluamVjdChUVUlfQ09QWV9PUFRJT05TKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvcGllZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jID0gaW5qZWN0KERPQ1VNRU5UKTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSB0ZXh0ZmllbGQgPSBpbmplY3QoVHVpVGV4dGZpZWxkQ29tcG9uZW50KTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaGludCA9IHR1aURpcmVjdGl2ZUJpbmRpbmcoXG4gICAgICAgIFR1aUhpbnREaXJlY3RpdmUsXG4gICAgICAgICd0dWlIaW50JyxcbiAgICAgICAgdG9TaWduYWwoXG4gICAgICAgICAgICBpbmplY3QoVFVJX0NPUFlfVEVYVFMpLnBpcGUoXG4gICAgICAgICAgICAgICAgc3dpdGNoTWFwKChbY29weSwgY29waWVkXSkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3BpZWQkLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lcigzMDAwKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAoKCkgPT4gY29weSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0V2l0aChjb3BpZWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRXaXRoKGNvcHkpLFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAge2luaXRpYWxWYWx1ZTogJyd9LFxuICAgICAgICApLFxuICAgICk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaWNvbnMgPSB0dWlEaXJlY3RpdmVCaW5kaW5nKFxuICAgICAgICBUdWlJY29uLFxuICAgICAgICAnaWNvbicsXG4gICAgICAgIGNvbXB1dGVkKChzaXplID0gdGhpcy50ZXh0ZmllbGQub3B0aW9ucy5zaXplKCkpID0+XG4gICAgICAgICAgICB0dWlJc1N0cmluZyh0aGlzLm9wdGlvbnMuaWNvbikgPyB0aGlzLm9wdGlvbnMuaWNvbiA6IHRoaXMub3B0aW9ucy5pY29uKHNpemUpLFxuICAgICAgICApLFxuICAgICk7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0dWlDb3B5ID0gJyc7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIXRoaXMudGV4dGZpZWxkLmlucHV0Py5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb3B5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRleHRmaWVsZC5pbnB1dD8ubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcbiAgICAgICAgdGhpcy5kb2MuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgdGhpcy5jb3BpZWQkLm5leHQoKTtcbiAgICB9XG59XG4iXX0=