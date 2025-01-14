import * as i0 from "@angular/core";
export declare class TuiTabBarItem {
    protected readonly options: import("@angular/animations").AnimationOptions;
    icon: string;
    badge?: number | null;
    protected format(value: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TuiTabBarItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TuiTabBarItem, "button[tuiTabBarItem], a[tuiTabBarItem]", never, { "icon": { "alias": "icon"; "required": false; }; "badge": { "alias": "badge"; "required": false; }; }, {}, never, ["*"], true, never>;
}
