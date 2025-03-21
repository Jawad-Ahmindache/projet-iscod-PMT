import type { OnDestroy } from '@angular/core';
import { TemplateRef } from '@angular/core';
import type { TuiHorizontalDirection } from '@taiga-ui/core/types';
import { PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import * as i0 from "@angular/core";
/**
 * @deprecated use {@link TuiDrawer} instead
 */
export declare class TuiSidebarDirective<T = Record<string, unknown>> extends PolymorpheusTemplate<T> implements OnDestroy {
    private readonly injector;
    private readonly service;
    private readonly component;
    private sidebarRef;
    direction: TuiHorizontalDirection;
    autoWidth: boolean;
    readonly content: TemplateRef<any>;
    set tuiSidebar(open: boolean);
    ngOnDestroy(): void;
    private show;
    private hide;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiSidebarDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TuiSidebarDirective<any>, "[tuiSidebar]", never, { "direction": { "alias": "tuiSidebarDirection"; "required": false; }; "autoWidth": { "alias": "tuiSidebarAutoWidth"; "required": false; }; "tuiSidebar": { "alias": "tuiSidebar"; "required": false; }; }, {}, never, never, true, never>;
}
