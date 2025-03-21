import type { OnChanges, OnInit } from '@angular/core';
import type { TuiStringHandler } from '@taiga-ui/cdk/types';
import { TuiIcons } from '@taiga-ui/core/directives/icons';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/core/directives/icons";
import * as i2 from "@taiga-ui/core/directives/appearance";
export declare class TuiNotification implements OnChanges, OnInit {
    private readonly options;
    protected readonly nothing: undefined;
    protected readonly icons: TuiIcons;
    appearance: "info" | "positive" | "negative" | "warning" | "neutral" | "accent" | "action-destructive" | "action-grayscale" | "action" | "flat-destructive" | "flat-grayscale" | "flat" | "floating" | "glass" | "icon" | "outline-destructive" | "outline-grayscale" | "outline" | "primary-destructive" | "primary-grayscale" | "primary" | "secondary-destructive" | "secondary-grayscale" | "secondary" | "textfield" | (Record<never, never> & string);
    icon: TuiStringHandler<string> | string;
    size: "m" | "l" | "s";
    ngOnInit(): void;
    ngOnChanges(): void;
    private refresh;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiNotification, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiNotification, "tui-notification,a[tuiNotification],button[tuiNotification]", never, { "appearance": { "alias": "appearance"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiWithIcons; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiWithAppearance; inputs: {}; outputs: {}; }]>;
}
