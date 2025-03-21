import type { OnDestroy } from '@angular/core';
import { TuiActiveZone } from '@taiga-ui/cdk/directives/active-zone';
import type { TuiRectAccessor, TuiVehicle } from '@taiga-ui/core/classes';
import type { TuiPortalItem } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
import * as i1 from "./hint-driver.directive";
import * as i2 from "./hint-hover.directive";
import * as i3 from "./hint-position.directive";
export declare class TuiHintDirective<C> implements OnDestroy, TuiPortalItem<C>, TuiRectAccessor, TuiVehicle {
    private readonly service;
    context?: C;
    appearance: string;
    content: import("@angular/core").WritableSignal<PolymorpheusContent<C>>;
    component: PolymorpheusComponent<any>;
    readonly el: HTMLElement;
    readonly activeZone?: TuiActiveZone | null | undefined;
    readonly type = "hint";
    set tuiHint(content: PolymorpheusContent<C>);
    ngOnDestroy(): void;
    getClientRect(): DOMRect;
    toggle(show: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiHintDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiHintDirective<any>, "[tuiHint]:not(ng-container):not(ng-template)", never, { "context": { "alias": "tuiHintContext"; "required": false; }; "appearance": { "alias": "tuiHintAppearance"; "required": false; }; "tuiHint": { "alias": "tuiHint"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiHintDriver; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiHintHover; inputs: { "tuiHintHideDelay": "tuiHintHideDelay"; "tuiHintShowDelay": "tuiHintShowDelay"; }; outputs: {}; }, { directive: typeof i3.TuiHintPosition; inputs: { "tuiHintDirection": "tuiHintDirection"; }; outputs: { "tuiHintDirectionChange": "tuiHintDirectionChange"; }; }]>;
}
