import type { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @deprecated use {@link TuiPopup} directive instead
 */
export declare class TuiDropdownPortal implements OnDestroy {
    private readonly template;
    private readonly service;
    private viewRef?;
    set tuiDropdown(show: boolean);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiDropdownPortal, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiDropdownPortal, "ng-template[tuiDropdown]", never, { "tuiDropdown": { "alias": "tuiDropdown"; "required": false; }; }, {}, never, never, true, never>;
}
