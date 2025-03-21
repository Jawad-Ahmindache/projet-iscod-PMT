import type { OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TuiDropdownDriver } from './dropdown.driver';
import * as i0 from "@angular/core";
import * as i1 from "@taiga-ui/cdk/directives/obscured";
import * as i2 from "@taiga-ui/cdk/directives/active-zone";
export declare class TuiDropdownOpen implements OnChanges {
    private readonly dropdownHost?;
    private readonly directive;
    private readonly el;
    private readonly obscured;
    private readonly dropdown;
    protected readonly sub: import("rxjs").Subscription;
    tuiDropdownEnabled: boolean;
    tuiDropdownOpen: boolean | '';
    readonly tuiDropdownOpenChange: EventEmitter<boolean>;
    readonly driver: TuiDropdownDriver;
    ngOnChanges(): void;
    toggle(open: boolean): void;
    protected onEsc(event: Event): void;
    protected onClick(target: HTMLElement): void;
    protected onArrow(event: KeyboardEvent, up: boolean): void;
    protected onKeydown({ key, target, defaultPrevented }: KeyboardEvent): void;
    private get host();
    private get editable();
    private get focused();
    private update;
    private drive;
    private focusDropdown;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDropdownOpen, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiDropdownOpen, "[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]", never, { "tuiDropdownEnabled": { "alias": "tuiDropdownEnabled"; "required": false; }; "tuiDropdownOpen": { "alias": "tuiDropdownOpen"; "required": false; }; }, { "tuiDropdownOpenChange": "tuiDropdownOpenChange"; }, ["dropdownHost"], never, true, [{ directive: typeof i1.TuiObscured; inputs: {}; outputs: {}; }, { directive: typeof i2.TuiActiveZone; inputs: { "tuiActiveZoneParent": "tuiActiveZoneParent"; }; outputs: { "tuiActiveZoneChange": "tuiActiveZoneChange"; }; }]>;
}
