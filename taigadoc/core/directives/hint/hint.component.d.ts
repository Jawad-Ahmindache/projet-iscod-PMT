import { TuiHoveredService } from '@taiga-ui/cdk/directives/hovered';
import { TuiRectAccessor } from '@taiga-ui/core/classes';
import { TuiPositionService } from '@taiga-ui/core/services';
import { TuiHintDirective } from './hint.directive';
import { TuiHintPointer } from './hint-pointer.directive';
import * as i0 from "@angular/core";
export declare const TUI_HINT_PROVIDERS: (import("@angular/core").FactoryProvider | typeof TuiHoveredService | typeof TuiPositionService)[];
export declare class TuiHintComponent<C = any> {
    private readonly el;
    private readonly hover;
    private readonly vvs;
    private readonly viewport;
    protected readonly desktop: {
        value: string;
        params: {
            end: number;
            start: number;
        };
    };
    protected readonly options: import("@angular/animations").AnimationOptions;
    protected readonly pointer: TuiHintPointer | null;
    protected readonly accessor: TuiRectAccessor;
    protected readonly hint: TuiHintDirective<C>;
    protected readonly isMobile: boolean;
    protected readonly content: import("@angular/core").WritableSignal<import("@taiga-ui/polymorpheus").PolymorpheusContent<C>>;
    protected readonly appearance: string | null | undefined;
    constructor();
    protected onClick(target: HTMLElement): void;
    private apply;
    private update;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiHintComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiHintComponent<any>, "tui-hint", never, {}, {}, never, ["*"], true, never>;
}
