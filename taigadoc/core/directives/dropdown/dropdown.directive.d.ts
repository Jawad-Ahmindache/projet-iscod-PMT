import type { AfterViewChecked, ComponentRef, OnChanges, OnDestroy } from '@angular/core';
import type { TuiContext } from '@taiga-ui/cdk/types';
import type { TuiRectAccessor, TuiVehicle } from '@taiga-ui/core/classes';
import type { TuiPortalItem } from '@taiga-ui/core/types';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
import * as i1 from "./dropdown.driver";
import * as i2 from "./dropdown-position.directive";
export declare class TuiDropdownDirective implements AfterViewChecked, OnDestroy, OnChanges, TuiPortalItem, TuiRectAccessor, TuiVehicle {
    private readonly refresh$;
    private readonly service;
    private readonly cdr;
    protected readonly sub: import("rxjs").Subscription;
    readonly el: HTMLElement;
    readonly type = "dropdown";
    readonly component: PolymorpheusComponent<any>;
    ref: import("@angular/core").WritableSignal<ComponentRef<unknown> | null>;
    content: PolymorpheusContent<TuiContext<() => void>>;
    set tuiDropdown(content: PolymorpheusContent<TuiContext<() => void>>);
    get position(): 'absolute' | 'fixed';
    ngAfterViewChecked(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    getClientRect(): DOMRect;
    toggle(show: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDropdownDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiDropdownDirective, "[tuiDropdown]:not(ng-container):not(ng-template)", ["tuiDropdown"], { "tuiDropdown": { "alias": "tuiDropdown"; "required": false; }; }, {}, never, never, true, [{ directive: typeof i1.TuiDropdownDriverDirective; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiDropdownPosition; inputs: {}; outputs: { "tuiDropdownDirectionChange": "tuiDropdownDirectionChange"; }; }]>;
}
