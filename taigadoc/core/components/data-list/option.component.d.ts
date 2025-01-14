import type { OnDestroy, TemplateRef } from '@angular/core';
import type { TuiContext } from '@taiga-ui/cdk/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/icons";
export declare class TuiOption<T = unknown> implements OnDestroy {
    private readonly isMobile;
    private readonly el;
    private readonly dataList;
    private readonly host;
    protected readonly content: PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>>;
    protected readonly dropdown: import("@angular/core").WritableSignal<import("@angular/core").ComponentRef<unknown> | null> | undefined;
    disabled: boolean;
    value?: T;
    ngOnDestroy(): void;
    protected onClick(): void;
    protected onMouseMove(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiOption<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiOption<any>, "button[tuiOption], a[tuiOption], label[tuiOption]", never, { "disabled": { "alias": "disabled"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, [{ directive: typeof i1.TuiWithIcons; inputs: {}; outputs: {}; }]>;
}
