import type { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare const TUI_HIGHLIGHT_OPTIONS: import("@angular/core").InjectionToken<{
    highlightColor: string;
}>, tuiHighlightOptionsProvider: (item: Partial<{
    highlightColor: string;
}> | import("@angular/core").ProviderToken<Partial<{
    highlightColor: string;
}>>) => import("@angular/core").FactoryProvider;
export declare class TuiHighlight implements OnChanges {
    private readonly el;
    private readonly renderer;
    private readonly doc;
    private readonly highlight;
    private readonly treeWalker;
    tuiHighlight: string;
    tuiHighlightColor: string;
    constructor();
    ngOnChanges(): void;
    protected get match(): boolean;
    private updateStyles;
    private indexOf;
    private setUpHighlight;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiHighlight, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiHighlight, "[tuiHighlight]", never, { "tuiHighlight": { "alias": "tuiHighlight"; "required": false; }; "tuiHighlightColor": { "alias": "tuiHighlightColor"; "required": false; }; }, {}, never, never, true, never>;
}
